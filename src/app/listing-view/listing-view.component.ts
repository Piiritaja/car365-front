import {Component, OnInit} from '@angular/core';
import {Listing} from '../listingProperties/Listing';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {
  listing: Listing = {
    id: '1',
    title: 'Bmw 320i 2.0 110kw',
    description: 'this is additional inf',
    status: 'available',
    price: 4000,
    location: 'valga',
    carId: '3',
    bodyType: 'sedan',
    brand: 'BMW',
    model: '320i',
    color: 'green',
    gearbox: 'manual',
    fuelType: 'petrol',
    driveType: 'rear-wheel',
    enginePower: 110,
    engineSize: '2.0',
    mileage: 269420,
    year: 1996,
    ownerName: 'Toomas Valgast',
    ownerNumber: '5694200'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
