import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DatasService } from 'src/app/services/datas/datas.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityComponent implements AfterViewInit {

  private map: any;
  public pop: string = '';
  public value: string = "";
  public pollutions: any;

  /**
   * Initialisation map and create marker city
   */
  private initMap(): void {

    let poitiers = L.marker([46.55788402858926, 0.31027544440691246]),
      nantes = L.marker([47.203677793876885, -1.546413967716054])
    let cities = L.layerGroup([poitiers, nantes]);

    this.pollutions = L.layerGroup([nantes, poitiers]);
    this.map = L.map('map', {
      center: [48.27085104759533, 2.3550708333535915],
      zoom: 6,
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

  /**
   *
   * @param input Receive the value city
   * @returns City API datas.services
   */
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

  getInseeCode(city: string) {
    // interrogate database here to get the insee code
    this.receiveCensusData(city);
  }

  receiveCensusData(code: string) {
    this.datasService.getCensusData(code).subscribe((resp: any) => {
      console.log(resp.body.Cellule[0].Valeur);
    });
  };
}
