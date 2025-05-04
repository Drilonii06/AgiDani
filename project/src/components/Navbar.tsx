import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Truck, Phone } from 'lucide-react';
import { contactInfo } from '../data/products';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Concrete Products', path: '/concrete-products' },
    { name: 'Stone Products', path: '/stone-products' },
    { name: 'Machinery', path: '/machinery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <div className="bg-red-800 text-white py-2 hidden lg:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Truck size={16} className="mr-2" />
              <span className="text-sm">Free delivery with every order</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span className="text-sm">{contactInfo.phones[0]}</span>
            </div>
          </div>
        </div>
      </div>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container-custom">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-stone-800 mr-1">AGI-DANI</span>
                <span className="text-red-700 text-xl font-bold">Beton</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-red-700 border-b-2 border-red-700' 
                      : 'text-stone-700 hover:text-red-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="btn btn-primary ml-4 py-2 text-sm">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-stone-800 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out ${
            isOpen ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="container-custom py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 ${
                  location.pathname === item.path
                    ? 'text-red-700 font-medium'
                    : 'text-stone-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Link to="/contact" className="btn btn-primary w-full text-center">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;