'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section className="bg-black py-20 px-4 relative overflow-hidden">

      {/* ===== Heading ===== */}
      <div className="max-w-[900px] mx-auto text-center justify-center flex flex-col items-center gap-4">
        <h2 className="text-white font-medium text-[32px] sm:text-[44px] md:text-[56px] leading-[40px] sm:leading-[52px] md:leading-[65px] tracking-[-1.5%]">
          Our clients
        </h2>

        <p className="mt-4 text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[31px] tracking-[-0.01em] max-w-[400px]">
          Hear firsthand how our solutions have boosted online success for users like you.
        </p>
      </div>

      {/* ===== Testimonial Wrapper ===== */}
      <div className="relative max-w-[990px] mx-auto mt-16">

        {/* ===== Glow ===== */}
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[312px] h-[234px] bg-[#7DF9FF80] blur-[120px] pointer-events-none" />

        {/* ===== Top Border ===== */}
        <div className="h-[1px] -mb-[40px] w-full opacity-60 bg-gradient-to-r from-[#141315] via-white to-[#020103]" />

        {/* ===== Content ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-10"
        >

          {/* Left Vertical Line */}
          <div 
            className="hidden md:ml-[192px] lg:block absolute left-0 top-0 h-full border-l border-solid opacity-60"
            style={{
              borderImageSource: 'linear-gradient(180deg, #141315 0%, #FFFFFF 16.5%, #EAEAEA 86.5%, #020103 100%)',
              borderImageSlice: 1
            }}
          />

          {/* Right Vertical Line */}
          <div 
            className="hidden md:mr-[580px] lg:block absolute right-0 top-0 h-full border-r border-solid opacity-60"
            style={{
              borderImageSource: 'linear-gradient(180deg, #141315 0%, #FFFFFF 16.5%, #EAEAEA 86.5%, #020103 100%)',
              borderImageSlice: 1
            }}
          />

          {/* ===== Image ===== */}
          <div className="flex-shrink-0">
            <Image
                src="/images/talia-taylor.svg"
                alt="Talia Taylor"
                width={217}
                height={217}
                className="w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] md:w-[217px] md:h-[217px] rounded-[20px] object-cover"
            />
          </div>

          {/* ===== Text ===== */}
          <div className="text-center md:text-left max-w-[520px]">
            <p className="text-white font-medium text-[18px] sm:text-[20px] md:text-[23px] leading-[28px] md:leading-[34px] tracking-[-0.01em] max-w-[339px]">
              “This product has completely transformed how I manage my projects and deadlines”
            </p>

            <p className="mt-6 text-white text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.01em]">
              Talia Taylor
            </p>

            <p className="text-white/70 text-[13px] md:text-[14px] leading-[22px] md:leading-[26px] tracking-[-0.01em]">
              Digital Marketing Director @ Quantum
            </p>
          </div>
        </motion.div>

        {/* ===== Bottom Border ===== */}
        <div className="h-[1px] md:-mt-[40px] w-full opacity-60 bg-gradient-to-r from-[#141315] via-white to-[#020103]" />
      </div>
    </section>
  );
}