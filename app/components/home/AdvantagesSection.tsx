'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AdvantageCard } from './ui/AdvantageCard';

const AdvantagesSection = () => {
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

  const cards = [
    {
      title: "AI Tool Directory",
      description: <>Provide your customers with immediate, accurate <br className="hidden md:block" />answers that outshine traditional chatbots.</>,
      image: "/images/ai-tool-directory.svg",
    },
    {
      title: "Visual Workflow Builder",
      description: <>Let your Gen GenAI Agent handle visitors day <br className="hidden md:block" />and night, ensuring smooth customer <br className="hidden md:block" />engagement & No leads are missed.</>,
      image: "/images/visual-workflow-builder.svg",
    },
    // 🔥 ROW 2 (SPECIAL)
    {
        title: "Prompt to Workflow",
        description: <>Engage visitors with AI-powered responses <br className="hidden md:block" />customized to your industry’s unique needs, <br className="hidden md:block" />effortlessly turning them into valuable leads.</>,
        variant: "textOnly",
    },
    {
        image: "/images/prompt-to-workflow.svg",
        variant: "imageOnly",
    },
    {
      title: "AI Workflow Marketplace",
      description: <>Completely personalize the widget to reflect <br className="hidden md:block" />your brand, creating a cohesive and engaging <br className="hidden md:block" />customer experience.</>,
      image: "/images/ai-workflow-marketplace.svg",
    },
    {
      title: <>SaaS AI Integration <br className="hidden md:block" />For Business</>,
      description: <>Leverage chat data insights like landing page <br className="hidden md:block" />performance and visitor demographics to refine <br className="hidden md:block" />engagement strategies and fuel growth.</>,
      image: "/images/saas-ai-integration.svg",
    },
  ];

  return (
    <section className="w-full pt-12 sm:pt-16 md:pt-16 bg-[#010101]">

      {/* HR line 10% down */}
      <div className="w-full flex justify-center">
            <div className="relative w-[1198px] h-[1px] bg-[#FFFFFF1A]">
                
                {/* Left vertical line */}
                <div className="absolute left-9 -top-9 w-[1px] h-[35px] bg-[#FFFFFF1A] hidden md:block" />

                {/* Right vertical line */}
                <div className="absolute right-9 -top-9 w-[1px] h-[35px] bg-[#FFFFFF1A] hidden md:block" />

            </div>
        </div>

        <div className="max-w-[1126px] mx-auto px-4 sm:px-6 md:px-4 py-24 sm:py-28 md:py-32 border-r border-b border-l border-[#FFFFFF1A]">
        
            {/* Badge */}
            <motion.div variants={fadeUp} className="pointer-events-auto justify-center mb-8 sm:mb-10 md:mb-12 flex">
            <span className="inline-block rounded-[12px] p-[2px] bg-gradient-to-r from-[#F5CB94] to-[#99D2EC]">
                <span className="block rounded-[11px] bg-white px-2 py-1 text-[10px] sm:text-[12px] md:text-[13.1px] leading-[12px] sm:leading-[13px] md:leading-[13.57px] font-medium text-[#090F1D] uppercase">
                Advantages
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
            <h2 className="text-[24px] sm:text-[32px] md:text-[47.8px] font-medium leading-[28px] sm:leading-[36px] md:leading-[54px] -tracking-[1.92px] bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent text-center">
                One Platform to
            </h2>

            <h1 className="text-[24px] sm:text-[36px] md:text-[56.1px] font-bold leading-[30px] sm:leading-[42px] md:leading-[70px] tracking-[1.48px] text-white text-center">
                Build AI Workflows
            </h1>
            </motion.div>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 border border-[#1f1f1f] max-w-[1126px] mx-auto"
        >
          {cards.map((card, i) => (
            <AdvantageCard
              key={i}
              title={card.title}
              description={card.description}
              image={card.image}
              index={i}
            />
          ))}
        </motion.div>
    </section>
  );
};

export default AdvantagesSection;