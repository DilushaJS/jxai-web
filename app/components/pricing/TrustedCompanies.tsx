'use client';

import Image from 'next/image';
import {
  motion,
  type Variants,
} from 'framer-motion';

/* ============================================================
   TYPES
============================================================ */

type Company = {
  name: string;
  logo: string;
};

/* ============================================================
   DATA
============================================================ */

const companies: Company[] = [
  {
    name: 'Acme Corp',
    logo: '/images/companies/acme.svg',
  },
  {
    name: 'Echo Valley',
    logo: '/images/companies/echo.svg',
  },
  {
    name: 'Quantum',
    logo: '/images/companies/quantum.svg',
  },
  {
    name: 'Pulse',
    logo: '/images/companies/pulse.svg',
  },
  {
    name: 'Outside',
    logo: '/images/companies/outside.svg',
  },
  {
    name: 'Apex',
    logo: '/images/companies/apex.svg',
  },
  {
    name: 'Celestial',
    logo: '/images/companies/celestial.svg',
  },
  {
    name: '2Twice',
    logo: '/images/companies/2twice.svg',
  },
];

/* ============================================================
   MOTION
============================================================ */

const sectionVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   LOGO CARD
============================================================ */

function LogoCard({
  company,
}: {
  company: Company;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="
        group/card
        relative
        flex
        h-20
        w-full
        items-center
        justify-center
        overflow-hidden

        rounded-lg

        border
        border-white/15

        bg-[#010101]

        px-6
        py-5

        transition-[border-color,background-color,box-shadow]
        duration-500

        hover:border-[#C281FF]/55
        hover:bg-[#0A0710]
        hover:shadow-[0_0_32px_rgba(194,129,255,0.12),inset_0_0_24px_rgba(194,129,255,0.035)]

        sm:h-22.5
        sm:rounded-[10px]
        sm:px-8
        sm:py-6

        lg:h-24.5
        lg:px-10
        lg:py-8
      "
    >
      {/* ========================================================
          AMBIENT PURPLE GLOW
      ======================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0

          size-24

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#8C45FF]/0

          blur-3xl

          transition-[background-color,transform]
          duration-500

          group-hover/card:scale-150
          group-hover/card:bg-[#8C45FF]/10
        "
      />

      {/* ========================================================
          TOP EDGE LIGHT
      ======================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[16%]
          top-0
          z-10

          h-px

          bg-linear-to-r
          from-transparent
          via-[#C281FF]/80
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover/card:opacity-100
        "
      />

      {/* ========================================================
          MOVING GLASS SHEEN
      ======================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-1/3
          z-10

          w-1/3

          -skew-x-12

          bg-linear-to-r
          from-transparent
          via-white/7
          to-transparent

          transition-transform
          duration-700
          ease-out

          group-hover/card:translate-x-[450%]
        "
      />

      {/* ========================================================
          CORNER GLOW
      ======================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          -bottom-10
          z-0

          size-20

          rounded-full

          bg-[#C281FF]/0
          blur-2xl

          transition-colors
          duration-500

          group-hover/card:bg-[#C281FF]/12
        "
      />

      {/* ========================================================
          LOGO
      ======================================================== */}
      <div
        className="
          relative
          z-20

          h-6
          w-30

          transition-[transform,filter,opacity]
          duration-500
          ease-out

          group-hover/card:scale-[1.035]
          group-hover/card:drop-shadow-[0_0_10px_rgba(255,255,255,0.14)]

          sm:h-7.5
          sm:w-35

          lg:h-8.5
          lg:w-38.75
        "
      >
        <Image
          src={company.logo}
          alt={company.name}
          fill
          sizes="
            (max-width: 640px) 120px,
            (max-width: 1024px) 140px,
            155px
          "
          className="
            object-contain
            object-center
          "
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   TRUSTED COMPANIES
============================================================ */

export default function TrustedCompanies() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#010101]
      "
    >
      <motion.div
        variants={sectionVariants}
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

          gap-6

          px-4
          py-6

          sm:gap-8
          sm:px-6
          sm:py-8

          lg:gap-10
          lg:px-0
          lg:py-10
        "
      >
        {/* ========================================================
            TITLE
        ======================================================== */}
        <motion.p
          variants={titleVariants}
          className="
            px-4
            text-center

            font-sans
            text-sm
            font-normal
            leading-5.5
            tracking-[-0.01em]
            text-white/70

            sm:text-[15px]
            sm:leading-6

            lg:text-base
            lg:leading-6.5
          "
        >
          Trusted by the world&apos;s most innovative teams
        </motion.p>

        {/* ========================================================
            LOGO GRID

            Mobile  : 1 column
            Tablet  : 2 columns
            Desktop : 4 columns
        ======================================================== */}
        <motion.div
          variants={sectionVariants}
          className="
            grid
            w-full
            min-w-0

            grid-cols-1
            gap-2.5

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {companies.map((company) => (
            <LogoCard
              key={company.name}
              company={company}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}