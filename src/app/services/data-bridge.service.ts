import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DataBridgeService {
  private eventListener = new Subject<any>();

  constructor() { }
  
  eventListen(): Observable<any> {
    return this.eventListener.asObservable();
  }
  
  addMessage() {
    this.eventListener.next()
  }

}
