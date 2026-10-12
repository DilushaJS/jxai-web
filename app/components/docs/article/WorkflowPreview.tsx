const nodes = [
  {
    title: 'Slack event',
    caption: 'message.channels',
    color: '#A855F7',
  },

  {
    title: 'Filter',
    caption: 'contains "urgent"',
    color: '#60A5FA',
  },

  {
    title: 'JX AI',
    caption: 'classify + draft',
    color: '#8B5CF6',
  },

  {
    title: 'Slack reply',
    caption: 'post thread',
    color: '#34D399',
  },
];

export default function WorkflowPreview() {
  return (
    <div
      className="
        my-6

        grid
        grid-cols-1
        gap-4

        rounded-xl
        border
        border-white/10

        bg-[#0E0B16]

        p-5

        sm:grid-cols-2
        sm:gap-7
      "
    >
      {nodes.map((node, index) => (
        <div
          key={node.title}
          className="
            relative
            rounded-lg
            border
            border-white/10
            bg-[#0B0911]
            p-4
          "
        >
          <span
            className="
              absolute
              left-3
              top-3
              size-2
              rounded-full
            "
            style={{
              backgroundColor:
                node.color,
            }}
          />

          <p
            className="
              pl-4
              text-[12px]
              font-medium
              text-[#FAFAFA]
            "
          >
            {node.title}
          </p>

          <p
            className="
              mt-1
              pl-4
              font-mono
              text-[10px]
              text-[#71717A]
            "
          >
            {node.caption}
          </p>

          {index < nodes.length - 1 && (
            <span
              className="
                absolute
                -right-5
                top-1/2

                hidden

                -translate-y-1/2

                text-[#8B5CF6]

                sm:block
              "
            >
              ···→
            </span>
          )}
        </div>
      ))}
    </div>
  );
}