import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "@/components/navigation/Stepper/Stepper";
import React, { useState } from "react";
import { Icon } from "@/components/media/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Stepper> = {
  title: "Components/Navigation Elements/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
  },
  tags: [], // autodocs removed to avoid conflict with Stepper.mdx
  argTypes: {
    current: { control: "number" },
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    labelPlacement: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    intent: {
      control: "select",
      options: ["wait", "process", "finish", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const useDefaultSteps = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    {
      title: t("story.stepper_finished"),
      description: t("story.stepper_desc"),
    },
    {
      title: t("story.stepper_in_progress"),
      description: t("story.stepper_desc"),
    },
    {
      title: t("story.stepper_waiting"),
      description: t("story.stepper_desc"),
    },
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
};

export const Vertical: Story = {
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    direction: "vertical",
  },
};

export const LabelVertical: Story = {
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    labelPlacement: "vertical",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    intent: "error",
  },
};

export const CustomIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stepper
        {...args}
        steps={[
          {
            title: t("story.stepper_login"),
            icon: <Icon name="EyeIcon" size="sm" />,
          },
          {
            title: t("story.stepper_verification"),
            icon: <Icon name="LoadingIcon" size="sm" />,
          },
          {
            title: t("story.stepper_pay"),
            icon: <Icon name="StarIcon" size="sm" />,
          },
          {
            title: t("story.stepper_done"),
            icon: <Icon name="CheckIcon" size="sm" />,
          },
        ]}
        current={1}
      />
    );
  },
};

export const Interactive: Story = {
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [current, setCurrent] = useState(0);
    const steps = Array.from({ length: 4 }, (_, i) => ({
      title: `${t("story.stepper_step")} ${i + 1}`,
      description: `${t("story.stepper_step_desc")} ${i + 1}`,
    }));
    return (
      <Stepper
        {...args}
        steps={steps}
        current={current}
        onChange={(index) => setCurrent(index)}
      />
    );
  },
};
