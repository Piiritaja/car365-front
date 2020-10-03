import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {Observable} from 'rxjs';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  constructor(private listingItemService: ListingItemService) {
  }

  listingItems: ListingItem[];

  getListingItems(): void {
    this.listingItemService.getListings().subscribe(listingItems => this.listingItems = listingItems);
  }

  logger(): void {
    console.log('tere');
  }

  ngOnInit(): void {
    this.getListingItems();
  }
}
