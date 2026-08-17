import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
/*
 * T205: 以前はどのストーリーも `<Label>` で `Rating` を包んでいた。`<label>` は
 * **1 つのコントロールにしか付けられない**のに、中身は星 5 個の `radiogroup`
 * ── axe が `aria-toggle-field-name`（「その `<label>` は名前の一部か？」）を
 * incomplete で出し続けていた。単体は `label` prop、複数並べるときは
 * `Fieldset` + `Legend`（＝ `<fieldset><legend>`）が正しい形。
 */
import { Fieldset, Legend, Rating } from "wimui";


const meta: Meta<typeof Rating> = {
  title: "Components/Advanced Inputs/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: { control: "number" },
    count: { control: "number" },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const labels = {
      star: (count: number) => t("components:rating.stars", { count }),
      readonly: (count: number, max: number) => t("components:rating.readonly_label", { count, max }),
    };
    return (
      <Rating {...args} label={t("story.rating_default")} labels={labels} />
    );
  },
  args: {
    defaultValue: 3,
  },
};

export const AllowHalf: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Rating {...args} label={t("story.rating_half")} />
    );
  },
  args: {
    defaultValue: 2.5,
    allowHalf: true,
  },
};

export const CustomCount: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Rating {...args} label={t("story.rating_custom")} />
    );
  },
  args: {
    defaultValue: 7,
    count: 10,
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Fieldset variant="plain">
        <Legend label={t("story.rating_sizes")} />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Rating {...args} size="sm" defaultValue={3} />
          <Rating {...args} size="md" defaultValue={3} />
          <Rating {...args} size="lg" defaultValue={3} />
        </div>
      </Fieldset>
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Rating {...args} label={t("story.rating_disabled")} disabled />
    );
  },
  args: {
    defaultValue: 4,
  },
};

export const ReadOnly: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Fieldset variant="plain">
        <Legend label={t("story.rating_readonly")} />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Rating {...args} value={5} readOnly />
          <Rating {...args} value={4} readOnly />
          <Rating {...args} value={3} readOnly />
          <Rating {...args} value={2} readOnly />
          <Rating {...args} value={1} readOnly />
        </div>
      </Fieldset>
    );
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState(args.value ?? 3);

    useEffect(() => {
      setValue(args.value ?? 3);
    }, [args.value]);

    const handleChange = (newVal: number) => {
      setValue(newVal);
      args.onChange?.(newVal);
    };

    return (
      <Rating {...args} label={t("story.rating_controlled")} value={value} onChange={handleChange} />
    );
  },
};

/**
 * T125 と同じ機構（同族は `Rating` のこの 1 件だけ）。`FieldTemplate` の
 * `.content` に stretch されて根が親いっぱいに伸びるため、星の右側に
 * 押せる空白が広がる。他のストーリーは `layout: "centered"` なので出ない。
 */
export const InWideField: Story = {
  parameters: { layout: "fullscreen" },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "var(--wim-spacing-lg)", width: "100%" }}>
        <Rating {...args} label={t("story.rating_wide_field")} />
      </div>
    );
  },
};
