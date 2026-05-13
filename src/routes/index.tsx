import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, Bug, Network, Database, Terminal, Globe, Lock, Code2,
  Brain, Users, FileBadge, GraduationCap, Award, Trophy,
  Mail, Github, Linkedin, ExternalLink, Download, ArrowRight,
  Cpu, Search, KeyRound, ScanLine, FlaskConical, Send, MapPin,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { MatrixRain } from "@/components/portfolio/MatrixRain";
import { Particles } from "@/components/portfolio/Particles";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { BootScreen } from "@/components/portfolio/BootScreen";
import { Reveal } from "@/components/portfolio/Reveal";
import { Typewriter } from "@/components/portfolio/Typewriter";
import { Nav } from "@/components/portfolio/Nav";
import { TerminalSection } from "@/components/portfolio/TerminalSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mohamed Abd Elwahab — Cybersecurity & Ethical Hacking Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mohamed Abd Elwahab — Computer Science & AI student at MTI University specializing in web security, penetration testing, and ethical hacking.",
      },
      { property: "og:title", content: "Mohamed Abd Elwahab — Cybersecurity Portfolio" },
      { property: "og:description", content: "Ethical hacker, web security & pentesting." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const SKILLS = [
  { name: "Web Security", icon: Globe },
  { name: "Network Security", icon: Network },
  { name: "SQL Injection", icon: Database },
  { name: "Burp Suite", icon: Bug },
  { name: "Linux", icon: Terminal },
  { name: "TryHackMe", icon: Shield },
  { name: "PortSwigger Labs", icon: FlaskConical },
  { name: "Problem Solving", icon: Brain },
  { name: "Team Leadership", icon: Users },
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
];

const EXPERIENCE = [
  {
    title: "Cybersecurity Trainee",
    org: "Instant Training Center",
    period: "2024",
    desc: "Hands-on training across vulnerability assessment, network defense, and ethical hacking methodologies.",
  },
  {
    title: "Team Leader",
    org: "Student Projects — MTI University",
    period: "2023 — Present",
    desc: "Led cross-functional student teams delivering academic and security-focused projects on tight deadlines.",
  },
  {
    title: "Self-Learning Pentester",
    org: "TryHackMe & PortSwigger Web Security Academy",
    period: "2024 — Present",
    desc: "Daily lab work: web exploitation, OWASP Top 10, privilege escalation, and CTF challenges.",
  },
];

const CERTS = [
  { title: "Cybersecurity Fundamentals", issuer: "Instant Training Center", status: "Issued", icon: Award },
  { title: "CompTIA Security+", issuer: "CompTIA", status: "In Progress", icon: FileBadge },
  { title: "TryHackMe Learning Paths", issuer: "TryHackMe", status: "Ongoing", icon: Trophy },
  { title: "Web Security Academy", issuer: "PortSwigger", status: "Ongoing", icon: GraduationCap },
];

const PROJECTS = [
  {
    name: "Vulnerability Scanner",
    tag: "RECON",
    desc: "Python-based scanner detecting common web vulnerabilities and misconfigurations across HTTP services.",
    icon: ScanLine,
    stack: ["Python", "Requests", "BeautifulSoup"],
  },
  {
    name: "Secure Login System",
    tag: "AUTH",
    desc: "Hardened authentication flow with bcrypt, rate-limiting, CSRF tokens, and session rotation.",
    icon: Lock,
    stack: ["Node.js", "JWT", "Bcrypt"],
  },
  {
    name: "Port Scanner",
    tag: "NETWORK",
    desc: "Multi-threaded TCP/UDP scanner with banner grabbing and service fingerprinting.",
    icon: Search,
    stack: ["Python", "Sockets", "Threading"],
  },
  {
    name: "RSA Encryption Tool",
    tag: "CRYPTO",
    desc: "Educational implementation of RSA key generation, signing, and verification with CLI interface.",
    icon: KeyRound,
    stack: ["Python", "GMP", "Crypto"],
  },
  {
    name: "Web Security Testing Labs",
    tag: "PENTEST",
    desc: "Vulnerable lab environment for practicing XSS, SQLi, IDOR, and SSRF in a controlled setting.",
    icon: FlaskConical,
    stack: ["Docker", "PHP", "MySQL"],
  },
];

function Index() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <CursorGlow />
      <ScrollProgress />
      <Toaster theme="dark" position="top-right" />
      <div id="top" className="relative min-h-screen overflow-hidden">
        <MatrixRain />
        <Nav />

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Languages />
        <TerminalShowcase />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <div className="mb-12 flex flex-col items-start gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
          // {kicker}
        </span>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          <span className="text-neon glow-text">{title}</span>
        </h2>
        {sub && <p className="max-w-2xl text-foreground/60">{sub}</p>}
      </div>
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-32">
      <div className="grid-bg absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <Particles count={40} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
            </span>
            STATUS: AVAILABLE FOR HIRE
          </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="mb-8 flex justify-center lg:justify-start">
  <img
    src="/me.jpeg"
    alt="Mohamed"
    className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#00ffff] object-cover"
  />
</div>
          <h1 className="font-display text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
            <span className="block text-foreground">MOHAMED</span>
            <span className="text-neon glow-text block">ABD ELWAHAB</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-foreground/60 sm:text-base">
            Cybersecurity Student
            <span className="mx-3 text-[var(--neon-purple)]">/</span>
            Ethical Hacking Enthusiast
            <span className="mx-3 text-[var(--neon-purple)]">/</span>
            Future Security Engineer
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex h-8 items-center font-mono text-xl sm:text-2xl">
            <span className="text-foreground/50">$&nbsp;focus&nbsp;=&nbsp;</span>
            <Typewriter
              words={[
                "Web Security",
                "Penetration Testing",
                "Bug Hunting",
                "Network Security",
                "TryHackMe Player",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="animate-pulse-glow group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-[var(--neon-blue)] bg-[var(--neon-blue)]/10 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-[var(--neon-cyan)] transition-all hover:bg-[var(--neon-blue)]/20"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                toast.info("CV available on request — please use the contact form below.");
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-md border border-[var(--neon-purple)]/50 bg-transparent px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-foreground/90 transition-all hover:border-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/10 hover:text-[var(--neon-purple)] hover:shadow-[0_0_20px_var(--neon-purple)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 font-mono">
            {[
              { k: "100+", v: "Labs Solved" },
              { k: "4th", v: "Year CS & AI" },
              { k: "1mo", v: "To Graduation" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-[var(--neon-blue)]/40 pl-4">
                <div className="text-neon glow-text text-3xl font-bold">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-72 w-72">
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-[var(--neon-blue)]/40" />
          <div
            className="absolute inset-6 rounded-full border border-dashed border-[var(--neon-purple)]/40 animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          />
          <div className="absolute inset-12 animate-spin-slow rounded-full border border-[var(--neon-cyan)]/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu className="h-16 w-16 text-[var(--neon-cyan)] glow-text" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="01 / about" title="WHO AM I" />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                I'm a <span className="text-[var(--neon-cyan)] font-semibold">fourth-year Computer Science & AI student</span> at MTI University, graduating in just one month. My passion sits at the intersection of code and chaos — finding the cracks before attackers do.
              </p>
              <p className="mt-5 text-foreground/70">
                I focus on <span className="text-[var(--neon-purple)]">web security</span>, vulnerability assessment, and penetration testing. Outside of class I sharpen my edge daily through TryHackMe rooms and the PortSwigger Web Security Academy. I lead student teams, ship side-projects, and treat every CTF as a chance to learn something new.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-mono">
                {[
                  ["Location", "Cairo, Egypt"],
                  ["University", "MTI University"],
                  ["Major", "Computer Science & AI"],
                  ["Status", "Graduating soon"],
                ].map(([k, v]) => (
                  <div key={k} className="border-l border-[var(--neon-blue)]/30 pl-3">
                    <div className="text-xs uppercase tracking-widest text-foreground/40">{k}</div>
                    <div className="text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-2">
            <div className="glass relative h-full overflow-hidden rounded-2xl p-6 font-mono text-sm">
              <div className="text-[var(--neon-cyan)]">~/profile.json</div>
              <pre className="mt-4 text-foreground/80 whitespace-pre-wrap">
{`{
  "alias":   "abdelwahab",
  "role":    "ethical_hacker",
  "stack":   ["web", "network", "linux"],
  "tools":   ["burp", "nmap", "sqlmap"],
  "labs":    "tryhackme + portswigger",
  "values":  ["curiosity", "discipline"],
  "status":  "shipping"
}`}
              </pre>
              <div
                className="absolute left-0 top-0 h-12 w-full opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, var(--neon-cyan) 0%, transparent 100%)",
                  filter: "blur(20px)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="02 / arsenal"
          title="SKILLS & TOOLS"
          sub="The toolkit I bring to every engagement — from scanning to exploitation to hardening."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 50}>
              <div className="glass group relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--neon-purple)] hover:shadow-[0_0_25px_var(--neon-purple)]">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--neon-blue)]/10 text-[var(--neon-cyan)] transition-colors group-hover:bg-[var(--neon-purple)]/20 group-hover:text-[var(--neon-purple)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-sm font-semibold tracking-wide">{s.name}</div>
                <div
                  className="absolute inset-x-0 -top-px h-px opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "var(--gradient-neon)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker="03 / timeline" title="EXPERIENCE" />
        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-px md:left-1/2"
            style={{ background: "linear-gradient(180deg, var(--neon-blue), var(--neon-purple), transparent)" }}
          />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <div className={`relative mb-12 flex md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div
                  className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--neon-cyan)] md:left-1/2"
                  style={{ boxShadow: "0 0 12px var(--neon-cyan)" }}
                />
                <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass rounded-xl p-6 transition-all hover:border-[var(--neon-purple)] hover:shadow-[0_0_20px_var(--neon-purple)]">
                    <div className="font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
                      {e.period}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold">{e.title}</h3>
                    <div className="text-sm text-[var(--neon-purple)]">{e.org}</div>
                    <p className="mt-3 text-sm text-foreground/70">{e.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="04 / proof" title="CERTIFICATES" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_var(--neon-blue)]">
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: "var(--gradient-neon)" }}
                />
                <c.icon className="h-8 w-8 text-[var(--neon-cyan)]" />
                <h3 className="mt-4 font-display text-base font-bold">{c.title}</h3>
                <div className="mt-1 text-xs text-foreground/60">{c.issuer}</div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--neon-purple)]/40 bg-[var(--neon-purple)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--neon-purple)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon-purple)]" />
                  {c.status}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="05 / build log"
          title="PROJECTS"
          sub="Tools and labs I've built to sharpen my offensive and defensive skillset."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_var(--neon-purple)]">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--neon-blue)]/10 text-[var(--neon-cyan)] transition-all group-hover:bg-[var(--neon-purple)]/20 group-hover:text-[var(--neon-purple)]">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-[var(--neon-cyan)]/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--neon-cyan)]">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded border border-[var(--neon-blue)]/20 px-2 py-0.5 font-mono text-[10px] text-foreground/60">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)] opacity-0 transition-opacity group-hover:opacity-100">
                  view case study <ExternalLink className="h-3 w-3" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Languages() {
  const langs = [
    { name: "Arabic", level: "Native", pct: 100 },
    { name: "English", level: "B1+ → B2", pct: 70 },
  ];
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader kicker="06 / i/o" title="LANGUAGES" />
        <div className="grid gap-6 sm:grid-cols-2">
          {langs.map((l, i) => (
            <Reveal key={l.name} delay={i * 100}>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-display text-2xl font-bold">{l.name}</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
                      {l.level}
                    </div>
                  </div>
                  <div className="text-neon glow-text font-mono text-2xl">{l.pct}%</div>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[var(--neon-blue)]/15">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${l.pct}%`,
                      background: "linear-gradient(90deg, var(--neon-blue), var(--neon-purple))",
                      boxShadow: "0 0 10px var(--neon-purple)",
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalShowcase() {
  return (
    <section id="terminal" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          kicker="07 / live shell"
          title="OPERATIONS LOG"
          sub="A glimpse of the workflow — recon, exploit, report, repeat."
        />
        <Reveal>
          <TerminalSection />
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          kicker="08 / handshake"
          title="GET IN TOUCH"
          sub="Open to internships, junior security roles, and freelance pentest engagements."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Encrypted transmission sent — I'll reply within 24h.");
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setSent(false), 2500);
              }}
              className="glass space-y-4 rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="name" type="text" placeholder="Your name" required />
                <Field label="email" type="email" placeholder="you@domain.com" required />
              </div>
              <Field label="subject" type="text" placeholder="Engagement / role / question" required />
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
                  &gt; message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Brief me on the scope..."
                  className="w-full resize-none rounded-md border border-[var(--neon-blue)]/30 bg-background/40 px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--neon-purple)] focus:outline-none focus:shadow-[0_0_15px_var(--neon-purple)]"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--neon-cyan)] bg-[var(--neon-blue)]/10 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-[var(--neon-cyan)] transition-all hover:bg-[var(--neon-cyan)]/15 hover:shadow-[0_0_25px_var(--neon-cyan)]"
              >
                {sent ? "✓ Transmission Sent" : (
                  <>
                    Send Encrypted Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: "mohamed.abdelwahab@protonmail.com", href: "mailto:mohamed.abdelwahab@protonmail.com" },
                { icon: Github, label: "GitHub", value: "@mohamedabdelwahab", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", value: "Mohamed Abd Elwahab", href: "https://linkedin.com" },
                { icon: Shield, label: "TryHackMe", value: "tryhackme.com/p/abdelwahab", href: "https://tryhackme.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass group flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--neon-purple)] hover:shadow-[0_0_20px_var(--neon-purple)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--neon-blue)]/10 text-[var(--neon-cyan)] transition-all group-hover:bg-[var(--neon-purple)]/20 group-hover:text-[var(--neon-purple)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{s.label}</div>
                    <div className="truncate font-mono text-sm text-foreground">{s.value}</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-[var(--neon-cyan)]" />
                </a>
              ))}
              <div className="glass flex items-center gap-3 rounded-xl p-4 font-mono text-xs text-foreground/60">
                <MapPin className="h-4 w-4 text-[var(--neon-cyan)]" />
                Cairo, Egypt — Remote-friendly
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
        &gt; {label}
      </label>
      <input
        {...props}
        className="w-full rounded-md border border-[var(--neon-blue)]/30 bg-background/40 px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--neon-purple)] focus:outline-none focus:shadow-[0_0_15px_var(--neon-purple)]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[var(--neon-blue)]/15 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-mono text-xs text-foreground/50">
          © {new Date().getFullYear()} <span className="text-neon">Mohamed Abd Elwahab</span> — built with caffeine & curiosity.
        </div>
        <div className="font-mono text-xs text-foreground/40">
          uptime: 99.99% — last commit: just now
        </div>
      </div>
    </footer>
  );
}
