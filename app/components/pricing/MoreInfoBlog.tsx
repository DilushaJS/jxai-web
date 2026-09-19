'use client';

import Image from 'next/image';
import {
  motion,
  type Variants,
} from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/* ============================================================
   MOTION
============================================================ */

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   MORE INFO BLOG
============================================================ */

export default function MoreInfoBlog() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#010101]
      "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: '-80px',
        }}
        className="
          mx-auto
          flex
          w-full
          max-w-360
          flex-col
          items-center
          gap-2.5

          px-4
          py-16

          sm:px-6
          sm:py-20

          md:px-8
          md:py-24

          lg:px-0
          lg:py-30
        "
      >
        {/* ========================================================
            TOP CONTENT
        ======================================================== */}
        <motion.div
          variants={fadeUpVariants}
          className="
            relative
            z-10

            flex
            w-full
            flex-col
            items-center

            gap-6

            text-center
          "
        >
          {/* ======================================================
              TOP TEXT GROUP
          ====================================================== */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-4
            "
          >
            {/* More Info */}
            <motion.p
              variants={fadeUpVariants}
              className="
                font-(family-name:--font-cal)
                font-semibold
                leading-none
                tracking-widest
                text-white

                text-[20px]

                sm:text-[24px]

                md:text-[28px]

                lg:text-[32px]
              "
            >
              More Info
            </motion.p>

            {/* Main title */}
            <motion.h2
              variants={fadeUpVariants}
              className="
                max-w-242

                font-inter
                font-semibold
                leading-none
                tracking-widest
                text-white

                text-[42px]

                sm:text-[56px]

                md:text-[72px]

                lg:text-[84px]
              "
            >
              Visit Our Blog Page
            </motion.h2>
          </div>

          {/* ======================================================
              DESCRIPTION
          ====================================================== */}
          <motion.p
            variants={fadeUpVariants}
            className="
              max-w-242

              font-(family-name:--font-dm)
              font-light
              leading-[130%]
              tracking-normal
              text-white

              text-[14px]

              sm:text-[16px]

              md:max-w-180
              md:text-[18px]

              lg:max-w-242
              lg:text-[20px]
              lg:leading-none
            "
          >
            As seasoned executives, we&apos;ve had the privilege of
            <br className="hidden md:block" />
            working with a multitude of companies from diverse
            <br className="hidden md:block" />
            backgrounds.
          </motion.p>

          {/* ======================================================
              BLOG BUTTON
          ====================================================== */}
          <motion.a
            variants={fadeUpVariants}
            href="/blog"
            className="
              group/button
              relative

              flex
              h-9.25
              w-36.75
              items-center
              justify-center
              gap-1

              overflow-hidden

              rounded-full

              border
              border-[#C281FF]/20

              bg-[#C281FF]/10

              px-4

              font-(family-name:--font-dm)
              text-[16px]
              font-medium
              leading-none
              tracking-normal
              text-white

              backdrop-blur-[14px]

              transition-[background-color,border-color,box-shadow]
              duration-300

              hover:border-[#C281FF]/55
              hover:bg-[#C281FF]/20
              hover:shadow-[0_0_28px_rgba(194,129,255,0.18),inset_0_0_18px_rgba(194,129,255,0.08)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C281FF]/70
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#010101]
            "
          >
            {/* Subtle inner glow */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_50%_50%,rgba(194,129,255,0.12),transparent_70%)]

                opacity-0

                transition-opacity
                duration-300

                group-hover/button:opacity-100
              "
            />

            {/* Glass sheen */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-1/2

                w-1/3

                -skew-x-12

                bg-linear-to-r
                from-transparent
                via-white/10
                to-transparent

                transition-transform
                duration-500
                ease-out

                group-hover/button:translate-x-[500%]
              "
            />

            <span className="relative z-10">
              Blog Page
            </span>

            <ChevronRight
              aria-hidden="true"
              className="
                relative
                z-10
                size-5
                shrink-0
                text-white

                transition-transform
                duration-300

                group-hover/button:translate-x-0.5
              "
              strokeWidth={2}
            />
          </motion.a>
        </motion.div>

        {/* ========================================================
            VISUAL
        ======================================================== */}
        <motion.div
          variants={imageVariants}
          className="
            group/image
            relative
            mt-2

            w-full
            max-w-360

            overflow-hidden
          "
        >
          {/* Purple ambient glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0

              h-32
              w-1/2

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-[#8C45FF]/10
              blur-3xl

              transition-[opacity,transform]
              duration-700

              group-hover/image:scale-110
              group-hover/image:bg-[#8C45FF]/15
            "
          />

          {/* Image */}
          <Image
            src="/images/pricing/more-info.svg"
            alt=""
            width={1440}
            height={332}
            sizes="100vw"
            className="
              relative
              z-10
              block
              h-auto
              w-full

              select-none

              transition-[filter,opacity]
              duration-700

              group-hover/image:drop-shadow-[0_0_24px_rgba(194,129,255,0.10)]
            "
            draggable={false}
          />

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20

              h-1/3

              bg-linear-to-t
              from-[#010101]
              to-transparent
            "
          />

          {/* Side fades */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20

              w-[12%]

              bg-linear-to-r
              from-[#010101]
              to-transparent
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20

              w-[12%]

              bg-linear-to-l
              from-[#010101]
              to-transparent
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}