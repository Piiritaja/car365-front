import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignupComponent} from '../signup/signup.component';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../user.service';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;

  constructor(
    private signIn: MatDialog,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
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
    console.log(userPassword);
    this.authenticationService.login(userPassword)
      .pipe(first())
      .subscribe(
        (user) => {
          console.log(user);
          console.log('Login successful');
          this.signIn.closeAll();
        },
        error => {
          console.log('Login unsuccessful');
        });
  }
}
