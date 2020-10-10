import {Component, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  constructor(private listingItemService: ListingItemService) { }

  listingParams: JSON[] = [];
  stringList: string[] = [];

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

  ngOnInit(): void {
    this.getParamStrings();
  }
}
