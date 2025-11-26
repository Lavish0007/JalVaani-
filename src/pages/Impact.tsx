import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { BarChart2, TrendingUp, Droplets, Crop } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 flex-grow">
        <div className="bg-green-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Impact</h1>
            <p className="text-xl max-w-3xl mx-auto">
              How JalVaani is revolutionizing water management in agriculture across India
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Real Results, Real Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex justify-center mb-6">
                    <div className="bg-green-100 rounded-full p-3">
                      <Droplets className="h-10 w-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Water Conservation</h3>
                  <div className="flex justify-center mb-4">
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-green-700">42%</span>
                      </div>
                      <svg className="w-40 h-40" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                             stroke="#22C55E"
                          strokeWidth="3"
                          strokeDasharray="42, 100"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    Average reduction in water usage across farms using JalVaani's planner
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex justify-center mb-6">
                    <div className="bg-green-100 rounded-full p-3">
                      <Crop className="h-10 w-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Yield Increase</h3>
                  <div className="flex justify-center mb-4">
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-green-700">27%</span>
                      </div>
                      <svg className="w-40 h-40" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                             stroke="#22C55E"
                          strokeWidth="3"
                          strokeDasharray="27, 100"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    Average increase in crop yield reported by farmers following our recommendations
                  </p>
                </div>
              </div>
              
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Growing Impact Across India
                </h3>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                         <div className="text-4xl font-bold text-green-700 mb-2">25,000+</div>
                      <p className="text-gray-700">Farmers Enrolled</p>
                    </div>
                    <div>
                         <div className="text-4xl font-bold text-green-700 mb-2">12</div>
                      <p className="text-gray-700">States Covered</p>
                    </div>
                    <div>
                         <div className="text-4xl font-bold text-green-700 mb-2">60,000</div>
                      <p className="text-gray-700">Hectares Optimized</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Environmental Benefits
                </h3>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Groundwater Preservation</h4>
                    </div>
                  </div>
                  <p className="text-gray-700 pl-16">
                    Our irrigation planners have helped preserve an estimated 2.3 billion liters of groundwater in the past year alone, contributing to sustainable water tables in agricultural regions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <BarChart2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Reduced Carbon Footprint</h4>
                    </div>
                  </div>
                  <p className="text-gray-700 pl-16">
                    Optimized irrigation means less energy used for pumping water, resulting in approximately 18,500 tonnes of CO2 emissions prevented annually.
                  </p>
                </div>
              </div>
              
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Economic Impact
                </h3>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Increased Farmer Income</h4>
                      <div className="text-4xl font-bold text-green-600 mb-4">₹35,000</div>
                      <p className="text-gray-700">
                        Average additional annual income per hectare for farmers using JalVaani's recommendations
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Resource Savings</h4>
                      <div className="text-4xl font-bold text-amber-600 mb-4">₹12,500</div>
                      <p className="text-gray-700">
                        Average annual savings on water, electricity, and labor costs per hectare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Testimonials
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 italic mb-4">
                      "JalVaani's irrigation planner has been a game-changer for my rice farm. I've reduced my water usage by nearly 40% while actually increasing my yield. The cost savings are substantial."
                    </p>
                    <div className="flex items-center">
                        <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                          <span className="text-green-700 font-bold">RK</span>
                        </div>
                      <div>
                        <p className="font-semibold">Rajesh Kumar</p>
                        <p className="text-sm text-gray-600">Rice Farmer, Punjab</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 italic mb-4">
                      "As a cotton farmer, I was skeptical at first, but the weather-based irrigation recommendations have saved me so much time and water. My plants are healthier and my yields have never been better."
                    </p>
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-green-700 font-bold">SP</span>
                      </div>
                      <div>
                        <p className="font-semibold">Sunita Patel</p>
                        <p className="text-sm text-gray-600">Cotton Farmer, Gujarat</p>
                      </div>
                    </div>
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

export default Impact;