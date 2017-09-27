import { DataBridgeService } from '../../services/data-bridge.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  public messages: Array<any>;
  public transformedMessages: Array<Message> = [];
  public transformMessage: Message;


  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private dataBridgeService: DataBridgeService
  ) { 
    this.dataBridgeService.eventListen().subscribe(
      (data: any) => {
        console.log("Data emitted from add message click...:", data);
        this.transformedMessages.splice(0, this.transformedMessages.length);
        this.getMessages();
      }
    );
  }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messageService.getMessages()
    .subscribe(
      (data: any): void => {
        console.log('Data coming back from getting messages...:', data);
        if(data.success) {
          console.log(data.msg);
          this.messages = data.messages;
          this.messages.forEach(message => {
            this.transformMessage = {
              content: message.content,
              user: message.user.firstName,
              userId: message.user._id,
              messageId: message._id
            }
            this.transformedMessages.push(this.transformMessage);
          });
        } else {
          console.log(data.msg);
        }
      }
    );
  }

  onDeleteClick(event) {
    
    this.transformedMessages.splice(this.transformedMessages.indexOf(event), 1);
    this.messageService.deleteMessage(event)
      .subscribe(
        (data: any): void => {
          console.log('Data coming back from delete message...:', data);
        }
      );
  }

}
