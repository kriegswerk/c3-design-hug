import DSSection from "./DSSection";

const toneQualities = [
  {
    number: "01",
    name: "Human",
    description:
      "Open and engaging. Our language is relatable without feeling forced or overly familiar. We respect our audience by prioritizing their needs before our own.",
    is: ["Welcoming", "Personal", "Respectful", "Sincere"],
    isnt: ["Cold", "Overbearing", "Whimsical", "Self-centered", "Boastful"],
  },
  {
    number: "02",
    name: "Sophisticated",
    description:
      "Confident, refined, and clear. We stay on topic and get to the point. Our language is polished without being formal or self-important.",
    is: ["Strong", "Refined", "Current"],
    isnt: ["Complex", "Superior", "Dull"],
  },
  {
    number: "03",
    name: "Aspirational",
    description:
      "Forward-looking and empowering. We don't just talk about the future—we explain how to get there. Our tone makes progress feel achievable today.",
    is: ["Accessible", "Empowering", "Optimistic", "Grounded"],
    isnt: ["Self-centered", "Boastful", "Difficult"],
  },
  {
    number: "04",
    name: "Intelligent",
    description:
      "Relevant and responsive. We understand our audience's context and meet them where they are. We sound smart—but never like we know it all.",
    is: ["Intuitive", "Relevant", "Direct", "Responsive"],
    isnt: ["Unclear", "Arrogant", "Impatient"],
  },
];

const dos = [
  "Connect with and engage your audience",
  "Acknowledge user needs before promoting the brand",
  "Use contractions for a natural, conversational feel (e.g., we're, not we are)",
  "Be concise and remove unnecessary complexity",
  "Prioritize clarity and quality over quantity",
  "Use clear value statements and back up claims with specifics",
  "Use specifics when referencing future technology or innovation",
  "Reinforce messages with clear calls to action",
  "Be proactive—anticipate questions and address context",
  "Assume intelligence, regardless of technical expertise",
];

const donts = [
  "Lead with self-promotional or boastful language",
  "Overuse exclamation points",
  "Use slang or cultural references unfamiliar to a global audience",
  "Use dated or overly formal business language",
  "Talk down to readers or overcomplicate explanations",
  "Use passive voice",
  'Speak in vague or hypothetical terms (e.g., "future-ready" without proof)',
  "Rely on tech or business clichés",
  "Use excessive jargon for non-technical audiences",
  "Use metaphors, puns, or clever phrasing that could confuse",
];

const DSVoiceTone = () => (
  <DSSection id="voice" label="08 — Voice & Tone" title="Voice & Tone Guidelines">
    {/* Intro */}
    <div className="mb-16 p-8 bg-silica border-l-4 border-carbon">
      <p className="type-body2 text-foreground max-w-3xl">
        Whether connecting through live events, advertising, or product messaging, our voice should
        feel like it comes from one familiar, credible source — one that understands our audience and
        respects their time. Our voice is always <strong>human, sophisticated, aspirational,</strong> and{" "}
        <strong>intelligent.</strong> Tone adapts to context.
      </p>
    </div>

    {/* Brand Voice pillars */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-6">Our brand voice</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {["Human", "Sophisticated", "Aspirational", "Intelligent"].map((v) => (
          <div key={v} className="bg-carbon p-8 text-center">
            <p className="type-h4 text-white">{v}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Four Tone Tenets */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-6">Tone tenets</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toneQualities.map((t) => (
          <div key={t.name} className="border border-border p-8 hover:border-carbon transition-colors">
            <div className="flex items-start gap-6 mb-6">
              <span className="c3-label text-2xl font-bold tabular-nums shrink-0">{t.number}</span>
              <div>
                <h3 className="type-h4 text-foreground mb-3">{t.name}</h3>
                <p className="type-body2 text-muted-foreground">{t.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div>
                <p className="c3-label mb-3">{t.name} is</p>
                <ul className="space-y-1">
                  {t.is.map((item) => (
                    <li key={item} className="flex items-center gap-2 type-caption text-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="type-h6 text-muted-foreground mb-3" style={{ color: "hsl(var(--graphene))", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
                  {t.name} isn't
                </p>
                <ul className="space-y-1">
                  {t.isnt.map((item) => (
                    <li key={item} className="flex items-center gap-2 type-caption text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Writing Do's & Don'ts */}
    <div>
      <p className="type-h6 text-foreground mb-6">Writing do's &amp; don'ts</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {/* Do */}
        <div className="bg-background p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 bg-foreground flex items-center justify-center shrink-0">
              <span className="text-background text-xs font-bold">✓</span>
            </span>
            <p className="type-h6 text-foreground">Do</p>
          </div>
          <ul className="space-y-4">
            {dos.map((item) => (
              <li key={item} className="flex items-start gap-3 type-body2 text-foreground">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Don't */}
        <div className="bg-silica p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 bg-tungsten flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">✕</span>
            </span>
            <p className="type-h6 text-foreground">Don't</p>
          </div>
          <ul className="space-y-4">
            {donts.map((item) => (
              <li key={item} className="flex items-start gap-3 type-body2 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-tungsten rounded-full mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </DSSection>
);

export default DSVoiceTone;
