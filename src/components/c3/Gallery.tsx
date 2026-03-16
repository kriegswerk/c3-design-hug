import React, { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GalleryProps {
  title?: string;
  images: { src: string; alt?: string }[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ title, images, className }) => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length]
  );

  return (
    <section className={cn("bg-background py-16 md:py-24", className)}>
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          {title && (
            <h2 className="type-h6 text-foreground uppercase tracking-wider font-bold">
              {title}
            </h2>
          )}
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-12 h-12 bg-carbon text-white flex items-center justify-center hover:bg-tungsten transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-12 h-12 bg-carbon text-white flex items-center justify-center hover:bg-tungsten transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden px-4">
        <div
          className="flex transition-transform duration-500 ease-out items-center"
          style={{
            transform: `translateX(calc(-${current * 88}% + 4%))`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={cn(
                "flex-shrink-0 px-2 transition-opacity duration-300",
                i === current ? "opacity-100" : "opacity-40"
              )}
              style={{ width: "88%" }}
            >
              <div className="aspect-video bg-silica overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt ?? ""}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1 rounded-full transition-all",
              i === current ? "w-8 bg-carbon" : "w-4 bg-graphene"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;