import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { expect, userEvent, within } from "storybook/test";
import { MultiSelect } from "wimui";


const meta: Meta<typeof MultiSelect> = {
  title: "Components/Selection Controls/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
  },
  tags: [],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.multiselect_apple"), value: "apple" },
      { label: t("story.multiselect_banana"), value: "banana" },
      { label: t("story.multiselect_orange"), value: "orange" },
      { label: t("story.multiselect_grape"), value: "grape" },
      { label: t("story.select_opt4"), value: "disabled", disabled: true },
    ];
    return <MultiSelect {...args} options={options} placeholder={t("story.multiselect_fruits")} />;
  },
};

export const WithLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.multiselect_apple"), value: "apple" },
      { label: t("story.multiselect_banana"), value: "banana" },
      { label: t("story.multiselect_orange"), value: "orange" },
      { label: t("story.multiselect_grape"), value: "grape" },
      { label: t("story.select_opt4"), value: "disabled", disabled: true },
    ];
    return (
      <MultiSelect
        {...args}
        label={t("story.multiselect_favorites")}
        options={options}
        placeholder={t("story.select_placeholder")}
      />
    );
  },
};

export const MultipleSelected: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.multiselect_apple"), value: "apple" },
      { label: t("story.multiselect_banana"), value: "banana" },
      { label: t("story.multiselect_orange"), value: "orange" },
      { label: t("story.multiselect_grape"), value: "grape" },
      { label: t("story.select_opt4"), value: "disabled", disabled: true },
    ];
    return <MultiSelect {...args} options={options} label={t("story.multiselect_favorites")} defaultValue={["apple", "orange"]} />;
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.multiselect_apple"), value: "apple" },
      { label: t("story.multiselect_banana"), value: "banana" },
      { label: t("story.multiselect_orange"), value: "orange" },
      { label: t("story.multiselect_grape"), value: "grape" },
      { label: t("story.select_opt4"), value: "disabled", disabled: true },
    ];
    return <MultiSelect {...args} options={options} label={t("story.multiselect_favorites")} disabled={true} defaultValue={["banana"]} />;
  },
};

export const WithClearButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.multiselect_apple"), value: "apple" },
      { label: t("story.multiselect_banana"), value: "banana" },
      { label: t("story.multiselect_orange"), value: "orange" },
      { label: t("story.multiselect_grape"), value: "grape" },
      { label: t("story.select_opt4"), value: "disabled", disabled: true },
    ];
    return (
      <MultiSelect
        {...args}
        options={options}
        allowClear={true}
        defaultValue={["apple", "banana"]}
        placeholder={t("story.multiselect_fruits")}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check initial chips
    await expect(canvas.getByText("Apple")).toBeInTheDocument();
    await expect(canvas.getByText("Banana")).toBeInTheDocument();

    // Click clear button (this depends on how InputBase renders the clear button, usually it's a button with an icon)
    // Looking at InputBase, it's a button with "Clear selection" aria-label usually? 
    // Wait, let's check InputBase.tsx
    const clearButton = canvas.getByRole("button", { name: /clear/i });
    await userEvent.click(clearButton);

    // Check if chips are gone
    await expect(canvas.queryByText("Apple")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Banana")).not.toBeInTheDocument();
  },
};
