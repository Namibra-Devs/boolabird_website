import React from 'react';
import { Bike, DollarSign, Calendar, MapPin, Shield, TrendingUp, Users, Award, Briefcase, CheckCircle, Star, Zap } from 'lucide-react';
import SectionTitle from '@components/shared/SectionTitle';
import Button from '@components/ui/Button';

const ForRiders = () => {
  const perks = [
    {
      icon: DollarSign,
      title: 'Earn More',
      description: 'Competitive pay with bonuses and incentives',
      stat: '₹25K-40K/month',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description: 'Choose your own working hours',
      stat: '24/7 Availability',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Shield,
      title: 'Full Support',
      description: 'Insurance, equipment, and training',
      stat: '100% Covered',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Career advancement and skill development',
      stat: 'Promotion Path',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
  ];

  const requirements = [
    'Valid Driving License',
    'Smartphone with internet',
    '18+ years of age',
    'Clean background check',
    'Basic physical fitness',
    'Passion for environment',
  ];

  return (
    <section id="for-riders" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="For Riders"
          title="Join Our Green Warriors Team"
          description="Earn while making a positive impact on the environment"
          align="center"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Hero Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-32 -mr-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -ml-32"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">10,000+ Riders Empowered</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">Be a Climate Hero</h3>
                <p className="text-primary-100 mb-8 opacity-90">
                  Join India's largest network of eco-friendly waste collectors. 
                  Earn a sustainable income while making a positive environmental impact.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">₹500</div>
                    <div className="text-sm text-primary-100">Daily Bonus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">7 Days</div>
                    <div className="text-sm text-primary-100">Fast Onboarding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-primary-100">Support</div>
                  </div>
                </div>
                
                <Button className="w-full bg-white text-primary-600 hover:bg-primary-50 shadow-xl">
                  <Zap className="w-5 h-5 mr-2" />
                  Apply Now in 5 Minutes
                </Button>
              </div>
            </div>
            
            {/* Floating Icon */}
            <div className="absolute -bottom-6 -right-6">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <Bike className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          
          {/* Perks Grid */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className={`${perk.bgColor} border ${perk.borderColor} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 rounded-lg ${perk.bgColor} flex items-center justify-center mr-4 border ${perk.borderColor}`}>
                      <perk.icon className={`w-6 h-6 ${perk.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{perk.title}</h4>
                      <div className="text-2xl font-bold mt-2 text-gray-900">{perk.stat}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{perk.description}</p>
                </div>
              ))}
            </div>
            
            {/* Requirements Card */}
            <div className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 text-primary-600 mr-3" />
                Simple Requirements to Start
              </h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="font-medium text-gray-800">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Rider Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Hear from Our Riders</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-primary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 font-bold text-lg mr-4">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Boolabird Rider • 2 years</p>
                </div>
                <div className="ml-auto flex">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="text-gray-900 font-bold ml-1">4.9</span>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I've doubled my income since joining Boolabird. The flexible schedule lets me work around my family time."
              </p>
              <div className="text-primary-600 font-medium">₹38,500/month average</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-3xl p-8 border border-secondary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-800 font-bold text-lg mr-4">
                  PS
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Team Lead • 3 years</p>
                </div>
                <div className="ml-auto flex">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="text-gray-900 font-bold ml-1">5.0</span>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "From rider to team lead in 18 months! Boolabird truly values growth and provides amazing support."
              </p>
              <div className="text-secondary-600 font-medium">Now managing 50+ riders</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-3xl p-8 border border-accent-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-800 font-bold text-lg mr-4">
                  AK
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Amit Kumar</h4>
                  <p className="text-sm text-gray-600">New Rider • 3 months</p>
                </div>
                <div className="ml-auto flex">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="text-gray-900 font-bold ml-1">4.8</span>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The training was excellent. I was earning within a week of joining. Best decision I ever made!"
              </p>
              <div className="text-accent-600 font-medium">₹28,000 first month</div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 shadow-2xl">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Ready to Make a Difference?</h4>
              <p className="text-primary-100">Join our team of environmental heroes today</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-white text-primary-600 hover:bg-primary-50 shadow-xl">
                Apply as Rider
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                Download Rider App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRiders;