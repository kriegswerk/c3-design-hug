import { useEffect, useRef, useState } from "react";

const DOT_COLOR = "hsl(26, 0%, 10%)"; // Carbon on light backgrounds

/* ─── 1. Grid Reveal — dots appear row-by-row with staggered fade ─── */
const GridReveal = () => {
  const cols = 20;
  const rows = 12;
  const dotSize = 4;
  const gap = 12;
  const step = dotSize + gap;
  const width = cols * step - gap;
  const height = rows * step - gap;
  const r = dotSize / 2;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md">
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={r + col * step}
            cy={r + row * step}
            r={r}
            fill={DOT_COLOR}
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0.3;0.8;0.3"
              dur="3s"
              begin={`${(row * cols + col) * 0.015}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))
      )}
    </svg>
  );
};

/* ─── 2. Circle Formation — dots arranged in a circle with traveling pulse ─── */
const CircleFormation = () => {
  const count = 32;
  const radius = 100;
  const cx = 120;
  const cy = 120;

  return (
    <svg width={240} height={240} viewBox="0 0 240 240" className="w-full max-w-[240px]">
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        return (
          <circle key={i} cx={x} cy={y} r={3} fill={DOT_COLOR} opacity="0.15">
            <animate
              attributeName="opacity"
              values="0.1;0.8;0.1"
              dur="2.5s"
              begin={`${(i / count) * 2.5}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="2.5;4;2.5"
              dur="2.5s"
              begin={`${(i / count) * 2.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}
    </svg>
  );
};

/* ─── 3. Breathing Grid — uniform grid that pulses in opacity waves ─── */
const BreathingGrid = () => {
  const cols = 24;
  const rows = 14;
  const dotSize = 3;
  const gap = 10;
  const step = dotSize + gap;
  const width = cols * step - gap;
  const height = rows * step - gap;
  const r = dotSize / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg">
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => {
          const dx = r + col * step - centerX;
          const dy = r + row * step - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
          const delay = (dist / maxDist) * 2;
          return (
            <circle
              key={`${row}-${col}`}
              cx={r + col * step}
              cy={r + row * step}
              r={r}
              fill={DOT_COLOR}
              opacity="0.1"
            >
              <animate
                attributeName="opacity"
                values="0.05;0.6;0.05"
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })
      )}
    </svg>
  );
};

/* ─── 4. Scale Cascade — dots grow from center outward ─── */
const ScaleCascade = () => {
  const cols = 10;
  const rows = 6;
  const maxDotSize = 14;
  const gap = 6;
  const step = maxDotSize + gap;
  const width = cols * step - gap;
  const height = rows * step - gap;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-sm">
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => {
          const cx = maxDotSize / 2 + col * step;
          const cy = maxDotSize / 2 + row * step;
          const dx = cx - centerX;
          const dy = cy - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
          const delay = (dist / maxDist) * 1.5;
          return (
            <circle key={`${row}-${col}`} cx={cx} cy={cy} r={0} fill={DOT_COLOR}>
              <animate
                attributeName="r"
                values={`1;${maxDotSize / 2};1`}
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.8;0.2"
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })
      )}
    </svg>
  );
};

/* ─── 5. Convergence — dots converge to center then disperse ─── */
const Convergence = () => {
  const count = 48;
  const cx = 150;
  const cy = 150;

  return (
    <svg width={300} height={300} viewBox="0 0 300 300" className="w-full max-w-[300px]">
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const outerR = 120;
        const innerR = 8;
        const startX = cx + Math.cos(angle) * outerR;
        const startY = cy + Math.sin(angle) * outerR;
        const endX = cx + Math.cos(angle) * innerR;
        const endY = cy + Math.sin(angle) * innerR;
        const delay = (i / count) * 0.5;
        return (
          <circle key={i} r={3} fill={DOT_COLOR} opacity="0">
            <animate attributeName="cx" values={`${startX};${endX};${startX}`} dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="cy" values={`${startY};${endY};${startY}`} dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.8;0.1" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="2;5;2" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        );
      })}
    </svg>
  );
};

/* ─── 6. Wave Columns — vertical columns with traveling wave ─── */
const WaveColumns = () => {
  const cols = 30;
  const rows = 10;
  const dotSize = 4;
  const gap = 8;
  const step = dotSize + gap;
  const width = cols * step - gap;
  const height = rows * step - gap;
  const r = dotSize / 2;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md">
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => {
          const delay = col * 0.08;
          return (
            <circle
              key={`${row}-${col}`}
              cx={r + col * step}
              cy={r + row * step}
              r={r}
              fill={DOT_COLOR}
              opacity="0.1"
            >
              <animate
                attributeName="opacity"
                values="0.05;0.7;0.05"
                dur="2s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })
      )}
    </svg>
  );
};

/* ─── 7. Diagonal Sweep — dots reveal along a diagonal curtain ─── */
const DiagonalSweep = () => {
  const cols = 20;
  const rows = 10;
  const dotSize = 6;
  const gap = 10;
  const step = dotSize + gap;
  const width = cols * step - gap;
  const height = rows * step - gap;
  const r = dotSize / 2;
  const maxDiag = cols + rows;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md">
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => {
          const diagIndex = row + col;
          const delay = (diagIndex / maxDiag) * 2;
          return (
            <circle
              key={`${row}-${col}`}
              cx={r + col * step}
              cy={r + row * step}
              r={r}
              fill={DOT_COLOR}
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.8;0.5;0"
                keyTimes="0;0.3;0.7;1"
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })
      )}
    </svg>
  );
};

/* ─── 8. Dot Morph — grid dots morph into a diamond shape ─── */
const DotMorph = () => {
  const size = 240;
  const cols = 12;
  const rows = 12;
  const step = size / cols;
  const cx = size / 2;
  const cy = size / 2;
  const maxDist = size / 2.2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[240px]">
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => {
          const x = step / 2 + col * step;
          const y = step / 2 + row * step;
          const dx = Math.abs(x - cx);
          const dy = Math.abs(y - cy);
          const diamondDist = dx + dy;
          const inDiamond = diamondDist < maxDist;
          const edgeDist = Math.abs(diamondDist - maxDist * 0.85);
          const isEdge = edgeDist < step * 1.2;
          const delay = (diamondDist / maxDist) * 1.5;

          return (
            <circle key={`${row}-${col}`} cx={x} cy={y} r={2} fill={DOT_COLOR} opacity="0.05">
              <animate
                attributeName="r"
                values={inDiamond ? "2;5;2" : isEdge ? "2;4;2" : "2;2;2"}
                dur="3.5s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values={inDiamond ? "0.05;0.7;0.05" : isEdge ? "0.05;0.4;0.05" : "0.05;0.1;0.05"}
                dur="3.5s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })
      )}
    </svg>
  );
};

/* ─── 9. Spiral Orbit — dots trace a spiral path ─── */
const SpiralOrbit = () => {
  const count = 60;
  const cx = 140;
  const cy = 140;

  return (
    <svg width={280} height={280} viewBox="0 0 280 280" className="w-full max-w-[280px]">
      {Array.from({ length: count }, (_, i) => {
        const t = i / count;
        const angle = t * Math.PI * 6;
        const radius = 20 + t * 100;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        const dotR = 1.5 + t * 2.5;
        const delay = t * 3;
        return (
          <circle key={i} cx={x} cy={y} r={dotR} fill={DOT_COLOR} opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.7;0"
              dur="4s"
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}
    </svg>
  );
};

/* ─── Animation metadata ─── */
const animations = [
  {
    label: "Grid Reveal",
    desc: "Sequential dot appearance with staggered fade — ideal for loading states and data visualization reveals.",
    component: <GridReveal />,
  },
  {
    label: "Radial Pulse",
    desc: "Breathing wave emanating from center — represents data processing or system analysis in progress.",
    component: <BreathingGrid />,
  },
  {
    label: "Circle Formation",
    desc: "Dots in circular arrangement with traveling highlight — conveys cyclical processes and continuous operation.",
    component: <CircleFormation />,
  },
  {
    label: "Scale Cascade",
    desc: "Center-out scale animation — visualizes expanding influence or insight radiating from a central point.",
    component: <ScaleCascade />,
  },
  {
    label: "Convergence",
    desc: "Dots converge to center and disperse — represents data aggregation and the synthesis of information.",
    component: <Convergence />,
  },
  {
    label: "Wave Columns",
    desc: "Traveling wave across columns — suggests data flow, streaming information, or sequential processing.",
    component: <WaveColumns />,
  },
  {
    label: "Diagonal Sweep",
    desc: "Curtain-like reveal along the diagonal axis — ideal for transitions, section reveals, and cinematic entrances.",
    component: <DiagonalSweep />,
  },
  {
    label: "Diamond Morph",
    desc: "Grid dots pulse into a diamond formation — represents structured transformation and data crystallization.",
    component: <DotMorph />,
  },
  {
    label: "Spiral Orbit",
    desc: "Dots trace expanding spiral paths — visualizes growth, discovery, and the expanding reach of intelligence.",
    component: <SpiralOrbit />,
  },
];

const DSDotAnimations = () => (
  <div className="mb-16">
    <p className="type-h6 text-foreground mb-2">Dot animations</p>
    <p className="type-body2 text-muted-foreground mb-8 max-w-2xl">
      Animated dot compositions bring the brand to life in digital contexts. In the evolved
      direction, animations use Carbon dots on light backgrounds — matching the light-first
      aesthetic across all touchpoints.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
      {animations.map((anim) => (
        <div key={anim.label} className="bg-silica p-8 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center min-h-[200px] w-full">
            {anim.component}
          </div>
          <div className="text-center">
            <p className="c3-label mb-1 text-carbon">{anim.label}</p>
            <p className="type-caption text-graphene">{anim.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DSDotAnimations;