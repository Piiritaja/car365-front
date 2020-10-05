import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-profile-page-listings',
  templateUrl: './profile-page-listings.component.html',
  styleUrls: ['./profile-page-listings.component.css']
})
export class ProfilePageListingsComponent implements OnInit {
  constructor(private listingItemService: ListingItemService) {
  }

  listingItems: ListingItem[];

  getListingsByOwner(owner): void {
    this.listingItemService.getListingByOwner(owner).subscribe(listingItems => this.listingItems = listingItems);
    console.log(this.listingItems);
  }

  ngOnInit(): void {
    /// TODO this.getListingsByOwner(owner.getId())
    this.getListingsByOwner('owner_id');
  }
}
