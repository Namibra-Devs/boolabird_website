import React from 'react';
import { Calendar, MapPin, Truck, CheckCircle, Smartphone, CreditCard, Bell, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import Button from '../components/ui/Button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Smartphone,
      title: 'Download & Book',
      description: 'Get our app and schedule a pickup in under a minute',
      features: ['Simple registration', 'Quick booking', 'Multiple waste types'],
      color: 'text-white',
      bgColor: 'bg-[#01BA76]',
      borderColor: 'border-white',
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Schedule Pickup',
      description: 'Choose your preferred date and time slot',
      features: ['Flexible timing', 'Recurring schedules', 'Instant confirmation'],
      color: 'text-white',
      bgColor: 'bg-[#01BA76]',
      borderColor: 'border-white',
    },
    {
      number: '03',
      icon: MapPin,
      title: 'Rider Dispatched',
      description: 'An online driver close to your location will be assigned',
      features: ['Live location tracking', 'ETA updates', 'Route optimization'],
      color: 'text-white',
      bgColor: 'bg-[#01BA76]',
      borderColor: 'border-white',
    },
    {
      number: '04',
      icon: Truck,
      title: 'Collection & Payment',
      description: 'Your waste is collected and transported to the disposal facility',
      features: ['Digital receipts', 'Secure payments', 'Rating system'],
      color: 'text-white',
      bgColor: 'bg-[#01BA76]',
      borderColor: 'border-white',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Add dark={true} prop here */}
        <SectionTitle
          subtitle="Simple Process"
          title="How It Works"
          description="Four easy steps to responsible waste management"
          align="center"
          dark={true}  // This makes it use dark text for light backgrounds
        />
        
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-10 right-10 h-2 bg-gradient-to-r from-[#01BA76]/20 to-[#416655]/20 rounded-full"></div>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#01BA76] to-[#416655] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>
                
                <div className={`${step.bgColor} border ${step.borderColor} rounded-3xl p-8 pt-14 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 border ${step.borderColor}`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-white/90 mb-6">{step.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className={`w-4 h-4 ${step.color} mr-2 flex-shrink-0`} />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Highlight */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#01BA76]/10 flex items-center justify-center mb-6">
                <Bell className="w-7 h-7 text-[#01BA76]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Smart Notifications</h4>
              <p className="text-gray-600 mb-4">
                Get reminders before pickup and confirmation after service completion.
              </p>
             
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#01BA76]/10 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-[#01BA76]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Flexible Payments</h4>
              <p className="text-gray-600 mb-4">
                Multiple payment options including cards, UPI, and cash on delivery.
              </p>
             
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#01BA76]/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-[#01BA76]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Quality Guarantee</h4>
              <p className="text-gray-600 mb-4">
                100% satisfaction guarantee with our professional waste management service.
              </p>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;