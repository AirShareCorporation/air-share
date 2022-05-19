import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

import {AdminModule} from "./admin/admin.module";
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { ResetFormComponent } from './forms/reset-form/reset-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ResetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
