import QuickStartShell from '@/app/components/quick-start/QuickStartShell';

import QuickStartHeader from '@/app/components/quick-start/QuickStartHeader';
import WorkflowOverview from '@/app/components/quick-start/WorkflowOverview';
import PathSelector from '@/app/components/quick-start/PathSelector';
import QuickStartStep from '@/app/components/quick-start/QuickStartStep';
import QuickStartCallout from '@/app/components/quick-start/QuickStartCallout';
import QuickStartScreenshot from '@/app/components/quick-start/QuickStartScreenshot';

export default function QuickStartPage() {
  return (
    <QuickStartShell>
      <QuickStartHeader />

      <WorkflowOverview />

      <PathSelector />

      {/* ==================================================
          STEP 1
      ================================================== */}

      <QuickStartStep
        id="create-account"
        number={1}
        eyebrow="Step 01"
        title="Create your account"
        description={
          <>
            Sign up with Google, GitHub, or
            your work email. You&apos;ll land
            in a fresh JX AI workspace.
          </>
        }
      >
        <QuickStartScreenshot
          src="/images/quick-start/create-account.svg"
          alt="Create a JX AI account"
        />

        <div className="mt-3">
          <QuickStartCallout type="success">
            <strong>You&apos;re done.</strong>{' '}
            Your workspace is ready.
          </QuickStartCallout>
        </div>

        <div className="mt-2">
          <QuickStartCallout type="tip">
            You can invite teammates after
            completing this guide.
          </QuickStartCallout>
        </div>
      </QuickStartStep>

      {/* ==================================================
          STEP 2
      ================================================== */}

      <QuickStartStep
        id="dashboard"
        number={2}
        eyebrow="Step 02"
        title="Open your Dashboard"
        description={
          <>
            Your Dashboard is home for
            projects, workflows, runs, and
            workspace settings.
          </>
        }
      >
        <QuickStartScreenshot
          src="/images/quick-start/dashboard.svg"
          alt="JX AI Dashboard"
        />

        <div className="mt-3">
          <QuickStartCallout type="success">
            Your Dashboard is where you&apos;ll
            manage workflows and recent runs.
          </QuickStartCallout>
        </div>
      </QuickStartStep>

      {/* ==================================================
          STEP 3
      ================================================== */}

      <QuickStartStep
        id="tools"
        number={3}
        eyebrow="Step 03"
        title="Pick your AI tools"
        description={
          <>
            Open the AI Tool Directory and
            choose the models, agents, and
            utilities your workflow needs.
          </>
        }
      >
        <QuickStartScreenshot
          src="/images/quick-start/tool-directory.svg"
          alt="JX AI Tool Directory"
        />

        <div className="mt-3">
          <QuickStartCallout type="success">
            Tools can be swapped later without
            rebuilding your whole workflow.
          </QuickStartCallout>
        </div>

        <div className="mt-2">
          <QuickStartCallout type="info">
            Start simple. One generation tool
            and one output is enough for your
            first workflow.
          </QuickStartCallout>
        </div>
      </QuickStartStep>

      {/* ==================================================
          STEP 4
      ================================================== */}

      <QuickStartStep
        id="describe-workflow"
        number={4}
        eyebrow="Step 04"
        title="Describe your workflow"
        description={
          <>
            Return to the Dashboard, open the
            prompt, and tell JX AI what should
            happen in plain language.
          </>
        }
      >
        <div
          className="
            mt-5

            rounded-xl
            border
            border-[#8C45FF]/30

            bg-[#100718]

            p-4
          "
        >
          <p
            className="
              font-mono
              text-[12px]
              leading-6
              text-[#D4D4D8]
            "
          >
            Create a workflow that reads an
            article, summarizes the key ideas,
            then generates three short social
            captions.
          </p>
        </div>

        <div className="mt-3">
          <QuickStartCallout type="success">
            That&apos;s enough detail for JX AI
            to generate your first workflow.
          </QuickStartCallout>
        </div>
      </QuickStartStep>

      {/* ==================================================
          STEP 5
      ================================================== */}

      <QuickStartStep
        id="review-workflow"
        number={5}
        eyebrow="Step 05"
        title="Review in Visual Workflow Builder"
        description={
          <>
            Check the generated sequence and
            open each node to review its model,
            instructions, and output format.
          </>
        }
      >
        <QuickStartScreenshot
          src="/images/quick-start/workflow-builder.svg"
          alt="JX AI Visual Workflow Builder"
        />

        <div className="mt-3">
          <QuickStartCallout type="success">
            You can move, replace, or reconnect
            nodes before running anything.
          </QuickStartCallout>
        </div>

        <div className="mt-2">
          <QuickStartCallout type="warning">
            Review external actions before a
            workflow is allowed to publish or
            send data.
          </QuickStartCallout>
        </div>
      </QuickStartStep>

      {/* ==================================================
          STEP 6
      ================================================== */}

      <QuickStartStep
        id="run-test"
        number={6}
        eyebrow="Step 06"
        title="Run and test"
        description={
          <>
            Paste an article URL, choose Run,
            and watch each node light up as JX
            AI processes the workflow.
          </>
        }
      >
        <QuickStartScreenshot
          src="/images/quick-start/run-test.svg"
          alt="Running a workflow in JX AI"
        />

        <div className="mt-3">
          <QuickStartCallout type="success">
            A successful run means the workflow
            is ready for real input.
          </QuickStartCallout>
        </div>

        <div className="mt-2">
          <QuickStartCallout type="success">
            Your first JX AI workflow is built.
          </QuickStartCallout>
        </div>
      </QuickStartStep>

      {/* ==================================================
          TEMPLATE
      ================================================== */}

      <section
        id="template"
        className="
          scroll-mt-28
          py-10
        "
      >
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#8C45FF]
          "
        >
          Alternative
        </p>

        <h2
          className="
            mt-1
            font-space
            text-2xl
            font-medium
            text-white
          "
        >
          Start from a template
        </h2>

        <p
          className="
            mt-2
            text-[13px]
            leading-6
            text-[#A1A1AA]
          "
        >
          Browse the Template Gallery,
          duplicate a workflow, then replace
          the sample tools or inputs.
        </p>

        <QuickStartScreenshot
          src="/images/quick-start/template-gallery.svg"
          alt="JX AI Template Gallery"
        />
      </section>

      {/* ==================================================
          TROUBLESHOOTING
      ================================================== */}

      <section
        id="troubleshooting"
        className="
          scroll-mt-28
          py-10
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
          Troubleshooting
        </h2>

        <p
          className="
            mt-2
            text-[13px]
            text-[#71717A]
          "
        >
          Quick fixes for the most common
          first-run issues.
        </p>

        <div className="mt-5 flex flex-col gap-2">
          {[
            'My workflow will not run',
            'The output is not what I expected',
            'A tool is showing an error',
            'My run is taking longer than expected',
          ].map((question) => (
            <details
              key={question}
              className="
                group

                rounded-lg
                border
                border-white/10

                bg-[#08070B]

                px-4
                py-3
              "
            >
              <summary
                className="
                  cursor-pointer
                  list-none

                  text-[12px]
                  text-[#D4D4D8]
                "
              >
                {question}
              </summary>

              <p
                className="
                  mt-3
                  text-[11px]
                  leading-5
                  text-[#71717A]
                "
              >
                Open the run details and inspect
                the node where execution stopped.
                Confirm credentials, required
                inputs, and model availability.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ==================================================
          WHAT'S NEXT
      ================================================== */}

      <section
        id="next"
        className="
          scroll-mt-28
          py-10
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
          What&apos;s next
        </h2>

        <p
          className="
            mt-2
            text-[13px]
            text-[#71717A]
          "
        >
          Turn your first workflow into
          something your whole team can use.
        </p>

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2
          "
        >
          {[
            [
              'Automate it',
              'Add a schedule or trigger to run automatically.',
            ],
            [
              'Connect your apps',
              'Bring Slack, HubSpot, Gmail, and other tools into the flow.',
            ],
            [
              'Go deeper',
              'Add conditions, branches, and reusable logic.',
            ],
            [
              'Share it',
              'Publish workflows for your team or marketplace.',
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="
                rounded-xl
                border
                border-[#8C45FF]/20

                bg-[#100718]

                p-4

                transition-[border-color,background-color]

                hover:border-[#8C45FF]/40
                hover:bg-[#160A20]
              "
            >
              <h3
                className="
                  text-[12px]
                  font-medium
                  text-white
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  leading-[17px]
                  text-[#71717A]
                "
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          PAGE END
      ================================================== */}

      <div
        className="
          mt-8
          border-t
          border-white/10
          pt-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[11px]
              text-[#71717A]
            "
          >
            Was this page helpful?
          </p>

          <div className="flex gap-2">
            <button
              className="
                rounded-lg
                border
                border-white/10

                px-3
                py-2

                text-[10px]
                text-[#A1A1AA]

                hover:border-[#8C45FF]/40
                hover:text-white
              "
            >
              Yes
            </button>

            <button
              className="
                rounded-lg
                border
                border-white/10

                px-3
                py-2

                text-[10px]
                text-[#A1A1AA]

                hover:border-[#8C45FF]/40
                hover:text-white
              "
            >
              Not really
            </button>
          </div>
        </div>

        <div
          className="
            mt-5

            rounded-xl
            border
            border-[#8C45FF]/20

            bg-[#100718]

            p-4

            text-right
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-[#71717A]
            "
          >
            Next
          </p>

          <p
            className="
              mt-1
              text-[12px]
              text-[#C281FF]
            "
          >
            Core concepts →
          </p>
        </div>
      </div>
    </QuickStartShell>
  );
}