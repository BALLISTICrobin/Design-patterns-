package online2;

public class Adapter implements WeatherProvider{
    private LegacyWeatherService legacyWeather;
    public Adapter(LegacyWeatherService legacyWeatherService) {
        this.legacyWeather = legacyWeatherService;
    }

//    public void Adapter(LegacyWeatherService legacyWeather){
//
//    }

    public String fetchWeather(){
        return legacyWeather.getWeatherData();
    }
}
