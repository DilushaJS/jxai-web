'use client';

import type { ReactNode } from 'react';

import Image from 'next/image';

import {
  AlertTriangle,
  Check,
  Copy,
  Info,
  Lightbulb,
  Play,
  Sparkles,
} from 'lucide-react';

import {
  motion,
  type Variants,
} from 'framer-motion';

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function QuickStartSteps() {
  return (
    <section
      className="
        relative
        -ml-13
        w-[calc(100%+52px)]
        max-w-207

        py-2

        max-sm:ml-0
        max-sm:w-full
      "
    >
      {/* Continuous timeline */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-25
          left-12
          top-5

          hidden
          w-px

          bg-[#8B5CF6]/25

          sm:block
        "
      />

      {/* =====================================================
          STEP 1
      ====================================================== */}

      <Step
        id="create-account"
        number={1}
        eyebrow="Step 1 of 6"
        title="Create your account"
        description="Sign up with Google, GitHub, or your work email. You'll land in a fresh JX AI workspace."
      >
        <Screenshot
          src="/images/quick-start/create-account.svg"
          alt="Create your JX AI account"
        />

        <Callout type="success">
          <strong>You should see:</strong> A confirmation screen, then
          your personal Dashboard.
        </Callout>

        <Callout type="tip">
          <strong>Tip:</strong> Use your work email if teammates will
          collaborate with you later.
        </Callout>
      </Step>

      {/* =====================================================
          STEP 2
      ====================================================== */}

      <Step
        id="dashboard"
        number={2}
        eyebrow="Step 2 of 6"
        title="Open your Dashboard"
        description="Your Dashboard is the home for prompts, workflows, runs, and shared projects."
      >
        <Screenshot
          src="/images/quick-start/dashboard.svg"
          alt="JX AI Dashboard"
        />

        <Callout type="success">
          <strong>You should see:</strong> A prompt bar at the top and an
          empty My Workflows list below.
        </Callout>
      </Step>

      {/* =====================================================
          STEP 3
      ====================================================== */}

      <Step
        id="tools"
        number={3}
        eyebrow="Step 3 of 6"
        title="Pick your AI tools"
        description="Open the AI Tool Directory and add Web Reader, Summarizer, and Caption Writer to your workspace."
      >
        <Screenshot
          src="/images/quick-start/tool-directory.svg"
          alt="JX AI Tool Directory"
        />

        <Callout type="success">
          <strong>You should see:</strong> These selected tools with
          violet outlines in your workspace tray.
        </Callout>

        <Callout type="info">
          <strong>Note:</strong> JX AI can suggest tools automatically,
          but choosing them yourself makes the first build easier to
          understand.
        </Callout>
      </Step>

      {/* =====================================================
          STEP 4
      ====================================================== */}

      <Step
        id="describe-workflow"
        number={4}
        eyebrow="Step 4 of 6"
        title="Describe your workflow"
        description="Return to the Dashboard, paste this prompt, and let JX AI turn plain language into a structured workflow."
      >
        <PromptCard />

        <Callout type="success">
          <strong>You should see:</strong> A five-node draft appear in
          the Visual Workflow Builder.
        </Callout>

        <Callout type="tip">
          <strong>Tip:</strong> Be specific about your input, desired
          output, quantity, and tone. You can always refine the prompt
          after the first draft.
        </Callout>
      </Step>

      {/* =====================================================
          STEP 5
      ====================================================== */}

      <Step
        id="review-workflow"
        number={5}
        eyebrow="Step 5 of 6"
        title="Review in Visual Workflow Builder"
        description="Check the generated sequence and open each node to review its model, instructions, and output format."
      >
        <Screenshot
          src="/images/quick-start/workflow-builder.svg"
          alt="Visual Workflow Builder"
        />

        <div
          className="
            mt-3
            flex
            flex-col
            gap-1.5
          "
        >
          {[
            'URL — accepts the article link',
            'Web Reader — retrieves clean page content',
            'Summarizer — extracts the key ideas',
            'Generate Captions — writes three distinct captions',
            'Output — formats the final result',
          ].map((item, index) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2

                text-[10px]
                leading-4
                text-[#A1A1AA]
              "
            >
              <span
                className="
                  flex
                  size-4
                  shrink-0
                  items-center
                  justify-center

                  rounded-full
                  bg-[#8B5CF6]

                  text-[8px]
                  font-semibold
                  text-white
                "
              >
                {index + 1}
              </span>

              {item}
            </div>
          ))}
        </div>

        <Callout type="success">
          <strong>You should see:</strong> Five connected nodes from URL
          to Output, with Summarize settings open on the right.
        </Callout>

        <Callout type="warning">
          <strong>Important:</strong> Don&apos;t remove the URL input.
          Web Reader needs it to fetch the article when the workflow runs.
        </Callout>
      </Step>

      {/* =====================================================
          STEP 6
      ====================================================== */}

      <Step
        id="run-test"
        number={6}
        eyebrow="Step 6 of 6"
        title="Run and test"
        description="Paste an article URL, choose Run, and watch each node light up as JX AI passes the work forward."
        last
      >
        <Screenshot
          src="/images/quick-start/run-test.svg"
          alt="Run and test a JX AI workflow"
        />

        <Callout type="success">
          <strong>You should see:</strong> A concise summary, three social
          captions, and a green Completed status.
        </Callout>

        <div
          className="
            mt-3
            rounded-xl
            border
            border-[#22C55E]

            bg-[#22C55E]

            px-4
            py-4

            text-white
          "
        >
          <p
            className="
              text-[14px]
              font-semibold
            "
          >
            You&apos;ve built your first JX AI workflow 🎉
          </p>

          <p
            className="
              mt-1

              text-[10px]
              leading-4
              text-white/80
            "
          >
            Save it, share it with your team, or keep experimenting with
            new tools and instructions.
          </p>
        </div>
      </Step>
    </section>
  );
}

/* ============================================================
   STEP
============================================================ */

function Step({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
  last = false,
}: {
  id: string;
  number: number;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <motion.section
      id={id}
      variants={stepVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: '-90px',
      }}
      className={`
        relative
        scroll-mt-28

        pl-0

        sm:pl-22

        ${
          last
            ? 'pb-14'
            : 'pb-19'
        }
      `}
    >
      {/* Step number */}
      <div
        className="
          mb-4

          flex
          size-10
          items-center
          justify-center

          rounded-full
          bg-[#8B5CF6]

          text-[13px]
          font-semibold
          text-white

          shadow-[0_0_24px_rgba(139,92,246,0.35)]

          sm:absolute
          sm:left-7
          sm:top-0
          sm:mb-0
        "
      >
        {number}
      </div>

      {/* Step heading */}
      <p
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#8B5CF6]
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          mt-1

          font-space
          text-[24px]
          font-medium
          leading-8
          tracking-[-0.025em]
          text-white
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-2

          max-w-175

          text-[11px]
          leading-[18px]
          text-[#A1A1AA]
        "
      >
        {description}
      </p>

      {children}
    </motion.section>
  );
}

/* ============================================================
   SCREENSHOT

   Figma:
   700 × 405
============================================================ */

function Screenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mt-6

        aspect-[700/405]
        w-full
        max-w-175

        overflow-hidden

        rounded-2xl
        border
        border-white/10

        bg-[#08070B]
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="
          (max-width: 640px) 100vw,
          700px
        "
        className="
          object-contain
          select-none
        "
      />
    </motion.div>
  );
}

/* ============================================================
   CALLOUT
============================================================ */

function Callout({
  type,
  children,
}: {
  type:
    | 'success'
    | 'tip'
    | 'info'
    | 'warning';

  children: ReactNode;
}) {
  const config = {
    success: {
      icon: Check,
      bg: 'bg-[#22C55E]',
    },

    tip: {
      icon: Lightbulb,
      bg: 'bg-[#8B5CF6]',
    },

    info: {
      icon: Info,
      bg: 'bg-[#60A5FA]',
    },

    warning: {
      icon: AlertTriangle,
      bg: 'bg-[#F59E0B]',
    },
  }[type];

  const Icon = config.icon;

  return (
    <div
      className={`
        mt-4
        flex
        min-h-15
        w-full
        max-w-175
        items-center
        gap-3

        rounded-xl

        px-4
        py-3

        text-white

        ${config.bg}
      `}
    >
      <span
        className="
          flex
          size-7
          shrink-0
          items-center
          justify-center

          rounded-lg
          bg-black/10
        "
      >
        <Icon className="size-3.5" />
      </span>

      <p
        className="
          text-[10px]
          leading-[17px]
          text-white/80

          [&_strong]:font-medium
          [&_strong]:text-white
        "
      >
        {children}
      </p>
    </div>
  );
}

/* ============================================================
   PROMPT CARD

   Figma:
   700 × 220
============================================================ */

function PromptCard() {
  return (
    <div
      className="
        mt-6
        w-full
        max-w-175

        rounded-2xl
        border
        border-[#8B5CF6]

        bg-linear-to-b
        from-[#0E0B16]
        to-[#1A1030]

        p-5
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-2

            text-[9px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#C4B5FD]
          "
        >
          <Sparkles className="size-3 text-[#8B5CF6]" />

          Prompt
        </span>

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2

            rounded-full
            border
            border-white/10

            px-3
            py-1.5

            text-[9px]
            text-[#A1A1AA]

            transition-colors

            hover:border-[#8B5CF6]/50
            hover:text-white
          "
        >
          <Copy className="size-3" />

          Copy
        </button>
      </div>

      <div
        className="
          mt-5

          rounded-xl
          border
          border-white/10

          bg-[#050507]

          p-4

          font-mono
          text-[10px]
          leading-5
          text-[#D4D4D8]
        "
      >
        Create a workflow that reads an article URL, summarizes the
        article, then generates three social captions with distinct tones.
      </div>

      <div
        className="
          mt-4
          flex
          flex-wrap
          gap-2
        "
      >
        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2

            rounded-full
            bg-white

            px-4
            py-2

            text-[9px]
            font-medium
            text-black

            transition-opacity

            hover:opacity-90
          "
        >
          <Play className="size-3 fill-current" />

          Try in Playground
        </button>

        <button
          type="button"
          className="
            rounded-full
            border
            border-white/15

            px-4
            py-2

            text-[9px]
            text-[#D4D4D8]

            transition-colors

            hover:border-[#8B5CF6]/50
            hover:text-white
          "
        >
          Edit prompt
        </button>
      </div>
    </div>
  );
}