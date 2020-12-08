import {Component, Input, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-profile-page-favorites',
  templateUrl: './profile-page-favorites.component.html',
  styleUrls: ['./profile-page-favorites.component.css']
})
export class ProfilePageFavoritesComponent implements OnInit {

  @Input() userId: string;
  @Input() userRole: string;

  constructor() {}

  listingItems: ListingItem[];

  getFavoritedListingItems(): void {
    if (this.userRole === 'PREMIUM' || this.userRole === 'ADMIN') {}
  }

  ngOnInit(): void {
    this.getFavoritedListingItems();
  }
}
