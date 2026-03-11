import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }, 300);
    }
  };

  // For anchor links: if already on home, scroll directly; otherwise navigate home then scroll
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { label: 'How It Works', href: '#how-it-works', type: 'anchor' },
    { label: 'For Customers', href: '#for-customers', type: 'anchor' },
    { label: 'For Riders', href: '#for-riders', type: 'anchor' },
    { label: 'Jobs', href: '/jobs', type: 'route' },
  ];

  const renderNavLink = (item, className, onClick) => {
    if (item.type === 'route') {
      return (
        <Link
          key={item.label}
          to={item.href}
          className={className}
          onClick={onClick}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        key={item.label}
        href={item.href}
        className={className}
        onClick={(e) => {
          handleAnchorClick(e, item.href);
          onClick?.();
        }}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/logo.png"
                    alt="Boolabird Logo"
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" fill="url(#gradient)"/>
                          <circle cx="16" cy="16" r="4" fill="white"/>
                          <defs>
                            <linearGradient id="gradient" x1="4" y1="16" x2="28" y2="16">
                              <stop offset="0%" stopColor="#22c55e"/>
                              <stop offset="100%" stopColor="#3b82f6"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      `;
                    }}
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) =>
                renderNavLink(
                  item,
                  "relative text-white/90 hover:text-white font-medium transition-all duration-300 group"
                )
              )}
              <Button
                variant="primary"
                icon={Download}
                className="shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ml-4"
              >
                Download App
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center group"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute top-0 left-0 h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                  isOpen ? 'top-1/2 transform -translate-y-1/2 rotate-45' : ''
                }`}></span>
                <span className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-0' : 'w-4 left-1'
                }`}></span>
                <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                  isOpen ? 'top-1/2 transform -translate-y-1/2 -rotate-45' : ''
                }`}></span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl transition-opacity duration-500 ${
              isAnimating ? 'animate-[fadeIn_0.5s_ease-out]' : 'opacity-0'
            }`}
            onClick={handleMenuToggle}
          ></div>

          <div
            className={`relative z-50 h-full flex flex-col justify-between pt-28 pb-10 px-6 transition-all duration-500 ${
              isAnimating ? 'animate-[slideIn_0.5s_ease-out]' : 'translate-x-full'
            }`}
          >
            <div className="space-y-6">
              {navItems.map((item, index) =>
                renderNavLink(
                  item,
                  `block text-2xl font-semibold text-white hover:text-primary-300 transition-all duration-300 transform hover:translate-x-2 ${
                    isAnimating ? `animate-[slideUp_0.5s_ease-out_${index * 100}ms]` : 'opacity-0'
                  }`,
                  handleMenuToggle
                )
              )}
            </div>

            <div className={isAnimating ? 'animate-[slideUp_0.5s_ease-out_300ms]' : 'opacity-0'}>
              <Button
                variant="primary"
                icon={Download}
                className="w-full py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                onClick={handleMenuToggle}
              >
                Download App
              </Button>
            </div>

            <div className={`text-center text-white/60 text-sm mt-8 ${
              isAnimating ? 'animate-[fadeIn_0.5s_ease-out_400ms]' : 'opacity-0'
            }`}>
              <p>Clean City, Green Future</p>
              <p className="mt-2">support@boolabird.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;