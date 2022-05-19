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
  public pollutions: any;

  private initMap(): void {

    let poitiers = L.marker([46.55788402858926, 0.31027544440691246]),
    nantes = L.marker([47.203677793876885, -1.546413967716054])
    let cities = L.layerGroup([poitiers, nantes]);

    this.pollutions = L.layerGroup([nantes, poitiers]);
    this.map = L.map('map', {
      center: [47.61758691082487, 2.5587330111103377],
      zoom: 5.5,
    });

    let layerControl = L.control.layers().addTo(this.map);
    layerControl.addOverlay(this.pollutions, "Villes");
    layerControl.addOverlay(cities, "Météo");

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    // this.receivedCity()
  }

  constructor(private datasService: DatasService) { }

  // receivedCity() {
  //   this.datasService.getCity().subscribe((resp: any) => {
  //     let paris: [number, number] = resp.body.data.city.geo;
  //     let markerParis = L.marker([...paris]).addTo(this.map);
  //     console.log(this.pollutions);

  //     let markerPopParis = L.popup({
  //       closeOnClick: true,
  //       autoClose: false,
  //       closeButton: false
  //     }).setContent(`<h4>Taux de no2 :</h4> ${resp.body.data.iaqi.no2.v}`);
  //     markerParis.bindPopup(markerPopParis);
  //   });
  // };

  ngAfterViewInit(): void {
    this.initMap();
  }
  receiveData(input: string) {
    this.datasService.getAirData(input).subscribe((resp: any) => {
      let city: [number, number] = resp.body.data.city.geo;
      let marker = L.marker([...city]).addTo(this.map);
      let markerPop = L.popup({
        closeOnClick: true,
        autoClose: false,
        closeButton: false
      }).setContent(`<h4>Taux de no2 :</h4> ${resp.body.data.iaqi.no2.v}`);
        marker.bindPopup(markerPop);
    })
  }
}
