export type DocsNavItem = {
  label: string;
  href: string;
};

export type DocsNavGroup = {
  label: string;
  items: DocsNavItem[];
};

export type DocsTocItem = {
  id: string;
  label: string;
};

export const docsNavigation: DocsNavGroup[] = [
  {
    label: 'Get Started',
    items: [
      {
        label: 'Overview',
        href: '/docs',
      },
      {
        label: 'Quick Start',
        href: '/docs/quick-start',
      },
      {
        label: 'Core concepts',
        href: '/docs/core-concepts',
      },
    ],
  },

  {
    label: 'Build',
    items: [
      {
        label: 'Workflows',
        href: '/docs/build/workflows',
      },
      {
        label: 'Visual Workflow Builder',
        href: '/docs/build/visual-workflow-builder',
      },
      {
        label: 'Add triggers',
        href: '/docs/build/visual-workflow-builder/add-triggers',
      },
      {
        label: 'Credentials',
        href: '/docs/build/credentials',
      },
      {
        label: 'Runs',
        href: '/docs/build/runs',
      },
    ],
  },

  {
    label: 'AI Tools',
    items: [
      {
        label: 'Tool directory',
        href: '/docs/tools',
      },
      {
        label: 'Prompt to Workflow',
        href: '/docs/prompt-to-workflow',
      },
      {
        label: 'Templates',
        href: '/docs/templates',
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
        label: 'Webhooks',
        href: '/docs/integrate/webhooks',
      },
      {
        label: 'OAuth',
        href: '/docs/integrate/oauth',
      },
    ],
  },
];