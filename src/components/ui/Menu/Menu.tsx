import React from 'react';
import { MenuTrigger } from './MenuTrigger';
import { MenuContent } from './MenuContent';
import { MenuNavigation } from './sections/MenuNavigation';
import { MenuContactForm } from './sections/MenuContactForm';
import { MenuContactsInfo } from './sections/MenuContactsInfo';
import { MENU_CONSTANTS } from './constants';

export interface MenuProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ 
  isOpen, 
  onToggle, 
  className = '' 
}) => {
  const handleFormSubmit = (data: { email: string; message: string }) => {
    console.log('Данные формы из меню:', data);
    // Здесь можно добавить отправку на бэкенд
  };

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-500 ease-in-out
        ${className}
      `}
      style={{
        height: MENU_CONSTANTS.TOTAL_HEIGHT,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 97%, 50% 100%, 0% 97%)',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transform: isOpen 
          ? 'translateY(0)' 
          : `translateY(calc(-${MENU_CONSTANTS.CONTENT_HEIGHT}))`,
        display: 'flex',
        flexDirection: 'column',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Основное меню"
      aria-expanded={isOpen}
    >
      <MenuContent isOpen={isOpen}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {/* Левая колонка: Навигация */}
          <MenuNavigation />
          
          {/* Центральная колонка: Форма связи */}
          <MenuContactForm onSubmit={handleFormSubmit} />
          
          {/* Правая колонка: Контактная информация */}
          <MenuContactsInfo />
        </div>
      </MenuContent>
      
      <MenuTrigger 
        isOpen={isOpen} 
        onToggle={onToggle} 
        label="BB SHIP"
      />
    </div>
  );
};
