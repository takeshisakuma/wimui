import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@/components/form/Slider/Slider";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/typography/Label/Label";
import { ALL_NAMESPACES } from "../i18nConstants";


const MetaData: Meta<typeof Slider> = {
  title: "Components/Pickers & Sliders/Slider",
  component: Slider,

  argTypes: {
    onChange: { action: "changed" },
    onAfterChange: { action: "afterChanged" },
  },
};

export default MetaData;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.slider_default")}>
        <Slider {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: 50,
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.slider_disabled")}>
        <Slider {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: 30,
    disabled: true,
  },
};

export const MinMax: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.slider_minmax")}>
        <Slider {...args} />
      </Label>
    );
  },
  args: {
    min: -50,
    max: 50,
    defaultValue: 0,
  },
};

export const Step: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.slider_step")}>
        <Slider {...args} />
      </Label>
    );
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 20,
  },
};

export const Controlled = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [val, setVal] = useState(25);
  return (
    <Label label={`${t("story.slider_default")} (${t("story.dialog_curr_state")}: ${val})`}>
      <Slider value={val} onChange={setVal} />
    </Label>
  );
};
