import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  public messages: any;

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        content: 'some message',
        user: 'John'
      },
      {
        content: 'some message 2',
        user: 'John'
      },
      {
        content: 'some message 3',
        user: 'John'
      }
    ]

  }

}
