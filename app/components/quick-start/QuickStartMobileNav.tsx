'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Menu,
  X,
} from 'lucide-react';

import { quickStartNavigation } from '@/app/lib/quick-start';

export default function QuickStartMobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8 xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="
          flex
          w-full
          items-center
          justify-between

          rounded-xl
          border
          border-white/10

          bg-[#0D0913]

          px-4
          py-3

          text-sm
          text-white

          transition-colors

          hover:border-[#8C45FF]/40
        "
      >
        Quick Start

        {open ? (
          <X className="size-4" />
        ) : (
          <Menu className="size-4" />
        )}
      </button>

      {open && (
        <div
          className="
            mt-2
            max-h-100
            overflow-y-auto

            rounded-xl
            border
            border-white/10

            bg-[#07060A]

            p-4
          "
        >
          <nav className="flex flex-col gap-6">
            {quickStartNavigation.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2"
              >
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#52525B]
                  "
                >
                  {group.label}
                </p>

                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      rounded-lg
                      px-3
                      py-2

                      text-sm

                      ${
                        pathname === item.href
                          ? 'bg-[#8C45FF]/10 text-[#C281FF]'
                          : 'text-[#A1A1AA]'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}