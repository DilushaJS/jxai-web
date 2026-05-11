"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// ─── timing ──────────────────────────────────────────────────────────────────
const MAIN_DURATION = 3.5;   // seconds for main line to draw
const MAIN_DELAY    = 0.4;   // initial delay before drawing starts
const CYCLE_MS      = 8800;  // 4.8s draw + 4s pause

// ─── layout (SVG coordinate space 1000×480) ──────────────────────────────────
const VW   = 1000;
const VH   = 480;
const MY   = 240; // main branch y

// when does the main line reach x = X pixels?
function reach(x: number) {
  return MAIN_DELAY + (x / VW) * MAIN_DURATION;
}

// ─── branch data ─────────────────────────────────────────────────────────────
// origin: point on main line where branch forks
// dir: "up" | "down"
// run: how far right the branch extends horizontally
// rise: vertical distance from main line
// label: monospace branch name
const branches = [
  {
    id: "dashboard",
    ox: 160, dir: "up" as const,
    rise: 90, run: 210,
    label: "feature/open-dashboard",
    color: "rgba(255,255,255,0.75)",
  },
  {
    id: "signup",
    ox: 160, dir: "down" as const,
    rise: 75, run: 175,
    label: "auth/signup",
    color: "rgba(255,255,255,0.55)",
  },
  {
    id: "tools",
    ox: 390, dir: "up" as const,
    rise: 80, run: 195,
    label: "feature/select-tools",
    color: "rgba(255,255,255,0.75)",
  },
  {
    id: "templates",
    ox: 560, dir: "down" as const,
    rise: 95, run: 200,
    label: "feature/open-templates",
    color: "rgba(255,255,255,0.55)",
  },
  {
    id: "workflow",
    ox: 780, dir: "up" as const,
    rise: 85, run: 185,
    label: "feat/create-workflow",
    color: "rgba(255,255,255,0.75)",
  },
];

// commit dots on main line (between/at branch origins)
const mainDots = [40, 160, 390, 560, 780, 960];

// ─── helpers ─────────────────────────────────────────────────────────────────
function branchPath(b: typeof branches[0]) {
  const dy = b.dir === "up" ? -b.rise : b.rise;
  const ey = MY + dy;
  // 45° elbow then horizontal
  const elbowX = b.ox + Math.abs(dy);
  const endX   = b.ox + b.run;
  return `M ${b.ox} ${MY} L ${elbowX} ${ey} L ${endX} ${ey}`;
}

function labelPos(b: typeof branches[0]) {
  const dy = b.dir === "up" ? -b.rise : b.rise;
  return { x: b.ox + b.run, y: MY + dy };
}

// ─── animated SVG line ────────────────────────────────────────────────────────
interface AnimPathProps {
  d: string; stroke: string; width?: number;
  delay: number; duration: number;
  isInView: boolean; id: string; cycle: number;
}
function AnimPath({ d, stroke, width = 1.5, delay, duration, isInView, id, cycle }: AnimPathProps) {
  return (
    <motion.path
      key={`${id}-${cycle}`}
      d={d}
      stroke={stroke}
      strokeWidth={width}
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 1 }}
      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration, ease: "easeInOut", delay }}
    />
  );
}

// ─── dot node ─────────────────────────────────────────────────────────────────
interface DotProps {
  cx: number; cy: number; r?: number; fill: string;
  delay: number; isInView: boolean; id: string; cycle: number;
}
function Dot({ cx, cy, r = 5, fill, delay, isInView, id, cycle }: DotProps) {
  return (
    <motion.circle
      key={`dot-${id}-${cycle}`}
      cx={cx} cy={cy} r={r} fill={fill}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 340, damping: 22, delay }}
      style={{ originX: `${cx}px`, originY: `${cy}px` } as React.CSSProperties}
    />
  );
}

// ─── component ────────────────────────────────────────────────────────────────
export default function HowItWorksDiagram() {
  const ref  = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setCycle(c => c + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <section className="bg-[#010101] py-8 md:py-20 px-4" ref={ref}>
      <div className="max-w-[1126px] mx-auto">

        {/* ── Branch Diagram ─────────────────────────────────────── */}
        <div
          className="relative overflow-hidden bg-[#010101]"
          style={{ height: VH }}
        >
          {/* subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,200,200,0.05) 0%, transparent 70%)",
            }}
          />

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${VW} ${VH}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* ── main branch line ─────────────────────────────── */}
            <AnimPath
              id="main"
              d={`M 20 ${MY} L 980 ${MY}`}
              stroke="#00c8c8"
              width={1.8}
              delay={MAIN_DELAY}
              duration={MAIN_DURATION}
              isInView={isInView}
              cycle={cycle}
            />

            {/* ── branch lines ─────────────────────────────────── */}
            {branches.map(b => {
              // total path approx: diagonal + horizontal
              const totalPx    = b.rise * Math.SQRT2 + (b.run - b.rise);
              const duration   = 0.25 + totalPx / 600;
              const delay      = reach(b.ox) + 0.05;
              return (
                <AnimPath
                  key={b.id}
                  id={`branch-${b.id}`}
                  d={branchPath(b)}
                  stroke={b.color}
                  width={1.3}
                  delay={delay}
                  duration={duration}
                  isInView={isInView}
                  cycle={cycle}
                />
              );
            })}

            {/* ── main-line dots ───────────────────────────────── */}
            {mainDots.map(x => (
              <Dot
                key={x} id={`md-${x}`}
                cx={x} cy={MY} r={4}
                fill="#00c8c8"
                delay={reach(x) + 0.05}
                isInView={isInView}
                cycle={cycle}
              />
            ))}

            {/* ── branch tip dots ──────────────────────────────── */}
            {branches.map(b => {
              const { x, y } = labelPos(b);
              const tipDelay = reach(b.ox) + 0.25 + 0.5; // after branch finishes drawing
              return (
                <Dot
                  key={`tip-${b.id}`}
                  id={`tip-${b.id}`}
                  cx={x} cy={y} r={4}
                  fill="white"
                  delay={tipDelay}
                  isInView={isInView}
                  cycle={cycle}
                />
              );
            })}
          </svg>

          {/* ── "main" label (far left, on the line) ─────────────── */}
          <motion.div
            key={`lbl-main-${cycle}`}
            className="absolute font-mono text-[13px] text-[#00c8c8] tracking-tight"
            style={{ left: "2%", top: `${(MY / VH) * 100}%`, transform: "translateY(-50%)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: MAIN_DELAY }}
          >
            main
          </motion.div>

          {/* ── branch labels ─────────────────────────────────────── */}
          {branches.map(b => {
            const { x, y } = labelPos(b);
            const xPct = (x / VW) * 100;
            const yPct = (y / VH) * 100;
            const labelDelay = reach(b.ox) + 0.6;
            const nudgeY = b.dir === "up" ? "-130%" : "30%";

            return (
              <motion.div
                key={`lbl-${b.id}-${cycle}`}
                className="absolute font-mono text-[12px] tracking-tight whitespace-nowrap pointer-events-none"
                style={{
                  left: `${xPct}%`,
                  top: `${yPct}%`,
                  transform: `translate(-100%, ${nudgeY})`,
                  color: b.color,
                }}
                initial={{ opacity: 0, x: 6 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 6 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: labelDelay }}
              >
                {b.label}
              </motion.div>
            );
          })}

          {/* ── "Start" node label ───────────────────────────────── */}
          <motion.div
            key={`start-node-${cycle}`}
            className="absolute"
            style={{
              left: `${(40 / VW) * 100}%`,
              top: `${(MY / VH) * 100}%`,
              transform: "translate(-50%, calc(-100% - 12px))",
            }}
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.35, delay: MAIN_DELAY + 0.1 }}
          >
            <span className="font-mono text-[12px] text-[#00c8c8]/80">Start</span>
          </motion.div>

          {/* ── commit hash labels on main nodes ─────────────────── */}
          {mainDots.slice(1, -1).map((x, i) => {
            const labels = ["v0.1", "auth", "tools", "tmpl", "v1.0"];
            return (
              <motion.div
                key={`hash-${i}-${cycle}`}
                className="absolute font-mono text-[10px] text-white/30 whitespace-nowrap pointer-events-none"
                style={{
                  left: `${(x / VW) * 100}%`,
                  top: `${(MY / VH) * 100}%`,
                  transform: "translate(-50%, calc(100% + 8px))",
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: reach(x) + 0.2 }}
              >
                {labels[i]}
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="#"
            className="bg-gradient-to-b from-white/95 to-white/85 text-[#191a1f] font-semibold text-[13.9px] tracking-[-0.28px] px-8 h-[40px] rounded-[6px] flex items-center shadow-[0px_2px_14px_0px_rgba(255,255,255,0.35)] hover:opacity-90 transition-opacity"
          >
            Start Now
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
