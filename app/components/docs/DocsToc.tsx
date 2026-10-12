'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import type { DocsTocItem } from '@/app/lib/docs';

type DocsTocProps = {
  items: DocsTocItem[];
};

export default function DocsToc({
  items,
}: DocsTocProps) {
  const [activeId, setActiveId] =
    useState(items[0]?.id ?? '');

  useEffect(() => {
    const elements = items
      .map((item) =>
        document.getElementById(item.id),
      )
      .filter(
        (
          element,
        ): element is HTMLElement =>
          Boolean(element),
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) =>
                entry.isIntersecting,
            )
            .sort(
              (a, b) =>
                a.boundingClientRect.top -
                b.boundingClientRect.top,
            );

          if (visible[0]?.target.id) {
            setActiveId(
              visible[0].target.id,
            );
          }
        },
        {
          rootMargin:
            '-20% 0px -70% 0px',
        },
      );

    elements.forEach((element) =>
      observer.observe(element),
    );

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside
      className="
        sticky
        top-24

        hidden
        h-fit
        w-50
        shrink-0

        border-l
        border-white/10

        pl-5

        2xl:block
      "
    >
      <p
        className="
          mb-4

          text-[10px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-[#D4D4D8]
        "
      >
        On this page
      </p>

      <nav className="flex flex-col gap-2">
        {items.map((item) => {
          const active =
            activeId === item.id;

          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`
                text-[12px]
                leading-5

                transition-colors
                duration-200

                ${
                  active
                    ? 'text-[#A855F7]'
                    : 'text-[#71717A] hover:text-[#D4D4D8]'
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6">
        <p
          className="
            mb-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#71717A]
          "
        >
          Need help?
        </p>

        <a
          href="#"
          className="
            text-[12px]
            text-[#A1A1AA]
            transition-colors
            hover:text-white
          "
        >
          Ask the community ↗
        </a>
      </div>
    </aside>
  );
}