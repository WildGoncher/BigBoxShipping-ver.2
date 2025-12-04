import React from 'react';
import { CardProvider } from './context';

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
  const baseStyles = "rounded-sm p-8 backdrop-blur-md transition-all duration-300";
  
  const variantStyles = {
    default: "bg-white/10 border border-white/20",
    outlined: "bg-transparent border-2 border-dark-green",
    elevated: "bg-white/15 border border-white/30 shadow-2xl"
  };

  const currentVariantStyle = variantStyles[variant];

  return (
    <CardProvider>
      <div className={`${baseStyles} ${currentVariantStyle} ${className}`}>
        {children}
      </div>
    </CardProvider>
  );
};

export default Card;
