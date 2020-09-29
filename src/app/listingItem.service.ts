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
  postListing(attr: string): Observable<ListingItem> {
    console.log(this.listingUrl + attr);
    return this.http.get<ListingItem>(this.listingUrl + attr);
  }
}
