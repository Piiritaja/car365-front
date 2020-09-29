import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


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

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
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
  }
  displayFn(brand: Brand): string {
    return brand && brand.name ? brand.name : '';
  }

  private _filter(name: string): Brand[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }



}
