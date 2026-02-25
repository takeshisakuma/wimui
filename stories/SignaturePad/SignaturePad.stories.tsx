import type { Meta, StoryObj } from "@storybook/react-vite";
import { SignaturePad } from "../../src/components/SignaturePad/SignaturePad";

const meta: Meta<typeof SignaturePad> = {
  title: "Components/Advanced Inputs/SignaturePad",
  component: SignaturePad,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SignaturePad>;

export const Default: Story = {
  args: {
    width: 400,
    height: 200,
  },
};

export const CustomColors: Story = {
  args: {
    penColor: "#ff4d4f",
    penWidth: 4,
    width: 400,
    height: 200,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    width: 400,
    height: 200,
  },
};

export const Large: Story = {
  args: {
    width: 600,
    height: 300,
  },
};
