import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private http: HttpClient) {
  }

  getAirData() {
    return this.http.get('https://api.waqi.info/feed/brest', {
      responseType: 'json',
      observe: 'response',
      params: {
        'token': '16d2a1179073e4d1fa5466876faa04c04ef51f71'
      }
    })
  }

  getCensusData(code: string) {
    return this.http.get(`https://api.insee.fr/donnees-locales/V0.1/donnees/geo-SEXE-AGE15_15_90@GEO2021RP2018/COM-${code}.all.all`, {
      headers: {
        'Authorization': 'Bearer 27ec107e-7851-3c20-ae21-b9c5a4dd77d2',
        'Accept': 'application/json'
      },
      observe: 'response'
    })
  }
}
