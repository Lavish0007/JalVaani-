import React, { useEffect, useState } from 'react';
import { Cloud, CloudRain, Sun, Wind, Thermometer, Droplets } from 'lucide-react';
import { fetchWeatherData, fetchForecast } from '../../services/weatherService';

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  date: string;
}

interface ForecastDay {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

const WeatherDisplay = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState('New Delhi');

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const weatherData = await fetchWeatherData(city);
        setCurrentWeather(weatherData);
        
        const forecastData = await fetchForecast(city);
        setForecast(forecastData);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load weather data. Please try again.');
        setLoading(false);
      }
    };
    
    loadWeatherData();
  }, [city]);

  const handleCityChange = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const newCity = formData.get('city') as string;
    
    if (newCity && newCity.trim() !== '') {
      setCity(newCity);
    }
  };

  const getWeatherIcon = (description: string) => {
    if (description.includes('rain') || description.includes('drizzle')) {
      return <CloudRain className="h-10 w-10 text-blue-500" />;
    } else if (description.includes('cloud')) {
      return <Cloud className="h-10 w-10 text-gray-500" />;
    } else {
      return <Sun className="h-10 w-10 text-yellow-500" />;
    }
  };

  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Weather Forecast</h2>
        
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleCityChange} className="mb-8 flex">
            <input
              type="text"
              name="city"
              placeholder="Enter city name..."
              className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-r-md transition"
            >
              Search
            </button>
          </form>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : (
            <>
              {/* Current Weather */}
              {currentWeather && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-blue-700 text-white p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold">{currentWeather.city}, {currentWeather.country}</h3>
                        <p className="text-blue-100">{currentWeather.date}</p>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0">
                        {getWeatherIcon(currentWeather.description)}
                        <span className="ml-2 text-3xl font-bold">{Math.round(currentWeather.temperature)}°C</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <Thermometer className="h-5 w-5 mr-2" />
                        <span>Feels like: {Math.round(currentWeather.temperature)}°C</span>
                      </div>
                      <div className="flex items-center">
                        <Wind className="h-5 w-5 mr-2" />
                        <span>Wind: {currentWeather.windSpeed} km/h</span>
                      </div>
                      <div className="flex items-center">
                        <Droplets className="h-5 w-5 mr-2" />
                        <span>Humidity: {currentWeather.humidity}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-lg text-gray-700 mb-4">
                      <span className="font-medium">Current Conditions:</span> {currentWeather.description.charAt(0).toUpperCase() + currentWeather.description.slice(1)}
                    </p>
                    
                    <div className="bg-green-50 p-4 rounded">
                      <p className="text-blue-800">
                        <strong>Agricultural Impact:</strong> {
                          currentWeather.description.includes('rain')
                            ? 'Current rainfall may reduce irrigation needs. Monitor soil moisture levels.'
                            : currentWeather.temperature > 30
                              ? 'High temperatures may increase water requirements. Consider additional irrigation.'
                              : 'Moderate conditions are suitable for most crops. Follow regular irrigation schedule.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 5-Day Forecast */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">3-Day Forecast</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {forecast.map((day, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
                    <div className="bg-green-600 text-white text-center py-2">
                      <p className="font-medium">{day.date}</p>
                    </div>
                    <div className="p-4 text-center">
                      <div className="flex justify-center mb-2">
                        {getWeatherIcon(day.description)}
                      </div>
                      <p className="text-2xl font-bold">{Math.round(day.temperature)}°C</p>
                      <p className="text-gray-600 text-sm mt-1">{day.description.charAt(0).toUpperCase() + day.description.slice(1)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Weather-Based Irrigation Recommendations</h3>
                <p className="text-gray-700 mb-4">
                  Based on the current forecast, here are some irrigation recommendations for your crops:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-0.5">
                      <Droplets className="h-4 w-4" />
                    </span>
                    {forecast.some(day => day.description.includes('rain')) 
                      ? "Rainfall expected in the coming days. Reduce irrigation to avoid overwatering."
                      : "No significant rainfall expected. Maintain regular irrigation schedule."}
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-0.5">
                      <Thermometer className="h-4 w-4" />
                    </span>
                    {forecast.some(day => day.temperature > 30)
                      ? "High temperatures forecast. Consider increasing water frequency but reducing volume per application."
                      : "Moderate temperatures expected. Standard water applications should be sufficient."}
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-0.5">
                      <Wind className="h-4 w-4" />
                    </span>
                    {currentWeather && currentWeather.windSpeed > 15
                      ? "Windy conditions may increase evaporation. Water during early morning or evening."
                      : "Low wind speeds are favorable for efficient irrigation."}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
