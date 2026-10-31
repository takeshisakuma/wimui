import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Spinner, Stack } from "wimui";

const meta: Meta<typeof Spinner> = {
  title: "Components/Loading States/Spinner",
  component: Spinner,
  tags: [],
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "neutral",
        "currentColor",
      ],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    labelPosition: {
      control: "radio",
      options: ["right", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Spinner {...args} label={t("story.spinner_label_loading")} />;
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="danger" />
      <Spinner {...args} color="neutral" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
      <Spinner {...args} size="xl" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Spinner {...args} label={t("story.spinner_loading_right")} labelPosition="right" />
      <Spinner {...args} label={t("story.spinner_loading_bottom")} labelPosition="bottom" />
    </div>
    );
  },
};

// T353: 読み上げの聞き取り用。操作のあとに、告げる文が要素ごと差し込まれる形を開く
// （ナレーターでは読まれない見込みの形。`MAINTENANCE.md` 7-4 の 2026-10-31 の行）。docs ページには載せない。
export const AppearsAfterAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = React.useState(false);
    return (
      <Stack gap="md" align="start">
        <Button onClick={() => setLoading(true)} disabled={loading}>
          {t("story.spinner_load_report")}
        </Button>
        {loading && <Spinner {...args} label={t("story.spinner_label_loading")} />}
      </Stack>
    );
  },
};
