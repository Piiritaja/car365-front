import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignupComponent} from '../signup/signup.component';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../user.service';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  errorMessage: string;

  constructor(
    private signIn: MatDialog,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  openSignUp(): void {
    this.signIn.open(SignupComponent);
  }

  // tslint:disable-next-line:typedef
  onSubmit(userPassword) {
    if (this.checkoutForm.controls.email.value === '' || this.checkoutForm.controls.password.value === '') {
      this.errorMessage = 'Fill all input fields';
    } else {
      this.authenticationService.login(userPassword)
        .pipe(first())
        .subscribe(
          (user) => {
            this.errorMessage = 'Login successful';
            this.signIn.closeAll();
          },
          error => {
            if (error === 'Unauthorized') {
              this.errorMessage = 'Wrong e-mail or password';
            } else {
              this.errorMessage = 'Login unsuccessful';
            }
          });
     }
  }
}
