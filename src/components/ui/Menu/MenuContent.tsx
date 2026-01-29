import React from 'react';
import { MENU_CONSTANTS } from './constants';

interface MenuContentProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const MenuContent: React.FC<MenuContentProps> = ({ 
  children, 
  isOpen 
}) => {
  return (
    <div 
      className="overflow-y-auto px-4 sm:px-6 lg:px-8"
      style={{
        height: MENU_CONSTANTS.CONTENT_HEIGHT,
        pointerEvents: isOpen ? 'auto' : 'none',
        flex: `0 0 ${MENU_CONSTANTS.CONTENT_HEIGHT}`,
      }}
    >
      <div className="max-w-7xl mx-auto p-8 text-white">
        {children}
      </div>
    </div>
  );
};
