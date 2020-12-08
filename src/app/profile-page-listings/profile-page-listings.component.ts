import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-page-listings',
  templateUrl: './profile-page-listings.component.html',
  styleUrls: ['./profile-page-listings.component.css']
})
export class ProfilePageListingsComponent implements OnInit {

  @Input() userId: string;

  constructor(private listingItemService: ListingItemService) { }

  listingItems: ListingItem[];

  getListingItems(): void {
    this.listingItemService.getOwnerListings(this.userId).subscribe(data => {
      this.listingItems = data;
    });
  }

  ngOnInit(): void {
    this.getListingItems();
  }
}
