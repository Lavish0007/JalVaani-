// This service connects to WeatherAPI.com for real weather data

const API_KEY = '63d918fbbd5d4cad96c143106252611';
const API_BASE_URL = 'https://api.weatherapi.com/v1';

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

// Fetch current weather data from WeatherAPI
export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    
    const data = await response.json();
    
    return {
      city: data.location.name,
      country: data.location.country,
      temperature: Math.round(data.current.temp_c),
      description: data.current.condition.text.toLowerCase(),
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
      windSpeed: Math.round(data.current.wind_kph),
      date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Fetch 5-day forecast from WeatherAPI
export const fetchForecast = async (city: string): Promise<ForecastDay[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no`
    );
    
    if (!response.ok) {
      throw new Error('Forecast data not available');
    }
    
    const data = await response.json();
    
    const forecastDays: ForecastDay[] = data.forecast.forecastday.map((day: any) => {
      // WeatherAPI forecast: day.day.avgtemp_c is the correct field (no underscore).
      // Use a safe fallback in case avgtemp_c is missing.
      let tempVal: number | undefined = undefined;
      if (day && day.day) {
        if (typeof day.day.avgtemp_c === 'number') {
          tempVal = day.day.avgtemp_c;
        } else if (typeof day.day.maxtemp_c === 'number') {
          tempVal = day.day.maxtemp_c;
        } else if (typeof day.day.mintemp_c === 'number') {
          tempVal = day.day.mintemp_c;
        }
      }
      if (!Number.isFinite(tempVal as number)) tempVal = 0;

      return {
        date: new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        temperature: Math.round(tempVal as number),
        description: (day.day && day.day.condition && day.day.condition.text ? String(day.day.condition.text).toLowerCase() : 'unknown'),
        icon: (day.day && day.day.condition && day.day.condition.icon) || ''
      } as ForecastDay;
    });
    
    return forecastDays;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};