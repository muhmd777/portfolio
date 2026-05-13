import { useEffect, useRef, useState } from "react";

const SEQUENCE = [
  { cmd: "whoami", out: "mohamed_abdelwahab" },
  { cmd: "cat /etc/identity", out: "Cybersecurity Student | Ethical Hacker" },
  { cmd: "nmap -sV target.local", out: "Scanning vulnerabilities... 22/tcp ssh, 80/tcp http, 443/tcp https" },
  { cmd: "sqlmap -u 'https://demo.lab/login'", out: "[INFO] testing payload... [+] injection point detected" },
  { cmd: "burp scan --target webapp", out: "[*] 12 issues identified  [*] 3 high severity" },
  { cmd: "auth --2fa --hardware-key", out: ">>> ACCESS GRANTED" },
  { cmd: "init security_protocols", out: "Initializing Security Protocols... ONLINE" },
];

export function TerminalSection() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOut, setShowOut] = useState(false);
  const [history, setHistory] = useState<{ cmd: string; out: string }[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step >= SEQUENCE.length) {
      const t = setTimeout(() => {
        setHistory([]);
        setStep(0);
        setTyped("");
        setShowOut(false);
      }, 4000);
      return () => clearTimeout(t);
    }
    const current = SEQUENCE[step];
    if (typed.length < current.cmd.length) {
      const t = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    }
    if (!showOut) {
      const t = setTimeout(() => setShowOut(true), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setHistory((h) => [...h, current]);
      setTyped("");
      setShowOut(false);
      setStep((s) => s + 1);
    }, 900);
    return () => clearTimeout(t);
  }, [step, typed, showOut]);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [history, typed, showOut]);

  return (
    <div className="glass scanline relative overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-[var(--neon-blue)]/20 bg-black/40 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-foreground/60">
          mohamed@abdelwahab.sec — bash — 80x24
        </span>
      </div>
      <div
        ref={ref}
        className="h-[360px] overflow-y-auto p-5 font-mono text-sm leading-relaxed"
      >
        {history.map((h, i) => (
          <div key={i} className="mb-2">
            <div>
              <span className="text-[var(--neon-cyan)]">root@sec</span>
              <span className="text-foreground/40">:~$ </span>
              <span className="text-foreground">{h.cmd}</span>
            </div>
            <div className="text-foreground/70">{h.out}</div>
          </div>
        ))}
        {step < SEQUENCE.length && (
          <div>
            <div>
              <span className="text-[var(--neon-cyan)]">root@sec</span>
              <span className="text-foreground/40">:~$ </span>
              <span className="text-foreground">{typed}</span>
              <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-[var(--neon-blue)]" />
            </div>
            {showOut && <div className="text-foreground/70">{SEQUENCE[step].out}</div>}
          </div>
        )}
      </div>
    </div>
  );
}