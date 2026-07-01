import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolio";

// Real brand logos via the devicon CDN. Add more as needed.
const ICONS = {
  html5: "html5/html5-original.svg",
  css3: "css3/css3-original.svg",
  javascript: "javascript/javascript-original.svg",
  react: "react/react-original.svg",
  reactjs: "react/react-original.svg",
  nodejs: "nodejs/nodejs-original.svg",
  node: "nodejs/nodejs-original.svg",
  php: "php/php-original.svg",
  python: "python/python-original.svg",
  c: "c/c-original.svg",
  mysql: "mysql/mysql-original.svg",
  wordpress: "wordpress/wordpress-plain.svg",
  vscode: "vscode/vscode-original.svg",
  opencv: "opencv/opencv-original.svg",
  streamlit: "streamlit/streamlit-original.svg",
  git: "git/git-original.svg",
  github: "github/github-original.svg",
  tailwindcss: "tailwindcss/tailwindcss-original.svg",
  bootstrap: "bootstrap/bootstrap-original.svg",
  firebase: "firebase/firebase-plain.svg",
  mongodb: "mongodb/mongodb-original.svg",
};

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "");

function SkillTile({ name }) {
  const icon = ICONS[slug(name)];
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      data-testid={`skill-chip-${name}`}
      className="group flex items-center gap-3 rounded-2xl border border-[#0C0C0C]/10 bg-white px-4 py-3 shadow-sm hover:shadow-[0_10px_30px_-8px_rgba(0,194,255,0.45)] hover:border-[#00C2FF]/50 transition-colors"
    >
      {icon ? (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
          alt={name}
          loading="lazy"
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:rotate-6"
        />
      ) : (
        <span className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-lg accent-gradient flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </span>
      )}
      <span className="font-medium text-[#0C0C0C] text-sm sm:text-base whitespace-nowrap">
        {name}
      </span>
    </motion.div>
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
        {SKILLS.map((domain, i) => (
          <FadeIn
            key={domain.no}
            delay={i * 0.1}
            className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start py-8 sm:py-10 md:py-12 border-t"
            style={{ borderColor: "rgba(12,12,12,0.15)" }}
            data-testid={`skill-domain-${domain.no}`}
          >
            <span
              className="font-black text-[#0C0C0C] leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
            >
              {domain.no}
            </span>

            <div>
              {/* Domain name + percentage */}
              <div className="flex items-baseline justify-between gap-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                >
                  {domain.title}
                </h3>
                <span
                  className="font-bold text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.6rem)" }}
                >
                  {domain.level}%
                </span>
              </div>

              {/* Domain bar */}
              <div className="h-[8px] w-full rounded-full bg-[#0C0C0C]/10 overflow-hidden mt-3">
                <motion.div
                  className="h-full rounded-full accent-gradient"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${domain.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>

              {/* Description */}
              <p className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl mt-4 text-sm sm:text-base md:text-lg">
                {domain.desc}
              </p>

              {/* Eye-catchy skill tiles with real tech logos */}
              <div className="flex flex-wrap gap-3 mt-6">
                {domain.items.map((it) => (
                  <SkillTile key={it} name={it} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}