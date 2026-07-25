import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Progress } from "wimui";

const meta: Meta<typeof Progress> = {
  title: "Components/Loading States/Progress",
  component: Progress,
  tags: [],
  argTypes: {
    intent: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "neutral",
        "info",
      ],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    showValue: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Progress {...args} label={t("story.progress_label_processing")} />;
  },
};

export const Colors: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      <Progress {...args} intent="primary" value={20} label={t("common.primary")} />
      <Progress {...args} intent="secondary" value={40} label={t("common.secondary")} />
      <Progress {...args} intent="success" value={60} label={t("common.success")} />
      <Progress {...args} intent="warning" value={80} label={t("common.warning")} />
      <Progress {...args} intent="danger" value={90} label={t("common.error")} />
      <Progress {...args} intent="neutral" value={50} label={t("common.neutral")} />
    </div>
    );
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      <Progress {...args} size="sm" value={50} label={t("common.small")} />
      <Progress {...args} size="md" value={50} label={t("common.medium")} />
      <Progress {...args} size="lg" value={50} label={t("common.large")} />
    </div>
    );
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Progress {...args} label={t("story.progress_label_uploading")} />;
  },
};
