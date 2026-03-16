import DSSection from "./DSSection";

const rules = [
  {
    number: "01",
    title: "Title Case for headlines",
    description:
      "H1 through H4 are always written in Title Case — every word is capitalised. This applies to page titles, section headings, and hero copy.",
    example: { correct: "Enterprise AI For Complex Organizations", wrong: "Enterprise AI for complex organizations" },
    applies: ["H1", "H2", "H3", "H4"],
  },
  {
    number: "02",
    title: "Title Case for buttons",
    description:
      "All button labels and calls to action are written in Title Case. Never use all-caps or sentence case on buttons.",
    example: { correct: "Learn More", wrong: "LEARN MORE" },
    applies: ["CTA", "Button Labels", "Link Actions"],
  },
  {
    number: "03",
    title: "Sentence Case for body copy",
    description:
      "All body text, captions, pullquotes, and supporting copy use sentence case — only the first word and proper nouns are capitalised.",
    example: { correct: "C3 AI is solving previously unsolvable problems across complex organizations.", wrong: "C3 AI Is Solving Previously Unsolvable Problems Across Complex Organizations." },
    applies: ["Body 1", "Body 2", "Caption", "Pullquote"],
  },
  {
    number: "04",
    title: "Sentence Case for sub-headlines",
    description:
      "H5 and H6 sub-headlines use sentence case. They introduce supporting content and should feel less formal than primary headings.",
    example: { correct: "Why this matters for your business", wrong: "Why This Matters For Your Business" },
    applies: ["H5", "H6"],
  },
  {
    number: "05",
    title: "Always left-aligned",
    description:
      "All text is left-aligned. There is no centered text in the C3 AI system. This reinforces the grid-based, Swiss design philosophy.",
    example: { correct: "Text anchored to the left edge of the grid.", wrong: "Text floating in the center of the layout." },
    applies: ["All Text", "All Breakpoints"],
  },
  {
    number: "06",
    title: "100% letter spacing for headlines",
    description:
      "Headlines (H1–H4) use 100% letter-spacing (normal tracking) for a clean, confident look. Body copy, sub-headlines, and buttons also use normal tracking.",
    example: { correct: "Enterprise AI Platform (100% tracking)", wrong: "Enterprise AI Platform (tight tracking)" },
    applies: ["H1", "H2", "H3", "H4"],
  },
];

const DSStyleRules = () => (
  <DSSection id="style-rules" label="10 — Style Rules" title="Typography Style Rules">
    <div className="mb-10 p-8 bg-silica border-l-4 border-carbon">
      <p className="type-body2 text-foreground max-w-3xl">
        These rules define how type is treated across all C3 AI touchpoints. Consistent application ensures
        the brand feels <strong>intentional, clear, and trustworthy</strong> — from headlines to button labels.
      </p>
    </div>

    <div className="space-y-px bg-border">
      {rules.map((rule) => (
        <div key={rule.number} className="bg-background grid grid-cols-12">
          {/* Number + Applies To */}
          <div className="col-span-3 bg-silica p-8">
            <p className="c3-label mb-2">{rule.number}</p>
            <h3 className="type-h5 text-carbon mb-6">{rule.title}</h3>
            <div className="space-y-1 pt-4 border-t border-graphene/20">
              <p className="type-caption text-graphene font-bold uppercase tracking-widest mb-2">Applies to</p>
              <div className="flex flex-wrap gap-2">
                {rule.applies.map((a) => (
                  <span key={a} className="text-xs font-bold px-2 py-0.5 bg-carbon text-white uppercase tracking-widest">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-5 p-8 border-r border-border">
            <p className="c3-label mb-4">Rule</p>
            <p className="type-body2 text-foreground">{rule.description}</p>
          </div>

          {/* Examples */}
          <div className="col-span-4 p-8">
            <p className="c3-label mb-4">Example</p>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 bg-foreground flex items-center justify-center shrink-0">
                    <span className="text-background text-xs font-bold leading-none">✓</span>
                  </span>
                  <p className="type-caption text-muted-foreground font-bold uppercase tracking-widest">Correct</p>
                </div>
                <p className="type-body2 text-foreground bg-silica px-3 py-2">{rule.example.correct}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 bg-tungsten flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold leading-none">✕</span>
                  </span>
                  <p className="type-caption text-muted-foreground font-bold uppercase tracking-widest">Incorrect</p>
                </div>
                <p className="type-body2 text-muted-foreground line-through bg-silica px-3 py-2">{rule.example.wrong}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </DSSection>
);

export default DSStyleRules;
