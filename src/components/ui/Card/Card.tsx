import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
const baseStyles = " backdrop-blur-lg text-white rounded-md p-6  w-1/4 ";

  const variantStyles = {
    default: "bg-white/10 border border-white/20",
     outlined: "bg-transparent border-2 border-dark-green", 
    elevated: "bg-white/15 border border-white/30 shadow-2xl"
  }

  const currentVariantStyle = variantStyles[variant];

  return (
    <div className={`${baseStyles} ${currentVariantStyle} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
