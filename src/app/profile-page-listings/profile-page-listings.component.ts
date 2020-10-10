import {Component, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-profile-page-listings',
  templateUrl: './profile-page-listings.component.html',
  styleUrls: ['./profile-page-listings.component.css']
})
export class ProfilePageListingsComponent implements OnInit {
  constructor() {
  }

  listingItems: ListingItem[];

  ngOnInit(): void {

  }
}
