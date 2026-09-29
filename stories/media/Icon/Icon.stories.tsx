import { fn } from "storybook/test";
import { Icon } from "wimui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Typography & Icons/Icon",
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: "select",
      options: [
        "danger",
        "success",
        "warning",
        "info",
        "primary",
        "secondary",
        "tertiary",
        "disabled",
      ],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    name: "CircleIcon",
    size: "md",
    color: "danger",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// T280: この値はどのストーリーにも描かれていなかった（変えても VRT が赤を出さない）。
export const Sizes = {
  render: () => (
    <div style={{ display: "flex", alignItems: "end", gap: "var(--wim-spacing-lg)" }}>
      {(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"] as const).map((size) => (
        <Icon key={size} name="SquareIcon" size={size} color="primary" />
      ))}
    </div>
  ),
};

export const MediumSquareIcon = {
  args: {
    name: "SquareIcon",
    size: "md",
    color: "primary",
  },
};
export const MediumCircleIcon = {
  args: {
    name: "CircleIcon",
    size: "lg",
    color: "danger",
  },
};
export const MediumLoadingIcon = {
  args: {
    name: "LoadingIcon",
    size: "lg",
    color: "primary",
  },
};
export const MediumExternalLinkIcon = {
  args: {
    name: "ExternalLinkIcon",
    size: "md",
    color: "primary",
  },
};
export const MediumSpinnerIcon = {
  args: {
    name: "SpinnerIcon",
    size: "lg",
    color: "primary",
  },
};
export const MediumMoreHorizontalIcon = {
  args: {
    name: "MoreHorizontalIcon",
    size: "md",
    color: "primary",
  },
};
export const MediumThumbUpIcon = {
  args: {
    name: "ThumbUpIcon",
    size: "md",
    color: "success",
  },
};
export const MediumThumbDownIcon = {
  args: {
    name: "ThumbDownIcon",
    size: "md",
    color: "danger",
  },
};
