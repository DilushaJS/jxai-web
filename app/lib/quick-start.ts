export type QuickStartNavItem = {
  label: string;
  href: string;
};

export type QuickStartTocItem = {
  id: string;
  label: string;
};

export const quickStartNavigation = [
  {
    label: 'Get Started',
    items: [
      {
        label: 'What is JX AI?',
        href: '/docs',
      },
      {
        label: 'Quick Start',
        href: '/quick-start',
      },
      {
        label: 'Core concepts',
        href: '/docs/core-concepts',
      },
      {
        label: 'Your Dashboard tour',
        href: '/docs/dashboard',
      },
      {
        label: 'Playground basics',
        href: '/playground',
      },
    ],
  },
  {
    label: 'Build',
    items: [
      {
        label: 'AI Tools',
        href: '/docs/tools',
      },
      {
        label: 'Workflows',
        href: '/docs/build/workflows',
      },
      {
        label: 'Visual Workflow Builder',
        href: '/docs/build/visual-workflow-builder',
      },
    ],
  },
  {
    label: 'Integrate',
    items: [
      {
        label: 'Connectors',
        href: '/docs/integrate/connectors',
      },
      {
        label: 'Credentials',
        href: '/docs/build/credentials',
      },
    ],
  },
];

export const quickStartToc: QuickStartTocItem[] = [
  {
    id: 'what-you-build',
    label: "What you'll build",
  },
  {
    id: 'choose-path',
    label: 'Choose your path',
  },
  {
    id: 'create-account',
    label: 'Create your account',
  },
  {
    id: 'dashboard',
    label: 'Open your Dashboard',
  },
  {
    id: 'tools',
    label: 'Pick your AI tools',
  },
  {
    id: 'describe-workflow',
    label: 'Describe your workflow',
  },
  {
    id: 'review-workflow',
    label: 'Review your workflow',
  },
  {
    id: 'run-test',
    label: 'Run and test',
  },
  {
    id: 'template',
    label: 'Start from a template',
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
  },
  {
    id: 'next',
    label: "What's next",
  },
];