'use client';

import { motion, type Variants } from 'framer-motion';
import PricingCards from '../common/PricingCards';

/* ============================================================
   MOTION
============================================================ */

const sectionVariants: Variants = {
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const pricingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   PRICING SECTION
============================================================ */

export default function PricingSection() {
  return (
    <section className="w-full bg-[#010101]">
      {/* ============================================================
          MAIN CONTAINER

          Desktop:
          max-width: 1440px
          padding: 120px 24px
      ============================================================ */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="
          mx-auto
          flex
          w-full
          max-w-360
          flex-col

          gap-10

          bg-[radial-gradient(38.46%_38.46%_at_50.04%_61.54%,rgba(28,11,49,0.2)_0%,rgba(232,175,151,0.2)_0.01%,rgba(2,1,3,0.2)_100%)]

          px-4
          py-16

          sm:gap-12
          sm:px-6
          sm:py-20

          md:py-24

          lg:px-6
          lg:py-30
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}
        <motion.div
          variants={fadeUpVariants}
          className="
            mx-auto
            flex
            w-full
            flex-col
            items-center

            gap-6

            text-center

            sm:gap-8

            lg:gap-10
          "
        >
          {/* Title */}
          <motion.h2
            variants={fadeUpVariants}
            className="
              font-space
              font-medium
              text-white

              text-[40px]
              leading-11.5
              tracking-[-0.015em]

              sm:text-[48px]
              sm:leading-13.5

              md:text-[56px]
              md:leading-15.25

              lg:text-[64px]
              lg:leading-16.25
            "
          >
            Pricing
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="
              w-full
              max-w-108.25

              font-sans
              font-normal
              text-white

              text-[15px]
              leading-5.75
              tracking-[-0.01em]

              sm:text-[17px]
              sm:leading-6.75

              lg:text-[20px]
              lg:leading-7.75
            "
          >
            Choose the right plan to meet your SEO needs and start optimizing
            today.
          </motion.p>
        </motion.div>

        {/* ============================================================
            PRICING CARDS

            Imported from:
            app/components/common/PricingSection.tsx
        ============================================================ */}
        <motion.div
          variants={pricingVariants}
          className="w-full"
        >
          <PricingCards />
        </motion.div>
      </motion.div>
    </section>
  );
}