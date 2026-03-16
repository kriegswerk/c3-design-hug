import React from "react";
import { cn } from "@/lib/utils";

interface FeatureSplitProps {
  headline: string;
  description?: string;
  image?: string;
  imagePosition?: "left" | "right";
  primaryCta?: { label: string; href?: string };
  secondaryCta?: { label: string; href?: string };
  className?: string;
}

const FeatureSplit: React.FC<FeatureSplitProps> = ({
  headline,
  description,
  image,
  imagePosition = "right",
  primaryCta,
  secondaryCta,
  className,
}) => {
  const textBlock = (
    <div className="flex flex-col justify-center py-16 md:py-24 px-8 md:px-16">
      <h2 className="type-h3 text-foreground mb-6">{headline}</h2>
      {description && (
        <p className="type-body2 text-muted-foreground max-w-lg mb-10">{description}</p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="flex flex-wrap items-center gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href ?? "#"}
              className="bg-carbon text-white type-cta px-8 py-4 font-bold hover:bg-tungsten transition-colors"
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href ?? "#"}
              className="border-2 border-carbon text-carbon type-cta px-8 py-4 font-bold hover:bg-carbon hover:text-white transition-colors"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <div className="bg-silica min-h-[400px] md:min-h-[600px]">
      {image ? (
        <img src={image} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-graphene">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect width="80" height="80" rx="0" fill="currentColor" fillOpacity="0.1" />
            <path d="M20 55L35 40L45 50L55 35L65 50" stroke="currentColor" strokeWidth="2" />
            <circle cx="30" cy="30" r="5" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <section className={cn("bg-background", className)}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;