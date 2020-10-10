import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-profile-page-listings',
  templateUrl: './profile-page-listings.component.html',
  styleUrls: ['./profile-page-listings.component.css']
})
export class ProfilePageListingsComponent implements OnInit {

  constructor(private listingItemService: ListingItemService) { }

  listingItems: ListingItem[];

  getListingItems(): void {
    this.listingItemService.getLatestListings().subscribe(data => {
      this.listingItems = data;
    });
  }

  ngOnInit(): void {
    this.getListingItems();
  }
}
