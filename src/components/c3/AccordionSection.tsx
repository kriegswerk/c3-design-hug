import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionSectionItem {
  title: string;
  content: string;
}

interface AccordionSectionProps {
  headline: string;
  items: AccordionSectionItem[];
  className?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  headline,
  items,
  className,
}) => (
  <section className={cn("bg-silica py-16 md:py-24", className)}>
    <div className="max-w-screen-xl mx-auto px-8">
      <h2 className="type-h2 text-muted-foreground mb-16">{headline}</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-carbon border-t">
            <AccordionTrigger className="type-h5 text-foreground py-6 font-semibold hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="type-body2 text-muted-foreground pb-6">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default AccordionSection;