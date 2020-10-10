import {Component, OnInit, Input} from '@angular/core';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('listingItem') listingItem: ListingItem;

  constructor() {
  }

  logger(): void {
    console.log('tere');
  }

  ngOnInit(): void {
  }
}
