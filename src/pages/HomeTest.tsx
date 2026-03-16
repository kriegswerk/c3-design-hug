import React, { useState } from "react";

// Assets
import heroVideo from "@/assets/imagery/hero-video.mp4";
import navLogo from "@/assets/imagery/nav-logo.svg";
import logoShell from "@/assets/imagery/logo-shell.png";
import footerLogo from "@/assets/imagery/footer-logo.png";
import socialGlassdoor from "@/assets/imagery/social-glassdoor.png";
import socialLinkedin from "@/assets/imagery/social-linkedin.png";
import socialX from "@/assets/imagery/social-x.png";

// Use existing project images for sections
import imgShipConstruction from "@/assets/imagery/preferred-shipconstruction.jpg";
import imgDatacenter from "@/assets/imagery/preferred-datacenter.jpg";
import imgRobotWelding from "@/assets/imagery/preferred-robotwelding.jpg";
import imgCampus from "@/assets/imagery/preferred-campus.jpg";
import imgResearch from "@/assets/imagery/preferred-research.jpg";
import imgAviation from "@/assets/imagery/preferred-aviation.jpg";
import imgBomber from "@/assets/imagery/preferred-bomber.jpg";
import imgCargo from "@/assets/imagery/preferred-cargo.jpg";
import imgTurbine from "@/assets/imagery/preferred-turbine.jpg";
import customersShellVideo from "@/assets/imagery/customers-shell.mp4";

const fontStack = "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif";

/* ─── Accordion Item ─── */
const AccordionItem: React.FC<{
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid #e0e0e0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: fontStack,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 36px)",
            letterSpacing: "-1.5px",
            color: "#1A1A1A",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 28,
            fontWeight: 300,
            color: "#1A1A1A",
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {open && children && (
        <div style={{ paddingBottom: 32 }}>{children}</div>
      )}
    </div>
  );
};

/* ─── Customer Accordion ─── */
const CustomerAccordion: React.FC<{
  name: string;
  logo?: string;
  headline?: string;
  body?: string;
  images?: string[];
  defaultOpen?: boolean;
}> = ({ name, logo, headline, body, images, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid #e0e0e0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: fontStack,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "clamp(22px, 2.5vw, 32px)",
            letterSpacing: "-1px",
            color: "#1A1A1A",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: 24,
            fontWeight: 300,
            color: "#1A1A1A",
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: 40 }}>
          {headline && (
            <h4
              style={{
                fontFamily: fontStack,
                fontWeight: 700,
                fontSize: "clamp(20px, 2vw, 28px)",
                letterSpacing: "-1px",
                color: "#1A1A1A",
                marginBottom: 16,
                maxWidth: 500,
              }}
            >
              {headline}
            </h4>
          )}
          {body && (
            <p
              style={{
                fontFamily: fontStack,
                fontSize: 16,
                lineHeight: 1.5,
                color: "#666",
                maxWidth: 500,
                marginBottom: 24,
              }}
            >
              {body}
            </p>
          )}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            {logo && (
              <div
                style={{
                  background: "#EE3E24",
                  padding: "12px 16px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <img src={logo} alt={name} style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)" }} />
              </div>
            )}
            {images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                style={{
                  width: 180,
                  height: 120,
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ================================================================ */
/*  HOME TEST PAGE                                                    */
/* ================================================================ */

const HomeTest: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["AI Applications", "Generative AI", "C3 AI Platform", "Professional Services"];

  return (
    <div style={{ fontFamily: fontStack, background: "#fff", color: "#1A1A1A" }}>
      {/* ═══ NAV ═══ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#1A1A1A",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <a href="#">
          <img src={navLogo} alt="C3.ai" style={{ height: 20 }} />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Products", "Platform", "Customers", "Events", "Resources", "About Us"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "-0.5px",
                textDecoration: "none",
                fontFamily: fontStack,
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "-0.5px",
              border: "1px solid #fff",
              padding: "10px 24px",
              textDecoration: "none",
              fontFamily: fontStack,
            }}
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          overflow: "hidden",
          marginTop: 64,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "80px 60px",
            maxWidth: 1440,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
            <h1
              style={{
                fontFamily: fontStack,
                fontWeight: 700,
                fontSize: "clamp(48px, 7vw, 100px)",
                lineHeight: 0.95,
                letterSpacing: "-5px",
                color: "#fff",
                maxWidth: 600,
              }}
            >
              Run Your Business on AI
            </h1>
            <div style={{ maxWidth: 420, color: "#fff" }}>
              <p style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 24, opacity: 0.85, fontFamily: fontStack }}>
                C3 AI delivers enterprise AI software enabling customers to accelerate digital transformation, increase profitability, improve sustainability, and enhance reliability.
              </p>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  color: "#1A1A1A",
                  padding: "16px 32px",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                  textDecoration: "none",
                  fontFamily: fontStack,
                }}
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AI FOR THE WORLD'S MOST COMPLEX SYSTEMS ═══ */}
      <section style={{ background: "#F0F0F0" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "100px 60px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: fontStack,
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "-3px",
                maxWidth: 500,
              }}
            >
              AI for the World's Most Complex Systems
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.5,
                color: "#666",
                maxWidth: 400,
                fontFamily: fontStack,
              }}
            >
              From military and intelligence operations to manufacturing, AI is transforming the way businesses build a new AI-first foundation.
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #ccc", marginBottom: 40 }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "16px 24px",
                  fontFamily: fontStack,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                  color: activeTab === i ? "#1A1A1A" : "#999",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === i ? "2px solid #1A1A1A" : "2px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content — Case study card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
              background: "#fff",
            }}
          >
            <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#999", marginBottom: 16 }}>
                  FEATURED
                </p>
                <h3
                  style={{
                    fontFamily: fontStack,
                    fontWeight: 700,
                    fontSize: "clamp(28px, 3vw, 40px)",
                    lineHeight: 1,
                    letterSpacing: "-2px",
                    marginBottom: 24,
                  }}
                >
                  How HII Accelerates Naval Shipbuilding With C3 AI TRIDENT
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, color: "#999" }}>▌▌</span>
                <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.3px", color: "#1A1A1A" }}>HII</span>
              </div>
            </div>
            <div>
              <img
                src={imgShipConstruction}
                alt="Naval shipbuilding"
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 320 }}
              />
            </div>
          </div>

          {/* Description below card */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 40 }}>
            <div />
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#666", fontFamily: fontStack }}>
              Built on C3 AI's TRIDENT, the unified platform is revolutionizing many long, complex, and traditionally manual business processes available at scale, delivering rapid time to value by enabling predictions about key manufacturing and supply chain business processes.
            </p>
          </div>

          {/* Pagination dots */}
          <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
            <span style={{ width: 24, height: 3, background: "#1A1A1A" }} />
            <span style={{ width: 24, height: 3, background: "#ccc" }} />
            <span style={{ width: 24, height: 3, background: "#ccc" }} />
          </div>
        </div>
      </section>

      {/* ═══ C3 AI SOFTWARE ═══ */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "100px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <h2
              style={{
                fontFamily: fontStack,
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "-3px",
              }}
            >
              C3 AI Software
            </h2>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#999", marginBottom: 16, fontFamily: fontStack }}>
                AI Applications and a purpose-built AI platform for every use.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#666", fontFamily: fontStack }}>
                With C3 AI's full software portfolio of enterprise AI applications, solutions, and development tools, organizations can unlock the full power of enterprise AI across every function, in every industry, at any scale while accelerating time to value with an entirely new class of enterprise software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM ═══ */}
      <section style={{ background: "#F0F0F0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "100px 60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: fontStack,
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "-3px",
              }}
            >
              Platform
            </h2>
            <div style={{ width: 40, height: 2, background: "#1A1A1A", marginTop: 16 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            {/* Left: Feature buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["AI Applications", "Data & Analytics Execution", "Prescriptive Algorithms", "Runtime Middleware", "C3 Intelligence™"].map(
                (item) => (
                  <button
                    key={item}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "16px 20px",
                      fontFamily: fontStack,
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: "-0.3px",
                      color: "#1A1A1A",
                      background: "#E5E5E5",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Right: Description */}
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#666", fontFamily: fontStack, marginBottom: 24 }}>
                Build, deploy, and scale enterprise AI applications faster. The C3 AI Platform provides comprehensive AI application development tools with fully integrated data infrastructure.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#666", fontFamily: fontStack }}>
                The platform provides a standardized, model-driven framework for enterprise-scale AI solutions, enabling rapid deployment and integration of advanced analytics across industries.
              </p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: 24,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                  color: "#1A1A1A",
                  textDecoration: "underline",
                  fontFamily: fontStack,
                }}
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ACCORDION ═══ */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "100px 60px" }}>
          <AccordionItem title="Asset Performance" />
          <AccordionItem title="Supply Chain" />
          <AccordionItem title="Decision Intelligence" />
          <AccordionItem title="Agentic Process Automation" />
          <AccordionItem title="Time Series Foundation Model" />
        </div>
      </section>

      {/* ═══ TRUSTED BY GLOBAL ENTERPRISES ═══ */}
      <section style={{ background: "#F0F0F0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "100px 60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: fontStack,
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "-3px",
                maxWidth: 500,
              }}
            >
              Trusted by Global Enterprises
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: "#666", maxWidth: 360, fontFamily: fontStack }}>
              Proven at scale across diverse industries, delivering game-changing outcomes for the world's largest organizations.
            </p>
          </div>

          {/* Customer accordions */}
          <CustomerAccordion
            name="Shell Scales Energy Operations with AI"
            logo={logoShell}
            headline=""
            body="Learn how Shell applies predictive analytics and AI-driven insights to reduce costs, improve uptime, and transform operations across its global energy operations."
            images={[imgTurbine, imgCampus, imgResearch]}
            defaultOpen={true}
          />
          <CustomerAccordion name="USAF" />
          <CustomerAccordion name="Holcim" />
          <CustomerAccordion name="Nucor" />
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ background: "#F0F0F0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 60px 100px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <h2
              style={{
                fontFamily: fontStack,
                fontWeight: 700,
                fontSize: "clamp(40px, 6vw, 80px)",
                lineHeight: 0.95,
                letterSpacing: "-4px",
                maxWidth: 600,
              }}
            >
              Start running your business on AI.
            </h2>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid #1A1A1A",
                padding: "16px 32px",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#1A1A1A",
                textDecoration: "none",
                fontFamily: fontStack,
                whiteSpace: "nowrap",
              }}
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ LOGO BAR ═══ */}
      <section style={{ background: "#F0F0F0", borderTop: "1px solid #ddd" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "60px 60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 80,
          }}
        >
          <img src={logoShell} alt="Shell" style={{ height: 56, width: "auto", opacity: 0.9 }} />
          <img src={imgAviation} alt="USAF" style={{ height: 56, width: "auto", opacity: 0.9, objectFit: "contain" }} />
          <span
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: 36,
              letterSpacing: "2px",
              color: "#1A1A1A",
            }}
          >
            NUCOR
          </span>
        </div>
      </section>

      {/* ═══ MEGA FOOTER ═══ */}
      <footer style={{ background: "#2A2A2A", color: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 80 }}>
            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <img src={footerLogo} alt="C3 AI" style={{ width: 240, marginBottom: 40 }} />
              </div>
            </div>

            {/* Right: Link columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
              {[
                {
                  title: "Products",
                  links: ["Apps & Applications", "Agentic AI Developer Studio", "C3 Generative AI Production", "AI Platform", "Supply Chain", "C3 AI Reliability", "C3 AI ESG"],
                },
                {
                  title: "Industries",
                  links: ["Oil and Gas", "Manufacturing", "Healthcare & Life Sciences", "Financial Services", "Government", "Defense & Intelligence"],
                },
                {
                  title: "Partners & Insights",
                  links: ["Agentic Development Plans", "Strategy & Operations", "C3 Magazine", "Publications", "Blog & Insights", "C3 AI Research"],
                },
                {
                  title: "Resources",
                  links: ["Documentation", "API Reference", "Glossary", "Whitepapers", "Webinars"],
                },
              ].map((group) => (
                <div key={group.title}>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      color: "#F0F0F0",
                      marginBottom: 16,
                      fontFamily: fontStack,
                    }}
                  >
                    {group.title}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {group.links.map((link) => (
                      <li key={link} style={{ marginBottom: 8 }}>
                        <a
                          href="#"
                          style={{
                            color: "#999",
                            fontSize: 13,
                            textDecoration: "none",
                            fontFamily: fontStack,
                          }}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer bottom */}
          <div style={{ borderTop: "1px solid #444", marginTop: 60, paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { title: "Company", links: ["Inside C3 AI", "Leadership", "Investors", "Press", "Careers", "Privacy Policy", "Terms of Use", "Site Map", "508/ADA"] },
              ].map((group) =>
                group.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      color: "#777",
                      fontSize: 11,
                      textDecoration: "none",
                      fontFamily: fontStack,
                      marginRight: 4,
                    }}
                  >
                    {link}
                  </a>
                ))
              )}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 8 }}>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #555", padding: "8px 16px", color: "#999", fontSize: 12, fontWeight: 700, textDecoration: "none", fontFamily: fontStack }}>
                  YouTube
                </a>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #555", padding: "8px 16px", color: "#999", fontSize: 12, fontWeight: 700, textDecoration: "none", fontFamily: fontStack }}>
                  X
                </a>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #555", padding: "8px 16px", color: "#999", fontSize: 12, fontWeight: 700, textDecoration: "none", fontFamily: fontStack }}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <p style={{ color: "#555", fontSize: 11, marginTop: 16, fontFamily: fontStack }}>
            © {new Date().getFullYear()} C3.ai, Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeTest;
