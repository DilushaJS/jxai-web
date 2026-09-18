'use client';

import { motion, type Variants } from 'framer-motion';
import {
  IconFolders,
  IconCreditCard,
  IconCode,
  IconLayoutDashboard,
  IconRestore,
  IconStackPop,
  type Icon,
} from '@tabler/icons-react';

type Tool = {
  title: string;
  description: string;
  icon: Icon;
  color: string;
};

const tools: Tool[] = [
  {
    title: 'AI Tool Directory',
    description:
      "Easily train your GenAI Agent to speak in your brand's voice using your website’s data. It’s quick, intuitive, and requires minimal effort.",
    icon: IconFolders,
    color: '#F06767',
  },
  {
    title: 'Single Subscription',
    description:
      'Define most asked questions for your GenAI Agent and customize responses manually for accurate, tailored interactions.',
    icon: IconCreditCard,
    color: '#E3A351',
  },
  {
    title: 'Prompt to Workflow',
    description:
      'Customize your GenAI Agent to meet your specific needs, allowing it to evolve alongside changing business dynamics and customer preferences.',
    icon: IconCode,
    color: '#55C3C6',
  },
  {
    title: 'Visual Workflow Builder',
    description:
      'Engage visitors in real-time and seamlessly capture high-quality leads with AI-driven interactions, ensuring faster conversions and better sales opportunities.',
    icon: IconLayoutDashboard,
    color: '#8F67F0',
  },
  {
    title: 'SaaS AI Integration',
    description:
      'Automate customer interaction in 186 languages, providing a personalized experience in multiple languages.',
    icon: IconRestore,
    color: '#6ED84A',
  },
  {
    title: 'AI Workflow Marketplace',
    description:
      'Set up your GenAI Agent with ease. Minimal technical skills are required. Enjoy a simple, intuitive interface to get started and scale without hassle.',
    icon: IconStackPop,
    color: '#0278FF',
  },
];

/* ============================================================
   MOTION
============================================================ */

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ToolsGrid() {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        grid
        grid-cols-1
        overflow-hidden
        rounded-3xl
        border
        border-[#1E1F26]

        sm:grid-cols-2

        lg:grid-cols-3
        lg:rounded-4xl
      "
    >
      {tools.map((tool, index) => {
        const ToolIcon = tool.icon;

        return (
          <motion.article
            key={tool.title}
            variants={cardVariants}
            className="
              group
              relative
              flex
              min-h-62.5
              flex-col
              items-start

              border-b
              border-[#1E1F26]
              bg-[#08090F]

              px-6
              py-8

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:bg-[#0D0E15]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.38)]

              sm:min-h-67.5
              sm:px-7
              sm:py-9

              md:px-8
              md:py-10

              lg:min-h-74

              sm:odd:border-r
              sm:nth-last-[-n+2]:border-b-0

              lg:border-r-0
              lg:not-nth-[3n]:border-r
              lg:nth-last-[-n+3]:border-b-0
            "
          >
            {/* Hover highlight */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-6
                top-0
                h-px

                bg-linear-to-r
                from-transparent
                via-white/25
                to-transparent

                opacity-0
                transition-opacity
                duration-300

                group-hover:opacity-100

                sm:inset-x-8
              "
            />

            {/* Icon */}
            <div
              className="
                mb-4
                flex
                size-9
                items-center
                justify-start

                transition-transform
                duration-300
                ease-out

                group-hover:-translate-y-0.5
                group-hover:scale-110
              "
            >
              <ToolIcon
                size={28}
                stroke={2}
                color={tool.color}
                aria-hidden="true"
              />
            </div>

            {/* Title */}
            <h3
              className="
                font-['Space_Grotesk']
                text-[22px]
                font-bold
                leading-7.5
                tracking-normal
                text-white

                transition-transform
                duration-300

                group-hover:translate-x-1

                sm:text-[25px]
                sm:leading-8.5

                lg:text-[29.9px]
                lg:leading-11
              "
            >
              {tool.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-3
                max-w-90

                font-['Inter']
                text-[14px]
                font-normal
                leading-5.5
                tracking-normal
                text-[#C3C3C3]

                sm:text-[15px]
                sm:leading-6.25

                lg:text-[17.1px]
                lg:leading-[29.75px]
              "
            >
              {tool.description}
            </p>

            {/* Subtle hover glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                size-40
                rounded-full
                bg-white/[0.035]
                opacity-0
                blur-3xl

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />
          </motion.article>
        );
      })}
    </motion.div>
  );
}