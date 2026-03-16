import React from "react";
import { cn } from "@/lib/utils";

interface ContentCard {
  label: string;
  image: string;
  video?: string;
  href?: string;
}

interface ContentCards5050Props {
  headline: string;
  cards: [ContentCard, ContentCard];
  className?: string;
}

const ContentCards5050: React.FC<ContentCards5050Props> = ({
  headline,
  cards,
  className,
}) => (
  <section className={cn("bg-silica py-16 md:py-24", className)}>
    <div className="max-w-screen-xl mx-auto px-8">
      <h2 className="type-h2 text-carbon mb-12">{headline}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href ?? "#"}
            className="relative block aspect-[4/3] overflow-hidden group bg-carbon"
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
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 to-transparent" />
            <span className="absolute top-4 left-4 type-caption text-white font-bold z-10">
              {card.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContentCards5050;
