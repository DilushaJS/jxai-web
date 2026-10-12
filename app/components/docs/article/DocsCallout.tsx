import type { ReactNode } from 'react';
import {
  Info,
  Lightbulb,
  TriangleAlert,
} from 'lucide-react';

type CalloutType =
  | 'tip'
  | 'info'
  | 'warning';

type DocsCalloutProps = {
  type: CalloutType;
  title: string;
  children: ReactNode;
};

const styles = {
  tip: {
    icon: Lightbulb,
    container:
      'border-emerald-400/15 bg-emerald-500/8',
    title:
      'text-emerald-400',
  },

  info: {
    icon: Info,
    container:
      'border-blue-400/15 bg-blue-500/8',
    title:
      'text-blue-400',
  },

  warning: {
    icon: TriangleAlert,
    container:
      'border-amber-400/15 bg-amber-500/8',
    title:
      'text-amber-400',
  },
};

export default function DocsCallout({
  type,
  title,
  children,
}: DocsCalloutProps) {
  const config = styles[type];
  const Icon = config.icon;

  return (
    <div
      className={`
        my-6
        rounded-xl
        border
        p-4

        ${config.container}
      `}
    >
      <div
        className={`
          flex
          items-center
          gap-2

          text-xs
          font-medium

          ${config.title}
        `}
      >
        <Icon className="size-4" />

        {title}
      </div>

      <div
        className="
          mt-2

          text-[13px]
          leading-5
          text-[#A1A1AA]
        "
      >
        {children}
      </div>
    </div>
  );
}