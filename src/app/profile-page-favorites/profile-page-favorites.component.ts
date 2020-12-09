import {Component, Input, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';

@Component({
  selector: 'app-profile-page-favorites',
  templateUrl: './profile-page-favorites.component.html',
  styleUrls: ['./profile-page-favorites.component.css']
})
export class ProfilePageFavoritesComponent implements OnInit {

  @Input() userId: string;
  @Input() userRole: string;

  constructor(private listingItemService: ListingItemService) {
  }

  listingItems: ListingItem[];

  getFavoritedListingItems(): void {
    if (this.userRole === 'PREMIUM' || this.userRole === 'ADMIN') {
      this.listingItemService.getFavoriteListings(this.userId).subscribe(data => {
        this.listingItems = data;
      });
    } else {
      document.getElementsByClassName('profile-display')[0].innerHTML =
        '<p id="empty-text">' + 'You don\'t have favorites (Make sure you have Premium account!)</p>';
    }
  }

  ngOnInit(): void {
    this.getFavoritedListingItems();
  }
}
