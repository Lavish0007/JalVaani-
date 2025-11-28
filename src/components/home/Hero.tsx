import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
        parallaxRef.current.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/539282/pexels-photo-539282.jpeg')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight">
          <span className="block transform transition-all duration-1000 translate-y-0 opacity-100 text-7xl">
            JalVaani
          </span>
        </h1>
        
        <p className="text-xl md:text-1xl mb-8 text-center max-w-3xl font-medium italic">
          "जितनी जरूरत, उतना पानी"
        </p>
        
        

        {/* Feature Cards Above Button */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-black bg-opacity-60 border border-green-400 rounded-full px-6 py-2 text-lg font-semibold text-white">
            AI Powered
          </div>
          <div className="bg-black bg-opacity-60 border border-green-400 rounded-full px-6 py-2 text-lg font-semibold text-white">
            Farmer Friendly
          </div>
        </div>
        
        <div className="animate-bounce mt-4">
          <Link 
            to="/planner" 
            className="bg-gradient-to-r from-green-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Start Planning
          </Link>
        </div>

        {/* Feature Highlights Below Button */}
        <div className="mt-8 w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-black bg-opacity-40 border border-green-500 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🌤️</div>
              <p className="text-sm md:text-base font-semibold">Real-time<br />weather updates</p>
            </div>
            <div className="bg-black bg-opacity-40 border border-green-500 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🌱</div>
              <p className="text-sm md:text-base font-semibold">Crop-specific<br />water planning</p>
            </div>
            <div className="bg-black bg-opacity-40 border border-green-500 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🔔</div>
              <p className="text-sm md:text-base font-semibold">IN<br />Notification support</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;