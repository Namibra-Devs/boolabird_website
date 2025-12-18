import React from 'react';
import { Truck, Recycle, Leaf, Download, Play, Sparkles, Shield, Users, Award } from 'lucide-react';
import Button from '../components/ui/Button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-primary-300/20 to-secondary-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gradient-to-r from-accent-300/10 to-primary-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-8 border border-primary-200">
              <Sparkles className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-sm font-semibold text-primary-800">Eco-Friendly Service • 100% Carbon Neutral</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Revolutionizing</span>{' '}
              <span className="gradient-text">Waste Management</span>
              <br />
              <span className="text-gray-700">at Your Doorstep</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Efficient, eco-friendly waste collection for modern cities. Join us in keeping the environment clean with just a few taps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" icon={Download}>
                Download App
              </Button>
              <Button variant="secondary" icon={Play}>
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '50K+', label: 'Happy Customers', icon: Users, color: 'text-primary-600' },
                { value: '10K+', label: 'Waste Riders', icon: Shield, color: 'text-secondary-600' },
                { value: '500T+', label: 'Waste Recycled', icon: Award, color: 'text-accent-600' },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <stat.icon className="w-4 h-4" />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* App Interface */}
              <div className="relative h-80 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden">
                {/* Animated Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-ping"></div>
                    <Truck className="absolute inset-0 m-auto w-32 h-32 text-primary-600 animate-float" />
                    <Recycle className="absolute -top-4 -right-4 w-16 h-16 text-secondary-500 animate-spin-slow" />
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary-600" />
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-secondary-600" />
                </div>
              </div>
              
              {/* Features Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-xl border border-primary-200">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <Truck className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="font-bold text-primary-800">Schedule Pickup</span>
                  </div>
                  <p className="text-sm text-primary-700">Book in 30 seconds</p>
                </div>
                
                <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-4 rounded-xl border border-secondary-200">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <Recycle className="w-5 h-5 text-secondary-600" />
                    </div>
                    <span className="font-bold text-secondary-800">Track Live</span>
                  </div>
                  <p className="text-sm text-secondary-700">Real-time updates</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 bg-accent-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
              <span className="font-bold">New Update!</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce delay-500">
              <span className="font-bold">Eco Hero!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 55C840 60 960 50 1080 40C1200 30 1320 20 1380 15L1440 10V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z" fill="url(#gradient)"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default Hero;