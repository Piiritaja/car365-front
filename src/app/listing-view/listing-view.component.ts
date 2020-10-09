import {Component, OnInit} from '@angular/core';
import {Listing} from '../listingProperties/Listing';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EditService} from '../edit.service';
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})

export class ListingViewComponent implements OnInit {
  listingMock: Listing = {
    id: '1',
    title: 'Bmw 320i 2.0 110kw',
    description: 'this is additional inf',
    status: 'available',
    price: 4000,
    location: 'valga',
    bodyType: 'sedan',
    brand: 'BMW',
    model: '320i',
    color: 'green',
    gearbox: 'manual',
    fuelType: 'petrol',
    driveType: 'rear-wheel',
    enginePower: 110,
    engineSize: '2.0',
    mileage: 269420,
    year: 1996,
    ownerName: 'Toomas Valgast',
    ownerNumber: '5694200'
  };
  listing: ListingItem;
  backgroundColor = 'lightgreen';

  constructor(
    private route: ActivatedRoute,
    private listingItemService: ListingItemService,
    private router: Router,
    private editService: EditService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getListing();
  }

  getListing(): ListingItem {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingItemService.getListing(id).subscribe(listing => this.listing = listing);
    return this.listing;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {data: {id: this.listing.id}});
    this.editService.addItem(this.listing);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // tslint:disable-next-line:typedef
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  changeStatus(): void {
    if (this.listing.status.toLowerCase() === 'available') {
      this.listing.status = 'Reserved';
      this.backgroundColor = '#ff9f2d';
    } else if (this.listing.status.toLowerCase() === 'reserved') {
      this.listing.status = 'Sold';
      this.backgroundColor = '#ff344f';
    } else {
      this.listing.status = 'Available';
      this.backgroundColor = 'lightgreen';
    }
    this.listingItemService.putListing(this.listing, this.listing.id).subscribe(listing => this.listing);
  }

  editListing(): void {
    this.editService.addItem(this.listing);
    this.router.navigate(['listings/edit/' + this.listing.id]);
  }

}
