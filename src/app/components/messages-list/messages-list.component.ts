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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe(
        (data: any): void => {
          console.log('Data coming back from getting messages...:', data);
          if(data.success) {
            console.log(data.msg);
            this.messages = data.messages;
            this.messages.forEach(message => {
              this.authService.getUserById(message.user)
                .subscribe(
                  (data: any): void => {
                    console.log('Data coming back from fetching single user...:', data);
                    if(data.success) {
                      this.transformMessage = {
                        content: message.content,
                        user: data.obj,
                        userId: data.obj._id,
                        messageId: message._id
                      }
                      this.transformedMessages.push(this.transformMessage);
                    }
                  }
                );
            });
          } else {
            console.log(data.msg);
          }
        }
      );

  }

}
