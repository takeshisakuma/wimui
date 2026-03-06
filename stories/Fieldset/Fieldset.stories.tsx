import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Fieldset } from "@/components/Fieldset/Fieldset";
import { Legend } from "@/components/Legend/Legend";
import { Label } from "@/components/Label/Label";
import { Input } from "@/components/Input/Input";
import { CheckboxGroup } from "@/components/CheckboxGroup/CheckboxGroup";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Fieldset> = {
  title: "Components/Form Layout/Fieldset",
  component: Fieldset,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <Fieldset {...args}>
        <Legend>{t("story_fieldset_basic")}</Legend>
        <Label label={t("story_fieldset_name")}>
          <Input placeholder={t("story_fieldset_name_placeholder")} />
        </Label>
        <Label label={t("story_header_contact")}>
          <Input type="email" placeholder="example@wim.ui" />
        </Label>
      </Fieldset>
    );
  },
};

export const WithCheckboxGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <Fieldset {...args}>
        <Legend>{t("story_fieldset_notif")}</Legend>
        <CheckboxGroup
          options={[
            { label: t("story_fieldset_notif_email"), value: "email" },
            { label: t("story_fieldset_notif_push"), value: "push" },
            { label: t("story_fieldset_notif_sms"), value: "sms" },
          ]}
          defaultValue={["email"]}
        />
      </Fieldset>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <Fieldset {...args}>
        <Legend>{t("story_fieldset_disabled_sec")}</Legend>
        <Label label={t("story_fieldset_name")}>
          <Input placeholder={t("story_fieldset_disabled_placeholder")} />
        </Label>
        <CheckboxGroup
          options={[
            { label: t("story_fieldset_opt1"), value: "1" },
            { label: t("story_fieldset_opt2"), value: "2" },
          ]}
        />
      </Fieldset>
    );
  },
};
