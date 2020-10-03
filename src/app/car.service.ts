import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url = 'api/cars';

  constructor(private http: HttpClient) {
  }


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }
  saveCar(car: Car): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(car);
    // console.log(body);
    return this.http.post<Car>(this.url, body, {headers});
  }

  getCar(id: string): Observable<Car> {
    return this.http.get<Car>(this.url + '/' + id);
  }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/brands');
  }
}
