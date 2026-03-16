import React from "react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  image?: string;
}

interface FeaturesGridProps {
  headline: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3;
  heroImage?: string;
  primaryCta?: { label: string; href?: string };
  className?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  headline,
  description,
  features,
  columns = 3,
  heroImage,
  primaryCta,
  className,
}) => (
  <section className={cn("bg-background py-16 md:py-24", className)}>
    <div className="max-w-screen-xl mx-auto px-8">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
        <div className="flex-1">
          <h2 className="type-h4 text-foreground">{headline}</h2>
          {primaryCta && (
            <a
              href={primaryCta.href ?? "#"}
              className="inline-block mt-8 bg-carbon text-white type-cta px-8 py-4 font-bold hover:bg-tungsten transition-colors"
            >
              {primaryCta.label}
            </a>
          )}
        </div>
        {description && (
          <p className="type-body2 text-muted-foreground max-w-md">{description}</p>
        )}
      </div>

      {/* Optional hero image */}
      {heroImage && (
        <div className="mb-16">
          <div className="w-full aspect-video bg-silica">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Feature cards grid */}
      <div
        className={cn(
          "grid gap-12",
          columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        )}
      >
        {features.map((f) => (
          <div key={f.title}>
            {f.image && (
              <div className="w-24 h-24 bg-silica mb-6">
                <img
                  src={f.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 className="type-h6 text-foreground mb-4 uppercase tracking-wider font-bold">
              {f.title}
            </h3>
            <p className="type-caption text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;