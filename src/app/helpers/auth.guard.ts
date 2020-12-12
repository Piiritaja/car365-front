import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../authentication.service";
import {SignupComponent} from "../signup/signup.component";
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private logIn: MatDialog
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.logIn.open(LoginComponent);
    return false;
  }
}
