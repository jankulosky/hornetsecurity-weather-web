export interface IWeather {
  city: string;
  country: string;
  forecast: IForecast[];
}

export interface IForecast {
  date: string;
  temp: number;
  weather: string;
}
