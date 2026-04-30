"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WaitlistCTA() {
  return (
    <section className="w-full flex justify-center bg-[#010101] py-[16px] sm:py-[32px] lg:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          w-full
          max-w-[1200px]
          h-[320px]
          sm:h-[400px]
          lg:h-[558px]
          rounded-[8px]
          sm:rounded-[10px]
          lg:rounded-[12px]
          overflow-hidden
          flex
          items-center
          justify-center
          bg-[#010101]
        "
      >
        {/* Background SVG */}
        <Image
          src="/images/waitlist-bg.svg"
          alt="background glow"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-[16px] sm:gap-[24px] lg:gap-6 px-4">
          {/* Heading */}
          <h2
            className="
              max-w-[720px]
              text-white
              font-medium
              text-[28px]
              sm:text-[40px]
              lg:text-[56px]
              leading-[36px]
              sm:leading-[50px]
              lg:leading-[65px]
              tracking-[-0.015em]
            "
          >
            All AI Tools in One Place
            <br />
            for everyone.
          </h2>

          {/* Input + Button */}
          <div className="relative flex items-center mt-[8px] sm:mt-[16px] lg:mt-4 w-full max-w-[401px]">
            <input
              type="email"
              placeholder="Your email"
              className="
                w-full
                h-[40px]
                sm:h-[45px]
                lg:h-[49px]
                px-[12px]
                sm:px-[16px]
                pr-[100px]
                sm:pr-[120px]
                lg:pr-[130px]
                rounded-[6px]
                sm:rounded-[8px]
                border
                border-white/15
                bg-transparent
                text-white
                placeholder:text-white/50
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                leading-[22px]
                sm:leading-[24px]
                lg:leading-[26px]
                tracking-[-0.01em]
                outline-none
                focus:border-white/40
                transition
              "
            />

            <button
              className="
                absolute
                right-[2px]
                sm:right-[3px]
                lg:right-[4px]
                w-[96px]
                sm:[108px]
                lg:w-[114px]
                h-[36px]
                sm:h-[39px]
                lg:h-[41px]
                px-[12px]
                sm:px-[14px]
                lg:px-[15px]
                rounded-[4px]
                sm:rounded-[6px]
                lg:rounded-[6px]
                bg-white
                text-black
                font-medium
                text-[13px]
                sm:text-[14px]
                lg:text-[15px]
                leading-[20px]
                sm:leading-[26px]
                lg:leading-[31px]
                tracking-[-0.01em]
                hover:bg-white/90
                transition
                whitespace-nowrap
              "
            >
              Join waitlist
            </button>
          </div>

          {/* Footer Text */}
          <p
            className="
              text-white/50
              text-[12px]
              sm:text-[14px]
              lg:text-[16px]
              leading-[20px]
              sm:leading-[22px]
              lg:leading-[26px]
              tracking-[-0.01em]
              mt-[4px]
              sm:mt-[8px]
              lg:mt-2
            "
          >
            No credit card required
          </p>
        </div>
      </motion.div>
    </section>
  );
}