namespace API.Helpers
{
    public class OpenWeatherResponse
    {
        public City City { get; set; }

        public List<Forecast> List { get; set; }

        public Weather Weather { get; set; }
    }

    public class Forecast
    {
        public string Dt_txt { get; set; }
        public Main Main { get; set; }
        public IEnumerable<Weather> Weather { get; set; }
    }

    public class Weather
    {
        public string Main { get; set; }
    }

    public class City
    {
        public string Name { get; set; }
        public string Country { get; set; }
    }



    public class Main
    {
        public double Temp { get; set; }
    }
}