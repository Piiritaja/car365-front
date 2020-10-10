import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {ListingItemNoId} from '../ListingItemNoId';
import {ListingItemService} from '../listingItem.service';
import {Observable} from 'rxjs';
import {ListingItem} from '../listingItem';
import {NewListingValidator} from './new-listing-validator';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-new-listing',
  templateUrl: './post-new-listing.component.html',
  styleUrls: ['./post-new-listing.component.css'],
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
  ownerName = new FormControl();
  ownerPhone = new FormControl();
  img1 = new FormControl();
  img2 = new FormControl();
  img3 = new FormControl();
  img4 = new FormControl();

  options: string[] = ['BMW', 'Audi', 'Mercedes', 'Toyota'];
  brandsList: string[] = [];
  filteredOptions: Observable<string[]>;

  isLinear = false;
  modelGroup: FormGroup;
  ageGroup: FormGroup;
  drivetrainGroup: FormGroup;
  engineGroup: FormGroup;
  imageGroup: FormGroup;
  informationGroup: FormGroup;
  listingItem: ListingItemNoId;
  retrievedListingItem: ListingItem;
  listingValidator = new NewListingValidator();
  invalidInputs = false;
  posting = false;

  constructor(private formBuilder: FormBuilder, private listingItemService: ListingItemService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getBrands();
    this.modelGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.ageGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.drivetrainGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.engineGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.imageGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.informationGroup = this.formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.brandControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.listingItem = {
      title: '',
      description: '',
      status: '',
      owner: '',
      price: 0,
      location: '',
      images: [],
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
  }

  postListing(): void {
    // console.log(this.listingItem);
    this.listingItemService.postListing(this.listingItem)
      .subscribe(listingItem => {
        this.retrievedListingItem = listingItem;
        this.router.navigate(['/listings/' + this.retrievedListingItem.id]);
      });
  }

  getBrands(): void {
    this.listingItemService.getBrands().subscribe(brands => {
      this.brandsList = brands;
      console.log(this.brandsList);
      this.brandsFinished();
    });
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  brandsFinished(): void {
    const brandSet = new Set(this.brandsList);
    for (const brand1 of brandSet) {
      if (!(this.options.includes(brand1))) {
        this.options.push(brand1);
      }
    }
    console.log(this.options);
  }

  updateBrand(): void {
    this.listingItem.brand = this.brandControl.value;
  }

  onSubmit(): void {
    try {
      this.listingItem.brand = this.brandControl.value;
      this.listingItem.model = this.model.value;
      this.listingItem.bodyType = this.bodyType.value;
      this.listingItem.color = this.color.value;
      this.listingItem.gearboxType = this.gearboxType.value;
      this.listingItem.fuelType = this.fuelType.value;
      this.listingItem.driveType = this.driveType.value;
      this.listingItem.enginePower = this.enginePower.value;
      this.listingItem.mileage = this.mileage.value;
      this.listingItem.releaseYear = this.releaseYear.value;
      this.listingItem.engineSize = this.engineSize.value;
      this.listingItem.title = this.listingItem.brand +
        ' ' + this.listingItem.model +
        ' ' + this.listingItem.enginePower +
        ' kw';
      this.listingItem.description = this.description.value;
      this.listingItem.status = 'Available';
      this.listingItem.owner = '';
      this.listingItem.price = this.price.value;
      this.listingItem.location = this.location.value;
      this.listingItem.images = [this.img1.value, this.img2.value, this.img3.value, this.img4.value];
    } catch (e) {
      this.invalidInputs = true;
    }
    if (this.listingValidator.validateListing(this.listingItem)) {
      this.posting = true;
      this.invalidInputs = false;
      this.postListing();
    } else {
      console.log('invalid', this.listingItem);
      this.invalidInputs = true;
      this.posting = false;
    }
  }


}
