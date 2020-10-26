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

  tab = 1;

  openSignUp(): void {
    this.signUp.open(SignupComponent);
  }

  openSignIn(): void {
    this.signIn.open(LoginComponent);
  }
  ngOnInit(): void {
  }
}
