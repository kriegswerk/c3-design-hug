import React from "react";
import { cn } from "@/lib/utils";

interface ContactDetail {
  label: string;
  value: string;
}

interface ContactSplitProps {
  tag?: string;
  headline?: string;
  description?: string;
  details?: ContactDetail[];
  className?: string;
}

const ContactSplit: React.FC<ContactSplitProps> = ({
  tag = "Contact",
  headline = "Let's build something remarkable",
  description = "Our team is ready to help. Fill in the form and we'll get back to you within one business day.",
  details = [
    { label: "Email", value: "hello@enterprise.ai" },
    { label: "Office", value: "1 Market Street, San Francisco, CA 94105" },
    { label: "Phone", value: "+1 (415) 000-0000" },
  ],
  className,
}) => (
  <section className={cn("bg-carbon py-[100px]", className)}>
    <div className="max-w-[1440px] mx-auto px-20">
      <div className="grid grid-cols-2 gap-24">
        {/* Left: Copy */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center border border-primary-foreground/25 px-[14px] py-[6px] text-[11px] font-bold tracking-[1.5px] uppercase text-primary-foreground/60 mb-6">
              {tag}
            </span>
            <h2 className="type-h2 text-primary-foreground mb-8">{headline}</h2>
            <p className="type-body2 text-primary-foreground/50 mb-12">{description}</p>
          </div>
          {/* Contact details */}
          <div className="flex flex-col gap-8 border-t border-primary-foreground/10 pt-8">
            {details.map((d, i) => (
              <div key={i}>
                <p className="text-[12px] font-bold tracking-[2px] uppercase text-primary-foreground/40 mb-1">
                  {d.label}
                </p>
                <p className="text-primary-foreground text-[18px] font-medium tracking-tight">
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[2px] uppercase text-primary-foreground/50">
                First name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="bg-transparent border-b border-primary-foreground/25 text-primary-foreground text-[18px] tracking-tight py-[14px] outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/70 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[2px] uppercase text-primary-foreground/50">
                Last name
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="bg-transparent border-b border-primary-foreground/25 text-primary-foreground text-[18px] tracking-tight py-[14px] outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/70 transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-primary-foreground/50">
              Company
            </label>
            <input
              type="text"
              placeholder="Acme Corporation"
              className="bg-transparent border-b border-primary-foreground/25 text-primary-foreground text-[18px] tracking-tight py-[14px] outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/70 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-primary-foreground/50">
              Work email
            </label>
            <input
              type="email"
              placeholder="jane@acme.com"
              className="bg-transparent border-b border-primary-foreground/25 text-primary-foreground text-[18px] tracking-tight py-[14px] outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/70 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold tracking-[2px] uppercase text-primary-foreground/50">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your use case…"
              className="bg-transparent border-b border-primary-foreground/25 text-primary-foreground text-[18px] tracking-tight py-[14px] outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/70 transition-colors resize-none"
            />
          </div>
          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-primary-foreground w-4 h-4 shrink-0" />
            <span className="text-primary-foreground/40 text-[13px] leading-snug tracking-tight">
              I agree to the{" "}
              <a href="#" className="text-primary-foreground/70 underline">
                Privacy Policy
              </a>{" "}
              and consent to being contacted about enterprise AI services.
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-foreground text-carbon font-bold text-[16px] tracking-tight py-[18px] hover:bg-silica transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSplit;
