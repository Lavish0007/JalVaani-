import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Sprout, Droplets, CloudRain, ThermometerSun } from 'lucide-react';
import { generateIrrigationPlan } from '../services/plannerService';

interface PlannerData {
  city: string;
  crop: string;
  soilType: string;
  irrigationSource: string;
}

interface IrrigationDay {
  day: string;
  date: string;
  weather: string;
  temperature: number;
  humidity: number;
  soilMoisture: number;
  irrigationNeeded: boolean;
  irrigationAmount: number;
  notes: string;
}

const Planner = () => {
  const [formData, setFormData] = useState<PlannerData>({
    city: '',
    crop: '',
    soilType: '',
    irrigationSource: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [plan, setPlan] = useState<IrrigationDay[] | null>(null);
  const [loading, setLoading] = useState(false);

  const cropOptions = [
    'Rice',
    'Wheat',
    'Sugarcane',
    'Cotton',
    'Maize',
    'Potato',
    'Onion',
    'Tomato',
    'Pulse',
    'Groundnuts',
    'Soybean',
    'Barley',
    'Cabbage',
    'Coffee',
    'Garden Flowers'
  ];

  const soilTypeOptions = [
    'Sandy',
    'Loamy',
    'Clayey',
    'Silty',
    'Peaty',
    'Chalky',
    'Saline'
  ];

  const irrigationSourceOptions = [
    'Rainwater',
    'Bore Well',
    'Canal',
    'River',
    'Pond',
    'Drip Irrigation',
    'Sprinkler System'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }
    
    if (!formData.crop) {
      newErrors.crop = 'Please select a crop';
    }
    
    if (!formData.soilType) {
      newErrors.soilType = 'Please select a soil type';
    }
    
    if (!formData.irrigationSource) {
      newErrors.irrigationSource = 'Please select an irrigation source';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      setPlan(null);
      
      try {
        // In a real application, we would call an API
        const planData = await generateIrrigationPlan(formData);
        setPlan(planData);
      } catch (error) {
        console.error('Error generating plan:', error);
        alert('Failed to generate irrigation plan. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 flex-grow bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-green-500 to-blue-700 px-6 py-8 text-white">
                <h2 className="text-3xl font-bold text-center">Irrigation Planner</h2>
                <p className="mt-2 text-center text-blue-100">
                  Get customized irrigation recommendations based on your crop, soil, and local weather
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setFormData({
                          ...formData,
                          [name]: value
                        });
                        if (errors[name]) {
                          setErrors({
                            ...errors,
                            [name]: ''
                          });
                        }
                      }}
                      placeholder="Enter your city name..."
                      className={`block w-full shadow-sm rounded-md border ${
                        errors.city ? 'border-red-300' : 'border-gray-300'
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3`}
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">
                      Crop Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Sprout className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="crop"
                        name="crop"
                        value={formData.crop}
                        onChange={handleChange}
                        className={`pl-10 block w-full shadow-sm rounded-md border ${
                          errors.crop ? 'border-red-300' : 'border-gray-300'
                        } focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2`}
                      >
                        <option value="">Select crop</option>
                        {cropOptions.map(crop => (
                          <option key={crop} value={crop}>{crop}</option>
                        ))}
                      </select>
                    </div>
                    {errors.crop && <p className="mt-1 text-sm text-red-600">{errors.crop}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 mb-1">
                      Soil Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <div className="h-5 w-5 bg-amber-600 rounded-full opacity-70"></div>
                      </div>
                      <select
                        id="soilType"
                        name="soilType"
                        value={formData.soilType}
                        onChange={handleChange}
                        className={`pl-10 block w-full shadow-sm rounded-md border ${
                          errors.soilType ? 'border-red-300' : 'border-gray-300'
                        } focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2`}
                      >
                        <option value="">Select soil type</option>
                        {soilTypeOptions.map(soil => (
                          <option key={soil} value={soil}>{soil}</option>
                        ))}
                      </select>
                    </div>
                    {errors.soilType && <p className="mt-1 text-sm text-red-600">{errors.soilType}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="irrigationSource" className="block text-sm font-medium text-gray-700 mb-1">
                      Irrigation Source
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Droplets className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="irrigationSource"
                        name="irrigationSource"
                        value={formData.irrigationSource}
                        onChange={handleChange}
                        className={`pl-10 block w-full shadow-sm rounded-md border ${
                          errors.irrigationSource ? 'border-red-300' : 'border-gray-300'
                        } focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2`}
                      >
                        <option value="">Select irrigation source</option>
                        {irrigationSourceOptions.map(source => (
                          <option key={source} value={source}>{source}</option>
                        ))}
                      </select>
                    </div>
                    {errors.irrigationSource && (
                      <p className="mt-1 text-sm text-red-600">{errors.irrigationSource}</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating Plan...
                      </>
                    ) : (
                      'Generate Irrigation Plan'
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {plan && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-4">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">Your 7-Day Irrigation Plan</h3>
                      <p className="text-blue-100">Based on your selections and current weather forecast for {formData.city}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <Sprout className="h-4 w-4 mr-1" />
                        {formData.crop}
                      </span>
                      <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                        {formData.soilType} Soil
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Day</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Weather</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Temp/Humidity</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Soil Moisture</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Irrigation</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plan.map((day, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4 border-b border-gray-200">
                            <div className="font-medium">{day.day}</div>
                            <div className="text-sm text-gray-500">{day.date}</div>
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200">
                            <div className="flex items-center">
                              {day.weather.includes('Rain') ? (
                                <CloudRain className="h-5 w-5 mr-2 text-blue-500" />
                              ) : day.weather.includes('Cloud') ? (
                                <CloudRain className="h-5 w-5 mr-2 text-gray-400" />
                              ) : (
                                <ThermometerSun className="h-5 w-5 mr-2 text-amber-500" />
                              )}
                              {day.weather}
                            </div>
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200">
                            <div className="flex items-center">
                              <ThermometerSun className="h-5 w-5 mr-2 text-amber-500" />
                              {day.temperature}°C / {day.humidity}%
                            </div>
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className={`h-2.5 rounded-full ${
                                  day.soilMoisture > 600 
                                    ? 'bg-green-600' 
                                    : day.soilMoisture > 300
                                    ? 'bg-green-400'
                                    : 'bg-amber-400'
                                }`}
                                style={{ width: `${Math.min(100, (day.soilMoisture / 10))}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{day.soilMoisture} units</div>
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              day.irrigationNeeded 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {day.irrigationNeeded ? (
                                <>
                                  <Droplets className="h-3 w-3 mr-1" />
                                  {day.irrigationAmount}mm
                                </>
                              ) : (
                                'Not Needed'
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">
                            {day.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-green-50 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Droplets className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800">Water Conservation Summary</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        This plan will save approximately 25-30% water compared to traditional irrigation methods.
                        Always check soil moisture before irrigating when the recommendation is borderline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Planner;