import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import navLogo from "@/assets/imagery/nav-logo.png";

const sections = [
  { id: "colors", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "inputs", label: "Inputs" },
  { id: "badges", label: "Badges & Labels" },
  { id: "cards", label: "Cards" },
  { id: "spacing", label: "Spacing" },
  { id: "style-rules", label: "Style Rules" },
  { id: "voice", label: "Voice & Tone" },
  { id: "content", label: "Content Strategy" },
  { id: "imagery", label: "Imagery" },
  { id: "motion", label: "Animation" },
  { id: "dots", label: "Dots" },
  { id: "components", label: "Components" },
];

const DSNav = () => {
  const [overflow, setOverflow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => {
      if (!linksRef.current || !navRef.current) return;
      // Temporarily show links to measure
      const links = linksRef.current;
      links.style.display = "flex";
      links.style.visibility = "hidden";
      links.style.position = "absolute";
      const overflows = links.scrollWidth > navRef.current.clientWidth - 200;
      links.style.display = "";
      links.style.visibility = "";
      links.style.position = "";
      setOverflow(overflows);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-carbon border-b border-tungsten">
      <div ref={navRef} className="max-w-screen-xl mx-auto px-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <img src={navLogo} alt="C3 AI" className="h-5 w-auto" />
          <span className="w-px h-4 bg-tungsten" />
          <span className="text-graphene text-xs tracking-widest font-bold">Design System</span>
        </div>

        {/* Inline links – hidden when overflowing */}
        {!overflow && (
          <div ref={linksRef} className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-graphene hover:text-white transition-colors text-xs tracking-widest font-bold whitespace-nowrap"
              >
                {s.label}
              </a>
            ))}
          </div>
        )}

        {/* Hamburger – shown when overflowing or on small screens */}
        {(overflow || true) && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`${overflow ? "flex" : "flex md:hidden"} items-center justify-center text-graphene hover:text-white transition-colors`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="bg-carbon border-t border-tungsten px-8 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-graphene hover:text-white transition-colors text-xs tracking-widest font-bold py-2"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default DSNav;
