import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { AirQualityService } from '../air-quality.service';

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
    private airQualityService: AirQualityService
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  receiveData() {
    this.airQualityService.getData().subscribe((resp: any) => {
      console.log(resp.body.data.city.geo)
      console.log(resp.body.data.iaqi.no2)
      let city: [number, number] = resp.body.data.city.geo;

      var marker = L.marker([...city]).addTo(this.map);

      city.forEach(element => {
        console.log();

      });
      marker.bindPopup(`<h4>Taux de no2 :</h4> ${ resp.body.data.iaqi.no2.v}`);
    })
  }


  ngOnInit(): void {
    this.receiveData()
  }
}
