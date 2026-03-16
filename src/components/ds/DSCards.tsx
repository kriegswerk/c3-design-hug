import DSSection from "./DSSection";

const DSCards = () => (
  <DSSection id="cards" label="06 — Cards" title="Card Patterns">
    <div className="space-y-12">
      {/* Content cards */}
      <div>
        <p className="type-h6 text-foreground mb-6">Content cards</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Default card */}
          <div className="border border-border p-8 hover:border-carbon transition-colors group">
            <p className="c3-label mb-4">Energy Management</p>
            <h3 className="type-h4 text-foreground mb-4 group-hover:text-carbon transition-colors">
              Reduce Energy Costs by 15%
            </h3>
            <p className="type-body2 text-muted-foreground mb-6">
              C3 AI uses machine learning to optimize energy consumption across complex enterprise operations.
            </p>
            <a className="type-cta text-foreground font-bold uppercase tracking-widest hover:text-tungsten transition-colors cursor-pointer">
              Read More →
            </a>
          </div>

          {/* Dark card */}
          <div className="bg-carbon p-8">
            <p className="c3-label mb-4">Supply Chain</p>
            <h3 className="type-h4 text-white mb-4">
              Predict Disruptions Before They Happen
            </h3>
            <p className="type-body2 text-graphene mb-6">
              AI-powered supply chain intelligence for enterprise-scale operations across global networks.
            </p>
            <a className="type-cta text-white font-bold uppercase tracking-widest hover:text-silica transition-colors cursor-pointer">
              Learn How →
            </a>
          </div>

          {/* Silica card */}
          <div className="bg-silica p-8">
            <p className="c3-label mb-4">Defense</p>
            <h3 className="type-h4 text-foreground mb-4">
              Mission-Critical AI at Scale
            </h3>
            <p className="type-body2 text-muted-foreground mb-6">
              Deploy AI applications across complex defense and government operations with full security compliance.
            </p>
            <a className="type-cta text-foreground font-bold uppercase tracking-widest hover:text-tungsten transition-colors cursor-pointer">
              Explore →
            </a>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div>
        <p className="type-h6 text-foreground mb-6">Metric / stat cards</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            { stat: "$50B+", label: "Customer Value Created" },
            { stat: "100+", label: "Enterprise Applications" },
            { stat: "15%", label: "Average Cost Reduction" },
            { stat: "6mo", label: "Time to Production" },
          ].map((m) => (
            <div key={m.label} className="bg-background p-8">
              <p className="type-h2 text-foreground leading-none mb-3">{m.stat}</p>
              <p className="type-caption text-muted-foreground font-bold uppercase tracking-widest">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DSSection>
);

export default DSCards;
