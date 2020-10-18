import {Component, OnInit} from '@angular/core';
import {Listing} from '../listingProperties/Listing';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EditService} from '../edit.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

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
    ownerName: 'Toomas MockUser',
    ownerNumber: '+372 4204201'
  };
  listing: ListingItem;
  backgroundColor = 'lightgreen';
  start = 0;
  end = 1;
  nrOfImages: number;

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
    this.listingItemService.getListing(id).subscribe(listing => {
      this.listing = listing;
      this.nrOfImages = this.listing.images.length;
      this.updateStatusColor();
    });
    return this.listing;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {data: {id: this.listing.id}});
    this.editService.addItem(this.listing);
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/home']);
    });
  }

  // tslint:disable-next-line:typedef
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  nextPicture(): void {
    if (this.end < this.nrOfImages) {
      this.end += 1;
      this.start += 1;
    } else if (this.end === this.nrOfImages) {
      this.start = 0;
      this.end = 1;
    }
  }

  previousPicture(): void {
    if (this.start !== 0) {
      this.start -= 1;
      this.end -= 1;
    } else {
      this.end = this.nrOfImages;
      this.start = this.nrOfImages - 1;
    }
  }

  updateStatusColor(): void {
    if (this.listing.status.toLowerCase() === 'available') {
      this.backgroundColor = 'lightgreen';
    } else if (this.listing.status.toLowerCase() === 'reserved') {
      this.backgroundColor = '#ff9f2d';
    } else {
      this.backgroundColor = '#fa0c0c';
    }
  }

  changeStatus(): void {
    if (this.listing.status.toLowerCase() === 'available') {
      this.listing.status = 'Reserved';
    } else if (this.listing.status.toLowerCase() === 'reserved') {
      this.listing.status = 'Sold';
    } else {
      this.listing.status = 'Available';
    }
    this.updateStatusColor();
    this.listingItemService.putListing(this.listing, this.listing.id).subscribe(listing => this.listing);
  }

  editListing(): void {
    this.editService.addItem(this.listing);
    this.router.navigate(['listings/edit/' + this.listing.id]);
  }

}
