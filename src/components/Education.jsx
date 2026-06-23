import FadeIn from "./FadeIn";
import { EDUCATION } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 md:mb-24"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Education
      </FadeIn>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-[#D7E2EA]/15 md:-translate-x-px" />
        <div className="space-y-10">
          {EDUCATION.map((ed, i) => (
            <FadeIn
              key={i}
              delay={i * 0.05}
              x={0}
              y={30}
              className={`relative pl-8 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
              data-testid={`education-item-${i}`}
            >
              <span
                className={`absolute top-1.5 left-0 md:left-auto w-3.5 h-3.5 rounded-full accent-gradient ring-4 ring-[#0C0C0C] ${
                  i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                }`}
              />
              <div className="rounded-3xl border border-[#D7E2EA]/15 bg-white/[0.02] p-5 sm:p-6">
                <span className="accent-text font-medium uppercase tracking-widest text-xs">
                  {ed.date} · {ed.score}
                </span>
                <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl mt-1">
                  {ed.degree}
                </h3>
                <p className="text-[#D7E2EA]/60 text-sm mt-0.5">{ed.school}</p>
                <p className="text-[#D7E2EA]/40 text-xs mt-0.5">{ed.location}</p>
                <p className="text-[#D7E2EA]/60 font-light text-sm mt-3 leading-relaxed">
                  {ed.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
