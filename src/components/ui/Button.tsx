import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-[6px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm font-semibold",
    md: "px-6 py-2.5 text-sm sm:text-base font-semibold",
    lg: "px-8 py-3.5 text-base sm:text-lg font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#18444f] hover:bg-[#133740] text-white shadow-sm hover:shadow focus:ring-[#18444f]",
    secondary:
      "bg-[#354262] hover:bg-[#27324a] text-white shadow-sm focus:ring-[#354262]",
    outline:
      "border-2 border-[#18444f] text-[#18444f] hover:bg-[#18444f]/5 focus:ring-[#18444f]",
    accent:
      "bg-[#18444f] hover:bg-[#133740] text-white shadow-sm hover:shadow focus:ring-[#18444f]",
    ghost:
      "text-[#1D243C] hover:text-[#2f8095] hover:bg-slate-50 focus:ring-[#18444f]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
