'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { fadeUp } from '@/app/lib/motion';

type ArticleStepProps = {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
};

export default function ArticleStep({
  id,
  number,
  title,
  children,
}: ArticleStepProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: '-80px',
      }}
      className="
        scroll-mt-28
        py-4
      "
    >
      <div className="flex gap-4">
        <div
          className="
            flex
            size-6
            shrink-0
            items-center
            justify-center

            rounded-full
            bg-[#8B5CF6]/20

            text-[11px]
            font-medium
            text-[#A855F7]
          "
        >
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2
            className="
              font-space
              text-xl
              font-medium
              tracking-[-0.02em]
              text-[#FAFAFA]
            "
          >
            {title}
          </h2>

          <div
            className="
              mt-2

              text-[14px]
              leading-6
              text-[#A1A1AA]

              [&_strong]:font-medium
              [&_strong]:text-white
            "
          >
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}