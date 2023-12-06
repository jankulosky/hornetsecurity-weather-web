using API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace API.Controllers
{
    [ApiController]
    [Route("api/weather")]
    public class WeatherController : ControllerBase
    {
        [HttpGet("{city}")]
        public async Task<IActionResult> City(string city)
        {
            using var client = new HttpClient();
            try
            {
                client.BaseAddress = new Uri("http://api.openweathermap.org");
                var response = await client.GetAsync($"/data/2.5/forecast?q={city}&units=metric&appid=802d182e27c13c97599030f179ea345b");
                response.EnsureSuccessStatusCode();

                var stringResult = await response.Content.ReadAsStringAsync();
                var rawWeather = JsonConvert.DeserializeObject<OpenWeatherResponse>(stringResult);

                var forecast = rawWeather.List
                .GroupBy(f => DateTime.Parse(f.Dt_txt).Date)
                .Take(4)
                .Select(g => new
                {
                    Date = g.Key,
                    AvgTemp = g.Average(f => f.Main.Temp),
                    Weather = string.Join(", ", g.SelectMany(f => f.Weather.Select(w => w.Main)).Distinct())
                });

                return Ok(new
                {
                    City = rawWeather.City.Name,
                    rawWeather.City.Country,
                    Forecast = forecast
                });
            }
            catch (HttpRequestException httpRequestException)
            {
                return BadRequest($"Error getting weather from OpenWeather: {httpRequestException.Message}");
            }
        }
    }
}