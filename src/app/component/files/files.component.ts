import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile, UploadXHRArgs} from 'ng-zorro-antd';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {forkJoin} from 'rxjs/index';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private http: HttpClient, private msg: NzMessageService) {}
  obsKeys:string[] = [];
  faceSetName:string = 'jr_factory';
  faceBucketName:string = 'hoolink-bucket';
  faceLabelId:string;
  auxiliaryFace():void{
    const params = {
      "faceSetName":this.faceSetName,
      "faceBucketName":this.faceBucketName,
      "faceLabelId":this.faceLabelId,
      "faceObskeys":this.obsKeys
    };
    console.log(params);
    this.http.post("http://192.168.1.29:8111/auxiliaryFace",params).subscribe(response=> {
      console.log(response);
    });
  }

  ngOnInit() {
  }

  customReq = (item: UploadXHRArgs) => {
    // 构建一个 FormData 对象，用于存储文件或其他参数
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('file', item.file as any);
    const req = new HttpRequest('POST', item.action, formData, {
      reportProgress : true,
      withCredentials: false
    });
    // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
    return this.http.request(req).subscribe((event: HttpEvent<{}>) => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total > 0) {
          // tslint:disable-next-line:no-any
          (event as any).percent = event.loaded / event.total * 100;
        }
        // 处理上传进度条，必须指定 `percent` 属性来表示进度

        item.onProgress(event, item.file);
      } else if (event instanceof HttpResponse) {
        this.obsKeys.push(event.body['data'].objectKey);
        // 处理成功
        item.onSuccess(event.body, item.file, event);
      }
    }, (err) => {
      // 处理失败
      item.onError(err, item.file);
    });
  };

  removeItem = (file:UploadFile) => {
    this.obsKeys.splice(this.obsKeys.indexOf("faces/2/"+file.name),1);
    return true;
  }


  customBigReqV1 = (item: UploadXHRArgs) =>{
      const partETags = new Array();
      // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
      return this.http.post("http://192.168.1.29:8111/claimUploadId",{"fileName":item.file.name},{withCredentials:false}).subscribe(response => {
          const  uploadId = response['data'];
          const size = item.file.size;
          const chunkSize = 196608;
          const maxChunk = Math.ceil(size / chunkSize);
          const reqs = Array(maxChunk).fill(0).map((v: {}, index: number) => {
            const start = index * chunkSize;
            let end = start + chunkSize;
            if (size - end < 0) {
              end = size;
            }
            const formData = new FormData();
            formData.append('file', item.file.slice(start,end));
            formData.append('partNum', index.toString());
            formData.append("uploadId",uploadId);
            formData.append("fileName",item.file.name);
            const req = new HttpRequest('POST', item.action, formData, {
              withCredentials: false
            });
            return this.http.request(req);
          });

          return forkJoin(...reqs).subscribe(resules => {
            resules.map((v: {}, index: number) =>{
              partETags.push(resules[index].body['data']);
            });
            const params = {
              "uploadId":uploadId,
              "fileName":item.file.name,
              "partETags":partETags
            };
            this.http.post("http://192.168.1.29:8111/completeMultipartUpload",params,{withCredentials:false}).subscribe(response=> {
              console.log(response);
            });
            // 处理成功
            item.onSuccess({}, item.file, event);
          }, (err) => {
            // 处理失败
            item.onError(err, item.file);
          });
      });
    }
}
