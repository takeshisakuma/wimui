import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { UsageMeter } from "@/components/ai/UsageMeter/UsageMeter";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof UsageMeter> = {
  title: "Components/AI/UsageMeter",
  component: UsageMeter,
  parameters: {
    layout: "padded",
  },
  args: {
    used: 3200,
    max: 8000,
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof UsageMeter>;

const useLabels = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return { label: t("story.usagemeter_label"), unit: t("story.usagemeter_unit") };
};

export const Default: Story = {
  render: (args) => <UsageMeter {...args} labels={useLabels()} />,
};

export const Thresholds: Story = {
  render: (args) => {
    const labels = useLabels();
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "320px" }}>
        <UsageMeter {...args} used={2000} labels={labels} />
        <UsageMeter {...args} used={6400} labels={labels} />
        <UsageMeter {...args} used={7600} labels={labels} />
      </div>
    );
  },
};

export const Percentage: Story = {
  render: (args) => <UsageMeter {...args} showPercentage labels={useLabels()} />,
};

export const CounterOnly: Story = {
  render: () => <UsageMeter used={4200} labels={useLabels()} />,
};

export const Sizes: Story = {
  render: (args) => {
    const labels = useLabels();
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "320px" }}>
        <UsageMeter {...args} size="sm" labels={labels} />
        <UsageMeter {...args} size="md" labels={labels} />
        <UsageMeter {...args} size="lg" labels={labels} />
      </div>
    );
  },
};
