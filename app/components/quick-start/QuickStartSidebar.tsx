'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { quickStartNavigation } from '@/app/lib/quick-start';
import { fadeIn } from '@/app/lib/motion';

export default function QuickStartSidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="
        sticky
        top-24

        hidden
        h-fit
        max-h-[calc(100vh-7rem)]
        w-55
        shrink-0
        overflow-y-auto

        pr-5

        xl:block
      "
    >
      <nav className="flex flex-col gap-7">
        {quickStartNavigation.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-2"
          >
            <p
              className="
                px-2

                font-sans
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#52525B]
              "
            >
              {group.label}
            </p>

            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active =
                  pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative

                      rounded-lg

                      px-3
                      py-2

                      font-sans
                      text-[13px]
                      leading-5

                      transition-[background-color,color]
                      duration-200

                      ${
                        active
                          ? `
                            bg-[#8C45FF]/10
                            text-[#C281FF]
                          `
                          : `
                            text-[#71717A]

                            hover:bg-white/5
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        layoutId="quick-start-active-nav"
                        className="
                          absolute
                          inset-y-2
                          left-0

                          w-0.5
                          rounded-full

                          bg-[#8C45FF]
                        "
                      />
                    )}

                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
}