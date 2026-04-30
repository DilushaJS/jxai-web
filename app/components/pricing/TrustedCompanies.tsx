"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Acme Corp", logo: "/images/companies/acme.svg" },
  { name: "Echo Valley", logo: "/images/companies/echo.svg" },
  { name: "Quantum", logo: "/images/companies/quantum.svg" },
  { name: "Pulse", logo: "/images/companies/pulse.svg" },
  { name: "Outside", logo: "/images/companies/outside.svg" },
  { name: "Apex", logo: "/images/companies/apex.svg" },
  { name: "Celestial", logo: "/images/companies/celestial.svg" },
  { name: "2Twice", logo: "/images/companies/2twice.svg" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const LogoCard = ({ company }: any) => {
  return (
    <motion.div
      variants={itemVariants}
      className="
        w-full
        sm:w-[calc(50%-5px)]
        lg:w-[292.5px]
        h-[80px]
        sm:h-[90px]
        lg:h-[98px]
        px-[24px]
        sm:px-[32px]
        lg:px-[40px]
        py-[24px]
        sm:py-[28px]
        lg:py-[32px]
        rounded-[8px]
        sm:rounded-[10px]
        border
        border-white/15
        flex
        items-center
        justify-center
        hover:border-white/30
        transition
      "
    >
      <div className="relative w-[120px] sm:w-[140px] lg:w-[155px] h-[24px] sm:h-[30px] lg:h-[34px]">
        <Image
          src={company.logo}
          alt={company.name}
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default function TrustedCompanies() {
  return (
    <section className="w-full flex justify-center bg-[#010101] py-[24px] sm:py-[32px] lg:py-[40px] px-4">
      <div
        className="
          w-full
          max-w-[1200px]
          flex
          flex-col
          items-center
          gap-[24px]
          sm:gap-[32px]
          lg:gap-[40px]
        "
      >
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-white/70
            text-[14px]
            sm:text-[15px]
            lg:text-[16px]
            leading-[22px]
            sm:leading-[24px]
            lg:leading-[26px]
            tracking-[-0.01em]
            text-center
          "
        >
          Trusted by the world’s most innovative teams
        </motion.p>

        {/* Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            w-full
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-4
            gap-[8px]
            sm:gap-[10px]
            lg:gap-[10px]
          "
        >
          {companies.map((company, i) => (
            <LogoCard key={i} company={company} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}