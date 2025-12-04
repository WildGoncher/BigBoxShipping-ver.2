import React, { useState } from "react";
import { clsx } from 'clsx';
import ArrowIcon from './ArrowIcon';
import { useCard } from '../Card/context/useCard';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'dot' | 'arrow';
  size?: 'sm' | 'md' | 'lg';
}

const sizeTokens = {
  sm: {
    button: 'px-3 py-1.5 text-sm',
    indicator: 'w-2 h-2',
    gap: 'gap-2'
  },
  md: {
    button: 'px-4 py-2 text-base', 
    indicator: 'w-3 h-3',
    gap: 'gap-4'
  },
  lg: {
    button: 'px-6 py-3 text-lg',
    indicator: 'w-4 h-4',
    gap: 'gap-6'
  }
}

const Indicator = ({ variant, disabled, toggled, size = 'md' }: { 
  variant: string; 
  disabled: boolean;
  toggled: boolean;
  size?: 'sm' | 'md' | 'lg';
}) => {
  if (disabled) return null;

  if (variant === 'dot') {
    return (
      <span className={clsx(
        "indicator indicator-dot rounded-full",
        sizeTokens[size].indicator,
        { 'is-toggled': toggled }
      )} />
    );
  }
  if (variant === 'arrow') {
    return <ArrowIcon toggled={toggled} size={size} />;
  }
  return null;
};

export const Button = ({
  children,
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  variant = 'dot'
}: ButtonProps) => {
  const [toggled, setToggled] = useState(false);
  
  let toggleSliderFromContext: (() => void) | undefined;
  
  try {
    const cardContext = useCard();
    toggleSliderFromContext = cardContext.toggleSlider;
  } catch (error) {
    toggleSliderFromContext = undefined;
  }

  const handleClick = () => {
    if (!disabled) {
      if (variant === 'arrow' && toggleSliderFromContext) {
        toggleSliderFromContext();
      }
      
      setToggled(!toggled);
      onClick?.();
    }
  };

  const variantStyles = {
    dot: 'bg-grey/50 backdrop-blur-[2px] border border-grey text-white font-medium',
    arrow: 'bg-grey/50 backdrop-blur-[2px] border border-grey text-white font-medium',
    primary: 'bg-dark-green text-white',
    secondary: 'bg-grey text-dark-blue'
  };

  const buttonClass = clsx(
    'rounded-none font-medium transition-all duration-200 group',
    sizeTokens[size].button,
    variantStyles[variant],
    {
      'opacity-50 cursor-not-allowed': disabled,
      'hover:brightness-110 active:scale-95': !disabled,
      'is-toggled': toggled && !disabled
    }
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={buttonClass}
    >
      <span className={clsx(
        "flex items-center justify-center",
        variant === 'dot' || variant === 'arrow' 
          ? sizeTokens[size].gap
          : 'gap-0'
      )}>
        {children}
        <Indicator variant={variant} disabled={disabled} toggled={toggled} size={size} />
      </span>
    </button>
  );
}
