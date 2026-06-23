import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Char({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  );
}

// Character-by-character scroll-reveal text
export default function AnimatedText({ text, className = "", style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  let charIndex = 0;
  const total = text.length;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block">
          {word.split("").map((ch, ci) => {
            const start = charIndex / total;
            const end = (charIndex + 1) / total;
            charIndex++;
            return (
              <Char key={ci} progress={scrollYProgress} range={[start, end]}>
                {ch}
              </Char>
            );
          })}
          {(() => {
            charIndex++;
            return <span>&nbsp;</span>;
          })()}
        </span>
      ))}
    </p>
  );
}
