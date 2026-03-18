import React from "react";
import ArrowIcon from "../Button/ArrowIcon";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  options: SelectOption[];
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean; // Not sure this will ever be used
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      id: propId,
      className,
      options,
      size = "md",
      variant = "primary",
      label,
      placeholder,
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      disabled = false,
      ...restProps
    } = props;

    const generatedId = React.useId();
    const id = propId || generatedId;

    const errorMessageId = error && errorMessage ? `${id}-error` : undefined;
    const helperTextId = helperText ? `${id}-helper` : undefined;

    const selectClasses = [
      "w-full pr-10",
      "transition-all duration-200 ease-out",
      "appearance-none",
      size === "sm" ? "px-2 py-1 text-sm" : "px-3 py-2",
      variant === "primary"
        ? "bg-white/10 backdrop-blur-sm border-white/20 text-white"
        : "border-white/20 bg-white/5 text-white",

      "hover:border-white/40",
      "focus:outline-none focus:border-bright-orange",
      "disabled:opacity-50 disabled:cursor-not-allowed",

      error &&
        "border-dark-red/50 focus:border-dark-red focus:ring-2 focus:ring-dark-red/20",

      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`pt-3 flex flex-col gap-1 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label htmlFor={id} className={`text-white text-sm`}>
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            className={selectClasses}
            {...restProps}
            aria-invalid={error}
            aria-describedby={helperTextId || errorMessageId}
          >
            {placeholder && (
              <option value="" disabled className="text-grey">
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-black"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2">
            <ArrowIcon direction="down" />
          </div>
        </div>
        <div className="min-h-[20px] px-1">
          {helperText && !error && (
            <p id={helperTextId} className="text-grey text-xs">
              {helperText}
            </p>
          )}
          {error && errorMessage && (
            <p
              id={errorMessageId}
              className="text-dark-red text-xs"
              role="alert"
            >
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    );
  },
);
