'use client';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import Link from 'next/link';
import {
  Check,
  MessageCircleQuestion,
  Pencil,
} from 'lucide-react';

import { quickStartToc } from '@/app/lib/quick-start';

export default function QuickStartToc() {
  const [activeId, setActiveId] =
    useState(quickStartToc[0].id);

  useEffect(() => {
    const elements = quickStartToc
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

          if (visible[0]) {
            setActiveId(
              visible[0].target.id,
            );
          }
        },
        {
          rootMargin:
            '-22% 0px -68% 0px',
        },
      );

    elements.forEach((element) =>
      observer.observe(element),
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeIndex = useMemo(
    () =>
      Math.max(
        quickStartToc.findIndex(
          (item) =>
            item.id === activeId,
        ),
        0,
      ),
    [activeId],
  );

  const progress =
    ((activeIndex + 1) /
      quickStartToc.length) *
    100;

  return (
    <aside
      className="
        sticky
        top-24

        hidden
        h-fit
        w-52
        shrink-0

        2xl:block
      "
    >
      {/* On this page */}
      <div
        className="
          border-l
          border-white/10

          pl-5
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
          {quickStartToc.map((item) => {
            const active =
              activeId === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`
                  text-[11px]
                  leading-[18px]

                  transition-colors

                  ${
                    active
                      ? 'text-[#C281FF]'
                      : 'text-[#52525B] hover:text-[#A1A1AA]'
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Progress */}
      <div
        className="
          mt-7

          rounded-xl
          border
          border-[#8C45FF]/20

          bg-[#110A18]

          p-4
        "
      >
        <div className="flex items-center justify-between">
          <p
            className="
              text-[11px]
              font-medium
              text-white
            "
          >
            Your progress
          </p>

          <span
            className="
              text-[10px]
              text-[#C281FF]
            "
          >
            {Math.round(progress)}%
          </span>
        </div>

        <div
          className="
            mt-3
            h-1
            overflow-hidden
            rounded-full
            bg-white/5
          "
        >
          <div
            className="
              h-full
              rounded-full

              bg-linear-to-r
              from-[#8C45FF]
              to-[#C281FF]

              transition-[width]
              duration-500
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {quickStartToc
            .slice(0, 5)
            .map((item, index) => {
              const complete =
                index <= activeIndex;

              return (
                <div
                  key={item.id}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className={`
                      flex
                      size-3.5
                      items-center
                      justify-center

                      rounded-full
                      border

                      ${
                        complete
                          ? `
                            border-[#8C45FF]
                            bg-[#8C45FF]
                          `
                          : `
                            border-white/10
                          `
                      }
                    `}
                  >
                    {complete && (
                      <Check
                        className="
                          size-2.5
                          text-white
                        "
                      />
                    )}
                  </span>

                  <span
                    className="
                      text-[10px]
                      text-[#71717A]
                    "
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2

            text-[11px]
            text-[#71717A]

            transition-colors

            hover:text-white
          "
        >
          <MessageCircleQuestion className="size-3" />

          Ask JX AI
        </button>

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2

            text-[11px]
            text-[#71717A]

            transition-colors

            hover:text-white
          "
        >
          <Pencil className="size-3" />

          Edit this page
        </button>
      </div>
    </aside>
  );
}