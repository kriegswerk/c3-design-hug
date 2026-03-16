interface ColorSwatchProps {
  name: string;
  hex: string;
  rgb: string;
  pantone?: string;
  bg: string; // tailwind bg class
  light?: boolean; // text should be dark
}

const ColorSwatch = ({ name, hex, rgb, pantone, bg, light }: ColorSwatchProps) => (
  <div className="flex flex-col">
    <div
      className={`w-full h-40 border border-border ${bg}`}
    />
    <div className="pt-3 space-y-0.5">
      <p className={`font-bold text-sm ${light ? "text-foreground" : "text-foreground"}`}>{name}</p>
      <p className="type-caption text-muted-foreground">Hex: {hex}</p>
      <p className="type-caption text-muted-foreground">RGB: {rgb}</p>
      {pantone && <p className="type-caption text-muted-foreground">PANTONE: {pantone}</p>}
    </div>
  </div>
);

export default ColorSwatch;
