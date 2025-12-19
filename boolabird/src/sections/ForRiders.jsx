import React from 'react';
import { Apple, MessageCircle, Play } from 'lucide-react';
import SectionTitle from '@components/shared/SectionTitle';
import Button from '@components/ui/Button';

const ForRiders = () => {
  return (
    <section id="for-riders" className="section-padding bg-[#004129] text-white">
      <div className="container-custom">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Large Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/images/phone.png" 
                alt="Boolabird App Interface"
                className="rounded-3xl  w-full h-auto max-h-[600px] object-cover"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center border border-white/20">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Right: Download Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Download <span className="text-green-300">BoolaBird</span>
              
            </h2>
            
            <p className="text-xl text-white/80 mb-8">
              Join India's largest network of eco-friendly waste collectors. 
              Earn while making a positive environmental impact.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-700 px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center justify-center gap-3">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center justify-center gap-3">
                  <Play className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Logo and Description */}
            <div className="lg:hidden mb-8"> {/* Mobile: Below everything */}
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="Boolabird Logo"
                  className="h-12 w-auto"
                />
                
              </div>
              <p className="text-white/70">
               Experience the future of waste management with features designed for convenience, transparency and impact.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Logo and Description (Desktop only) */}
          <div className="hidden lg:block order-1"> {/* Desktop: Left side */}
            <div className="sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Boolabird Logo"
                  className="h-16 w-auto"
                />
               
              </div>
              <p className="text-white/70 text-lg">
                Experience the future of waste management with features designed for convenience, transparency and impact.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <form className="space-y-6">
                {/* Mobile: Send button at top */}
                <div className="lg:hidden mb-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-[#004129] hover:bg-gray-100 py-3 rounded-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {/* Desktop: Send button at right */}
                <div className="hidden lg:flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-white text-[#004129] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRiders;