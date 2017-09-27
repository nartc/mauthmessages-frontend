import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Message } from '../../models/message';
import { LocalStorageService } from '../../services/local-storage.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() onDeleteClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private messageService: MessageService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

  onEditClick() {
    this.messageService.editMessage(this.message);
  }

  onDeleteClick(message: Message) {
    this.onDeleteClickEvent.emit(message);
  }

  belongsToUser() {
    const user = this.localStorageService.fetchValueFromKey('user') ? JSON.parse(this.localStorageService.fetchValueFromKey('user')) : null;

    if(user) {
      return user._id == this.message.userId;
    }
  }

}
