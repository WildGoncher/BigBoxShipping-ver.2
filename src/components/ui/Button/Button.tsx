import React from "react";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import ArrowIcon from "./ArrowIcon";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "dot" | "arrow" | "outline";
  size?: "sm" | "md" | "lg";
  width?: string;
  toggled?: boolean;
  arrowDirection?: "left" | "right" | "up" | "down";
  arrowGlowIntensity?: number;
  className?: string;
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
  arrowDirection = "down",
  arrowGlowIntensity = 0.3,
}: {
  variant: string;
  disabled: boolean;
  toggled: boolean;
  size?: "sm" | "md" | "lg";
  arrowDirection?: "left" | "right" | "up" | "down";
  arrowGlowIntensity?: number;
}) => {
  if (disabled) return null;

  if (variant === "dot") {
    return (
      <span
        className={clsx(
          "indicator indicator-dot rounded-full transition-all duration-300",
          sizeTokens[size].indicator,
          {
            "opacity-100 filter drop-shadow-[0_0_8px_var(--color-indicator-ready-glow)]":
              toggled,
            "opacity-80": !toggled,
          },
        )}
        style={{
          background: "var(--color-indicator-ready)",
        }}
      />
    );
  }

  if (variant === "arrow") {
    return (
      <ArrowIcon
        direction={arrowDirection}
        size={size}
        glowIntensity={toggled ? 0.8 : arrowGlowIntensity}
        toggled={toggled}
      />
    );
  }

  return null;
};

export const Button = ({
  children,
  size = "md",
  width,
  onClick,
  type = "button",
  disabled = false,
  variant = "dot",
  toggled = false,
  arrowDirection = "down",
  arrowGlowIntensity = 0.3,
  className = "",
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    onClick?.();

    if (variant === "dot") {
      setIsPressed(true);
    }
  };

  useEffect(() => {
    if (!isPressed) return;

    const timer = setTimeout(() => {
      setIsPressed(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [isPressed]);

  const variantStyles = {
    dot: clsx(
      "bg-bbs-grey/50 backdrop-blur-[2px] border border-bbs-grey text-white font-medium",
      "transition-all duration-300",
      !disabled && "hover:brightness-110",
      disabled && "opacity-40 cursor-not-allowed",
    ),
    arrow: clsx(
      "bg-bbs-grey/50 backdrop-blur-[2px] border border-bbs-grey text-white font-medium",
      "transition-all duration-300",
      !disabled && "hover:brightness-110",
      disabled && "opacity-40 cursor-not-allowed",
    ),
    outline: clsx(
      "bg-[var(--color-bbs-white)]/10 backdrop-blur-sm",
      "text-[var(--color-bbs-white)] font-medium rounded-lg",
      "border-3 border-[var(--color-bright-green)]/70",
      "shadow-[inset_0_0_5px_var(--color-bright-green-shadow-15)]",
      "shadow-sm",
      toggled &&
        clsx(
          "border-[var(--color-bright-green)]",
          "shadow-[inset_0_0_30px_var(--color-bright-green-shadow-30)]",
          "shadow-[0_0_25px_var(--color-bright-green-shadow-30)]",
        ),
      "hover:border-[var(--color-bright-green)]/70",
      "hover:shadow-[inset_0_0_10px_var(--color-bright-green-shadow-40)]",
      "active:scale-95",
      "px-10 py-4 text-xl",
      "transition-all duration-300",
    ),
  };

  const buttonClass = clsx(
    "rounded-none font-medium group",
    "inline-flex items-center justify-between",
    "flex-shrink-0",
    sizeTokens[size].button,
    variantStyles[variant],
    {
      "cursor-pointer": !disabled,
      "cursor-not-allowed": disabled,
      "active:scale-95": !disabled && variant !== "outline",
    },
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={clsx(buttonClass, className)}
      style={
        width
          ? {
              width,
              minWidth: width,
            }
          : {
              minWidth: "fit-content",
            }
      }
      aria-pressed={variant === "arrow" ? toggled : undefined}
    >
      <span
        className={clsx(
          "flex items-center justify-between w-full",
          "min-w-0",
          variant === "dot" || variant === "arrow"
            ? sizeTokens[size].gap
            : "gap-0",
        )}
      >
        <span className={clsx("truncate", "flex-1", "text-left")}>
          {children}
        </span>

        <Indicator
          variant={variant}
          disabled={disabled}
          toggled={variant === "dot" ? isPressed : toggled}
          size={size}
          arrowDirection={arrowDirection}
          arrowGlowIntensity={arrowGlowIntensity}
        />
      </span>
    </button>
  );
};
