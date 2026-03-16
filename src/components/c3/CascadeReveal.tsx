import React from "react";
import { cn } from "@/lib/utils";
import { useCascadeReveal } from "@/hooks/use-cascade-reveal";

/**
 * CascadeReveal — wrapper that applies the "Cascade Reveal" scroll animation.
 *
 * Usage:
 *   <CascadeReveal>       ← default: fades + slides up
 *     <h1>Hello</h1>
 *   </CascadeReveal>
 *
 *   <CascadeReveal variant="image">  ← scale + fade for images
 *     <img src="..." />
 *   </CascadeReveal>
 *
 * Stagger child elements by adding `cascade-child` class.
 * Each child auto-staggers by 120ms via CSS nth-child.
 */

interface CascadeRevealProps {
  children: React.ReactNode;
  /** "text" = translate-Y fade, "image" = scale fade */
  variant?: "text" | "image";
  /** Extra delay in ms before animation starts */
  delay?: number;
  className?: string;
  threshold?: number;
  /** When true, animation resets on scroll-out and replays on scroll-in */
  resettable?: boolean;
}

const CascadeReveal: React.FC<CascadeRevealProps> = ({
  children,
  variant = "text",
  delay = 0,
  className,
  threshold = 0.15,
  resettable = false,
}) => {
  const { ref, revealed } = useCascadeReveal(threshold, resettable);

  return (
    <div
      ref={ref}
      className={cn(
        "cascade-reveal",
        variant === "image" ? "cascade-image" : "cascade-text",
        revealed && "cascade-visible",
        className
      )}
      style={{ "--cascade-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default CascadeReveal;
