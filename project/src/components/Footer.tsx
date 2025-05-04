import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/products';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-1">AGI-DANI</span>
              <span className="text-red-500">Beton</span>
            </h3>
            <p className="text-stone-300 mb-4">
              Quality concrete and stone products for construction projects of all sizes. 
              From residential to commercial, we deliver the materials you need.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/AgiDanishpk/" 
                className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/agidani_sh.p.k/"
                className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-stone-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/concrete-products" className="text-stone-300 hover:text-white transition-colors">Concrete Products</Link>
              </li>
              <li>
                <Link to="/stone-products" className="text-stone-300 hover:text-white transition-colors">Stone Products</Link>
              </li>
              <li>
                <Link to="/machinery" className="text-stone-300 hover:text-white transition-colors">Machinery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-red-500" />
                <span className="text-stone-300">{contactInfo.address}</span>
              </li>
              {contactInfo.phones.map((phone, index) => (
                <li key={index} className="flex items-center">
                  <Phone size={20} className="mr-3 text-red-500" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-stone-300 hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-red-500" />
                <a href={`mailto:${contactInfo.email}`} className="text-stone-300 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-red-500" />
                <div>
                  <p className="text-stone-300">Monday - Friday:</p>
                  <p className="text-white font-medium">7:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-red-500" />
                <div>
                  <p className="text-stone-300">Saturday:</p>
                  <p className="text-white font-medium">7:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-red-500" />
                <div>
                  <p className="text-stone-300">Sunday:</p>
                  <p className="text-white font-medium">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="py-4 border-t border-stone-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              &copy; {new Date().getFullYear()} Fabrika e Betonit & Gurëthyesi AGI-DANI. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0">
              <ul className="flex space-x-4 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;