import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements AfterViewInit {

  private map2: any;

  private initMap2(): void {

    this.map2 = L.map('map2', {
      center: [48.27085104759533, 2.3550708333535915],
      zoom: 6,
    });

    const tiles2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles2.addTo(this.map2);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap2();
  }
}
