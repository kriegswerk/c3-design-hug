import DSSection from "./DSSection";

const contentFlow = [
  {
    number: "01",
    title: "Hook / problem",
    ux: "Well Oriented & Confident",
    content: [
      "Acknowledge the user's world and context",
      "Clearly define the primary pain points",
      "Make the cost of inaction explicit",
    ],
    experience: [
      "Clear purpose of the page",
      "Strong information hierarchy (hero, headings, breadcrumbs, spacing)",
      "Expectations are set and met",
    ],
  },
  {
    number: "02",
    title: "Solution",
    ux: "Intrigued & Ready to Learn",
    content: [
      "Introduce the product, service, or offering as the answer",
    ],
    experience: [
      "Answer the core user problem early",
      "Lead with what matters most: conclusions, insights, best practices",
      "Provide CTAs that invite deeper exploration",
    ],
  },
  {
    number: "03",
    title: "Value proposition & benefits",
    ux: "Building Understanding & Momentum",
    content: [
      "Explain how the solution addresses the problem",
      "Highlight tangible outcomes (e.g., time saved, revenue gained, risk reduced)",
    ],
    experience: [
      "Expand on earlier points with supporting data and context",
      "Reframe high-level ideas in practical, relatable terms",
    ],
  },
  {
    number: "04",
    title: "Primary call to action",
    ux: "Validated & Reassured",
    content: [
      "Drive toward a meaningful next step (e.g., demo, trial, consultation)",
    ],
    experience: [
      "Show how the offering fits into real enterprise workflows",
      "Clarify implementation requirements and skill dependencies",
      "Address adoption concerns through expert, concise explanations",
    ],
  },
  {
    number: "05",
    title: "Social / 3rd party proof",
    ux: "Trust & Credibility",
    content: [
      "Case studies",
      "Testimonials",
      "Customer or partner logos",
      "Links to third-party validation (analysts, press, reviews)",
    ],
    experience: [],
  },
  {
    number: "06",
    title: "How it works",
    ux: "Comprehension",
    content: [
      "Explain the mechanics of the offering",
      "Show how it fits within an existing software or operational stack",
      "Establish subject-matter expertise",
    ],
    experience: [],
  },
  {
    number: "07",
    title: "Logistics & implementation",
    ux: "Refocused on Action",
    content: [
      "Outline required skills, resources, and cross-functional involvement",
      "Explain how users are supported in building or accessing these capabilities",
    ],
    experience: [
      "Reiterate the core value proposition simply",
      "Distill next steps into clear, low-friction actions",
      "Provide conversion or adjacent-path CTAs",
    ],
  },
];

const DSContentStrategy = () => (
  <DSSection id="content" label="09 — Content Strategy" title="Content Strategy Framework">
    {/* Intro */}
    <div className="mb-16">
      <div className="p-8 bg-silica border-l-4 border-carbon mb-8">
        <p className="type-body2 text-foreground max-w-3xl">
          Users should be able to consume content in a predictable, logical flow. This framework provides
          a consistent starting point for structuring page content — moving the user from{" "}
          <strong>confusion to actionable understanding.</strong>
        </p>
      </div>
      <p className="type-body2 text-muted-foreground max-w-3xl">
        Speak with clarity and expertise, prioritize user benefit, and align to our voice and tone
        guidelines at all times.
      </p>
    </div>

    {/* Content Flow */}
    <div>
      <p className="type-h6 text-foreground mb-6">Page content framework</p>
      <div className="space-y-px bg-border">
        {contentFlow.map((step) => (
          <div key={step.number} className="bg-background grid grid-cols-12 gap-0">
            {/* Number & Title */}
            <div className="col-span-3 bg-carbon p-8 flex flex-col justify-start">
              <p className="c3-label mb-2">{step.number}</p>
              <h3 className="type-h5 text-white">{step.title}</h3>
              <div className="mt-4 pt-4 border-t border-tungsten">
                <p className="type-caption text-graphene font-bold uppercase tracking-widest">{step.ux}</p>
              </div>
            </div>

            {/* Content */}
            <div className="col-span-4 p-8 border-r border-border">
              <p className="c3-label mb-4">Page Content</p>
              <ul className="space-y-3">
                {step.content.map((item) => (
                  <li key={item} className="flex items-start gap-3 type-body2 text-foreground">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* UX */}
            <div className="col-span-5 p-8">
              {step.experience.length > 0 && (
                <>
                  <p className="c3-label mb-4">User Experience</p>
                  <ul className="space-y-3">
                    {step.experience.map((item) => (
                      <li key={item} className="flex items-start gap-3 type-body2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Core Principle */}
    <div className="mt-16 bg-carbon p-12">
      <p className="c3-label mb-4">Core Principle</p>
      <blockquote className="type-pullquote text-white max-w-3xl">
        "Every piece of content should help move the user from confusion to actionable understanding."
      </blockquote>
      <p className="type-caption text-graphene mt-6">C3 AI Content Strategy Guide</p>
    </div>
  </DSSection>
);

export default DSContentStrategy;
