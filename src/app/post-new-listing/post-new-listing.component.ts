import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {Observable, of} from 'rxjs';
import {Car} from '../car';
import {CarService} from '../car.service';
import {RetrievedCar} from '../retrievedCar';
import {RetrievedListingItem} from '../retrievedListingItem';

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
  model = new FormControl();
  bodyType = new FormControl();
  color = new FormControl();
  gearboxType = new FormControl();
  fuelType = new FormControl();
  driveType = new FormControl();
  enginePower = new FormControl();
  mileage = new FormControl();
  releaseYear = new FormControl();
  engineSize = new FormControl();
  description = new FormControl();
  status = new FormControl();
  ownerId = new FormControl();
  price = new FormControl();
  location = new FormControl();
  images = new FormControl();
  ownerName = new FormControl();
  ownerPhone = new FormControl();
  img1 = new FormControl();
  img2 = new FormControl();
  img3 = new FormControl();
  img4 = new FormControl();


  options: Brand[] = [
    {name: 'BMW'},
    {name: 'Audi'},
    {name: 'Toyota'},
    {name: 'Mercedes'}
  ];
  brandsList: string[] = [];
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
  retrievedListingItem: RetrievedListingItem;
  retrievedCar: RetrievedCar;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private listingItemService: ListingItemService,
              private carService: CarService) {
  }

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
    this.informationGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.brandControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    this.car = {
      brand: '',
      model: '',
      bodyType: '',
      color: '',
      gearboxType: '',
      fuelType: '',
      driveType: '',
      enginePower: 0,
      mileage: 0,
      releaseYear: 0,
      engineSize: ''
    };
    this.listingItem = {
      title: '',
      description: '',
      status: '',
      owner: '',
      listedCar: '',
      price: 0,
      location: '',
      images: []
    };
    this.getBrands();
    // this.postCar();
    // this.postListing();
  }

  displayFn(brand: Brand): string {
    return brand && brand.name ? brand.name : '';
  }

  postListing(): void {
    this.postCar();
    console.log(this.retrievedCar);
    console.log(JSON.stringify(this.retrievedCar));
    // console.log('this is the id' + this.retrievedCar.id);
    this.configListing();
    this.listingItemService.postListing(this.listingItem)
      .subscribe(listingItem => this.retrievedListingItem = listingItem);
  }

  postCar(): void {
    console.log('in post car');
    this.carService.saveCar(this.car).subscribe(retrieved => {
      this.retrievedCar = retrieved;
      console.log(this.retrievedCar); });

  }

  getBrands(): void {
    this.carService.getBrands().subscribe(brands => {
      this.brandsList = brands;
      console.log(this.brandsList);
      this.brandsFinished();
    });
  }

  private _filter(name: string): Brand[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  configListing(): void {
    this.listingItem.title = this.car.brand +
      ' ' + this.car.model +
      ' ' + this.car.engineSize +
      ' ' + this.car.mileage +
      ' kw';
    this.listingItem.description = this.description.value;
    this.listingItem.status = 'Available';
    this.listingItem.owner = '';
    this.listingItem.listedCar = 'dummyID';
    this.listingItem.price = this.price.value;
    this.listingItem.location = '';
    this.listingItem.images = [this.img1.value, this.img2.value, this.img3.value, this.img4.value];
    /*
    export interface ListingItem {
  id: string;
  title: string;
  description: string;
  status: string;
  owner: string;
  listedCar: string;
  price: number;
  location: string;
  images: string[];
}
     */
  }

  brandsFinished(): void {
    for (const brand1 of this.brandsList) {
      const newBrand: Brand = {
        name: brand1,
      };
      this.options.push(newBrand);
    }
    console.log(this.options);
  }
  onSubmit(event: any): void {
    // this.car.bodyType = this.
    this.car.brand = this.brandControl.value.name;
    this.car.model = this.model.value;
    this.car.bodyType = this.bodyType.value;
    this.car.color = this.color.value;
    this.car.gearboxType = this.gearboxType.value;
    this.car.fuelType = this.fuelType.value;
    this.car.driveType = this.driveType.value;
    this.car.enginePower = this.enginePower.value;
    this.car.mileage = this.mileage.value;
    this.car.releaseYear = this.releaseYear.value;
    this.car.engineSize = this.engineSize.value;
    // console.log(JSON.stringify(this.car));
  }


}
