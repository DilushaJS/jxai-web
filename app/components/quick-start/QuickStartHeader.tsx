'use client';

import {
  Clock3,
  Sparkles,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { fadeUp } from '@/app/lib/motion';

export default function QuickStartHeader() {
  return (
    <motion.header
      variants={fadeUp}
      className="mb-8"
    >
      {/* Breadcrumb */}
      <div
        className="
          mb-4
          flex
          items-center
          gap-2

          text-[10px]
          font-medium
          uppercase
          tracking-[0.14em]
        "
      >
        <span className="text-[#71717A]">
          Get Started
        </span>

        <span className="text-[#3F3F46]">
          /
        </span>

        <span className="text-[#C281FF]">
          Quick Start
        </span>
      </div>

      <h1
        className="
          font-space
          text-4xl
          font-medium
          leading-tight
          tracking-[-0.04em]
          text-white

          sm:text-5xl

          lg:text-[56px]
        "
      >
        Quick Start
      </h1>

      <p
        className="
          mt-3

          max-w-150

          font-sans
          text-[15px]
          leading-6
          text-[#A1A1AA]
        "
      >
        Build and run your first AI workflow
        in about 5 minutes. No code needed.
      </p>

      <div
        className="
          mt-4
          flex
          flex-wrap
          items-center
          gap-2
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-1.5

            rounded-full
            border
            border-white/10

            bg-white/5

            px-2.5
            py-1

            text-[10px]
            text-[#A1A1AA]
          "
        >
          <Clock3 className="size-3" />
          5 min
        </span>

        <span
          className="
            rounded-full
            border
            border-[#8C45FF]/20

            bg-[#8C45FF]/10

            px-2.5
            py-1

            text-[10px]
            text-[#C281FF]
          "
        >
          Beginner
        </span>

        <span
          className="
            inline-flex
            items-center
            gap-1.5

            rounded-full
            border
            border-white/10

            px-2.5
            py-1

            text-[10px]
            text-[#71717A]
          "
        >
          <Sparkles className="size-3" />
          No code
        </span>
      </div>
    </motion.header>
  );
}