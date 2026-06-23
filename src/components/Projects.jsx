import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import FadeIn from "./FadeIn";
import { GhostButton } from "./Buttons";
import { PROJECTS, DECOR } from "../data/portfolio";

const CARD_DECOR = [DECOR.torus, DECOR.blob, DECOR.blocks, DECOR.moon, DECOR.torus];

function Card({ project, index, total, progress }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-28">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/60 bg-[#0C0C0C] p-5 sm:p-7 md:p-9 origin-top"
        data-testid={`project-card-${project.no}`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-5">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
            >
              {project.no}
            </span>
            <div className="pt-1">
              <span className="accent-text font-medium uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: "clamp(1.3rem, 3vw, 2.4rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <GhostButton
            label="Live Project"
            testId={`project-live-${project.no}`}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        {/* Body */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6 items-stretch">
          <div className="flex flex-col justify-between">
            <p className="text-[#D7E2EA]/70 font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-xl">
              {project.desc}
            </p>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]/80 px-3 py-1 text-xs uppercase tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`project-source-${project.no}`}
                  className="inline-flex items-center gap-2 text-[#D7E2EA] hover:opacity-70 transition-opacity text-sm uppercase tracking-wide"
                >
                  <Github size={18} /> Source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 accent-text font-medium text-sm uppercase tracking-wide"
                >
                  Visit <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative overflow-hidden rounded-[30px] sm:rounded-[40px] min-h-[200px] md:min-h-[260px] border border-[#D7E2EA]/15 flex items-center justify-center"
            style={{
              background:
                "radial-gradient(120% 120% at 0% 0%, rgba(0,194,255,0.18), transparent 45%), radial-gradient(120% 120% at 100% 100%, rgba(124,58,237,0.25), transparent 50%), #0C0C0C",
            }}
          >
            <img
              src={CARD_DECOR[index % CARD_DECOR.length]}
              alt=""
              className="w-[55%] max-w-[240px] h-auto"
              style={{ mixBlendMode: "screen" }}
            />
            <span className="absolute bottom-4 left-5 text-[#D7E2EA]/30 font-black uppercase text-xs tracking-[0.3em]">
              {project.category}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-10"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </FadeIn>

      <div ref={ref} className="relative">
        {PROJECTS.map((p, i) => (
          <Card
            key={p.no}
            project={p}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
