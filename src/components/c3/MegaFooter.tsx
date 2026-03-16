import React from "react";
import { cn } from "@/lib/utils";
import footerLogo from "@/assets/imagery/footer-logo.png";
import socialGlassdoor from "@/assets/imagery/social-glassdoor.png";
import socialLinkedin from "@/assets/imagery/social-linkedin.png";
import socialX from "@/assets/imagery/social-x.png";

interface LinkGroup {
  title: string;
  links: {label: string;href?: string;}[];
}

interface MegaFooterProps {
  headline?: string;
  headlineAccent?: string;
  linkGroups?: LinkGroup[];
  bottomLinks?: {label: string;href?: string;}[];
  copyright?: string;
  className?: string;
}

const defaultGroups: LinkGroup[] = [
{
  title: "Solutions",
  links: [{ label: "Applications" }, { label: "Generative AI" }]
},
{
  title: "Customers",
  links: [{ label: "Case Studies" }, { label: "Customer Viewpoints" }]
},
{
  title: "Resources",
  links: [{ label: "Glossary" }, { label: "Documentation" }]
},
{
  title: "Platform",
  links: [
  { label: "Data" },
  { label: "AI" },
  { label: "Application Development" },
  { label: "Platform Services" },
  { label: "C3.AI Studio" },
  { label: "C3AI Vision" }]

},
{
  title: "About Us",
  links: [
  { label: "Company" },
  { label: "Leadership" },
  { label: "Investors" },
  { label: "Press" },
  { label: "Careers" }]

},
{
  title: "Getting Started with AI",
  links: [
  { label: "Generative AI" },
  { label: "What is Enterprise AI" },
  { label: "Machine Learning" }]

},
{
  title: "Community",
  links: [{ label: "C3 AI Fellows" }, { label: "C3 AI DTI Partners" }]
},
{
  title: "Industries",
  links: [
  { label: "Manufacturing" },
  { label: "Oil and Gas" },
  { label: "Utilities" },
  { label: "Financial Services" },
  { label: "Defense and Intelligence" },
  { label: "Maritime" }]

},
{
  title: "Industries (cont.)",
  links: [
  { label: "Government" },
  { label: "Life Sciences and Healthcare" },
  { label: "Retail" },
  { label: "Telecommunications" },
  { label: "Transportations" },
  { label: "All Industries" }]

}];


const defaultBottom: {label: string;href?: string;}[] = [
{ label: "Events" },
{ label: "News" },
{ label: "Contact" },
{ label: "Privacy Policy" },
{ label: "Terms of Use" },
{ label: "Site Map" }];


const MegaFooter: React.FC<MegaFooterProps> = ({
  headline = "C3 AI Intelligence",
  headlineAccent = "at Scale",
  linkGroups = defaultGroups,
  bottomLinks = defaultBottom,
  copyright = `© ${new Date().getFullYear()} C3.ai, Inc. All Rights Reserved.`,
  className
}) => {
  // Split groups into rows of 3
  const rows: LinkGroup[][] = [];
  for (let i = 0; i < linkGroups.length; i += 3) {
    rows.push(linkGroups.slice(i, i + 3));
  }

  return (
    <footer className={cn("bg-graphene border-t border-tungsten", className)}>
      <div className="max-w-screen-xl mx-auto px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Left: Big headline + logo */}
          <div className="md:col-span-2 relative flex flex-col justify-between">
            <div>
              <h2 className="type-h3 text-silica mb-2">{headline}</h2>
              <h2 className="type-h3 text-tungsten">{headlineAccent}</h2>
            </div>

            {/* C3 AI Logo */}
            <div className="mt-auto pt-16">
              <img src={footerLogo} alt="C3 AI logo" className="w-64 md:w-80" />
            </div>
          </div>

          {/* Right: Link groups in rows of 3 */}
          <div className="md:col-span-3 space-y-12">
            {rows.map((row, ri) =>
            <div key={ri} className="grid grid-cols-3 gap-8">
                {row.map((group) =>
              <div key={group.title}>
                    <p className="type-h6 text-silica mb-4 font-bold">
                      {group.title}
                    </p>
                    <ul className="space-y-1">
                      {group.links.map((link) =>
                  <li key={link.label}>
                          <a
                      href={link.href ?? "#"}
                      className="type-caption text-tungsten hover:text-silica transition-colors">

                            {link.label}
                          </a>
                        </li>
                  )}
                    </ul>
                  </div>
              )}
              </div>
            )}

            {/* Bottom bar */}
            <div className="border-t border-tungsten mt-4 pt-8">
              <div className="flex items-center justify-between mb-4">
                {bottomLinks.map((link) =>
                <a
                  key={link.label}
                  href={link.href ?? "#"}
                  className="type-caption text-tungsten hover:text-silica transition-colors">
                    {link.label}
                  </a>
                )}
              </div>
              <div className="flex items-center justify-between">
                <p className="type-caption text-tungsten">{copyright}</p>
                <div className="flex items-center gap-4">
                  <a href="#" aria-label="Glassdoor"><img src={socialGlassdoor} alt="Glassdoor" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" /></a>
                  <a href="#" aria-label="LinkedIn"><img src={socialLinkedin} alt="LinkedIn" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" /></a>
                  <a href="#" aria-label="X"><img src={socialX} alt="X" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default MegaFooter;