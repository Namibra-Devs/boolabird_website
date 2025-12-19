import React from 'react';
import { Shield, Clock, DollarSign, Star, Home, Users, Award, Zap } from 'lucide-react';
import SectionTitle from '@components/shared/SectionTitle';
import Button from '@components/ui/Button';

const ForCustomers = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'On-Demand Service',
      description: 'Schedule pickups anytime, 24/7 service available',
      color: 'text-green-600',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified riders, contactless pickup, and sanitized process',
      color: 'text-blue-600',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges',
      color: 'text-emerald-600',
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Trained professionals with quality equipment',
      color: 'text-amber-600',
    },
    {
      icon: Home,
      title: 'Home & Office',
      description: 'Service for residential and commercial properties',
      color: 'text-purple-600',
    },
    {
      icon: Users,
      title: 'Family Plans',
      description: 'Special packages for households and communities',
      color: 'text-pink-600',
    },
  ];

  const wasteTypes = [
    { type: 'Household Waste', color: 'bg-green-100 text-green-800' },
    { type: 'Recyclables', color: 'bg-blue-100 text-blue-800' },
    { type: 'E-Waste', color: 'bg-purple-100 text-purple-800' },
    { type: 'Organic Waste', color: 'bg-emerald-100 text-emerald-800' },
    { type: 'Plastic Waste', color: 'bg-amber-100 text-amber-800' },
    { type: 'Hazardous Waste', color: 'bg-red-100 text-red-800' },
  ];

  return (
    <section id="for-customers" className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="For Customers"
          title="Smart Waste Management Made Simple"
          align="center"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Benefits */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${benefit.color.replace('text', 'bg')} bg-opacity-20 flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Stats & CTA */}
          <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-8 text-white">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Trusted by 50,000+ Customers</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Join the Clean City Movement</h3>
              <p className="text-green-100 mb-8">
                Be part of the solution. Every pickup contributes to a cleaner, greener city.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-green-100">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-green-100">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15min</div>
                <div className="text-sm text-green-100">Avg. Response</div>
              </div>
            </div>
            
            <Button className="w-full bg-white text-green-600 hover:bg-green-50">
              <Zap className="w-5 h-5 mr-2" />
              Download Customer App
            </Button>
          </div>
        </div>
        
        {/* Waste Types */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">We Handle All Types of Waste</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {wasteTypes.map((waste, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full ${waste.color} font-medium`}
              >
                {waste.type}
              </span>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mr-4">
                SJ
              </div>
              <div>
                <h4 className="text-xl font-bold">Sarah Johnson</h4>
                <p className="text-gray-600">Homeowner, 2 years with Boolabird</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-lg italic text-gray-700">
              "Boolabird has transformed how we manage household waste. The app is incredibly easy to use, 
              and their riders are always punctual and professional. Knowing that our waste is being properly 
              recycled gives us peace of mind."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCustomers; 