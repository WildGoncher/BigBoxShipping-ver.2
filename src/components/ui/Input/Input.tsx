import React from "react";

interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      size = "md",
      variant = "primary",
      error = false,
      errorMessage,
      label,
      helperText,
      fullWidth = false,
      className = "",
      disabled = false,
      id: propId,
      ...restProps
    } = props;

    const generatedId = React.useId();
    const id = propId || `input-${generatedId}`

    const errorMessageId = error && errorMessage ? `${id}-error` : undefined;
    const helperTextId = helperText ? `${id}-helper` : undefined;
        
    const inputClasses = [
  "transition-all duration-200 ease-out",
  size === "sm" ? "px-2 py-1 text-sm" : "px-3 py-2",
  variant === "primary" 
    ? "bg-white/10 text-white border-white/0 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:border-bright-orange" 
    : "border-white/20 bg-white/10 text-white focus:border-bright-orange",
  error && "border-dark-red/50 focus:border-dark-red focus:ring-2 focus:ring-dark-red/20",
  disabled && "opacity-50 cursor-not-allowed select-none",
  fullWidth && "w-full",
  className,
].filter(Boolean).join(" ");    
    return (
      <div className={`pt-3 flex flex-col  gap-1 ${fullWidth ? 'w-full' : ''}`}>
        {label && <label htmlFor={id} className="text-sm text-white">{label}</label>}
        <input 
          ref={ref}
          id={id} 
          className={inputClasses} 
          aria-invalid={error} 
          disabled={disabled} 
          aria-describedby={errorMessageId || helperTextId} 
          {...restProps}
        />
        {helperText && !error && <p id={helperTextId}>{helperText}</p>}
        {error && errorMessage && <p id={errorMessageId}>{errorMessage}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
