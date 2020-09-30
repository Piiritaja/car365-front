import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ListingItem} from './ListingItem';

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
  postListing(item: ListingItem): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(item);
    console.log(body);
    return this.http.post(this.listingUrl, body, {headers});
  }
}
