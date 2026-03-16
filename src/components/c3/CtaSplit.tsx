import React from "react";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
}

interface CtaSplitProps {
  tag?: string;
  headline: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  socialProof?: string;
  image?: string;
  pricingLabel?: string;
  pricingValue?: string;
  pricingSubtext?: string;
  pricingFeatures?: PricingFeature[];
  className?: string;
}

const CtaSplit: React.FC<CtaSplitProps> = ({
  tag = "Ready to scale?",
  headline,
  description,
  ctaLabel = "Schedule a call",
  ctaHref = "#",
  socialProof,
  image,
  pricingLabel,
  pricingValue,
  pricingSubtext,
  pricingFeatures,
  className,
}) => (
  <section className={cn("w-full relative overflow-hidden bg-silica", className)} style={{ minHeight: 520 }}>
    <div className="grid grid-cols-2 h-full min-h-[520px]">
      {/* Left: Light copy */}
      <div className="flex flex-col justify-between p-16 md:p-20 bg-silica">
        <div className="flex flex-col gap-6">
          <span className="text-[12px] font-bold tracking-[2px] uppercase text-foreground/45">
            {tag}
          </span>
          <h2
            className="type-h2 text-foreground"
            style={{ fontSize: "clamp(36px, 4vw, 64px)" }}
          >
            {headline}
          </h2>
          {description && (
            <p className="type-body2 text-foreground/55" style={{ fontSize: 18 }}>
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-carbon text-primary-foreground font-bold text-[15px] tracking-tight px-8 py-5 self-start hover:bg-tungsten transition-colors"
          >
            {ctaLabel}
          </a>
          {socialProof && (
            <p className="text-[13px] tracking-tight text-foreground/50 mt-2">
              {socialProof}
            </p>
          )}
        </div>
      </div>

      {/* Right: Dark image panel */}
      <div className="relative overflow-hidden bg-carbon">
        {image && (
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
        )}
        {/* Pricing overlay card */}
        {pricingValue && (
          <div className="relative z-10 flex flex-col justify-center h-full p-16">
            <div className="border border-primary-foreground/20 p-8 max-w-[320px]">
              {pricingLabel && (
                <p className="text-[12px] font-bold tracking-[2px] uppercase text-primary-foreground/50 mb-4">
                  {pricingLabel}
                </p>
              )}
              <p className="text-primary-foreground font-bold text-[48px] leading-none tracking-tight mb-2">
                {pricingValue}
              </p>
              {pricingSubtext && (
                <p className="text-primary-foreground/40 text-[14px] mb-6">{pricingSubtext}</p>
              )}
              {pricingFeatures && pricingFeatures.length > 0 && (
                <div className="flex flex-col gap-3">
                  {pricingFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary-foreground/50 rounded-full" />
                      <span className="text-primary-foreground/60 text-[13px]">{f.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default CtaSplit;
