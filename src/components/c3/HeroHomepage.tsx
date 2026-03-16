import React from "react";
import { cn } from "@/lib/utils";

interface HeroHomepageProps {
  headlineBold: string;
  headlineLight: string;
  tagline?: string;
  playButton?: {label?: string;onClick?: () => void;};
  backgroundImage?: string;
  backgroundVideo?: string;
  /** "dark" = legacy carbon bg, "light" = evolved silica bg with dot grid */
  variant?: "dark" | "light";
  className?: string;
}

const HeroHomepage: React.FC<HeroHomepageProps> = ({
  headlineBold,
  headlineLight,
  tagline,
  playButton,
  backgroundImage,
  backgroundVideo,
  variant = "dark",
  className
}) => {
  const isLight = variant === "light";

  return (
  <section
    className={cn(
      "relative min-h-[90vh] flex flex-col overflow-hidden",
      isLight ? "bg-silica" : "bg-carbon",
      className
    )}>

    {/* Dot grid texture for light variant */}
    {isLight && (
      <div className="absolute inset-0 opacity-[0.10] z-[1]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--carbon)) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
    )}

    {backgroundVideo ? (
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    ) : backgroundImage ? (
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    ) : null}
    <div className={cn(
      "absolute inset-0",
      isLight
        ? "bg-gradient-to-t from-silica/60 via-transparent to-silica/20"
        : "bg-gradient-to-t from-carbon/60 via-transparent to-carbon/20"
    )} />

    {/* Headline block — top */}
    <div className="relative z-10 max-w-screen-xl mx-auto px-8 pt-[24px] w-full">
      <h1 className={cn("type-h1 max-w-5xl my-0 py-0", isLight ? "text-carbon" : "text-white")}>{headlineBold}</h1>
      <p className="type-h1 text-graphene max-w-5xl whitespace-pre-line mb-[24px]">{headlineLight}</p>
      {playButton &&
        <button
          onClick={playButton.onClick}
          className={cn(
            "type-caption w-[180px] py-2 font-bold transition-colors text-center border",
            isLight
              ? "border-carbon text-carbon hover:bg-carbon hover:text-white"
              : "border-white text-white hover:bg-white hover:text-carbon"
          )}>
          {playButton.label ?? "Play"}
        </button>
      }
    </div>

    {/* Bottom bar — tagline */}
    {tagline &&
      <div className="relative z-10 max-w-screen-xl mx-auto px-8 pb-[24px] w-full mt-auto">
        <p className={cn("type-body2 font-bold", isLight ? "text-carbon" : "text-white")}>{tagline}</p>
      </div>
    }
  </section>
  );
};


export default HeroHomepage;