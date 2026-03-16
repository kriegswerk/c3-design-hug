import DSSection from "./DSSection";

const badges = [
  { label: "Enterprise AI", variant: "carbon" },
  { label: "New", variant: "tungsten" },
  { label: "Beta", variant: "outline" },
  { label: "Tag", variant: "muted" },
  { label: "Energy", variant: "graphene" },
];

type BadgeVariant = "carbon" | "tungsten" | "outline" | "muted" | "graphene";

const badgeStyles: Record<BadgeVariant, string> = {
  carbon: "bg-carbon text-white",
  tungsten: "bg-tungsten text-white",
  outline: "border border-carbon text-foreground bg-transparent",
  muted: "bg-silica text-muted-foreground",
  graphene: "bg-graphene text-white",
};

const DSBadges = () => (
  <DSSection id="badges" label="05 — Badges & Labels" title="Badges & Labels">
    <div className="space-y-12">
      {/* Badges */}
      <div>
        <p className="type-h6 text-foreground mb-6">Badges</p>
        <div className="flex flex-wrap gap-3">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-widest ${badgeStyles[b.variant as BadgeVariant]}`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Section labels */}
      <div>
        <p className="type-h6 text-foreground mb-6">Section labels — category tags</p>
        <div className="space-y-4">
          {["Energy Management", "Manufacturing", "Financial Services", "Defense", "Healthcare"].map((label) => (
            <div key={label} className="flex items-center gap-4 py-4 border-b border-border last:border-0">
              <span className="c3-label">{label}</span>
              <p className="type-body2 text-foreground">
                C3 AI is solving previously unsolvable problems in {label}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Status indicators */}
      <div>
        <p className="type-h6 text-foreground mb-6">Status indicators</p>
        <div className="flex flex-wrap gap-6">
          {[
            { label: "Active", dot: "bg-[#37C43A]" },
            { label: "Processing", dot: "bg-[#06A7E0]" },
            { label: "Warning", dot: "bg-[#F5881F]" },
            { label: "Error", dot: "bg-tungsten" },
            { label: "Inactive", dot: "bg-graphene" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${s.dot}`} />
              <span className="type-caption text-foreground font-bold uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DSSection>
);

export default DSBadges;
