import DSSection from "./DSSection";

const DSButtons = () => (
  <DSSection id="buttons" label="03 — Buttons" title="Button System">
    {/* Rule callout */}
    <div className="mb-10 p-6 bg-silica border-l-4 border-carbon">
      <p className="c3-label mb-1">Style Rule</p>
      <p className="type-body2 text-foreground">
        All button labels use <strong>Title Case</strong> with <strong>normal letter-spacing</strong>. Never use all-caps or sentence case on buttons.
      </p>
    </div>

    <div className="space-y-12">
      {/* Primary */}
      <div>
        <p className="type-h6 text-foreground mb-6">Primary — Carbon</p>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-carbon text-white type-cta px-8 py-4 font-bold hover:bg-tungsten transition-colors">
            Primary Action
          </button>
          <button className="bg-carbon text-white type-cta px-6 py-3 font-bold hover:bg-tungsten transition-colors">
            Medium Button
          </button>
          <button className="bg-carbon text-white px-5 py-2.5 font-bold hover:bg-tungsten transition-colors" style={{ fontSize: "1.125rem", letterSpacing: "normal", textTransform: "capitalize" }}>
            Small Button
          </button>
          <button disabled className="bg-graphene text-white type-cta px-8 py-4 font-bold cursor-not-allowed opacity-50">
            Disabled State
          </button>
        </div>
      </div>

      {/* Secondary CTA */}
      <div>
        <p className="type-h6 text-foreground mb-6">CTA — Tungsten</p>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-tungsten text-white type-cta px-8 py-4 font-bold hover:bg-carbon transition-colors">
            Learn More
          </button>
          <button className="bg-tungsten text-white type-cta px-6 py-3 font-bold hover:bg-carbon transition-colors">
            Get Started
          </button>
          <button className="bg-tungsten text-white px-5 py-2.5 font-bold hover:bg-carbon transition-colors" style={{ fontSize: "1.125rem", letterSpacing: "normal", textTransform: "capitalize" }}>
            Contact Sales
          </button>
        </div>
      </div>

      {/* Outline */}
      <div>
        <p className="type-h6 text-foreground mb-6">Outline — secondary</p>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="border-2 border-carbon text-carbon type-cta px-8 py-4 font-bold hover:bg-carbon hover:text-white transition-colors">
            Secondary Action
          </button>
          <button className="border-2 border-graphene text-foreground type-cta px-6 py-3 font-bold hover:border-carbon transition-colors">
            Tertiary Action
          </button>
          <button className="border border-border text-muted-foreground px-5 py-2.5 font-bold hover:border-carbon hover:text-foreground transition-colors" style={{ fontSize: "1.125rem", letterSpacing: "normal", textTransform: "capitalize" }}>
            Ghost Button
          </button>
        </div>
      </div>

      {/* On dark */}
      <div>
        <p className="type-h6 text-foreground mb-6">On dark background</p>
        <div className="bg-carbon p-8 flex flex-wrap gap-4 items-center">
          <button className="bg-white text-carbon type-cta px-8 py-4 font-bold hover:bg-silica transition-colors">
            Primary On Dark
          </button>
          <button className="bg-tungsten text-white type-cta px-8 py-4 font-bold hover:bg-graphene transition-colors">
            CTA On Dark
          </button>
          <button className="border-2 border-white text-white type-cta px-8 py-4 font-bold hover:bg-white hover:text-carbon transition-colors">
            Outline On Dark
          </button>
        </div>
      </div>
    </div>
  </DSSection>
);

export default DSButtons;
