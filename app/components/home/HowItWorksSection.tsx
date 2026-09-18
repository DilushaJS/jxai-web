'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  type Variants,
} from 'framer-motion';

import { HowItWorksDiagram } from './HowItWorksDiagram';

/* ============================================================
   DIAGRAM LOOP TIMING
============================================================ */

const ANIM_HOLD_MS = 10_500;
const FADE_MS = 1_500;
const PAUSE_MS = 400;

/* ============================================================
   MOTION VARIANTS
============================================================ */

const headerContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const diagramVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   BOTTOM CARDS
============================================================ */

const cards = [
  {
    title: 'Visual Workflow',
    description:
      'Engage visitors in real-time and seamlessly capture high-quality leads with AI-driven interactions.',
  },
  {
    title: 'Visual Workflow',
    description:
      'Engage visitors in real-time and seamlessly capture high-quality leads with AI-driven interactions.',
  },
  {
    title: 'Visual Workflow',
    description:
      'Engage visitors in real-time and seamlessly capture high-quality leads with AI-driven interactions.',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: false,
    margin: '-120px 0px',
  });

  const [animKey, setAnimKey] = useState(0);
  const [fading, setFading] = useState(false);

  /* ============================================================
     CONTINUOUS DIAGRAM LOOP
  ============================================================ */

  useEffect(() => {
    if (!isInView) {
      setFading(true);
      return;
    }

    let cancelled = false;

    let fadeTimer: ReturnType<typeof setTimeout>;
    let restartTimer: ReturnType<typeof setTimeout>;

    const startCycle = () => {
      if (cancelled) return;

      setFading(false);
      setAnimKey((key) => key + 1);

      fadeTimer = setTimeout(() => {
        if (!cancelled) {
          setFading(true);
        }
      }, ANIM_HOLD_MS);

      restartTimer = setTimeout(() => {
        startCycle();
      }, ANIM_HOLD_MS + FADE_MS + PAUSE_MS);
    };

    startCycle();

    return () => {
      cancelled = true;

      clearTimeout(fadeTimer);
      clearTimeout(restartTimer);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#010101]"
    >
      {/* ============================================================
          MAIN CONTAINER
          Figma:
          max-width: 1440px
          padding: 120px
      ============================================================ */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-360
          flex-col
          gap-2.5

          px-5
          py-16

          sm:px-8
          sm:py-20

          md:px-10
          md:py-24

          lg:px-16
          lg:py-28

          xl:px-30
          xl:py-30
        "
      >
        {/* ============================================================
            TOP CONTAINER
        ============================================================ */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="
            mx-auto
            flex
            w-full
            max-w-281
            flex-col
            items-center
            gap-3
            px-px
            text-center
          "
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariants}>
            <div
              className="
                inline-flex
                rounded-full
                bg-[linear-gradient(99.82deg,#F4CA94_11.11%,#99D1EB_99.18%)]
                p-0.5
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-full
                  bg-white

                  px-3
                  py-1.5

                  font-sans
                  text-[11px]
                  font-medium
                  leading-[13.57px]
                  tracking-normal
                  text-[#090F1D]
                  uppercase

                  sm:text-[12px]

                  lg:text-[13.1px]
                "
              >
                How It Works
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              TITLES
          ======================================================== */}

          <motion.div
            variants={fadeUpVariants}
            className="
              flex
              w-full
              flex-col
              items-center
            "
          >
            <h2
              className="
                font-sans

                text-[30px]
                font-semibold
                leading-9.5
                tracking-normal
                text-white

                sm:text-[36px]
                sm:leading-11.5

                md:text-[42px]
                md:leading-14

                lg:text-[49.8px]
                lg:leading-17.5
              "
            >
              Ready to give it a go?
            </h2>

            <h3
              className="
                font-space

                text-[38px]
                font-bold
                leading-11
                tracking-[0.4px]
                text-white

                sm:text-[46px]
                sm:leading-13.5

                md:text-[54px]
                md:leading-15.5

                lg:text-[64px]
                lg:leading-17.5
                lg:tracking-[1.48px]
              "
            >
              Get started in seconds
            </h3>
          </motion.div>
        </motion.div>

        {/* ============================================================
            DIAGRAM
            max-width: 1200px
        ============================================================ */}
        <motion.div
          variants={diagramVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            relative
            mx-auto
            mt-4
            w-full
            max-w-300

            sm:mt-6
            md:mt-8
          "
        >
          {/* Subtle outer glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0

              h-[60%]
              w-[70%]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              bg-[#7C3AED]/2.5
              blur-[100px]
            "
          />

          <motion.div
            animate={{
              opacity: fading ? 0 : 1,
            }}
            transition={{
              duration: FADE_MS / 1000,
              ease: 'easeInOut',
            }}
            className="relative z-1"
          >
            <HowItWorksDiagram
              key={animKey}
              playing={!fading && isInView}
            />
          </motion.div>
        </motion.div>

        {/* ============================================================
            BOTTOM CARDS
            max-width: 1200px
            desktop gap: 108px
        ============================================================ */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mx-auto
            mt-10
            grid
            w-full
            max-w-300
            grid-cols-1

            gap-6

            sm:mt-12
            sm:grid-cols-2
            sm:gap-8

            lg:mt-16
            lg:grid-cols-3
            lg:gap-27
          "
        >
          {cards.map((card, index) => (
            <motion.article
              key={`${card.title}-${index}`}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                overflow-hidden

                px-5
                py-5

                sm:px-6
                sm:py-6

                lg:px-0
                lg:py-0
                lg:pl-8
              "
            >
              {/* ====================================================
                  FUTURISTIC HOVER BACKGROUND
              ==================================================== */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  rounded-2xl

                  border
                  border-white/4

                  bg-white/1.5

                  opacity-100

                  transition-all
                  duration-500

                  group-hover:border-[#C281FF]/20
                  group-hover:bg-[#C281FF]/2.5

                  lg:opacity-0
                  lg:group-hover:opacity-100
                "
              />

              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-16
                  top-1/2

                  size-40

                  -translate-y-1/2

                  rounded-full
                  bg-[#C281FF]/10

                  opacity-0
                  blur-3xl

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />

              {/* Left vertical line */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-6

                  h-10
                  w-0.75

                  bg-white

                  transition-all
                  duration-500

                  group-hover:h-14
                  group-hover:bg-[#C281FF]
                  group-hover:shadow-[0_0_18px_rgba(194,129,255,0.6)]

                  lg:top-0
                "
              />

              {/* Content */}
              <div className="relative z-10">
                <h4
                  className="
                    font-space

                    text-[22px]
                    font-bold
                    leading-7.5
                    text-white

                    transition-transform
                    duration-300

                    group-hover:translate-x-1

                    sm:text-[25px]
                    sm:leading-8.5

                    lg:text-[29.9px]
                    lg:leading-11
                  "
                >
                  {card.title}
                </h4>

                <p
                  className="
                    mt-2
                    max-w-70

                    font-sans
                    text-[14px]
                    font-normal
                    leading-5.5
                    text-white/80

                    sm:text-[15px]
                    sm:leading-6.25

                    lg:text-[17.1px]
                    lg:leading-[29.75px]
                  "
                >
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}