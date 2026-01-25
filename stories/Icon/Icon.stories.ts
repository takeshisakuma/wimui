import { fn } from "storybook/test";
import { Icon } from "./Icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Component/Icon",
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ["semantic-danger", "semantic-success", "semantic-warning", "semantic-primary", "semantic-secondary"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args


export const MediumSquareIcon = {
  args: {
    name: "SquareIcon",
    size: "medium",
    color: "semantic-primary" // CSS変数名に変更
  },
};
export const MediumCircleIcon = {
  args: {
    name: "CircleIcon",
    size: "large",
    color: "semantic-danger" // CSS変数名に変更
  },
};
