import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';
import { HttpService } from './http.service';

@Injectable()
export class AuthService {
  public user: User;

  constructor(private httpService: HttpService) { }

  addUser(user: User): Observable<any> {
    const body = {user};
    return this.httpService.post('/users/addUser', body, {'Content-Type':'application/json'});
  }

}
