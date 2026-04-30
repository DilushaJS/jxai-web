'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Docs', href: '/docs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Quick Start', href: '/quick-start' },
  { label: 'Playground', href: '/playground' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-[1440px] mx-auto px-3 sm:px-4 py-2 sm:py-3 bg-[#010101] backdrop-blur-md">
      <div className="mx-auto flex min-h-[52px] sm:min-h-14 flex-col gap-3 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="images/jxai-logo.svg"
              alt="JXAI Logo"
              width={39}
              height={24}
            />
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md text-white transition-colors duration-200 hover:bg-white/10 sm:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              aria-hidden="true"
              className="flex flex-col items-center justify-center gap-1"
            >
              <span className="h-0.5 w-5 rounded-full bg-white" />
              <span className="h-0.5 w-5 rounded-full bg-white" />
              <span className="h-0.5 w-5 rounded-full bg-white" />
            </span>
          </button>
        </div>
        <nav
          id="mobile-nav"
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-1 flex-col items-center gap-2 sm:gap-3 rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-3 sm:py-4 text-[12px] sm:text-[13.9px] leading-[18px] sm:leading-[21px] tracking-[-0.28px] text-white sm:flex sm:flex-row sm:justify-center sm:gap-x-8 sm:border-none sm:bg-transparent sm:px-0 sm:py-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-normal transition-opacity duration-200 hover:opacity-80 py-1.5 sm:py-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } w-full sm:w-auto items-center justify-center sm:flex`}
        >
          <Link
            href="/dashboard"
            className="w-full sm:w-auto rounded-md px-3 sm:px-4 py-2 sm:py-2 text-center text-[12px] sm:text-[13.9px] font-semibold leading-[18px] sm:leading-[21px] tracking-[-0.28px] text-[#191A1F] transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
              boxShadow: '0px 2px 14px 0px #FFFFFF59',
            }}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
