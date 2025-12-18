import React from 'react';

const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
  const baseClasses = 'btn inline-flex items-center justify-center gap-2 font-semibold';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;