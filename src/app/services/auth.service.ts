import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';

import { User } from '../models/user';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService {
  public user: User;

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) { }

  addUser(user: User): Observable<any> {
    const body = {user};
    return this.httpService.post('/users/addUser', body, {'Content-Type':'application/json'});
  }

  getUserById(id: string): Observable<any> {
    return this.httpService.get('/users/getUserById/'+id, {});
  }

  signIn(credentials): Observable<any> {
    const body = {credentials};
    return this.httpService.post('/users/signin', body, {'Content-Type':'application/json'});
  }

  storeUserData(token: any, user: User): void {
    this.localStorageService.saveValueWithKey('token', token);
    this.localStorageService.saveValueWithKey('user', JSON.stringify(user));
  }

  loadToken(): string{
    return this.localStorageService.fetchValueFromKey('token');
  }

  loadCurrentUser(): User {
    return JSON.parse(this.localStorageService.fetchValueFromKey('user'));
  }

  isSignedIn(): boolean {
    return tokenNotExpired('token');
  }

  signOut(): void {
    this.localStorageService.clearAll();
  }

}
