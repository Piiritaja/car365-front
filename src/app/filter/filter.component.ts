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

  getParamStrings(): void {
    this.listingItemService.getParams()
      .subscribe(
        data => {
      this.listingParams = data;
    });
  }

  ngOnInit(): void {
    this.getParamStrings();
  }
}
