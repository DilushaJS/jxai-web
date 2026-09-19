'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  motion,
  type Variants,
} from 'framer-motion';

import IconStrip from '../common/IconStrip';
import PricingCards from '../common/PricingCards';

/* ============================================================
   MOTION
============================================================ */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
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

const pricingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   HERO
============================================================ */

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#010101]
      "
    >
      {/* ============================================================
          TOP HERO CONTENT
      ============================================================ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="
          relative
          z-10

          mx-auto
          flex
          w-full
          max-w-360
          flex-col
          items-center

          px-4
          pt-8
          pb-12

          text-center

          sm:px-6
          sm:pt-10
          sm:pb-14

          md:pt-12
          md:pb-16

          lg:px-8
          lg:pt-14
          lg:pb-20
        "
      >
        {/* ========================================================
            BACKED BY
        ======================================================== */}
        <motion.div variants={fadeUpVariants}>
          <span
            className="
              inline-flex
              items-center
              justify-center

              rounded-lg

              border
              border-[#171717]

              bg-black/10

              px-3
              py-2

              font-sans
              text-[9px]
              font-normal
              leading-3
              tracking-[-0.6px]
              text-white/60

              backdrop-blur-sm

              sm:px-4
              sm:py-2.5
              sm:text-[10px]

              md:text-[11.8px]
              md:leading-[14.4px]
            "
          >
            Backed by
          </span>
        </motion.div>

        {/* ========================================================
            HEADING CONTENT
        ======================================================== */}
        <div
          className="
            mx-auto
            mt-5

            flex
            w-full
            max-w-212.5
            flex-col
            items-center

            sm:mt-6

            lg:mt-8
          "
        >
          <motion.h1
            variants={fadeUpVariants}
            className="
              font-sans
              font-normal
              tracking-[-0.035em]
              text-white

              text-[34px]
              leading-10

              sm:text-[42px]
              sm:leading-12

              md:text-[50px]
              md:leading-14.5

              lg:text-[56.1px]
              lg:leading-16
            "
          >
            JXAI Pricing
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="
              mt-3
              max-w-155

              font-sans
              font-normal
              text-white/70

              text-[12px]
              leading-4.5
              tracking-[-0.5px]

              sm:mt-4
              sm:text-[13px]

              md:text-[14px]
              md:leading-4.75

              lg:text-[15.9px]
              lg:leading-[19.2px]
              lg:tracking-[-0.8px]
            "
          >
            Empower day to day with Deep Knowledge with all available AI tools.
            <br className="hidden sm:block" />
            Give Users the Experience They Deserve
          </motion.p>

          {/* ======================================================
              CTA BUTTONS
          ====================================================== */}
          <motion.div
            variants={fadeUpVariants}
            className="
              mt-5

              flex
              w-full
              flex-col
              items-center
              justify-center

              gap-2.5

              sm:mt-6
              sm:w-auto
              sm:flex-row
              sm:gap-3
            "
          >
            {/* ====================================================
                START FREE
            ==================================================== */}
            <Link
              href="/dashboard"
              className="
                inline-flex
                min-h-9.5
                w-full
                items-center
                justify-center
                gap-2

                rounded-lg

                px-5
                py-2.5

                font-sans
                text-[12px]
                font-medium
                leading-none
                text-white

                transition-opacity
                duration-200

                hover:opacity-90

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/40

                sm:w-auto
                sm:text-[13px]

                md:text-[13.8px]
              "
              style={{
                background:
                  'linear-gradient(180deg, rgba(69,69,69,0.2) 0%, #1F1F1F 100%)',

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
                className="
                  size-3.5
                  shrink-0

                  sm:size-4
                "
              />
            </Link>

            {/* ====================================================
                CONTACT US
            ==================================================== */}
            <Link
              href="/contact"
              className="
                inline-flex
                min-h-9.5
                w-full
                items-center
                justify-center
                gap-2

                rounded-lg

                px-5
                py-2.5

                font-sans
                text-[12px]
                font-medium
                leading-none
                text-white

                transition-opacity
                duration-200

                hover:opacity-90

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#1249B0]/60

                sm:w-auto
                sm:text-[13px]

                md:text-[13.8px]
              "
              style={{
                background:
                  'linear-gradient(180deg, rgba(51,51,51,0.2) 0%, rgba(31,31,31,0.2) 100%)',

                boxShadow: `
                  0px 0px 0px -1.75px #1249B0A6,
                  0px 0px 0px -3.5px #1249B04D,
                  0px 0.6px 0.6px -1.25px #CCD1D92E inset,
                  0px 2.29px 2.29px -2.5px #CCD1D929 inset,
                  0px 10px 10px -3.75px #CCD1D90F inset,
                  0px 0.6px 1.57px -1.17px #1249B0AD inset,
                  0px 2.29px 5.95px -2.33px #1249B09C inset,
                  0px 10px 26px -3.5px #1249B04D inset,
                  0px -0.8px 0.8px -0.69px #1249B070 inset,
                  0px -2.41px 2.41px -1.38px #1249B06E inset
                `,
              }}
            >
              Contact Us

              <ArrowUpRight
                className="
                  size-3.5
                  shrink-0

                  sm:size-4
                "
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ============================================================
          PRICING AREA

          Gradient applies only behind PricingCards.

          background:
          radial-gradient(
            38.46% 38.46% at 50.04% 61.54%,
            rgba(86, 41, 157, 0) 0%,
            #020103 100%
          )
      ============================================================ */}
      <motion.div
        variants={pricingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="
          relative
          w-full
          overflow-hidden

          bg-[radial-gradient(38.46%_38.46%_at_50.04%_61.54%,rgba(86,41,157,0)_0%,#020103_100%)]

          py-8

          sm:py-10

          md:py-12

          lg:py-14
        "
      >
        {/* ========================================================
            CENTER PURPLE GLOW
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute

            left-1/2
            top-[58%]

            h-[70%]
            w-[75%]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#56299D]/8

            blur-[90px]

            sm:w-[60%]
            sm:blur-[110px]

            md:w-[50%]

            lg:h-[75%]
            lg:w-[38%]
            lg:blur-[180px]
          "
        />

        {/* ========================================================
            PRICING CARDS
        ======================================================== */}
        <div
          className="
            relative
            z-10

            mx-auto
            w-full
            max-w-360
          "
        >
          <PricingCards />
        </div>
      </motion.div>

      {/* ============================================================
          ICON STRIP
      ============================================================ */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-20
          w-full
          bg-[#010101]
        "
      >
        <IconStrip />
      </motion.div>
    </section>
  );
}