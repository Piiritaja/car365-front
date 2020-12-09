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

  bookmarkedListings: ListingItem[];

  getFavoritedListingItems(): void {
    if (this.userRole === 'PREMIUM' || this.userRole === 'ADMIN') {
      this.listingItemService.getFavoriteListings(this.userId).subscribe(data => {
        this.bookmarkedListings = data;
      });
    }
    if (this.bookmarkedListings === undefined) {
      document.getElementsByClassName('profile-display')[0].innerHTML = 'You don\'t have favorites (Make sure you have Premium account!';
    }
  }

  ngOnInit(): void {
    this.getFavoritedListingItems();
  }
}
