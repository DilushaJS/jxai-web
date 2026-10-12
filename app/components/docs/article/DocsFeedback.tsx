import {
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';

export default function DocsFeedback() {
  return (
    <div
      className="
        mt-10

        rounded-xl
        border
        border-white/10

        bg-[#0E0B16]

        p-5
      "
    >
      <p className="text-sm font-medium text-white">
        Was this page helpful?
      </p>

      <p className="mt-1 text-xs text-[#71717A]">
        Your feedback improves JX AI
        Docs.
      </p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2

            rounded-lg
            border
            border-white/10

            px-3
            py-2

            text-xs
            text-[#A1A1AA]

            transition-colors

            hover:border-[#8B5CF6]/40
            hover:bg-[#8B5CF6]/10
            hover:text-white
          "
        >
          <ThumbsUp className="size-3.5" />
          Yes
        </button>

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2

            rounded-lg
            border
            border-white/10

            px-3
            py-2

            text-xs
            text-[#A1A1AA]

            transition-colors

            hover:border-[#8B5CF6]/40
            hover:bg-[#8B5CF6]/10
            hover:text-white
          "
        >
          <ThumbsDown className="size-3.5" />
          No
        </button>
      </div>
    </div>
  );
}