import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import navLogo from "@/assets/imagery/nav-logo.svg";

// Dropdown images — using existing project assets
import imgFactory from "@/assets/imagery/preferred-robotwelding.jpg";
import imgDatacenter from "@/assets/imagery/preferred-datacenter.jpg";
import imgShipyard from "@/assets/imagery/preferred-shipconstruction.jpg";
import imgResearch from "@/assets/imagery/preferred-research.jpg";
import imgCampus from "@/assets/imagery/preferred-campus.jpg";

/* ------------------------------------------------------------------ */
/*  Data: each nav item with optional dropdown config                  */
/* ------------------------------------------------------------------ */

interface DropdownColumn {
  heading: string;
  links: { label: string; href?: string }[];
}

interface DropdownImage {
  src: string;
  caption: string;
  href?: string;
}

interface NavItemConfig {
  label: string;
  href?: string;
  dropdown?: {
    columns: DropdownColumn[];
    image?: DropdownImage;
  };
}

const navItems: NavItemConfig[] = [
  {
    label: "Products",
    dropdown: {
      columns: [
        {
          heading: "AI Software",
          links: [
            { label: "C3 AI Applications" },
            { label: "C3 Generative AI" },
          ],
        },
        {
          heading: "Industries",
          links: [
            { label: "Manufacturing" },
            { label: "Oil & Gas" },
            { label: "Utilities" },
            { label: "Financial Services" },
            { label: "Defense & Intelligence" },
            { label: "Maritime" },
            { label: "Government" },
            { label: "Life Sciences and Healthcare" },
            { label: "Retail" },
            { label: "Telecommunications" },
            { label: "Transportation" },
            { label: "All Industries" },
          ],
        },
      ],
      image: {
        src: imgFactory,
        caption: "Build an enterprise that runs itself with intelligent automation",
        href: "#",
      },
    },
  },
  {
    label: "Platform",
    dropdown: {
      columns: [
        {
          heading: "C3 Agentic AI Platform",
          links: [
            { label: "Data Integration" },
            { label: "Feature Store" },
            { label: "Data Models" },
            { label: "Architecture" },
            { label: "C3 AI Studio" },
            { label: "C3 AI Vision™" },
          ],
        },
      ],
      image: {
        src: imgDatacenter,
        caption: "U.S. Department of Health and Human Services selects C3 AI as enterprise AI platform for NIH and CMS",
        href: "#",
      },
    },
  },
  {
    label: "Customers",
    dropdown: {
      columns: [
        {
          heading: "Customers",
          links: [
            { label: "Case Studies" },
            { label: "Testimonials" },
          ],
        },
      ],
      image: {
        src: imgShipyard,
        caption: "Delivering $50M in value through improved yield, faster production planning, and 92% forecast accuracy.",
        href: "#",
      },
    },
  },
  {
    label: "Events",
    // No dropdown — just a link with underline on hover
  },
  {
    label: "Resources",
    dropdown: {
      columns: [
        {
          heading: "Getting Started",
          links: [
            { label: "Generative AI" },
            { label: "What Is Enterprise AI" },
            { label: "Machine Learning" },
          ],
        },
        {
          heading: "Resources",
          links: [
            { label: "Glossary" },
            { label: "Publications" },
            { label: "Blog" },
            { label: "Documentation" },
          ],
        },
      ],
      image: {
        src: imgResearch,
        caption: "How generative and agentic AI are redefining software development at scale",
        href: "#",
      },
    },
  },
  {
    label: "About Us",
    dropdown: {
      columns: [
        {
          heading: "Company",
          links: [
            { label: "Inside C3 AI" },
            { label: "Leadership" },
            { label: "Investors" },
            { label: "News" },
            { label: "Careers" },
          ],
        },
        {
          heading: "Community",
          links: [
            { label: "Partners" },
            { label: "C3 AI Fellows" },
            { label: "C3 AI DTI" },
          ],
        },
      ],
      image: {
        src: imgCampus,
        caption: "Tom Siebel to continue as Executive Chairman",
        href: "#",
      },
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface WebNavProps {
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const WebNav: React.FC<WebNavProps> = ({
  ctaLabel = "Contact Us",
  ctaHref = "#",
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const openDropdown = (index: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveIndex(index);
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const activeItem = activeIndex !== null ? navItems[activeIndex] : null;
  const showDropdown = activeItem?.dropdown != null;

  return (
    <div
      ref={navRef}
      className={cn("relative", className)}
      onMouseLeave={scheduleClose}
    >
      {/* Top bar */}
      <nav className="bg-carbon relative z-50">
        <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={navLogo} alt="C3.ai" className="h-6 w-auto" />
          </a>

          {/* Nav links + CTA */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href ?? "#"}
                className="relative text-white text-sm font-bold tracking-[-0.05em] transition-colors pb-1 group"
                onMouseEnter={() => openDropdown(i)}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ease-out",
                    activeIndex === i ? "w-full" : "w-0"
                  )}
                />
              </a>
            ))}
            <a
              href={ctaHref}
              className="border border-white text-white text-sm tracking-[-0.05em] px-6 py-2.5 hover:bg-white hover:text-carbon transition-colors font-bold"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </nav>

      {/* Dropdown panel */}
      <div
        className={cn(
          "absolute left-0 right-0 z-40 bg-carbon overflow-hidden transition-all duration-300 ease-out",
          showDropdown ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
        onMouseEnter={() => {
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
        }}
        onMouseLeave={scheduleClose}
      >
        {activeItem?.dropdown && (
          <div className="max-w-screen-xl mx-auto px-8 py-12">
            <div className="flex gap-16">
              {/* Columns */}
              <div className="flex gap-16 flex-shrink-0">
                {activeItem.dropdown.columns.map((col) => (
                  <div key={col.heading}>
                    <span className="text-graphene text-sm mb-4 block">
                      {col.heading}
                    </span>
                    <ul className="space-y-2">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href ?? "#"}
                            className="text-white text-base font-bold tracking-[-0.05em] hover:text-graphene transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured image */}
              {activeItem.dropdown.image && (
                <div className="flex-1 flex flex-col justify-end ml-auto min-w-0">
                  <a
                    href={activeItem.dropdown.image.href ?? "#"}
                    className="block"
                  >
                    <img
                      src={activeItem.dropdown.image.src}
                      alt=""
                      className="w-full max-w-lg ml-auto object-cover aspect-[16/9]"
                    />
                  </a>
                  <a
                    href={activeItem.dropdown.image.href ?? "#"}
                    className="text-graphene text-sm mt-4 block max-w-lg ml-auto hover:text-white transition-colors"
                  >
                    {activeItem.dropdown.image.caption}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebNav;
