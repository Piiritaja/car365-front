import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private componentId = 0;
  private userId;
  private userRole;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.userRole = this.authenticationService.currentUserValue.role;
    this.userId = this.authenticationService.currentUserValue.id;
  }

  btnClick(id): void {
    this.componentId = id;
  }

  getBtnComponent(): number {
    return this.componentId;
  }

  getUserRole(): string {
    return this.userRole;
  }

  getUserId(): string {
    return this.userId;
  }
}
