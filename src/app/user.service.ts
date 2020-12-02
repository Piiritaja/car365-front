import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserPassword} from './user-password';
import {Observable} from 'rxjs';
import {LoginDetails} from './loginDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/user';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  register(userPassword: UserPassword): Observable<any> {
    return this.http.post<UserPassword>(this.usersUrl + '/register', userPassword, this.httpOptions);
  }

  login(userPassword: UserPassword): Observable<LoginDetails> {
    return this.http.post<LoginDetails>(this.usersUrl + '/login', userPassword, this.httpOptions);
  }
}
