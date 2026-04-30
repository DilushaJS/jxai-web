"use client";

import { motion } from "framer-motion";
import TestimonialCard, {
  TestimonialData,
} from "./ui/TestimonialCard";

const testimonials: TestimonialData[] = [
  {
    quote:
      "\u201cIf we were to do text based grounding with raw HTML content, we would often hit context window issues and hallucinations. With AgentQL sending the query and getting the results is a gamechanger for text grounding.\u201d",
    name: "Vladimir de Turckheim",
    title: "Founder",
    handle: "Heal.dev",
    handleHref: "https://heal.dev",
    avatar: "/images/users/user1.svg",
  },
  {
    quote:
      "\u201cAgentQL handles web scraping painlessly, which is quite unusual. It\u2019s awesome stuff \u2014 very easy to use and with very well-written responses. The effort to differentiate from competitors through semantic search is very palpable.\u201d",
    name: "Fahd Mirza",
    title: "AI YouTuber, Lead AI Engineer",
    handle: "@fahdmirza",
    handleHref: "https://twitter.com/fahdmirza",
    avatar: "/images/users/user2.svg",
    featured: true,
  },
  {
    quote:
      "\u201cLove the fact that we can describe the elements that we can work with, or we can just give a prompt and AgentQL will go to the websites and define the elements that it will have to deal with.\u201d",
    name: "Reda Marzouk",
    title: "AI/RPA Senior Developer",
    handle: "@redamarzouk",
    handleHref: "https://twitter.com/redamarzouk",
    avatar: "/images/users/user3.svg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.7 },
  },
};

const cardGradients = [
  // 1 - Purple
  "linear-gradient(200.71deg, #2D1E36 1.39%, #2D2737 70.35%), radial-gradient(60% 60% at 50% 0%, rgba(240, 140, 252, 0.58) 0%, rgba(240, 140, 252, 0) 100%), radial-gradient(80% 80% at 50% 100%, #000000 0%, rgba(0, 0, 0, 0.66) 100%)",

  // 2 — Teal / Cyan
  "linear-gradient(0deg, #222D2E 0%, #222D2E 100%), radial-gradient(50% 50% at 50% 50%, rgba(116, 255, 252, 0.58) 0%, rgba(69, 150, 149, 0) 100%), radial-gradient(50% 50% at 50% 50%, #0D1A32 99.99%, rgba(0, 0, 0, 0) 100%)",

  // 3 — Blue
  "linear-gradient(0deg, #2A303B 0%, #2A303B 100%), radial-gradient(60% 60% at 50% 0%, rgba(165, 194, 255, 0.58) 0%, rgba(165, 194, 255, 0) 100%), radial-gradient(80% 80% at 50% 100%, #1A212E 99.99%, rgba(102, 129, 202, 0) 100%)",
];

export default function TestimonialsSection() {
  return (
    <section className="relative min-h-screen bg-[#010101] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 30% 80% at 100% 100%, #7DF9FF54 0%, transparent 70%)",
          backdropFilter: "blur(534px)",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          className="text-center text-white font-medium text-[28px] sm:text-[36px] lg:text-[47.8px] leading-[30px] sm:leading-[42px] lg:leading-[54px] -tracking-[1.92px]"
        >
          Join thousands of Users
          <br />
          building Workflows using JXAI
        </motion.h2>

        {/* Cards Grid with Decorative Circles */}
        <div className="relative w-full flex items-center justify-center px-[40px]">
          {/* Left Decorative Circle */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#27272B66] bg-[#1D1D214D]" />

          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.name} 
                testimonial={testimonial}
                gradientBg={cardGradients[index]}
              />
            ))}
          </motion.div>

          {/* Right Decorative Circle */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
            style={{
              background: "linear-gradient(45deg, #464C6D 0%, #2D3247 10%, #1C1D22 100%)"
            }}
          />
        </div>

        {/* CTA Button */}
        <motion.div variants={buttonVariants}>
          <button
            className="font-semibold text-[12px] sm:text-[12.9px] md:text-[13.9px] leading-[19px] sm:leading-[20px] md:leading-[21px] tracking-[-0.28px] text-[#191A1F] bg-gradient-to-r from-[#FFFFFF]/95 to-[#FFFFFF]/85 px-12 py-3 rounded-[6px] transition-transform duration-200 hover:-translate-y-0.5 shadow-lg pointer-cursor">
            Start Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}