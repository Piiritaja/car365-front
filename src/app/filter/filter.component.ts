import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  constructor(private listingItemService: ListingItemService) { }

  listingParams: any[] = [];
  selectedColor: any;
  selectedLocation: any;
  selectedDriveType: any;
  selectedGearBoxType: any;
  selectedFuel: any;
  selectedModel: any;
  selectedMake: any;
  selectedBodyType: any;
  selectedYearStart: string;
  selectedYearEnd: string;
  selectedPowerStart: string;
  selectedPowerEnd: string;
  selectedPriceEnd: string;
  selectedPriceStart: string;

  getParamStrings(): void {
    this.listingItemService.getParams()
      .subscribe(
        data => {
      this.listingParams = data;
    });
  }

  saveSelectedParams(): void {
    sessionStorage.setItem('color', this.selectedColor);
    sessionStorage.setItem('location', this.selectedLocation);
    sessionStorage.setItem('driveType', this.selectedDriveType);
    sessionStorage.setItem('gearBoxType', this.selectedGearBoxType);
    sessionStorage.setItem('fuel', this.selectedFuel);
    sessionStorage.setItem('model', this.selectedModel);
    sessionStorage.setItem('make', this.selectedMake);
    sessionStorage.setItem('bodyType', this.selectedBodyType);
    sessionStorage.setItem('yearRange', this.selectedYearStart + ' ' + this.selectedYearEnd);
    sessionStorage.setItem('powerRange', this.selectedPowerStart + ' ' + this.selectedPowerEnd);
    sessionStorage.setItem('priceRange', this.selectedPriceEnd + ' ' + this.selectedPriceStart);
  }

  ngOnInit(): void {
    this.getParamStrings();
  }
}
