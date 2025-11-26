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
          filter: "brightness(0.9)"
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight">
          <span className="block transform transition-all duration-1000 translate-y-0 opacity-100">
            JalVaani
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl font-medium italic">
          "जितनी जरूरत, उतना पानी"
        </p>
        
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
          Smart water management for healthier crops and a sustainable future
        </p>
        
          <div className="animate-bounce mt-4">
          <Link 
            to="/planner" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Start Planning
          </Link>
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