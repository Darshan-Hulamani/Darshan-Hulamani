import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import { ContactButton } from "./Buttons";
import { PROFILE, NAV_LINKS, DECOR } from "../data/portfolio";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="fixed top-0 inset-x-0 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 z-50 bg-[#0C0C0C]/70 backdrop-blur-md border-b border-white/5"
      >
        <a
          href="#hero"
          data-testid="nav-logo"
          className="text-[#D7E2EA] font-bold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"
        >
          DH.
        </a>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-[#D7E2EA]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </FadeIn>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-20 left-4 right-4 z-40 rounded-3xl border border-white/10 bg-[#0C0C0C]/95 backdrop-blur-xl p-6 flex flex-col gap-5"
            data-testid="mobile-menu"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-lg"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col"
      style={{ overflowX: "clip" }}
    >
      <Navbar />

      {/* Heading */}
      <div className="overflow-hidden px-6 md:px-10 pt-20 sm:pt-24 md:pt-20 relative z-20 pointer-events-none">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-normal sm:whitespace-nowrap w-full"
          style={{ fontSize: "clamp(2.6rem, 12vw, 128px)" }}
        >
          {PROFILE.firstName.toLowerCase()} {PROFILE.lastName.toLowerCase()}
        </FadeIn>
        <FadeIn
          as="h4"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-normal sm:whitespace-nowrap w-full"
          style={{ fontSize: "clamp(2.6rem, 12vw, 128px)" }}
        >
          MCA STUDENT
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="hero-portrait-wrap relative sm:absolute left-1/2 -translate-x-1/2 z-10 mt-5 sm:mt-0 sm:top-auto sm:bottom-0 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[410px]">
        <Magnet padding={150} strength={3}>
          <FadeIn delay={0.5} y={30}>
            <div
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 84% at 50% 50%, #000 64%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 70% 84% at 50% 50%, #000 64%, transparent 100%)",
                WebkitMaskMode: "alpha",
                maskMode: "alpha",
              }}
            >
              <img
                src={DECOR.hero}
                alt="3D abstract figure"
                data-testid="hero-portrait"
                className="block w-full h-auto select-none pointer-events-none"
                style={{
                  filter: "brightness(1.12) saturate(1.08) contrast(1.08)",
                }}
              />
            </div>
          </FadeIn>
        </Magnet>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom-bar mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
          style={{ fontSize: "clamp(0.7rem, 1.4vw, 1.4rem)" }}
        >
          {PROFILE.heroTagline}
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
