import { Component, OnInit } from '@angular/core';

import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  onAddMessageSubmit(form) {
    const newMessageContent = form.value;
    this.messageService.addMessages(newMessageContent)
      .subscribe(
        (data: any): void => {
          console.log('Data coming back from adding a message...:', data);
          if(data.success) {
            console.log(data.msg);
            console.log('Message: ', data.message);
          } else {
            console.log(data.msg);
          }
        },
        (err: any): void => {
          console.log('Error: ', err._body);
        }
      );
  }

}
