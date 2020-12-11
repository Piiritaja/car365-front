import { Component, OnInit } from '@angular/core';
import {ListingItemService} from '../listingItem.service';
import {ListingItem} from '../listingItem';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  waiting = true;
  constructor(private listingItemService: ListingItemService, private route: ActivatedRoute, private router: Router) {
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

  listingItems: ListingItem[] = [];
  pages: number[];
  tab: any;

  getListingsItems(): void {
    this.waiting = true;
    this.listingItemService.getListings().subscribe(data => {
      this.listingItems = data;
      this.pages = Array(Math.ceil(this.listingItems.length / 20)).fill(0).map((x, i) => i + 1);
      this.tab = this.route.snapshot.paramMap.get('i');
      this.waiting = false;
    });
  }

  ngOnInit(): void {
    this.getListingsItems();
  }
}
