import React from 'react';


const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center', 
  description, 
  
  dark = false  // New prop for light backgrounds
}) => {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left mr-auto',
    right: 'text-right ml-auto',
  };

  // Colors based on dark prop
  const textColor = dark ? 'text-gray-800' : 'text-white';
  const subtitleTextColor = dark ? 'text-[#01BA76]' : 'text-[#01BA76]';
  const descriptionColor = dark ? 'text-gray-600' : 'text-white/80';
  const glassBg = dark ? 'bg-gray-50/80 backdrop-blur-sm' : 'bg-white/10 backdrop-blur-xl';
  const glassBorder = dark ? 'border-gray-200' : 'border-white/20';


  return (
    <div className={`max-w-3xl ${alignClasses[align]} mb-12`}>
      {subtitle && (
        <div className="mb-4">
          <div className="inline-flex items-center gap-2">
           
            <div className={`${glassBg} backdrop-blur-xl border ${glassBorder} rounded-full px-6 py-3`}>
              <span className={`${subtitleTextColor} font-semibold tracking-wide uppercase text-sm`}>
                {subtitle}
              </span>
            </div>
          </div>
        </div>
      )}
      
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${textColor}`}>
        {title}
      </h2>
      
      {description && (
        <p className={`text-lg ${descriptionColor} mt-4 leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;