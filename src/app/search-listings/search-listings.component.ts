import {Component, Inject, OnInit} from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search-listings',
  templateUrl: './search-listings.component.html',
  styleUrls: ['./search-listings.component.css']
})
export class SearchListingsComponent implements OnInit {

  constructor(private listingItemService: ListingItemService,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(DOCUMENT) private dom: Document) {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function(): boolean {
      return false;
    };
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }
  listingItems: ListingItem[];
  pages: number[];
  tab: any;

  getListingItems(): void {
    this.listingItemService.getFilter().subscribe(data => {
      this.listingItems = data;
      this.pages = Array(Math.ceil(this.listingItems.length / 20)).fill(0).map((x, i) => i + 1);
      this.tab = this.route.snapshot.paramMap.get('i');
    });
  }

  ngOnInit(): void {
    this.getListingItems();
    this.dom.documentElement.scrollIntoView();
  }
}
