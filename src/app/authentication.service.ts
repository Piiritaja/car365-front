import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginDetails} from './loginDetails';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<LoginDetails>;
  public currentUser: Observable<LoginDetails>;

  constructor(private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<LoginDetails>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginDetails {
    return this.currentUserSubject ? this.currentUserSubject.value : undefined;
  }

  login(userPassword): Observable<LoginDetails> {
    return this.userService.login(userPassword)
      .pipe(map((user: LoginDetails) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
