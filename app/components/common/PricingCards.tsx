'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { IconCheck } from '@tabler/icons-react';

/* ============================================================
   TYPES
============================================================ */

export type PricingPlan = {
  id: string;
  title: string;
  monthlyPrice: string;
  annualPrice: string;
  period?: string;
  features: string[];
  featured?: boolean;
  buttonLabel?: string;
};

type PricingCardsProps = {
  plans?: PricingPlan[];
  defaultAnnual?: boolean;
  onSelectPlan?: (plan: PricingPlan) => void;
};

/* ============================================================
   DATA
============================================================ */

const defaultPlans: PricingPlan[] = [
  {
    id: 'pricing',
    title: 'Pricing',
    monthlyPrice: '$29',
    annualPrice: '$23',
    period: '/mo',
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
    ],
  },
  {
    id: 'pro',
    title: 'Pro',
    monthlyPrice: '$79',
    annualPrice: '$63',
    period: '/mo',
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
      'Content suggestions',
      'Link optimization',
    ],
    featured: true,
  },
  {
    id: 'business',
    title: 'Business',
    monthlyPrice: '$149',
    annualPrice: '$119',
    period: '/mo',
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
      'Content suggestions',
      'Link optimization',
      'Multi-user access',
      'API integration',
    ],
  },
];

/* ============================================================
   MOTION
============================================================ */

const cardsContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
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

/* ============================================================
   ANNUAL TOGGLE
============================================================ */

function AnnualToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label="Toggle annual pricing"
      onClick={() => onChange(!checked)}
      className="
        group
        inline-flex
        cursor-pointer
        items-center
        gap-1.5
        outline-none
      "
    >
      {/* Track */}
      <span
        className={`
          relative
          block
          h-5
          w-8.25
          shrink-0
          rounded-[30px]
          p-0.5

          transition-colors
          duration-300

          ${checked ? 'bg-[#8C45FF]' : 'bg-[#3D3D3D]'}

          group-focus-visible:ring-2
          group-focus-visible:ring-[#8C45FF]/60
        `}
      >
        {/* Thumb */}
        <motion.span
          animate={{
            x: checked ? 13 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          className="
            block
            size-4
            rounded-[30px]
            bg-[#F9F5FF]
          "
        />
      </span>

      <span
        className="
          font-sans
          text-[14px]
          font-medium
          leading-6.5
          tracking-[-0.01em]
          text-[#FFFFFF80]

          sm:text-[16px]
          sm:leading-7.75
        "
      >
        Annual
      </span>
    </button>
  );
}

/* ============================================================
   CARD INNER
============================================================ */

function CardInner({
  plan,
  annual,
  onSelect,
}: {
  plan: PricingPlan;
  annual: boolean;
  onSelect?: (plan: PricingPlan) => void;
}) {
  const featured = Boolean(plan.featured);

  const price = annual
    ? plan.annualPrice
    : plan.monthlyPrice;

  return (
    <div
      className={`
        relative
        z-10

        flex
        h-full
        min-h-115
        min-w-0
        w-full
        flex-col

        overflow-hidden
        rounded-[10px]

        sm:min-h-120

        lg:min-h-125

        ${
          featured
            ? `
              bg-transparent
            `
            : `
              border
              border-[#FFFFFF26]
              bg-[#0000000F]

              transition-[background-color,border-color,box-shadow]
              duration-300

              hover:border-[#FFFFFF40]
              hover:bg-[#FFFFFF08]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.025)]
            `
        }
      `}
    >
      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div
        className="
          relative
          z-10

          flex
          h-full
          min-w-0
          flex-col
          justify-between

          p-5

          md:p-4

          lg:p-6
        "
      >
        {/* ======================================================
            TOP CONTENT
        ====================================================== */}

        <div
          className="
            flex
            min-w-0
            flex-col
            gap-10
          "
        >
          {/* ====================================================
              TITLE / PRICE
          ==================================================== */}

          <div className="flex min-w-0 flex-col gap-1.5">
            <h3
              className="
                font-sans
                text-[22px]
                font-medium
                leading-7.25
                tracking-[-0.04em]
                text-white

                sm:text-[24px]
                sm:leading-7.75
              "
            >
              {plan.title}
            </h3>

            <p
              className="
                font-sans
                text-[15px]
                font-normal
                leading-6
                tracking-[-0.01em]
                text-[#FFFFFFB2]

                sm:text-[16px]
                sm:leading-6.5
              "
            >
              {price}
              {plan.period ?? '/mo'}
            </p>
          </div>

          {/* ====================================================
              DIVIDER
          ==================================================== */}

          <div className="h-px w-full bg-[#282729]" />

          {/* ====================================================
              FEATURES
          ==================================================== */}

          <ul className="flex min-w-0 flex-col">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="
                  flex
                  min-h-8.75
                  min-w-0
                  items-center
                  gap-1.25
                  py-[4.5px]
                "
              >
                <IconCheck
                  size={15}
                  stroke={2}
                  aria-hidden="true"
                  className="
                    size-3.75
                    shrink-0
                    text-white
                  "
                />

                <span
                  className="
                    min-w-0

                    font-sans
                    text-[13px]
                    font-normal
                    leading-6
                    tracking-[-0.01em]
                    text-white

                    md:text-[12px]
                    md:leading-5.5

                    lg:text-[14px]
                    lg:leading-6.5
                  "
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ======================================================
            CTA BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => onSelect?.(plan)}
          className={`
            mt-8

            flex
            min-h-9.5
            w-full
            cursor-pointer
            items-center
            justify-center

            rounded-[10px]
            border
            border-[#FFFFFF26]

            px-3.75
            py-1.5

            font-sans
            text-[14px]
            font-normal
            leading-6.5
            tracking-[-0.01em]
            text-white

            backdrop-blur-[14px]

            shadow-[inset_0_0_6px_3px_#FFFFFF40]

            transition-[background-color,border-color,box-shadow]
            duration-300

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white/40

            ${
              featured
                ? `
                  bg-[#8C45FF66]

                  hover:border-[#FFFFFF40]
                  hover:bg-[#8C45FF80]
                `
                : `
                  bg-[#3D3D3D66]

                  hover:border-[#FFFFFF40]
                  hover:bg-[#4A4A4A80]
                `
            }
          `}
        >
          {plan.buttonLabel ?? 'Get Started'}
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   PRICING CARD
============================================================ */

function PricingCard({
  plan,
  annual,
  onSelect,
}: {
  plan: PricingPlan;
  annual: boolean;
  onSelect?: (plan: PricingPlan) => void;
}) {
  const featured = Boolean(plan.featured);

  /* ============================================================
     FEATURED CENTER CARD

     - Transparent inner
     - Pattern covers entire card
     - Pattern opacity: 0.3
     - 2px gradient border
     - Border radius: 10px
     - Gradient exists ONLY on border
  ============================================================ */

  if (featured) {
    return (
      <motion.div
        variants={cardVariants}
        className="
          relative

          h-full
          min-w-0
          w-full

          overflow-hidden
          rounded-[10px]

          shadow-[0_10px_74px_10px_#4E00BF69]
        "
      >
        {/* ======================================================
            CARD PATTERN

            Covers whole card.
            Does not add a solid background.
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-0
            z-0

            overflow-hidden
            rounded-[10px]
          "
        >
          <Image
            src="/images/card-pattern.svg"
            alt=""
            fill
            sizes="
              (max-width: 767px) 100vw,
              (max-width: 1023px) 33vw,
              33vw
            "
            className="
              object-cover
              object-center
              opacity-70
            "
          />
        </div>

        {/* ======================================================
            GRADIENT BORDER ONLY

            p-[2px] = border thickness

            Mask removes center completely so the gradient
            cannot appear behind the transparent inner card.
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-0
            z-20

            rounded-[10px]
            p-0.5
          "
          style={{
            background:
              'linear-gradient(150.73deg, #460880 0.62%, #130A11 55.16%, #E8AF97 99.15%)',

            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',

            WebkitMaskComposite: 'xor',

            maskComposite: 'exclude',
          }}
        />

        {/* ======================================================
            TRANSPARENT CARD CONTENT
        ====================================================== */}

        <CardInner
          plan={plan}
          annual={annual}
          onSelect={onSelect}
        />
      </motion.div>
    );
  }

  /* ============================================================
     NORMAL CARD
  ============================================================ */

  return (
    <motion.div
      variants={cardVariants}
      className="
        h-full
        min-w-0
        w-full
      "
    >
      <CardInner
        plan={plan}
        annual={annual}
        onSelect={onSelect}
      />
    </motion.div>
  );
}

/* ============================================================
   PRICING CARDS
============================================================ */

export default function PricingCards({
  plans = defaultPlans,
  defaultAnnual = false,
  onSelectPlan,
}: PricingCardsProps) {
  const [annual, setAnnual] = useState(defaultAnnual);

  return (
    <div
      className="
        mx-auto

        flex
        w-full
        max-w-306
        flex-col

        gap-10

        px-4
        py-3.5

        sm:px-5

        md:px-4

        lg:px-6
      "
    >
      {/* ========================================================
          ANNUAL TOGGLE
      ======================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex
          w-full
          justify-center
        "
      >
        <AnnualToggle
          checked={annual}
          onChange={setAnnual}
        />
      </motion.div>

      {/* ========================================================
          CARDS GRID

          Mobile:
          1 column

          Tablet 768px+:
          3 columns

          Desktop:
          3 columns
      ======================================================== */}

      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: '-80px',
        }}
        className="
          grid
          w-full
          min-w-0
          grid-cols-1
          items-stretch

          gap-4

          md:grid-cols-3
          md:gap-2.75
        "
      >
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            annual={annual}
            onSelect={onSelectPlan}
          />
        ))}
      </motion.div>
    </div>
  );
}