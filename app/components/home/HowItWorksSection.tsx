"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { HowItWorksDiagram } from './HowItWorksDiagram';

const ANIM_HOLD_MS = 10_500;
const FADE_MS = 1_500;
const PAUSE_MS = 400;


const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-120px' });

  // animKey forces a full re-mount of the SVG + overlays on each loop iteration,
  // which resets all pathLength / motion values to their `initial` state cleanly.
  const [animKey, setAnimKey] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setFading(true);
      return;
    }

    setFading(false);
    setAnimKey((k) => k + 1);

    const fadeTimer = setTimeout(() => setFading(true), ANIM_HOLD_MS);

    const restartTimer = setTimeout(() => {
      setFading(false);
      setAnimKey((k) => k + 1);
    }, ANIM_HOLD_MS + FADE_MS + PAUSE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(restartTimer);
    };
  }, [isInView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cards = [
    {
      title: "Visual Workflow ",
      description: "Engage visitors in real-time and seamlessly capture high- quality leads with AI-driven ",
    },
    {
      title: "Visual Workflow ",
      description: "Engage visitors in real-time and seamlessly capture high- quality leads with AI-driven ",
    },
    {
      title: "Visual Workflow ",
      description: "Engage visitors in real-time and seamlessly capture high- quality leads with AI-driven ",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#010101]">
        <div className="max-w-[1126px] mx-auto px-4 sm:px-6 md:px-4 pt-24 sm:pt-28 md:pt-32 pb-24 border-l border-r border-t border-[#FFFFFF1A]">
        
            {/* Badge */}
            <motion.div variants={fadeUp} className="pointer-events-auto justify-center mb-4 flex">
                <span className="inline-block rounded-[12px] p-[2px] bg-gradient-to-r from-[#F5CB94] to-[#99D2EC]">
                    <span className="block rounded-[11px] bg-white px-2 py-1 text-[10px] sm:text-[12px] md:text-[13.1px] leading-[12px] sm:leading-[13px] md:leading-[13.57px] font-medium text-[#090F1D] uppercase">
                    How It Works
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
                <h2 className="text-[24px] sm:text-[32px] md:text-[49.8px] font-semibold leading-[30px] sm:leading-[42px] md:leading-[70px] tracking-[0px] text-white text-center">
                    Ready to give it a go?
                </h2>

                <h1 className="text-[24px] sm:text-[36px] md:text-[56.1px] font-bold leading-[30px] sm:leading-[42px] md:leading-[70px] tracking-[1.48px] text-white text-center">
                    Get started in seconds
                </h1>
            </motion.div>
        </div>
        <div className="max-w-[1179.646484375px] mx-auto">
            {/* <Image
                src="/images/workflow.svg"
                alt="How it works illustration"
                width={1179.65}
                height={835.98}
                className="mt-12 pointer-events-none select-none w-full h-auto md:w-full md:h-auto lg:w-[1179.65px] lg:h-[835.98px] object-contain"
                aria-hidden="true"
            /> */}
        <motion.div
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
        >
            <HowItWorksDiagram  key={animKey} playing={!fading && isInView} />
        </motion.div>
        </div>

        {/* 3-Column Grid */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-4 mt-16 sm:mt-20 md:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                {cards.map((card, i) => (
                    <div key={i} className="relative pl-12">
                        {/* Left vertical line */}
                        <div className="absolute left-0 top-0 w-[3px] h-[44px] bg-white"></div>

                        {/* Content */}
                        <div>
                            <h3 className="font-semibold text-[29.9px] leading-[44px] text-white">
                                {card.title}
                            </h3>
                            <p className="font-normal text-[17.1px] leading-[29.75px] text-white/80 mt-2 max-w-[260px]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default HowItWorksSection