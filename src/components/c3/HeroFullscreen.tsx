import React from "react";
import { cn } from "@/lib/utils";

interface HeroFullscreenProps {
  headline: string;
  description?: string;
  backgroundImage?: string;
  primaryCta?: { label: string; href?: string; onClick?: () => void };
  secondaryCta?: { label: string; href?: string; onClick?: () => void };
  /** "dark" = legacy carbon bg, "light" = evolved silica bg with dot grid */
  variant?: "dark" | "light";
  className?: string;
}

const HeroFullscreen: React.FC<HeroFullscreenProps> = ({
  headline,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
  variant = "light",
  className,
}) => {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "relative min-h-[90vh] flex items-end overflow-hidden",
        isLight ? "bg-silica" : "bg-carbon",
        className
      )}
    >
      {/* Dot grid texture for light variant */}
      {isLight && !backgroundImage && (
        <div className="absolute inset-0 opacity-[0.10] z-[1]" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--carbon)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
      )}

      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className={cn(
        "absolute inset-0",
        isLight
          ? "bg-gradient-to-t from-silica/80 via-silica/30 to-transparent"
          : "bg-gradient-to-t from-carbon/80 via-carbon/30 to-transparent"
      )} />
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 pb-16 md:pb-24">
        <h1 className={cn("type-h1 max-w-3xl mb-6", isLight ? "text-carbon" : "text-white")}>{headline}</h1>
        {description && (
          <p className={cn("type-body1 max-w-xl mb-10", isLight ? "text-graphene" : "text-graphene")}>{description}</p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center gap-4">
            {primaryCta && (
              <a
                href={primaryCta.href ?? "#"}
                onClick={primaryCta.onClick}
                className={cn(
                  "type-cta px-8 py-4 font-bold transition-colors",
                  isLight
                    ? "bg-carbon text-white hover:bg-tungsten"
                    : "bg-white text-carbon hover:bg-silica"
                )}
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href ?? "#"}
                onClick={secondaryCta.onClick}
                className={cn(
                  "border-2 type-cta px-8 py-4 font-bold transition-colors",
                  isLight
                    ? "border-carbon text-carbon hover:bg-carbon hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-carbon"
                )}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroFullscreen;