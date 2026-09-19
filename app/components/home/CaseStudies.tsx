'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  motion,
  type Variants,
} from 'framer-motion';

/* ============================================================
   DATA
============================================================ */

const cards = [
  {
    iconImage: '/icons/case-icon1.svg',
    title: 'White-Labeled Multi-Tenant Support',
    description:
      'Effortlessly sync data across multiple tenants with OAuth2-based security, perfect for SaaS builders.',
    image: '/images/case1.svg',
  },
  {
    iconImage: '/icons/case-icon2.svg',
    title: '100+ Connectors',
    description:
      'Integrate with a wide range of data sources with over 100 pre-built connectors.',
    image: '/images/case2.svg',
  },
  {
    iconImage: '/icons/case-icon3.svg',
    title: 'Unified Agentic Search',
    description:
      'Enable powerful, unified search across your workspace data with ease.',
    image: '/images/case3.svg',
  },
];

/* ============================================================
   MOTION
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

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   CARD
============================================================ */

function CaseStudyCard({
  item,
}: {
  item: (typeof cards)[number];
}) {
  return (
    <article
      className="
        group
        relative
        flex
        h-90
        w-77.5
        shrink-0
        flex-col
        justify-between
        overflow-hidden

        rounded-[10px]
        border
        border-white/10
        bg-[#0B0C0F]

        p-4

        transition-[border-color,background-color,box-shadow]
        duration-300

        hover:border-white/15
        hover:bg-[#0D0E12]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]

        sm:h-93.75
        sm:w-95

        lg:h-97.5
        lg:w-[448.33px]
      "
    >
      {/* ========================================================
          CARD TEXT
      ======================================================== */}
      <div className="relative z-10">
        <div
          className="
            mb-3
            flex
            items-center
            gap-2
          "
        >
          <Image
            src={item.iconImage}
            alt=""
            width={16}
            height={16}
            className="size-4 shrink-0"
          />

          <h3
            className="
              font-sans
              text-[14px]
              font-medium
              leading-4.5
              tracking-[-0.5px]
              text-white

              sm:text-[15px]

              lg:text-[15.9px]
              lg:leading-[19.2px]
            "
          >
            {item.title}
          </h3>
        </div>

        <p
          className="
            max-w-[95%]

            font-sans
            text-[13px]
            font-normal
            leading-4.5
            tracking-[-0.4px]
            text-white/60

            sm:text-[14px]
            sm:leading-5

            lg:text-[15.9px]
            lg:leading-[19.2px]
            lg:tracking-[-0.5px]
          "
        >
          {item.description}
        </p>
      </div>

      {/* ========================================================
          CARD IMAGE
      ======================================================== */}
      <div
        className="
          relative
          mt-4
          h-55
          w-full

          sm:h-58.75

          lg:h-62.5
        "
      >
        <Image
          src={item.image}
          alt=""
          fill
          sizes="
            (max-width: 640px) 310px,
            (max-width: 1024px) 380px,
            448px
          "
          className="
            select-none
            object-cover
          "
        />

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-29.5

            bg-linear-to-b
            from-transparent
            to-[#04031C]/35
          "
        />
      </div>
    </article>
  );
}

/* ============================================================
   CARD GROUP
============================================================ */

function CardGroup() {
  return (
    <div
      className="
        flex
        shrink-0

        gap-4
        pr-4

        sm:gap-5
        sm:pr-5

        lg:gap-6
        lg:pr-6
      "
    >
      {cards.map((item) => (
        <CaseStudyCard
          key={item.title}
          item={item}
        />
      ))}
    </div>
  );
}

/* ============================================================
   CASE STUDIES
============================================================ */

export default function CaseStudies() {
  const [isCarouselPaused, setIsCarouselPaused] =
    useState(false);

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#010101]
      "
    >
      {/* ============================================================
          MARQUEE ANIMATION

          CSS animation is used for the infinite track because
          animation-play-state can pause at the exact current
          position and resume without restarting.
      ============================================================ */}
      <style>{`
        @keyframes caseStudiesMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .case-studies-marquee {
          animation: caseStudiesMarquee 30s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .case-studies-marquee {
            animation: none;
          }
        }
      `}</style>

      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-360
          flex-col

          py-16

          sm:py-20

          lg:py-24
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
            mx-auto
            mb-10

            flex
            w-full
            flex-col
            items-center

            gap-2.5

            px-5

            text-center

            sm:px-8

            lg:px-px
          "
        >
          <h2
            className="
              font-space
              font-bold
              tracking-normal
              text-white

              text-[40px]
              leading-11.5

              sm:text-[48px]
              sm:leading-13.5

              md:text-[56px]
              md:leading-15.5

              lg:text-[64px]
              lg:leading-17.5
            "
          >
            Our Case studies
          </h2>

          <p
            className="
              font-sans
              font-normal
              text-white/70

              text-[13px]
              leading-4.75
              tracking-[-0.4px]

              sm:text-[14px]

              lg:text-[15.9px]
              lg:leading-[19.2px]
              lg:tracking-[-0.8px]
            "
          >
            We&apos;ll handle the hard stuff.
          </p>
        </motion.div>

        {/* ============================================================
            INFINITE CASE STUDY MARQUEE

            Hover:
            pauses exactly where it currently is.

            Mouse leave:
            continues from the exact same position.
        ============================================================ */}
        <motion.div
          variants={carouselVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          onMouseEnter={() =>
            setIsCarouselPaused(true)
          }
          onMouseLeave={() =>
            setIsCarouselPaused(false)
          }
          className="
            relative
            w-full
            overflow-hidden
          "
        >
          {/* Left fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20

              w-10

              bg-linear-to-r
              from-[#010101]
              via-[#010101]/80
              to-transparent

              sm:w-20

              lg:w-32
            "
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20

              w-10

              bg-linear-to-l
              from-[#010101]
              via-[#010101]/80
              to-transparent

              sm:w-20

              lg:w-32
            "
          />

          {/* ========================================================
              MOVING TRACK

              Two identical CardGroups create the seamless loop.
          ======================================================== */}
          <div
            className="
              case-studies-marquee
              flex
              w-max
            "
            style={{
              animationPlayState:
                isCarouselPaused
                  ? 'paused'
                  : 'running',
            }}
          >
            <CardGroup />
            <CardGroup />
          </div>
        </motion.div>

        {/* ============================================================
            CTA BUTTON
        ============================================================ */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="
            mt-16
            flex
            justify-center
            px-5
          "
        >
          <button
            type="button"
            className="
              flex
              min-h-9.5
              cursor-pointer
              items-center
              justify-center
              gap-2.5

              rounded-[10px]

              border
              border-[#FFFFFF26]

              bg-[#8C45FF66]

              px-12
              py-1.5

              font-sans
              text-[14px]
              font-normal
              leading-6.5
              tracking-[-0.01em]
              text-white

              shadow-[inset_0_0_6px_3px_#FFFFFF40]

              backdrop-blur-[14px]

              transition-[background-color,border-color,box-shadow]
              duration-300

              hover:border-[#FFFFFF40]
              hover:bg-[#8C45FF80]
              hover:shadow-[inset_0_0_6px_3px_#FFFFFF40,0_0_24px_rgba(140,69,255,0.20)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#8C45FF]/70
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#010101]
            "
          >
            Talk to Founder
          </button>
        </motion.div>
      </div>
    </section>
  );
}