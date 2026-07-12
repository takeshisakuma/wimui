import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { PasswordStrength } from "@/components/form/PasswordStrength/PasswordStrength";
import { PasswordInput } from "@/components/form/PasswordInput/PasswordInput";
import { FieldTemplate } from "@/components/form/FieldTemplate/FieldTemplate";

const meta: Meta<typeof PasswordStrength> = {
  title: "Components/Basic Inputs/PasswordStrength",
  component: PasswordStrength,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    score: { control: { type: "number", min: 0, max: 4, step: 1 } },
    showLabel: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordStrength>;

export const Default: Story = {
  args: {
    score: 0,
  },
};

export const WithPasswordInput: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [password, setPassword] = React.useState("");

    // Simple strength calculation logic for demo
    const calculateScore = (pwd: string) => {
      if (!pwd) return 0;
      let s = 0;
      if (pwd.length > 8) s++;
      if (/[A-Z]/.test(pwd)) s++;
      if (/[0-9]/.test(pwd)) s++;
      if (/[^A-Za-z0-9]/.test(pwd)) s++;
      return s as 0 | 1 | 2 | 3 | 4;
    };

    return (
      <div style={{ width: "320px" }}>
        <FieldTemplate label={t("common.password")} htmlFor="password-input">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <PasswordInput
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordStrength score={calculateScore(password)} password={password} />
          </div>
        </FieldTemplate>
      </div>
    );
  },
};
