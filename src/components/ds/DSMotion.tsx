import DSSection from "./DSSection";
import CascadeReveal from "@/components/c3/CascadeReveal";
import ParallaxDrift from "@/components/c3/ParallaxDrift";
import preferredTurbine from "@/assets/imagery/preferred-turbine.jpg";
import focusRobot from "@/assets/imagery/focus-robot.jpg";
import systemsWindmills from "@/assets/imagery/systems-windmills.jpg";
import preferredShipyard from "@/assets/imagery/preferred-shipyard.jpg";
import focusSatellite from "@/assets/imagery/focus-satellite.jpg";
import systemsSolar from "@/assets/imagery/systems-solar.jpg";

/**
 * DSMotion — Section 14: Motion on the Web
 *
 * Showcases the "Cascade Reveal" and "Parallax Drift" animations.
 */

const DSMotion = () => (
  <DSSection id="motion" label="14 — Motion" title="Motion on the Web">
    <p className="type-body2 text-graphene max-w-3xl mb-6">
      Motion is applied intentionally — not natively — to components when a design calls for it.
      Two primary animation patterns are available:
    </p>
    <p className="type-body2 text-graphene max-w-3xl mb-6">
      <strong className="text-foreground">Cascade Reveal</strong> — elements fade and translate
      into position as the user scrolls them into the viewport. Text slides up with fade; images
      scale up with fade. Staggered children animate sequentially with 120 ms intervals.
    </p>
    <p className="type-body2 text-graphene max-w-3xl mb-6">
      <strong className="text-foreground">Parallax Drift</strong> — full-viewport sections where
      the background image moves at a slower rate than the foreground content, creating a sense
      of depth and immersion as the user scrolls through the page.
    </p>
    <p className="type-caption text-tungsten max-w-3xl mb-16">
      <strong className="text-foreground">Prompt keywords:</strong>{" "}
      <code className="bg-silica text-carbon px-2 py-1 text-sm">cascade-reveal</code>{" "}
      <code className="bg-silica text-carbon px-2 py-1 text-sm">parallax-drift</code> — 
      use these in design prompts to apply the animations to any component.
    </p>

    {/* ================================================================
        CASCADE REVEAL EXAMPLES
        ================================================================ */}
    <div className="mb-6">
      <h3 className="type-h5 text-foreground mb-2">Cascade Reveal — Hero Fullscreen</h3>
      <p className="type-body2 text-graphene">
        Headline, body copy, and CTA buttons stagger into view as the hero scrolls into the viewport.
      </p>
    </div>
    <div className="border border-border mb-24">
      <section className="relative min-h-[90vh] flex items-end bg-carbon overflow-hidden">
        <img
          src={preferredTurbine}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/30 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-8 pb-16 md:pb-24 w-full">
          <CascadeReveal variant="text" resettable>
            <h1 className="cascade-child type-h1 text-white max-w-3xl mb-6">
              Enterprise AI Platforms Optimized
            </h1>
            <p className="cascade-child type-body1 text-graphene max-w-xl mb-10">
              Enterprise AI platforms operationalize end-to-end data ingestion,
              feature engineering, and model lifecycle management.
            </p>
            <div className="cascade-child flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="bg-white text-carbon type-cta px-8 py-4 font-bold hover:bg-silica transition-colors"
              >
                Primary CTA
              </a>
              <a
                href="#"
                className="border-2 border-white text-white type-cta px-8 py-4 font-bold hover:bg-white hover:text-carbon transition-colors"
              >
                Secondary CTA
              </a>
            </div>
          </CascadeReveal>
        </div>
      </section>
    </div>

    <div className="mb-6">
      <h3 className="type-h5 text-foreground mb-2">Cascade Reveal — Feature Split Text Left</h3>
      <p className="type-body2 text-graphene">
        Text content cascades in from the left column while the image scales into view independently.
      </p>
    </div>
    <div className="border border-border mb-24">
      <section className="bg-carbon">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center py-16 md:py-24 px-8 md:px-16">
              <CascadeReveal variant="text" resettable>
                <h2 className="cascade-child type-h3 text-white mb-6">
                  Next Gen Images
                </h2>
                <p className="cascade-child type-body2 text-graphene max-w-lg mb-10">
                  Elevating your website with next-gen images involves using modern
                  and optimized image formats, implementing responsive design, and
                  enhancing the overall visual experience.
                </p>
                <div className="cascade-child flex flex-wrap items-center gap-4">
                  <a
                    href="#"
                    className="bg-white text-carbon type-cta px-8 py-4 font-bold hover:bg-silica transition-colors"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white text-white type-cta px-8 py-4 font-bold hover:bg-white hover:text-carbon transition-colors"
                  >
                    Book a Demo
                  </a>
                </div>
              </CascadeReveal>
            </div>
            <CascadeReveal variant="image" delay={200} resettable>
              <div className="relative min-h-[400px] md:min-h-[600px]">
                <img
                  src={focusRobot}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </CascadeReveal>
          </div>
        </div>
      </section>
    </div>

    {/* ================================================================
        PARALLAX DRIFT EXAMPLES
        ================================================================ */}
    <div className="mb-6">
      <h3 className="type-h5 text-foreground mb-2">Parallax Drift — Multi-Section Scroll</h3>
      <p className="type-body2 text-graphene">
        Full-viewport sections with background images that translate at a reduced
        rate relative to the scroll position, producing a layered depth effect.
        Scroll through the four sections below to see the parallax in action.
      </p>
    </div>
    <div className="relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen mb-24">
      {/* Section 1 */}
      <ParallaxDrift
        imageSrc={systemsWindmills}
        imageAlt="Wind turbine array at scale"
        align="bottom-left"
      >
        <h1 className="type-h1 text-white max-w-3xl mb-6">
          Sustainable Infrastructure at Scale
        </h1>
      </ParallaxDrift>

      {/* Section 2 */}
      <ParallaxDrift
        imageSrc={preferredShipyard}
        imageAlt="Industrial shipyard operations"
        align="center"
      >
        <h1 className="type-h1 text-white max-w-3xl mb-6">
          Operational Intelligence Deployed
        </h1>
      </ParallaxDrift>

      {/* Section 3 */}
      <ParallaxDrift
        imageSrc={focusSatellite}
        imageAlt="Satellite communications array"
        align="bottom-left"
      >
        <h1 className="type-h1 text-white max-w-3xl mb-6">
          Precision Meets Performance
        </h1>
      </ParallaxDrift>

      {/* Section 4 */}
      <ParallaxDrift
        imageSrc={systemsSolar}
        imageAlt="Solar energy installation"
        align="center"
      >
        <h1 className="type-h1 text-white max-w-3xl mb-6">
          Accelerating the Energy Transition
        </h1>
      </ParallaxDrift>
    </div>

    {/* ---- Usage Guide ---- */}
    <div className="mb-6">
      <h3 className="type-h5 text-foreground mb-2">Usage</h3>
    </div>
    <div className="bg-carbon p-8 mb-24">
      <pre className="text-silica text-sm overflow-x-auto leading-relaxed"><code>{`// === Cascade Reveal ===
import CascadeReveal from "@/components/c3/CascadeReveal";

// Text variant — slides up + fades
<CascadeReveal variant="text">
  <h1 className="cascade-child">Headline</h1>
  <p className="cascade-child">Body copy</p>
  <div className="cascade-child">CTAs</div>
</CascadeReveal>

// Image variant — scales up + fades
<CascadeReveal variant="image" delay={200}>
  <img src="..." />
</CascadeReveal>

// Resettable — replays on re-scroll
<CascadeReveal variant="text" resettable>…</CascadeReveal>

// === Parallax Drift ===
import ParallaxDrift from "@/components/c3/ParallaxDrift";

// Full-viewport parallax section
<ParallaxDrift
  imageSrc={heroImage}
  imageAlt="Description"
  intensity={0.3}       // 0–1, default 0.3
  align="bottom-left"   // "center" | "bottom-left"
  overlay={true}        // gradient overlay, default true
>
  <h1>Headline</h1>
</ParallaxDrift>`}</code></pre>
    </div>
  </DSSection>
);

export default DSMotion;
