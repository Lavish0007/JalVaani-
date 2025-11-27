import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, Bell, Trash2 } from 'lucide-react';
import { getNotifications, removeNotification, clearNotifications as clearAllNotifications, seedSampleNotifications, Notification as NotifType } from '../../services/notificationService';
import Logo from '../shared/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHindi, setIsHindi] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotifType[]>([]);
  const [clearAll, setClearAll] = useState(false);

  useEffect(() => {
    const list = getNotifications();
    if (list.length === 0) {
      // seed some sample notifications for first-time users
      seedSampleNotifications();
      setNotifications(getNotifications());
    } else {
      setNotifications(list);
    }
  }, []);

  useEffect(() => {
    if (clearAll) {
      clearAllNotifications();
      setNotifications([]);
      setClearAll(false);
      setIsNotifOpen(false);
    }
  }, [clearAll]);

  const handleRemove = (id: string) => {
    removeNotification(id);
    setNotifications(getNotifications());
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
    // Update main headings throughout the application
    const translations: Record<string, string> = {
      'About Us': 'हमारे बारे में',
      'Analytics': 'विश्लेषण',
      'Irrigation Management': 'सिंचाई प्रबंधन',
      'Sample Irrigation Planner': 'नमूना सिंचाई योजनाकार',
      'Weather Forecast': 'मौसम का पूर्वानुमान',
      'Our Impact': 'हमारा प्रभाव',
      'Our Vision': 'हमारी दृष्टि',
      'Contact Us': 'संपर्क करें'
    };

    document.querySelectorAll('h1, h2, h3').forEach(element => {
      const text = element.textContent;
      if (text && translations[text]) {
        element.textContent = isHindi ? text : translations[text];
      }
    });
  };

  return (
    <nav className="bg-green-100 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold text-green-700">JalVaani</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-green-900 hover:text-green-600 transition">Home</Link>
            <Link to="/about" className="px-3 py-2 text-green-900 hover:text-green-600 transition">About</Link>
            <Link to="/weather" className="px-3 py-2 text-green-900 hover:text-green-600 transition">Weather</Link>
            <Link to="/planner" className="px-3 py-2 text-green-900 hover:text-green-600 transition">Planner</Link>
            
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-green-900 hover:text-green-600 transition"
            >
              {isHindi ? 'English' : 'हिंदी'}
            </button>

            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                aria-label="Notifications"
                className="p-2 rounded-full text-green-900 hover:text-green-600 transition focus:outline-none"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {notifications.length}
                  </span>
                )}
              </button>

              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-md shadow-lg z-50">
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">Notifications</h4>
                      <div className="flex items-center space-x-2">
                        <label className="flex items-center text-xs">
                          <input
                            type="checkbox"
                            className="mr-1"
                            checked={clearAll}
                            onChange={(e) => setClearAll(e.target.checked)}
                          />
                          Clear all
                        </label>
                        <button
                          onClick={() => { clearAllNotifications(); setNotifications([]); }}
                          className="p-1 rounded hover:bg-gray-100"
                          title="Clear all"
                        >
                          <Trash2 className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <ul className="mt-2 max-h-48 overflow-auto">
                      {notifications.length === 0 && (
                        <li className="text-sm text-gray-500 py-2">No notifications</li>
                      )}
                      {notifications.map(n => (
                        <li key={n.id} className="flex items-start justify-between py-2 border-b last:border-b-0">
                          <div className="text-sm pr-2">{n.village ? (<><span className="font-semibold">{n.village}:</span> </>) : null}{n.text}</div>
                          <div className="flex items-center">
                            <button onClick={() => handleRemove(n.id)} className="text-xs text-gray-500 hover:text-gray-800">Dismiss</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/login" 
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition flex items-center"
            >
              <LogIn className="mr-1 h-4 w-4" />
              Login / Signup
            </Link>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile notification bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                aria-label="Notifications"
                className="p-2 rounded-full text-green-900 hover:text-green-600 transition focus:outline-none"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {notifications.length}
                  </span>
                )}
              </button>

              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg z-50">
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">Notifications</h4>
                      <div className="flex items-center space-x-2">
                        <label className="flex items-center text-xs">
                          <input
                            type="checkbox"
                            className="mr-1"
                            checked={clearAll}
                            onChange={(e) => setClearAll(e.target.checked)}
                          />
                          Clear all
                        </label>
                        <button
                          onClick={() => { clearAllNotifications(); setNotifications([]); }}
                          className="p-1 rounded hover:bg-gray-100"
                          title="Clear all"
                        >
                          <Trash2 className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <ul className="mt-2 max-h-48 overflow-auto">
                      {notifications.length === 0 && (
                        <li className="text-sm text-gray-500 py-2">No notifications</li>
                      )}
                      {notifications.map(n => (
                        <li key={n.id} className="flex items-start justify-between py-2 border-b last:border-b-0">
                          <div className="text-sm pr-2">{n.village ? (<><span className="font-semibold">{n.village}:</span> </>) : null}{n.text}</div>
                          <div className="flex items-center">
                            <button onClick={() => handleRemove(n.id)} className="text-xs text-gray-500 hover:text-gray-800">Dismiss</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <button onClick={toggleMenu} className="text-gray-600 hover:text-green-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-100 pt-2 pb-4 px-4 shadow-lg">
          <Link to="/" className="block px-3 py-2 text-green-900 hover:text-green-600 border-b border-green-200">Home</Link>
          <Link to="/about" className="block px-3 py-2 text-green-900 hover:text-green-600 border-b border-green-200">About</Link>
          <Link to="/weather" className="block px-3 py-2 text-green-900 hover:text-green-600 border-b border-green-200">Weather</Link>
          <Link to="/planner" className="block px-3 py-2 text-green-900 hover:text-green-600 border-b border-green-200">Planner</Link>
          
          <button
            onClick={toggleLanguage}
            className="w-full text-left px-3 py-2 text-green-900 hover:text-green-600 border-b border-green-200"
          >
            {isHindi ? 'English' : 'हिंदी'}
          </button>
          
          <Link to="/login" className="px-3 py-2 mx-3 text-green-600 font-medium hover:text-green-800 mt-2 inline-flex items-center">
            <LogIn className="mr-1 h-4 w-4" />
            Login / Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;