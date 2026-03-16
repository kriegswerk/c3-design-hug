import DSSection from "./DSSection";
import DSDotAnimations from "./DSDotAnimations";
import dotsStaircase from "@/assets/imagery/dots-staircase.svg";
import dotsMultiScale from "@/assets/imagery/dots-multi-scale.svg";
import dotsGridDense from "@/assets/imagery/dots-grid-dense.svg";
import dotsLeft from "@/assets/imagery/dots-left.png";
import dotsTop from "@/assets/imagery/dots-top.png";
import dotsHalftoneGrid from "@/assets/imagery/dots-halftone-grid.jpg";
import dotsAscendingClusters from "@/assets/imagery/dots-ascending-clusters.jpg";

/* ─── Dot Grid SVG generator ─── */
interface DotGridProps {
  cols: number;
  rows: number;
  dotSize: number;
  gap: number;
  color?: string;
  className?: string;
}

const DotGrid = ({ cols, rows, dotSize, gap, color = "currentColor", className = "" }: DotGridProps) => {
  const r = dotSize / 2;
  const step = dotSize + gap;
  const width = cols * step - gap;
  const height = rows * step - gap;
  const dots: JSX.Element[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push(
        <circle key={`${row}-${col}`} cx={r + col * step} cy={r + row * step} r={r} fill={color} />
      );
    }
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}>
      {dots}
    </svg>
  );
};

/* ─── Multi-scale dot composition (like the 12-point grid basis) ─── */
const MultiScaleGrid = () => {
  const scales = [
    { dotSize: 4, gap: 4, cols: 12, rows: 6, label: "4px / 4px space" },
    { dotSize: 9, gap: 5, cols: 8, rows: 4, label: "9px / 5px space" },
    { dotSize: 20, gap: 4, cols: 5, rows: 3, label: "20px / 4px space" },
    { dotSize: 50, gap: 4, cols: 3, rows: 2, label: "50px / 4px space" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
      {scales.map((s) => (
        <div key={s.label} className="bg-background p-8 flex flex-col items-start gap-4">
          <DotGrid
            cols={s.cols}
            rows={s.rows}
            dotSize={s.dotSize}
            gap={s.gap}
            color="hsl(var(--foreground))"
          />
          <p className="c3-label mt-2">{s.label}</p>
        </div>
      ))}
    </div>
  );
};

/* ─── Composition demo: staircase-like dot illustration ─── */
const StaircaseComposition = () => {
  // Builds a staircase pattern with varying dot sizes (inspired by uploaded reference image 9.png)
  const sections = [
    { dotSize: 3, gap: 3, cols: 16, rows: 3, x: 80, y: 0 },
    { dotSize: 4, gap: 3, cols: 14, rows: 2, x: 40, y: 24 },
    { dotSize: 5, gap: 4, cols: 12, rows: 2, x: 20, y: 48 },
    { dotSize: 8, gap: 4, cols: 8, rows: 2, x: 0, y: 80 },
    { dotSize: 14, gap: 5, cols: 6, rows: 2, x: 20, y: 120 },
    { dotSize: 24, gap: 6, cols: 4, rows: 2, x: 60, y: 170 },
    { dotSize: 40, gap: 8, cols: 3, rows: 2, x: 100, y: 240 },
  ];

  return (
    <svg viewBox="0 0 500 340" className="w-full max-w-lg">
      {sections.map((s, si) => {
        const r = s.dotSize / 2;
        const step = s.dotSize + s.gap;
        const dots: JSX.Element[] = [];
        for (let row = 0; row < s.rows; row++) {
          for (let col = 0; col < s.cols; col++) {
            dots.push(
              <circle
                key={`${si}-${row}-${col}`}
                cx={s.x + r + col * step}
                cy={s.y + r + row * step}
                r={r}
                fill="hsl(26, 0%, 10%)"
              />
            );
          }
        }
        return <g key={si}>{dots}</g>;
      })}
    </svg>
  );
};

/* ─── Usage rules ─── */
const usageRules = [
  {
    title: "Create metaphors",
    desc: "Use dots to visually represent complex systems, data networks, or AI processes. They become the visual representation of artificial intelligence — organizing information into something meaningful.",
  },
  {
    title: "Complement text",
    desc: "Dots should work alongside typography to reinforce messaging. They add texture and rhythm without competing with headlines or body copy.",
  },
  {
    title: "Build dynamic compositions",
    desc: "Combine multiple dot scales to create visual interest. Mix small dense grids with larger circles to suggest depth, hierarchy, and the transition from data to insight.",
  },
  {
    title: "Respect the grid",
    desc: "All dot compositions are built on a 12-point grid basis. Dot sizes and spacing follow strict mathematical relationships — maintaining the Swiss precision of the C3 AI brand.",
  },
];

const doNotRules = [
  "Don't use dots as decorative noise — every dot pattern should have intention",
  "Don't use colors outside the C3 palette (Carbon, Graphene, White) for dots",
  "Don't rotate or skew dot grids — they should always align to the baseline grid",
  "Don't use True Black (#000000) for dots — Carbon (#1A1A1A) is the darkest value",
];

/* ─── Dot scale specifications ─── */
const dotSpecs = [
  { size: "4px", space: "4px", use: "Dense texture, data metaphors, background patterns", density: "High" },
  { size: "9px", space: "5px", use: "Mid-range compositions, transition zones between scales", density: "Medium" },
  { size: "20px", space: "4px", use: "Prominent patterns, section dividers, focal elements", density: "Medium" },
  { size: "50px", space: "4px", use: "Hero compositions, large-scale focal points", density: "Low" },
  { size: "188px", space: "4px", use: "Maximum scale — single focal circles, rarely used", density: "Minimal" },
];

const DSDots = () => (
  <DSSection id="dots" label="12 — Dot System" title="Dot System">
    {/* Overview */}
    <div className="mb-16 p-8 bg-silica border-l-4 border-carbon">
      <p className="type-body2 text-foreground max-w-3xl">
        The Dot System is the lifeblood of the C3 AI brand. It provides texture, rhythm, and visual
        interest. In the evolved direction, dots serve as subtle background textures on light surfaces,
        can mask and reveal photography in hero compositions, and create abstract metaphors for AI.
        Dots are rendered in Carbon on light backgrounds — never in True Black.
      </p>
    </div>

    {/* 12-Point Grid Basis */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-2">The 12-point grid basis</p>
      <p className="type-body2 text-muted-foreground mb-8 max-w-2xl">
        All dot compositions are built on a 12-point grid. Circle sizes range from 4px to 188px,
        with spacing that maintains consistent visual rhythm across every scale.
      </p>
      <MultiScaleGrid />
    </div>

    {/* Circle Specifications */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-6">Circle specifications</p>
      <div className="space-y-px bg-border">
        <div className="bg-silica grid grid-cols-12 py-3 px-6">
          <span className="col-span-2 c3-label text-xs text-carbon">Dot Size</span>
          <span className="col-span-2 c3-label text-xs text-carbon">Spacing</span>
          <span className="col-span-2 c3-label text-xs text-carbon">Density</span>
          <span className="col-span-6 c3-label text-xs text-carbon">Usage</span>
        </div>
        {dotSpecs.map((spec) => (
          <div key={spec.size} className="bg-background grid grid-cols-12 py-4 px-6 items-center">
            <div className="col-span-2 flex items-center gap-3">
              <div
                className="rounded-full bg-foreground shrink-0"
                style={{ width: Math.min(parseInt(spec.size), 32), height: Math.min(parseInt(spec.size), 32) }}
              />
              <span className="type-h6 text-foreground">{spec.size}</span>
            </div>
            <span className="col-span-2 type-body2 text-muted-foreground">{spec.space}</span>
            <span className="col-span-2 type-caption text-foreground font-bold uppercase tracking-widest">{spec.density}</span>
            <span className="col-span-6 type-body2 text-muted-foreground">{spec.use}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Dot Animations */}
    <DSDotAnimations />

    {/* Static Dot Compositions */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-2">Static compositions</p>
      <p className="type-body2 text-muted-foreground mb-8 max-w-2xl">
        Pre-built dot compositions for use across marketing materials, presentations, and digital experiences.
        Each composition follows the 12-point grid system and uses approved dot scales.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {[
          { src: dotsStaircase, label: "Staircase", desc: "Multi-scale cascade — progressive dot sizes suggest growth and transformation" },
          { src: dotsMultiScale, label: "Multi-Scale Grid", desc: "Mixed density composition — small grids alongside large focal circles" },
          { src: dotsGridDense, label: "Dense Grid", desc: "Uniform dense grid — represents raw data, complexity, and scale" },
          { src: dotsLeft, label: "Left Anchor", desc: "Edge-anchored pattern — partial grid for asymmetric layouts and bleeds" },
          { src: dotsTop, label: "Top Anchor", desc: "Top-anchored pattern — horizontal dot band for headers and section dividers" },
          { src: dotsHalftoneGrid, label: "Halftone Grid", desc: "Multi-scale halftone grid — progressive dot sizes create depth and visual rhythm" },
          { src: dotsAscendingClusters, label: "Ascending Clusters", desc: "Clustered dot formations — ascending scale suggests growth and emergence" },
        ].map((item) => (
          <div key={item.label} className="bg-silica p-8 flex flex-col items-center gap-6">
            <div className="flex items-center justify-center min-h-[200px] w-full">
              <img src={item.src} alt={item.label} className="max-h-[200px] w-auto object-contain" />
            </div>
            <div className="text-center">
              <p className="c3-label mb-1 text-carbon">{item.label}</p>
              <p className="type-caption text-graphene">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Circle Illustration — Light composition demo */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-2">Circle illustration</p>
      <p className="type-body2 text-muted-foreground mb-8 max-w-2xl">
        Dots can be combined at multiple scales to create rich, abstract compositions. In the evolved
        direction, these compositions live on light backgrounds — Carbon dots on White or Silica.
      </p>
      <div className="bg-silica p-12 md:p-16 flex items-center justify-center">
        <StaircaseComposition />
      </div>
    </div>

    {/* Dot Grid as Background Texture */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-2">Dot grid as background texture</p>
      <p className="type-body2 text-muted-foreground mb-8 max-w-2xl">
        In the evolved direction, a uniform small dot grid serves as a subtle background texture
        on light sections — hero banners, content areas, and landing pages. This creates visual
        depth without competing with content.
      </p>
      <div className="relative bg-white p-12 md:p-16 border border-border overflow-hidden min-h-[200px] flex items-center">
        <div className="absolute inset-0 opacity-[0.10]" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--carbon)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
        <div className="relative z-10">
          <h3 className="type-h3 text-carbon mb-2">Light-First Dot Texture</h3>
          <p className="type-body2 text-graphene max-w-lg">
            Uniform 1px dots at 20px intervals create a subtle grid texture. Opacity kept at 10–12%
            to remain atmospheric without interfering with readability.
          </p>
        </div>
      </div>
    </div>

    {/* Dots + Photography Masking */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-2">Dots + photography masking</p>
      <p className="type-body2 text-muted-foreground mb-8 max-w-2xl">
        In hero compositions, dots can serve as masks that reveal photography through circular cutouts.
        This creates a distinctive branded effect that bridges the dot system with imagery.
        Previously a "don't" — now an approved technique in the evolved direction.
      </p>
      <div className="bg-silica p-4 border border-border">
        <p className="c3-label mb-2 text-carbon">New: approved technique</p>
        <p className="type-caption text-graphene">
          Dot masks reveal photography through multi-scale circles, typically positioned in the upper-right
          of hero banners. This creates visual interest while maintaining the brand's geometric precision.
        </p>
      </div>
    </div>

    {/* Usage — How to use */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-6">In context — how to use</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {usageRules.map((rule, i) => (
          <div key={i} className="bg-background p-8 flex items-start gap-6">
            <span className="c3-label text-xl font-bold tabular-nums shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="type-h6 text-foreground mb-2">{rule.title}</p>
              <p className="type-body2 text-muted-foreground">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Usage Range */}
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
      {/* Abstract / Evocative — now on light bg */}
        <div className="bg-silica p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--carbon)) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />
          <div className="relative z-10">
            <p className="c3-label mb-3">Range</p>
            <h3 className="type-h4 text-carbon mb-4">Abstract &amp; Evocative</h3>
            <p className="type-body2 text-graphene mb-4">
              At their most abstract, dots create atmospheric textures and moods. They suggest complexity
              and intelligence without depicting any specific subject. On light backgrounds, this texture
              becomes a subtle ambient layer.
            </p>
            <div className="flex justify-center py-6">
              <DotGrid cols={20} rows={8} dotSize={4} gap={4} color="hsl(var(--carbon))" className="opacity-40" />
            </div>
          </div>
        </div>

        {/* Specific / Representative */}
        <div className="bg-background p-8">
          <p className="c3-label mb-3">Range</p>
          <h3 className="type-h4 text-foreground mb-4">Specific &amp; Representative</h3>
          <p className="type-body2 text-muted-foreground mb-4">
            At their most specific, dots can form recognizable shapes, charts, or data visualizations —
            directly illustrating the subject matter of the content they accompany.
          </p>
          <div className="flex justify-center py-6">
            <DotGrid cols={10} rows={6} dotSize={14} gap={4} color="hsl(var(--foreground))" />
          </div>
        </div>
      </div>
    </div>

    {/* Don'ts */}
    <div>
      <p className="type-h6 text-foreground mb-6">Avoid</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {doNotRules.map((rule, i) => (
          <div key={i} className="bg-background p-8 flex items-start gap-6 border-l-4 border-destructive">
            <span className="c3-label text-xl font-bold tabular-nums shrink-0 text-destructive">✕</span>
            <p className="type-body2 text-foreground">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  </DSSection>
);

export default DSDots;
