'use client';

import {
  motion,
  type Variants,
} from 'framer-motion';

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

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   WAITLIST CTA
============================================================ */

export default function WaitlistCTA() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#010101]

        px-4
        py-4

        sm:px-6
        sm:py-8

        lg:px-8
        lg:py-20
      "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          group/card
          relative

          mx-auto

          flex
          h-80
          w-full
          max-w-300
          items-center
          justify-center

          overflow-hidden

          rounded-lg

          border
          border-white/20

          bg-[#010101]

          transition-[border-color,box-shadow]
          duration-500

          hover:border-[#C281FF]/45
          hover:shadow-[0_0_60px_rgba(140,69,255,0.10)]

          sm:h-100
          sm:rounded-[10px]

          lg:h-139.5
          lg:rounded-xl
        "
      >
        {/* ========================================================
            BASE BACKGROUND
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0

            bg-[linear-gradient(180deg,#17101C_0%,#080609_50%,#010101_100%)]
          "
        />

        {/* ========================================================
            GRID PATTERN
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-1

            opacity-70

            bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]
            bg-size-[110px_100px]
          "
        />

        {/* ========================================================
            NEW FLARE

            Requested:
            linear-gradient(
              180.03deg,
              rgba(140, 69, 255, 0.49) 35.95%,
              rgba(232, 175, 151, 0.49) 99.97%
            )
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -top-24
            left-1/2
            z-2

            h-48
            w-[115%]

            -translate-x-1/2

            rounded-[50%]

            bg-[linear-gradient(180.03deg,rgba(140,69,255,0.49)_35.95%,rgba(232,175,151,0.49)_99.97%)]

            opacity-90
            blur-3xl

            transition-[opacity,transform]
            duration-700

            group-hover/card:scale-[1.03]
            group-hover/card:opacity-100

            sm:-top-28
            sm:h-56

            lg:-top-32
            lg:h-64
          "
        />

        {/* Sharper flare core */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -top-10
            left-1/2
            z-2

            h-24
            w-[88%]

            -translate-x-1/2

            rounded-[50%]

            bg-[linear-gradient(180.03deg,rgba(140,69,255,0.34)_35.95%,rgba(232,175,151,0.34)_99.97%)]

            blur-2xl

            transition-opacity
            duration-500

            group-hover/card:opacity-100
          "
        />

        {/* ========================================================
            TOP LIGHT EDGE
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[8%]
            top-0
            z-3

            h-px

            bg-linear-to-r
            from-transparent
            via-[#D8AEFF]/80
            to-transparent
          "
        />

        {/* ========================================================
            BOTTOM VIGNETTE
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-3

            h-1/2

            bg-linear-to-t
            from-[#010101]
            via-[#010101]/80
            to-transparent
          "
        />

        {/* ========================================================
            SIDE VIGNETTES
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-3

            w-1/5

            bg-linear-to-r
            from-[#010101]/70
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
            z-3

            w-1/5

            bg-linear-to-l
            from-[#010101]/70
            to-transparent
          "
        />

        {/* ========================================================
            HOVER SHEEN
        ======================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-1/3
            z-4

            w-1/4

            -skew-x-12

            bg-linear-to-r
            from-transparent
            via-white/5
            to-transparent

            transition-transform
            duration-1000
            ease-out

            group-hover/card:translate-x-[650%]
          "
        />

        {/* ========================================================
            CONTENT
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

            px-5

            text-center

            sm:px-8

            lg:px-12
          "
        >
          {/* ====================================================
              HEADING
          ==================================================== */}
          <motion.h2
            variants={fadeUpVariants}
            className="
              max-w-180

              font-sans
              font-medium
              tracking-[-0.015em]
              text-white

              text-[28px]
              leading-9

              sm:text-[40px]
              sm:leading-12.5

              lg:text-[56px]
              lg:leading-16.25
            "
          >
            All AI Tools in One Place
            <br className="hidden xs:block" />
            <span className="block">
              for everyone.
            </span>
          </motion.h2>

          {/* ====================================================
              FORM
          ==================================================== */}
          <motion.form
            variants={formVariants}
            onSubmit={(event) =>
              event.preventDefault()
            }
            className="
              group/form
              relative

              mt-6

              flex
              w-full
              max-w-100.25
              flex-col

              gap-2

              rounded-lg

              border
              border-white/20

              bg-black/15

              p-1

              backdrop-blur-md

              transition-[border-color,background-color,box-shadow]
              duration-300

              focus-within:border-[#C281FF]/70
              focus-within:bg-[#100B15]/50
              focus-within:shadow-[0_0_30px_rgba(140,69,255,0.14)]

              sm:mt-8
              sm:flex-row
              sm:items-center
              sm:gap-0

              lg:mt-8
            "
          >
            {/* Input glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                rounded-lg

                bg-[radial-gradient(circle_at_20%_50%,rgba(140,69,255,0.12),transparent_45%)]

                opacity-0

                transition-opacity
                duration-300

                group-focus-within/form:opacity-100
              "
            />

            <label
              htmlFor="waitlist-email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="waitlist-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email"
              className="
                relative
                z-10

                h-11
                min-w-0
                flex-1

                rounded-md

                bg-transparent

                px-3

                font-sans
                text-sm
                font-normal
                leading-5.5
                tracking-[-0.01em]
                text-white

                outline-none

                placeholder:text-white/50

                sm:h-11.25
                sm:px-4
                sm:text-[15px]
                sm:leading-6

                lg:h-12.25
                lg:text-base
                lg:leading-6.5
              "
            />

            {/* ==================================================
                JOIN BUTTON
            ================================================== */}
            <button
              type="submit"
              className="
                group/button
                relative
                z-10

                flex
                h-10
                w-full
                shrink-0
                cursor-pointer
                items-center
                justify-center

                overflow-hidden

                rounded-md

                bg-white

                px-3.5

                font-sans
                text-sm
                font-medium
                leading-6
                tracking-[-0.01em]
                text-black

                shadow-[0_0_16px_rgba(255,255,255,0.10)]

                transition-[background-color,box-shadow]
                duration-300

                hover:bg-[#F7F2FF]
                hover:shadow-[0_0_24px_rgba(194,129,255,0.25)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C281FF]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#161018]

                sm:h-9.75
                sm:w-27

                lg:h-10.25
                lg:w-28.5
                lg:px-3.75
                lg:text-[15px]
                lg:leading-7.75
              "
            >
              {/* Button sheen */}
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
                  via-[#C281FF]/15
                  to-transparent

                  transition-transform
                  duration-500

                  group-hover/button:translate-x-[500%]
                "
              />

              <span className="relativec text-[15px] z-10">
                Join waitlist
              </span>
            </button>
          </motion.form>

          {/* ====================================================
              FOOTER
          ==================================================== */}
          <motion.p
            variants={fadeUpVariants}
            className="
              mt-4

              font-sans
              text-[12px]
              font-normal
              leading-5
              tracking-[-0.01em]
              text-white/50

              sm:mt-5
              sm:text-sm
              sm:leading-5.5

              lg:mt-6
              lg:text-base
              lg:leading-6.5
            "
          >
            No credit card required
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}