import {ListingItemNoId} from '../ListingItemNoId';

export class NewListingValidator {
  validateListing(listingItem: ListingItemNoId): boolean {
    return (listingItem.price !== 0 &&
      listingItem.location !== null &&
      listingItem.images.length !== 0 &&
      listingItem.brand !== null &&
      listingItem.model !== null &&
      listingItem.bodyType !== null &&
      listingItem.color !== null &&
      listingItem.gearboxType !== null &&
      listingItem.fuelType !== null &&
      listingItem.driveType !== null &&
      listingItem.enginePower !== 0 &&
      listingItem.mileage !== 0 &&
      listingItem.releaseYear !== 0 &&
      listingItem.engineSize !== null);
  }
}
