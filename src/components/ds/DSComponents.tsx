import { useState } from "react";
import DSSection from "./DSSection";
import HeroFullscreen from "@/components/c3/HeroFullscreen";
import HeroHomepage from "@/components/c3/HeroHomepage";
import FeaturesGrid from "@/components/c3/FeaturesGrid";
import FeatureSplit from "@/components/c3/FeatureSplit";
import ContentCardsTiled from "@/components/c3/ContentCardsTiled";
import ContentCards5050 from "@/components/c3/ContentCards5050";
import AccordionSection from "@/components/c3/AccordionSection";
import RequestDemoFooter from "@/components/c3/RequestDemoFooter";
import Gallery from "@/components/c3/Gallery";
import ContactForm from "@/components/c3/ContactForm";
import MegaFooter from "@/components/c3/MegaFooter";
import WebNav from "@/components/c3/WebNav";

import focusFactory from "@/assets/imagery/focus-factory.jpg";
import focusRobot from "@/assets/imagery/focus-robot.jpg";
import focusSatellite from "@/assets/imagery/focus-satellite.jpg";
import focusWarship from "@/assets/imagery/focus-warship.jpg";
import focusOilrig from "@/assets/imagery/focus-oilrig.jpg";
import focusLab from "@/assets/imagery/focus-lab.jpg";
import preferredTurbine from "@/assets/imagery/preferred-turbine.jpg";
import preferredCampus from "@/assets/imagery/preferred-campus.jpg";
import preferredDatacenter from "@/assets/imagery/preferred-datacenter.jpg";
import preferredRobotwelding from "@/assets/imagery/preferred-robotwelding.jpg";
import preferredShipyard from "@/assets/imagery/preferred-shipyard.jpg";
import preferredResearch from "@/assets/imagery/preferred-research.jpg";
import preferredCleanroom from "@/assets/imagery/preferred-cleanroom.jpg";
import systemsSolar from "@/assets/imagery/systems-solar.jpg";
import systemsWindmills from "@/assets/imagery/systems-windmills.jpg";
import systemsBuilding from "@/assets/imagery/systems-building.jpg";
import systemsContainers from "@/assets/imagery/systems-containers.jpg";
import systemsVessel from "@/assets/imagery/systems-vessel.jpg";

const sampleFeatures = [
  { title: "Easy Publishing", description: "Streamline your workflow using platforms that offer simplified publishing processes." },
  { title: "Grid Layouts", description: "Creating stunning and dynamic designs without coding requires a combination of creativity and design tools." },
  { title: "SEO & Analytics", description: "Optimizing performance and tracking valuable insights is crucial for making informed decisions." },
];

const sampleFeatures6 = [
  ...sampleFeatures,
  { title: "Collaborations", description: "Collaborating effectively with team members and clients is essential for shared goals." },
  { title: "Next Gen Images", description: "Elevating your website with next-gen images involves modern and optimized image formats." },
  { title: "Typography", description: "Customizable typography styles can significantly enhance the visual appeal and readability." },
];

const galleryImages = [
  { src: focusFactory, alt: "Factory" },
  { src: systemsSolar, alt: "Solar" },
  { src: systemsWindmills, alt: "Windmills" },
  { src: systemsBuilding, alt: "Building" },
  { src: focusWarship, alt: "Warship" },
];

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-carbon text-white type-caption px-4 py-2 font-bold uppercase tracking-widest hover:bg-tungsten transition-colors"
    >
      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
        {copied ? "check" : "content_copy"}
      </span>
      {copied ? "Copied!" : "Copy JSX"}
    </button>
  );
};

const ComponentPreview = ({
  title,
  description,
  code,
  children,
}: {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="mb-24">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="type-h5 text-foreground mb-2">{title}</h3>
          <p className="type-body2 text-graphene">{description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 border border-border text-foreground type-caption px-4 py-2 font-bold uppercase tracking-widest hover:bg-silica transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
              {showCode ? "visibility_off" : "code"}
            </span>
            {showCode ? "Hide" : "View Code"}
          </button>
          <CopyButton code={code} />
        </div>
      </div>
      {showCode && (
        <div className="mb-4 bg-carbon p-6 overflow-x-auto">
          <pre className="type-caption text-silica font-mono whitespace-pre-wrap break-all">{code}</pre>
        </div>
      )}
      <div className="border border-border">{children}</div>
    </div>
  );
};

const DSComponents = () => (
  <DSSection id="components" label="13 — Components" title="Core Web Components">
    <p className="type-body2 text-graphene max-w-3xl mb-16">
      A foundational library of page-level components built on the C3 AI design system.
      Each component follows the Swiss-grid system, uses the brand color palette, and
      adheres to the 8pt spacing grid. These blocks compose together to build full web pages.
    </p>

    <ComponentPreview
      title="Web nav"
      description="Primary site navigation with logo, inline links, and outlined CTA button."
      code={`<WebNav />`}
    >
      <WebNav />
    </ComponentPreview>

    <ComponentPreview
      title="Hero fullscreen — light"
      description="Evolved light-first hero with dot grid texture, dark text on silica. Default variant."
      code={`<HeroFullscreen
  headline="Enterprise AI Platforms Optimized"
  description="Enterprise AI platforms operationalize end-to-end data ingestion, feature engineering, and model lifecycle management."
  primaryCta={{ label: "Primary CTA" }}
  secondaryCta={{ label: "Secondary CTA" }}
/>`}
    >
      <HeroFullscreen
        headline="Enterprise AI Platforms Optimized"
        description="Enterprise AI platforms operationalize end-to-end data ingestion, feature engineering, and model lifecycle management."
        primaryCta={{ label: "Primary CTA" }}
        secondaryCta={{ label: "Secondary CTA" }}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Hero fullscreen — dark (legacy)"
      description="Legacy dark variant with background image, white text on carbon."
      code={`<HeroFullscreen
  headline="Enterprise AI Platforms Optimized"
  description="Enterprise AI platforms operationalize end-to-end data ingestion, feature engineering, and model lifecycle management."
  backgroundImage="/path/to/image.jpg"
  variant="dark"
  primaryCta={{ label: "Primary CTA" }}
  secondaryCta={{ label: "Secondary CTA" }}
/>`}
    >
      <HeroFullscreen
        headline="Enterprise AI Platforms Optimized"
        description="Enterprise AI platforms operationalize end-to-end data ingestion, feature engineering, and model lifecycle management."
        backgroundImage={preferredTurbine}
        variant="dark"
        primaryCta={{ label: "Primary CTA" }}
        secondaryCta={{ label: "Secondary CTA" }}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Hero homepage — light"
      description="Evolved light-first hero with dot grid texture, dark text on silica background."
      code={`<HeroHomepage
  headlineBold="Decisions Win Markets"
  headlineLight={"Powering Every\\nCritical Decision"}
  variant="light"
  playButton={{ label: "Play" }}
  tagline="Enterprise AI | Invented Here"
/>`}
    >
      <HeroHomepage
        headlineBold="Decisions Win Markets"
        headlineLight={"Powering Every\nCritical Decision"}
        variant="light"
        playButton={{ label: "Play" }}
        tagline="Enterprise AI | Invented Here"
      />
    </ComponentPreview>

    <ComponentPreview
      title="Hero homepage — dark (legacy)"
      description="Legacy dark variant with background image, white text on carbon."
      code={`<HeroHomepage
  headlineBold="Decisions Win Markets"
  headlineLight={"Powering Every\\nCritical Decision"}
  backgroundImage="/path/to/image.jpg"
  variant="dark"
  playButton={{ label: "Play" }}
  tagline="Enterprise AI | Invented Here"
/>`}
    >
      <HeroHomepage
        headlineBold="Decisions Win Markets"
        headlineLight={"Powering Every\nCritical Decision"}
        backgroundImage={systemsBuilding}
        variant="dark"
        playButton={{ label: "Play" }}
        tagline="Enterprise AI | Invented Here"
      />
    </ComponentPreview>

    <ComponentPreview
      title="Content cards — tiled"
      description="Asymmetric bento-grid layout: large hero card spanning rows with smaller cards alongside."
      code={`<ContentCardsTiled
  headline="Run Every Part of the Business"
  topCards={[
    { label: "C3 AI Asset Performance Suite", image: "/path/to/image.jpg" },
    { label: "C3 AI Reliability", image: "/path/to/image.jpg" },
    { label: "C3 AI Process Optimization", image: "/path/to/image.jpg" },
  ]}
  bottomCards={[
    { label: "C3 AI Supply Chain Suite", image: "/path/to/image.jpg" },
    { label: "C3 AI Demand Planning", image: "/path/to/image.jpg" },
    { label: "C3 AI Inventory Optimization", image: "/path/to/image.jpg" },
    { label: "C3 AI Production Scheduling", image: "/path/to/image.jpg" },
  ]}
/>`}
    >
      <ContentCardsTiled
        headline="Run Every Part of the Business"
        topCards={[
          { label: "C3 AI Asset Performance Suite", image: systemsContainers },
          { label: "C3 AI Reliability", image: preferredRobotwelding },
          { label: "C3 AI Process Optimization", image: focusOilrig },
        ]}
        bottomCards={[
          { label: "C3 AI Supply Chain Suite", image: preferredShipyard },
          { label: "C3 AI Demand Planning", image: focusFactory },
          { label: "C3 AI Inventory Optimization", image: preferredResearch },
          { label: "C3 AI Production Scheduling", image: preferredCleanroom },
        ]}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Content cards — 50/50"
      description="Headline with two equal side-by-side image cards, each with a label overlay."
      code={`<ContentCards5050
  headline="Ask Complex Questions. Get Operational Answers. Take Action."
  cards={[
    { label: "C3 AI Analytic Agents", image: "/path/to/image.jpg" },
    { label: "C3 AI Operational Agents", image: "/path/to/image.jpg" },
  ]}
/>`}
    >
      <ContentCards5050
        headline="Ask Complex Questions. Get Operational Answers. Take Action."
        cards={[
          { label: "C3 AI Analytic Agents", image: preferredDatacenter },
          { label: "C3 AI Operational Agents", image: focusLab },
        ]}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Accordion section"
      description="Light-themed expandable accordion on silica background with semantic text colors."
      code={`<AccordionSection
  headline="Built for Enterprise-Scale AI"
  items={[
    { title: "Unified Data Fabric", content: "Integrate and unify data across disparate enterprise sources..." },
    { title: "Model Lifecycle Management", content: "Manage the full lifecycle of AI models..." },
    { title: "Production-Grade Reliability", content: "Enterprise SLAs, fault tolerance, and horizontal scaling..." },
    { title: "Security & Compliance", content: "SOC 2 Type II certified with end-to-end encryption..." },
  ]}
/>`}
    >
      <AccordionSection
        headline="Built for Enterprise-Scale AI"
        items={[
          { title: "Unified Data Fabric", content: "Integrate and unify data across disparate enterprise sources — ERP, IoT, CRM, and legacy systems — into a single, consistent data model optimized for AI workloads." },
          { title: "Model Lifecycle Management", content: "Manage the full lifecycle of AI models from development through deployment, monitoring, and retraining with built-in governance and version control." },
          { title: "Production-Grade Reliability", content: "Enterprise SLAs, fault tolerance, and horizontal scaling ensure mission-critical AI applications perform consistently under demanding operational conditions." },
          { title: "Security & Compliance", content: "SOC 2 Type II certified with end-to-end encryption, role-based access control, and comprehensive audit logging to meet the most stringent regulatory requirements." },
        ]}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Request a demo footer"
      description="Silica-background section with bold headline and carbon CTA button — light-first evolution."
      code={`<RequestDemoFooter
  headline="See What Decision Advantage Looks Like"
  buttonLabel="Request a Demo"
  href="/demo"
/>`}
    >
      <RequestDemoFooter />
    </ComponentPreview>

    <ComponentPreview
      title="Features 3x with hero"
      description="Headline + description header, large hero image, and a 3-column feature grid below."
      code={`<FeaturesGrid
  headline="Powerful Tools, Limitless Possibilities"
  description="Unlock your creative potential with our robust toolkit."
  heroImage="/path/to/image.jpg"
  features={[
    { title: "Easy Publishing", description: "Streamline your workflow..." },
    { title: "Grid Layouts", description: "Creating stunning designs..." },
    { title: "SEO & Analytics", description: "Optimizing performance..." },
  ]}
  columns={3}
  primaryCta={{ label: "Learn More" }}
/>`}
    >
      <FeaturesGrid
        headline="Powerful Tools, Limitless Possibilities"
        description="Unlock your creative potential with our robust toolkit, providing you endless opportunities to bring your website visions to life."
        heroImage={focusSatellite}
        features={sampleFeatures}
        columns={3}
        primaryCta={{ label: "Learn More" }}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Features 4x grid"
      description="Headline + CTA on left, 2×2 grid of icon + title + description feature cards."
      code={`<FeaturesGrid
  headline="Powerful Tools, Limitless Possibilities"
  features={[
    { title: "Easy Publishing", description: "..." },
    { title: "Grid Layouts", description: "..." },
    { title: "SEO & Analytics", description: "..." },
    { title: "Collaborations", description: "..." },
  ]}
  columns={2}
  primaryCta={{ label: "Button Text" }}
/>`}
    >
      <FeaturesGrid
        headline="Powerful Tools, Limitless Possibilities"
        features={sampleFeatures.concat({
          title: "Collaborations",
          description: "Collaborating effectively with team members and clients is essential for shared goals.",
        })}
        columns={2}
        primaryCta={{ label: "Button Text" }}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Features 6x grid"
      description="Header with description, then a 3×2 grid of feature cards with icons."
      code={`<FeaturesGrid
  headline="Powerful Tools, Limitless Possibilities"
  description="Unlock your creative potential with our robust toolkit."
  features={[
    { title: "Easy Publishing", description: "..." },
    { title: "Grid Layouts", description: "..." },
    { title: "SEO & Analytics", description: "..." },
    { title: "Collaborations", description: "..." },
    { title: "Next Gen Images", description: "..." },
    { title: "Typography", description: "..." },
  ]}
  columns={3}
/>`}
    >
      <FeaturesGrid
        headline="Powerful Tools, Limitless Possibilities"
        description="Unlock your creative potential with our robust toolkit, providing you endless opportunities to bring your website visions to life."
        features={sampleFeatures6}
        columns={3}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Feature split — text left"
      description="Two-column layout: content on left, image on right. Supports primary and secondary CTAs."
      code={`<FeatureSplit
  headline="Next Gen Images"
  description="Elevating your website with next-gen images involves using modern and optimized image formats."
  image="/path/to/image.jpg"
  imagePosition="right"
  primaryCta={{ label: "Book a Demo" }}
  secondaryCta={{ label: "Learn More" }}
/>`}
    >
      <FeatureSplit
        headline="Next Gen Images"
        description="Elevating your website with next-gen images involves using modern and optimized image formats, implementing responsive design, and enhancing the overall visual experience."
        image={focusRobot}
        imagePosition="right"
        primaryCta={{ label: "Book a Demo" }}
        secondaryCta={{ label: "Book a Demo" }}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Feature split — text right"
      description="Two-column layout: image on left, content on right. Mirror of the left variant."
      code={`<FeatureSplit
  headline="Easy Publishing"
  description="Streamline your workflow using platforms that offer simplified publishing processes."
  image="/path/to/image.jpg"
  imagePosition="left"
  primaryCta={{ label: "Book a Demo" }}
  secondaryCta={{ label: "Learn More" }}
/>`}
    >
      <FeatureSplit
        headline="Easy Publishing"
        description="To achieve quick and seamless publishing with a single click, you'll want to streamline your workflow using platforms that offer simplified publishing processes."
        image={focusFactory}
        imagePosition="left"
        primaryCta={{ label: "Book a Demo" }}
        secondaryCta={{ label: "Book a Demo" }}
      />
    </ComponentPreview>

    <ComponentPreview
      title="Feature split — text left (no buttons)"
      description="Two-column layout: content on left, image on right. No call-to-action buttons."
      code={`<FeatureSplit
  headline="Next Gen Images"
  description="Elevating your website with next-gen images involves using modern and optimized image formats."
  image="/path/to/image.jpg"
  imagePosition="right"
/>`}
    >
      <FeatureSplit
        headline="Next Gen Images"
        description="Elevating your website with next-gen images involves using modern and optimized image formats, implementing responsive design, and enhancing the overall visual experience."
        image={focusRobot}
        imagePosition="right"
      />
    </ComponentPreview>

    <ComponentPreview
      title="Feature split — text right (no buttons)"
      description="Two-column layout: image on left, content on right. No call-to-action buttons."
      code={`<FeatureSplit
  headline="Easy Publishing"
  description="Streamline your workflow using platforms that offer simplified publishing processes."
  image="/path/to/image.jpg"
  imagePosition="left"
/>`}
    >
      <FeatureSplit
        headline="Easy Publishing"
        description="To achieve quick and seamless publishing with a single click, you'll want to streamline your workflow using platforms that offer simplified publishing processes."
        image={focusFactory}
        imagePosition="left"
      />
    </ComponentPreview>

    <ComponentPreview
      title="Gallery"
      description="Horizontally scrolling image carousel with prev/next arrows and dot indicators."
      code={`<Gallery
  title="Selected Work"
  images={[
    { src: "/path/to/image1.jpg", alt: "Image 1" },
    { src: "/path/to/image2.jpg", alt: "Image 2" },
    { src: "/path/to/image3.jpg", alt: "Image 3" },
  ]}
/>`}
    >
      <Gallery title="Selected Work" images={galleryImages} />
    </ComponentPreview>

    <ComponentPreview
      title="Contact form"
      description="Light-themed contact section on silica with white input fields and carbon submit button."
      code={`<ContactForm
  headline="Get in Touch with Our Team"
  description="Complete the form below to discuss your project."
/>`}
    >
      <ContactForm />
    </ComponentPreview>

    <ComponentPreview
      title="Mega footer"
      description="Full-width mega footer with branded headline, staircase motif, categorized link columns, and bottom legal bar."
      code={`<MegaFooter
  headline="This Is"
  headlineAccent="Enterprise AI."
/>`}
    >
      <MegaFooter />
    </ComponentPreview>
  </DSSection>
);

export default DSComponents;
