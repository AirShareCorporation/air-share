import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { MeteoComponent } from './meteo/meteo.component';


@NgModule({
  declarations: [
    MapComponent,
    AirQualityComponent,
    MeteoComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
