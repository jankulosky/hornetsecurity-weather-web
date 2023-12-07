import { Component } from '@angular/core';
import { IForecast, IWeather } from 'src/app/core/helpers/weather';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  city: string = '';
  weather!: IWeather;
  forecast!: IForecast;

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weather = data;
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
