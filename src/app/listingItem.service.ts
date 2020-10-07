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
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(item);
    // console.log(body);
    return this.http.post(this.listingUrl, body, {headers});
  }
  getListing(id): Observable<ListingItem>{
    return this.http.get<ListingItem>(this.listingUrl + '/' + id);
  }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(this.listingUrl + '/brands');
  }

  getParams(): Observable<any> {
    return this.http.get(this.listingUrl + '/params');
  }
}
