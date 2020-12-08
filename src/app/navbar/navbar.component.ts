import {Component, OnInit, ViewChild} from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public signIn: MatDialog,
              public signUp: MatDialog,
              private authenticationService: AuthenticationService) {
  }

  tab = 1;

  isLoggedIn(): boolean {
    return localStorage.length === 0;
  }

  logout(): void {
    this.authenticationService.logout();
  }

  openSignUp(): void {
    this.signUp.open(SignupComponent);
  }

  openSignIn(): void {
    this.signIn.open(LoginComponent);
  }
  ngOnInit(): void {
  }
}
