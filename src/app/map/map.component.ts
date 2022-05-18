import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { DatasService } from '../services/datas/datas.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map: any;
  public value: string = "";

  private initMap(): void {
    this.map = L.map('map', {
      center: [47.61758691082487, 2.5587330111103377],
      zoom: 5.5
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
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  receiveData(input: string) {
    this.datasService.getAirData(input).subscribe((resp: any) => {
      let city: [number, number] = resp.body.data.city.geo;
      var marker = L.marker([...city]).addTo(this.map);
      marker.bindPopup(`<h4>Taux de no2 :</h4> ${ resp.body.data.iaqi.no2.v}`);
    })
  }
}
