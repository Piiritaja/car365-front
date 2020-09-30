import {Component, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private listingItemService: ListingItemService) {
  }
  listingItems: Observable<ListingItem[]>;
  getListingItems(): void{
   this.listingItems = this.listingItemService.getListings();
  }
  logger(): void {
    console.log('tere');
  }

  ngOnInit(): void {
  }

}
