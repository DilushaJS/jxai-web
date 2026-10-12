'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

type QuickStartScreenshotProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function QuickStartScreenshot({
  src,
  alt,
  width = 760,
  height = 460,
}: QuickStartScreenshotProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        mt-5

        overflow-hidden

        rounded-xl

        border
        border-white/10

        bg-[#09060E]

        shadow-[0_18px_70px_rgba(0,0,0,0.35)]

        transition-[border-color,box-shadow]
        duration-500

        hover:border-[#8C45FF]/25
        hover:shadow-[0_24px_90px_rgba(140,69,255,0.08)]
      "
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="
          h-auto
          w-full
          object-contain
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[15%]
          top-0

          h-px

          bg-linear-to-r
          from-transparent
          via-[#C281FF]/35
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}