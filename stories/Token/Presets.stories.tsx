import type { Meta, StoryObj } from "@storybook/react-vite";
import { PresetShowcase } from "../../sandbox/PresetShowcase";

const meta: Meta = {
  title: "Token/Presets",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Overview: StoryObj = {
  render: () => <PresetShowcase />,
};
