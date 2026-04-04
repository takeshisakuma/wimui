import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OtpInput } from "@/components/form/OtpInput/OtpInput";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof OtpInput> = {
  title: "Components/Basic Inputs/OtpInput",
  component: OtpInput,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
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
    error: "Invalid code",
    value: "123456",
  },
};

export const Controlled = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [value, setValue] = useState("");
  return (
    <div>
      <OtpInput value={value} onChange={setValue} length={6} />
      <p style={{ marginTop: "1rem" }}>
        {t("story.otp_current_value")}: {value}
      </p>
      <button onClick={() => setValue("")} style={{ marginTop: "0.5rem", color: "var(--wim-color-text-primary)", backgroundColor: "var(--wim-color-bg-component)", border: "1px solid var(--wim-color-border)" }}>
        {t("story.otp_clear")}
      </button>
    </div>
  );
};
