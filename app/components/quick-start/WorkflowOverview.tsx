'use client';

import {
  FileText,
  Send,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { motion } from 'framer-motion';

const nodes = [
  {
    icon: FileText,
    label: 'Article',
  },
  {
    icon: Sparkles,
    label: 'Extract ideas',
  },
  {
    icon: WandSparkles,
    label: 'Generate',
  },
  {
    icon: Send,
    label: 'Publish',
  },
];

export default function WorkflowOverview() {
  return (
    <motion.section
      id="what-you-build"
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
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        scroll-mt-28

        overflow-hidden

        rounded-2xl

        border
        border-[#8C45FF]/30

        bg-[#100718]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          border-b
          border-white/10

          px-5
          py-4
        "
      >
        <div>
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#8C45FF]
            "
          >
            What you&apos;ll build
          </p>

          <h2
            className="
              mt-1

              font-space
              text-lg
              font-medium
              text-white
            "
          >
            A content repurposing workflow
          </h2>
        </div>

        <span
          className="
            rounded-full
            border
            border-[#8C45FF]/25

            bg-[#8C45FF]/10

            px-2
            py-1

            text-[9px]
            text-[#C281FF]
          "
        >
          5 MIN
        </span>
      </div>

      <div className="p-5">
        <div
          className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-4
          "
        >
          {nodes.map(
            ({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="
                  relative

                  rounded-lg
                  border
                  border-[#8C45FF]/20

                  bg-[#0A0710]

                  p-3
                "
              >
                <Icon
                  className="
                    size-4
                    text-[#C281FF]
                  "
                />

                <p
                  className="
                    mt-3
                    text-[10px]
                    text-[#D4D4D8]
                  "
                >
                  {label}
                </p>

                {index <
                  nodes.length - 1 && (
                  <span
                    className="
                      absolute
                      -right-3
                      top-1/2
                      z-10

                      hidden

                      -translate-y-1/2

                      text-[#8C45FF]

                      sm:block
                    "
                  >
                    →
                  </span>
                )}
              </div>
            ),
          )}
        </div>

        <p
          className="
            mt-5

            text-[12px]
            leading-5
            text-[#71717A]
          "
        >
          Start with an article or idea, let
          JX AI process the content, then turn
          the result into reusable outputs.
        </p>
      </div>
    </motion.section>
  );
}