import React from 'react';
import { Calendar, MapPin, Truck, CheckCircle, Smartphone, CreditCard, Bell, ArrowRight } from 'lucide-react';
import SectionTitle from '@components/shared/SectionTitle';
import Button from '@components/ui/Button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Smartphone,
      title: 'Download & Book',
      description: 'Get our app and schedule a pickup in under a minute',
      features: ['Simple registration', 'Quick booking', 'Multiple waste types'],
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Schedule Pickup',
      description: 'Choose your preferred date and time slot',
      features: ['Flexible timing', 'Recurring schedules', 'Instant confirmation'],
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
    },
    {
      number: '03',
      icon: MapPin,
      title: 'Track Rider',
      description: 'Follow your waste collector in real-time',
      features: ['Live location tracking', 'ETA updates', 'Route optimization'],
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
    },
    {
      number: '04',
      icon: Truck,
      title: 'Collection & Payment',
      description: 'Hassle-free service completion',
      features: ['Digital receipts', 'Secure payments', 'Rating system'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="Simple Process"
          title="How Boolabird Works"
          description="Four easy steps to responsible waste management"
          align="center"
        />
        
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-10 right-10 h-2 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 rounded-full"></div>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>
                
                <div className={`${step.bgColor} border ${step.borderColor} rounded-3xl p-8 pt-14 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 border ${step.borderColor}`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className={`w-4 h-4 ${step.color} mr-2 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
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
            <div className="bg-gradient-to-br from-white to-primary-50 rounded-3xl p-8 border border-primary-100">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <Bell className="w-7 h-7 text-primary-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Smart Notifications</h4>
              <p className="text-gray-600 mb-4">
                Get reminders before pickup and confirmation after service completion.
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-secondary-50 rounded-3xl p-8 border border-secondary-100">
              <div className="w-14 h-14 rounded-2xl bg-secondary-100 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-secondary-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Flexible Payments</h4>
              <p className="text-gray-600 mb-4">
                Multiple payment options including cards, UPI, and cash on delivery.
              </p>
              <div className="flex items-center text-secondary-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-accent-50 rounded-3xl p-8 border border-accent-100">
              <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-accent-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Quality Guarantee</h4>
              <p className="text-gray-600 mb-4">
                100% satisfaction guarantee with our professional waste management service.
              </p>
              <div className="flex items-center text-accent-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h4>
              <p className="text-primary-100">Join thousands of satisfied customers today</p>
            </div>
            <Button className="bg-white text-primary-600 hover:bg-primary-50 shadow-xl">
              Download App Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;