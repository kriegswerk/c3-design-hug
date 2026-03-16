import DSNav from "@/components/ds/DSNav";
import DSColors from "@/components/ds/DSColors";
import DSTypography from "@/components/ds/DSTypography";
import DSButtons from "@/components/ds/DSButtons";
import DSInputs from "@/components/ds/DSInputs";
import DSBadges from "@/components/ds/DSBadges";
import DSCards from "@/components/ds/DSCards";
import DSSpacing from "@/components/ds/DSSpacing";
import DSStyleRules from "@/components/ds/DSStyleRules";
import DSVoiceTone from "@/components/ds/DSVoiceTone";
import DSContentStrategy from "@/components/ds/DSContentStrategy";
import DSImagery from "@/components/ds/DSImagery";
import DSDots from "@/components/ds/DSDots";
import DSComponents from "@/components/ds/DSComponents";
import DSMotion from "@/components/ds/DSMotion";
import DSIcons from "@/components/ds/DSIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <DSNav />

      {/* Hero — Light-first direction */}
      <header className="bg-silica relative overflow-hidden">
        {/* Dot grid texture overlay */}
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--carbon)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 py-24 md:py-32">
          <p className="c3-label mb-6">C3 AI · Lovable Design System</p>
          <h1 className="type-h1 text-carbon max-w-4xl mb-8">
            Distillation &amp; Clarity.
          </h1>
          <p className="type-body1 text-graphene max-w-2xl mb-12">
            Inspired by the elegant simplicity of Swiss design, the C3 AI brand effortlessly creates
            order out of chaos — built on the grid, using sans serif typography, bold shapes, and a
            minimal color palette. The evolved direction leads with light.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#colors"
              className="bg-carbon text-white type-cta px-8 py-4 font-bold hover:bg-tungsten transition-colors cursor-pointer"
            >
              Explore System
            </a>
            <a
              href="#typography"
              className="border-2 border-carbon text-carbon type-cta px-8 py-4 font-bold hover:bg-carbon hover:text-white transition-colors cursor-pointer"
            >
              Typography
            </a>
          </div>
        </div>

        {/* Brand principles strip */}
        <div className="relative z-10 border-t border-graphene/20">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-graphene/20">
              {[
                { title: "Light-First", desc: "White & Silica backgrounds" },
                { title: "Minimal", desc: "No black — Carbon is the limit" },
                { title: "Direct", desc: "Helvetica Neue · Bold weight" },
                { title: "Swiss", desc: "Order out of chaos" },
              ].map((p) => (
                <div key={p.title} className="px-8 py-8">
                  <p className="type-h6 text-carbon mb-2">{p.title}</p>
                  <p className="type-caption text-graphene">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Design System Sections */}
      <main>
        <DSColors />
        <DSTypography />
        <DSButtons />
        <DSInputs />
        <DSBadges />
        <DSCards />
        <DSSpacing />
        <DSStyleRules />
        <DSVoiceTone />
        <DSContentStrategy />
        <DSImagery />
        <DSDots />
        <DSComponents />
        <DSMotion />
        <DSIcons />
      </main>

      {/* Footer — stays dark per brand nav/footer convention */}
      <footer className="bg-carbon border-t border-tungsten">
        <div className="max-w-screen-xl mx-auto px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-white uppercase tracking-widest text-sm">C3 AI</p>
            <p className="type-caption text-graphene mt-1">Design System · Lovable</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {["Color", "Typography", "Buttons", "Inputs", "Badges", "Cards", "Spacing", "Style Rules", "Voice", "Content", "Components"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="type-caption text-graphene hover:text-white transition-colors font-bold tracking-widest cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="type-caption text-tungsten">
            © {new Date().getFullYear()} C3 AI. This is Enterprise AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
