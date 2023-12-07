using API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace API.Controllers
{
    [ApiController]
    [Route("api/weather")]
    public class WeatherController : ControllerBase
    {
        private readonly IConfiguration _config;
        public WeatherController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet("{city}")]
        public async Task<IActionResult> City(string city)
        {
            string apiKey = _config["ApiKey"];

            using var client = new HttpClient();
            try
            {
                client.BaseAddress = new Uri("http://api.openweathermap.org");
                var response = await client.GetAsync($"/data/2.5/forecast?q={city}&units=metric&cnt=24&appid={apiKey}");
                response.EnsureSuccessStatusCode();

                var stringResult = await response.Content.ReadAsStringAsync();
                var rawWeather = JsonConvert.DeserializeObject<OpenWeatherResponse>(stringResult);

                var forecast = rawWeather.List
                .GroupBy(f => DateTime.Parse(f.Dt_txt))
                .Select(g => new
                {
                    Date = g.Key,
                    Temp = g.Select(f => f.Main.Temp),
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