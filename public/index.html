import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Brain, Target, Compass, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-primary text-lg">◆</span>
          <span className="font-body text-sm tracking-[0.3em] uppercase text-foreground group-hover:text-primary transition-colors duration-300">
            MyndLife
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="default" asChild>
            <a href="#cta">Únete</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
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
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="default" asChild>
                <a href="#cta" onClick={() => setMenuOpen(false)}>Únete</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ==================== HERO ====================
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_10%_70%_/_0.04)_0%,_transparent_70%)]" />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-8"
        >
          Bienvenido a MyndLife
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] mb-8"
        >
          Elevate
          <br />
          <span className="italic text-gradient-gold">Your Life</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-16 h-px bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12"
        >
          No todo el mundo llega hasta aquí.
          <br />
          MyndLife es para quien sabe que hay otra forma de vivir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="goldFilled" size="lg" asChild>
            <a href="#pillars">Explorar</a>
          </Button>
          <Button variant="gold" size="lg" asChild>
            <a href="#cta">¿Es MyndLife Para Ti?</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== STATS ====================
const stats = [
  { value: "100%", label: "Claridad Mental" },
  { value: "0", label: "Excusas Permitidas" },
  { value: "∞", label: "Potencial Real" },
  { value: "1", label: "Vida para Vivir" },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-gradient-gold mb-3">
                {stat.value}
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PHILOSOPHY ====================
const PhilosophySection = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground">
            MyndLife no es motivación.
            <br />
            <span className="text-gradient-gold italic">Es estructura.</span>
            <br />
            <span className="text-muted-foreground">Es claridad.</span>
            <br />
            Es vivir con <span className="text-gradient-gold italic">intención.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== PILLARS ====================
const pillars = [
  {
    num: "01",
    icon: Brain,
    title: "Mentalidad Clara",
    subtitle: "Decide con precisión.",
    description: "Filtra el ruido, identifica lo que importa y toma decisiones que realmente te acerquen a tus metas.",
  },
  {
    num: "02",
    icon: Target,
    title: "Disciplina Diaria",
    subtitle: "La consistencia es libertad.",
    description: "Cada hábito cuenta. Construye tu día a día con disciplina y transforma pequeños esfuerzos en grandes resultados.",
  },
  {
    num: "03",
    icon: Compass,
    title: "Enfoque a Largo Plazo",
    subtitle: "Piensa en años, no en días.",
    description: "Crea sistemas sostenibles que funcionen semana tras semana y deja atrás soluciones rápidas y temporales.",
  },
  {
    num: "04",
    icon: Crown,
    title: "Estándares Altos",
    subtitle: "No aceptes menos de lo que mereces.",
    description: "Eleva tus expectativas en hábitos, decisiones y relaciones. Tus estándares definen tu destino.",
  },
];

const PillarsSection = () => {
  return (
    <section id="pillars" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Pilares Fundamentales
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Los Cimientos del
            <br />
            <span className="italic text-gradient-gold">Cambio Real</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-xl p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(220_10%_70%_/_0.03)_0%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-5xl font-light text-border group-hover:text-primary/20 transition-colors duration-500">
                    {pillar.num}
                  </span>
                  <pillar.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>

                <h3 className="font-display text-2xl font-medium mb-2 group-hover:text-gradient-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm italic text-primary/70 mb-4">
                  {pillar.subtitle}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CTA ====================
const CTASection = () => {
  return (
    <section id="cta" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-16 h-px bg-primary mx-auto mb-12" />

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Cuando recuperas el control
            <br />
            de tu <span className="italic text-gradient-gold">mente</span>,
            <br />
            recuperas el control de tu{" "}
            <span className="italic text-gradient-gold">vida.</span>
          </h2>

          <p className="font-body text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            Da el primer paso. El cambio real comienza con una decisión.
          </p>

          <Button variant="goldFilled" size="xl">
            Comienza Ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================
const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-primary text-sm">◆</span>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            MyndLife
          </span>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} MyndLife. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

// ==================== PAGE ====================
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PhilosophySection />
      <PillarsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
