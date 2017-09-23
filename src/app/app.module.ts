import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AppRouting } from './routes/app.routing';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
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
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    HttpModule
  ],
  providers: [HttpService, MessageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
