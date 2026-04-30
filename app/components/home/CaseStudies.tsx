"use client";

import Image from "next/image";

const cards = [
  {
    iconImage: "/icons/case-icon1.svg",
    title: "White-Labeled Multi-Tenant Support",
    description:
      "Effortlessly sync data across multiple tenants with OAuth2-based security, perfect for SaaS builders.",
    image: "/images/case1.svg",
  },
  {
    iconImage: "/icons/case-icon2.svg",
    title: "100+ Connectors",
    description:
      "Integrate with a wide range of data sources with over 100 pre-built connectors.",
    image: "/images/case2.svg",
  },
  {
    iconImage: "/icons/case-icon3.svg",
    title: "Unified Agentic Search",
    description:
      "Enable powerful, unified search across your workspace data with ease.",
    image: "/images/case3.svg",
  },
];

// Card width + gap must match the CSS below (448.33 + 24 = 472.33px per card)
const CARD_WIDTH = 448.33;
const GAP = 24;
const CARD_STRIDE = CARD_WIDTH + GAP; // 472.33px

// We render 4 copies so the strip is always wider than any viewport,
// and we animate exactly `cards.length * CARD_STRIDE` px — one full set.
const COPIES = 4;
const STRIP_SETS = 2; // rendered sets per copy pair for seamless wrap

const Card = ({ item }: { item: (typeof cards)[0] }) => {
  return (
    <div
      className="flex-shrink-0 rounded-[10px] border border-white/10 bg-[#0B0C0F] p-4 flex flex-col justify-between relative overflow-hidden"
      style={{ width: CARD_WIDTH, height: 390 }}
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Image
            src={item.iconImage}
            alt={item.title}
            width={16}
            height={16}
            className="flex-shrink-0"
          />
          <h3 className="text-[15.9px] leading-[19.2px] tracking-[-0.5px] text-white font-medium">
            {item.title}
          </h3>
        </div>
        <p className="text-[15.9px] leading-[19.2px] tracking-[-0.5px] text-white/60 max-w-[90%]">
          {item.description}
        </p>
      </div>

      <div className="relative w-full h-[250px] mt-4">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-[12px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-[118px] bg-gradient-to-b from-transparent to-[#04031C]/35" />
      </div>
    </div>
  );
};

export default function CaseStudies() {
  // The keyframe translates exactly one full set of cards to the left,
  // then CSS resets to 0 — because the next set is identical, it looks seamless.
  const totalShift = cards.length * CARD_STRIDE; // px to shift per loop

  return (
    <section className="bg-[#010101] w-full flex justify-center py-20 relative overflow-hidden">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 30% 80% at 100% 100%, #7DF9FF54 0%, transparent 70%)",
            backdropFilter: "blur(534px)",
          }}
        />


      {/* Inject keyframes and button shadow styles */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${totalShift}px); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .btn-shadow {
          box-shadow: 0px 0px 0px -1.75px #1249B0A6,
                      0px 0px 0px -3.5px #1249B04D,
                      0px 0.6px 0.6px -1.25px #CCD1D92E inset,
                      0px 2.29px 2.29px -2.5px #CCD1D929 inset,
                      0px 10px 10px -3.75px #CCD1D90F inset,
                      0px 0.6px 1.57px -1.17px #1249B0AD inset,
                      0px 2.29px 5.95px -2.33px #1249B09C inset,
                      0px 10px 26px -3.5px #1249B04D inset,
                      0px -0.8px 0.8px -0.69px #1249B070 inset,
                      0px -2.41px 2.41px -1.38px #1249B06E inset;
        }
      `}</style>

      <div className="w-full max-w-[1183px]">
        {/* Header */}
        <div className="max-w-[940.5px] mx-auto text-center mb-12">
          <p className="text-[16.6px] leading-[19.2px] tracking-[-0.8px] text-white/60 font-semibold">
            Features
          </p>
          <h2 className="text-[39.2px] leading-[54.6px] tracking-[-1.68px] text-white mt-2">
            Our Case studies
          </h2>
          <p className="text-[13.9px] leading-[16.8px] tracking-[-0.7px] text-white/60 mt-2">
            We'll handle the hard stuff.
          </p>
        </div>

        {/* Infinite scroll strip */}
        <div className="w-full overflow-hidden relative">
          {/* Left black glow */}
          <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10 bg-gradient-to-r from-[#010101] via-[#010101]/50 to-transparent" />
          
          {/* Right black glow */}
          <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10 bg-gradient-to-l from-[#010101] via-[#010101]/50 to-transparent" />

          {/*
            Render cards.length * COPIES cards total (e.g. 3 * 4 = 12 cards).
            The animation shifts exactly one set (3 cards = totalShift px),
            so the loop point is invisible — card[0] of the next set is
            pixel-identical to where card[0] started.
          */}
          <div
            className="marquee-track flex"
            style={{ gap: GAP, width: "max-content" }}
          >
            {Array.from({ length: COPIES }).flatMap((_, ci) =>
              cards.map((item, i) => <Card key={`${ci}-${i}`} item={item} />)
            )}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="btn-shadow w-[167px] h-[36px] rounded-[8px] border border-[#1C1C1C33] text-white text-[13.8px] leading-[15.4px] font-medium hover:bg-white/5 transition cursor-pointer">
            Talk to a Founder ↗
          </button>
        </div>
      </div>
    </section>
  );
}
