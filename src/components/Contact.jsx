import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Phone, MapPin, FileText, MessageCircle } from "lucide-react";
import FadeIn from "./FadeIn";
import { PROFILE } from "../data/portfolio";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: PROFILE.socials.github, testId: "social-github" },
  { icon: Linkedin, label: "LinkedIn", href: PROFILE.socials.linkedin, testId: "social-linkedin" },
  { icon: MessageCircle, label: "WhatsApp", href: PROFILE.socials.whatsapp, testId: "social-whatsapp" },
  { icon: FileText, label: "Resume", href: PROFILE.resume, testId: "social-resume" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Let&apos;s talk
        </FadeIn>
        <FadeIn as="p" delay={0.1} className="text-center text-[#D7E2EA]/60 font-light max-w-xl mx-auto mt-4 mb-16">
          Have a project, an opportunity, or just want to say hi? Drop a message
          and I&apos;ll get back to you.
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left: details */}
          <FadeIn x={-30} y={0} className="flex flex-col gap-6">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email"
              className="flex items-center gap-4 text-[#D7E2EA] hover:opacity-70 transition-opacity"
            >
              <span className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center">
                <Mail size={20} />
              </span>
              <span className="font-light">{PROFILE.email}</span>
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              data-testid="contact-phone"
              className="flex items-center gap-4 text-[#D7E2EA] hover:opacity-70 transition-opacity"
            >
              <span className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center">
                <Phone size={20} />
              </span>
              <span className="font-light">{PROFILE.phone}</span>
            </a>
            <div className="flex items-center gap-4 text-[#D7E2EA]">
              <span className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center">
                <MapPin size={20} />
              </span>
              <span className="font-light">{PROFILE.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={s.testId}
                  className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 px-4 py-2.5 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors text-sm uppercase tracking-wide"
                >
                  <s.icon size={16} /> {s.label}
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn x={30} y={0}>
            <form
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="rounded-[30px] border border-[#D7E2EA]/15 bg-white/[0.02] p-6 sm:p-8 flex flex-col gap-5"
            >
              <input
                data-testid="contact-input-name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent border-b border-[#D7E2EA]/20 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#00C2FF] transition-colors"
              />
              <input
                data-testid="contact-input-email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent border-b border-[#D7E2EA]/20 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#00C2FF] transition-colors"
              />
              <textarea
                data-testid="contact-input-message"
                placeholder="Your message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-transparent border-b border-[#D7E2EA]/20 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#00C2FF] transition-colors resize-none"
              />
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={status === "sending"}
                className="accent-gradient rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-sm transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60"
                style={{ outline: "2px solid rgba(255,255,255,0.9)", outlineOffset: "-3px" }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "sent" && (
                <p data-testid="contact-success" className="accent-text text-sm text-center">
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p data-testid="contact-error" className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </FadeIn>
        </div>

        <p className="text-center text-[#D7E2EA]/40 text-sm mt-20">
          © {new Date().getFullYear()} {PROFILE.name}. Built with passion and love.
        </p>
      </div>
    </section>
  );
}
