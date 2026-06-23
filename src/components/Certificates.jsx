import FadeIn from "./FadeIn";
import { CERTIFICATES, BADGES } from "../data/portfolio";

export default function Certificates() {
  return (
    <section
      id="certificates"
      data-testid="certificates-section"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn
        as="h2"
        y={40}
        className="text-[#0C0C0C] font-black uppercase text-center leading-none mb-14 md:mb-20"
        style={{ fontSize: "clamp(2.6rem, 11vw, 150px)" }}
      >
        Certificates
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {CERTIFICATES.map((c, i) => (
          <FadeIn
            key={i}
            delay={(i % 3) * 0.07}
            className="group rounded-[24px] overflow-hidden border border-[#0C0C0C]/10 bg-[#0C0C0C]/[0.02]"
            data-testid={`certificate-card-${i}`}
          >
            <div className="overflow-hidden h-44 bg-[#0C0C0C]/5 flex items-center justify-center">
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[#0C0C0C] font-medium text-base leading-snug">
                {c.title}
              </h3>
              <p className="text-[#0C0C0C]/50 text-sm mt-1">
                {c.issuer} · {c.date}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Google Skill Badges */}
      <FadeIn className="max-w-6xl mx-auto mt-16 md:mt-24">
        <h3 className="text-[#0C0C0C] font-bold uppercase tracking-widest text-center text-sm mb-8">
          Google Cloud Skill Badges
        </h3>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {BADGES.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-28 sm:w-32 text-center"
              data-testid={`badge-${i}`}
            >
              <img
                src={b.img}
                alt={b.title}
                loading="lazy"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 hover:scale-110"
              />
              <span className="text-[#0C0C0C]/60 text-xs mt-2 leading-tight">
                {b.title}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
