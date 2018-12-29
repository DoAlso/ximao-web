import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user/user.service';
import {User} from '../../model/user';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  users: User[];

  ngOnInit(): void {
    // 默认加载一次防止二次请求
    this.login('XX', 'XX');
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private message: NzMessageService) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    this.login(this.validateForm.get('userName').value, this.validateForm.get('password').value);
  }

  login(account: string, password: string): void {
     this.userService.getUserByAccount(account)
       .subscribe(users => this.users = users);
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }




}
