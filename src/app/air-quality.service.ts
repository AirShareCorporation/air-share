import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  constructor(private http: HttpClient) {
   }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getData() {
    return this.http.get('https://api.waqi.info/feed/paris', {
      responseType: 'json',
      observe: 'response',
      params: {
        'token': '16d2a1179073e4d1fa5466876faa04c04ef51f71'
      }
    })
  }
}
