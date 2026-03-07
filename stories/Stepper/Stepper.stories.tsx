import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "@/components/Stepper/Stepper";
import React, { useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";

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
    status: {
      control: "select",
      options: ["wait", "process", "finish", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const useDefaultSteps = () => {
  const { t } = useTranslation(["docs", "common", "components"]);
  return [
    {
      title: t("story_stepper_finished"),
      description: t("story_stepper_desc"),
    },
    {
      title: t("story_stepper_in_progress"),
      description: t("story_stepper_desc"),
    },
    {
      title: t("story_stepper_waiting"),
      description: t("story_stepper_desc"),
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
    return <Stepper {...args} steps={steps} current={1} direction="vertical" />;
  },
};

export const LabelVertical: Story = {
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} labelPlacement="vertical" />;
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} status="error" />;
  },
};

export const CustomIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Stepper
        {...args}
        steps={[
          {
            title: t("story_stepper_login"),
            icon: <Icon name="EyeIcon" size="small" />,
          },
          {
            title: t("story_stepper_verification"),
            icon: <Icon name="LoadingIcon" size="small" />,
          },
          {
            title: t("story_stepper_pay"),
            icon: <Icon name="StarIcon" size="small" />,
          },
          {
            title: t("story_stepper_done"),
            icon: <Icon name="CheckIcon" size="small" />,
          },
        ]}
        current={1}
      />
    );
  },
};

export const Interactive: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "common", "components"]);
    const [current, setCurrent] = useState(0);
    const steps = Array.from({ length: 4 }, (_, i) => ({
      title: `${t("story_stepper_step")} ${i + 1}`,
      description: `${t("story_stepper_step_desc")} ${i + 1}`,
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
