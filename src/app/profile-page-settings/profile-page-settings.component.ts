import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-profile-page-settings',
  templateUrl: './profile-page-settings.component.html',
  styleUrls: ['./profile-page-settings.component.css']
})
export class ProfilePageSettingsComponent implements OnInit {

  owner = {email: null, role: null, phone: null, firstName: null, lastName: null, id: null, bookmarks: null};
  mailForm = new FormControl();
  newMail = '';
  phoneForm = new FormControl();
  newPhone = '';
  nameForm = new FormControl();
  newFirstName = '';
  newLastName = '';

  @Input() userId: string;

  constructor(private authService: AuthenticationService, private userService: UserService) {
  }

  changeMail(value: string): void {
    this.owner.email = value;
  }

  changePhone(value: string): void {
    this.owner.phone = value;
  }

  changeName(fName: string, lName: string): void {
    this.owner.firstName = fName;
    this.owner.lastName = lName;
  }

  canUpgrade(): boolean {
    return this.owner.role === 'USER';
  }

  upgradeToPremium(): void {
    this.owner.role = 'PREMIUM';
    this.userService.updateUser(this.authService.getUserId, this.owner).subscribe(owner => {
      this.owner = owner;
    });
  }

  saveChanges(): void {
    this.userService.updateUser(this.authService.getUserId, this.owner);
  }

  isValidPasswordChange(firstPassword, secondPassword: string): boolean {
    return (firstPassword !== secondPassword || firstPassword.length < 6);
  }

  isValidMailChange(newMail: string): boolean {
    return (this.mailForm.invalid || newMail === '');
  }

  isValidPhoneChange(newPhone: string): boolean {
    return (this.phoneForm.invalid || newPhone === '');
  }

  isValidNameChange(fName: string, lName: string): boolean {
    return (this.nameForm.invalid || fName === '' || lName === '');
  }

  ngOnInit(): void {
    this.userService.getUser(this.authService.getUserId).subscribe(data => {
      this.owner.id = data.id;
      this.owner.role = data.role;
      this.owner.firstName = data.firstName;
      this.owner.lastName = data.lastName;
      this.owner.email = data.email;
      this.owner.phone = data.phone;
      this.owner.bookmarks = data.bookmarks;
    });
  }
}
