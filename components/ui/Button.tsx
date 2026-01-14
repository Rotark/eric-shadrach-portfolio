"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-heading font-medium rounded-xl transition-all duration-200 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
  );

  const variants = {
    primary: "bg-teal text-white hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/30 hover:-translate-y-0.5",
    secondary: "bg-transparent text-teal border-2 border-teal hover:bg-teal hover:text-white",
    glass: "glass text-foreground hover:bg-white/90 hover:shadow-lg",
    ghost: "bg-transparent text-teal hover:bg-teal/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          whileTap={{ scale: 0.98 }}
        >
          {buttonContent}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}
