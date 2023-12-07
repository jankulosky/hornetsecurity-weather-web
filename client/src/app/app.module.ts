import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { LoginComponent } from './components/login/login.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { TextInputComponent } from './core/forms/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeatherComponent,
    NavComponent,
    RegisterComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
