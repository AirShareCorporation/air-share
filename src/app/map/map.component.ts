import {Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';
import {DatasService} from '../services/datas/datas.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [47.61758691082487, 2.5587330111103377],
      zoom: 7
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(
    private datasService: DatasService
  ) {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  receiveData() {
    this.datasService.getAirData().subscribe((resp: any) => {
      const city: [number, number] = resp.body.data.city.geo;
      const marker = L.marker([...city]).addTo(this.map);

      city.forEach(element => {

      });
      marker.bindPopup(`<h4>Taux de no2 :</h4> ${resp.body.data.iaqi.no2.v}`);
    })
  }

  receiveCensusData(code: string) {
    this.datasService.getCensusData(code).subscribe((resp: any) => {
      const pop = resp.body.Cellule[0].Valeur;
      console.log(pop)
    })
  }


  ngOnInit(): void {
    this.receiveData()
  }
}
