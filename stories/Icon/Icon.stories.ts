import { fn } from "storybook/test";
import { Icon } from "@/components/Icon/Icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Component/Typography & Icons/Icon",
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "destructive",
        "positive",
        "caution",
        "informative",
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
    size: "medium",
    color: "destructive",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const MediumSquareIcon = {
  args: {
    name: "SquareIcon",
    size: "medium",
    color: "primary",
  },
};
export const MediumCircleIcon = {
  args: {
    name: "CircleIcon",
    size: "large",
    color: "destructive",
  },
};
export const MediumLoadingIcon = {
  args: {
    name: "LoadingIcon",
    size: "large",
    color: "primary",
  },
};
export const MediumExternalLinkIcon = {
  args: {
    name: "ExternalLinkIcon",
    size: "medium",
    color: "primary",
  },
};
export const MediumSpinnerIcon = {
  args: {
    name: "SpinnerIcon",
    size: "large",
    color: "primary",
  },
};
export const MediumEllipsisIcon = {
  args: {
    name: "EllipsisIcon",
    size: "medium",
    color: "primary",
  },
};
export const MediumThumbUpIcon = {
  args: {
    name: "ThumbUpIcon",
    size: "medium",
    color: "positive",
  },
};
export const MediumThumbDownIcon = {
  args: {
    name: "ThumbDownIcon",
    size: "medium",
    color: "destructive",
  },
};
