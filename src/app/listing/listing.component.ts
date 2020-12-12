import {Component, OnInit, Input} from '@angular/core';
import {ListingItem} from '../listingItem';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() listingItem: ListingItem;

  constructor() {
  }

  logger(): void {
    console.log('tere');
  }

  ngOnInit(): void {
  }

  isPremium(): boolean {
    return this.listingItem.premium;
  }
}
