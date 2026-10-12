'use client';

import type { ReactNode } from 'react';

import {
  ArrowRight,
  Check,
  Clock3,
  FileText,
  Grid3X3,
  Link2,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import {
  motion,
  type Variants,
} from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
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

const workflowNodes = [
  {
    icon: Link2,
    label: 'URL',
  },
  {
    icon: Sparkles,
    label: 'Web Reader',
  },
  {
    icon: FileText,
    label: 'Summarize',
    active: true,
  },
  {
    icon: WandSparkles,
    label: 'Generate Captions',
  },
  {
    icon: Check,
    label: 'Output',
  },
];

export default function QuickStartIntro() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
        relative
        mx-auto
        w-full
        max-w-190
        pb-14
        pt-6

        sm:pb-16
      "
    >
      {/* =====================================================
          FIGMA PURPLE ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-30
          left-1/2
          -z-10

          h-115
          w-180

          -translate-x-1/2

          rounded-full
          bg-[#7C3AED]/12
          blur-[95px]
        "
      />

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <motion.div
        variants={fadeUpVariants}
        className="
          flex
          items-center
          gap-2

          text-[10px]
          font-semibold
          uppercase
          tracking-[0.16em]
        "
      >
        <span className="text-[#71717A]">
          Get Started
        </span>

        <span className="text-[#52525B]">
          /
        </span>

        <span className="text-[#C281FF]">
          Quick Start
        </span>
      </motion.div>

      {/* =====================================================
          HERO COPY
      ====================================================== */}

      <motion.div
        variants={fadeUpVariants}
        className="mt-7"
      >
        <h1
          className="
            font-space
            text-[42px]
            font-medium
            leading-none
            tracking-[-0.04em]
            text-white

            sm:text-[48px]
          "
        >
          Quick Start
        </h1>

        <p
          className="
            mt-5
            max-w-170

            font-sans
            text-[14px]
            font-normal
            leading-6
            text-[#A1A1AA]

            sm:text-[16px]
          "
        >
          Build and run your first AI workflow in about 5 minutes.
          No code needed.
        </p>

        {/* Metadata */}
        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-2
          "
        >
          <MetaBadge light>
            <Clock3 className="size-3" />
            5 min
          </MetaBadge>

          <MetaBadge purple>
            Beginner
          </MetaBadge>

          <MetaBadge outlined>
            Updated Oct 2026
          </MetaBadge>

          <MetaBadge outlined>
            All plans
          </MetaBadge>
        </div>
      </motion.div>

      {/* =====================================================
          WHAT YOU'LL BUILD
          Figma: 760 × 470
      ====================================================== */}

      <motion.section
        id="what-you-build"
        variants={fadeUpVariants}
        className="
          mt-18
          scroll-mt-28
          overflow-hidden
          rounded-2xl
          border
          border-[#32145A]

          bg-linear-to-b
          from-[#0E0B16]
          to-[#1A1030]
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-start
            justify-between
            gap-5

            px-7
            pb-5
            pt-7
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-[#8B5CF6]
              "
            >
              What you&apos;ll build
            </p>

            <h2
              className="
                mt-2
                font-space
                text-[21px]
                font-medium
                leading-7
                text-white

                sm:text-[24px]
              "
            >
              A content repurposing workflow
            </h2>
          </div>

          <span
            className="
              mt-2
              shrink-0
              rounded-full
              border
              border-[#8B5CF6]/45

              bg-[#8B5CF6]/8

              px-3
              py-1.5

              text-[10px]
              font-medium
              text-[#C281FF]
            "
          >
            5 NODES
          </span>
        </div>

        {/* Pipeline */}
        <div className="px-7">
          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-white/8

              bg-[radial-gradient(ellipse_at_center,#32145A_0%,#08070D_70%)]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between

                px-6
                pt-6
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#C4B5FD]
                "
              >
                Content pipeline
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2

                  text-[9px]
                  font-medium
                  text-[#22C55E]
                "
              >
                <span className="size-1.5 rounded-full bg-[#22C55E]" />

                READY
              </span>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-3

                px-6
                pb-6
                pt-15

                sm:grid-cols-[105.4px_105.4px_105.4px_105.4px_126.4px]
                sm:items-center
                sm:justify-between
                sm:gap-0
              "
            >
              {workflowNodes.map(
                (
                  {
                    icon: Icon,
                    label,
                    active,
                  },
                  index,
                ) => (
                  <div
                    key={label}
                    className="relative"
                  >
                    <div
                      className={`
                        flex
                        h-18.5
                        flex-col
                        justify-center

                        rounded-lg
                        border
                        bg-[#100C18]

                        px-3

                        ${
                          active
                            ? `
                              border-[#8B5CF6]
                              shadow-[0_0_24px_rgba(139,92,246,0.08)]
                            `
                            : `
                              border-white/10
                            `
                        }
                      `}
                    >
                      <Icon
                        className="
                          size-3.5
                          text-[#8B5CF6]
                        "
                      />

                      <span
                        className="
                          mt-3

                          text-[9px]
                          leading-4
                          text-[#D4D4D8]
                        "
                      >
                        {label}
                      </span>
                    </div>

                    {index <
                      workflowNodes.length - 1 && (
                      <ArrowRight
                        aria-hidden="true"
                        className="
                          absolute
                          -right-5
                          top-1/2
                          z-10

                          hidden
                          size-3

                          -translate-y-1/2

                          text-[#8B5CF6]

                          sm:block
                        "
                      />
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-7 pb-7 pt-6">
          <p
            className="
              max-w-170

              text-[13px]
              leading-6
              text-[#A1A1AA]

              sm:text-[15px]
            "
          >
            Paste any article URL. JX AI reads it, distills the key
            ideas, and creates three ready-to-publish social captions.
          </p>

          <p
            className="
              mt-6

              text-[13px]
              font-medium
              text-white
            "
          >
            What you need
          </p>

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-3
            "
          >
            <Requirement>
              A work email
            </Requirement>

            <Requirement>
              One article URL
            </Requirement>

            <Requirement>
              Five focused minutes
            </Requirement>
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          CHOOSE YOUR PATH
      ====================================================== */}

      <motion.section
        id="choose-path"
        variants={fadeUpVariants}
        className="
          mt-8
          scroll-mt-28
        "
      >
        <h2
          className="
            font-space
            text-[27px]
            font-medium
            leading-9
            tracking-[-0.025em]
            text-white
          "
        >
          Choose your path
        </h2>

        <p
          className="
            mt-2

            text-[13px]
            leading-5
            text-[#A1A1AA]
          "
        >
          Learn the builder from scratch, or jump ahead with a proven
          template.
        </p>

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
          "
        >
          <PathCard
            icon={
              <FileText className="size-4" />
            }
            badge="Recommended"
            title="Start with a prompt"
            description="Describe your goal and let JX AI draft the workflow."
            time="~5 min"
            featured
          />

          <PathCard
            icon={
              <Grid3X3 className="size-4" />
            }
            badge="Fastest"
            title="Start from a template"
            description="Duplicate a ready-made workflow and customize the details."
            time="~2 min"
          />
        </div>
      </motion.section>
    </motion.section>
  );
}

/* ============================================================
   META
============================================================ */

function MetaBadge({
  children,
  purple = false,
  light = false,
  outlined = false,
}: {
  children: ReactNode;
  purple?: boolean;
  light?: boolean;
  outlined?: boolean;
}) {
  return (
    <span
      className={`
        inline-flex
        min-h-7
        items-center
        gap-1.5

        rounded-full
        border

        px-3

        text-[10px]
        font-medium

        ${
          purple
            ? `
              border-[#8B5CF6]/40
              bg-[#8B5CF6]/15
              text-[#C281FF]
            `
            : ''
        }

        ${
          light
            ? `
              border-white
              bg-white
              text-[#71717A]
            `
            : ''
        }

        ${
          outlined
            ? `
              border-white/45
              bg-white/6
              text-[#D4D4D8]
            `
            : ''
        }
      `}
    >
      {children}
    </span>
  );
}

/* ============================================================
   REQUIREMENT
============================================================ */

function Requirement({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3

        text-[11px]
        text-[#A1A1AA]
      "
    >
      <span
        className="
          flex
          size-5
          shrink-0
          items-center
          justify-center

          rounded-full
          bg-[#22C55E]/10
        "
      >
        <Check className="size-3 text-[#22C55E]" />
      </span>

      {children}
    </div>
  );
}

/* ============================================================
   PATH CARD
============================================================ */

function PathCard({
  icon,
  badge,
  title,
  description,
  time,
  featured = false,
}: {
  icon: ReactNode;
  badge: string;
  title: string;
  description: string;
  time: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        borderColor:
          'rgba(139,92,246,0.8)',
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-2xl
        border

        bg-linear-to-b
        from-[#0E0B16]
        to-[#1A1030]

        p-5

        ${
          featured
            ? `
              border-[#8B5CF6]
              shadow-[0_0_30px_rgba(139,92,246,0.06)]
            `
            : `
              border-white/10
            `
        }
      `}
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <span
          className="
            flex
            size-10
            items-center
            justify-center

            rounded-xl
            bg-[#8B5CF6]/10

            text-[#8B5CF6]
          "
        >
          {icon}
        </span>

        <span
          className="
            rounded-full
            border
            border-white/15

            px-3
            py-1.5

            text-[9px]
            font-medium
            text-[#C281FF]
          "
        >
          {badge}
        </span>
      </div>

      <h3
        className="
          mt-6

          text-[16px]
          font-medium
          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          min-h-10

          text-[11px]
          leading-[18px]
          text-[#A1A1AA]
        "
      >
        {description}
      </p>

      <p
        className="
          mt-3
          font-mono
          text-[10px]
          text-[#A1A1AA]
        "
      >
        {time}
      </p>
    </motion.div>
  );
}