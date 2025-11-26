import React from 'react';
import { Droplets, Sprout, TrendingDown, BarChart } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Impact of Irrigation Mismanagement</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Improper irrigation practices lead to significant challenges in agriculture, affecting both crop health and water resources.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Water Wastage</h3>
            <p className="text-gray-700 text-center">
              Up to 30% of irrigation water is wasted through overwatering, leading to unnecessary depletion of groundwater resources.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Sprout className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Root Damage</h3>
            <p className="text-gray-700 text-center">
              Excessive water causes root rot and fungal diseases, reducing a plant's ability to absorb nutrients effectively.
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Yield Reduction</h3>
            <p className="text-gray-700 text-center">
              Studies show overwatered crops can experience up to 25% reduction in yield compared to optimally watered crops.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <BarChart className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Economic Loss</h3>
            <p className="text-gray-700 text-center">
              Indian farmers lose an estimated ₹20,000 crores annually due to crop damage from improper irrigation practices.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">How Our Planner Helps</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            JalVaani's intelligent planning system optimizes water usage while maximizing crop health and yield.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center mb-4 text-blue-700">Precision Irrigation</h3>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-700">40%</span>
                  </div>
                  <svg className="w-32 h-32" viewBox="0 0 36 36">
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
                      strokeDasharray="40, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 text-center">
                Reduces water usage by up to 40% through data-driven irrigation scheduling tailored to specific crop needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center mb-4 text-green-700">Yield Improvement</h3>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-700">25%</span>
                  </div>
                  <svg className="w-32 h-32" viewBox="0 0 36 36">
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
                      strokeDasharray="25, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 text-center">
                Farmers using our planner report an average 25% increase in crop yield through optimized growing conditions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center mb-4 text-amber-700">Cost Savings</h3>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-700">35%</span>
                  </div>
                  <svg className="w-32 h-32" viewBox="0 0 36 36">
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
                      stroke="#D97706"
                      strokeWidth="3"
                      strokeDasharray="35, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 text-center">
                Reduce water bills and pumping costs by 35% through efficient irrigation scheduling and reduced energy consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;