import DocsShell from '@/app/components/docs/DocsShell';

import ArticleHeader from '@/app/components/docs/article/ArticleHeader';
import ArticleStep from '@/app/components/docs/article/ArticleStep';
import CodeBlock from '@/app/components/docs/article/CodeBlock';
import DocsCallout from '@/app/components/docs/article/DocsCallout';
import DocsFeedback from '@/app/components/docs/article/DocsFeedback';
import DocsPagination from '@/app/components/docs/article/DocsPagination';
import WorkflowPreview from '@/app/components/docs/article/WorkflowPreview';

const toc = [
  {
    id: 'prerequisites',
    label: 'Prerequisites',
  },
  {
    id: 'open-canvas',
    label: 'Open the canvas',
  },
  {
    id: 'choose-trigger',
    label: 'Choose a trigger',
  },
  {
    id: 'configure-event',
    label: 'Configure the event',
  },
  {
    id: 'test-publish',
    label: 'Test and publish',
  },
];

const code = `export default ({ event }) => {
  const urgent = /urgent|sev-1/i.test(event.text);

  const isSupport =
    event.channel_id === "C08SUPPORT";

  return urgent && isSupport;
};`;

export default function AddTriggersPage() {
  return (
    <DocsShell toc={toc}>
      <article>
        <ArticleHeader
          breadcrumb={[
            'Build',
            'Visual Workflow Builder',
          ]}
          badge="Pro guide"
          title="Add triggers to your workflow"
          description="Triggers start a workflow when something happens in JX AI or a connected app. Learn how to listen for Slack events, validate payloads, and keep every run reliable."
        />

        {/* ================================================
            PREREQUISITES
        ================================================ */}

        <section
          id="prerequisites"
          className="scroll-mt-28"
        >
          <h2
            className="
              font-space
              text-2xl
              font-medium
              text-white
            "
          >
            Prerequisites
          </h2>

          <div
            className="
              mt-5

              rounded-xl
              border
              border-[#8B5CF6]/20

              bg-[#151020]

              p-5
            "
          >
            <ul
              className="
                flex
                flex-col
                gap-3

                text-[13px]
                text-[#D4D4D8]
              "
            >
              {[
                'A JX AI workspace with editor access',
                'A connected Slack credential',
                'One published or draft workflow',
              ].map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      flex
                      size-4
                      items-center
                      justify-center

                      rounded-full
                      border
                      border-emerald-400

                      text-[9px]
                      text-emerald-400
                    "
                  >
                    ✓
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================================================
            STEP 1
        ================================================ */}

        <ArticleStep
          id="open-canvas"
          number={1}
          title="Open the workflow canvas"
        >
          <p>
            From the dashboard, open{' '}
            <strong>Workflows</strong> and
            select Customer escalation triage.
            Choose Edit draft so the published
            version keeps handling live runs.
          </p>

          <WorkflowPreview />
        </ArticleStep>

        <DocsCallout
          type="tip"
          title="Tip"
        >
          Duplicate a production workflow before
          changing its first trigger. You can
          compare run payloads without interrupting
          active automations.
        </DocsCallout>

        {/* ================================================
            STEP 2
        ================================================ */}

        <ArticleStep
          id="choose-trigger"
          number={2}
          title="Choose an event trigger"
        >
          Select <strong>Add node</strong>, open
          Triggers, then choose Slack. Search for
          New message in channel and select the
          credential connected to your support
          workspace.
        </ArticleStep>

        <DocsCallout
          type="info"
          title="Trigger payloads"
        >
          Each event includes channel_id, user_id,
          text, thread_ts, and a verified source
          object. Preview a sample payload before
          mapping variables.
        </DocsCallout>

        {/* ================================================
            STEP 3
        ================================================ */}

        <ArticleStep
          id="configure-event"
          number={3}
          title="Configure the event"
        >
          Choose one or more channels, then add a
          condition so only messages containing
          “urgent” or a priority reaction create a
          run.

          <CodeBlock
            filename="trigger-condition.js"
            code={code}
          />
        </ArticleStep>

        <DocsCallout
          type="warning"
          title="Avoid duplicate runs"
        >
          Slack can retry an event when your
          endpoint responds slowly. Keep
          idempotency enabled and use event_id as
          the deduplication key.
        </DocsCallout>

        {/* ================================================
            STEP 4
        ================================================ */}

        <ArticleStep
          id="test-publish"
          number={4}
          title="Test and publish"
        >
          Send a sample event, inspect the node
          output, and confirm the downstream AI
          node received the expected variables.
          Publish when the test run succeeds.
        </ArticleStep>

        {/* CTA */}
        <div
          className="
            mt-6
            rounded-xl
            border
            border-[#A855F7]/40

            bg-[#8B5CF6]/10

            p-5
          "
        >
          <p
            className="
              text-xs
              font-medium
              text-[#A855F7]
            "
          >
            Generate the rest of this workflow
          </p>

          <div className="mt-4 flex gap-2">
            <button
              className="
                rounded-lg
                border
                border-white/10

                px-3
                py-2

                text-xs
                text-[#D4D4D8]
              "
            >
              Copy
            </button>

            <button
              className="
                rounded-lg
                bg-[#8B5CF6]

                px-3
                py-2

                text-xs
                text-white

                transition-colors

                hover:bg-[#A855F7]
              "
            >
              Try in Playground
            </button>
          </div>

          <p
            className="
              mt-4
              text-[13px]
              leading-5
              text-[#A1A1AA]
            "
          >
            When a new message in #support
            contains urgent language, classify
            severity, draft a concise response,
            notify the on-call owner, and post the
            reply in the original Slack thread.
          </p>
        </div>

        <DocsFeedback />

        <DocsPagination
          previous={{
            title:
              'Create your first workflow',
            href:
              '/docs/build/visual-workflow-builder/create-workflow',
          }}
          next={{
            title:
              'Configure node conditions',
            href:
              '/docs/build/visual-workflow-builder/node-conditions',
          }}
        />
      </article>
    </DocsShell>
  );
}