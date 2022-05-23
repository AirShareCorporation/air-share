import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from "./forum/forum.component";
import { MapComponent } from "./map/map.component";
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { ResetFormComponent } from './forms/reset-form/reset-form.component';
import {AdminComponent} from "./admin/admin/admin.component";
import { HomPageComponent } from './hom-page/hom-page.component';
import {AuthGuard} from "./auth/auth.guard";



const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'map', component: MapComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  { path: 'Accueil', component: HomPageComponent },
  { path: 'inscription', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'reset', component: ResetFormComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
