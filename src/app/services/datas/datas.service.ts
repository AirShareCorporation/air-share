import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private http: HttpClient) {
  }


  getAirData(city: string) {
    return this.http.get(`https://api.waqi.info/feed/${city}`, {
      responseType: 'json',
      observe: 'response',
      params: {
        'token': '16d2a1179073e4d1fa5466876faa04c04ef51f71'
      }
    });
  };

  getCensusData(code: string) {
    return this.http.get(`https://api.insee.fr/donnees-locales/V0.1/donnees/geo-SEXE-AGE15_15_90@GEO2021RP2018/COM-${code}.all.all`, {
      headers: {
        'Authorization': 'Bearer 62fd7b26-9e25-3bfe-848a-bea5c7b89fef',
        'Accept': 'application/json'
      },
      observe: 'response'
    });
  };
  getMeteoData(code: string) {
    return this.http.get(`https://api.meteo-concept.com/api/forecast/daily?insee=${code}`, {
      observe: 'response',
      headers: {
        'Authorization': 'Bearer 8e60ef9fa49f04b6ca49ac2cae77a277f9a92221cd85518ce7f0d5cedfce32de',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Accept': 'application/json'
      }
    });
  }
}
