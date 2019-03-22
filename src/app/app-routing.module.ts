import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {ContainerComponent} from './component/container/container.component';
import {FilesComponent} from './component/files/files.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data: {title: '登录'}},
  { path: 'home', component: ContainerComponent, data: {title: '管理系统首页'}},
  { path: 'upload', component: FilesComponent, data: {}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
