// Reusable pill buttons matching the template aesthetic

export function ContactButton({ label = "Contact Me", className = "", ...rest }) {
  return (
    <a
      data-testid="contact-me-button"
      className={`accent-gradient inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-[1.04] ${className}`}
      style={{
        boxShadow:
          "0px 4px 4px rgba(0, 194, 255, 0.25), 4px 4px 12px #4F46E5 inset",
        outline: "2px solid rgba(255,255,255,0.9)",
        outlineOffset: "-3px",
      }}
      {...rest}
    >
      {label}
    </a>
  );
}

export function GhostButton({ label, className = "", testId, ...rest }) {
  return (
    <a
      data-testid={testId}
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
      {...rest}
    >
      {label}
    </a>
  );
}
