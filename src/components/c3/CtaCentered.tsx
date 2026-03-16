import React from "react";
import { cn } from "@/lib/utils";

interface CtaCenteredProps {
  tag?: string;
  headline: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badges?: string[];
  className?: string;
}

const CtaCentered: React.FC<CtaCenteredProps> = ({
  tag = "Get started today",
  headline,
  description,
  primaryLabel,
  primaryHref = "#",
  secondaryLabel,
  secondaryHref = "#",
  badges,
  className,
}) => (
  <section className={cn("w-full bg-carbon border-t border-primary-foreground/10", className)}>
    <div className="max-w-[1440px] mx-auto px-20 py-[100px] flex flex-col items-center gap-10" style={{ textAlign: "center" }}>
      <span className="inline-flex items-center border border-primary-foreground/25 px-[14px] py-[6px] text-[11px] font-bold tracking-[1.5px] uppercase text-primary-foreground/50">
        {tag}
      </span>
      <h2
        className="type-h1 text-primary-foreground max-w-[900px]"
        style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
      >
        {headline}
      </h2>
      {description && (
        <p className="type-body2 text-primary-foreground/50 max-w-[560px]">{description}</p>
      )}
      <div className="flex items-center gap-4 mt-4">
        {primaryLabel && (
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center bg-primary-foreground text-carbon font-bold text-[16px] tracking-tight px-10 py-5 hover:bg-silica transition-colors"
          >
            {primaryLabel}
          </a>
        )}
        {secondaryLabel && (
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center bg-transparent text-primary-foreground font-bold text-[16px] tracking-tight px-10 py-5 border border-primary-foreground hover:bg-primary-foreground/[0.08] transition-colors"
          >
            {secondaryLabel}
          </a>
        )}
      </div>
      {badges && badges.length > 0 && (
        <div className="flex items-center gap-8 mt-6 opacity-40">
          {badges.map((badge, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="w-px h-4 bg-primary-foreground/30" />}
              <span className="text-[12px] font-bold tracking-[2px] uppercase text-primary-foreground">
                {badge}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default CtaCentered;
