import type { ReactNode } from 'react';

import {
  CheckCircle2,
  Info,
  Lightbulb,
  TriangleAlert,
} from 'lucide-react';

type CalloutType =
  | 'success'
  | 'tip'
  | 'info'
  | 'warning';

type QuickStartCalloutProps = {
  type: CalloutType;
  children: ReactNode;
};

const variants = {
  success: {
    icon: CheckCircle2,
    box:
      'border-emerald-400/15 bg-emerald-500/8',
    iconColor:
      'text-emerald-400',
  },

  tip: {
    icon: Lightbulb,
    box:
      'border-[#8C45FF]/20 bg-[#8C45FF]/8',
    iconColor:
      'text-[#C281FF]',
  },

  info: {
    icon: Info,
    box:
      'border-blue-400/15 bg-blue-500/8',
    iconColor:
      'text-blue-400',
  },

  warning: {
    icon: TriangleAlert,
    box:
      'border-amber-400/15 bg-amber-500/8',
    iconColor:
      'text-amber-400',
  },
};

export default function QuickStartCallout({
  type,
  children,
}: QuickStartCalloutProps) {
  const config = variants[type];
  const Icon = config.icon;

  return (
    <div
      className={`
        flex
        gap-3

        rounded-lg
        border

        px-3.5
        py-3

        ${config.box}
      `}
    >
      <Icon
        className={`
          mt-0.5
          size-3.5
          shrink-0

          ${config.iconColor}
        `}
      />

      <div
        className="
          text-[11px]
          leading-[18px]
          text-[#A1A1AA]

          [&_strong]:font-medium
          [&_strong]:text-white
        "
      >
        {children}
      </div>
    </div>
  );
}