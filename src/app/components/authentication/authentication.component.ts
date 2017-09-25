import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    console.log('Signing out...');

    setTimeout(() => {
      console.log('Signed out')
      this.authService.signOut();
      this.router.navigate(['/auth/signin']);
    }, 500)
    
  }

}
