'use client';

import Link from 'next/link';
import Image from 'next/image';
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

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101]">
      {/* ============================================================
          HERO STAGE

          Figma desktop:
          1440 × 885
      ============================================================ */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden

          h-[680px]
          sm:h-[720px]
          md:h-[780px]

          lg:h-auto
          lg:aspect-[1440/885]
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

            lg:bg-[length:100%_100%]
          "
        />

        {/* ============================================================
            LAYER 2
            PURPLE ENERGY RING

            Replaces hero-ring.mp4
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
            HERO FOREGROUND / DECORATIONS
        ============================================================ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[47%]
            z-20

            aspect-[1289/731]

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
            lg:max-w-[1289px]
          "
        />

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
            pb-[100px]

            text-center

            sm:px-6
            sm:pb-[110px]

            md:px-8
            md:pb-[120px]

            lg:px-10
            lg:pb-[105px]
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
                leading-[14px]
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
              max-w-[1150px]

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
              max-w-[620px]

              text-[12px]
              leading-[18px]
              tracking-[-0.03em]
              text-white/70

              sm:text-[13px]
              sm:leading-[19px]

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