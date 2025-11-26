import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Analytics from '../components/home/Analytics';
import SamplePlanner from '../components/home/SamplePlanner';
import TeamCards from '../components/home/TeamCards';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
        <About />
        <TeamCards />
        <Analytics />
        <SamplePlanner />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;