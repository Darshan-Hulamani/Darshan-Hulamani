import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import { ContactButton } from "./Buttons";
import { ABOUT_TEXT, DECOR } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative 3D corners */}
      <FadeIn
        delay={0.1}
        x={-80}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[150px] md:w-[200px] pointer-events-none select-none"
      >
        <img src={DECOR.moon} alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[150px] md:w-[200px] pointer-events-none select-none"
      >
        <img src={DECOR.blocks} alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[90px] sm:w-[130px] md:w-[170px] pointer-events-none select-none"
      >
        <img src={DECOR.torus} alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[100px] sm:w-[150px] md:w-[200px] pointer-events-none select-none"
      >
        <img src={DECOR.blob} alt="" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-full accent-gradient blur-2xl opacity-40" />
            <img
              // src="/assets/images/profile_pic2.jpeg"
              src="/assets/images/ME.png"
              alt="Darshan Hulamani"
              data-testid="about-photo"
              loading="lazy"
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-[#D7E2EA]/30 shadow-[0_0_40px_-8px_rgba(0,194,255,0.5)]"
            />
          </div>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 relative z-10">
        <FadeIn delay={0.1}>
          <ContactButton label="Get in touch" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
