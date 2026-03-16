import ColorSwatch from "./ColorSwatch";
import DSSection from "./DSSection";

const primaryColors = [
  { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", pantone: "White", bg: "bg-white", light: true },
  { name: "Silica", hex: "#F0F0F0", rgb: "240, 240, 240", pantone: "Cool Gray 1C", bg: "bg-silica", light: true },
  { name: "Carbon", hex: "#1A1A1A", rgb: "26, 26, 26", pantone: "Black 6C", bg: "bg-carbon" },
];

const secondaryColors = [
  { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", bg: "bg-white", light: true },
  { name: "Silica", hex: "#F0F0F0", rgb: "240, 240, 240", bg: "bg-silica", light: true },
  { name: "Graphene", hex: "#979797", rgb: "151, 151, 151", bg: "bg-graphene", light: true },
  { name: "Tungsten", hex: "#404040", rgb: "64, 64, 64", bg: "bg-tungsten" },
  { name: "Carbon", hex: "#1A1A1A", rgb: "26, 26, 26", bg: "bg-carbon" },
];

const accentColors = [
  { name: "Red", hex: "#EE3E24", rgb: "238, 62, 36", bg: "bg-c3-red" },
  { name: "Orange", hex: "#F5881F", rgb: "245, 136, 31", bg: "bg-[#F5881F]", light: true },
  { name: "Yellow", hex: "#FFDB37", rgb: "255, 219, 55", bg: "bg-[#FFDB37]", light: true },
  { name: "Sky Blue", hex: "#06A7E0", rgb: "6, 167, 224", bg: "bg-[#06A7E0]" },
  { name: "Navy", hex: "#257799", rgb: "37, 119, 153", bg: "bg-[#257799]" },
  { name: "Green", hex: "#37C43A", rgb: "55, 196, 58", bg: "bg-[#37C43A]" },
];

const DSColors = () => (
  <DSSection id="colors" label="01 — Color" title="Color Palette">
    <div className="space-y-16">
      {/* Primary */}
      <div>
        <p className="type-h6 text-foreground mb-6">Primary palette</p>
        <p className="type-body2 text-muted-foreground mb-8 max-w-xl">
          The evolved palette leads with light: White and Silica dominate backgrounds, while Carbon
          serves as the primary text color. True Black has been eliminated from the system.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {primaryColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </div>

      {/* Secondary */}
      <div>
        <p className="type-h6 text-foreground mb-6">Secondary palette</p>
        <p className="type-body2 text-muted-foreground mb-8 max-w-xl">
          The full neutral scale from White through Carbon. True Black (#000000) has been removed —
          Carbon (#1A1A1A) is the darkest value in the system.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {secondaryColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </div>

      {/* Accent */}
      <div>
        <p className="type-h6 text-foreground mb-6">Extended palette</p>
        <p className="type-body2 text-muted-foreground mb-8 max-w-xl">
          Reserved for product-specific or industry-specific communication only. Not for use as UI accents or system elements.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {accentColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </div>
    </div>
  </DSSection>
);

export default DSColors;
