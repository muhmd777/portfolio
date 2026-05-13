import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const LINKS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "certificates", label: "certs" },
  { id: "projects", label: "projects" },
  { id: "terminal", label: "terminal" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[60] transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass mt-3 py-2" : "py-2"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-bold tracking-widest"
        >
          <Terminal className="h-4 w-4 text-[var(--neon-cyan)]" />
          <span className="text-neon">M.ABDELWAHAB</span>
          <span className="text-[var(--neon-cyan)]">/</span>
          <span className="text-foreground/70">sec</span>
        </a>
        <ul className="hidden items-center gap-1 font-mono text-xs uppercase tracking-widest md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="rounded-full px-3 py-1.5 text-foreground/70 transition-colors hover:bg-[var(--neon-blue)]/10 hover:text-[var(--neon-cyan)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-[var(--neon-blue)]/40 bg-[var(--neon-blue)]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)] transition-all hover:border-[var(--neon-purple)] hover:shadow-[0_0_15px_var(--neon-purple)] sm:block"
        >
          ./contact
        </a>
      </div>
    </nav>
  );
}