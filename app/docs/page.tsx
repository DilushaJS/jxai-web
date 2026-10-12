import DocsShell from '@/app/components/docs/DocsShell';

const toc = [
  {
    id: 'overview',
    label: 'Overview',
  },
  {
    id: 'get-started',
    label: 'Get started',
  },
];

export default function DocsPage() {
  return (
    <DocsShell toc={toc}>
      <article>
        <section
          id="overview"
          className="scroll-mt-28"
        >
          <p
            className="
              mb-3
              text-[12px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-[#A855F7]
            "
          >
            Documentation
          </p>

          <h1
            className="
              font-space
              text-4xl
              font-medium
              tracking-[-0.04em]
              text-white

              sm:text-5xl
            "
          >
            JX AI Documentation
          </h1>

          <p
            className="
              mt-5
              max-w-150
              text-[16px]
              leading-7
              text-[#A1A1AA]
            "
          >
            Learn how to build AI workflows,
            connect your tools, configure
            automations, and deploy workflows
            using JX AI.
          </p>
        </section>

        <section
          id="get-started"
          className="
            mt-12
            scroll-mt-28
          "
        >
          <h2
            className="
              font-space
              text-2xl
              font-medium
              text-white
            "
          >
            Get started
          </h2>

          <p
            className="
              mt-3
              text-[14px]
              leading-6
              text-[#A1A1AA]
            "
          >
            Start with the Quick Start guide or
            create your first visual workflow.
          </p>
        </section>
      </article>
    </DocsShell>
  );
}