import {Component, OnInit} from '@angular/core';
import {CarService} from '../car.service';
import {Car} from '../car';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  constructor( private carService: CarService, private listingItemService: ListingItemService) { }

  carItems: Car[];

  listingItems: ListingItem[];

  getCarItems(): void {
    this.carService.getCars().subscribe(carItems => this.carItems = carItems);
  }

  getListingItems(): void {
    this.listingItemService.getListings().subscribe(listingItems => this.listingItems = listingItems);
  }

  ngOnInit(): void {
    this.getCarItems();
    this.getListingItems();
  }
}
