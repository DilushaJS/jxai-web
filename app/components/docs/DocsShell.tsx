'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import type { DocsTocItem } from '@/app/lib/docs';
import {
  fadeUp,
  staggerContainer,
} from '@/app/lib/motion';

import DocsSidebar from './DocsSidebar';
import DocsMobileNav from './DocsMobileNav';
import DocsToc from './DocsToc';

type DocsShellProps = {
  children: ReactNode;
  toc: DocsTocItem[];
};

export default function DocsShell({
  children,
  toc,
}: DocsShellProps) {
  return (
    <section
      className="
        w-full
        bg-[#010101]
        text-[#FAFAFA]
      "
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="
          mx-auto

          grid
          w-full
          max-w-7xl
          grid-cols-1

          gap-10

          px-4
          py-10

          sm:px-6
          sm:py-12

          lg:px-8

          xl:grid-cols-[220px_minmax(0,640px)]
          xl:gap-12

          2xl:grid-cols-[220px_minmax(0,640px)_200px]
          2xl:gap-14
        "
      >
        <DocsSidebar />

        <motion.main
          variants={fadeUp}
          className="
            min-w-0
            w-full
            max-w-160
          "
        >
          <DocsMobileNav />

          {children}
        </motion.main>

        <DocsToc items={toc} />
      </motion.div>
    </section>
  );
}