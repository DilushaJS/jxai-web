'use client';

import React from 'react';

const  tools= [
  {
    title: "AI Tool Directory",
    description: "using your website’s data. It’s quick, intuitive, and requires minimal effort.",
    image: "/icons/tool1.svg",
  },
  {
    title: "Single Subscription",
    description: "Define most asked questions for your GenAI Agent and customize responses manually for accurate, tailored",
    image: "/icons/tool2.svg",
  },
  {
    title: "Prompt to Workflow",
    description: "Customize your GenAI Agent to meet your specific needs, allowing it to and customer preferences.",
    image: "/icons/tool3.svg",
  },
  {
    title: "SaaS AI Integration",
    description: "Automate customer Interaction in a personalized experience in multiple languages.",
    image: "/icons/tool4.svg",
  },
  {
    title: "Visual Workflow",
    description: "Engage visitors in real-time and seamlessly capture high-quality leads with AI-driven",
    image: "/icons/tool5.svg",
  },
  {
    title: "Workflow Gallery",
    description: "Set up your GenAI Agent with ease, Minimal technical skills are required. Enjoy a simple, intuitive interface to get",
    image: "/icons/tool6.svg",
  },
];

export default function ToolsGrid() {
  return (
    <div className="max-w-[1126px] mx-auto border border-[#FFFFFF1A] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      
      {tools.map((item, i) => {
        return (
          <div
            key={i}
            className={`
              relative p-6 sm:p-8 md:p-10 bg-black
              border-[#FFFFFF1A]
              border-b [&:nth-child(3n+1)]:sm:border-b [&:nth-child(3n)]:sm:border-r-0 [&:not(:nth-child(3n))]:lg:border-r
              sm:[&:nth-child(n+1):nth-last-child(-n+2)]:border-b-0 lg:[&:nth-child(n+1):nth-last-child(-n+3)]:border-b-0
            `}
          >
            {/* Vertical decorative line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[44px] bg-white"></div>

            {/* Icon */}
            <img
              src={item.image}
              alt={item.title}
              className="w-[120px] sm:w-[140px] md:w-[160px] h-auto mb-6"
            />

            {/* Title */}
            <h3 className="text-white font-semibold text-[22px] sm:text-[26px] md:text-[29.9px] leading-[30px] sm:leading-[36px] md:leading-[44px]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-white/80 text-[14px] sm:text-[15px] md:text-[17.1px] leading-[22px] sm:leading-[26px] md:leading-[29.75px]">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}