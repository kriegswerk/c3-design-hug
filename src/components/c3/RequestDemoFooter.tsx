import React from "react";
import { cn } from "@/lib/utils";

interface RequestDemoFooterProps {
  headline?: string;
  buttonLabel?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const RequestDemoFooter: React.FC<RequestDemoFooterProps> = ({
  headline = "See What Decision Advantage Looks Like",
  buttonLabel = "Request a Demo",
  href,
  onClick,
  className,
}) => (
  <section className={cn("bg-silica py-[50px]", className)}>
    <div className="max-w-screen-xl mx-auto px-8">
      <h2 className="type-h1-reduced text-foreground uppercase mb-10">
        {headline}
      </h2>
      <a
        href={href ?? "#"}
        onClick={onClick}
        className="inline-block bg-carbon text-white type-cta px-10 py-4 font-bold hover:bg-tungsten transition-colors"
      >
        {buttonLabel}
      </a>
    </div>
  </section>
);

export default RequestDemoFooter;