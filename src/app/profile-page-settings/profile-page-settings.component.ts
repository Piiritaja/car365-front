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

  owner = {email: null, password: null, phone: null, firstName: null, lastName: null, id: null, bookmarks: null};
  showPass = false;
  firstPassword = '';
  secondPassword = '';
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

  changePassword(value: string): void {
    this.owner.password = value;
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

  saveChanges(): void {
    this.userService.updateUser(this.authService.currentUserValue.id, this.owner);
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
    this.userService.getUser(this.authService.currentUserValue.id).subscribe(data => {
      this.owner.id = data.id;
      this.owner.firstName = data.firstName;
      this.owner.lastName = data.lastName;
      this.owner.email = data.email;
      this.owner.phone = data.phone;
      this.owner.bookmarks = data.bookmarks;
    });
  }

}
