'use client';

import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '@/app/lib/motion';

import QuickStartMobileNav from './QuickStartMobileNav';
import QuickStartSidebar from './QuickStartSidebar';
import QuickStartToc from './QuickStartToc';

type QuickStartShellProps = {
  children: ReactNode;
};

export default function QuickStartShell({
  children,
}: QuickStartShellProps) {
  return (
    <section
      className="
        relative
        w-full
        bg-[#010101]
        text-white
      "
    >
      {/* subtle top purple atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0

          h-70
          w-3/5

          -translate-x-1/2

          rounded-full

          bg-[#8C45FF]/5

          blur-[140px]
        "
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="
          relative
          z-10

          mx-auto

          grid
          w-full
          max-w-320
          grid-cols-1

          gap-10

          px-4
          py-10

          sm:px-6
          sm:py-12

          lg:px-8

          xl:grid-cols-[220px_minmax(0,760px)]
          xl:gap-12

          2xl:grid-cols-[220px_minmax(0,760px)_208px]
          2xl:gap-12
        "
      >
        <QuickStartSidebar />

        <motion.main
          variants={fadeUp}
          className="
            min-w-0
            w-full
            max-w-190
          "
        >
          <QuickStartMobileNav />

          {children}
        </motion.main>

        <QuickStartToc />
      </motion.div>
    </section>
  );
}