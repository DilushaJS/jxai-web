'use client';

import {
  Clock3,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { fadeUp } from '@/app/lib/motion';

type ArticleHeaderProps = {
  breadcrumb: string[];
  badge?: string;
  title: string;
  description: string;
  readTime?: string;
  updated?: string;
};

export default function ArticleHeader({
  breadcrumb,
  badge,
  title,
  description,
  readTime = '6 min read',
  updated = 'Updated Sep 2026',
}: ArticleHeaderProps) {
  return (
    <motion.header
      variants={fadeUp}
      className="mb-10"
    >
      <div
        className="
          mb-5
          flex
          flex-wrap
          items-center
          gap-2

          text-[11px]
          text-[#71717A]
        "
      >
        {breadcrumb.map(
          (item, index) => (
            <span key={item}>
              {item}

              {index <
                breadcrumb.length -
                  1 && (
                <span className="ml-2">
                  /
                </span>
              )}
            </span>
          ),
        )}
      </div>

      {badge && (
        <div className="mb-4">
          <span
            className="
              inline-flex
              rounded-full
              bg-[#8B5CF6]/15

              px-2.5
              py-1

              text-[10px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-[#A855F7]
            "
          >
            {badge}
          </span>
        </div>
      )}

      <h1
        className="
          font-space
          text-4xl
          font-medium
          leading-tight
          tracking-[-0.035em]
          text-[#FAFAFA]

          sm:text-5xl
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-4
          max-w-150

          text-[16px]
          leading-7
          text-[#A1A1AA]
        "
      >
        {description}
      </p>

      <div
        className="
          mt-4
          flex
          flex-wrap
          items-center
          gap-4

          text-[11px]
          text-[#71717A]
        "
      >
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="size-3" />
          {readTime}
        </span>

        <span>{updated}</span>

        <span
          className="
            rounded-full
            bg-[#8B5CF6]/15
            px-2
            py-0.5
            text-[#A855F7]
          "
        >
          PRO
        </span>
      </div>
    </motion.header>
  );
}