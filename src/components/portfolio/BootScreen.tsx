import { useEffect, useState } from "react";

const LINES = [
  "[ OK ] Initializing kernel modules...",
  "[ OK ] Mounting /dev/secure...",
  "[ OK ] Loading cryptographic modules: AES, RSA, SHA-256",
  "[ OK ] Establishing encrypted tunnel...",
  "[ OK ] Bypassing firewall heuristics...",
  "[ OK ] Scanning open ports... 22, 80, 443, 8080",
  "[ OK ] Authenticating user: m.abdelwahab",
  ">>> ACCESS GRANTED",
  ">>> Welcome to abdelwahab.sec",
];

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setShown((s) => [...s, LINES[i]]);
      setProgress(((i + 1) / LINES.length) * 100);
      i++;
      if (i >= LINES.length) {
        clearInterval(t);
        setTimeout(onDone, 600);
      }
    }, 220);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative z-10 w-[min(640px,90vw)] font-mono text-sm">
        <div className="mb-4 flex items-center gap-3 text-[var(--neon-cyan)]">
          <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-[var(--neon-cyan)] shadow-[0_0_12px_var(--neon-cyan)]" />
          <span>SECURE BOOT v3.14 — abdelwahab.sec</span>
        </div>
        <div className="space-y-1 text-foreground/80">
          {shown.map((l, i) => (
            <div key={i} className={l.startsWith(">>>") ? "text-neon glow-text font-bold" : ""}>
              {l}
            </div>
          ))}
          <span className="animate-blink inline-block h-4 w-2 bg-[var(--neon-blue)]" />
        </div>
        <div className="mt-6 h-[2px] w-full overflow-hidden bg-[var(--neon-blue)]/20">
          <div
            className="h-full transition-all duration-200"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, var(--neon-blue), var(--neon-purple))",
              boxShadow: "0 0 10px var(--neon-purple)",
            }}
          />
        </div>
      </div>
    </div>
  );
}