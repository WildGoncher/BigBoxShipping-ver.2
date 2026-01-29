import React from 'react';

interface MenuTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
  label: string;
}

export const MenuTrigger: React.FC<MenuTriggerProps> = ({ 
  isOpen, 
  onToggle, 
  label 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <div 
      className="flex items-center justify-between cursor-pointer px-8"
      onClick={handleClick}
      style={{ height: '80px', flexShrink: 0 }}
    >
      <div className="text-white text-xl font-bold">{label}</div>
      <div 
        className="absolute left-1/2 -translate-x-1/2 bottom-4"
        aria-hidden="true"
      >
        <svg 
          width="80" 
          height="12" 
          viewBox="0 0 122 19" 
          fill="currentColor"
          className={`text-white transition-transform duration-500 ease-in-out ${
            isOpen ? 'scale-y-[-1]' : 'scale-y-100'
          }`}
          style={{
            transformOrigin: 'center center',
          }}
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M1.35578 0.35665C1.78446 0.243597 2.29372 0.153901 2.85438 0.0927012C3.41503 0.0315012 4.01608 0 4.62309 0C5.2301 0 5.83115 0.0315012 6.39181 0.0927012C6.95247 0.153901 7.46172 0.243597 7.8904 0.35665L60.0012 14.0673L112.112 0.35665C112.541 0.24378 113.05 0.154246 113.611 0.0931608C114.172 0.0320758 114.773 0.000635598 115.379 0.000635598C115.986 0.000635598 116.587 0.0320758 117.148 0.0931608C117.708 0.154246 118.218 0.24378 118.647 0.35665C119.076 0.469521 119.416 0.603517 119.648 0.75099C119.88 0.898462 120 1.05652 120 1.21615C120 1.37577 119.88 1.53383 119.648 1.6813C119.416 1.82877 119.076 1.96277 118.647 2.07564L63.2685 16.6434C62.8398 16.7564 62.3306 16.8461 61.7699 16.9073C61.2093 16.9685 60.6082 17 60.0012 17C59.3942 17 58.7932 16.9685 58.2325 16.9073C57.6718 16.8461 57.1626 16.7564 56.7339 16.6434L1.35578 2.07564C0.92602 1.96287 0.585049 1.82891 0.352401 1.68142C0.119754 1.53394 0 1.37583 0 1.21615C0 1.05647 0.119754 0.898354 0.352401 0.750868C0.585049 0.603382 0.92602 0.469418 1.35578 0.35665Z" 
          />
        </svg>
      </div>
      <span className="sr-only">
        {isOpen ? 'Закрыть меню' : 'Открыть меню'}
      </span>
    </div>
  );
};
