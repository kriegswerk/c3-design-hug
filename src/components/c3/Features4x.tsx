import React from "react";
import { cn } from "@/lib/utils";

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface Features4xProps {
  tag?: string;
  headline: string;
  description?: string;
  features: Feature[];
  className?: string;
}

const DefaultIcons: React.FC<{ index: number }>[] = [
  () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
      <rect x="12" y="3" width="7" height="7" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
      <rect x="3" y="12" width="7" height="7" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
      <rect x="12" y="12" width="7" height="7" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
      <line x1="11" y1="4" x2="11" y2="18" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
      <line x1="4" y1="11" x2="18" y2="11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3L19 7V15L11 19L3 15V7L11 3Z" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="3,15 8,9 13,13 19,6" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
];

const Features4x: React.FC<Features4xProps> = ({
  tag = "Features",
  headline,
  description,
  features,
  className,
}) => (
  <section className={cn("bg-carbon py-[100px] border-t border-foreground/10", className)}>
    <div className="max-w-[1440px] mx-auto px-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-16 gap-8">
        <div className="flex flex-col gap-3">
          <span className="inline-flex items-center border border-primary-foreground/25 px-[14px] py-[6px] text-[11px] font-bold tracking-[1.5px] uppercase text-primary-foreground/60">
            {tag}
          </span>
          <h2 className="type-h2 text-primary-foreground max-w-[560px]">{headline}</h2>
        </div>
        {description && (
          <p className="type-body2 text-primary-foreground/50 max-w-[400px] mt-auto pt-2">{description}</p>
        )}
      </div>

      {/* 4-col grid */}
      <div className="grid grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col gap-5 border-t border-primary-foreground/15 pt-8">
            <div className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground">
              {f.icon || (DefaultIcons[i % DefaultIcons.length] && React.createElement(DefaultIcons[i % DefaultIcons.length], { index: i }))}
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] text-primary-foreground/35 mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-primary-foreground font-bold text-[22px] leading-tight tracking-tight mb-3">
                {f.title}
              </h3>
              <p className="type-body2 text-primary-foreground/50">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features4x;
