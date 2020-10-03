import {Component, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {Observable} from 'rxjs';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  constructor(private listingItemService: ListingItemService, private carService: CarService) {
  }

  listingItems: ListingItem[];
  listedCar: Car;

  getListingItems(): void {
    this.listingItemService.getListings().subscribe(listingItems => this.listingItems = listingItems);
  }
  getCar(id): void{
    this.carService.getCar(id).subscribe(listedCar => this.listedCar = listedCar);
  }

  ngOnInit(): void {
    this.getListingItems();
  }
}
