'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
} from 'lucide-react';

import { docsNavigation } from '@/app/lib/docs';

export default function DocsMobileNav() {
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
          bg-[#0E0B16]

          px-4
          py-3

          text-sm
          text-white
        "
      >
        Documentation

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
            bg-[#07070A]

            p-4
          "
        >
          <nav className="flex flex-col gap-6">
            {docsNavigation.map((group) => (
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
                    text-[#71717A]
                  "
                >
                  {group.label}
                </p>

                {group.items.map((item) => {
                  const active =
                    pathname === item.href;

                  return (
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
                          active
                            ? 'bg-[#151020] text-[#A855F7]'
                            : 'text-[#A1A1AA]'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}