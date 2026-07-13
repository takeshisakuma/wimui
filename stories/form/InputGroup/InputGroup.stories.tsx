import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Input, InputGroup, InputGroupText } from "wimui";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof InputGroup> = {
  title: "Components/Form Layout/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Basic: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InputGroup {...args}>
        <Input placeholder={t("story.inputgroup_placeholder_subject")} />
        <Button variant="solid" icon="SearchIcon">{t("action.search")}</Button>
      </InputGroup>
    );
  },
};

export const Suffix: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InputGroup {...args}>
        <Input placeholder={t("story.inputgroup_placeholder_username")} />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
    );
  },
};

export const MultipleAddons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <InputGroupText>0.00</InputGroupText>
        <Input placeholder={t("story.inputgroup_placeholder_price")} />
        <InputGroupText>.00</InputGroupText>
      </InputGroup>
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InputGroup {...args}>
        <InputGroupText>@</InputGroupText>
        <Input
          placeholder={t("story.inputgroup_placeholder_username")}
          defaultValue="johndoe"
          disabled
        />
      </InputGroup>
    );
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <InputGroup {...args}>
          <InputGroupText>{t("action.search")}</InputGroupText>
          <Input placeholder={t("story.inputgroup_placeholder_message")} />
          <Button variant="solid">{t("story.inputgroup_go")}</Button>
        </InputGroup>
      </div>
    );
  },
};
