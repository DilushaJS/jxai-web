import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

type DocsPaginationProps = {
  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
};

export default function DocsPagination({
  previous,
  next,
}: DocsPaginationProps) {
  return (
    <div
      className="
        mt-5
        grid
        grid-cols-1
        gap-3

        sm:grid-cols-2
      "
    >
      {previous && (
        <Link
          href={previous.href}
          className="
            group
            rounded-xl
            border
            border-white/10
            bg-[#0E0B16]
            p-4

            transition-colors

            hover:border-[#8B5CF6]/40
            hover:bg-[#151020]
          "
        >
          <div
            className="
              flex
              items-center
              gap-1

              text-[10px]
              uppercase
              text-[#71717A]
            "
          >
            <ArrowLeft className="size-3" />

            Previous
          </div>

          <p
            className="
              mt-3
              text-sm
              text-[#D4D4D8]

              transition-colors

              group-hover:text-white
            "
          >
            {previous.title}
          </p>
        </Link>
      )}

      {next && (
        <Link
          href={next.href}
          className="
            group
            rounded-xl
            border
            border-white/10
            bg-[#0E0B16]
            p-4

            transition-colors

            hover:border-[#8B5CF6]/40
            hover:bg-[#151020]
          "
        >
          <div
            className="
              flex
              items-center
              justify-end
              gap-1

              text-[10px]
              uppercase
              text-[#71717A]
            "
          >
            Next

            <ArrowRight className="size-3" />
          </div>

          <p
            className="
              mt-3
              text-right
              text-sm
              text-[#D4D4D8]

              transition-colors

              group-hover:text-white
            "
          >
            {next.title}
          </p>
        </Link>
      )}
    </div>
  );
}