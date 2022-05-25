import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {DatasService} from 'src/app/services/datas/datas.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityComponent implements AfterViewInit {

  private map: any;
  private cities: string[] = [
    'paris',
    'marseille',
    'lyon',
    'toulouse',
    'nice',
    'nantes',
    'montpellier',
    'strasbourg',
    'bordeaux',
    'lille',
    'rennes'
  ];
  private airLayer = L.layerGroup();
  private markerColors: Map<number, string> = new Map([
    [50, 'bg-emerald-600'],
    [100, 'bg-yellow-600'],
    [150, 'bg-orange-600'],
    [200, 'bg-purple-600'],
    [300, 'bg-red-600'],
  ]);

  constructor(private datasService: DatasService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.constructAirLayer();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [48.27085104759533, 2.3550708333535915],
      zoom: 6,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

    const layerControl = L.control.layers().addTo(this.map);
    layerControl.addOverlay(this.airLayer, "Qualite de l'Air");
  }

  constructAirLayer() {
    for (const city of this.cities) {
      this.datasService.getAirData(city).subscribe((resp: any) => {
          const coords: [number, number] = resp.body.data.city.geo;
          const icon = this.constructIcon(resp);
          const marker = L.marker([...coords], {icon: icon}).addTo(this.airLayer);
          const popup = this.constructPopup(resp);
          marker.bindPopup(popup);
        }
      )
    }
  }

  receiveData(city: string) {
    this.datasService.getAirData(city).subscribe((resp: any) => {
      let city: [number, number] = resp.body.data.city.geo;
      const icon = this.constructIcon(resp);
      let marker = L.marker([...city], {icon: icon}).addTo(this.airLayer);
      const popup = this.constructPopup(resp);
      marker.bindPopup(popup);
    })
  }

  constructPopup(resp: any): L.Popup {
    return L.popup()
      .setContent(`
        <p class="font-bold text-indigo-800">${resp.body.data.city.name}</p>
        <strong>- Indice :</strong> ${resp.body.data.iaqi.h.v}<br>
        <strong>- NO2 :</strong> ${resp.body.data.iaqi.no2 ? resp.body.data.iaqi.no2.v : 'No Data'}<br>
        <strong>- Ozone :</strong> ${resp.body.data.iaqi.o3 ? resp.body.data.iaqi.o3.v : 'No Data'}<br>
        <strong>- SO2 :</strong> ${resp.body.data.iaqi.so2 ? resp.body.data.iaqi.so2.v : 'No Data'}<br>
        <strong>- PM10 :</strong> ${resp.body.data.iaqi.pm10 ? resp.body.data.iaqi.pm10.v : 'No Data'}<br>
        <strong>- PM25 :</strong> ${resp.body.data.iaqi.pm25 ? resp.body.data.iaqi.pm25.v : 'No Data'}
    `);
  }

  constructIcon(resp: any) {
    let markerColor: string | undefined = '';
    for (const k of this.markerColors.keys()) {
      if (resp.body.data.iaqi.h.v <= k) {
        markerColor = this.markerColors.get(k);
        break;
      }
    }
    return L.divIcon({
      className: "my-custom-pin",
      iconAnchor: [0, 24],
      popupAnchor: [0, -36],
      html: `<span class="${markerColor} w-5 h-5 relative top-2.5 left-0 rounded-full origin-center rotate-45 block"></span>`
    });
  }


}
