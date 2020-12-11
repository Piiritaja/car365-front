import {Component, OnInit} from '@angular/core';
import {ListingItem} from '../listingItem';
import {ListingItemService} from '../listingItem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EditService} from '../edit.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication.service';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {
  owner = {id: null, firstName: null, lastName: null, email: null, phone: null, bookmarks: null};
  listing: ListingItem;
  backgroundColor = 'lightgreen';
  start = 0;
  end = 1;
  nrOfImages: number;
  bookmarked = false;
  loggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingItemService: ListingItemService,
    private userService: UserService,
    private editService: EditService,
    public dialog: MatDialog,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.getListing();
    if (this.authService.currentUserValue) {
      this.loggedIn = true;
      this.currentUserBookmarks();
    }
  }

  isCurrentUserListing(): boolean {
    return (this.loggedIn && (this.owner.id === this.authService.getUserId || this.authService.currentUserValue.role === 'ADMIN'));
  }

  currentUserBookmarks(): void {
    this.listingItemService.getFavoriteListings(this.authService.getUserId).subscribe(data => data.forEach(l => {
      if (l.id === this.listing.id) {
        this.bookmarked = true;
      }
    }));
  }

  bookmarkListing(): void {
    this.userService.getUser(this.authService.getUserId).subscribe(user => {
      this.userService.bookmarkListing(this.authService.getUserId, this.listing.id, user)
        .subscribe(() => this.currentUserBookmarks());
    });
  }

  getListing(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingItemService.getListing(id).subscribe(listing => {
      this.listing = listing;
      this.nrOfImages = this.listing.images.length;
      this.updateStatusColor();
      this.getOwner(listing.owner);
    });
  }

  getOwner(userId): void {
    this.userService.getUser(userId).subscribe(data => {
      this.owner.id = data.id;
      this.owner.firstName = data.firstName;
      this.owner.lastName = data.lastName;
      this.owner.email = data.email;
      this.owner.phone = data.phone;
      this.owner.bookmarks = data.bookmarks;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {data: {id: this.listing.id}});
    this.editService.addItem(this.listing);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  delay(ms: number): Promise<any> {
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
    this.listingItemService.putListing(this.listing, this.listing.id).subscribe(() => this.listing);
  }

  editListing(): void {
    this.editService.addItem(this.listing);
    this.router.navigate(['listings/edit/' + this.listing.id]);
  }
}
