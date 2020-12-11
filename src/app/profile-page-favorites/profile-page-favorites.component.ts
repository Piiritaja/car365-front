import {Component, Input, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';

@Component({
  selector: 'app-profile-page-favorites',
  templateUrl: './profile-page-favorites.component.html',
  styleUrls: ['./profile-page-favorites.component.css']
})
export class ProfilePageFavoritesComponent implements OnInit {
  waiting = true;
  @Input() userId: string;
  @Input() userRole: string;

  constructor(private listingItemService: ListingItemService) {
  }

  bookmarkedListings: ListingItem[];

  getFavoritedListingItems(): void {
    this.waiting = true;
    if (this.userRole === 'PREMIUM' || this.userRole === 'ADMIN') {
      this.listingItemService.getFavoriteListings(this.userId).subscribe(data => {
        this.bookmarkedListings = data;
        this.waiting = false;
      });
    }
  }

  noListingsToShow(): boolean {
    return this.bookmarkedListings === undefined || this.userRole === 'USER';
  }

  ngOnInit(): void {
    this.getFavoritedListingItems();
  }
}
