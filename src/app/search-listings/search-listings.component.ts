import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-search-listings',
  templateUrl: './search-listings.component.html',
  styleUrls: ['./search-listings.component.css']
})
export class SearchListingsComponent implements OnInit {

  constructor(private listingItemService: ListingItemService, private router: Router) {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function(): boolean {return false; };
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }


  listingItems: ListingItem[];
  numberOfCars: number;
  pageNr = 1;
  start = 0;
  end = 20;

  getListingItems(): void {
    this.listingItemService.getFilter().subscribe(data => {
      this.listingItems = data;
      this.numberOfCars = this.listingItems.length;
    });
  }

  nextPage(): void {
    if (this.end < this.numberOfCars) {
      this.end += 20;
      this.start += 20;
      this.pageNr += 1;
    }
  }

  previousPage(): void {
    if (this.start !== 0) {
      this.start -= 20;
      this.end -= 20;
      this.pageNr -= 1;
    }
  }

  smaller(): number {
    return Math.min(this.end, this.numberOfCars);
  }

  ngOnInit(): void {
    this.getListingItems();
    console.log('Started search Page....');
  }
}
