import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WeatherDisplay from '../components/weather/WeatherDisplay';

const Weather = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 flex-grow">
        <WeatherDisplay />
      </div>
      
      <Footer />
    </div>
  );
};

export default Weather;