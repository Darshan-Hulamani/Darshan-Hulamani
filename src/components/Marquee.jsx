import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "../data/portfolio";

function Tile({ src }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-2xl"
      style={{ width: 420, height: 270 }}
    >
      <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
}

function Row({ images, reverse }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-3 pr-3"
        style={{
          animation: `${reverse ? "marquee-right" : "marquee-left"} 60s linear infinite`,
          willChange: "transform",
        }}
      >
        {tripled.map((src, i) => (
          <Tile key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      data-testid="marquee-section"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <Row images={MARQUEE_ROW_1} reverse={false} />
        <Row images={MARQUEE_ROW_2} reverse={true} />
      </div>
    </section>
  );
}
