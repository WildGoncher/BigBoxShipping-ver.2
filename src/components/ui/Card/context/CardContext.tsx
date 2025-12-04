import React, { createContext } from 'react';

interface CardContextType {
  isSliderOpen: boolean;
  toggleSlider: () => void;
  openSlider: () => void;
  closeSlider: () => void;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);
