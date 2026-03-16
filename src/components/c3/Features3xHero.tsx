import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCard {
  tag: string;
  image: string;
  title: string;
  description: string;
}

interface Features3xHeroProps {
  tag?: string;
  headline: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  features: [FeatureCard, FeatureCard, FeatureCard];
  className?: string;
}

const Features3xHero: React.FC<Features3xHeroProps> = ({
  tag = "Why us",
  headline,
  description,
  ctaLabel,
  ctaHref = "#",
  features,
  className,
}) => (
  <section className={cn("bg-carbon py-[100px]", className)}>
    <div className="max-w-[1440px] mx-auto px-20">
      {/* Hero header */}
      <div className="flex flex-col gap-6 mb-20 border-b border-primary-foreground/10 pb-16">
        <span className="inline-flex items-center border border-primary-foreground/25 px-[14px] py-[6px] text-[11px] font-bold tracking-[1.5px] uppercase text-primary-foreground/60 self-start">
          {tag}
        </span>
        <div className="flex items-start justify-between gap-12">
          <h2
            className="type-h1 text-primary-foreground max-w-[860px]"
            style={{ fontSize: "clamp(52px, 6vw, 100px)" }}
          >
            {headline}
          </h2>
          <div className="flex flex-col gap-6 mt-auto max-w-[380px] pt-4">
            {description && (
              <p className="type-body2 text-primary-foreground/50">{description}</p>
            )}
            {ctaLabel && (
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center bg-primary-foreground text-carbon font-bold text-[18px] tracking-tight px-9 py-[18px] self-start hover:bg-silica transition-colors"
              >
                {ctaLabel}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 3-col cards */}
      <div className="grid grid-cols-3 gap-0">
        {features.map((f, i) => (
          <div
            key={i}
            className={cn(
              i === 0 && "pr-10",
              i === 1 && "px-10 border-l border-primary-foreground/10",
              i === 2 && "pl-10 border-l border-primary-foreground/10",
            )}
          >
            <div className="w-full aspect-[4/3] bg-tungsten mb-8 overflow-hidden relative">
              <img
                src={f.image}
                alt={f.tag}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="inline-flex items-center border border-primary-foreground/25 px-[14px] py-[6px] text-[11px] font-bold tracking-[1.5px] uppercase text-primary-foreground/80">
                  {f.tag}
                </span>
              </div>
            </div>
            <p className="text-[11px] font-bold tracking-[1.5px] text-primary-foreground/35 mb-4">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="type-h3 text-primary-foreground mb-4">{f.title}</h3>
            <p className="type-body2 text-primary-foreground/50">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features3xHero;
