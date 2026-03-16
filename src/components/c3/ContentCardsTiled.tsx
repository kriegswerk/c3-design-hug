import React from "react";
import { cn } from "@/lib/utils";

interface TiledCard {
  label: string;
  image: string;
  video?: string;
  href?: string;
}

interface ContentCardsTiledProps {
  headline: string;
  /** First row: 1 large (spans 2 rows) + 2 small stacked right */
  topCards: [TiledCard, TiledCard, TiledCard];
  /** Second row: 1 large left + 2 small stacked + 1 small below */
  bottomCards: [TiledCard, TiledCard, TiledCard, TiledCard];
  className?: string;
}

const Card: React.FC<{ card: TiledCard; className?: string }> = ({
  card,
  className,
}) => (
  <a
    href={card.href ?? "#"}
    className={cn(
      "relative block overflow-hidden group bg-carbon",
      className
    )}
  >
    {card.video ? (
      <video
        src={card.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <img
        src={card.image}
        alt={card.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon/40 to-transparent" />
    <span className="absolute top-4 left-4 type-caption text-white font-bold z-10">
      {card.label}
    </span>
  </a>
);

const ContentCardsTiled: React.FC<ContentCardsTiledProps> = ({
  headline,
  topCards,
  bottomCards,
  className,
}) => (
  <section className={cn("bg-silica py-16 md:py-24", className)}>
    <div className="max-w-screen-xl mx-auto px-8">
      <h2 className="type-h2 text-carbon mb-12">{headline}</h2>

      {/* Top row: large card left spanning 2 rows, 2 smaller right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
        <Card card={topCards[0]} className="aspect-square md:row-span-2" />
        <div className="grid grid-cols-2 gap-2">
          <Card card={topCards[1]} className="aspect-square" />
          <Card card={topCards[2]} className="aspect-square" />
        </div>
      </div>

      {/* Bottom row: large card left, 2 small + 1 small right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Card card={bottomCards[0]} className="aspect-square md:row-span-2" />
        <div className="grid grid-cols-2 gap-2">
          <Card card={bottomCards[1]} className="aspect-square" />
          <Card card={bottomCards[2]} className="aspect-square" />
          <Card card={bottomCards[3]} className="aspect-[2/1] col-span-2" />
        </div>
      </div>
    </div>
  </section>
);

export default ContentCardsTiled;
