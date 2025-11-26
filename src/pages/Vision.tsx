import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Droplets, Sprout, Globe, Users } from 'lucide-react';

const Vision = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 flex-grow">
          <div 
          className="bg-cover bg-center relative py-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <div className="absolute inset-0 bg-green-900 opacity-80"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">Our Vision</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A future where every drop of water is used with purpose, where farmers thrive, and where agriculture becomes a solution to water scarcity
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Droplets className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission Statement</h2>
                <p className="text-xl text-gray-700 italic">
                  "To transform agricultural water management through technology and education, creating a sustainable future where farmers maximize yields while conserving our most precious resource."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="bg-green-50 p-8 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Droplets className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Water Conservation</h3>
                  </div>
                  <p className="text-gray-700">
                    We envision a future where precision irrigation is the norm, not the exception. By 2030, we aim to save 500 billion liters of water annually through our smart irrigation technology and farmer education programs.
                  </p>
                </div>
                
                <div className="bg-green-50 p-8 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Sprout className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Crop Yield</h3>
                  </div>
                  <p className="text-gray-700">
                    We strive to increase agricultural productivity through optimal water management. Our goal is to help farmers achieve a 30% increase in crop yield while using less water, leading to improved food security and farmer prosperity.
                  </p>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  Our Strategic Goals
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Short-term (1-2 Years)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Expand our reach to 100,000 farmers across 15 states in India</li>
                      <li>Enhance our weather forecasting system with hyperlocal predictions</li>
                      <li>Develop partnerships with 50 agricultural cooperatives and institutions</li>
                      <li>Launch educational workshops in 200 villages on water conservation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Medium-term (3-5 Years)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Implement IoT-based soil moisture monitoring systems for real-time data</li>
                      <li>Develop AI models that can predict optimal irrigation needs with 95% accuracy</li>
                      <li>Create a national network of "Water Champions" to promote sustainable practices</li>
                      <li>Reduce water usage in participating farms by an average of 40%</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Long-term (5-10 Years)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Expand to international markets, starting with South Asia and Africa</li>
                      <li>Develop fully automated irrigation systems controlled by our AI algorithm</li>
                      <li>Advocate for policy changes that reward water-efficient farming practices</li>
                      <li>Create a global standard for agricultural water efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  Our Core Values
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Sustainability</h3>
                    <p className="text-gray-700">
                      We believe in creating solutions that meet today's needs without compromising future generations' ability to meet theirs.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Innovation</h3>
                    <p className="text-gray-700">
                      We continuously seek new and better ways to solve agricultural challenges through technology and creative thinking.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-800 mb-2">Accessibility</h3>
                    <p className="text-gray-700">
                      We design our solutions to be affordable and usable by all farmers, regardless of their scale or technological expertise.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">Collaboration</h3>
                    <p className="text-gray-700">
                      We work alongside farmers, scientists, policymakers, and communities to create holistic solutions to water challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  The JalVaani Difference
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="p-6">
                    <div className="bg-green-100 rounded-full p-4 inline-flex mb-4">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Farmer-Centered</h3>
                    <p className="text-gray-700">
                      We design all our solutions with direct input from farmers, ensuring they're practical, affordable, and easy to implement.
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-green-100 rounded-full p-4 inline-flex mb-4">
                      <Sprout className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Holistic Approach</h3>
                    <p className="text-gray-700">
                      We consider all aspects of farming, from soil conditions to weather patterns to crop selection, for truly optimized solutions.
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-amber-100 rounded-full p-4 inline-flex mb-4">
                      <Globe className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Data-Driven</h3>
                    <p className="text-gray-700">
                      We harness the power of data analytics and machine learning to provide recommendations that are precise and effective.
                    </p>
                  </div>
                </div>
              </div>
              
  
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Vision;