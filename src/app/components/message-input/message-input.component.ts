import { NgForm } from '@angular/forms/src/directives';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Message } from '../../models/message';
import { DataBridgeService } from '../../services/data-bridge.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { MessageService } from '../../services/message.service';
import { SweetAlertService } from 'angular-sweetalert-service/js';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  @Output() onAddClick: EventEmitter<any> = new EventEmitter<any>();
  
  public message: Message;

  constructor(
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private dataBridgeService: DataBridgeService,
    private alertService: SweetAlertService
  ) { }

  ngOnInit() {
    this.messageService.messageIsEdit.subscribe(
      (data: any) => {
        this.message = data;
        document.getElementById('content').focus();
      }
    );
  }

  onAddMessageSubmit(form: NgForm) {
    
    const newMessageContent = form.value; 
    const messageEditContent = form.value.content;
    

    if(this.message) {
      //Edit
      this.message.content = messageEditContent;
      this.messageService.updateMessage(this.message)
        .subscribe(
          (data: any): void => {
            console.log('Data coming back from updating message...:', data);
          }
        );
      this.message = null;
    } else {
      //Create
      this.messageService.addMessages(newMessageContent)
      .subscribe(
        (data: any): void => {
          console.log('Data coming back from adding a message...:', data);
          if(data.success) {
            console.log(data.msg);
            console.log('Message: ', data.message);
            this.dataBridgeService.addMessage();
          } else {
            console.log(data.msg);
          }
        },
        (err: any): void => {
          console.log('Error: ', err);
        }
      ); 
    }

    form.resetForm();
  }

  onClearClick(form: NgForm) {
    this.message = null;
    form.resetForm();
  }

}
