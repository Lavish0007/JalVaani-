import React from 'react';
import { Cloud, CloudRain, Droplets } from 'lucide-react';

const SamplePlanner = () => {
  // Sample planner data for rice with clayey soil
  const plannerData = [
    { day: 'Monday', weather: 'Rainy', irrigation: 'Not Required', notes: 'Natural rainfall sufficient' },
    { day: 'Tuesday', weather: 'Rainy', irrigation: 'Not Required', notes: 'Soil moisture adequate' },
    { day: 'Wednesday', weather: 'Dry', irrigation: 'Required', notes: '20mm irrigation recommended in morning' },
    { day: 'Thursday', weather: 'Dry', irrigation: 'Monitor', notes: 'Check soil moisture before irrigating' },
    { day: 'Friday', weather: 'Rainy', irrigation: 'Not Required', notes: 'Heavy rainfall expected' },
    { day: 'Saturday', weather: 'Rainy', irrigation: 'Not Required', notes: 'Soil saturation at optimal level' },
    { day: 'Sunday', weather: 'Dry', irrigation: 'Not Required', notes: 'Soil moisture still sufficient from previous rain' },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Sample Irrigation Planner</h2>
        <p className="text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          Here's an example weekly irrigation plan for rice crops in clayey soil during a mixed weather pattern
        </p>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-green-600 text-white p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Weekly Irrigation Plan</h3>
                <p className="text-green-100">Rice crop in clayey soil</p>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <div className="flex items-center mr-4">
                  <Cloud className="h-5 w-5 mr-1" />
                  <span className="text-sm">Dry: 3 days</span>
                </div>
                <div className="flex items-center">
                  <CloudRain className="h-5 w-5 mr-1" />
                  <span className="text-sm">Rainy: 4 days</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Day</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Weather</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Irrigation</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {plannerData.map((day, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b border-gray-200">{day.day}</td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      <div className="flex items-center">
                        {day.weather === 'Rainy' ? (
                          <CloudRain className="h-5 w-5 mr-2 text-green-500" />
                        ) : (
                          <Cloud className="h-5 w-5 mr-2 text-amber-500" />
                        )}
                        {day.weather}
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        day.irrigation === 'Required' 
                          ? 'bg-green-100 text-green-800' 
                          : day.irrigation === 'Monitor'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {day.irrigation === 'Required' && <Droplets className="h-3 w-3 mr-1" />}
                        {day.irrigation}
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-gray-600">{day.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-green-50 p-4">
            <p className="text-sm text-green-800">
              <strong>Note:</strong> This plan is adjusted based on soil moisture retention capacity and current weather forecasts. 
              Clayey soils retain moisture longer, so irrigation is only recommended when necessary.
            </p>
          </div>
        </div>
        
          <div className="mt-8 text-center">
          <a 
            href="/planner"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
          >
            Create Your Custom Plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default SamplePlanner;