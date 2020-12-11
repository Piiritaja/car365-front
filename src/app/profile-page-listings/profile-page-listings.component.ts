import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-page-listings',
  templateUrl: './profile-page-listings.component.html',
  styleUrls: ['./profile-page-listings.component.css']
})
export class ProfilePageListingsComponent implements OnInit {
  waiting = true;
  @Input() userId: string;

  constructor(private listingItemService: ListingItemService) { }

  listingItems: ListingItem[];

  getListingItems(): void {
    this.waiting = true;
    this.listingItemService.getOwnerListings(this.userId).subscribe(data => {
      this.listingItems = data;
      console.log(data);
      if (data === undefined) {
        document.getElementsByClassName('profile-display')[0].innerHTML = 'You don\'t have listings...';
      }
      this.waiting = false;
    });
  }

  ngOnInit(): void {
    this.getListingItems();
  }
}
