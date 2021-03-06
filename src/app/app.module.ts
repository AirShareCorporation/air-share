import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RegisterFormComponent} from './forms/register-form/register-form.component';
import {LoginFormComponent} from './forms/login-form/login-form.component';
import {ResetFormComponent} from './forms/reset-form/reset-form.component';
import {HomPageComponent} from './hom-page/hom-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ResetFormComponent,
    HomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
