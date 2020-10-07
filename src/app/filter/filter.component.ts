import {Component, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  constructor(private listingItemService: ListingItemService) { }

  listingItems: ListingItem[];

  getListingItems(): void {
    this.listingItemService.getListings().subscribe(listingItems => this.listingItems = listingItems);
  }

  ngOnInit(): void {
    this.getListingItems();
  }
}
