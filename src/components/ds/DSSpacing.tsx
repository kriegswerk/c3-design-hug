import DSSection from "./DSSection";

const spacingScale = [
  { name: "space-1", value: "4px", token: "--space-1", tw: "p-1" },
  { name: "space-2", value: "8px", token: "--space-2", tw: "p-2" },
  { name: "space-4", value: "16px", token: "--space-4", tw: "p-4" },
  { name: "space-6", value: "24px", token: "--space-6", tw: "p-6" },
  { name: "space-8", value: "32px", token: "--space-8", tw: "p-8" },
  { name: "space-12", value: "48px", token: "--space-12", tw: "p-12" },
  { name: "space-16", value: "64px", token: "--space-16", tw: "p-16" },
  { name: "space-20", value: "80px", token: "--space-20", tw: "p-20" },
  { name: "space-24", value: "96px", token: "--space-24", tw: "p-24" },
];

const DSSpacing = () => (
  <DSSection id="spacing" label="07 — Spacing" title="Spacing Scale">
    <div className="mb-8">
      <p className="type-body2 text-muted-foreground max-w-xl">
        Based on an <strong>8pt grid</strong> system. All spacing values are multiples of 4px,
        ensuring consistent rhythm across layouts.
      </p>
    </div>
    <div className="space-y-4">
      {spacingScale.map((s) => (
        <div key={s.name} className="flex items-center gap-8 py-3 border-b border-border">
          <div className="w-32 shrink-0">
            <p className="c3-label">{s.name}</p>
          </div>
          <div className="w-20 shrink-0">
            <p className="type-caption text-muted-foreground font-mono">{s.value}</p>
          </div>
          <div className="w-40 shrink-0">
            <p className="type-caption text-muted-foreground font-mono">{s.tw}</p>
          </div>
          <div
            className="bg-tungsten h-4 shrink-0"
            style={{ width: s.value }}
          />
        </div>
      ))}
    </div>
  </DSSection>
);

export default DSSpacing;
