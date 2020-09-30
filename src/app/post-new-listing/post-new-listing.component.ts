import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {Observable} from 'rxjs';
import {Car} from '../car';
import {CarService} from '../car.service';
import {RetrievedCar} from "../retrievedCar";

export interface Brand {
  name: string;
}


@Component({
  selector: 'app-post-new-listing',
  templateUrl: './post-new-listing.component.html',
  styleUrls: ['./post-new-listing.component.css']
})
export class PostNewListingComponent implements OnInit {
  brandControl = new FormControl();
  options: Brand[] = [
    {name: 'BMW'},
    {name: 'Audi'},
    {name: 'Toyota'},
    {name: 'Mercedes'}
  ];
  filteredOptions: Observable<Brand[]>;

  isLinear = false;
  modelGroup: FormGroup;
  ageGroup: FormGroup;
  drivetrainGroup: FormGroup;
  engineGroup: FormGroup;
  imageGroup: FormGroup;
  informationGroup: FormGroup;
  listingItem: ListingItem;
  car: Car;
  retrievedListingItem: ListingItem;
  retrievedCar: RetrievedCar;
  brandName: string;
  modelName: string;
  releaseYear: number;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private listingItemService: ListingItemService,
              private carService: CarService) {}

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.modelGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.ageGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.drivetrainGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.engineGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.imageGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.informationGroup = this._formBuilder.group( {
      sixthCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.brandControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    this.car = {
      bodyType: 'hatch',
      brand: 'BMW',
      model: '320i',
      color: 'green',
      gearboxType: 'manual',
      fuelType: 'petrol',
      driveType: 'rear',
      enginePower: 110,
      mileage: 2000,
      releaseYear: 2000,
      engineSize: '2.0',
    };
    console.log(this.ageGroup.value);
    this.postCar();
    // this.postListing();
  }
  displayFn(brand: Brand): string {
    return brand && brand.name ? brand.name : '';
  }
  postListing(): void {
    this.listingItemService.postListing(this.listingItem);
  }
  postCar(): void {
    console.log('in post car');
    this.carService.saveCar(this.car).subscribe(car => this.retrievedCar = car);

  }
   private _filter(name: string): Brand[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit(event: any): void {
    console.log(this.ageGroup.value);
  }



}
