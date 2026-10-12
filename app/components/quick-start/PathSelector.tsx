'use client';

import {
  MessageSquareText,
  PanelsTopLeft,
} from 'lucide-react';

import { motion } from 'framer-motion';

const paths = [
  {
    icon: MessageSquareText,
    badge: 'Recommended',
    title: 'Start with a prompt',
    description:
      'Describe your goal and let JX AI build the workflow for you.',
  },

  {
    icon: PanelsTopLeft,
    badge: 'Faster',
    title: 'Start from a template',
    description:
      'Duplicate a ready-made workflow and customize the details.',
  },
];

export default function PathSelector() {
  return (
    <section
      id="choose-path"
      className="
        scroll-mt-28
        py-10
      "
    >
      <p
        className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#8C45FF]
        "
      >
        Choose your path
      </p>

      <h2
        className="
          mt-1
          font-space
          text-xl
          font-medium
          text-white
        "
      >
        Learn the basics from scratch, or
        start from a proven template.
      </h2>

      <div
        className="
          mt-5

          grid
          grid-cols-1
          gap-3

          sm:grid-cols-2
        "
      >
        {paths.map(
          ({
            icon: Icon,
            badge,
            title,
            description,
          }) => (
            <motion.div
              key={title}
              whileHover={{
                borderColor:
                  'rgba(140,69,255,0.5)',
              }}
              className="
                group

                rounded-xl
                border
                border-[#8C45FF]/20

                bg-[#100718]

                p-4

                transition-[background-color,box-shadow]

                hover:bg-[#160A20]
                hover:shadow-[0_14px_40px_rgba(140,69,255,0.07)]
              "
            >
              <div className="flex items-center justify-between">
                <Icon
                  className="
                    size-4
                    text-[#C281FF]
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.1em]
                    text-[#8C45FF]
                  "
                >
                  {badge}
                </span>
              </div>

              <h3
                className="
                  mt-5

                  text-sm
                  font-medium
                  text-white
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-2

                  text-[11px]
                  leading-[18px]
                  text-[#71717A]
                "
              >
                {description}
              </p>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}