import React from "react";
import { cn } from "@/lib/utils";

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface Features6xProps {
  tag?: string;
  headline: string;
  ctaLabel?: string;
  ctaHref?: string;
  features: Feature[];
  className?: string;
}

const defaultIcons = [
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L2 10L10 18L18 10L10 2Z" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="1" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/><line x1="7" y1="2" x2="7" y2="18" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/><line x1="10" y1="3" x2="10" y2="10" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/><line x1="10" y1="10" x2="15" y2="10" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/></svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M10 4V16" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/></svg>,
  <svg key="5" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L8 10L12 14L17 7" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" fill="none"/></svg>,
  <svg key="6" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2"/></svg>,
];

const Features6x: React.FC<Features6xProps> = ({
  tag = "Platform",
  headline,
  ctaLabel,
  ctaHref = "#",
  features,
  className,
}) => (
  <section className={cn("bg-carbon py-[100px]", className)}>
    <div className="max-w-[1440px] mx-auto px-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-14 gap-8 border-b border-primary-foreground/10 pb-10">
        <div className="flex flex-col gap-3">
          <span className="inline-flex items-center border border-primary-foreground/25 px-[14px] py-[6px] text-[11px] font-bold tracking-[1.5px] uppercase text-primary-foreground/60">
            {tag}
          </span>
          <h2 className="type-h2 text-primary-foreground max-w-[600px]">{headline}</h2>
        </div>
        {ctaLabel && (
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-transparent text-primary-foreground font-bold text-[18px] tracking-tight px-9 py-[18px] border border-primary-foreground shrink-0 mb-1 hover:bg-primary-foreground/[0.08] transition-colors"
          >
            {ctaLabel}
          </a>
        )}
      </div>

      {/* 3×2 grid */}
      <div className="grid grid-cols-3 gap-0">
        {features.slice(0, 6).map((f, i) => {
          const isRow2 = i >= 3;
          const isCol2 = i % 3 === 1;
          const isCol3 = i % 3 === 2;
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-5",
                i % 3 === 0 && "pr-8",
                isCol2 && "px-8 border-l border-primary-foreground/10",
                isCol3 && "pl-8 border-l border-primary-foreground/10",
                !isRow2 && "pb-10",
                isRow2 && "pt-10 border-t border-primary-foreground/10",
              )}
            >
              <div className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground">
                {f.icon || defaultIcons[i % defaultIcons.length]}
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[1.5px] text-primary-foreground/35 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-primary-foreground font-bold text-[20px] leading-tight tracking-tight mb-2">
                  {f.title}
                </h3>
                <p className="text-primary-foreground/50 text-[16px] leading-relaxed tracking-tight">
                  {f.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features6x;
