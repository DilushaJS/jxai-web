"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface TestimonialData {
  quote: string;
  name: string;
  title: string;
  handle: string;
  handleHref: string;
  avatar: string;
  featured?: boolean;
}

export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65 },
  },
};

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-600 flex-shrink-0">
      {/* Replace with next/image in a real Next.js project */}
      <Image
        src={src}
        alt={alt}
        width={42}
        height={42}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.classList.add(
              "flex",
              "items-center",
              "justify-center",
              "text-white",
              "font-semibold",
              "text-sm"
            );
            parent.textContent = alt
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);
          }
        }}
      />
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  gradientBg?: string;
}

export default function TestimonialCard({ testimonial, gradientBg }: TestimonialCardProps) {
  const { quote, name, title, handle, handleHref, avatar, featured } =
    testimonial;

  return (
    <motion.div
      variants={cardVariants}
      className={`
        relative rounded-[8px] p-6 flex flex-col justify-between gap-6
        border border-white/[0.07]
        transition-all duration-300
        ${
          featured
            ? "shadow-[0_0_40px_rgba(99,179,237,0.08)]"
            : ""
        }
      `}
      style={{
        background: gradientBg || "bg-[#111820]",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {/* Quote */}
      <p
        className="font-light text-[12px] sm:text-[13.7px] leading-[20px] sm:leading-[19.25px] -tracking-[0.28px] text-[#E0E0E0] flex-1 max-w-[312px]"
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <Avatar src={avatar} alt={name} />
        <div className="flex flex-col">
          <span className="text-[#C7C9D1] font-medium text-[12px] sm:text-[12.9px] leading-[16px] sm:leading-[17.88px] -tracking-[0.26px]">{name}</span>
          <span className="text-[#C7C9D1] font-light text-[10px] sm:text-[13.1px] leading-[16px] sm:leading-[17.88px] -tracking-[0.26px]">{title}</span>
          <a
            href={handleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C7C9D1] font-light text-[10px] sm:text-[13.1px] leading-[16px] sm:leading-[17.88px] -tracking-[0.26px] underline underline-offset-2 hover:text-blue-400 transition-colors"
          >
            {handle}
          </a>
        </div>
      </div>
    </motion.div>
  );
}