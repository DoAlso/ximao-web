import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  constructor(private fb: FormBuilder,
              private titleService: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private message: NzMessageService) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if (this.validateForm.get('userName').value === 'admin' && this.validateForm.get('password').value === '123456') {
      this.createMessage('success', 'Login Success!');
      this.router.navigate(['home/']);
    } else {
      this.createMessage('error', 'Login Error!');
    }
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }

}
