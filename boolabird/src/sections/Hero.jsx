import React, { useEffect, useState } from 'react';
import { Trash2, Users, Bike } from 'lucide-react';

import Button from '../components/ui/Button';

const Hero = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    riders: 0,
    waste: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = {
        customers: 50000 / steps,
        riders: 50 / steps,
        waste: 500 / steps
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters({
          customers: Math.floor(increment.customers * step),
          riders: Math.floor(increment.riders * step),
          waste: Math.floor(increment.waste * step)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters({
            customers: 50000,
            riders: 50,
            waste: 500
          });
        }
      }, duration / steps);

      return () => clearInterval(timer);
    };

    animateCounters();
  }, []);

  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center -mt-24"
      style={{
        background: 'linear-gradient(to bottom, #004129 0%, #607E6A 100%)'
      }}
    >
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* Glassy Top Note */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 inline-flex items-center gap-2">
            
            <span className="font-semibold text-sm sm:text-base tracking-wide" style={{ color: '#01BA76' }}>
              Now Live in Your City
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight px-4">
            Revolutionizing Waste Management
            <br />
            at Your{' '}
            <span className="inline-block relative">
              {/* Gradient background for "doorstep" */}
              <span className="relative z-10 px-3 py-1 text-white">
                Doorstep
              </span>
              <span 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, #FEE9B5 , #004129 100%)',
                  zIndex: 1
                }}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-md md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Efficient, eco-friendly waste collection for modern cities. Join us in keeping the environment clean with just a few taps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up px-4 cursor-pointer">
            {/* Glassy Green Border Button */}
            <Button
              className=""
              style={{ borderColor: '#01BA76' }}
            >
              Join as a Rider
            </Button>
            
            {/* Green Background Button */}
            <Button
              className="text-white hover:bg-[#01BA76]/90 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#01BA76' }}
            >
              Get Started as a Customer
            </Button>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="relative w-full h-[350px] sm:h-[350px] md:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden mb-16 mt-8 mx-auto max-w-6xl animate-slide-up">
          
          
          {/* Hero Image */}
        <div className="relative w-full h-[full] sm:h-[full] md:h-[full] rounded-2xl md:rounded-3xl overflow-hidden mb-16 mt-8 mx-auto max-w-6xl animate-slide-up">
          
          <img
            src="/images/hero.png"
            alt="Waste collection service"
            className="w-full h-full object-cover"
          />
        </div>

          
        </div>

        {/* Glassy Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4">
         {/* Customers */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 animate-slide-up flex flex-col justify-between h-full">
  {/* Icon */}
  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
    <Users className="w-6 h-6 text-[#01BA76]" />
  </div>

  {/* Description */}
  <p className="text-white/80 text-sm leading-relaxed mt-6">
    Join our growing community of satisfied customers enjoying seamless waste management.
  </p>

  {/* Count */}
  <div className="mt-6">
    <div className="text-3xl sm:text-4xl font-bold text-white">
      {counters.customers.toLocaleString()}+
    </div>
    <div className="text-sm text-white/70">Happy Customers</div>
  </div>
</div>

          {/* Stat Card 2 - Waste Riders */}
         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 animate-slide-up delay-200 flex flex-col justify-between h-full">
  {/* Icon */}
  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
    <Bike className="w-6 h-6 text-[#01BA76]" />
  </div>

  {/* Description */}
  <p className="text-white/80 text-sm leading-relaxed mt-6">
    Our dedicated team of eco-warriors ensuring your waste is collected responsibly.
  </p>

  {/* Count */}
  <div className="mt-6">
    <div className="text-3xl sm:text-4xl font-bold text-white">
      {counters.riders.toLocaleString()}+
    </div>
    <div className="text-sm text-white/70">Waste Riders</div>
  </div>
</div>


          {/* Stat Card 3 - Waste Recycled */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 animate-slide-up delay-400 flex flex-col justify-between h-full">
  {/* Icon */}
  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
    <Trash2 className="w-6 h-6 text-[#01BA76]" />
  </div>

  {/* Description */}
  <p className="text-white/80 text-sm leading-relaxed mt-6">
    Contributing to a cleaner environment through responsible waste management practices.
  </p>

  {/* Count */}
  <div className="mt-6">
    <div className="text-3xl sm:text-4xl font-bold text-white">
      {counters.waste}+ Tons
    </div>
    <div className="text-sm text-white/70">Waste Recycled</div>
  </div>
</div>

        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-up.delay-200 {
          animation-delay: 200ms;
          opacity: 0;
        }

        .animate-slide-up.delay-400 {
          animation-delay: 400ms;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;