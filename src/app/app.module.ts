import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {ContainerComponent} from './component/container/container.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {LoginComponent} from './component/login/login.component';
import {AppRoutingModule} from './/app-routing.module';
import {InMemoryMenuService} from './mock/mock-service';
import { FilesComponent } from './component/files/files.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LoginComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryMenuService),
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
