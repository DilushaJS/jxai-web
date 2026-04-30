"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function MoreInfoBlog() {
  return (
    <section className="w-full flex justify-center bg-[#010101] py-24 px-4">
      <div className="w-full max-w-[1200px] relative flex flex-col items-center text-center">

        {/* More Info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            font-semibold
            text-white
            text-[24px]
            md:text-[28px]
            lg:text-[32px]
            tracking-[0.1em]
            font-[family-name:var(--font-cal)]
            mb-6
          "
        >
          More Info
        </motion.p>

        {/* Text Container with background image */}
        <div className="relative w-full max-w-[969px] flex flex-col items-center gap-6 pb-[200px] md:pb-[300px] lg:pb-[400px]">

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative z-10
              text-white
              font-semibold
              font-[family-name:var(--font-cal)]
              tracking-[0.01em]
              leading-[100%]

              text-[44px]
              sm:text-[56px]
              md:text-[72px]
              lg:text-[96px]
            "
          >
            Visit Our Blog Page
          </motion.h2>

          {/* Background Image (starts under title) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              absolute
              top-[120px]
              md:top-[140px]
              lg:top-[160px]
              left-1/2
              -translate-x-1/2
              w-[400px]
              md:w-[550px]
              lg:w-[679px]
              h-auto
              opacity-80
              pointer-events-none
              z-0
            "
          >
            <Image
              src="/images/more-info-bg.svg"
              alt="More info background"
              width={679}
              height={760}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative z-10
              text-white
              font-light
              font-[family-name:var(--font-dm)]
              text-[16px]
              md:text-[18px]
              lg:text-[20px]
              leading-[100%]
              max-w-[720px]
            "
          >
            As seasoned executives, we've had the privilege of
            working with a multitude of companies from diverse
            backgrounds.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              relative z-10
              flex
              items-center
              gap-2
              px-5
              h-[36.84px]
              rounded-[21.98px]
              bg-[#06C0CA1A]
              text-white
              text-[16px]
              font-medium
              font-[family-name:var(--font-dm)]
              hover:bg-[#06C0CA33]
              transition
            "
          >
            Blog Page
            <ChevronRight size={16} />
          </motion.button>

        </div>

      </div>
    </section>
  );
}