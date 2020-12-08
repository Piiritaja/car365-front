import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile-page-settings',
  templateUrl: './profile-page-settings.component.html',
  styleUrls: ['./profile-page-settings.component.css']
})
export class ProfilePageSettingsComponent implements OnInit {

  owner = {email: 'juku@taltech.ee', password: 'parool', phone: '54541010', name: 'JukuViljandist'};
  showPass = false;
  firstPassword = '';
  secondPassword = '';
  mailForm = new FormControl();
  newMail = '';
  newPhone = '';
  nameForm = new FormControl();
  newName = '';

  @Input() userId: string;

  constructor() {
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

  changeName(value: string): void {
    this.owner.name = value;
  }

  isValidPasswordChange(firstPassword, secondPassword: string): boolean {
    return (firstPassword !== secondPassword || firstPassword.length < 6);
  }

  isValidMailChange(newMail: string): boolean {
    return (this.mailForm.invalid || newMail === '');
  }

  isValidPhoneChange(newPhone: string): boolean {
    return (newPhone.length < 3 || newPhone.length > 9 || newPhone === '');
  }

  isValidNameChange(newName: string): boolean {
    return (this.nameForm.invalid || newName === '');
  }

  ngOnInit(): void {
  }

}
