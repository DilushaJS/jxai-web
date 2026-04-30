'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import IconStrip from '../common/IconStrip';

export default function Hero() {
  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 1.05 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="relative w-full overflow-visible bg-[#010101]">
      {/* ── Hero Background Image ────────────────────────────────────────── */}
      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        className="relative flex justify-center pt-6 sm:pt-10 lg:pt-12"
        style={{ minHeight: '300px', maxHeight: 'auto' }}
      >
        <Image
          src="/images/home-hero.svg"
          alt=""
          width={1096}
          height={808.3}
          priority
          className="pointer-events-none select-none w-full h-auto md:w-full md:h-auto lg:w-[1096px] lg:h-[808.3px] object-contain"
          aria-hidden="true"
        />
      </motion.div>

      {/* ── Overlay Content ───────────────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 flex flex-col items-center justify-start pt-6 pointer-events-none"
      >
        {/* ── "Backed by" badge ─────────────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="pointer-events-auto">
          <span className="rounded-[8px] border border-[#171717] px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[9px] sm:text-[10px] md:text-[11.8px] leading-[12px] sm:leading-[13px] md:leading-[14.4px] -tracking-[0.6px] font-normal text-white/60 backdrop-blur-sm inline-block">
            Backed by
          </span>
        </motion.div>

        {/* ── Headline copy ────────────────────────────────────────────────── */}
        <div className="relative z-10 mx-auto mt-4 sm:mt-6 lg:mt-8 max-w-3xl px-3 sm:px-4 md:px-6 text-center pointer-events-auto">
          <motion.h1
            variants={fadeUp}
            className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56.1px] font-normal leading-[32px] sm:leading-[44px] md:leading-[60px] lg:leading-[78px] tracking-tight text-white"
          >
            Build your AI workflow
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-2 sm:mt-3 md:mt-4 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15.9px] leading-[15px] sm:leading-[17px] md:leading-[18px] lg:leading-[19.2px] tracking-[-0.8px] text-white/70"
          >
            Empower day to day with Deep Knowledge with all available ai tools.
            <br className="hidden sm:block" />
            Give Users the Experience They Deserve
          </motion.p>

          {/* ── CTA buttons ───────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
          >
            {/* Start Free */}
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] md:text-[13.8px] font-medium leading-[14px] sm:leading-[15px] md:leading-[15.4px] text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(180deg, rgba(69, 69, 69, 0.2) 0%, #1F1F1F 100%)',
                boxShadow: `
                  0px 0.6px 1.57px -1.17px #48588AAD inset,
                  0px 2.29px 5.95px -2.33px #48588A9C inset,
                  0px 10px 26px -3.5px #48588A4D inset,
                  0px 0.6px 0.6px -1.25px #CCD1D92E inset,
                  0px 2.29px 2.29px -2.5px #CCD1D929 inset,
                  0px 10px 10px -3.75px #CCD1D90F inset,
                  0px 0px 0px -1.75px #48588AA6,
                  0px 0px 0px -3.5px #48588A4D,
                  0px -0.8px 0.8px -0.94px #48588A94 inset,
                  0px -2.41px 2.41px -1.88px #48588A8C inset
                `,
              }}
            >
              Start Free
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-current" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] md:text-[13.8px] font-medium leading-[14px] sm:leading-[15px] md:leading-[15.4px] text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.2) 0%, rgba(31, 31, 31, 0.2) 100%)',
                boxShadow: `
                  0px 0px 0px -1.75px #1249B0A6,
                  0px 0px 0px -3.5px #1249B04D,
                  0px 0.6px 0.6px -1.25px #CCD1D92E inset,
                  0px 2.29px 2.29px -2.5px #CCD1D929 inset,
                  0px 10px 10px -3.75px #CCD1D90F inset,
                  0px 0.6px 1.57px -1.17px #1249B0AD inset,
                  0px 2.29px 5.95px -2.33px #1249B09C inset,
                  0px 10px 26px -3.5px #1249B04D inset,
                  0px -0.8px 0.8px -0.69px #1249B070 inset,
                  0px -2.41px 2.41px -1.38px #1249B06E inset
                `,
              }}
            >
              Contact Us
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom Icon Stripe ───────────────────────────────────────────── */}
      <div className="relative z-20 w-full mt-[-60px] sm:mt-[-100px] md:mt-[-130px] lg:mt-[-164px]">
        <IconStrip />
      </div>
    </section>
  );
}