import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForumComponent} from "./forum/forum.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  { path: 'forum', component: ForumComponent},
  { path: 'map', component: MapComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
