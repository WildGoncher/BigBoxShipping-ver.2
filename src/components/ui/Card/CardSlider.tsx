import React from 'react';

interface CardSliderProps {
  children: React.ReactNode;
  className?: string;
}

const CardSlider: React.FC<CardSliderProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`card-slider-styles ${className}`}>
      {children}
    </div>
  );
}

export default CardSlider;
