"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// ─── Feature rows data ────────────────────────────────────────────────────────

const featureRows: {
  label: string;
  icon: boolean;
  text: string | null;
}[] = [
  { label: "360 Tour",                      icon: true,  text: null },
  { label: "Hotspots behavior (360 Tour)",  icon: false, text: '"Location", "Video",\n"360 Video", "360 Photo"' },
  { label: "2D plan",                       icon: true,  text: null },
  { label: "Map",                           icon: true,  text: null },
  { label: "Measurement Tool",              icon: true,  text: null },
  { label: "Skin",                          icon: true,  text: null },
  { label: "Access",                        icon: true,  text: null },
  { label: "Templates",                     icon: false, text: "Two Templates" },
  { label: "Storage",                       icon: false, text: "5Gb for one\nproject" },
  {
    label: "Exports",
    icon: false,
    text: "Web (Virtik),\nDesktop Windows,\n\nOut of Scope for now\nWeb (Custom)\nDesktop Mac,\nMobile (Android),\nMobile (iOS) +\nextra option:\nability to edit tour link",
  },
  { label: "Custom Support", icon: false, text: "FAQ section,\ne-mail support" },
];

// ─── Animation ───────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65 } },
};

// ─── Styled text helpers ──────────────────────────────────────────────────────

const gradientStyle = {
  background: "linear-gradient(90deg, #FFFFFF 0%, #BCC5EA 18%, #C4CDEE 55.5%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const cyanStyle = {
  background: "linear-gradient(0deg, #06C0CA, #06C0CA)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

// ─── Card top section (constant height so rows align) ─────────────────────────

function CardTop() {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ gap: 10, paddingBottom: 45 }}
    >
      {/* Title */}
      <p className="font-bold text-[20px] leading-none" style={gradientStyle}>
        Light / Month
      </p>

      {/* Price */}
      <div className="flex items-baseline justify-center gap-1 mt-1">
        <span className="font-semibold text-[18px] leading-none" style={cyanStyle}>
          $15
        </span>
        <span className="font-semibold text-[14px] leading-none" style={gradientStyle}>
          {" "}user / mo
        </span>
      </div>

      {/* Paid monthly */}
      <p className="text-white text-[12px] font-normal leading-none">(Paid Monthly)</p>

      {/* Description */}
      <p className="text-white font-medium text-[12px] leading-[130%] px-1">
        Display stars in Google organic search risult and showcase.
      </p>

      {/* Button */}
      <button
        className="flex items-center justify-center gap-1 text-white font-medium text-[16px] leading-none hover:opacity-75 transition-opacity cursor-pointer mt-3"
        style={{
          width: 146.7,
          height: 36.84,
          borderRadius: 21.98,
          background: "#06C0CA1A",
          border: "1px solid rgba(6,192,202,0.45)",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        Get Started
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

// ─── Single feature cell inside card ─────────────────────────────────────────

function CardCell({ icon, text }: { icon: boolean; text: string | null }) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div style={{ borderTop: "0.5px solid #D2D2D2", width: "100%", height: 0 }} />
      <div className="py-2 flex items-center justify-center min-h-[32px]">
        {icon ? (
          <Image src="/icons/badge-check.svg" alt="Included" width={24} height={24} />
        ) : text ? (
          <p
            className="font-medium text-[12px] leading-[100%] text-center text-white whitespace-pre-line"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {text}
          </p>
        ) : null}
      </div>
    </div>
  );
}

// ─── Full plan card ───────────────────────────────────────────────────────────

function PricingCard({ featured }: { featured: boolean }) {
  return (
    <motion.div
      variants={cardAnim}
      className="flex flex-col"
      style={{
        width: 221,
        flexShrink: 0,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 24,
        paddingRight: 24,
        borderRadius: 5,
        backdropFilter: "blur(18.2px)",
        background: featured ? "#06C0CA1A" : "#FFFFFF1A",
        border: featured ? "1px solid #06C0CA" : "1px solid transparent",
      }}
    >
      {/* Top info block */}
      <CardTop />

      {/* Feature cells — one per feature row */}
      <div className="flex flex-col items-center" style={{ width: "100%", gap: 0 }}>
        {featureRows.map((row, i) => (
          <CardCell key={i} icon={row.icon} text={row.text} />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

export default function PricingTable() {
  return (
    <section className="w-full bg-[#010101] flex justify-center px-4 py-16">
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-10 lg:gap-6"
        style={{ maxWidth: 1144.77 }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >

        {/* ── LEFT: heading + feature labels ── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col shrink-0"
          style={{ width: "100%", maxWidth: 380 }}
        >
          {/* Heading */}
          <h2
            className="text-white font-semibold text-[40px] leading-none"
            style={{
              fontFamily: "Cal Sans, sans-serif",
              letterSpacing: "0.1em",
              lineHeight: "100%",
            }}
          >
            Empower day to day with Deep Knowledge with all available ai tools.
          </h2>

          {/*
            Spacer that matches the height of the card top section.
            CardTop has: title + price + paid + desc + button + padding
            We approximate with a fixed spacer so labels align with cells.
          */}
          <div style={{ height: 227 + 45 + 40 }} />

          {/* Feature labels — aligned to card cells */}
          <div className="flex flex-col">
            {featureRows.map((row) => (
              <div key={row.label}>
                <p
                  className="text-white font-semibold text-[16px] leading-none py-4"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {row.label}
                </p>
                <div style={{ borderTop: "0.5px solid #D2D2D2", width: 325, height: 0 }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: 3 cards ── */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-3 justify-end flex-1">
          <PricingCard featured={false} />
          <PricingCard featured={true} />
          <PricingCard featured={false} />
        </div>
      </motion.div>
    </section>
  );
}