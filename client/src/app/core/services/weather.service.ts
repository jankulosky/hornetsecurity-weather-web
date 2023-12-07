import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../helpers/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private settingsService: SettingsService,
    private http: HttpClient
  ) {}

  getWeather(city: string): Observable<IWeather> {
    return this.http.get<IWeather>(
      `${this.settingsService.baseEndpoint}/${this.settingsService.weatherEndpoint}/${city}`
    );
  }
}
