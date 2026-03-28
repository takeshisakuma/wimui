import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { FieldError } from "@/components/FieldError/FieldError";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Input> = {
  title: "Components/Basic Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    width: "md",
    fullWidth: false,
    disabled: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"],
    },
    status: {
      control: "select",
      options: ["default", "error"],
    },
    disabled: {
      control: "boolean",
    },
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
    width: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "100%", "200px", "10ch"],
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_input_label_name")}>
        <Input {...args} placeholder={t("story_input_placeholder_name")} />
      </Label>
    );
  },
};

export const SelectLike: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
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
    const { t } = useTranslation(ALL_NAMESPACES);
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_input_label_company")}>
        <Input {...args} placeholder={t("story_input_placeholder_company")} />
      </Label>
    );
  },
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_input_label_remarks")}>
        <Input {...args} placeholder={t("story_input_placeholder_remarks")} />
      </Label>
    );
  },
  args: {
    variant: "ghost",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
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
            placeholder={t("story_input_placeholder_email")}
            defaultValue="invalid-email@"
          />
        </Label>
        <FieldError content={t("story_input_error_email")} />
      </div>
    );
  },
  args: {
    status: "error",
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_input_label_userid")}>
        <Input {...args} placeholder={t("story_input_placeholder_userid")} />
      </Label>
    );
  },
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_input_label_contact")} style={{ width: "100%" }}>
        <Input {...args} placeholder={t("story_input_placeholder_contact")} />
      </Label>
    );
  },
  args: {
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const SearchIndicator: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_input_label_search")}>
        <Input {...args} placeholder={t("story_input_placeholder_search")} />
      </Label>
    );
  },
  args: {
    leftIcon: "SearchIcon",
  },
};

export const CustomWidth: Story = {
  render: function Render(args) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "800px" }}>
        <Label label="XS (80px - Secure Code)">
          <Input {...args} width="xs" placeholder="000" />
        </Label>
        <Label label="SM (160px - Zip Code)">
          <Input {...args} width="sm" placeholder="000-0000" />
        </Label>
        <Label label="MD (320px - Name)">
          <Input {...args} width="md" placeholder="John Doe" />
        </Label>
        <Label label="LG (480px - Company)">
          <Input {...args} width="lg" placeholder="Antigravity Inc." />
        </Label>
        <Label label="Custom (8ch - Always 8 chars)">
          <Input {...args} width="8ch" placeholder="12345678" />
        </Label>
      </div>
    );
  },
};
