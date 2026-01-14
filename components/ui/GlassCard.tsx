"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "subtle" | "solid";
  hover?: boolean;
  glow?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  variant = "default",
  hover = true,
  glow = false,
  className,
  ...props
}: GlassCardProps) {
  const variants = {
    default: "glass",
    subtle: "glass-subtle",
    solid: "bg-white border border-gray-100",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6",
        variants[variant],
        hover && "transition-all duration-300 hover:shadow-2xl hover:shadow-teal/10 hover:-translate-y-1",
        glow && "animate-pulse-glow",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
