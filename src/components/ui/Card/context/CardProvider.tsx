import React, { useState } from 'react';
import { CardContext } from './CardContext';

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    console.log('Toggle slider!', !isSliderOpen);
    setIsSliderOpen(!isSliderOpen);
  };

  const openSlider = () => {
    console.log('Open Slider!');
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    console.log('Close Slider!');
    setIsSliderOpen(false);
  };

  const contextValue = {
    isSliderOpen,
    toggleSlider,
    openSlider,
    closeSlider
  };

  return (
    <CardContext.Provider value={contextValue}>
      {children}
    </CardContext.Provider>
  );
};
