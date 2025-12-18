import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon, 
  loading = false,
  disabled = false,
  ...props 
}) => {
  // Base classes for all buttons
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer';
  
  // Size classes
  const sizeClasses = 'px-8 py-4 text-lg';
  
  // Variant-specific classes
  const variantClasses = {
    // Primary: Glassy with green border
    primary: `
      bg-white/10 backdrop-blur-sm 
      border-2 border-[#01BA76] 
      text-white 
      hover:bg-[#01BA76]/20 
      focus:ring-[#01BA76]
      shadow-lg hover:shadow-xl
    `,
    
    // Secondary: Solid green background
    secondary: `
      bg-[#01BA76] 
      text-white 
      hover:bg-[#01BA76]/90 
      focus:ring-[#01BA76]
      border-2 border-transparent
      shadow-lg hover:shadow-xl
    `,
    
    // Accent: Alternative style (optional)
    accent: `
      bg-gradient-to-r from-[#FEE9B5] to-[#416655]
      text-gray-800
      hover:opacity-90
      focus:ring-[#416655]
      border-2 border-transparent
      shadow-lg hover:shadow-xl
    `,
    
    // Ghost: Minimal style (optional)
    ghost: `
      bg-transparent
      border-2 border-white/30
      text-white
      hover:bg-white/10
      focus:ring-white/50
      backdrop-blur-sm
    `
  };

  // Loading state classes
  const loadingClasses = 'opacity-70 cursor-not-allowed';
  
  // Disabled state classes
  const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg';

  return (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses}
        ${variantClasses[variant]}
        ${loading ? loadingClasses : ''}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
      disabled={loading || disabled}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {/* Icon */}
      {Icon && !loading && <Icon className="w-5 h-5" />}
      
      {/* Button text */}
      {children}
    </button>
  );
};

export default Button;