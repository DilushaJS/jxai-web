'use client';

import { motion, type Variants } from 'framer-motion';

import ToolsGrid from './ui/ToolsGrid';

const headerVariants: Variants = {
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

export default function ToolsSection() {
  return (
    <section className="w-full bg-[#010101]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-360
          flex-col

          gap-10
          px-5
          py-16

          sm:gap-12
          sm:px-8
          sm:py-20

          md:px-10

          lg:gap-16
          lg:px-12
          lg:py-20

          xl:px-20
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="
            flex
            max-w-237.5
            flex-col
            items-start
            gap-2.5
          "
        >
          {/* Tools label */}
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

                font-['Inter']
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
              Tools
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-1

              font-['Space_Grotesk']
              text-[38px]
              font-bold
              leading-11
              tracking-normal
              text-white

              sm:text-[48px]
              sm:leading-13.5

              md:text-[56px]
              md:leading-15.5

              lg:text-[64px]
              lg:leading-17.5
            "
          >
            Why Choose JX AI
          </h2>

          {/* Description */}
          <p
            className="
              max-w-190

              font-['Inter']
              text-[13px]
              font-normal
              leading-5
              tracking-[-0.4px]
              text-[#FFFFFFB2]

              sm:text-[14px]
              sm:leading-5.25

              lg:text-[15.9px]
              lg:leading-[19.2px]
              lg:tracking-[-0.8px]
            "
          >
            Everything you need to go from idea to running automation, without
            stitching together half a dozen products.
          </p>
        </motion.div>

        {/* ============================================================
            TOOLS GRID
        ============================================================ */}
        <ToolsGrid />
      </div>
    </section>
  );
}