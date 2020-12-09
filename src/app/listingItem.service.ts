import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListingItemNoId} from './ListingItemNoId';
import {ListingItem} from './listingItem';
import {ParamsDto} from './ParamsDto';

@Injectable({
  providedIn: 'root'
})
export class ListingItemService {
  private listingUrl = 'api/listings'; // URL to web api

  constructor(private http: HttpClient) {
  }

  getListings(): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(this.listingUrl);
  }

  getOwnerListings(ownerId): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(this.listingUrl + '/owner/' + ownerId);
  }

  getFavoriteListings(ownerId): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(this.listingUrl + '/owner/' + ownerId + '?favorites=true');
  }

  postListing(item: ListingItemNoId): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(item);
    return this.http.post(this.listingUrl, body, {headers});
  }

  putListing(item: ListingItem, id: string): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(item);
    return this.http.put(this.listingUrl + '/' + id, body, {headers});
  }

  deleteListing(id: string): void {
    this.http.delete(this.listingUrl + '/' + id).subscribe(response => console.log(response));
  }

  getListing(id): Observable<ListingItem> {
    return this.http.get<ListingItem>(this.listingUrl + '/' + id);
  }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(this.listingUrl + '/brands');
  }

  getParams(): Observable<ParamsDto> {
    return this.http.get<ParamsDto>(this.listingUrl + '/params');
  }

  getFilter(): Observable<ListingItem[]> {
    let filterString = '';
    const keys = ['color', 'location', 'driveType', 'gearboxType', 'fuelType', 'model', 'brand', 'bodyType', 'yearRange', 'powerRange',
      'priceRange'];
    for (const key of keys) {
      const value = sessionStorage.getItem(key);
      if (value !== null && !value.includes('undefined') && value !== 'all') {
        filterString += '&' + key + '=' + value;
      }
    }
    return this.http.get<ListingItem[]>(this.listingUrl + '/filter?' + filterString);
  }

  getLatestListings(): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(this.listingUrl + '/count');
  }

  getNumberOfListings(count): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(this.listingUrl + '/count' + '?count=' + count);
  }
}
