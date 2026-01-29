import React from "react";
import { createContext } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
  isOpen?: boolean;
  onToggle?: () => void;
}

interface CardContextType {
  isOpen?: boolean;
  onToggle?: () => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  isOpen,
  onToggle,
}) => {
  const baseStyles =
    "rounded-sm p-8 backdrop-blur-md transition-all duration-300";

  const variantStyles = {
    default: "bg-white/10 border border-white/20",
    outlined: "bg-transparent border-2 border-dark-green",
    elevated: "bg-white/15 border border-white/30 shadow-2xl",
  };

  const currentVariantStyle = variantStyles[variant];

  return (
    <CardContext.Provider value={{ isOpen, onToggle }}>
      <div className={`${baseStyles} ${currentVariantStyle} ${className}`}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

export { CardContext };
export default Card;
