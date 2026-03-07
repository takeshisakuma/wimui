import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { FieldError } from "@/components/FieldError/FieldError";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Input> = {
  title: "Components/Basic Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    leftIcon: {
      control: "select",
      options: ["SearchIcon"],
    },
    rightIcon: {
      control: "select",
      options: ["ChevronDownIcon"],
    },
    leftIconColor: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "positive",
        "caution",
        "informative",
        "disabled",
      ],
    },
    rightIconColor: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "positive",
        "caution",
        "informative",
        "disabled",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_input_label_name")}>
        <Input {...args} placeholder={t("story_input_placeholder_name")} />
      </Label>
    );
  },
};

export const SelectLike: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return (
      <Label label={t("story_input_label_dept")}>
        <Input
          {...args}
          placeholder={t("story_input_placeholder_dept")}
          onClick={handleClick}
          onRightIconClick={(e: React.MouseEvent) => {
            e.stopPropagation(); // Prevent duplicate alert
            handleClick();
          }}
          readOnly={true}
          style={{ cursor: "pointer" }}
        />
      </Label>
    );
  },
  args: {
    rightIcon: "ChevronDownIcon",
  },
};

export const Clearable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_input_label_keyword")}>
        <Input
          {...args}
          allowClear
          placeholder={t("story_input_placeholder_keyword")}
          defaultValue={t("story_input_value_keyword")}
        />
      </Label>
    );
  },
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_input_label_company")}>
        <Input {...args} variant="outline" placeholder={t("story_input_placeholder_company")} />
      </Label>
    );
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_input_label_remarks")}>
        <Input {...args} variant="ghost" placeholder={t("story_input_placeholder_remarks")} />
      </Label>
    );
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Label label={t("story_input_label_email")} required>
          <Input
            {...args}
            state="error"
            placeholder={t("story_input_placeholder_email")}
            defaultValue="invalid-email@"
          />
        </Label>
        <FieldError content={t("story_input_error_email")} />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_input_label_userid")}>
        <Input {...args} disabled={true} placeholder={t("story_input_placeholder_userid")} />
      </Label>
    );
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_input_label_contact")} style={{ width: "100%" }}>
        <Input {...args} fullWidth={true} placeholder={t("story_input_placeholder_contact")} />
      </Label>
    );
  },
  parameters: {
    layout: "padded",
  },
};

export const SearchIndicator: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_input_label_search")}>
        <Input {...args} leftIcon="SearchIcon" placeholder={t("story_input_placeholder_search")} />
      </Label>
    );
  },
};
