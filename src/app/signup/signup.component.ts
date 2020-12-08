import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {first} from 'rxjs/operators';
import {MessageService} from '../message.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private logIn: MatDialog,
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phone: ''
    });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(userPassword) {

    console.log(userPassword);
    this.userService.register(userPassword)
      .pipe(first())
      .subscribe(
        () => {
          console.log('Registration was successful');
          this.logIn.closeAll();
          this.logIn.open(LoginComponent);
        },
        error => {
          console.log('Registration unsuccessful');
        });
  }
}
