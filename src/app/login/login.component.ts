import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private signIn: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  openSignUp(): void {
    this.signIn.open(SignupComponent);
  }
}
