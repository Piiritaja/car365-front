import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Listing} from './listingProperties/Listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private listingUrl = 'api/listing'; // URL to web api

  constructor(private http: HttpClient) {
  }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.listingUrl);
  }
}
