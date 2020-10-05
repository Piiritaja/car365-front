import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private componentId = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  btnClick(id): void {
    this.componentId = id;
  }

  getBtnComponent(): number {
    return this.componentId;
  }
}
