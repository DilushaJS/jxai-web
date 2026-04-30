'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stripIcons = [
  '/icons/sketch.svg',
  '/icons/notion.svg',
  '/icons/slack.svg',
  '/icons/hubspot.svg',
  '/icons/github.svg',
  '/icons/postgres.svg',
  '/icons/outlook.svg',
  '/icons/dropbox.svg',
  '/icons/linear.svg',
  '/icons/zapier.svg',
  '/icons/linear2.svg',
  '/icons/skype.svg',
  '/icons/gmail.svg',
  '/icons/discord.svg',
];

export default function IconStrip() {
  // Duplicate icons 3x for seamless infinite loop (eliminates visible restart)
  const duplicatedIcons = [...stripIcons, ...stripIcons, ...stripIcons];

  return (
    <div className="w-full ">
      {/* ── Heading ──────────────────────────────────────────────────────── */}
      <div className="flex justify-center px-4 sm:px-6 pt-6 sm:pt-10 md:pt-12">
        <h2
          className="text-center text-[13px] sm:text-[15px] md:text-[17.6px] font-normal leading-[16px] sm:leading-[19px] md:leading-[21.6px] tracking-[-0.9px]"
          style={{ color: '#FFFFFFE5' }}
        >
          All the AI tools at your fingertips
        </h2>
      </div>

      {/* ── Icon Strip with Infinite Scroll ────────────────────────────── */}
      <div className="mt-3 sm:mt-4 md:mt-6 mx-auto max-w-[280px] sm:max-w-[600px] md:max-w-[820px] w-full overflow-hidden relative">
        {/* Left fade shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 md:w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        {/* Right fade shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 md:w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-2 sm:gap-3 py-3 sm:py-4 px-1 sm:px-2"
          animate={{ x: [0, -stripIcons.length * 40] }}
          transition={{
            duration: stripIcons.length * 1.5,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {duplicatedIcons.map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '12px',
                opacity: 1,
              }}
            >
              <Image
                src={icon}
                alt={`Integration icon ${index}`}
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
