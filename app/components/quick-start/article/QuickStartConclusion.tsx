'use client';

import {
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Clock3,
  Diamond,
  ExternalLink,
  Share2,
  Zap,
} from 'lucide-react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

const troubleshootingItems = [
  {
    title:
      'My workflow will not run',

    description:
      'Check that the URL is public and includes https://. Pages behind a login or paywall may block Web Reader. Try another public article to confirm your setup.',
  },

  {
    title:
      'The output is not what I expected',

    description:
      'Open the Summarizer and Caption Writer nodes and make their instructions more specific about tone, length, quantity, and structure.',
  },

  {
    title:
      'A tool is showing an error',

    description:
      'Open the failed node and confirm that every required input is connected before trying the workflow again.',
  },

  {
    title:
      'My run is taking longer than expected',

    description:
      'Large source pages and slower external services can increase processing time. Check the run details to find the active node.',
  },
];

const nextItems = [
  {
    icon: Clock3,
    title: 'Automate it',
    description:
      'Add a schedule or trigger so the workflow runs itself.',
  },

  {
    icon: Zap,
    title: 'Connect your apps',
    description:
      'Send finished captions to Slack, Notion, or your CMS.',
  },

  {
    icon: Diamond,
    title: 'Go deeper',
    description:
      'Learn how inputs, nodes, models, and outputs work together.',
  },

  {
    icon: Share2,
    title: 'Share it',
    description:
      'Invite teammates or publish a reusable team template.',
  },
];

export default function QuickStartConclusion() {
  const [openIndex, setOpenIndex] =
    useState(0);

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-190
        pb-12
      "
    >
      {/* =====================================================
          ALTERNATIVE
      ====================================================== */}

      <motion.section
        id="template"
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="scroll-mt-28"
      >
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#8B5CF6]
          "
        >
          Alternative
        </p>

        <h2
          className="
            mt-3

            font-space
            text-[28px]
            font-medium
            tracking-[-0.03em]
            text-white
          "
        >
          Start from a template
        </h2>

        <p
          className="
            mt-2

            text-[13px]
            leading-5
            text-[#A1A1AA]
          "
        >
          Short on time? Duplicate the Content Repurposer template and
          make it yours.
        </p>

        {/* Figma 760 × 228 */}
        <div
          className="
            mt-6

            grid
            grid-cols-1
            gap-6

            rounded-2xl
            border
            border-white/10

            bg-linear-to-b
            from-[#0E0B16]
            to-[#1A1030]

            p-6

            md:grid-cols-[1fr_300px]
            md:items-center
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
            "
          >
            {[
              'Open Template Gallery',
              'Choose Content Repurposer',
              'Select Use template',
              'Replace the sample URL and run',
            ].map((item, index) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3

                  text-[13px]
                  text-[#D4D4D8]
                "
              >
                <span
                  className="
                    flex
                    size-6
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                    bg-[#8B5CF6]/15

                    text-[10px]
                    text-[#C281FF]
                  "
                >
                  {index + 1}
                </span>

                {item}
              </div>
            ))}
          </div>

          <div
            className="
              relative
              aspect-[300/180]
              overflow-hidden

              rounded-2xl
              border
              border-white/10

              bg-[#08070B]
            "
          >
            <Image
              src="/images/quick-start/template-gallery.svg"
              alt="Template Gallery"
              fill
              sizes="300px"
              className="object-contain"
            />
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          TROUBLESHOOTING
      ====================================================== */}

      <motion.section
        id="troubleshooting"
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: 0.65,
        }}
        className="
          mt-16
          scroll-mt-28
        "
      >
        <h2
          className="
            font-space
            text-[28px]
            font-medium
            tracking-[-0.03em]
            text-white
          "
        >
          Troubleshooting
        </h2>

        <p
          className="
            mt-2

            text-[13px]
            text-[#A1A1AA]
          "
        >
          Quick fixes for the most common first-run issues.
        </p>

        <div
          className="
            mt-6
            flex
            flex-col
            gap-2
          "
        >
          {troubleshootingItems.map(
            (item, index) => {
              const open =
                openIndex === index;

              return (
                <div
                  key={item.title}
                  className="
                    overflow-hidden
                    rounded-xl
                    bg-white
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(
                        open
                          ? -1
                          : index,
                      )
                    }
                    className="
                      flex
                      min-h-12
                      w-full
                      items-center
                      justify-between
                      gap-5

                      px-4

                      text-left
                      text-[12px]
                      font-medium
                      text-[#18181B]

                      cursor-pointer
                    "
                  >
                    <span>
                      {item.title}
                    </span>

                    <motion.span
                      animate={{
                        rotate:
                          open
                            ? 180
                            : 0,
                      }}
                      className="
                        text-[16px]
                        text-[#A1A1AA]
                      "
                    >
                      ⌄
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                      >
                        <p
                          className="
                            px-4
                            pb-5

                            text-[11px]
                            leading-[18px]
                            text-[#A1A1AA]
                          "
                        >
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            },
          )}
        </div>
      </motion.section>

      {/* =====================================================
          WHAT'S NEXT
      ====================================================== */}

      <motion.section
        id="next"
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: 0.65,
        }}
        className="
          mt-16
          scroll-mt-28
        "
      >
        <h2
          className="
            font-space
            text-[28px]
            font-medium
            tracking-[-0.03em]
            text-white
          "
        >
          What&apos;s next
        </h2>

        <p
          className="
            mt-2

            text-[13px]
            text-[#A1A1AA]
          "
        >
          Turn your first workflow into something your whole team can use.
        </p>

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2
          "
        >
          {nextItems.map(
            ({
              icon: Icon,
              title,
              description,
            }) => (
              <motion.div
                key={title}
                whileHover={{
                  borderColor:
                    'rgba(139,92,246,0.45)',
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group

                  flex
                  min-h-31
                  items-center
                  gap-4

                  rounded-2xl
                  border
                  border-white/10

                  bg-linear-to-b
                  from-[#0E0B16]
                  to-[#1A1030]

                  p-5
                "
              >
                <span
                  className="
                    flex
                    size-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl
                    bg-[#8B5CF6]/15
                  "
                >
                  <Icon
                    className="
                      size-4
                      text-[#8B5CF6]
                    "
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-[14px]
                      font-semibold
                      text-white
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-1

                      text-[11px]
                      leading-[17px]
                      text-[#A1A1AA]
                    "
                  >
                    {description}
                  </p>
                </div>

                <ExternalLink
                  className="
                    size-3.5
                    shrink-0
                    text-[#71717A]

                    transition-colors

                    group-hover:text-[#C281FF]
                  "
                />
              </motion.div>
            ),
          )}
        </div>
      </motion.section>

      {/* =====================================================
          FEEDBACK
      ====================================================== */}

      <div
        className="
          mt-16

          flex
          flex-col
          gap-4

          border-y
          border-white/20

          py-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p
          className="
            text-[11px]
            font-medium
            text-white
          "
        >
          Was this helpful?
        </p>

        <div className="flex gap-2">
          <FeedbackButton>
            <ArrowUp className="size-3.5" />

            Yes
          </FeedbackButton>

          <FeedbackButton>
            <ArrowDown className="size-3.5" />

            Not yet
          </FeedbackButton>
        </div>
      </div>

      {/* =====================================================
          PREVIOUS / NEXT
      ====================================================== */}

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-3

          sm:grid-cols-2
        "
      >
        <Link
          href="/docs"
          className="
            flex
            min-h-18
            items-center

            rounded-xl
            bg-white

            px-5

            text-[10px]
            font-medium
            uppercase
            text-[#71717A]

            transition-opacity

            hover:opacity-90
          "
        >
          <ArrowLeft className="mr-2 size-3" />

          Previous
        </Link>

        <Link
          href="/docs/core-concepts"
          className="
            flex
            min-h-18
            flex-col
            items-end
            justify-center

            rounded-xl
            border
            border-[#8B5CF6]

            bg-[#8B5CF6]

            px-5

            text-white

            transition-[background-color,box-shadow]
            duration-300

            hover:bg-[#7C3AED]
            hover:shadow-[0_12px_36px_rgba(139,92,246,0.18)]
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-1

              text-[9px]
              uppercase
              tracking-[0.08em]
              text-white/50
            "
          >
            Next

            <ArrowRight className="size-3" />
          </span>

          <span
            className="
              mt-1

              text-[14px]
              font-medium
            "
          >
            Core concepts
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ============================================================
   FEEDBACK
============================================================ */

function FeedbackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="
        inline-flex
        items-center
        gap-2

        rounded-full
        bg-white

        px-4
        py-2.5

        text-[11px]
        font-medium
        text-[#A1A1AA]

        transition-[background-color,color]
        duration-200

        hover:bg-[#F4F4F5]
        hover:text-[#52525B]

        cursor-pointer
      "
    >
      {children}
    </button>
  );
}