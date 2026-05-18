"use client";
import { motion } from "framer-motion";

// ─── Loop timing ──────────────────────────────────────────────────────────────
// Full animation sequence ends ~9.5 s after GLOW_DELAY.
// We hold for a beat, fade to black over FADE_MS, then restart.
const ANIM_HOLD_MS = 10_500; // wait after sequence finishes before fade-out
const FADE_MS      = 1_500;  // cross-fade to black duration (must match motion transition)
const PAUSE_MS     = 400;    // brief black pause before re-mount

// ─── Assets ──────────────────────────────────────────────────────────────────
const imgIcon = "https://www.figma.com/api/mcp/asset/5b68c1c6-5349-45b8-8a85-5fb3de180a60";

// ─── SVG coordinate space ─────────────────────────────────────────────────────
const W = 1125;   // viewBox width
const H = 660;    // viewBox height
const MY = 406;   // y of the main timeline line

// ─── Animation timing ─────────────────────────────────────────────────────────
const GLOW_DUR   = 9;    // seconds for glow to travel full width
const GLOW_DELAY = 0.5;  // initial pause before glow starts

/** Returns the delay (seconds) at which an element at SVG x-coordinate `x` should reveal */
function at(x: number, offset = 0): number {
  return GLOW_DELAY + (x / W) * GLOW_DUR + offset;
}

// ─── Reusable animated SVG path ───────────────────────────────────────────────
interface AnimPathProps {
  d: string;
  stroke: string;
  strokeWidth?: number;
  dashArray?: string;
  delay: number;
  duration?: number;
  playing: boolean;
}
function AnimPath({
  d, stroke, strokeWidth = 1.2, dashArray = "5 5",
  delay, duration = 0.9, playing,
}: AnimPathProps) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={dashArray}
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={playing
        ? { pathLength: 1, opacity: 1 }
        : { pathLength: 0, opacity: 0 }}
      transition={{
        pathLength: { duration, delay, ease: "easeInOut" },
        opacity:    { duration: 0.8, delay },
      }}
    />
  );
}

// ─── Teal checkmark dot ───────────────────────────────────────────────────────
function Check({ cx, cy, delay, playing }: { cx: number; cy: number; delay: number; playing: boolean }) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={playing ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeIn" }}
      style={{ originX: `${cx}px`, originY: `${cy}px` }}
    >
      {/* Soft bloom behind dot */}
      <circle cx={cx} cy={cy} r={14} fill="rgba(6,192,202,0.07)" />
      <circle cx={cx} cy={cy} r={7} fill="#06c0ca" fillOpacity={0.80} />
      <path
        d={`M ${cx - 3.5} ${cy + 0.5} l 2.5 2.5 l 4.5 -4.5`}
        stroke="#010101"
        strokeWidth={1.6}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.g>
  );
}

// ─── Teal node on main line ───────────────────────────────────────────────────
function TealNode({ cx, delay, playing }: { cx: number; delay: number; playing: boolean }) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={playing ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 20, delay }}
      style={{ originX: `${cx}px`, originY: `${MY}px` }}
    >
      {/* Ambient pulse ring */}
      <motion.circle
        cx={cx} cy={MY} r={10}
        fill="none"
        stroke="#06c0ca"
        strokeWidth={0.8}
        strokeOpacity={0.2}
        animate={playing ? { scale: [1, 2.2, 1], opacity: [0.2, 0, 0.2] } : {}}
        transition={{ duration: 3.5, delay: delay + 0.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: `${cx}px`, originY: `${MY}px` }}
      />
      <circle cx={cx} cy={MY} r={3} fill="#06c0ca" fillOpacity={0.75} />
    </motion.g>
  );
}

// ─── Arrow triangles ──────────────────────────────────────────────────────────
function UpArrow({ cx, cy, delay, playing }: { cx: number; cy: number; delay: number; playing: boolean }) {
  return (
    <motion.polygon
      points={`${cx},${cy - 9} ${cx - 8},${cy + 5} ${cx + 8},${cy + 5}`}
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.30)"
      strokeWidth={1.2}
      initial={{ opacity: 0 }}
      animate={playing ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay }}
    />
  );
}
function DownArrow({ cx, cy, delay, playing }: { cx: number; cy: number; delay: number; playing: boolean }) {
  return (
    <motion.polygon
      points={`${cx},${cy + 9} ${cx - 8},${cy - 5} ${cx + 8},${cy - 5}`}
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.30)"
      strokeWidth={1.2}
      initial={{ opacity: 0 }}
      animate={playing ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay }}
    />
  );
}

// ─── Pill label (HTML overlay) ────────────────────────────────────────────────
interface PillProps {
  label: string;
  x: number; y: number;   // SVG-space top-left
  w?: number;             // SVG-space width (optional)
  color: "white" | "teal";
  dir?: "up" | "down";
  delay: number;
  playing: boolean;
}
function Pill({ label, x, y, w, color, dir = "up", delay, playing }: PillProps) {
  const bg  = color === "teal" ? "bg-[#06c0ca]" : "bg-white";
  const txt = color === "teal" ? "text-[#0d0d0d]" : "text-black";
  const dy  = dir === "up" ? -10 : 10;

  const style: React.CSSProperties = {
    left:      `${(x / W) * 100}%`,
    top:       `${(y / H) * 100}%`,
    ...(w ? { width: `${(w / W) * 100}%` } : {}),
  };

  return (
    <motion.div
      className={`absolute flex items-center justify-center ${bg} px-4 py-2 rounded-full shadow-lg`}
      style={style}
      initial={{ opacity: 0, y: dy, scale: 0.94 }}
      animate={playing ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: dy, scale: 0.94 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={`font-mono text-[13px] ${txt} whitespace-nowrap`}>{label}</span>
    </motion.div>
  );
}

// ─── Text label (HTML overlay) ────────────────────────────────────────────────
interface LabelProps {
  text: string;
  x: number; y: number;
  delay: number;
  playing: boolean;
}
function Label({ text, x, y, delay, playing }: LabelProps) {
  return (
    <motion.span
      className="absolute font-mono text-[20px] text-white whitespace-nowrap pointer-events-none"
      style={{
        left:      `${(x / W) * 100}%`,
        top:       `${(y / H) * 100}%`,
        transform: "translateY(-50%)",
      }}
      initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
      animate={playing
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 0, y: 6, filter: "blur(4px)" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HowItWorksDiagram — driven by parent's `playing` prop
// ═══════════════════════════════════════════════════════════════════════════════
export function HowItWorksDiagram({ playing }: { playing: boolean }) {
  // Vertical grid lines
  const gridXs = Array.from({ length: 17 }, (_, i) => (i + 1) * 63);
  // Ruler tick x positions
  const tickXs = Array.from({ length: 15 }, (_, i) => 169 + i * 63);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <div className="absolute inset-0 origin-top scale-[0.8] sm:scale-100 sm:origin-center">
        {/* ══ SVG: all structural elements ══════════════════════════════════════ */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
          {/* Soft diffuse glow — no harsh spotlight */}
          <filter id="twGlow" x="-200%" y="-600%" width="500%" height="1300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" />
          </filter>

          {/* Wide ambient bloom */}
          <filter id="twBloom" x="-200%" y="-800%" width="500%" height="1700%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>

          {/* Spotlight radial gradient (unused but kept for reference) */}
          <radialGradient id="twSpot" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#06c0ca" stopOpacity="0.6" />
            <stop offset="50%"  stopColor="#06c0ca" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06c0ca" stopOpacity="0" />
          </radialGradient>

          {/* Vertical fade gradients (black overlay top/bottom) */}
          <linearGradient id="twFadeTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#010101" stopOpacity="1" />
            <stop offset="42%"  stopColor="#010101" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="twFadeBot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="58%"  stopColor="#010101" stopOpacity="0" />
            <stop offset="100%" stopColor="#010101" stopOpacity="1" />
          </linearGradient>

          {/* Left/right edge fade */}
          <linearGradient id="twFadeLeft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#010101" stopOpacity="0.6" />
            <stop offset="8%"   stopColor="#010101" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="twFadeRight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="92%"  stopColor="#010101" stopOpacity="0" />
            <stop offset="100%" stopColor="#010101" stopOpacity="0.6" />
          </linearGradient>
          </defs>

        {/* ── Background vertical grid ── */}
        {gridXs.map((x) => (
          <line
            key={x}
            x1={x} y1={0} x2={x} y2={H}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
            strokeDasharray="3 12"
          />
        ))}

        {/* ── Ruler ticks above & below main line ── */}
        {tickXs.map((x) => (
          <g key={x}>
            <line x1={x} y1={MY - 22} x2={x} y2={MY - 13} stroke="rgba(255,255,255,0.10)" strokeWidth={1} />
            <line x1={x} y1={MY + 13} x2={x} y2={MY + 22} stroke="rgba(255,255,255,0.10)" strokeWidth={1} />
          </g>
        ))}

        {/* ── Dim base timeline (always visible at low opacity) ── */}
        <line
          x1={0} y1={MY} x2={W} y2={MY}
          stroke="#06c0ca"
          strokeWidth={1}
          strokeOpacity={0.10}
        />

        {/* ── Active line: hairline that reveals left-to-right ── */}
        <motion.path
          d={`M 0 ${MY} L ${W} ${MY}`}
          stroke="#06c0ca"
          strokeWidth={1}
          strokeOpacity={0.55}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={playing ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: GLOW_DUR, delay: GLOW_DELAY, ease: "linear" }}
        />

        {/* ── Glow: outer wide soft cloud ── */}
        <motion.g
          filter="url(#twBloom)"
          initial={{ x: -200 }}
          animate={playing ? { x: W + 200 } : { x: -200 }}
          transition={{ duration: GLOW_DUR, delay: GLOW_DELAY, ease: "linear" }}
        >
          <ellipse cx={0} cy={MY} rx={200} ry={30} fill="rgba(6,192,202,0.07)" />
        </motion.g>

        {/* ── Glow: inner soft diffuse head ── */}
        <motion.g
          filter="url(#twGlow)"
          initial={{ x: -80 }}
          animate={playing ? { x: W + 80 } : { x: -80 }}
          transition={{ duration: GLOW_DUR, delay: GLOW_DELAY, ease: "linear" }}
        >
          <ellipse cx={0} cy={MY} rx={80} ry={12} fill="rgba(6,192,202,0.22)" />
        </motion.g>

        {/* ══ BRANCH PATHS ══════════════════════════════════════════════════════ */}

        {/* Open Dashboard: curves up from x=225 to pill */}
        <AnimPath
          d={`M 225 ${MY} L 225 ${MY - 96} Q 225 256 295 256`}
          stroke="rgba(255,255,255,0.28)"
          delay={at(225, 0.1)}
          duration={1.0}
          playing={playing}
        />

        {/* Vertical trunk: x=524, up toward Login/Signup */}
        <AnimPath
          d={`M 524 ${MY} L 524 130`}
          stroke="rgba(255,255,255,0.22)"
          strokeWidth={1}
          dashArray="4 6"
          delay={at(524)}
          duration={1.1}
          playing={playing}
        />

        {/* Signup horizontal branch */}
        <AnimPath
          d="M 520 182 L 550 182"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth={1}
          dashArray="4 6"
          delay={at(524, 0.35)}
          duration={0.4}
          playing={playing}
        />

        {/* Login horizontal branch */}
        <AnimPath
          d="M 524 146 L 554 146"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth={1}
          dashArray="4 6"
          delay={at(524, 0.55)}
          duration={0.4}
          playing={playing}
        />

        {/* Select Tools connector: horizontal from trunk to pill */}
        <AnimPath
          d="M 440 314 L 524 314"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth={1}
          dashArray="4 6"
          delay={at(480, 0.1)}
          duration={0.5}
          playing={playing}
        />

        {/* Create AI Workflow: from x=787 up then right to pill */}
        <AnimPath
          d={`M 787 ${MY} L 787 296 L 811 296`}
          stroke="rgba(255,255,255,0.28)"
          delay={at(787, 0.1)}
          duration={0.85}
          playing={playing}
        />

        {/* Open Template Gallery: curves down from x=450 */}
        <AnimPath
          d={`M 450 ${MY} L 450 ${MY + 63} Q 450 552 519 552`}
          stroke="rgba(255,255,255,0.28)"
          delay={at(450, 0.1)}
          duration={1.0}
          playing={playing}
        />

        {/* Enter Prompt: vertical down from x=720 */}
        <AnimPath
          d={`M 720 ${MY} L 720 479`}
          stroke="rgba(255,255,255,0.22)"
          strokeWidth={1}
          dashArray="4 6"
          delay={at(720)}
          duration={0.6}
          playing={playing}
        />

        {/* Edit Prompt: continuing down */}
        <AnimPath
          d="M 640 552 L 640 609"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={1}
          dashArray="4 6"
          delay={at(640, 0.55)}
          duration={0.5}
          playing={playing}
        />

        {/* ══ ARROWS ════════════════════════════════════════════════════════════ */}
        <UpArrow   cx={225} cy={MY - 62} delay={at(225, 0.05)} playing={playing} />
        <DownArrow cx={450} cy={MY + 68} delay={at(450, 0.05)} playing={playing} />

        {/* ══ MAIN-LINE TEAL NODES ══════════════════════════════════════════════ */}
        <TealNode cx={225} delay={at(225)}       playing={playing} />
        <TealNode cx={450} delay={at(450)}       playing={playing} />
        <TealNode cx={787} delay={at(787)}       playing={playing} />

        {/* ══ CHECKMARK DOTS ════════════════════════════════════════════════════ */}
        {/* Login */}
        <Check cx={524} cy={146} delay={at(524, 0.65)} playing={playing} />
        {/* Signup */}
        <Check cx={524} cy={182} delay={at(524, 0.45)} playing={playing} />
        {/* Checkpoints on trunk */}
        <Check cx={524} cy={241} delay={at(524, 0.25)} playing={playing} />
        <Check cx={587} cy={241} delay={at(555, 0.25)} playing={playing} />
        <Check cx={650} cy={241} delay={at(590, 0.25)} playing={playing} />
        {/* Near Create AI Workflow */}
        <Check cx={820} cy={296} delay={at(787, 0.35)} playing={playing} />
        {/* Enter Prompt endpoint */}
        <Check cx={720} cy={479} delay={at(720, 0.55)} playing={playing} />

        {/* ── Gray dot for Edit Prompt ── */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={playing ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 22, delay: at(640, 0.75) }}
          style={{ originX: "640px", originY: "609px" }}
        >
          <circle cx={640} cy={609} r={8.5} fill="rgba(255,255,255,0.22)" />
        </motion.g>

          {/* ══ GRADIENT OVERLAYS ═════════════════════════════════════════════════ */}
          <rect x={0}   y={0}   width={W} height={H} fill="url(#twFadeTop)"   />
          <rect x={0}   y={0}   width={W} height={H} fill="url(#twFadeBot)"   />
          <rect x={0}   y={0}   width={W} height={H} fill="url(#twFadeLeft)"  />
          <rect x={0}   y={0}   width={W} height={H} fill="url(#twFadeRight)" />
        </svg>

        {/* ══ HTML OVERLAYS: pills & labels ════════════════════════════════════ */}
        <div className="absolute inset-0 pointer-events-none">

        {/* Start pill — always visible, no animation */}
        <div
          className="absolute pointer-events-auto flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-lg"
          style={{
            left: "0%",
            top: `${(MY / H) * 100}%`,
            transform: "translateY(-50%)",
          }}
        >
          <img alt="" src={imgIcon} style={{ width: 22, height: 22 }} />
          <span className="font-semibold text-[18px] text-black leading-none">Start</span>
        </div>

        {/* ── Pills ── */}
        <Pill
          label="Open Dashboard"
          x={282} y={236} w={200}
          color="white" dir="up"
          delay={at(282, 0.25)}
          playing={playing}
        />
        <Pill
          label="Select Tools"
          x={440} y={296} w={176}
          color="teal" dir="up"
          delay={at(528, 0.1)}
          playing={playing}
        />
        <Pill
          label="Create AI Workflow"
          x={850} y={282}
          color="teal" dir="up"
          delay={at(900, 0.1)}
          playing={playing}
        />
        <Pill
          label="Open Template Gallery"
          x={509} y={534}
          color="white" dir="down"
          delay={at(519, 0.45)}
          playing={playing}
        />

        {/* ── Text labels ── */}
        <Label text="Login"              x={554} y={130} delay={at(554, 0.75)} playing={playing} />
        <Label text="Signup"             x={560} y={165} delay={at(491, 0.55)} playing={playing} />
        <Label text="Start Using Tools"  x={700} y={225} delay={at(808, 0.15)} playing={playing} />
        <Label text="Enter Prompt and Go" x={740} y={480} delay={at(740, 0.55)} playing={playing} />
        <Label text="Edit Prompt"        x={660} y={608} delay={at(660, 0.80)} playing={playing} />
        </div>
      </div>
    </div>
  );
}