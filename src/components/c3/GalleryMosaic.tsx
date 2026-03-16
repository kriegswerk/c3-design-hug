import React from "react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt?: string;
  label?: string;
}

interface GalleryMosaicProps {
  tag?: string;
  headline: string;
  description?: string;
  images: GalleryImage[];
  className?: string;
}

const GalleryMosaic: React.FC<GalleryMosaicProps> = ({
  tag = "Gallery",
  headline,
  description,
  images,
  className,
}) => {
  // Expect 5 images: 1 large left (row-span-2), 2 right top, 2 right bottom
  const items = images.slice(0, 5);

  return (
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
          {description && (
            <p className="type-body2 text-primary-foreground/50 max-w-[380px]">{description}</p>
          )}
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-[2px]" style={{ height: 660 }}>
          {items.map((img, i) => (
            <div
              key={i}
              className={cn(
                "overflow-hidden bg-tungsten relative group cursor-pointer",
                i === 0 && "row-span-2 col-span-1",
              )}
            >
              <img
                src={img.src}
                alt={img.alt || ""}
                className="w-full h-full object-cover block transition-transform duration-400 group-hover:scale-[1.04]"
              />
              {img.label && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-carbon/70 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[12px] font-bold tracking-[2px] uppercase text-primary-foreground/80">
                    {img.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryMosaic;
