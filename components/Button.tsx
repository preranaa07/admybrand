// components/Button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
  className?: string;
}

export default function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition duration-200 text-base";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
