import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 md:mb-24"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Experience
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {EXPERIENCE.map((exp, i) => (
          <FadeIn
            key={i}
            delay={i * 0.1}
            className="rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/15 bg-white/[0.02] p-6 sm:p-9"
            data-testid={`experience-item-${i}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl">
                  {exp.role}
                </h3>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 accent-text font-medium mt-1"
                >
                  {exp.company} <ArrowUpRight size={16} />
                </a>
                <p className="text-[#D7E2EA]/50 text-sm mt-0.5">
                  {exp.location}
                </p>
              </div>
              <span className="rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]/80 px-4 py-1.5 text-xs uppercase tracking-widest">
                {exp.date}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {exp.points.map((p, pi) => (
                <li
                  key={pi}
                  className="text-[#D7E2EA]/70 font-light leading-relaxed flex gap-3 text-sm sm:text-base"
                >
                  <span className="accent-text mt-1">▹</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {exp.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[#D7E2EA]/5 text-[#D7E2EA]/70 px-3 py-1 text-xs uppercase tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
