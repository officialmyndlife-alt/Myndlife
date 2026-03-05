import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Brain, Target, Compass, Crown } from "lucide-react";

// ==================== STYLES (injected once) ====================
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #09090c;
      --card: #0f0f14;
      --border: #1a1a22;
      --fg: #e8e7f0;
      --muted: #64636e;
      --primary: #9da8be;
      --primary-light: #bec7d8;
      --silver-start: #dde3ed;
      --silver-mid: #a8b4c8;
      --silver-end: #6b7a92;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--fg);
      font-family: 'Jost', sans-serif;
      font-weight: 300;
      -webkit-font-smoothing: antialiased;
    }

    .font-display { font-family: 'Cormorant Garamond', serif; }

    .text-gold {
      background: linear-gradient(135deg, var(--silver-start) 0%, var(--silver-mid) 50%, var(--silver-end) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .btn-gold-filled {
      background: linear-gradient(135deg, var(--silver-start) 0%, var(--silver-mid) 55%, var(--silver-end) 100%);
      color: #09090c;
      border: none;
      padding: 14px 36px;
      font-family: 'Jost', sans-serif;
      font-size: 11px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      transition: opacity 0.3s, transform 0.3s;
      text-decoration: none;
      display: inline-block;
      font-weight: 500;
    }
    .btn-gold-filled:hover { opacity: 0.85; transform: translateY(-1px); }

    .btn-gold-outline {
      background: transparent;
      color: var(--primary);
      border: 1px solid var(--primary);
      padding: 13px 36px;
      font-family: 'Jost', sans-serif;
      font-size: 11px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.3s, color 0.3s, transform 0.3s;
      text-decoration: none;
      display: inline-block;
      font-weight: 400;
    }
    .btn-gold-outline:hover {
      background: var(--primary);
      color: #09090c;
      transform: translateY(-1px);
    }

    .btn-gold-lg {
      padding: 16px 44px;
      font-size: 12px;
    }
    .btn-gold-xl {
      padding: 18px 56px;
      font-size: 13px;
    }

    .divider { width: 64px; height: 1px; background: var(--primary); margin: 0 auto; }

    /* scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
  `}</style>
);

// ==================== NAVBAR ====================
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Pilares", href: "#pillars" },
    { label: "Blog", href: "#blog" },
  ];

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.5s",
    background: scrolled ? "rgba(10,10,11,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={navStyle}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{ color: "var(--primary)", fontSize: 16 }}>◆</span>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--fg)" }}>
            MyndLife
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = "var(--primary)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="btn-gold-outline" style={{ padding: "10px 24px", fontSize: 10 }}>Únete</a>
        </div>

        <button
          style={{ background: "none", border: "none", color: "var(--fg)", cursor: "pointer", display: "none" }}
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(10,10,11,0.97)", borderBottom: "1px solid var(--border)" }}
          >
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#cta" className="btn-gold-outline" onClick={() => setMenuOpen(false)} style={{ textAlign: "center" }}>Únete</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
};

// ==================== HERO ====================
const HeroSection = () => (
  <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "var(--bg)" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(157,168,190,0.05) 0%, transparent 70%)" }} />

    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          width: 3,
          height: 3,
          borderRadius: "50%",
          background: "rgba(157,168,190,0.35)",
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      />
    ))}

    <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 32 }}
      >
        Bienvenido a MyndLife
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="font-display"
        style={{ fontSize: "clamp(64px, 12vw, 120px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: 32 }}
      >
        Elevate
        <br />
        <span className="text-gold" style={{ fontStyle: "italic" }}>Your Life</span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="divider"
        style={{ marginBottom: 32 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, color: "var(--muted)", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}
      >
        No todo el mundo llega hasta aquí.
        <br />
        MyndLife es para quien sabe que hay otra forma de vivir.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16 }}
      >
        <a href="#pillars" className="btn-gold-filled btn-gold-lg">Explorar</a>
        <a href="#cta" className="btn-gold-outline btn-gold-lg">¿Es MyndLife Para Ti?</a>
      </motion.div>
    </div>
  </section>
);

// ==================== STATS ====================
const stats = [
  { value: "100%", label: "Claridad Mental" },
  { value: "0", label: "Excusas Permitidas" },
  { value: "∞", label: "Potencial Real" },
  { value: "1", label: "Vida para Vivir" },
];

const StatsSection = () => (
  <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{ textAlign: "center" }}
          >
            <p className="font-display text-gold" style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, marginBottom: 12 }}>
              {stat.value}
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
    `}</style>
  </section>
);

// ==================== PHILOSOPHY ====================
const PhilosophySection = () => (
  <section style={{ padding: "128px 0" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <p className="font-display" style={{ fontSize: "clamp(22px, 3.5vw, 40px)", fontWeight: 300, lineHeight: 1.6, color: "var(--fg)" }}>
          MyndLife no es motivación.
          <br />
          <span className="text-gold" style={{ fontStyle: "italic" }}>Es estructura.</span>
          <br />
          <span style={{ color: "var(--muted)" }}>Es claridad.</span>
          <br />
          Es vivir con <span className="text-gold" style={{ fontStyle: "italic" }}>intención.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

// ==================== PILLARS ====================
const pillars = [
  {
    num: "01", icon: Brain, title: "Mentalidad Clara", subtitle: "Decide con precisión.",
    description: "Filtra el ruido, identifica lo que importa y toma decisiones que realmente te acerquen a tus metas.",
  },
  {
    num: "02", icon: Target, title: "Disciplina Diaria", subtitle: "La consistencia es libertad.",
    description: "Cada hábito cuenta. Construye tu día a día con disciplina y transforma pequeños esfuerzos en grandes resultados.",
  },
  {
    num: "03", icon: Compass, title: "Enfoque a Largo Plazo", subtitle: "Piensa en años, no en días.",
    description: "Crea sistemas sostenibles que funcionen semana tras semana y deja atrás soluciones rápidas y temporales.",
  },
  {
    num: "04", icon: Crown, title: "Estándares Altos", subtitle: "No aceptes menos de lo que mereces.",
    description: "Eleva tus expectativas en hábitos, decisiones y relaciones. Tus estándares definen tu destino.",
  },
];

const PillarsSection = () => (
  <section id="pillars" style={{ padding: "128px 0" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: 80 }}
      >
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 16 }}>
          Pilares Fundamentales
        </p>
        <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.1 }}>
          Los Cimientos del
          <br />
          <span className="text-gold" style={{ fontStyle: "italic" }}>Cambio Real</span>
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="pillars-grid">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 40,
              transition: "border-color 0.5s",
              cursor: "default",
            }}
            whileHover={{ borderColor: "rgba(157,168,190,0.35)" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
              <span className="font-display" style={{ fontSize: 56, fontWeight: 300, color: "var(--border)", lineHeight: 1 }}>
                {pillar.num}
              </span>
              <pillar.icon size={20} style={{ color: "var(--primary)", opacity: 0.7 }} />
            </div>
            <h3 className="font-display" style={{ fontSize: 24, fontWeight: 500, marginBottom: 8 }}>{pillar.title}</h3>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontStyle: "italic", color: "var(--primary)", opacity: 0.8, marginBottom: 16 }}>
              {pillar.subtitle}
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 768px) { .pillars-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);

// ==================== CTA ====================
const CTASection = () => (
  <section id="cta" style={{ padding: "128px 0" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="divider" style={{ marginBottom: 48 }} />
        <h2 className="font-display" style={{ fontSize: "clamp(28px, 4.5vw, 64px)", fontWeight: 300, marginBottom: 32, lineHeight: 1.15 }}>
          Cuando recuperas el control
          <br />
          de tu <span className="text-gold" style={{ fontStyle: "italic" }}>mente</span>,
          <br />
          recuperas el control de tu{" "}
          <span className="text-gold" style={{ fontStyle: "italic" }}>vida.</span>
        </h2>
        <p style={{ fontFamily: "'Jost', sans-serif", color: "var(--muted)", fontSize: 17, marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
          Da el primer paso. El cambio real comienza con una decisión.
        </p>
        <a href="#" className="btn-gold-filled btn-gold-xl">Comienza Ahora</a>
      </motion.div>
    </div>
  </section>
);

// ==================== FOOTER ====================
const Footer = () => (
  <footer style={{ borderTop: "1px solid var(--border)", padding: "48px 24px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--primary)", fontSize: 14 }}>◆</span>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)" }}>
          MyndLife
        </span>
      </div>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: "var(--muted)" }}>
        © {new Date().getFullYear()} MyndLife. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

// ==================== PAGE ====================
const Index = () => (
  <>
    <GlobalStyles />
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PhilosophySection />
      <PillarsSection />
      <CTASection />
      <Footer />
    </div>
  </>
);

export default Index;
