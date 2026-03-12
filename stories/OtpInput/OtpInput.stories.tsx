import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OtpInput } from "@/components/OtpInput/OtpInput";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof OtpInput> = {
  title: "Components/Basic Inputs/OtpInput",
  component: OtpInput,
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof OtpInput>;

export const Default: Story = {
  args: {
    length: 4,
  },
};

export const Length6: Story = {
  args: {
    length: 6,
  },
};

export const Disabled: Story = {
  args: {
    length: 4,
    disabled: true,
    value: "1234",
  },
};

export const ErrorStatus: Story = {
  args: {
    length: 6,
    error: true,
    value: "123456",
  },
};

export const Controlled = () => {
  const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
  const [value, setValue] = useState("");
  return (
    <div>
      <OtpInput value={value} onChange={setValue} length={6} />
      <p style={{ marginTop: "1rem" }}>
        {t("story_otp_current_value")}: {value}
      </p>
      <button onClick={() => setValue("")} style={{ marginTop: "0.5rem" }}>
        {t("story_otp_clear")}
      </button>
    </div>
  );
};
