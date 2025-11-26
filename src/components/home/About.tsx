import React from 'react';

const About = () => {
  return (
    <div className="relative py-16 bg-gray-50">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
          
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              JalVaani is dedicated to revolutionizing agricultural water management across India. We combine traditional farming wisdom with modern technology to provide precise irrigation recommendations based on crop type, soil conditions, and real-time weather data. Our mission is to help farmers conserve water while improving crop yields, promoting sustainable practices that benefit both agricultural communities and the environment. By providing accessible tools for optimal water usage, we're working towards a future where every drop counts and no crop suffers from either under or over-watering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;