import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
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
  postCar(car: Car): Observable<any> {
    return this.http.post<Car>(this.url, car);
  }
  getCar(id: string): Observable<Car> {
    return this.http.get<Car>(this.url + '/' + id);
  }
}
