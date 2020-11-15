import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ParamsDto} from '../ParamsDto';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  constructor(private listingItemService: ListingItemService) { }

  selectedColor: any;
  selectedLocation: any;
  selectedDriveType: any;
  selectedGearBoxType: any;
  selectedFuel: any;
  selectedModel: any;
  selectedBrand: any;
  selectedBodyType: any;
  selectedYearStart: string;
  selectedYearEnd: string;
  selectedPowerStart: string;
  selectedPowerEnd: string;
  selectedPriceEnd: string;
  selectedPriceStart: string;
  listingParams: ParamsDto;
  stringList: string[] = [];
  tab = 1;

  getParamStrings(): void {
    this.listingItemService.getParams()
      .subscribe(
        data => {
      this.listingParams = data;
    });
  }

  listSizeOne(obj): string[] {
    if (typeof obj === 'string') {
      this.stringList = [];
      this.stringList.push(obj);
      return this.stringList;
    } else {
      return obj;
    }
  }

  saveSelectedParams(): void {
    sessionStorage.setItem('color', this.selectedColor);
    sessionStorage.setItem('location', this.selectedLocation);
    sessionStorage.setItem('driveType', this.selectedDriveType);
    sessionStorage.setItem('gearboxType', this.selectedGearBoxType);
    sessionStorage.setItem('fuelType', this.selectedFuel);
    sessionStorage.setItem('model', this.selectedModel);
    sessionStorage.setItem('brand', this.selectedBrand);
    sessionStorage.setItem('bodyType', this.selectedBodyType);
    sessionStorage.setItem('yearRange', this.selectedYearStart + '-' + this.selectedYearEnd);
    sessionStorage.setItem('powerRange', this.selectedPowerStart + '-' + this.selectedPowerEnd);
    sessionStorage.setItem('priceRange', this.selectedPriceStart + '-' + this.selectedPriceEnd);
  }

  ngOnInit(): void {
    this.getParamStrings();
  }
}
