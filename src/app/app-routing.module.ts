import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForumComponent} from "./forum/forum.component";
import {MapComponent} from "./map/map.component";
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { ResetFormComponent } from './forms/reset-form/reset-form.component';


const routes: Routes = [
  { path: "", component: ForumComponent  },
  { path: 'forum', component: ForumComponent },
  { path: 'map', component: MapComponent },
  { path: 'inscription', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'reset', component: ResetFormComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
