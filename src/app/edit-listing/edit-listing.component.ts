import {Component, OnInit} from '@angular/core';
import {EditService} from '../edit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListingItem} from '../listingItem';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewListingValidator} from '../post-new-listing/new-listing-validator';
import {ListingItemService} from "../listingItem.service";

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  description = new FormControl();
  price = new FormControl();
  location = new FormControl();
  img1 = new FormControl();
  img2 = new FormControl();
  img3 = new FormControl();
  img4 = new FormControl();
  formGroup: FormGroup;
  invalidInputs = false;
  listingValidator = new NewListingValidator();

  listing: ListingItem;


  constructor(
    private editService: EditService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private listingItemService: ListingItemService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = this.editService.getListingItem(id);
    this.formGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.description.setValue(this.listing.description);
    this.price.setValue(this.listing.price);
    this.location.setValue(this.listing.location);
    this.img1.setValue(this.listing.images[0]);
    this.img2.setValue(this.listing.images[1]);
    this.img3.setValue(this.listing.images[2]);
    this.img4.setValue(this.listing.images[3]);
  }

  onSubmit(): void {
    try {
      this.listing.description = this.description.value;
      this.listing.price = this.price.value;
      this.listing.location = this.location.value;
      this.listing.images = [this.img1.value, this.img2.value, this.img3.value, this.img4.value];
    } catch (e) {
      this.invalidInputs = true;
    }
    if (this.listingValidator.validateListing(this.listing)) {
      this.updateListingToBack();
      this.invalidInputs = false;
    } else {
      this.invalidInputs = true;
    }
  }

  updateListingToBack(): void {
  this.listingItemService.putListing(this.listing, this.listing.id)
    .subscribe(listingItem => {
      this.listing = listingItem;
      this.router.navigate(['/listings/' + this.listing.id]);
    });
  }

  consoleLog(): void {
  }
}
