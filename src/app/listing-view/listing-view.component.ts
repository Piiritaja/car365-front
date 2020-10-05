import {Component, OnInit} from '@angular/core';
import {Listing} from '../listingProperties/Listing';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../car.service';
import {Car} from '../car';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {
  listingMock: Listing = {
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
  listing: ListingItem;
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private listingItemService: ListingItemService,
    private carService: CarService
  ) {
  }

  ngOnInit(): void {
    this.getListing();
    this.getCar();
  }

  getListing(): ListingItem {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingItemService.getListing(id).subscribe(listing => this.listing = listing);
    return this.listing;
  }
  // tslint:disable-next-line:typedef
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  async getCar(): Promise<void> {
    while (this.listing === undefined) {
      await this.delay(50);
    }
    const id = this.listing.listedCar;
    this.carService.getCar(id).subscribe(car => this.car = car);
  }

}
