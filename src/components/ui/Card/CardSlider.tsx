import React from "react";
import { CardContext } from "./Card";
import { useContext } from "react";

interface CardSliderProps {
  children: React.ReactNode;
  className?: string;
}


const CardSlider: React.FC<CardSliderProps> = ({
  children,
  className = "",
}) => {
  const context = useContext(CardContext);
  const isOpen = context?.isOpen ?? false;

  return (
    <div
      className={`
      overflow-hidden 
      transition-all 
      duration-500 
      ease-in-out
transform-gpu 
      ${
        isOpen
          ? "max-h-96 opacity-100 mt-4 scale-y-100"
          : "max-h-0 opacity-0 scale-y-95"
      }
      ${className}
    `}
    >
      <div className="pt-4 border-t border-white/20">{children}</div>
    </div>
  );
};

export default CardSlider;
