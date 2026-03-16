import DSSection from "./DSSection";

const iconExamples = [
  { name: "search", label: "Search" },
  { name: "menu", label: "Menu" },
  { name: "close", label: "Close" },
  { name: "arrow_forward", label: "Arrow Forward" },
  { name: "arrow_back", label: "Arrow Back" },
  { name: "check_circle", label: "Check Circle" },
  { name: "error", label: "Error" },
  { name: "info", label: "Info" },
  { name: "settings", label: "Settings" },
  { name: "person", label: "Person" },
  { name: "mail", label: "Mail" },
  { name: "notifications", label: "Notifications" },
  { name: "download", label: "Download" },
  { name: "upload", label: "Upload" },
  { name: "edit", label: "Edit" },
  { name: "delete", label: "Delete" },
  { name: "visibility", label: "Visibility" },
  { name: "lock", label: "Lock" },
  { name: "trending_up", label: "Trending Up" },
  { name: "analytics", label: "Analytics" },
  { name: "bar_chart", label: "Bar Chart" },
  { name: "schedule", label: "Schedule" },
  { name: "cloud", label: "Cloud" },
  { name: "memory", label: "Memory" },
];

const sizes = [
  { size: 20, label: "20px" },
  { size: 24, label: "24px — Default" },
  { size: 36, label: "36px" },
  { size: 48, label: "48px" },
];

const DSIcons = () => (
  <DSSection id="icons" label="15 — Icons" title="Icons">
    {/* Source */}
    <div className="mb-12">
      <p className="type-h6 text-foreground mb-2">Icon Library</p>
      <p className="type-paragraph text-muted-foreground mb-4">
        We use Google Material Symbols (Outlined) loaded via Google Fonts. Icons render as ligatures
        using the <code className="bg-secondary px-2 py-0.5 text-foreground type-caption">material-symbols-outlined</code> font family.
      </p>
      <a
        href="https://fonts.google.com/icons"
        target="_blank"
        rel="noopener noreferrer"
        className="type-cta text-foreground underline underline-offset-4 hover:text-tungsten transition-colors"
      >
        Browse Icons →
      </a>
    </div>

    {/* Usage */}
    <div className="mb-12">
      <p className="type-h6 text-foreground mb-4">Usage</p>
      <div className="bg-secondary p-6">
        <code className="type-caption text-foreground block whitespace-pre">{`<span className="material-symbols-outlined">search</span>`}</code>
      </div>
    </div>

    {/* Sizes */}
    <div className="mb-12">
      <p className="type-h6 text-foreground mb-4">Sizes</p>
      <div className="flex items-end gap-12">
        {sizes.map((s) => (
          <div key={s.size} className="flex flex-col items-start gap-2">
            <span
              className="material-symbols-outlined text-foreground"
              style={{ fontSize: s.size }}
            >
              settings
            </span>
            <p className="type-caption text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Icon Grid */}
    <div>
      <p className="type-h6 text-foreground mb-4">Common Icons</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-px bg-border">
        {iconExamples.map((icon) => (
          <div
            key={icon.name}
            className="bg-background flex flex-col items-center justify-center gap-2 py-6"
          >
            <span className="material-symbols-outlined text-foreground" style={{ fontSize: 24 }}>
              {icon.name}
            </span>
            <p className="type-caption text-muted-foreground text-center" style={{ fontSize: 11 }}>
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </DSSection>
);

export default DSIcons;
