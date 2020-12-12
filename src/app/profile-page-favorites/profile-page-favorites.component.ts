import {Component, Input, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-profile-page-favorites',
  templateUrl: './profile-page-favorites.component.html',
  styleUrls: ['./profile-page-favorites.component.css']
})
export class ProfilePageFavoritesComponent implements OnInit {
  waiting = true;
  @Input() userId: string;
  @Input() userRole: string;

  constructor(private listingItemService: ListingItemService,
              private authenticationService: AuthenticationService) {
  }

  bookmarkedListings: ListingItem[];

  getFavoritedListingItems(): void {
    this.waiting = true;
    if (this.userRole === 'PREMIUM' || this.userRole === 'ADMIN') {
      this.listingItemService.getFavoriteListings(this.userId).subscribe(data => {
        this.bookmarkedListings = data;
        this.waiting = false;
      });
    } else {
      this.waiting = false;
    }
  }

  noListingsToShow(): boolean {
    return this.bookmarkedListings === undefined || this.bookmarkedListings.length === 0 || this.userRole === 'USER';
  }

  ngOnInit(): void {
    this.userRole = this.authenticationService.currentUserValue.role;
    this.userId = this.authenticationService.currentUserValue.id;
    this.getFavoritedListingItems();
  }
}
