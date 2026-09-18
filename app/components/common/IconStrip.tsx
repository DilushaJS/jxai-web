'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stripIcons = [
  '/icons/icon-strip/sketch.svg',
  '/icons/icon-strip/notion.svg',
  '/icons/icon-strip/slack.svg',
  '/icons/icon-strip/hubspot.svg',
  '/icons/icon-strip/github.svg',
  '/icons/icon-strip/postgres.svg',
  '/icons/icon-strip/outlook.svg',
  '/icons/icon-strip/dropbox.svg',
  '/icons/icon-strip/linear.svg',
  '/icons/icon-strip/zapier.svg',
  '/icons/icon-strip/linear2.svg',
  '/icons/icon-strip/skype.svg',
  '/icons/icon-strip/gmail.svg',
  '/icons/icon-strip/discord.svg',
  '/icons/icon-strip/drive.svg',
  '/icons/icon-strip/cloud.svg',
  '/icons/icon-strip/zendesk.svg',
  'icons/icon-strip/click-up.svg',
  'icons/icon-strip/calendar.svg',
  'icons/icon-strip/intercom.svg',
  'icons/icon-strip/monday.svg',
  'icons/icon-strip/mysql.svg',
  'icons/icon-strip/oracle.svg',
  'icons/icon-strip/sql-server.svg',
  'icons/icon-strip/sqlite.svg',
  'icons/icon-strip/trello.svg',
];

function IconGroup() {
  return (
    <div className="flex shrink-0 items-center gap-2 pr-2 sm:gap-3 sm:pr-3">
      {stripIcons.map((icon, index) => (
        <div
          key={`${icon}-${index}`}
          className="size-8 shrink-0 overflow-hidden rounded-xl"
        >
          <Image
            src={icon}
            alt=""
            width={32}
            height={32}
            className="size-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function IconStrip() {
  return (
    <div className="w-full bg-[#010101]">
      {/* Heading */}
      <div className="flex justify-center px-4 pt-6 sm:px-6 sm:pt-10 md:pt-12">
        <h2
          className="
            text-center
            text-[13px]
            font-normal
            leading-4
            tracking-[-0.9px]
            text-white/90
            sm:text-[15px]
            sm:leading-4.75
            md:text-[17.6px]
            md:leading-[21.6px]
          "
        >
          All the AI tools at your fingertips
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="
          relative
          mx-auto
          mt-3
          w-full
          max-w-70
          overflow-hidden

          sm:mt-4
          sm:max-w-150

          md:mt-6
          md:max-w-205

          lg:max-w-7xl
        "
      >
        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-8
            bg-linear-to-r
            from-[#010101]
            to-transparent
            sm:w-12
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-10
            w-8
            bg-linear-to-l
            from-[#010101]
            to-transparent
            sm:w-12
          "
        />

        {/* Continuous moving track */}
        <motion.div
          className="flex w-max py-3 sm:py-4"
          animate={{
            x: ['0%', '-25%'],
          }}
          transition={{
            duration: 36,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <IconGroup />
          <IconGroup />
          <IconGroup />
          <IconGroup />
        </motion.div>
      </div>
    </div>
  );
}