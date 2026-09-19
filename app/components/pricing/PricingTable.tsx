'use client';

import {
  motion,
  type Variants,
} from 'framer-motion';
import {
  BadgeCheck,
  Check,
  ChevronRight,
} from 'lucide-react';

/* ============================================================
   TYPES
============================================================ */

export type FeatureValue =
  | boolean
  | string
  | null;

export type PricingFeature = {
  id: string;
  label: string;

  /**
   * Used by the XL desktop comparison table.
   * Keep these as complete static Tailwind classes.
   */
  desktopHeightClass: string;
};

export type PricingTablePlan = {
  id: string;

  title: string;

  price: string;
  priceSuffix?: string;

  billingLabel?: string;
  description?: string;

  features: FeatureValue[];

  featured?: boolean;

  buttonLabel?: string;
};

type PricingTableProps = {
  heading?: string;

  features?: PricingFeature[];

  plans?: PricingTablePlan[];

  onPlanSelect?: (
    plan: PricingTablePlan,
  ) => void;

  className?: string;
};

/* ============================================================
   DEFAULT PROTOTYPE DATA
============================================================ */

const defaultFeatures: PricingFeature[] = [
  {
    id: '360-tour',
    label: '360 Tour',
    desktopHeightClass: 'xl:h-14',
  },
  {
    id: 'hotspots',
    label: 'Hotspots behavior (360 Tour)',
    desktopHeightClass: 'xl:h-16',
  },
  {
    id: '2d-plan',
    label: '2D plan',
    desktopHeightClass: 'xl:h-14',
  },
  {
    id: 'map',
    label: 'Map',
    desktopHeightClass: 'xl:h-14',
  },
  {
    id: 'measurement',
    label: 'Measurement Tool',
    desktopHeightClass: 'xl:h-14',
  },
  {
    id: 'skin',
    label: 'Skin',
    desktopHeightClass: 'xl:h-14',
  },
  {
    id: 'access',
    label: 'Access',
    desktopHeightClass: 'xl:h-14',
  },
  {
    id: 'templates',
    label: 'Templates',
    desktopHeightClass: 'xl:h-16',
  },
  {
    id: 'storage',
    label: 'Storage',
    desktopHeightClass: 'xl:h-18',
  },
  {
    id: 'exports',
    label: 'Exports',
    desktopHeightClass: 'xl:h-44',
  },
  {
    id: 'support',
    label: 'Custom Support',
    desktopHeightClass: 'xl:h-18',
  },
];

const defaultFeatureValues: FeatureValue[] = [
  true,

  '"Location", "Video",\n"360 Video", "360 Photo"',

  true,
  true,
  true,
  true,
  true,

  'Two Templates',

  '5Gb for one\nproject',

  `Web (Virtik),
Desktop Windows,

Out of Scope for now
Web (Custom)
Desktop Mac,
Mobile (Android),
Mobile (iOS) +
extra option:
ability to edit tour link`,

  `FAQ section,
e-mail support`,
];

const defaultPlans: PricingTablePlan[] = [
  {
    id: 'light',
    title: 'Light / Month',
    price: '$15',
    priceSuffix: 'user / mo',
    billingLabel: '(Paid Monthly)',
    description:
      'Display stars in Google organic search risult and showcase.',
    features: defaultFeatureValues,
    buttonLabel: 'Get Started',
  },

  {
    id: 'light-featured',
    title: 'Light / Month',
    price: '$15',
    priceSuffix: 'user / mo',
    billingLabel: '(Paid Monthly)',
    description:
      'Display stars in Google organic search risult and showcase.',
    features: defaultFeatureValues,
    featured: true,
    buttonLabel: 'Get Started',
  },

  {
    id: 'light-three',
    title: 'Light / Month',
    price: '$15',
    priceSuffix: 'user / mo',
    billingLabel: '(Paid Monthly)',
    description:
      'Display stars in Google organic search risult and showcase.',
    features: defaultFeatureValues,
    buttonLabel: 'Get Started',
  },
];

/* ============================================================
   MOTION
============================================================ */

const sectionVariants: Variants = {
  hidden: {},

  visible: {
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

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   SHARED TEXT GRADIENT
============================================================ */

const gradientTextClass = `
  bg-[linear-gradient(90deg,#FFFFFF_0%,#BCC5EA_18%,#C4CDEE_55.5%,#FFFFFF_100%)]
  bg-clip-text
  text-transparent
`;

/* ============================================================
   INCLUDED ICON
============================================================ */

function IncludedIcon() {
  return (
    <div
      className="
        relative
        flex
        size-6
        shrink-0
        items-center
        justify-center
      "
    >
      <BadgeCheck
        aria-hidden="true"
        className="
          absolute
          inset-0
          size-6
          fill-[#C281FF]
          text-[#C281FF]
        "
        strokeWidth={1.5}
      />

      <Check
        aria-hidden="true"
        className="
          relative
          z-10
          size-2.75
          text-black
        "
        strokeWidth={3}
      />
    </div>
  );
}

/* ============================================================
   GLASS CTA
============================================================ */

function PlanButton({
  label,
  featured,
  onClick,
}: {
  label: string;
  featured: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group/button
        relative

        flex
        h-[36.8425px]
        w-[146.695px]
        cursor-pointer
        items-center
        justify-center
        gap-1

        overflow-hidden

        rounded-[18.4213px]

        border

        bg-[#C281FF1A]

        px-4

        font-['DM_Sans',sans-serif]
        text-[16px]
        font-medium
        leading-none
        text-white

        backdrop-blur-[14px]

        transition-[border-color,background-color,box-shadow]
        duration-300

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#C281FF]/70
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#010101]

        ${
          featured
            ? `
              border-[#C281FF]/45
              shadow-[inset_0_0_14px_rgba(194,129,255,0.12),0_8px_28px_rgba(194,129,255,0.08)]

              hover:border-[#C281FF]/75
              hover:bg-[#C281FF26]
              hover:shadow-[inset_0_0_18px_rgba(194,129,255,0.18),0_0_30px_rgba(194,129,255,0.16)]
            `
            : `
              border-white/10
              shadow-[inset_0_0_12px_rgba(255,255,255,0.035)]

              hover:border-[#C281FF]/35
              hover:bg-[#C281FF20]
              hover:shadow-[inset_0_0_16px_rgba(194,129,255,0.10),0_0_24px_rgba(194,129,255,0.08)]
            `
        }
      `}
    >
      {/* Glass sweep */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-1/2
          w-1/2

          skew-x-[-20deg]

          bg-linear-to-r
          from-transparent
          via-white/10
          to-transparent

          transition-transform
          duration-500

          group-hover/button:translate-x-[300%]
        "
      />

      <span className="relative z-10">
        {label}
      </span>

      <ChevronRight
        aria-hidden="true"
        className="
          relative
          z-10
          size-5
          shrink-0
          text-white
        "
        strokeWidth={2}
      />
    </button>
  );
}

/* ============================================================
   PLAN HEADER
============================================================ */

function PlanHeader({
  plan,
  onSelect,
  compact = false,
}: {
  plan: PricingTablePlan;

  onSelect?: (
    plan: PricingTablePlan,
  ) => void;

  compact?: boolean;
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center

        px-1
        pt-10

        ${
          compact
            ? `
              min-h-72
              pb-8
            `
            : `
              h-75
            `
        }
      `}
    >
      {/* Copy */}
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          gap-4
          text-center
        "
      >
        <h3
          className={`
            font-sans
            text-[20px]
            font-bold
            leading-none

            ${gradientTextClass}
          `}
        >
          {plan.title}
        </h3>

        {/* Price */}
        <div
          className="
            flex
            flex-wrap
            items-baseline
            justify-center
            gap-1
          "
        >
          <span
            className="
              font-sans
              text-[18px]
              font-semibold
              leading-none
              text-[#AA4FFF]
            "
          >
            {plan.price}
          </span>

          {plan.priceSuffix && (
            <span
              className={`
                font-sans
                text-[14px]
                font-semibold
                leading-none

                ${gradientTextClass}
              `}
            >
              {plan.priceSuffix}
            </span>
          )}
        </div>

        {/* Billing / description */}
        <div
          className="
            flex
            max-w-42.5
            flex-col
            items-center
            gap-1.25
          "
        >
          {plan.billingLabel && (
            <p
              className="
                font-sans
                text-[12px]
                font-normal
                leading-none
                text-white
              "
            >
              {plan.billingLabel}
            </p>
          )}

          {plan.description && (
            <p
              className="
                font-sans
                text-[12px]
                font-medium
                leading-[130%]
                text-white
              "
            >
              {plan.description}
            </p>
          )}
        </div>
      </div>

      {/* Desktop exact spacing */}
      {!compact && (
        <div className="h-19.75 shrink-0" />
      )}

      {/* Responsive spacing */}
      {compact && (
        <div className="h-10 shrink-0" />
      )}

      <PlanButton
        label={
          plan.buttonLabel ??
          'Get Started'
        }
        featured={Boolean(plan.featured)}
        onClick={() =>
          onSelect?.(plan)
        }
      />
    </div>
  );
}

/* ============================================================
   FEATURE CONTENT
============================================================ */

function FeatureContent({
  value,
  align = 'center',
}: {
  value: FeatureValue;

  align?: 'center' | 'right';
}) {
  if (value === true) {
    return <IncludedIcon />;
  }

  if (
    typeof value === 'string' &&
    value.length > 0
  ) {
    return (
      <p
        className={`
          min-w-0
          whitespace-pre-line

          font-['DM_Sans',sans-serif]
          text-[12px]
          font-medium
          leading-[130%]

          ${gradientTextClass}

          ${
            align === 'right'
              ? 'text-right'
              : 'text-center'
          }
        `}
      >
        {value}
      </p>
    );
  }

  return (
    <span className="text-[13px] text-white/30">
      —
    </span>
  );
}

/* ============================================================
   PLAN CARD
============================================================ */

function PlanCard({
  plan,
  features,
  onSelect,
  responsive = false,
}: {
  plan: PricingTablePlan;

  features: PricingFeature[];

  onSelect?: (
    plan: PricingTablePlan,
  ) => void;

  responsive?: boolean;
}) {
  const featured =
    Boolean(plan.featured);

  return (
    <motion.article
      variants={cardVariants}
      className={`
        group/card
        relative

        flex
        shrink-0
        flex-col

        overflow-hidden

        rounded-[5px]

        border

        backdrop-blur-[18.2px]

        transition-[border-color,background-color,box-shadow]
        duration-500

        ${
          responsive
            ? `
              w-70

              sm:w-80

              md:w-88

              lg:w-96
            `
            : `
              w-55.25
            `
        }

        ${
          featured
            ? `
              border-[#C281FF]
              bg-[#A475C91A]

              shadow-[0_0_0_rgba(194,129,255,0)]

              hover:border-[#D6A7FF]
              hover:bg-[#A475C924]
              hover:shadow-[0_0_45px_rgba(194,129,255,0.12)]
            `
            : `
              border-white/6
              bg-[#FFFFFF1A]

              hover:border-[#C281FF]/30
              hover:bg-[#FFFFFF1F]
              hover:shadow-[0_0_45px_rgba(194,129,255,0.07)]
            `
        }
      `}
    >
      {/* Futuristic hover glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          z-0

          opacity-0

          transition-opacity
          duration-500

          group-hover/card:opacity-100

          ${
            featured
              ? `
                bg-[radial-gradient(circle_at_50%_10%,rgba(194,129,255,0.14),transparent_42%)]
              `
              : `
                bg-[radial-gradient(circle_at_50%_10%,rgba(194,129,255,0.07),transparent_42%)]
              `
          }
        `}
      />

      {/* Top highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[15%]
          top-0
          z-1

          h-px

          bg-linear-to-r
          from-transparent
          via-[#C281FF]/60
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover/card:opacity-100
        "
      />

      <div
        className="
          relative
          z-10
          min-w-0
        "
      >
        <PlanHeader
          plan={plan}
          onSelect={onSelect}
          compact={responsive}
        />

        {/* ======================================================
            MOBILE / TABLET / SMALL LAPTOP ROWS
        ====================================================== */}
        {responsive ? (
          <div
            className="
              min-w-0

              px-5
              pb-8

              sm:px-6
              sm:pb-10
            "
          >
            {features.map(
              (feature, index) => {
                const value =
                  plan.features[index];

                return (
                  <div
                    key={feature.id}
                    className="
                      grid
                      min-h-19
                      w-full
                      min-w-0
                      grid-cols-1
                      items-center
                      gap-3

                      border-t
                      border-[#D2D2D2]/55

                      py-4

                      last:border-b

                      sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
                      sm:gap-5
                    "
                  >
                    {/* Feature name */}
                    <p
                      className="
                        min-w-0
                        text-center

                        font-['DM_Sans',sans-serif]
                        text-[12px]
                        font-semibold
                        leading-[130%]
                        text-white/65

                        sm:text-left
                      "
                    >
                      {feature.label}
                    </p>

                    {/* Feature value */}
                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        justify-center

                        sm:justify-end
                      "
                    >
                      <FeatureContent
                        value={value}
                        align={
                          typeof value ===
                          'string'
                            ? 'right'
                            : 'center'
                        }
                      />
                    </div>
                  </div>
                );
              },
            )}
          </div>
        ) : (
          /* ====================================================
             XL DESKTOP ROWS
          ==================================================== */
          <div className="px-6 pb-10">
            {features.map(
              (feature, index) => {
                const value =
                  plan.features[index];

                return (
                  <div
                    key={feature.id}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-center

                      border-t
                      border-[#D2D2D2]/55

                      last:border-b

                      ${feature.desktopHeightClass}
                    `}
                  >
                    <FeatureContent
                      value={value}
                    />
                  </div>
                );
              },
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ============================================================
   DESKTOP LEFT COLUMN
============================================================ */

function DesktopFeatureLabels({
  heading,
  features,
}: {
  heading: string;

  features: PricingFeature[];
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="
        w-full
        max-w-88.25
        shrink-0
      "
    >
      {/* Same 300px height as plan headers */}
      <div
        className="
          flex
          h-75
          items-start
        "
      >
        <h2
          className="
            max-w-88.25

            font-['Cal_Sans',sans-serif]
            text-[40px]
            font-semibold
            leading-none
            tracking-widest
            text-white
          "
        >
          {heading}
        </h2>
      </div>

      {/* Parallel feature rows */}
      <div>
        {features.map(
          (feature) => (
            <div
              key={feature.id}
              className={`
                flex
                w-full
                items-center

                border-t
                border-[#D2D2D2]/80

                last:border-b

                ${feature.desktopHeightClass}
              `}
            >
              <p
                className="
                  font-['DM_Sans',sans-serif]
                  text-[16px]
                  font-semibold
                  leading-none
                  text-white
                "
              >
                {feature.label}
              </p>
            </div>
          ),
        )}
      </div>
    </motion.div>
  );
}

/* ============================================================
   PRICING TABLE
============================================================ */

export default function PricingTable({
  heading =
    'Empower day to day with Deep Knowledge with all available ai tools.',

  features = defaultFeatures,

  plans = defaultPlans,

  onPlanSelect,

  className = '',
}: PricingTableProps) {
  return (
    <section
      className={`
        relative
        w-full
        max-w-full
        overflow-x-clip
        bg-[#010101]

        ${className}
      `}
    >
      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: '-80px',
        }}
        className="
          mx-auto
          w-full
          min-w-0
          max-w-360
          overflow-x-clip

          py-16

          sm:py-20

          md:py-24

          xl:py-30
        "
      >
        {/* ========================================================
            MOBILE / TABLET / SMALL LAPTOP
            Below 1280px
        ======================================================== */}
        <div
          className="
            w-full
            min-w-0
            xl:hidden
          "
        >
          {/* Heading */}
          <motion.div
            variants={fadeUpVariants}
            className="
              w-full

              px-5

              sm:px-6

              md:px-8
            "
          >
            <h2
              className="
                mx-auto
                max-w-140
                text-center

                font-['Cal_Sans',sans-serif]
                text-[30px]
                font-semibold
                leading-[105%]
                tracking-[0.06em]
                text-white

                sm:text-[34px]

                md:text-[38px]
              "
            >
              {heading}
            </h2>
          </motion.div>

          {/* ======================================================
              SCROLLER SHELL

              This shell prevents the horizontal carousel from
              increasing document width.
          ====================================================== */}
          <div
            className="
              mt-10
              w-full
              min-w-0
              max-w-full
              overflow-hidden

              sm:mt-12
            "
          >
            {/* Actual horizontal scroller */}
            <motion.div
              variants={cardsVariants}
              className="
                flex
                w-full
                min-w-0
                max-w-full

                snap-x
                snap-mandatory
                items-start

                gap-4

                overflow-x-auto
                overflow-y-hidden
                overscroll-x-contain

                px-5
                pb-6

                scroll-smooth

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                sm:gap-5
                sm:px-6

                md:gap-6
                md:px-8
              "
            >
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="
                    shrink-0
                    snap-center

                    first:snap-start
                    last:snap-end
                  "
                >
                  <PlanCard
                    plan={plan}
                    features={features}
                    onSelect={onPlanSelect}
                    responsive
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile hint */}
          {plans.length > 1 && (
            <motion.p
              variants={fadeUpVariants}
              className="
                mt-2
                px-5
                text-center

                font-sans
                text-[12px]
                font-normal
                text-white/40

                sm:hidden
              "
            >
              Swipe to compare plans
            </motion.p>
          )}
        </div>

        {/* ========================================================
            XL DESKTOP COMPARISON TABLE

            Starts at 1280px because the exact comparison
            layout requires 1126px of usable content width.
        ======================================================== */}
        <div
          className="
            mx-auto
            hidden
            w-full
            min-w-0
            max-w-281.5

            xl:flex
            xl:items-start
            xl:gap-15.5
          "
        >
          {/* Left feature column */}
          <DesktopFeatureLabels
            heading={heading}
            features={features}
          />

          {/* Plan cards */}
          <motion.div
            variants={cardsVariants}
            className="
              flex
              min-w-0
              flex-1
              items-start
              gap-6
            "
          >
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                features={features}
                onSelect={onPlanSelect}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}