import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolio";

function Bar({ name, level }) {
  return (
    <div data-testid={`skill-${name}`}>
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-medium uppercase tracking-wide text-[#0C0C0C] text-sm sm:text-base">
          {name}
        </span>
        <span className="font-light text-[#0C0C0C]/50 text-sm">{level}%</span>
      </div>
      <div className="h-[6px] w-full rounded-full bg-[#0C0C0C]/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full accent-gradient"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn
        as="h2"
        y={40}
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Skills
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SKILLS.map((group, i) => (
          <FadeIn
            key={group.no}
            delay={i * 0.1}
            className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start py-8 sm:py-10 md:py-12 border-t"
            style={{ borderColor: "rgba(12,12,12,0.15)" }}
          >
            <span
              className="font-black text-[#0C0C0C] leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
            >
              {group.no}
            </span>
            <div>
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
              >
                {group.title}
              </h3>
              <p className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl mt-2 mb-6 text-sm sm:text-base md:text-lg">
                {group.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {group.items.map((it) => (
                  <Bar key={it.name} name={it.name} level={it.level} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
