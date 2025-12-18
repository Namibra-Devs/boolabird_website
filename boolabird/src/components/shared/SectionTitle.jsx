import React from 'react';
import { Sparkles } from 'lucide-react';

const SectionTitle = ({ title, subtitle, align = 'center', description }) => {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left mr-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignClasses[align]} mb-12`}>
      {subtitle && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-accent-500" />
          <span className="eco-badge">
            {subtitle}
          </span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-lg text-gray-600 mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;