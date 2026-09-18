'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

type AdvantageCardProps = {
  index: number;
  step: string;
  title: string;
  description: string;
  image: string;
  colorClass: string;
  sectionRef?: (node: HTMLElement | null) => void;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.14,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AdvantageCard({
  index,
  step,
  title,
  description,
  image,
  colorClass,
  sectionRef,
}: AdvantageCardProps) {
  return (
    <motion.section
      ref={sectionRef}
      data-index={index}
      id={`advantage-${index}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.16,
      }}
      className="
        group
        relative
        flex
        w-full
        scroll-mt-24
        flex-col
        gap-6
        lg:scroll-mt-24
      "
    >
      {/* Text */}
      <motion.div
        variants={textVariants}
        className="
          flex
          flex-col
          items-center
          gap-2
          px-2
          pt-5.5
          text-center
          sm:px-5
        "
      >
        <span
          className={`
            font-sans
            text-[13px]
            font-light
            leading-5
            tracking-normal
            uppercase
            sm:text-[15px]
            sm:leading-6
            lg:text-[18px]
            lg:leading-[29.6px]
            ${colorClass}
          `}
        >
          {step}
        </span>

        <h3
          className="
            font-sans
            text-[26px]
            font-semibold
            leading-8.5
            tracking-[-0.6px]
            text-white
            sm:text-[32px]
            sm:leading-10
            lg:text-[37.9px]
            lg:leading-12.5
            lg:tracking-[-0.95px]
          "
        >
          {title}
        </h3>

        <p
          className="
            max-w-152.5
            font-sans
            text-[14px]
            font-light
            leading-5.75
            tracking-normal
            text-[#CFCDD6]
            sm:text-[16px]
            sm:leading-6.5
            lg:text-[18px]
            lg:leading-[29.6px]
          "
        >
          {description}
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={imageVariants}
        whileHover={{
          y: -6,
          scale: 1.012,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-160
          transition-[filter]
          duration-500
          group-hover:drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[15%]
            top-0
            z-10
            h-px
            bg-linear-to-r
            from-transparent
            via-white/25
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            h-[60%]
            w-[60%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/2.5
            opacity-0
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <Image
          src={image}
          alt=""
          width={640}
          height={640}
          draggable={false}
          className="
            relative
            z-1
            h-auto
            w-full
            select-none
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.015]
          "
        />
      </motion.div>
    </motion.section>
  );
}