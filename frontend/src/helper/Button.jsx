import * as React from "react";

const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    default: "bg-blue-500 text-white shadow hover:bg-blue-600",
    destructive: "bg-red-500 text-white shadow-sm hover:bg-red-600",
    outline: "border border-gray-300 bg-white shadow-sm hover:bg-gray-100",
    secondary: "bg-gray-500 text-white shadow-sm hover:bg-gray-600",
    ghost: "hover:bg-gray-100",
    link: "text-blue-500 underline-offset-4 hover:underline",
  },
  sizes: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  },
};

const Button = React.forwardRef(function Button(
  { className = "", variant = "default", size = "default", ...props },
  ref
) {
  const variantClass = buttonStyles.variants[variant] || buttonStyles.variants.default;
  const sizeClass = buttonStyles.sizes[size] || buttonStyles.sizes.default;
  
  return (
    <button
      className={`${buttonStyles.base} ${variantClass} ${sizeClass} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
