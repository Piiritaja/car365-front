import { TestBed } from '@angular/core/testing';

import { ListingItemService } from './listingItem.service';

describe('ListingService', () => {
  let service: ListingItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
