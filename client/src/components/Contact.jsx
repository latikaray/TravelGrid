import React, { useState } from 'react';
import Navbar from './Custom/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactCards = [
    { icon: '✈️', title: 'Travel Inquiries', info: 'hello@travelgrid.com', sub: 'Response within 2 hours', bg: 'bg-blue-50 hover:bg-blue-100', color: 'text-blue-600', iconBg: 'from-blue-500 to-blue-600' },
    { icon: '🌍', title: '24/7 Support', info: '+91 1234567890', sub: 'Emergency assistance', bg: 'bg-green-50 hover:bg-green-100', color: 'text-emerald-700', iconBg: 'from-green-500 to-green-600' },
    { icon: '📍', title: 'Visit Our Office', info: 'Xyz, New Delhi', sub: 'Mon-Fri: 9AM-6PM', bg: 'bg-purple-50 hover:bg-purple-100', color: 'text-purple-600', iconBg: 'from-purple-500 to-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-100  to-gray-200  text-black py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Get in <span className="text-pink-500">Touch</span>
          </h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Planning your next adventure? We're here to help make it unforgettable!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Information</h3>
            <div className="space-y-6">
              {contactCards.map((card, index) => (
                <div key={index} className={`flex items-center p-4 ${card.bg} rounded-xl transition-colors`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.iconBg} rounded-xl flex items-center justify-center text-white text-xl mr-4`}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{card.title}</h4>
                    <p className={`${card.color}`}>{card.info}</p>
                    <p className="text-gray-500 text-sm">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-2xl p-8 border border-pink-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">✓</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
                <p className="text-gray-600">Our travel experts will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', type: 'text', placeholder: 'Enter your full name', label: 'Your Name' },
                  { name: 'email', type: 'email', placeholder: 'Enter your email address', label: 'Email Address' },
                  { name: 'message', type: 'textarea', placeholder: 'Tell us about your dream destination...', label: 'Message' }
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{field.label}</label>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        rows="6"
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none resize-none bg-white"
                        placeholder={field.placeholder}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none bg-white"
                        placeholder={field.placeholder}
                        required
                      />
                    )}
                  </div>
                ))}
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
