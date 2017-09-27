import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Rx';
import { Message } from '../models/message';
import { EventEmitter, Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class MessageService {

  public message: Message;
  public messages: Array<Message> = [];
  public messageIsEdit: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private localStorageService: LocalStorageService,
    private httpService: HttpService
  ) { }

  addMessages(message: Message): Observable<any> {
    const body = {message};
    const token = this.localStorageService.fetchValueFromKey('token') ? this.localStorageService.fetchValueFromKey('token') : '';
    return this.httpService.post('/messages/addMessage', body, {'Authorization': token, 'Content-Type':'application/json'});
  }

  getMessages(): Observable<any> {
    return this.httpService.get('/messages/messages', {});
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message): Observable<any> {
    const body = {message};
    const token = this.localStorageService.fetchValueFromKey('token') ? this.localStorageService.fetchValueFromKey('token') : '';
    return this.httpService.patch('/messages/editMessage/'+message.messageId, body, {'Authorization': token, 'Content-Type':'application/json'});
  }

  deleteMessage(message: Message): Observable<any> {
    const token = this.localStorageService.fetchValueFromKey('token') ? this.localStorageService.fetchValueFromKey('token') : '';
    return this.httpService.delete('/messages/deleteMessage/'+message.messageId, {'Authorization': token});
  }

  

}
