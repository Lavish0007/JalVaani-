import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Send } from 'lucide-react';
import Logo from '../shared/Logo';

const Footer = () => {
  const feedbackFormRef = useRef<HTMLFormElement>(null);
  const feedbackTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [isClearing, setIsClearing] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    alert('Thank you for subscribing to our newsletter!');
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    alert('Thank you for your feedback!');
    
    // Clear textarea with animation
    setIsClearing(true);
    setTimeout(() => {
      if (feedbackTextareaRef.current) {
        feedbackTextareaRef.current.value = '';
      }
      setIsClearing(false);
    }, 300);
  };

  const scrollToFeedback = () => {
    feedbackFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    feedbackFormRef.current?.parentElement?.classList.add('ring-2', 'ring-yellow-300');
    setTimeout(() => {
      feedbackFormRef.current?.parentElement?.classList.remove('ring-2', 'ring-yellow-300');
    }, 3000);
  };

  return (
    <footer 
      className="bg-green-800 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f8c962cc?auto=compress&cs=tinysrgb&w=1200&q=80')",
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-green-800 opacity-85"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section - Social and Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-bold text-white">JalVaani</span>
            </div>
            <p className="text-green-200 mb-4">
              Smart water management for sustainable agriculture
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-300 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-300 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-300 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Middle section - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <button 
                onClick={scrollToFeedback}
                className="flex items-start text-green-200 hover:text-green-300 transition cursor-pointer bg-transparent border-none outline-none focus:outline-none"
              >
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-green-300" />
                <span>Share Your Feedback</span>
              </button>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/about" className="text-green-200 hover:text-green-300 transition">About Us</Link>
                <Link to="/weather" className="text-green-200 hover:text-green-300 transition">Weather</Link>
                <Link to="/impact" className="text-green-200 hover:text-green-300 transition">Our Impact</Link>
                <Link to="/vision" className="text-green-200 hover:text-green-300 transition">Our Vision</Link>
                <Link to="/planner" className="text-green-200 hover:text-green-300 transition">Planner</Link>
                
              </div>
            </div>
          </div>
          
          {/* Right section - Newsletter and Feedback */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Stay Updated (Subscribe To Our Newsletter)</h3>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md flex items-center justify-center transition"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Share Your Feedback</h3>
              <form onSubmit={handleFeedbackSubmit} ref={feedbackFormRef} className="transition-all duration-300">
                <textarea 
                  ref={feedbackTextareaRef}
                  placeholder="We value your suggestions..." 
                  className={`w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 transition-opacity duration-300 ${isClearing ? 'opacity-50' : 'opacity-100'}`}
                  rows={3}
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm relative z-10">
          <p>&copy; {new Date().getFullYear()} JalVaani. All rights reserved.</p>
          <p className="mt-1">Saving water, one crop at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;