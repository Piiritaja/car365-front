import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
