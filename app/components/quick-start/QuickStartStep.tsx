'use client';

import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

type QuickStartStepProps = {
  id: string;
  number: number;
  eyebrow?: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
};

export default function QuickStartStep({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
}: QuickStartStepProps) {
  return (
    <motion.section
      id={id}
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
      className="
        relative
        scroll-mt-28

        py-9

        sm:py-11
      "
    >
      {/* timeline */}
      <div
        aria-hidden="true"
        className="
          absolute
          -left-7
          top-0
          bottom-0

          hidden

          w-px

          bg-linear-to-b
          from-transparent
          via-[#8C45FF]/25
          to-transparent

          sm:block
        "
      />

      <div className="flex gap-4">
        <div
          className="
            relative
            z-10

            flex
            size-7
            shrink-0
            items-center
            justify-center

            rounded-full

            bg-[#8C45FF]

            text-[11px]
            font-semibold
            text-white

            shadow-[0_0_20px_rgba(140,69,255,0.35)]
          "
        >
          {number}
        </div>

        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p
              className="
                mb-1

                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#8C45FF]
              "
            >
              {eyebrow}
            </p>
          )}

          <h2
            className="
              font-space
              text-[22px]
              font-medium
              leading-8
              tracking-[-0.025em]
              text-white

              sm:text-2xl
            "
          >
            {title}
          </h2>

          <div
            className="
              mt-2

              max-w-170

              text-[13px]
              leading-6
              text-[#A1A1AA]

              [&_strong]:font-medium
              [&_strong]:text-white
            "
          >
            {description}
          </div>

          {children}
        </div>
      </div>
    </motion.section>
  );
}