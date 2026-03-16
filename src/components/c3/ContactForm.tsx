import React from "react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  headline?: string;
  description?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  headline = "Get in Touch with Our Team",
  description = "Get in touch with us! Complete the form below to discuss your project. We can't wait to collaborate and bring your vision to life.",
  className,
}) => (
  <section className={cn("bg-silica py-16 md:py-24", className)}>
    <div className="max-w-screen-xl mx-auto px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
        <h2 className="type-h4 text-foreground tracking-normal font-bold">{headline}</h2>
        <p className="type-body2 text-muted-foreground max-w-sm">{description}</p>
      </div>

      {/* Form */}
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white border border-border text-foreground placeholder:text-graphene px-4 py-3 type-body2 focus:outline-none focus:ring-1 focus:ring-carbon"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white border border-border text-foreground placeholder:text-graphene px-4 py-3 type-body2 focus:outline-none focus:ring-1 focus:ring-carbon"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={8}
          className="w-full bg-white border border-border text-foreground placeholder:text-graphene px-4 py-3 type-body2 resize-none focus:outline-none focus:ring-1 focus:ring-carbon"
        />
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6">
          <label className="flex items-center gap-2 text-muted-foreground type-caption cursor-pointer">
            <input type="checkbox" className="accent-carbon w-4 h-4" />I want to receive the weekly newsletter
          </label>
          <button
            type="submit"
            className="bg-carbon text-white type-cta px-12 py-4 font-bold hover:bg-tungsten transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactForm;