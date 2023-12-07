export interface IWeather {
  city: string;
  country: string;
  forecast: IForecast[];
}

export interface IForecast {
  date: string;
  avgTemp: number;
  weather: string;
}
