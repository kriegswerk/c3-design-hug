import React, { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

/**
 * ParallaxDrift — Full-viewport section with a background image that
 * scrolls at a slower rate than the foreground content, creating depth.
 *
 * Prompt keyword: parallax-drift
 *
 * The background image is rendered at 150% height and translated based
 * on scroll progress through the section, producing a smooth parallax.
 */

interface ParallaxDriftProps {
  /** Background image source */
  imageSrc: string;
  /** Alt text for the background image */
  imageAlt?: string;
  /** Parallax intensity — 0 = no parallax, 1 = maximum offset. Default 0.3 */
  intensity?: number;
  /** Content alignment */
  align?: "center" | "bottom-left";
  /** Optional gradient overlay */
  overlay?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ParallaxDrift: React.FC<ParallaxDriftProps> = ({
  imageSrc,
  imageAlt = "",
  intensity = 0.3,
  align = "center",
  overlay = true,
  children,
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Progress: 0 when section enters bottom, 1 when it exits top
    const progress = 1 - (rect.bottom / (windowH + rect.height));
    // Clamp between 0 and 1
    const clamped = Math.max(0, Math.min(1, progress));
    // Center the range: -0.5 to 0.5, then multiply by intensity and section height
    setOffset((clamped - 0.5) * intensity * rect.height);
  }, [intensity]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative h-screen overflow-hidden flex",
        align === "center" && "items-center justify-start",
        align === "bottom-left" && "items-end",
        className
      )}
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-[120%] object-cover object-center -top-[10%]"
        />
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/20 to-transparent" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full py-16 md:py-24">
        {children}
      </div>
    </div>
  );
};

export default ParallaxDrift;
