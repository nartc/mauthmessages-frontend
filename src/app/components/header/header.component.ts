import { LocalStorageService } from '../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private currentUser: string = null;
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.localStorageService.localStorageIsClear.subscribe(
      (data:any): void => {
        this.getCurrentUser();
      }
    );
  }

  getCurrentUser() {
    const user = this.localStorageService.fetchValueFromKey('user') ? JSON.parse(this.localStorageService.fetchValueFromKey('user')) : null;
    
        this.currentUser = user ? user.firstName : null;
  }

}
