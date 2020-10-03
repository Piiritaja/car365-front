import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carUrl = 'api/cars';

  constructor(private http: HttpClient) {
  }

  getListings(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }

  getCar(id): Observable<Car> {
    return this.http.get<Car>(this.carUrl + '/' + id);
  }
}
