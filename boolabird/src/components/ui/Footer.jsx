import React from 'react';
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Services: ['Household Waste', 'Commercial Waste', 'Recycling', 'E-Waste'],
    Support: ['Help Center', 'Safety', 'Contact Us', 'FAQ'],
    Legal: ['Terms', 'Privacy', 'Cookies', 'Licenses'],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Wave Divider */}
      <div className="relative -top-1">
        <svg className="w-full h-12" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgb(249 250 251)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <Recycle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Boolabird</h2>
                <p className="text-gray-300">Clean City, Green Future</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md">
              Revolutionizing waste management at your doorstep. Join us in keeping the environment clean with just a few taps.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                <span>support@boolabird.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                <span>Bengaluru, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button variant="primary" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-6 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Boolabird. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
            
            {/* App Stores */}
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.666-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.787-.94 1.324-2.245 1.171-3.54-1.133.052-2.506.754-3.32 1.69-.729.85-1.379 2.207-1.197 3.514 1.26.09 2.544-.596 3.346-1.664z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>
              
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;