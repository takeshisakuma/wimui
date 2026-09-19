import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { RadioGroup } from "wimui";


const meta: Meta<typeof RadioGroup> = {
  title: "Components/Selection Controls/RadioGroup",
  component: RadioGroup,
  argTypes: {
    disabled: { control: "boolean" },
    direction: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// ラベルは **翻訳済みの文字列へ番号を継ぎ足して**作られていた（1 つのキーを引いて
// その後ろに " 2" / " 3" を足す形）。元の値が "Option 1" なので 2 つ目が
// "Option 1 2"、ja では "オプション 1 2" になっていた（3 言語とも壊れていた）。
// 連番の定型名そのものが DESIGN.md の realism 違反でもあるので、選択肢としての
// 意味を持つ実在の配送手段に置き換える。長さが揃っていないのも意図的
// （全行が同じ長さで並ぶのは wobble の欠如）。
const useDefaultOptions = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { label: t("story.radio_ship_standard"), value: "standard" },
    { label: t("story.radio_ship_express"), value: "express" },
    { label: t("story.radio_ship_pickup"), value: "pickup" },
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <RadioGroup
        {...args}
        options={options}
        name="default-group"
        defaultValue="standard"
      />
    );
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <RadioGroup
        {...args}
        options={options}
        direction="horizontal"
        name="horizontal-group"
        defaultValue="standard"
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RadioGroup
        {...args}
        options={[
          { label: t("story.radio_ship_standard"), value: "standard" },
          { label: t("story.radio_ship_express"), value: "express" },
          {
            // 受け取り店舗が選べない、は無効状態の理由として実在する。
            label: `${t("story.radio_ship_pickup")} ${t("story.option_disabled")}`,
            value: "pickup",
            disabled: true,
          },
        ]}
        name="disabled-option-group"
        defaultValue="standard"
      />
    );
  },
};

export const Controlled: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = useDefaultOptions();
    const [value, setValue] = useState("standard");
    return (
      <div>
        <div style={{ marginBottom: "1rem" }}>
          {t("story.radiogroup_selected")}: {value}
        </div>
        <RadioGroup
          options={options}
          value={value}
          onChange={setValue}
          name="controlled-group"
        />
      </div>
    );
  },
};

export const LongLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RadioGroup
        {...args}
        options={[
          {
            label: t("story.radio_long_label"),
            value: "long1",
          },
          {
            label: t("story.radio_long_label"),
            value: "long2",
          },
        ]}
        name="long-label-group"
      />
    );
  },
};
