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
  errorMessage: string;

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
      passwordConfirm: '',
      phone: ''
    });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
  }

  passwordCheck(): boolean {
    return this.checkoutForm.controls.password.value !== this.checkoutForm.controls.passwordConfirm.value;
  }

  // tslint:disable-next-line:typedef
  onSubmit(userPassword) {
    if (this.passwordCheck()) {
      this.errorMessage = 'Passwords dont match!';
    } else if (this.checkoutForm.controls.email.value === ''
      || this.checkoutForm.controls.firstName.value === ''
      || this.checkoutForm.controls.lastName.value === ''
      || this.checkoutForm.controls.password.value === ''
      || this.checkoutForm.controls.phone.value === '') {
      this.errorMessage = 'Fill all fields!';
    } else {
      this.userService.register(userPassword)
        .pipe(first())
        .subscribe(
          () => {
            this.errorMessage = 'Registration was successful';
            this.logIn.closeAll();
            this.logIn.open(LoginComponent);
          },
          error => {
            if (error === 'Internal Server Error') {
              this.errorMessage = 'This e-mail already exist';
            } else {
              this.errorMessage = 'Registration was unsuccessful!';
            }
          });
    }
  }
}
