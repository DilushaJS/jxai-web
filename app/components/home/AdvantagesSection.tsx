'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

import { AdvantageCard } from './ui/AdvantageCard';

const advantages = [
  {
    navTitle: 'AI Tool Directory',
    step: '1. Discover',
    title: 'AI Tool Directory',
    description:
      'A curated index of every model, agent and utility worth using searchable, benchmarked and ready to plug in.',
    image: '/images/home/discover.svg',
    colorClass: 'text-[#F06767]',
  },
  {
    navTitle: 'Visual Workflow Builder',
    step: '2. Compose',
    title: 'Visual Workflow Builder',
    description:
      'Let your Gen GenAI Agent handle visitors day and night, ensuring smooth customer engagement & No leads are missed.',
    image: '/images/home/compose.svg',
    colorClass: 'text-[#E3A351]',
  },
  {
    navTitle: 'Prompt to Workflow',
    step: '3. Generate',
    title: 'Prompt to Workflow',
    description:
      "Engage visitors with AI-powered responses customized to your industry's unique needs, effortlessly turning them into valuable leads.",
    image: '/images/home/generate.svg',
    colorClass: 'text-[#55C3C6]',
  },
  {
    navTitle: 'AI Workflow Marketplace',
    step: '4. Share',
    title: 'AI Workflow Marketplace',
    description:
      'Completely personalize the widget to reflect your brand, creating a cohesive and engaging customer experience.',
    image: '/images/home/share.svg',
    colorClass: 'text-[#6ED84A]',
  },
  {
    navTitle: 'SaaS AI Integration',
    step: '5. Connect',
    title: 'SaaS AI Integration',
    description:
      'Leverage chat data insights like landing page performance and visitor demographics to refine engagement strategies and fuel growth.',
    image: '/images/home/connect.svg',
    colorClass: 'text-[#0278FF]',
  },
];

const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const navContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  /* ============================================================
     UPDATE ACTIVE LEFT NAV ITEM WHILE PAGE SCROLLS
  ============================================================ */
  useEffect(() => {
    let frameId: number | null = null;

    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.42;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        const sectionCenter = rect.top + rect.height / 2;

        const distance = Math.abs(
          sectionCenter - activationPoint,
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((currentIndex) =>
        currentIndex === closestIndex
          ? currentIndex
          : closestIndex,
      );

      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(
        updateActiveSection,
      );
    };

    updateActiveSection();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      );

      window.removeEventListener(
        'resize',
        handleScroll,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  /* ============================================================
     LEFT NAV CLICK
  ============================================================ */
  const handleNavigation = (index: number) => {
    setActiveIndex(index);

    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="w-full bg-[#010101]">
      {/* ============================================================
          MAIN CONTAINER
          max-width: 1440px
          desktop padding-y: 80px
      ============================================================ */}
      <div
        className="
          mx-auto
          w-full
          max-w-360

          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-12

          xl:px-20
        "
      >
        {/* ============================================================
            INNER CONTAINER
            max-width: 1126px
        ============================================================ */}
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-281.5
            flex-col

            gap-14

            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-16

            xl:gap-20
          "
        >
          {/* ========================================================
              LEFT SIDE
          ======================================================== */}
          <motion.aside
            variants={leftVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              w-full

              lg:sticky
              lg:top-20
              lg:w-83
              lg:max-w-83
              lg:shrink-0
              lg:self-start
              lg:pt-29.5
            "
          >
            <div className="flex flex-col gap-8 lg:gap-12">
              {/* ====================================================
                  LEFT TOP
              ==================================================== */}
              <div className="flex flex-col items-start gap-2.5">
                {/* Badge */}
                <div
                  className="
                    inline-flex
                    rounded-full
                    bg-[linear-gradient(99.82deg,#F4CA94_11.11%,#99D1EB_99.18%)]
                    p-0.5
                  "
                >
                  <span
                    className="
                      inline-flex
                      items-center
                      justify-center

                      rounded-full
                      bg-white

                      px-3
                      py-1.5

                      font-sans
                      text-[11px]
                      font-medium
                      leading-[13.57px]
                      tracking-normal
                      text-[#090F1D]
                      uppercase

                      sm:text-[12px]

                      lg:text-[13.1px]
                    "
                  >
                    Advantages
                  </span>
                </div>

                {/* Gradient heading */}
                <h2
                  className="
                    mt-2

                    bg-[linear-gradient(180deg,#FFFFFF_65%,#999999_100%)]
                    bg-clip-text

                    font-sans
                    text-[34px]
                    font-medium
                    leading-10
                    tracking-[-1.2px]
                    text-transparent

                    sm:text-[40px]
                    sm:leading-11.5

                    lg:text-[47.8px]
                    lg:leading-13.5
                    lg:tracking-[-1.92px]
                  "
                >
                  One Platform to
                </h2>

                {/* Main heading */}
                <h3
                  className="
                    font-space
                    text-[44px]
                    font-bold
                    leading-12
                    tracking-normal
                    text-white

                    sm:text-[52px]
                    sm:leading-14.5

                    lg:text-[64px]
                    lg:leading-17.5
                  "
                >
                  <span className="block">
                    Build AI
                  </span>

                  <span className="block">
                    Workflows
                  </span>
                </h3>
              </div>

              {/* ====================================================
                  DESKTOP LEFT NAVIGATION
              ==================================================== */}
              <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                aria-label="Advantages navigation"
                className="hidden flex-col lg:flex"
              >
                {advantages.map((item, index) => {
                  const isActive =
                    activeIndex === index;

                  return (
                    <motion.button
                      key={item.navTitle}
                      variants={navItemVariants}
                      type="button"
                      onClick={() =>
                        handleNavigation(index)
                      }
                      animate={{
                        x: isActive ? 4 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        flex
                        min-h-12.5
                        w-full
                        items-center
                        gap-3
                        text-left
                        cursor-pointer
                      "
                    >
                      {/* Line */}
                      <motion.span
                        animate={{
                          width: isActive ? 48 : 30,
                          backgroundColor: isActive
                            ? '#C281FF'
                            : '#555555',
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [
                            0.22, 1, 0.36, 1,
                          ],
                        }}
                        className="
                          block
                          h-px
                          shrink-0
                          group-hover:bg-[#888888]
                        "
                      />

                      {/* Text */}
                      <motion.span
                        animate={{
                          color: isActive
                            ? '#FFFFFF'
                            : '#555555',
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          font-sans
                          text-[18px]
                          font-semibold
                          leading-6.75
                          tracking-[-0.6px]

                          group-hover:text-[#AAAAAA]

                          xl:text-[24px]
                          xl:leading-12.5
                          xl:tracking-[-0.95px]
                        "
                      >
                        {item.navTitle}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </motion.nav>

              {/* ====================================================
                  MOBILE / TABLET NAVIGATION
              ==================================================== */}
              <div
                className="
                  -mx-5
                  overflow-x-auto
                  px-5

                  sm:-mx-8
                  sm:px-8

                  lg:hidden

                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                <div className="flex w-max gap-2">
                  {advantages.map(
                    (item, index) => {
                      const isActive =
                        activeIndex === index;

                      return (
                        <button
                          key={item.navTitle}
                          type="button"
                          onClick={() =>
                            handleNavigation(index)
                          }
                          className={`
                            whitespace-nowrap
                            rounded-full
                            border
                            px-4
                            py-2

                            font-sans
                            text-[12px]
                            font-medium

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? 'border-[#C281FF]/70 bg-[#C281FF]/10 text-white shadow-[0_0_20px_rgba(194,129,255,0.12)]'
                                : 'border-[#1E1F26] bg-[#08090F] text-[#777777]'
                            }
                          `}
                        >
                          {item.navTitle}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* ========================================================
              RIGHT SIDE
          ======================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-10

              lg:max-w-160
              lg:flex-1
            "
          >
            {advantages.map((item, index) => (
              <AdvantageCard
                key={item.title}
                index={index}
                step={item.step}
                title={item.title}
                description={item.description}
                image={item.image}
                colorClass={item.colorClass}
                sectionRef={(node) => {
                  sectionRefs.current[index] =
                    node;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}