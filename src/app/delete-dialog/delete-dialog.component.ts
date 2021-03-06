import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListingItemService} from '../listingItem.service';
import {Router} from '@angular/router';
import {DialogData} from '../listing-view/listing-view.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private listingService: ListingItemService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  delete(): void {
    this.listingService.deleteListing(this.data.id);
  }

}
