'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  type Variants,
} from 'framer-motion';
import {
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';

/* ============================================================
   TESTIMONIAL DATA
============================================================ */

const testimonials = [
  {
    id: 1,
    review:
      'This product has completely transformed how I manage my projects and deadlines',
    name: 'Talia Taylor',
    title: 'Digital Marketing Director @ Quantum',
    organization: '@Quantum',
    image: '/images/avatars/talia-taylor.svg',
  },
  {
    id: 2,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'John Doe',
    title: 'Software Engineer @ TechCorp',
    organization: '@TechCorp',
    image: '/images/avatars/avatar-placeholder.png',
  },

  /*
   * Add more testimonials here later.
   *
   * {
   *   id: 2,
   *   review: '...',
   *   name: '...',
   *   title: '...',
   *   organization: '...',
   *   image: '/images/avatars/...',
   * },
   */
];

/* ============================================================
   SECTION MOTION
============================================================ */

const headerVariants: Variants = {
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

const carouselVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
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
   TESTIMONIAL CHANGE ANIMATION
============================================================ */

const testimonialVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 45 : -45,
    filter: 'blur(6px)',
  }),

  center: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -45 : 45,
    filter: 'blur(6px)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

/* ============================================================
   ARROW BUTTON
============================================================ */

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right';
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon =
    direction === 'left'
      ? IconChevronLeft
      : IconChevronRight;

  return (
    <button
      type="button"
      aria-label={
        direction === 'left'
          ? 'Previous testimonial'
          : 'Next testimonial'
      }
      disabled={disabled}
      onClick={onClick}
      className="
        group

        flex
        size-[60px]
        shrink-0
        items-center
        justify-center

        rounded-full
        bg-white
        p-[10px]

        shadow-[0_8px_30px_rgba(0,0,0,0.18)]

        transition-[background-color,box-shadow]
        duration-300

        enabled:cursor-pointer
        enabled:hover:bg-white/90
        enabled:hover:shadow-[0_10px_40px_rgba(0,0,0,0.28)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#C281FF]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#010101]

        disabled:cursor-default
        disabled:opacity-60
      "
    >
      <Icon
        size={40}
        stroke={3}
        className="
          size-10
          text-[#516869]

          transition-colors
          duration-300

          group-enabled:group-hover:text-[#33242F]
        "
      />
    </button>
  );
}

/* ============================================================
   CLIENTS SECTION
============================================================ */

export default function ClientsSection() {
  const [[activeIndex, direction], setActive] =
    useState<[number, number]>([0, 0]);

  const hasMultipleTestimonials =
    testimonials.length > 1;

  const testimonial =
    testimonials[activeIndex];

  const paginate = (
    nextDirection: number,
  ) => {
    if (!hasMultipleTestimonials) return;

    const nextIndex =
      (activeIndex +
        nextDirection +
        testimonials.length) %
      testimonials.length;

    setActive([
      nextIndex,
      nextDirection,
    ]);
  };

  return (
    <section className="w-full bg-[#010101]">
      {/* ============================================================
          MAIN CONTAINER
          max-width: 1440px

          Desktop visual padding:
          top: 80px
          left/right: 120px
          bottom: 80px
      ============================================================ */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden

          pt-16

          sm:pt-20
        "
      >
        {/* ============================================================
            TOP CONTAINER
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
            relative
            z-20

            mx-auto
            flex
            w-full
            max-w-[1126px]
            flex-col
            items-center

            gap-2.5

            px-5

            text-center

            sm:px-8

            lg:px-12

            xl:px-px
          "
        >
          {/* Heading */}
          <h2
            className="
              font-space
              font-bold
              tracking-normal
              text-white

              text-[40px]
              leading-[46px]

              sm:text-[48px]
              sm:leading-[54px]

              md:text-[56px]
              md:leading-[62px]

              lg:text-[64px]
              lg:leading-[70px]
            "
          >
            Our clients
          </h2>

          {/* Description */}
          <p
            className="
              max-w-[650px]

              font-sans
              font-normal
              text-white/70

              text-[13px]
              leading-[19px]
              tracking-[-0.4px]

              sm:text-[14px]

              lg:text-[15.9px]
              lg:leading-[19.2px]
              lg:tracking-[-0.8px]
            "
          >
            Hear firsthand how our
            solutions have boosted online
            success for users like you.
          </p>
        </motion.div>

        {/* ============================================================
            LOWER AREA

            Pattern starts immediately below header and continues
            all the way to the end of the section.

            80px internal top spacing creates the Figma gap between
            header and testimonial carousel.
        ============================================================ */}
        <div
          className="
            relative
            w-full

            pt-12
            pb-16

            sm:pt-16
            sm:pb-20

            lg:pt-20
          "
        >
          {/* ========================================================
              SQUARE BACKGROUND PATTERN
              12 × 12 square
              4px space
              16px repeating cell
          ======================================================== */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0

              opacity-100

              [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2016%2016%22%3E%3Crect%20width=%2212%22%20height=%2212%22%20rx=%222%22%20fill=%22%232F2F2F%22%20fill-opacity=%220.2%22/%3E%3C/svg%3E')]
              [background-repeat:repeat]
            "
          />

          {/* Subtle top fade into pattern */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-[1]
              h-24

              bg-gradient-to-b
              from-[#010101]
              to-transparent
            "
          />

          {/* Subtle bottom fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-[1]
              h-20

              bg-gradient-to-t
              from-[#010101]
              to-transparent
            "
          />

          {/* ========================================================
              CAROUSEL
              max-width: 1142px

              Desktop:
              60px button
              80px gap
              862px card
              80px gap
              60px button
          ======================================================== */}
          <motion.div
            variants={carouselVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative
              z-10

              mx-auto
              w-full
              max-w-[1142px]

              px-5

              sm:px-8

              lg:px-12

              xl:grid
              xl:grid-cols-[60px_minmax(0,862px)_60px]
              xl:items-center
              xl:gap-20
              xl:px-0
            "
          >
            {/* ====================================================
                DESKTOP LEFT BUTTON
            ==================================================== */}
            <div className="hidden xl:flex">
              <ArrowButton
                direction="left"
                disabled={
                  !hasMultipleTestimonials
                }
                onClick={() => paginate(-1)}
              />
            </div>

            {/* ====================================================
                TESTIMONIAL CARD

                Outer wrapper = gradient border ONLY
                Inner = actual card background
            ==================================================== */}
            <div
              className="
                relative
                w-full

                rounded-[24px]

                bg-[linear-gradient(209.98deg,#60485B_0.03%,#2B212F_45.28%,#4B3A65_98.07%)]

                p-px
              "
            >
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[23px]

                  bg-[linear-gradient(20.46deg,#261C36_0.85%,#1B1420_47.98%,#33242F_97.92%)]

                  p-5

                  sm:p-6

                  md:p-8
                "
              >
                {/* ==================================================
                    ELLIPSE FLARE

                    Desktop position is approximately the midpoint
                    between the text column and avatar.

                    Bottom extends ~16% outside the card.
                ================================================== */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute

                    -bottom-[16%]
                    left-1/2

                    z-0

                    size-[180px]

                    -translate-x-1/2

                    rounded-full

                    bg-[linear-gradient(180deg,rgba(45,12,81,0.6)_0%,rgba(168,90,255,0.6)_50.48%,rgba(232,175,151,0.6)_72.6%)]

                    blur-[30px]
                    backdrop-blur-[151.49356079101562px]

                    sm:size-[212px]

                    lg:left-[69%]
                  "
                />

                {/* ==================================================
                    ACTIVE TESTIMONIAL
                ================================================== */}
                <AnimatePresence
                  mode="wait"
                  initial={false}
                  custom={direction}
                >
                  <motion.div
                    key={testimonial.id}
                    custom={direction}
                    variants={
                      testimonialVariants
                    }
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="
                      relative
                      z-10

                      flex
                      flex-col
                      items-center

                      gap-8

                      md:flex-row
                      md:justify-between

                      lg:gap-16
                    "
                  >
                    {/* ==============================================
                        LEFT TEXT
                    ============================================== */}
                    <div
                      className="
                        flex
                        w-full
                        max-w-[517px]
                        flex-col

                        gap-4

                        text-center

                        md:text-left
                      "
                    >
                      {/* Review */}
                      <p
                        className="
                          font-sans
                          font-medium
                          tracking-normal
                          text-white

                          text-[18px]
                          leading-[25px]

                          sm:text-[20px]
                          sm:leading-[27px]

                          lg:text-[24px]
                          lg:leading-[29.6px]
                        "
                      >
                        “{testimonial.review}”
                      </p>

                      {/* Person info */}
                      <div className="flex flex-col">
                        <p
                          className="
                            font-sans
                            font-bold
                            text-[#CFCDD6]

                            text-[15px]
                            leading-[25px]

                            sm:text-[16px]
                            sm:leading-[27px]

                            lg:text-[18px]
                            lg:leading-[29.6px]
                          "
                        >
                          {testimonial.name}
                        </p>

                        <p
                          className="
                            font-sans
                            font-light
                            text-[#CFCDD6]

                            text-[15px]
                            leading-[25px]

                            sm:text-[16px]
                            sm:leading-[27px]

                            lg:text-[18px]
                            lg:leading-[29.6px]
                          "
                        >
                          {testimonial.title}
                        </p>

                        <p
                          className="
                            font-sans
                            font-bold
                            text-[#C281FF]

                            text-[15px]
                            leading-[25px]

                            sm:text-[16px]
                            sm:leading-[27px]

                            lg:text-[18px]
                            lg:leading-[29.6px]
                          "
                        >
                          {
                            testimonial.organization
                          }
                        </p>
                      </div>
                    </div>

                    {/* ==============================================
                        RIGHT IMAGE
                    ============================================== */}
                    <div
                      className="
                        relative
                        shrink-0
                        overflow-hidden

                        rounded-[20px]

                        size-[160px]

                        sm:size-[190px]

                        lg:size-[217px]
                      "
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="
                          (max-width: 640px) 160px,
                          (max-width: 1024px) 190px,
                          217px
                        "
                        className="
                          select-none
                          object-cover
                        "
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ====================================================
                DESKTOP RIGHT BUTTON
            ==================================================== */}
            <div className="hidden xl:flex">
              <ArrowButton
                direction="right"
                disabled={
                  !hasMultipleTestimonials
                }
                onClick={() => paginate(1)}
              />
            </div>

            {/* ====================================================
                MOBILE / TABLET CONTROLS

                Desktop arrows move to the left/right sides.
            ==================================================== */}
            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-4

                xl:hidden
              "
            >
              <ArrowButton
                direction="left"
                disabled={
                  !hasMultipleTestimonials
                }
                onClick={() => paginate(-1)}
              />

              <ArrowButton
                direction="right"
                disabled={
                  !hasMultipleTestimonials
                }
                onClick={() => paginate(1)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}