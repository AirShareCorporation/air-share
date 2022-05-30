import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { MapComponent } from './map.component';
import { MeteoComponent } from './meteo/meteo.component';

const mapRoutes: Routes = [
  {
    path: '',
    component: MapComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'qualityAir', component: AirQualityComponent },
          { path: 'meteo', component: MeteoComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mapRoutes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
