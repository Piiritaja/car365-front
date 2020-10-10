import { Component, OnInit } from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {

  constructor(private listingItemService: ListingItemService) { }

  listingItems: ListingItem[] = [];
  numberOfCars: number;
  pageNr = 1;
  start = 0;
  end = 20;

  getListingsItems(): void {
    this.listingItemService.getListings().subscribe(data => {
      this.listingItems = data;
      this.numberOfCars = this.listingItems.length;
    });
  }

  ngOnInit(): void {
    this.getListingsItems();
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
}
