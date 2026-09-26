'use client';

import type { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

import PurpleEnergyRing from '../common/PurpleEnergyRing/PurpleEnergyRing';

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ringVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.035,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   GLASS PROMPT LABEL
============================================================ */

type GlassPromptProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function GlassPrompt({
  children,
  className = '',
  delay = 0,
}: GlassPromptProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.025,
      }}
      className={`
        group
        pointer-events-auto
        absolute
        ${className}
      `}
    >
      <div
        className="
          relative
          flex
          items-center
          gap-2.5

          overflow-hidden

          rounded-xl

          border
          border-white/8

          bg-white/10

          p-2.5

          backdrop-blur-[14px]
          backdrop-saturate-150

          transition-[background-color,border-color,box-shadow]
          duration-500
          ease-out

          group-hover:border-[#A77AFF]/25
          group-hover:bg-white/[0.14]

          group-hover:shadow-[
            0_0_0_1px_rgba(167,122,255,0.04),
            0_8px_30px_rgba(0,0,0,0.3),
            0_0_24px_rgba(139,85,232,0.12)
          ]

          after:pointer-events-none
          after:absolute
          after:left-[12%]
          after:right-[12%]
          after:top-0
          after:h-px
          after:bg-linear-to-r
          after:from-transparent
          after:via-white/20
          after:to-transparent
        "
        style={{
          background: '#FFFFFF1A',

          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 8px 24px rgba(0, 0, 0, 0.22)
          `,
        }}
      >
        {/* futuristic moving shine */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-y-[-30%]
            left-[-35%]

            w-[32%]

            -skew-x-18

            bg-linear-to-r
            from-transparent
            via-white/10
            to-transparent

            opacity-0

            transition-all
            duration-700
            ease-out

            group-hover:left-[115%]
            group-hover:opacity-100
          "
        />

        <span
          className="
            relative
            z-10

            block

            text-[9px]
            font-normal
            leading-3
            tracking-[-0.28px]
            text-[#EEEFF1]

            sm:text-[10px]
            sm:leading-3.5

            md:text-[11px]
            md:leading-3.75
          "
          style={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {children}
        </span>
      </div>
    </motion.div>
  );
}

/* ============================================================
   HERO
============================================================ */

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101]">
      <div
        className="
          hero-particle-field
          relative
          mx-auto
          w-full
          max-w-360
          overflow-hidden

          h-170
          sm:h-180
          md:h-195

          lg:h-auto
          lg:aspect-1440/885
        "
      >
        {/* ============================================================
            LAYER 1
            HERO MESH
        ============================================================ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0

            bg-[url('/images/home/hero-mesh.svg')]
            bg-cover
            bg-center
            bg-no-repeat

            lg:bg-size-[100%_100%]
          "
        />

        {/* ============================================================
            LAYER 2
            PURPLE ENERGY RING
        ============================================================ */}

        <motion.div
          variants={ringVariants}
          initial="hidden"
          animate="show"
          className="
            absolute
            left-1/2
            top-[47%]
            z-10

            aspect-square

            w-[clamp(400px,72vw,740px)]

            -translate-x-1/2
            -translate-y-1/2

            md:top-[48%]
          "
        >
          <PurpleEnergyRing className="h-full w-full" />
        </motion.div>

        {/* ============================================================
            LAYER 3
            HERO BACKGROUND ICONS / DECORATIONS

            IMPORTANT:
            Remove the 3 prompt texts from this SVG.
        ============================================================ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-1/2
            top-[47%]
            z-20

            aspect-1289/731

            w-[118%]
            max-w-none

            -translate-x-1/2
            -translate-y-1/2

            bg-[url('/images/home/hero-background.svg')]
            bg-contain
            bg-center
            bg-no-repeat

            sm:w-[108%]

            md:w-full

            lg:top-[48%]
            lg:w-[89.5%]
            lg:max-w-322.25
          "
        />

        {/* ============================================================
            LAYER 3.5
            RESPONSIVE GLASS LABELS
        ============================================================ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-25
          "
        >
          {/* TOP / RIGHT */}
          <GlassPrompt
            delay={0.65}
            className="
              left-1/2
              top-[11%]

              w-33

              -translate-x-1/2

              sm:left-[59%]
              sm:top-[12%]
              sm:w-37.5

              md:left-[60%]
              md:top-[12%]
              md:w-45

              lg:left-[60%]
              lg:top-[10.5%]
            "
          >
            Who seems most unknowledgeable on this topic?
          </GlassPrompt>

          {/* BOTTOM / LEFT */}
          <GlassPrompt
            delay={0.8}
            className="
              left-[5%]
              top-[66%]

              w-29

              sm:left-[10%]
              sm:top-[65%]
              sm:w-31.5

              md:left-[22%]
              md:top-[63%]
              md:w-34

              lg:left-[27%]
              lg:top-[61%]
              lg:w-35
            "
          >
            How does the team fix this problem?
          </GlassPrompt>

          {/* BOTTOM / RIGHT */}
          <GlassPrompt
            delay={0.95}
            className="
              right-[5%]
              top-[71%]

              w-30

              sm:right-[10%]
              sm:top-[70%]
              sm:w-33

              md:right-[19%]
              md:top-[68%]
              md:w-35.75

              lg:right-auto
              lg:left-[61%]
              lg:top-[67%]
              lg:w-37.5
            "
          >
            What was the user&apos;s past few orders?
          </GlassPrompt>
        </div>

        {/* ============================================================
            LAYER 4
            HERO CONTENT
        ============================================================ */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="
            pointer-events-none

            absolute
            inset-0
            z-30

            flex
            flex-col
            items-center
            justify-center

            px-4
            pb-25

            text-center

            sm:px-6
            sm:pb-27.5

            md:px-8
            md:pb-30

            lg:px-10
            lg:pb-26.25
          "
        >
          {/* ========================================================
              BACKED BY
          ======================================================== */}

          <motion.div
            variants={fadeUpVariants}
            className="pointer-events-auto"
          >
            <span
              className="
                inline-flex
                items-center
                justify-center

                rounded-lg

                border
                border-[#171717]

                bg-black/20

                px-3
                py-2

                text-[10px]
                font-normal
                leading-3.5
                tracking-[-0.4px]
                text-white/60

                backdrop-blur-sm

                sm:px-4
                sm:py-2.5
                sm:text-[11px]

                md:text-[11.8px]
                md:leading-[14.4px]
                md:tracking-[-0.6px]
              "
            >
              Backed by
            </span>
          </motion.div>

          {/* ========================================================
              TITLE
          ======================================================== */}

          <motion.h1
            variants={fadeUpVariants}
            className="
              pointer-events-auto

              mt-4

              w-full
              max-w-287.5

              text-[38px]
              font-normal
              leading-[0.98]
              tracking-[-0.045em]
              text-white

              sm:text-[48px]

              md:mt-5
              md:text-[60px]

              lg:text-[72px]

              xl:text-[82px]
            "
          >
            Build your AI workflow
          </motion.h1>

          {/* ========================================================
              DESCRIPTION
          ======================================================== */}

          <motion.p
            variants={fadeUpVariants}
            className="
              pointer-events-auto

              mt-4
              max-w-155

              text-[12px]
              leading-4.5
              tracking-[-0.03em]
              text-white/70

              sm:text-[13px]
              sm:leading-4.75

              md:text-[14px]
              md:leading-5

              lg:text-[15.9px]
              lg:leading-[19.2px]
            "
          >
            Empower day to day with Deep Knowledge with all available AI tools.
            <br className="hidden sm:block" />
            Give Users the Experience They Deserve
          </motion.p>

          {/* ========================================================
              CTA
          ======================================================== */}

          <motion.div
            variants={fadeUpVariants}
            className="
              pointer-events-auto

              mt-6

              flex
              items-center
              justify-center

              sm:mt-7
              md:mt-8
            "
          >
            <Link
              href="/dashboard"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                gap-2

                rounded-lg

                px-4
                py-2.5

                text-[12px]
                font-medium
                leading-none
                text-white

                transition-opacity
                duration-200

                hover:opacity-90

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/50

                sm:px-5
                sm:text-[13px]

                md:text-[13.8px]
              "
              style={{
                background:
                  'linear-gradient(180deg, rgba(69, 69, 69, 0.2) 0%, #1F1F1F 100%)',

                boxShadow: `
                  0px 0.6px 1.57px -1.17px #48588AAD inset,
                  0px 2.29px 5.95px -2.33px #48588A9C inset,
                  0px 10px 26px -3.5px #48588A4D inset,
                  0px 0.6px 0.6px -1.25px #CCD1D92E inset,
                  0px 2.29px 2.29px -2.5px #CCD1D929 inset,
                  0px 10px 10px -3.75px #CCD1D90F inset,
                  0px 0px 0px -1.75px #48588AA6,
                  0px 0px 0px -3.5px #48588A4D,
                  0px -0.8px 0.8px -0.94px #48588A94 inset,
                  0px -2.41px 2.41px -1.88px #48588A8C inset
                `,
              }}
            >
              Start Free

              <Image
                src="/icons/hero/cat.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="size-4 shrink-0"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}