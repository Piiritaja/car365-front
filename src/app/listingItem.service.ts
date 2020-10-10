import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListingItemNoId} from './ListingItemNoId';
import {ListingItem} from './listingItem';

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

  postListing(item: ListingItemNoId): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(item);
    // console.log(body);
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

  getParams(): Observable<any> {
    return this.http.get(this.listingUrl + '/params');
  }

  getFilter(): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(this.listingUrl + '/filter');
  }

  getLatestListings(): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(this.listingUrl + '/count');
  }
}
