import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public signIn: MatDialog, public signUp: MatDialog) {}
  // tslint:disable-next-line:typedef
  openSignUp() {
    this.signUp.open(SignupComponent);
  }
  // tslint:disable-next-line:typedef
  openSignIn() {
    this.signIn.open(LoginComponent);
  }
  ngOnInit(): void {
  }
}
