import { fn } from "storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Component/Buttons & Actions/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const LargePrimaryButton = {
  args: {
    size: "large",
    label: "button_label",
    priority: `primary`,
    state: `abled`,
  },
};

export const MeduimSecondaryButton = {
  args: {
    size: "medium",
    label: "button_label",
    priority: `secondary`,
    state: `abled`,
  },
};

export const SmallSecondaryButton = {
  args: {
    size: "small",
    label: "button_label",
    priority: `secondary`,
    state: `abled`,
  },
};

export const SmallTertiaryButtonWithCircleIcon = {
  args: {
    size: "small",
    label: "button_label",
    priority: `tertiary`,
    role: `destructive`,
    state: `abled`,
    iconName: "CircleIcon",
    iconPosition: "left",
  },
};

export const LargePrimaryButtonWithSquareIconNoLabel = {
  args: {
    size: "large",
    priority: "primary",
    role: "default",
    state: "abled",
    iconName: "SquareIcon",
    "aria-label": "Square Icon Button",
  },
};
