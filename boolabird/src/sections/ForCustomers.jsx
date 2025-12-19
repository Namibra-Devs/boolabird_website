import React, { useState, useEffect } from 'react';
import { User, Truck, ChevronLeft, ChevronRight, Home, Package, Shield, Clock, Star } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Button from '../components/ui/Button';

const ForCustomers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  // Customer features slides
  const customerSlides = [
    {
      title: "Waste Management",
      subtitle: "Smart & Efficient",
      description: "Streamline your waste disposal with our intelligent scheduling system that adapts to your lifestyle.",
      icon: <Package className="w-8 h-8 text-[#01BA76]" />
    },
    {
      title: "Real-time Tracking",
      subtitle: "Stay Informed",
      description: "Track your waste collection in real-time with live updates and notifications throughout the process.",
      icon: <Shield className="w-8 h-8 text-[#01BA76]" />
    },
    {
      title: "Flexible Scheduling",
      subtitle: "24/7 Service",
      description: "Book pickups anytime that suits you. Our service works around your schedule, not the other way around.",
      icon: <Clock className="w-8 h-8 text-[#01BA76]" />
    }
  ];

  // Rider features slides
  const riderSlides = [
    {
      title: "Drive, Collect, Earn",
      subtitle: "Simple Process",
      description: "Start earning immediately with our straightforward pickup and delivery system designed for maximum efficiency.",
      icon: <Truck className="w-8 h-8 text-[#01BA76]" />
    },
    {
      title: "Flexible Hours",
      subtitle: "Work Your Way",
      description: "Choose your own schedule. Work full-time or part-time, day or night - you're in control.",
      icon: <Clock className="w-8 h-8 text-[#01BA76]" />
    },
    {
      title: "Support & Training",
      subtitle: "Full Assistance",
      description: "Get comprehensive training, equipment support, and 24/7 assistance throughout your journey.",
      icon: <Shield className="w-8 h-8 text-[#01BA76]" />
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % customerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % riderSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="for-customers" className="section-padding" style={{ backgroundColor: '#004129' }}>
      <div className="container-custom">
        {/* Main Title Section */}
        <div className="mb-16">
          <SectionTitle
            subtitle="Our Services"
            title="Join The Network"
            description="Whether you need service or want to provide it"
            align="center"
            dark={false}
          />
        </div>

        {/* Two Large Glassy Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Left Card - For Customers */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 relative overflow-hidden">
            {/* Glass Background Icons */}
            <div className="absolute top-4 left-4 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
              <User className="w-7 h-7 text-white" />
            </div>
            
            {/* House Icon from public/images */}
            <div className="absolute top-6 right-6">
              <div className="relative">
                
                <div className="relative w-30 h-30  flex items-center justify-center">
                  <img 
                    src="/images/house.png" 
                    alt="House"
                    className="w-30 h-30"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 6L40 18V42H8V18L24 6Z" stroke="#01BA76" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M18 42V24H30V42" stroke="#01BA76" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-20">
              <h3 className="text-3xl font-bold text-white mb-2">For Customers</h3>
              <h5 className='text-white mb-6'>Schedule pickups instantly and track your history</h5>
              
              <div className="space-y-4 mb-8">
                <p className="text-white/90">
                  <span className="text-[#01BA76] font-semibold">Transparent pricing</span> 
                </p>
                <p className="text-white/90">
                  <span className="text-[#01BA76] font-semibold">Reliable Scheduling</span> 
                </p>
                <p className="text-white/90">
                  <span className="text-[#01BA76] font-semibold">Affordable</span> 
                </p>
              </div>

              <Button 
                variant="secondary" 
                className="w-full mt-8 hover:scale-105"
              >
                Get Started as a Customer
              </Button>
            </div>
          </div>

          {/* Right Card - For Riders */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 relative overflow-hidden">
            {/* Truck Icon */}
            <div className="absolute top-4 left-4 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
              <Truck className="w-7 h-7 text-white" />
            </div>
            
            {/* Gloves Icon from public/images */}
            <div className="absolute top-6 right-6">
              <div className="relative">
                
                <div className="relative w-30 h-30 flex items-center justify-center">
                  <img 
                    src="/images/gloves.png" 
                    alt="Gloves"
                    className="w-30 h-30"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36 24V42H12V24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24Z" stroke="#01BA76" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M16 22V18C16 14.6863 18.6863 12 22 12H26C29.3137 12 32 14.6863 32 18V22" stroke="#01BA76" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-20">
              <h3 className="text-3xl font-bold text-white mb-2">For Riders</h3>
              <h5 className='text-white mb-6'>Register to be a truck driver and get paid for pickups</h5>
              
              <div className="space-y-4 mb-8">
                <p className="text-white/90">
                  <span className="text-[#01BA76] font-semibold">Monthly Payout</span> 
                </p>
                <p className="text-white/90">
                  <span className="text-[#01BA76] font-semibold">Flexible Hours</span> 
                </p>
                <p className="text-white/90">
                  <span className="text-[#01BA76] font-semibold">Bonuses and Icentitves</span>
                </p>
              </div>

              <Button 
                variant="secondary" 
                className="w-full mt-8 hover:scale-105"
              >
                Join as a Rider
              </Button>
            </div>
          </div>
        </div>

        {/* Image + Carousel Section - Customer Focus */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Large Image */}
            <div className="relative h-[450px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#416655] to-[#607E6A] flex items-center justify-center">
                {/* Image from public/images */}
                <img 
                  src="/images/trash.png" 
                  alt="Customer Service"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <div class="text-center">
                          <Home class="w-24 h-24 text-white/30 mx-auto mb-4" />
                          <p class="text-white/50 text-lg">Customer Feature Image</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Right - Carousel */}
            <div className="relative">
             
              

              {/* Carousel Content */}
              <div className="relative h-[300px] overflow-hidden">
                {customerSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center mr-4">
                        {slide.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{slide.title}</h4>
                        <p className="text-[#01BA76] font-medium">{slide.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-lg mb-8">{slide.description}</p>
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="flex gap-2 mb-8">
                {customerSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-[#01BA76] w-8' : 'bg-white/30 w-4 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Fixed Button */}
              <Button variant="secondary" className="w-full lg:w-auto">
                Get Started as a Customer
              </Button>
            </div>
          </div>
        </div>

        {/* Reversed Section - Rider Focus */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Carousel */}
            <div className="relative order-2 lg:order-1">
           
              {/* Carousel Content */}
              <div className="relative h-[300px] overflow-hidden">
                {riderSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                    }`}
                  >
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center mr-4">
                        {slide.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{slide.title}</h4>
                        <p className="text-[#01BA76] font-medium">{slide.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-lg mb-8">{slide.description}</p>
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="flex gap-2 mb-8">
                {riderSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide2(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide2 ? 'bg-[#01BA76] w-8' : 'bg-white/30 w-4 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Fixed Button */}
              <Button variant="secondary" className="w-full lg:w-auto">
                Join as a Rider
              </Button>
            </div>

            {/* Right - Large Image */}
            <div className="relative h-[450px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#416655] to-[#607E6A] flex items-center justify-center">
                {/* Image from public/images */}
                <img 
                  src="/images/driver.png" 
                  alt="Rider Service"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <div class="text-center">
                          <Truck class="w-24 h-24 text-white/30 mx-auto mb-4" />
                          <p class="text-white/50 text-lg">Rider Feature Image</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCustomers;