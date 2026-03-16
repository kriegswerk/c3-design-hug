import DSSection from "./DSSection";

const DSInputs = () => (
  <DSSection id="inputs" label="04 — Inputs" title="Form Elements">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Text inputs */}
      <div className="space-y-6">
        <p className="type-h6 text-foreground">Text fields</p>

        <div className="space-y-1">
          <label className="c3-label block">Default</label>
          <input
            type="text"
            placeholder="Placeholder text"
            className="w-full border border-border bg-background text-foreground px-4 py-3 font-sans text-base focus:outline-none focus:border-carbon transition-colors placeholder:text-muted-foreground"
          />
        </div>

        <div className="space-y-1">
          <label className="c3-label block">With Value</label>
          <input
            type="text"
            defaultValue="Enterprise AI Platform"
            className="w-full border border-carbon bg-background text-foreground px-4 py-3 font-sans text-base focus:outline-none focus:border-carbon transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="c3-label block">Error State</label>
          <input
            type="text"
            defaultValue="Invalid input"
className="w-full border border-tungsten bg-background text-foreground px-4 py-3 font-sans text-base focus:outline-none focus:border-tungsten transition-colors"
          />
          <p className="text-tungsten type-caption mt-1">This field is required.</p>
        </div>

        <div className="space-y-1">
          <label className="c3-label block">Disabled</label>
          <input
            type="text"
            disabled
            placeholder="Disabled field"
            className="w-full border border-border bg-silica text-muted-foreground px-4 py-3 font-sans text-base cursor-not-allowed opacity-60"
          />
        </div>
      </div>

      {/* Select & Textarea */}
      <div className="space-y-6">
        <p className="type-h6 text-foreground">Select & textarea</p>

        <div className="space-y-1">
          <label className="c3-label block">Select</label>
          <select className="w-full border border-border bg-background text-foreground px-4 py-3 font-sans text-base focus:outline-none focus:border-carbon transition-colors appearance-none">
            <option>Energy Management</option>
            <option>Supply Chain</option>
            <option>Financial Services</option>
            <option>Defense</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="c3-label block">Textarea</label>
          <textarea
            rows={4}
            placeholder="Describe the problem you're solving..."
            className="w-full border border-border bg-background text-foreground px-4 py-3 font-sans text-base focus:outline-none focus:border-carbon transition-colors placeholder:text-muted-foreground resize-none"
          />
        </div>

        <div className="space-y-3">
          <p className="type-h6 text-foreground">Checkboxes & radio</p>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-carbon" />
            <span className="type-body2 text-foreground">Energy Management</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-carbon" />
            <span className="type-body2 text-foreground">Supply Chain</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="industry" defaultChecked className="w-4 h-4 accent-carbon" />
            <span className="type-body2 text-foreground">Finance</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="industry" className="w-4 h-4 accent-carbon" />
            <span className="type-body2 text-foreground">Defense</span>
          </label>
        </div>
      </div>
    </div>
  </DSSection>
);

export default DSInputs;
