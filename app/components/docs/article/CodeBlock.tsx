'use client';

import { useState } from 'react';
import {
  Check,
  Copy,
} from 'lucide-react';

type CodeBlockProps = {
  filename: string;
  code: string;
};

export default function CodeBlock({
  filename,
  code,
}: CodeBlockProps) {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(
      code,
    );

    setCopied(true);

    window.setTimeout(
      () => setCopied(false),
      1500,
    );
  }

  return (
    <div
      className="
        my-6
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#0E0B16]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          border-b
          border-white/10

          px-4
          py-3
        "
      >
        <div className="flex gap-4 text-[11px]">
          <span className="text-[#A855F7]">
            JavaScript
          </span>

          <span className="text-[#71717A]">
            Python
          </span>

          <span className="text-[#71717A]">
            Payload
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="
            inline-flex
            items-center
            gap-1.5

            text-[11px]
            text-[#A1A1AA]

            transition-colors
            hover:text-white
          "
        >
          {copied ? (
            <Check className="size-3" />
          ) : (
            <Copy className="size-3" />
          )}

          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div
        className="
          border-b
          border-white/10

          px-4
          py-2

          font-mono
          text-[10px]
          text-[#71717A]
        "
      >
        {filename}
      </div>

      <pre
        className="
          overflow-x-auto

          p-4

          font-mono
          text-[12px]
          leading-6
          text-[#D4D4D8]
        "
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}