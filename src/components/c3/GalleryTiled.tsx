import React from "react";
import { cn } from "@/lib/utils";

interface TileItem {
  src: string;
  alt?: string;
  label?: string;
  href?: string;
}

interface GalleryTiledProps {
  tag?: string;
  headline: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: TileItem[];
  columns?: 3 | 4;
  className?: string;
}

const GalleryTiled: React.FC<GalleryTiledProps> = ({
  tag = "Tiled Gallery",
  headline,
  ctaLabel,
  ctaHref = "#",
  items,
  columns = 4,
  className,
}) => (
  <section className={cn("bg-carbon py-[100px]", className)}>
    <div className="max-w-[1440px] mx-auto px-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 border-b border-primary-foreground/10 pb-8">
        <div className="flex flex-col gap-3">
          <span className="inline-flex items-center border border-primary-foreground/25 px-[14px] py-[6px] text-[11px] font-bold tracking-[1.5px] uppercase text-primary-foreground/60">
            {tag}
          </span>
          <h2 className="type-h2 text-primary-foreground">{headline}</h2>
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

      {/* Tile grid */}
      <div
        className={cn(
          "grid gap-[2px]",
          columns === 4 ? "grid-cols-4" : "grid-cols-3",
        )}
      >
        {items.map((tile, i) => (
          <a
            key={i}
            href={tile.href || "#"}
            className="aspect-square overflow-hidden bg-tungsten relative group cursor-pointer block"
          >
            <img
              src={tile.src}
              alt={tile.alt || ""}
              className="w-full h-full object-cover block transition-transform duration-400 group-hover:scale-[1.04]"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/40 transition-all duration-300 flex items-start justify-between p-4">
              <span className="text-[11px] font-bold tracking-[1.5px] text-primary-foreground/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <svg
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path d="M3 15L15 3M15 3H5M15 3V13" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            {/* Label slide-up */}
            {tile.label && (
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-carbon/80 to-transparent">
                <p className="text-primary-foreground text-[13px] font-bold tracking-tight">
                  {tile.label}
                </p>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryTiled;
