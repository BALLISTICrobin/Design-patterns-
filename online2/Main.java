package online2;

public class Main {
    public static void main(String[] args) {
        // Legacy service instance
        LegacyWeatherService legacyWeatherService = new LegacyWeatherService();
        WeatherProvider wp = new Adapter(legacyWeatherService);

        WeatherApp app = new WeatherApp(wp);
        app.displayWeather();  // Output: Legacy weather data
    }

}
