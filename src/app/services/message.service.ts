import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Rx';
import { Message } from '../models/message';
import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class MessageService {

  public message: Message;
  public messages: Array<Message> = [
    {
      content: 'some message',
      user: 'John 1'
    },
    {
      content: 'some message 2',
      user: 'John 2'
    },
    {
      content: 'some message 3',
      user: 'John 3'
    }
  ];

  constructor(
    private localStorageService: LocalStorageService,
    private httpService: HttpService
  ) { }

  getMessages() {
    return this.messages;
  }

}
