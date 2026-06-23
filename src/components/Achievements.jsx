import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Images } from "lucide-react";
import FadeIn from "./FadeIn";
import { ACHIEVEMENTS } from "../data/portfolio";

export default function Achievements() {
  const [active, setActive] = useState(null); // achievement object

  return (
    <section
      id="achievements"
      data-testid="achievements-section"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 md:mb-24"
        style={{ fontSize: "clamp(2.6rem, 11vw, 150px)" }}
      >
        Achievements
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {ACHIEVEMENTS.map((a, i) => (
          <FadeIn
            key={i}
            delay={(i % 3) * 0.08}
            className="group rounded-[28px] overflow-hidden border border-[#D7E2EA]/15 bg-white/[0.02] cursor-pointer hover:border-[#00C2FF]/40 transition-colors"
            data-testid={`achievement-card-${i}`}
            onClick={() => setActive(a)}
          >
            <div className="relative overflow-hidden h-48 sm:h-52">
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {a.photos && a.photos.length > 1 && (
                <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-[11px] text-[#D7E2EA]">
                  <Images size={13} /> {a.photos.length}
                </span>
              )}
            </div>
            <div className="p-5">
              <span className="accent-text font-medium uppercase tracking-widest text-[11px]">
                {a.issuer} · {a.date}
              </span>
              <h3 className="text-[#D7E2EA] font-medium text-base sm:text-lg mt-1 leading-snug">
                {a.title}
              </h3>
              <p className="text-[#D7E2EA]/55 font-light text-sm mt-2 leading-relaxed">
                {a.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Gallery modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            data-testid="achievement-modal"
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto no-scrollbar rounded-[28px] border border-[#D7E2EA]/15 bg-[#0C0C0C] p-5 sm:p-8"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                data-testid="achievement-modal-close"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <span className="accent-text font-medium uppercase tracking-widest text-xs">
                {active.issuer} · {active.date}
              </span>
              <h3 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl mt-1 pr-12">
                {active.title}
              </h3>
              <p className="text-[#D7E2EA]/60 font-light text-sm mt-2 leading-relaxed max-w-2xl">
                {active.desc}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(active.photos || [active.img]).map((src, pi) => (
                  <div
                    key={pi}
                    className="rounded-2xl overflow-hidden border border-[#D7E2EA]/10 bg-white/[0.02]"
                  >
                    <img
                      src={src}
                      alt={`${active.title} ${pi + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-contain max-h-[60vh]"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
