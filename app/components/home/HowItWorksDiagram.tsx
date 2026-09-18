'use client';

import { motion } from 'framer-motion';

/* ============================================================
   FIGMA CANVAS
============================================================ */

const W = 1200;
const H = 836;

/* Main timeline from Figma */
const MAIN_X1 = 34.42;
const MAIN_X2 = 1179.65;
const MAIN_Y = 470.4;

/* ============================================================
   ANIMATION
============================================================ */

const FLOW_DURATION = 8.8;
const FLOW_DELAY = 0.45;

function at(x: number, offset = 0) {
  const progress =
    (x - MAIN_X1) / (MAIN_X2 - MAIN_X1);

  return (
    FLOW_DELAY +
    Math.max(0, Math.min(1, progress)) *
      FLOW_DURATION +
    offset
  );
}

/* ============================================================
   GRID
============================================================ */

const GRID_START = 34.23;
const GRID_END = 1177.62;
const GRID_COUNT = 21;

const gridXs = Array.from(
  { length: GRID_COUNT },
  (_, index) =>
    GRID_START +
    index *
      ((GRID_END - GRID_START) /
        (GRID_COUNT - 1)),
);

/*
 * Figma has 6 brighter vertical guides.
 * Every fourth grid line gives almost exactly those locations.
 */
const majorGridIndexes = new Set([
  0, 4, 8, 12, 16, 20,
]);

/* Main-line ruler ticks */
const tickXs = Array.from(
  { length: 18 },
  (_, index) =>
    206.14 +
    index * ((1177.62 - 206.14) / 17),
);

/* ============================================================
   REUSABLE ANIMATED PATH
============================================================ */

type AnimatedPathProps = {
  d: string;
  delay: number;
  playing: boolean;
  stroke?: string;
  strokeWidth?: number;
  dash?: string;
  duration?: number;
};

function AnimatedPath({
  d,
  delay,
  playing,
  stroke = '#693F9B',
  strokeWidth = 1,
  dash = '4 5',
  duration = 0.75,
}: AnimatedPathProps) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={dash}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{
        pathLength: 0,
        opacity: 0,
      }}
      animate={
        playing
          ? {
              pathLength: 1,
              opacity: 1,
            }
          : {
              pathLength: 0,
              opacity: 0,
            }
      }
      transition={{
        pathLength: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          duration: 0.35,
          delay,
        },
      }}
    />
  );
}

/* ============================================================
   CHECK NODE
============================================================ */

type CheckNodeProps = {
  cx: number;
  cy: number;
  delay: number;
  playing: boolean;
  gray?: boolean;
};

function CheckNode({
  cx,
  cy,
  delay,
  playing,
  gray = false,
}: CheckNodeProps) {
  const fill = gray ? '#ABAEBB' : '#693F9B';

  return (
    <motion.g
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={
        playing
          ? {
              opacity: 1,
              scale: 1,
            }
          : {
              opacity: 0,
              scale: 0.5,
            }
      }
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 22,
        delay,
      }}
      style={{
        transformOrigin: `${cx}px ${cy}px`,
      }}
    >
      {/* subtle glow */}
      {!gray && (
        <circle
          cx={cx}
          cy={cy}
          r="13"
          fill="#693F9B"
          opacity="0.08"
        />
      )}

      <circle
        cx={cx}
        cy={cy}
        r="8.7"
        fill={fill}
      />

      {/* check */}
      <path
        d={`
          M ${cx - 3.5} ${cy}
          L ${cx - 1} ${cy + 2.4}
          L ${cx + 4} ${cy - 3}
        `}
        stroke="#010101"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.g>
  );
}

/* ============================================================
   SMALL OUTLINE ANCHOR NODE
============================================================ */

type AnchorNodeProps = {
  cx: number;
  cy: number;
  delay: number;
  playing: boolean;
};

function AnchorNode({
  cx,
  cy,
  delay,
  playing,
}: AnchorNodeProps) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="4"
      fill="#010101"
      stroke="#693F9B"
      strokeWidth="1"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={
        playing
          ? {
              opacity: 1,
              scale: 1,
            }
          : {
              opacity: 0,
              scale: 0,
            }
      }
      transition={{
        type: 'spring',
        stiffness: 380,
        damping: 20,
        delay,
      }}
      style={{
        transformOrigin: `${cx}px ${cy}px`,
      }}
    />
  );
}

/* ============================================================
   ARROW CIRCLES
============================================================ */

type ArrowCircleProps = {
  cx: number;
  cy: number;
  direction: 'up' | 'down';
  delay: number;
  playing: boolean;
};

function ArrowCircle({
  cx,
  cy,
  direction,
  delay,
  playing,
}: ArrowCircleProps) {
  return (
    <motion.g
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={
        playing
          ? {
              opacity: 1,
              scale: 1,
            }
          : {
              opacity: 0,
              scale: 0.8,
            }
      }
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformOrigin: `${cx}px ${cy}px`,
      }}
    >
      <circle
        cx={cx}
        cy={cy}
        r="19.7"
        fill="#020202"
        stroke="#FFFFFF"
        strokeWidth="1"
      />

      {direction === 'up' ? (
        <path
          d={`
            M ${cx} ${cy - 9}
            L ${cx - 9} ${cy + 7}
            L ${cx + 9} ${cy + 7}
            Z
          `}
          fill="#693F9B"
        />
      ) : (
        <path
          d={`
            M ${cx} ${cy + 9}
            L ${cx - 9} ${cy - 7}
            L ${cx + 9} ${cy - 7}
            Z
          `}
          fill="#FFFFFF"
        />
      )}
    </motion.g>
  );
}

/* ============================================================
   ACTION PILL
============================================================ */

type ActionPillProps = {
  x: number;
  y: number;
  width: number;
  label: string;
  variant: 'white' | 'purple';
  delay: number;
  playing: boolean;
};

function ActionPill({
  x,
  y,
  width,
  label,
  variant,
  delay,
  playing,
}: ActionPillProps) {
  const height = 33;

  return (
    <motion.g
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={
        playing
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 8,
            }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={height / 2}
        fill={
          variant === 'white'
            ? '#FFFFFF'
            : 'url(#actionPillGradient)'
        }
      />

      <text
        x={x + width / 2}
        y={y + height / 2 + 0.5}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={
          variant === 'white'
            ? '#000000'
            : '#FFFFFF'
        }
        fontSize="16"
        fontWeight="400"
        style={{
          fontFamily:
            'var(--font-inconsolata), monospace',
        }}
      >
        {label}
      </text>
    </motion.g>
  );
}

/* ============================================================
   TEXT LABEL
============================================================ */

type DiagramLabelProps = {
  x: number;
  y: number;
  text: string;
  delay: number;
  playing: boolean;
};

function DiagramLabel({
  x,
  y,
  text,
  delay,
  playing,
}: DiagramLabelProps) {
  return (
    <motion.text
      x={x}
      y={y}
      fill="#FFFFFF"
      fontSize="24"
      fontWeight="400"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: playing ? 1 : 0,
      }}
      transition={{
        duration: 0.55,
        delay,
      }}
      style={{
        fontFamily:
          'var(--font-inconsolata), monospace',
      }}
    >
      {text}
    </motion.text>
  );
}

/* ============================================================
   START PILL

   Recreated from the SVG you exported from Figma.
============================================================ */

function StartPill() {
  const x = 35.25;
  const y = 444.12;

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width="157.674"
        height="48"
        rx="24"
        fill="#FFFFFF"
      />

      {/* Flag icon from your Figma export */}
      <path
        d="
          M41.3369 27
          C41.3369 27 42.3369 26 45.3369 26
          C48.3369 26 50.3369 28 53.3369 28
          C56.3369 28 57.3369 27 57.3369 27
          V15
          C57.3369 15 56.3369 16 53.3369 16
          C50.3369 16 48.3369 14 45.3369 14
          C42.3369 14 41.3369 15 41.3369 15
          V27
          M41.3369 27
          V34
        "
        stroke="#1E1E1E"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <text
        x="80"
        y="25"
        dominantBaseline="middle"
        fill="#000000"
        fontSize="20"
        fontWeight="600"
        style={{
          fontFamily:
            'var(--font-inter), sans-serif',
        }}
      >
        Start
      </text>
    </g>
  );
}

/* ============================================================
   DIAGRAM
============================================================ */

export function HowItWorksDiagram({
  playing,
}: {
  playing: boolean;
}) {
  return (
    <div
      className="
        w-full
        overflow-x-auto
        overscroll-x-contain
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      {/*
        On very small screens the diagram stays wide enough
        for its text to remain readable and can be swiped.

        Desktop scales naturally to the available 1200px width.
      */}
      <div
        className="
          relative
          min-w-190
          sm:min-w-225
          lg:min-w-0
          lg:w-full
        "
        style={{
          aspectRatio: `${W} / ${H}`,
        }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          className="
            absolute
            inset-0
            h-full
            w-full
            select-none
          "
          aria-hidden="true"
        >
          {/* ====================================================
              DEFINITIONS
          ==================================================== */}

          <defs>
            {/* Purple action pill */}
            <linearGradient
              id="actionPillGradient"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop
                offset="2%"
                stopColor="#37155E"
              />

              <stop
                offset="100%"
                stopColor="#9C6685"
              />
            </linearGradient>

            {/* Top fade */}
            <linearGradient
              id="topFade"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#010101"
                stopOpacity="1"
              />

              <stop
                offset="25%"
                stopColor="#010101"
                stopOpacity="0.9"
              />

              <stop
                offset="55%"
                stopColor="#010101"
                stopOpacity="0"
              />
            </linearGradient>

            {/* Bottom fade */}
            <linearGradient
              id="bottomFade"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="40%"
                stopColor="#010101"
                stopOpacity="0"
              />

              <stop
                offset="82%"
                stopColor="#010101"
                stopOpacity="0.9"
              />

              <stop
                offset="100%"
                stopColor="#010101"
                stopOpacity="1"
              />
            </linearGradient>

            {/* Left edge fade */}
            <linearGradient
              id="leftFade"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="#010101"
                stopOpacity="1"
              />

              <stop
                offset="10%"
                stopColor="#010101"
                stopOpacity="0"
              />
            </linearGradient>

            {/* Right edge fade */}
            <linearGradient
              id="rightFade"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                offset="90%"
                stopColor="#010101"
                stopOpacity="0"
              />

              <stop
                offset="100%"
                stopColor="#010101"
                stopOpacity="1"
              />
            </linearGradient>

            {/* Moving glow */}
            <filter
              id="timelineGlow"
              x="-500%"
              y="-500%"
              width="1000%"
              height="1000%"
            >
              <feGaussianBlur
                stdDeviation="18"
                result="blur"
              />
            </filter>

            {/* Grain / rough fade line */}
            <filter
              id="grainBand"
              x="-20%"
              y="-200%"
              width="140%"
              height="500%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.7"
                numOctaves="2"
                seed="7"
              />

              <feColorMatrix
                type="saturate"
                values="0"
              />

              <feComponentTransfer>
                <feFuncA
                  type="table"
                  tableValues="0 0.22"
                />
              </feComponentTransfer>
            </filter>
          </defs>

          {/* ====================================================
              BACKGROUND GRID
          ==================================================== */}

          {gridXs.map((x, index) => {
            const isMajor =
              majorGridIndexes.has(index);

            return (
              <line
                key={`grid-${index}`}
                x1={x}
                x2={x}
                y1="70"
                y2="766"
                stroke="#FFFFFF"
                strokeWidth={isMajor ? 1 : 0.75}
                strokeOpacity={
                  isMajor ? 0.5 : 0.18
                }
              />
            );
          })}

          {/* ====================================================
              FUZZY HORIZONTAL FADE BANDS
          ==================================================== */}

          <rect
            x="0"
            y="190"
            width={W}
            height="10"
            fill="#FFFFFF"
            opacity="0.17"
            filter="url(#grainBand)"
          />

          <rect
            x="0"
            y="510"
            width={W}
            height="10"
            fill="#FFFFFF"
            opacity="0.17"
            filter="url(#grainBand)"
          />

          {/* ====================================================
              BASE TIMELINE
          ==================================================== */}

          <line
            x1={MAIN_X1}
            y1={MAIN_Y}
            x2={MAIN_X2}
            y2={MAIN_Y}
            stroke="#693F9B"
            strokeWidth="3"
            strokeOpacity="0.26"
          />

          {/* Animated timeline */}
          <motion.path
            d={`
              M ${MAIN_X1} ${MAIN_Y}
              L ${MAIN_X2} ${MAIN_Y}
            `}
            fill="none"
            stroke="#693F9B"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: playing ? 1 : 0,
            }}
            transition={{
              duration: FLOW_DURATION,
              delay: FLOW_DELAY,
              ease: 'linear',
            }}
          />

          {/* ====================================================
              TIMELINE TICKS
          ==================================================== */}

          {tickXs.map((x, index) => {
            const topPurple =
              index === 1 || index === 11;

            const bottomPurple =
              index === 5;

            return (
              <g key={`tick-${index}`}>
                <line
                  x1={x}
                  x2={x}
                  y1="448"
                  y2="461"
                  stroke={
                    topPurple
                      ? '#693F9B'
                      : '#FFFFFF'
                  }
                  strokeWidth="2"
                  strokeOpacity={
                    topPurple ? 1 : 0.43
                  }
                />

                <line
                  x1={x}
                  x2={x}
                  y1="479"
                  y2="492"
                  stroke={
                    bottomPurple
                      ? '#693F9B'
                      : '#FFFFFF'
                  }
                  strokeWidth="2"
                  strokeOpacity={
                    bottomPurple ? 1 : 0.43
                  }
                />
              </g>
            );
          })}

          {/* ====================================================
              OPEN DASHBOARD BRANCH
          ==================================================== */}

          <AnimatedPath
            d="
              M 264.3 444.5
              L 264.3 404
            "
            delay={at(264, 0.05)}
            playing={playing}
          />

          <AnimatedPath
            d="
              M 264.3 364
              L 264.3 350
              C 264.3 330
                286 317
                321 317
            "
            delay={at(264, 0.2)}
            playing={playing}
          />

          <AnchorNode
            cx={264.3}
            cy={444.5}
            delay={at(264)}
            playing={playing}
          />

          <ArrowCircle
            cx={263.92}
            cy={384.07}
            direction="up"
            delay={at(264, 0.12)}
            playing={playing}
          />

          <ActionPill
            x={321.09}
            y={300.12}
            width={203.45}
            label="Open Dashboard"
            variant="white"
            delay={at(321, 0.2)}
            playing={playing}
          />

          {/* Dashboard -> Select tools */}
          <AnimatedPath
            d="
              M 424 333
              L 424 346
              C 424 367
                447 377
                482 377
            "
            stroke="rgba(255,255,255,0.55)"
            delay={at(424, 0.15)}
            playing={playing}
          />

          {/* ====================================================
              LOGIN / SIGNUP / START USING TOOLS
          ==================================================== */}

          <AnimatedPath
            d="
              M 567.6 191.6
              L 567.6 314.5
            "
            delay={at(568, 0.1)}
            playing={playing}
          />

          <AnimatedPath
            d="
              M 524.5 314.5
              L 673.8 314.5
            "
            stroke="#FFFFFF"
            dash=""
            strokeWidth={1}
            delay={at(525, 0.15)}
            duration={0.8}
            playing={playing}
          />

          <CheckNode
            cx={568.2}
            cy={191.6}
            delay={at(568, 0.18)}
            playing={playing}
          />

          <CheckNode
            cx={567.6}
            cy={314.5}
            delay={at(568, 0.3)}
            playing={playing}
          />

          <CheckNode
            cx={620.3}
            cy={314.5}
            delay={at(620, 0.24)}
            playing={playing}
          />

          <CheckNode
            cx={673.8}
            cy={314.6}
            delay={at(674, 0.2)}
            playing={playing}
          />

          <DiagramLabel
            text="Login"
            x={593.84}
            y={218}
            delay={at(568, 0.35)}
            playing={playing}
          />

          <DiagramLabel
            text="Signup"
            x={533.7}
            y={255}
            delay={at(568, 0.45)}
            playing={playing}
          />

          <DiagramLabel
            text="Start Using Tools"
            x={690.37}
            y={323}
            delay={at(674, 0.35)}
            playing={playing}
          />

          {/* ====================================================
              SELECT TOOLS
          ==================================================== */}

          <ActionPill
            x={481.95}
            y={360.39}
            width={179.04}
            label="Select Tools"
            variant="purple"
            delay={at(528, 0.25)}
            playing={playing}
          />

          <AnimatedPath
            d="
              M 661 376.9
              L 704.1 376.9
            "
            stroke="#FFFFFF"
            dash=""
            delay={at(660, 0.15)}
            playing={playing}
          />

          <CheckNode
            cx={704.1}
            cy={376.9}
            delay={at(704, 0.2)}
            playing={playing}
          />

          <AnimatedPath
            d="
              M 704.1 376.9
              C 750 376.9
                773 352
                773 315
            "
            delay={at(704, 0.25)}
            playing={playing}
          />

          {/* ====================================================
              CREATE AI WORKFLOW
          ==================================================== */}

          <AnimatedPath
            d="
              M 835.6 444.1
              L 835.6 369.2
              L 859.4 369.2
            "
            delay={at(836, 0.1)}
            playing={playing}
          />

          <AnchorNode
            cx={835.6}
            cy={444.1}
            delay={at(836)}
            playing={playing}
          />

          <ActionPill
            x={859.42}
            y={352.75}
            width={179.04}
            label="Create AI Workflow"
            variant="purple"
            delay={at(880, 0.12)}
            playing={playing}
          />

          <AnimatedPath
            d="
              M 1038.5 369.2
              L 1082.4 369.2
            "
            stroke="#FFFFFF"
            dash=""
            delay={at(1040, 0.12)}
            playing={playing}
          />

          <CheckNode
            cx={1082.4}
            cy={369.1}
            delay={at(1082, 0.18)}
            playing={playing}
          />

          {/* ====================================================
              OPEN TEMPLATE GALLERY
          ==================================================== */}

          <AnimatedPath
            d="
              M 492.6 470.4
              L 492.6 533
            "
            delay={at(493, 0.08)}
            playing={playing}
          />

          <AnchorNode
            cx={492.6}
            cy={492}
            delay={at(493, 0.12)}
            playing={playing}
          />

          <ArrowCircle
            cx={492.6}
            cy={552.84}
            direction="down"
            delay={at(493, 0.2)}
            playing={playing}
          />

          <AnimatedPath
            d="
              M 492.6 572.5
              C 492.6 599
                515 614.6
                552.1 614.6
            "
            delay={at(493, 0.3)}
            playing={playing}
          />

          <ActionPill
            x={552.06}
            y={598.14}
            width={203.45}
            label="Open Template Gallery"
            variant="white"
            delay={at(560, 0.3)}
            playing={playing}
          />

          {/* ====================================================
              ENTER PROMPT
          ==================================================== */}

          <AnimatedPath
            d="
              M 686 598
              C 686 570
                710 552.2
                751.5 552.2
            "
            delay={at(687, 0.3)}
            playing={playing}
          />

          <CheckNode
            cx={751.45}
            cy={552.2}
            delay={at(751, 0.32)}
            playing={playing}
          />

          <DiagramLabel
            text="Enter Prompt and Go"
            x={766.18}
            y={561}
            delay={at(751, 0.42)}
            playing={playing}
          />

          {/* ====================================================
              EDIT PROMPT
          ==================================================== */}

          <AnimatedPath
            d="
              M 686 631
              L 686 681.9
            "
            stroke="#C7C9D1"
            delay={at(686, 0.48)}
            playing={playing}
          />

          <CheckNode
            cx={686}
            cy={681.9}
            gray
            delay={at(686, 0.62)}
            playing={playing}
          />

          <DiagramLabel
            text="Edit Prompt"
            x={704.4}
            y={691}
            delay={at(686, 0.7)}
            playing={playing}
          />

          {/* ====================================================
              START PILL
          ==================================================== */}

          <StartPill />

          {/* ====================================================
              MOVING PURPLE PLAYHEAD / GLOW
          ==================================================== */}

          <motion.g
            initial={{
              x: MAIN_X1,
              opacity: 0,
            }}
            animate={
              playing
                ? {
                    x: MAIN_X2,
                    opacity: [0, 1, 1, 0],
                  }
                : {
                    x: MAIN_X1,
                    opacity: 0,
                  }
            }
            transition={{
              x: {
                duration: FLOW_DURATION,
                delay: FLOW_DELAY,
                ease: 'linear',
              },
              opacity: {
                duration: FLOW_DURATION,
                delay: FLOW_DELAY,
                times: [0, 0.05, 0.92, 1],
              },
            }}
          >
            <circle
              cx="0"
              cy={MAIN_Y}
              r="32"
              fill="#8D51CC"
              opacity="0.12"
              filter="url(#timelineGlow)"
            />

            <circle
              cx="0"
              cy={MAIN_Y}
              r="4"
              fill="#C281FF"
            />
          </motion.g>

          {/* ====================================================
              EDGE / TOP / BOTTOM FADES

              Keep these LAST so the grid naturally fades
              into the black background like the Figma.
          ==================================================== */}

          <rect
            x="0"
            y="0"
            width={W}
            height="350"
            fill="url(#topFade)"
            pointerEvents="none"
          />

          <rect
            x="0"
            y="480"
            width={W}
            height="356"
            fill="url(#bottomFade)"
            pointerEvents="none"
          />

          <rect
            x="0"
            y="0"
            width="150"
            height={H}
            fill="url(#leftFade)"
            pointerEvents="none"
          />

          <rect
            x={W - 150}
            y="0"
            width="150"
            height={H}
            fill="url(#rightFade)"
            pointerEvents="none"
          />
        </svg>
      </div>
    </div>
  );
}