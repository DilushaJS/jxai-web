'use client';

import React from 'react'
import { motion } from 'framer-motion';
import ToolsGrid from './ui/ToolsGrid';
const ToolsSection = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full bg-[#010101]">
        <div className="max-w-[1126px] mx-auto px-4 sm:px-6 md:px-4 py-24 sm:py-28 md:py-32 border border-[#FFFFFF1A]">
        
            {/* Badge */}
            <motion.div variants={fadeUp} className="pointer-events-auto justify-center mb-4 flex">
                <span className="inline-block rounded-[12px] p-[2px] bg-gradient-to-r from-[#F5CB94] to-[#99D2EC]">
                    <span className="block rounded-[11px] bg-white px-2 py-1 text-[10px] sm:text-[12px] md:text-[13.1px] leading-[12px] sm:leading-[13px] md:leading-[13.57px] font-medium text-[#090F1D] uppercase">
                    Tools
                    </span>
                </span>
            </motion.div>

            {/* Heading */}
            <motion.div
            className="flex flex-col items-center gap-1 sm:gap-2 md:gap-2"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            >
                <h1 className="text-[36px] sm:text-[52px] md:text-[64px] font-semibold leading-[30px] sm:leading-[42px] md:leading-[70px] tracking-[1.48px] text-white text-center">
                    Why Choose JX AI
                </h1>
                <p className="text-[12px] sm:text-[14px] md:text-[15.9px] font-normal leading-[11px] sm:leading-[15px] md:leading-[19.2px] -tracking-[0.8px] text-[#FFFFFFB2] text-center max-w-[600px] pt-4">
                    One Platform to Build AI Workflows
                </p>
            </motion.div>
        </div>
        <ToolsGrid />
    </section>
  )
}

export default ToolsSection