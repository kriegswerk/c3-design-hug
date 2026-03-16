import DSSection from "./DSSection";

const typeScaleItems = [
  { label: "H1", spec: "100/95 · Bold · Title Case · 95% tracking", className: "type-h1", text: "Enterprise AI Platform", truncate: true, rule: "headline" },
  { label: "H2", spec: "70/70 · Bold · Title Case · 95% tracking", className: "type-h2", text: "Solving Complex Problems", truncate: true, rule: "headline" },
  { label: "H3", spec: "45/45 · Bold · Title Case · 95% tracking", className: "type-h3", text: "Energy Management", rule: "headline" },
  { label: "H4", spec: "32/32 · Bold · Title Case · 95% tracking", className: "type-h4", text: "Supply Chain Intelligence", rule: "headline" },
  { label: "H5", spec: "24/26 · Bold · Sentence case", className: "type-h5", text: "Sub-headline example text", rule: "sub-headline" },
  { label: "H6", spec: "16/22 · Bold · Sentence case", className: "type-h6", text: "Supporting sub-headline", rule: "sub-headline" },
  { label: "Body 1", spec: "24/32 · Regular · Sentence case", className: "type-body1", text: "The body copy style for primary reading and long-form content.", rule: "body" },
  { label: "Body 2", spec: "20/28 · Regular · Sentence case", className: "type-body2", text: "Secondary body style for supporting information and captions.", rule: "body" },
  { label: "Paragraph", spec: "15/18 · Regular · Sentence case", className: "type-paragraph", text: "Paragraph text for standard content blocks and descriptions.", rule: "body" },
  { label: "Caption", spec: "15/18 · Light · Sentence case", className: "type-caption", text: "Caption text for supplemental details and metadata.", rule: "body" },
  { label: "CTA", spec: "21/22 · Bold · Title Case · 100% tracking", className: "type-cta", text: "Learn More", rule: "button" },
  { label: "Pullquote", spec: "34/40 · Regular · Sentence case", className: "type-pullquote", text: '"AI distills complex information into clear, digestible insights."', rule: "body" },
  { label: "Meta Title", spec: "18/20 · Regular · Sentence case", className: "type-meta", text: "Tag / section label", rule: "body" },
];

const ruleColor: Record<string, string> = {
  headline: "bg-carbon text-white",
  "sub-headline": "bg-carbon text-white",
  button: "bg-carbon text-white",
  body: "bg-carbon text-white",
};

const ruleLabel: Record<string, string> = {
  headline: "Title Case · 100% tracking",
  "sub-headline": "Sentence case",
  button: "Title Case · 100% tracking",
  body: "Sentence case",
};

const DSTypography = () => (
  <DSSection id="typography" label="02 — Typography" title="Type Hierarchy">
    {/* Updated rules callout */}
    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
      <div className="bg-carbon p-8">
        <p className="c3-label mb-3">Headlines &amp; Buttons</p>
        <p className="type-h4 text-white mb-4">Title Case</p>
        <p className="type-body2 text-graphene">
          H1–H4 and all buttons use Title Case with 100% letter-spacing. Every word is capitalised.
        </p>
      </div>
      <div className="bg-silica p-8">
        <p className="c3-label mb-3">Body Copy &amp; Sub-headlines</p>
        <p className="type-h4 text-foreground mb-4">Sentence case</p>
        <p className="type-body2 text-muted-foreground">
          H5–H6, body, captions, and pullquotes use sentence case. Only the first word and proper nouns are capitalised.
        </p>
      </div>
    </div>

    {/* Additional rules */}
    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
      <div className="bg-background p-8 border border-border">
        <p className="c3-label mb-3">Text Alignment</p>
        <p className="type-h5 text-foreground mb-2">Always left-aligned</p>
        <p className="type-body2 text-muted-foreground">No centered text. All content aligns to the left edge of the grid.</p>
      </div>
      <div className="bg-background p-8 border border-border">
        <p className="c3-label mb-3">Letter Spacing</p>
        <p className="type-h5 text-foreground mb-2">95% for headlines</p>
        <p className="type-body2 text-muted-foreground">Headlines (H1–H4) use -0.05em tracking. Body copy and sub-headlines use normal tracking.</p>
      </div>
    </div>

    <div className="divide-y divide-border">
      {typeScaleItems.map((item) => (
        <div key={item.label} className="flex items-center gap-8 py-8">
          <div className="w-36 shrink-0">
            <p className="c3-label">{item.label}</p>
            <p className="type-caption text-muted-foreground mt-1 leading-snug">{item.spec}</p>
          </div>
          <div className={`${item.className} text-foreground ${item.truncate ? "truncate" : ""} leading-none flex-1`}>
            {item.text}
          </div>
          <div className="shrink-0">
            <span className={`text-xs font-bold px-2 py-1 uppercase tracking-widest ${ruleColor[item.rule]}`}>
              {ruleLabel[item.rule]}
            </span>
          </div>
        </div>
      ))}
    </div>
  </DSSection>
);

export default DSTypography;
