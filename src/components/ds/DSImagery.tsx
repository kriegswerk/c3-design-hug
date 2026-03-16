import DSSection from "./DSSection";
import systemsSolar from "@/assets/imagery/systems-solar.jpg";
import systemsContainers from "@/assets/imagery/systems-containers.jpg";
import systemsCrowd from "@/assets/imagery/systems-crowd.jpg";
import systemsBuilding from "@/assets/imagery/systems-building.jpg";
import systemsWindmills from "@/assets/imagery/systems-windmills.jpg";
import systemsCrosswalk from "@/assets/imagery/systems-crosswalk.jpg";
import focusLab from "@/assets/imagery/focus-lab.jpg";
import focusSatellite from "@/assets/imagery/focus-satellite.jpg";
import focusOilrig from "@/assets/imagery/focus-oilrig.jpg";
import focusRobot from "@/assets/imagery/focus-robot.jpg";
import focusWarship from "@/assets/imagery/focus-warship.jpg";
import focusFactory from "@/assets/imagery/focus-factory.jpg";

// Preferred Use Imports (Batch 2)
import preferredTurbine from "@/assets/imagery/preferred-turbine.jpg";
import preferredWelding from "@/assets/imagery/preferred-welding.jpg";
import preferredCleanroom from "@/assets/imagery/preferred-cleanroom.jpg";
import preferredCampus from "@/assets/imagery/preferred-campus.jpg";
import preferredResearch from "@/assets/imagery/preferred-research.jpg";
import systemsVessel from "@/assets/imagery/systems-vessel.jpg";
import preferredRobotWelding from "@/assets/imagery/preferred-robotwelding.jpg";
import preferredBomber from "@/assets/imagery/preferred-bomber.jpg";
import preferredCargo from "@/assets/imagery/preferred-cargo.jpg";
import preferredAviation from "@/assets/imagery/preferred-aviation.jpg";
import preferredShipyard from "@/assets/imagery/preferred-shipyard.jpg";
import preferredShipConstruction from "@/assets/imagery/preferred-shipconstruction.jpg";
import preferredSpaceInfra from "@/assets/imagery/preferred-spaceinfra.jpg";
import preferredDatacenter from "@/assets/imagery/preferred-datacenter.jpg";
import preferredPress from "@/assets/imagery/preferred-press.jpg";
const usageRules = [
  "Photography should always be immersive and engaging",
  "Panoramic imagery, closely cropped frames, and densely populated visuals work well with the design system",
  "Avoid common tech tropes",
  "Selected imagery should be naturalistic and real",
];

const systemsImages = [
  { src: systemsSolar, alt: "Solar panels at scale" },
  { src: systemsContainers, alt: "Shipping containers at scale" },
  { src: systemsCrowd, alt: "Dense crowd system" },
  { src: systemsBuilding, alt: "Geometric building facade" },
  { src: systemsWindmills, alt: "Offshore wind farm" },
  { src: systemsCrosswalk, alt: "Aerial crosswalk pattern" },
];

const focusImages = [
  { src: focusLab, alt: "Scientist in laboratory" },
  { src: focusSatellite, alt: "Satellite dish up close" },
  { src: focusOilrig, alt: "Oil rig at dusk" },
  { src: focusRobot, alt: "Industrial robot arm" },
  { src: focusWarship, alt: "Naval warship at sea" },
  { src: focusFactory, alt: "Factory workers in motion" },
];

// Preferred-use images approved for C3 AI designs — upload new batches here
const preferredImages: { src: string; alt: string; category: string; label: string }[] = [
  // Add uploaded preferred images here when re-uploaded
];

// Catalog of preferred images
const preferredCatalog = [
  // Batch 1 (Awaiting Re-upload)
  { number: "01", label: "Industrial Scale", desc: "Reactor vessel under construction inside a vast steel-paneled assembly facility. Symmetrical composition, dramatic overhead lighting.", category: "Systems at Scale", src: systemsVessel },
  { number: "02", label: "Precision Machinery", desc: "Welder in full protective gear working alongside a robotic arm with green laser on a large curved metal component. Dramatic low-key lighting against a black background.", category: "Subject in Focus", src: preferredRobotWelding },
  { number: "03", label: "Aerospace Defense", desc: "B-21 stealth bomber centered in a darkened hangar, shot straight-on. Minimal, powerful silhouette.", category: "Subject in Focus", src: preferredBomber },
  { number: "04", label: "Global Supply Chain", desc: "Cargo ship being loaded with an aircraft fuselage section by crane under a vivid blue sky. Dynamic scale contrast.", category: "Systems at Scale", src: preferredCargo },
  { number: "05", label: "Aerospace Manufacturing", desc: "Wide aerial view of an Airbus A321 assembly line inside a pristine factory floor with yellow overhead cranes.", category: "Systems at Scale", src: preferredAviation },
  { number: "06", label: "Naval Industry", desc: "Shipyard at sunset with large cranes reflected in still water. Warm golden-hour light, industrial density.", category: "Systems at Scale", src: preferredShipyard },
  { number: "07", label: "Ship Construction", desc: "Rusted ship hull block with scaffolding ladders and pipes at dusk. Raw, textural, and geometric.", category: "Subject in Focus", src: preferredShipConstruction },
  { number: "08", label: "Space Infrastructure", desc: "NASA Vehicle Assembly Building interior — towering steel lattice and platforms photographed looking straight up.", category: "Systems at Scale", src: preferredSpaceInfra },
  { number: "09", label: "Data Infrastructure", desc: "Data center interior with vibrantly colored cooling pipes and cable trays photographed from below at angle.", category: "Systems at Scale", src: preferredDatacenter },
  { number: "10", label: "Precision Processing", desc: "Industrial printing press rolls of ballots or documents, photographed from directly above — strong rhythm and pattern.", category: "Subject in Focus", src: preferredPress },
  
  // Batch 2 (Live)
  { number: "11", label: "Power Generation", desc: "Massive industrial turbine rotor with intricate blades, showing immense scale next to a worker. Precision engineering.", category: "Systems at Scale", src: preferredTurbine },
  { number: "12", label: "Advanced Manufacturing", desc: "Automated welding robot working on a large circular metal component with green laser guidance. High-tech precision.", category: "Subject in Focus", src: preferredWelding },
  { number: "13", label: "Cleanroom Operations", desc: "Two technicians in full cleanroom suits inspecting a monitor. Focus on human collaboration in high-tech environments.", category: "Subject in Focus", src: preferredCleanroom },
  { number: "14", label: "Campus Life", desc: "Team members walking outdoors on campus stairs with coffee, showing casual collaboration and human connection.", category: "Subject in Focus", src: preferredCampus },
  { number: "15", label: "Scientific Research", desc: "Researcher examining equipment in a laboratory setting with complex machinery. intense focus and expertise.", category: "Subject in Focus", src: preferredResearch },
];

const DSImagery = () => (
  <DSSection id="imagery" label="11 — Imagery" title="Imagery Guidelines">
    {/* Intro */}
    <div className="mb-16 p-8 bg-silica border-l-4 border-carbon">
      <p className="type-body2 text-foreground max-w-3xl">
        C3 AI photography falls into two general styles:{" "}
        <strong>Systems at Scale</strong> and <strong>Subject in Focus.</strong>{" "}
        Both styles should feel naturalistic, real, and free of common tech tropes.
        Imagery should always be immersive, engaging, and paired tightly with the grid.
      </p>
    </div>

    {/* Two Styles */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-16">
      {/* Systems at Scale */}
      <div className="bg-background p-8">
        <p className="c3-label mb-3">Style 01</p>
        <h3 className="type-h4 text-foreground mb-4">Systems at Scale</h3>
        <p className="type-body2 text-muted-foreground mb-2">
          <strong className="text-foreground">Systems at Scale</strong> photography is useful for
          illustrating scale and showing the complex systems that C3 AI works within. For these
          kinds of images, geometric compositions work well and pair nicely with the design system.
        </p>
        <p className="type-body2 text-muted-foreground">
          Look for images with visual rhythm and strong lines, textures, and/or patterns that help
          communicate the vastness of the systems they are part of.
        </p>
      </div>

      {/* Subject in Focus — shifted to light bg */}
      <div className="bg-silica p-8">
        <p className="c3-label mb-3">Style 02</p>
        <h3 className="type-h4 text-carbon mb-4">Subject in Focus</h3>
        <p className="type-body2 text-graphene mb-2">
          <strong className="text-carbon">Subject in Focus</strong> photography is more humanistic
          and intimate, focusing on a single subject to help the viewer understand a specific
          concept or part of a larger system.
        </p>
        <p className="type-body2 text-graphene">
          These images should be evocative but simple, direct, and dynamic. Strong perspective can
          be a useful tool to add impact, as long as the perspective does not become overly complex
          or complicated.
        </p>
      </div>
    </div>

    {/* Systems at Scale Gallery */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-6">Systems at Scale — examples</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
        {systemsImages.map((img) => (
          <div key={img.alt} className="aspect-video overflow-hidden bg-silica">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Subject in Focus Gallery */}
    <div className="mb-16">
      <p className="type-h6 text-foreground mb-6">Subject in Focus — examples</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
        {focusImages.map((img) => (
          <div key={img.alt} className="aspect-video overflow-hidden bg-silica">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Preferred Use Image Library */}
    <div className="mb-16">
      <div className="mb-8 flex items-start justify-between gap-8">
        <div>
          <p className="type-h6 text-foreground mb-2">Preferred Use Images — Approved Library</p>
          <p className="type-body2 text-muted-foreground max-w-2xl">
            The following images have been approved for use in C3 AI designs. When selecting photography,
            draw from this library first before sourcing new images. All images meet the naturalistic,
            immersive, and non-tech-trope standards of the C3 AI brand.
          </p>
        </div>
      </div>

      <div className="space-y-px bg-border">
        {preferredCatalog.map((item) => (
          <div key={item.number} className="bg-background grid grid-cols-12 min-h-[120px]">
            {/* Number */}
            <div className="col-span-1 bg-silica flex items-center justify-center p-4">
              <span className="c3-label text-base font-bold tabular-nums text-carbon">
                {item.number}
              </span>
            </div>
            
            {/* Image Thumbnail or Placeholder */}
            <div className="col-span-3 border-r border-border relative overflow-hidden group bg-silica">
              {(item as any).src ? (
                <img 
                  src={(item as any).src} 
                  alt={item.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-4 border-b border-r border-border" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)" }}>
                  <p className="type-caption text-tungsten text-center text-xs uppercase tracking-widest">Image Pending</p>
                </div>
              )}
            </div>

            {/* Title & Category */}
            <div className="col-span-3 p-6 border-r border-border flex flex-col justify-center bg-background relative">
              <p className="type-h6 text-foreground mb-1">{item.label}</p>
              <span className="text-xs font-bold tracking-widest" style={{ color: "hsl(var(--graphene))" }}>
                {item.category}
              </span>
            </div>

            {/* Description */}
            <div className="col-span-5 p-6 flex items-center">
              <p className="type-body2 text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-6 bg-silica border-l-4 border-tungsten">
        <p className="type-caption text-foreground">
          <strong>Note:</strong> Upload approved images to <code className="bg-border px-1 py-0.5 text-xs">src/assets/imagery/preferred-*.jpg</code> to display them in this gallery. Images should be sourced from the approved C3 AI photography library and match the styles defined above.
        </p>
      </div>
    </div>

    {/* Usage Rules */}
    <div>
      <p className="type-h6 text-foreground mb-6">In context — usage rules</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {usageRules.map((rule, i) => (
          <div key={i} className="bg-background p-8 flex items-start gap-6">
            <span className="c3-label text-xl font-bold tabular-nums shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="type-body2 text-foreground">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  </DSSection>
);

export default DSImagery;
