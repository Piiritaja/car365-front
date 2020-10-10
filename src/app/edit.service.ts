import {Injectable} from '@angular/core';
import {ListingItem} from './listingItem';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() {
  }

  private listingItems = new Map();

  addItem(listingItem: ListingItem): void {
    this.listingItems.set(listingItem.id, listingItem);
  }

  getListingItem(id: string): ListingItem {
    const listing = this.listingItems.get(id);
    this.listingItems.delete(id);
    return listing;
  }
}
