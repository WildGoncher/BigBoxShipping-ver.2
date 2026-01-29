import React, { useState } from "react";
import { clsx } from "clsx";
import ArrowIcon from "./ArrowIcon";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?:  "dot" | "arrow" | "hero";
  size?: "sm" | "md" | "lg";
  toggled?: boolean;
  defaultToggled?: boolean;
  onToggle?: (toggled: boolean) => void;
}

const sizeTokens = {
  sm: {
    button: "px-3 py-1.5 text-sm",
    indicator: "w-2 h-2",
    gap: "gap-2",
  },
  md: {
    button: "px-4 py-2 text-base",
    indicator: "w-3 h-3",
    gap: "gap-4",
  },
  lg: {
    button: "px-6 py-3 text-lg",
    indicator: "w-4 h-4",
    gap: "gap-6",
  },
};

const Indicator = ({
  variant,
  disabled,
  toggled,
  size = "md",
}: {
  variant: string;
  disabled: boolean;
  toggled: boolean;
  size?: "sm" | "md" | "lg";
}) => {
  if (disabled) return null;

  if (variant === "dot") {
    return (
      <span
        className={clsx(
          "indicator indicator-dot rounded-full",
          sizeTokens[size].indicator,
          { "is-toggled": toggled },
        )}
      />
    );
  }
  if (variant === "arrow") {
    return <ArrowIcon toggled={toggled} size={size} />;
  }
    return null;
};

export const Button = ({
  children,
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  variant = "dot",
  toggled = false,
}: ButtonProps) => {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  const variantStyles = {
    dot: "bg-grey/50 backdrop-blur-[2px] border border-grey text-white font-medium",
    arrow:
      "bg-grey/50 backdrop-blur-[2px] border border-grey text-white font-medium",
    hero: clsx(
  "bg-white/10 backdrop-blur-sm",
  "text-white font-medium",
  "rounded-lg",
  
  "relative overflow-hidden",
  
  "border border-3 border-bright-green/70", 
  
  // inside glow
  "shadow-[inset_0_0_5px_rgba(204,255,76,0.15)]", // Зеленое свечение внутри
  
  // 5. Внешняя тень для объема
  "shadow-sm",
  
  // 6. 🌟 ИНДИКАТОР при toggled (усиливаем свечение)
  toggled && clsx(
    "border-#CCFF4C]", // Обводка становится ярче
    "shadow-[inset_0_0_30px_rgba(204,255,76,0.3)]", // Сильное свечение внутри
    "shadow-[0_0_25px_rgba(204,255,76,0.2)]", // И немного снаружи
  ),
  
  // 7. Эффекты при наведении
  "hover:border-bright-green/70",
  "hover:shadow-[inset_0_0_10px_rgba(204,255,76,0.4)]",
  "active:scale-95",
  
  // 8. Размер для hero (больше стандартного)
  "px-10 py-4 text-xl",
  
  // 9. Анимации
  "transition-all duration-300",
),
  
};
  const buttonClass = clsx(
    "rounded-none font-medium transition-all duration-200 group",
    sizeTokens[size].button,
    variantStyles[variant],
    {
      "opacity-50 cursor-not-allowed": disabled,
      "hover:brightness-110 active:scale-95": !disabled,
      "is-toggled": toggled && !disabled,
      "rounded-none": variant !== "hero",
    },
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={buttonClass}
    >
      <span
        className={clsx(
          "flex items-center justify-center",
          variant === "dot" || variant === "arrow"
            ? sizeTokens[size].gap
            : "gap-0",
        )}
      >
        {children}
        <Indicator
          variant={variant}
          disabled={disabled}
          toggled={toggled}
          size={size}
        />
      </span>
    </button>
  );
};
