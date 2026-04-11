import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Selectbox,
  SelectboxOption,
} from "@/components/form/Selectbox/Selectbox";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { expect, userEvent, within } from "storybook/test";


const meta: Meta<typeof Selectbox> = {
  title: "Components/Selection Controls/Selectbox",
  component: Selectbox,
  parameters: {
    layout: "centered",
  },
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
type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.selectbox_opt1"), value: "opt1" },
      { label: t("story.selectbox_opt2"), value: "opt2" },
      { label: t("story.selectbox_opt3"), value: "opt3" },
      { label: t("story.selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story.selectbox_opt5"), value: "opt5" },
    ];
    return <Selectbox {...args} options={options} placeholder={t("story.selectbox_placeholder")} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("combobox");

    // Click to open
    await userEvent.click(trigger);
    const listbox = await canvas.findByRole("listbox");
    await expect(listbox).toBeVisible();

    // Select option 1
    const option1 = canvas.getByRole("option", { name: "Option 1" });
    await userEvent.click(option1);

    // Check if dropdown closed
    await expect(listbox).not.toBeVisible();

    // Check if selected value is displayed
    await expect(trigger).toHaveTextContent("Option 1");
  },
};

export const WithLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.selectbox_opt1"), value: "opt1" },
      { label: t("story.selectbox_opt2"), value: "opt2" },
      { label: t("story.selectbox_opt3"), value: "opt3" },
      { label: t("story.selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story.selectbox_opt5"), value: "opt5" },
    ];
    return (
      <Selectbox
        {...args}
        label={t("story.selectbox_label")}
        options={options}
        placeholder={t("story.selectbox_placeholder")}
      />
    );
  },
};

export const Preselected: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.selectbox_opt1"), value: "opt1" },
      { label: t("story.selectbox_opt2"), value: "opt2" },
      { label: t("story.selectbox_opt3"), value: "opt3" },
      { label: t("story.selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story.selectbox_opt5"), value: "opt5" },
    ];
    return <Selectbox {...args} options={options} defaultValue="opt2" />;
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.selectbox_opt1"), value: "opt1" },
      { label: t("story.selectbox_opt2"), value: "opt2" },
      { label: t("story.selectbox_opt3"), value: "opt3" },
      { label: t("story.selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story.selectbox_opt5"), value: "opt5" },
    ];
    return <Selectbox {...args} options={options} disabled={true} defaultValue="opt1" />;
  },
};

export const WithSeparator: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const optionsWithSeparators: SelectboxOption[] = [
      { label: t("story.selectbox_settings"), value: "settings" },
      { label: t("story.selectbox_profile"), value: "profile" },
      { type: "separator" },
      { label: t("story.selectbox_help"), value: "help" },
      { label: t("story.selectbox_about"), value: "about" },
      { type: "separator" },
      { label: t("story.selectbox_logout"), value: "logout" },
    ];
    return (
      <Selectbox
        {...args}
        options={optionsWithSeparators}
        placeholder={t("story.selectbox_placeholder")}
      />
    );
  },
};

export const WithClearButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.selectbox_opt1"), value: "opt1" },
      { label: t("story.selectbox_opt2"), value: "opt2" },
      { label: t("story.selectbox_opt3"), value: "opt3" },
      { label: t("story.selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story.selectbox_opt5"), value: "opt5" },
    ];
    return (
      <Selectbox
        {...args}
        options={options}
        allowClear={true}
        defaultValue="opt1"
        placeholder={t("story.selectbox_placeholder")}
      />
    );
  },
};

export const Searchable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.selectbox_opt_apple"), value: "apple" },
      { label: t("story.selectbox_opt_banana"), value: "banana" },
      { label: t("story.selectbox_opt_cherry"), value: "cherry" },
      { label: t("story.selectbox_opt_grape"), value: "grape" },
      { label: t("story.selectbox_opt_orange"), value: "orange" },
    ];
    return (
      <Selectbox
        {...args}
        options={options}
        searchable={true}
        placeholder={t("story.selectbox_placeholder")}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("combobox");

    // Open dropdown
    await userEvent.click(trigger);
    const searchInput = await canvas.findByPlaceholderText("Search...");
    await expect(searchInput).toBeVisible();

    // Type "Apple"
    await userEvent.type(searchInput, "Apple");

    // Check if only Apple is visible
    await expect(canvas.getByRole("option", { name: "Apple" })).toBeVisible();
    await expect(canvas.queryByRole("option", { name: "Banana" })).not.toBeInTheDocument();

    // Select Apple
    await userEvent.click(canvas.getByRole("option", { name: "Apple" }));
    await expect(trigger).toHaveTextContent("Apple");
  },
};

export const Grouped: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [
      {
        label: t("story.selectbox_group_fruits"),
        options: [
          { label: t("story.selectbox_opt_apple"), value: "apple" },
          { label: t("story.selectbox_opt_banana"), value: "banana" },
        ],
      },
      {
        label: t("story.selectbox_group_veggies"),
        options: [
          { label: t("story.selectbox_opt_carrot"), value: "carrot" },
          { label: t("story.selectbox_opt_potato"), value: "potato" },
        ],
      },
    ];
    return (
      <Selectbox
        {...args}
        options={groupedOptions}
        grouped={true}
        placeholder={t("story.selectbox_placeholder")}
      />
    );
  },
};

export const AdvancedSearch: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [
      {
        label: t("story.selectbox_group_fruits"),
        options: [
          { label: t("story.selectbox_opt_apple"), value: "apple" },
          { label: t("story.selectbox_opt_banana"), value: "banana" },
        ],
      },
      {
        label: t("story.selectbox_group_veggies"),
        options: [
          { label: t("story.selectbox_opt_carrot"), value: "carrot" },
          { label: t("story.selectbox_opt_potato"), value: "potato" },
        ],
      },
    ];
    return (
      <Selectbox
        {...args}
        options={groupedOptions}
        grouped={true}
        searchable={true}
        allowClear={true}
        placeholder={t("story.selectbox_placeholder")}
      />
    );
  },
};
