import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile-page-settings',
  templateUrl: './profile-page-settings.component.html',
  styleUrls: ['./profile-page-settings.component.css']
})
export class ProfilePageSettingsComponent implements OnInit {
  showPass = false;
  firstPassword = '';
  secondPassword = '';
  mailAddress = new FormControl();
  newMail = '';

  constructor() { }

  ngOnInit(): void {

  }
}
