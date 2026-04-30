"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const pricingPlans = [
  {
    id: "pricing",
    title: "Pricing",
    monthlyPrice: "$29",
    annualPrice: "$23",
    period: "/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
    featured: false,
  },
  {
    id: "pro",
    title: "Pro",
    monthlyPrice: "$79",
    annualPrice: "$63",
    period: "/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
    featured: true,
  },
  {
    id: "business",
    title: "Business",
    monthlyPrice: "$149",
    annualPrice: "$119",
    period: "/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
    featured: false,
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

// ─── Toggle ───────────────────────────────────────────────────────────────────

function AnnualToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2 focus:outline-none"
    >
      {/* Track */}
      <div
        className="relative flex items-center rounded-full transition-colors duration-300"
        style={{
          width: 33,
          height: 20,
          backgroundColor: checked ? "#7DF9FF" : "#3D3D3D",
          borderRadius: 30,
          padding: 2,
        }}
      >
        {/* Thumb */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute"
          style={{
            width: 16,
            height: 16,
            borderRadius: 30,
            backgroundColor: "#F9F5FF",
            top: "50%",
            transform: "translateY(-50%)",
            left: checked ? "calc(100% - 18px)" : 2,
          }}
        />
      </div>
      <span
        className="text-white/50 font-medium"
        style={{ fontSize: 16, lineHeight: "31px", letterSpacing: "-0.01%" }}
      >
        Annual
      </span>
    </button>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function PricingCard({
  plan,
  annual,
}: {
  plan: (typeof pricingPlans)[0];
  annual: boolean;
}) {
  const price = annual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col overflow-hidden"
      style={{
        width: "100%",
        maxWidth: 385.33,
        height: 500,
        borderRadius: 10,
        border: "1px solid #FFFFFF26",
        background: plan.featured
          ? "linear-gradient(180deg, #010002 28.37%, #7DF9FF 100%)"
          : "#0000000F",
        boxShadow: plan.featured
          ? "0px 10px 74px 10px #004C5069"
          : undefined,
      }}
    >
      {/* 2nd card background pattern */}
      {plan.featured && (
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: 432.43, borderRadius: 15 }}
        >
          <Image
            src="/images/card-pattern.svg"
            alt=""
            fill
            className="object-cover object-bottom opacity-40"
            style={{ borderRadius: 15 }}
          />
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full p-5 justify-between">

        {/* ── Text block ── */}
        <div className="flex flex-col" style={{ gap: 40 }}>

          {/* Title row */}
          <div className="flex flex-col gap-0">
            <div className="flex items-center justify-between">
              <h3
                className="text-white font-medium"
                style={{
                  fontSize: 24,
                  lineHeight: "31px",
                  letterSpacing: "-0.04%",
                }}
              >
                {plan.title}
              </h3>

              {/* Annual toggle — only on pro card */}
              {plan.featured && (
                <div className="flex items-center gap-2">
                  {/* rendered by parent, passed via prop — we show a static version here */}
                </div>
              )}
            </div>

            <p
              style={{
                fontSize: 16,
                lineHeight: "26px",
                letterSpacing: "-0.01%",
                color: "#FFFFFFB2",
              }}
            >
              {price}
              {plan.period}
            </p>
          </div>

          {/* Divider */}
          <hr
            style={{
              width: 335.13,
              border: "none",
              borderTop: "1px solid #282729",
              margin: 0,
            }}
          />

          {/* Features */}
          <ul className="flex flex-col gap-2">
            {plan.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <Check
                  size={15}
                  className={plan.featured ? "text-white" : "text-white"}
                  strokeWidth={2.5}
                />
                <span
                  className="text-white"
                  style={{
                    fontSize: 14,
                    lineHeight: "26px",
                    letterSpacing: "-0.01%",
                  }}
                >
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Button ── */}
        <button
          className="flex items-center justify-center transition-opacity duration-200 hover:opacity-80 cursor-pointer"
          style={{
            width: 335.13,
            height: 38,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 10,
            border: "1px solid #FFFFFF26",
            backdropFilter: "blur(14px)",
            fontSize: 14,
            lineHeight: "26px",
            letterSpacing: "-0.01%",
            ...(plan.featured
              ? {
                  background: "#7DF9FF",
                  color: "#040C5E",
                  boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
                }
              : {
                  background: "#3D3D3D66",
                  color: "#FFFFFF",
                  boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
                }),
          }}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      className="w-full flex items-center justify-center py-16 px-4"
      style={{
        maxWidth: 1224,
        margin: "0 auto",
        background:
          "radial-gradient(38.46% 38.46% at 50.04% 61.54%, rgba(0,76,80,0) 0%, #020103 100%)",
      }}
    >
      <motion.div
        className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-4"
        style={{ maxWidth: 1176 }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="flex-1 flex justify-center">
            {plan.featured ? (
              // Pro card — needs the toggle injected into the title row
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col overflow-hidden w-full"
                style={{
                  maxWidth: 385.33,
                  height: 500,
                  borderRadius: 10,
                  border: "1px solid #FFFFFF26",
                  background:
                    "linear-gradient(180deg, #010002 28.37%, #7DF9FF 100%)",
                  boxShadow: "0px 10px 74px 10px #004C5069",
                }}
              >
                {/* Pattern background */}
                <div
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{ height: 432.43, borderRadius: 15 }}
                >
                  <Image
                    src="/images/card-pattern.svg"
                    alt=""
                    fill
                    className="object-cover object-bottom opacity-40"
                    style={{ borderRadius: 15 }}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full p-5 justify-between">
                  <div className="flex flex-col" style={{ gap: 40 }}>

                    {/* Title + toggle */}
                    <div className="flex flex-col gap-0">
                      <h3
                        className="text-white font-medium"
                        style={{ fontSize: 24, lineHeight: "31px", letterSpacing: "-0.04%" }}
                      >
                        {plan.title}
                      </h3>
                      {/* Price + Annual toggle on the same row */}
                      <div className="flex items-center justify-between">
                        <p style={{ fontSize: 16, lineHeight: "26px", letterSpacing: "-0.01%", color: "#FFFFFFB2" }}>
                          {annual ? plan.annualPrice : plan.monthlyPrice}{plan.period}
                        </p>
                        <AnnualToggle checked={annual} onChange={setAnnual} />
                      </div>
                    </div>

                    <hr style={{ width: 335.13, border: "none", borderTop: "1px solid #282729", margin: 0 }} />

                    <ul className="flex flex-col gap-2">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <Check size={15} className="text-white" strokeWidth={2.5} />
                          <span className="text-white" style={{ fontSize: 14, lineHeight: "26px", letterSpacing: "-0.01%" }}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="flex items-center justify-center transition-opacity duration-200 hover:opacity-80 cursor-pointer"
                    style={{
                      width: 335.13, height: 38,
                      paddingTop: 6, paddingBottom: 6, paddingLeft: 15, paddingRight: 15,
                      borderRadius: 10, border: "1px solid #FFFFFF26",
                      backdropFilter: "blur(14px)",
                      background: "#7DF9FF", color: "#040C5E",
                      fontSize: 14, lineHeight: "26px", letterSpacing: "-0.01%",
                      boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ) : (
              <PricingCard plan={plan} annual={annual} />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}