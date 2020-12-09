import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-page-settings',
  templateUrl: './profile-page-settings.component.html',
  styleUrls: ['./profile-page-settings.component.css']
})
export class ProfilePageSettingsComponent implements OnInit {

  owner = {email: null, password: null, phone: null, firstName: null, lastName: null};
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

  constructor(private authenticationService: AuthenticationService, private http: HttpClient) {
    this.http.get<object>('api/user/' + authenticationService.currentUserValue.id).subscribe(data => {
      // @ts-ignore
      this.owner.firstName = data.firstName;
      // @ts-ignore
      this.owner.lastName = data.lastName;
      // @ts-ignore
      this.owner.email = data.email;
      // @ts-ignore
      this.owner.phone = data.phone;
    });
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
  }

}
