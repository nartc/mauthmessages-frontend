import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlertService } from 'angular-sweetalert-service';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { AppRouting } from './routes/app.routing';
import { AuthService } from './services/auth.service';
import { DataBridgeService } from './services/data-bridge.service';
import { ErrorService } from './services/error.service';
import { HttpService } from './services/http.service';
import { LocalStorageService } from './services/local-storage.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageComponent,
    MessagesListComponent,
    MessageInputComponent,
    AuthenticationComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    HttpModule
  ],
  providers: [
    HttpService, 
    MessageService, 
    AuthService, 
    LocalStorageService, 
    AuthGuard, 
    LoginGuard, 
    DataBridgeService,
    SweetAlertService,
    ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
