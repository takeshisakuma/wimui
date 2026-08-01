import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Group, ProgressRing } from "wimui";

const meta: Meta<typeof ProgressRing> = {
  title: "Components/Loading States/ProgressRing",
  component: ProgressRing,
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
    return <ProgressRing {...args} label={t("story.progress_label_processing")} />;
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Group gap="2xl" align="center">
        <ProgressRing {...args} size="sm" value={25} showValue label={t("story.progress_label_uploading")} />
        <ProgressRing {...args} size="md" value={60} showValue label={t("story.progress_label_uploading")} />
        <ProgressRing
          {...args}
          size="lg"
          value={90}
          showValue
          label={t("story.progress_label_uploading")}
        />
      </Group>
    );
  },
};

export const Intents: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const label = t("story.progress_label_processing");
    return (
      <Group gap="2xl" align="center">
        <ProgressRing {...args} intent="primary" value={70} showValue label={label} />
        <ProgressRing {...args} intent="success" value={100} showValue label={label} />
        <ProgressRing {...args} intent="warning" value={45} showValue label={label} />
        <ProgressRing {...args} intent="danger" value={15} showValue label={label} />
      </Group>
    );
  },
};

export const WithoutValue: Story = {
  args: {
    value: 35,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <ProgressRing {...args} label={t("story.progress_label_uploading")} />;
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <ProgressRing {...args} label={t("story.progress_label_processing")} />;
  },
};
