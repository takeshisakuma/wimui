import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import {

  Cascader,
  CascaderOption,
} from "../../src/components/Cascader/Cascader";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta<typeof Cascader> = {
  title: "Components/Advanced Inputs/Cascader",
  component: Cascader,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Cascader>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [
      {
        label: t("story_cascader_tokyo"),
        value: "tokyo",
        children: [
          {
            label: t("story_cascader_shibuya"),
            value: "shibuya",
            children: [
              {
                label: t("story_cascader_dogenzaka"),
                value: "dogenzaka",
              },
            ],
          },
        ],
      },
      {
        label: t("story_cascader_osaka"),
        value: "osaka",
        children: [
          {
            label: t("story_cascader_osaka_city"),
            value: "osaka_city",
            children: [
              {
                label: t("story_cascader_umeda"),
                value: "umeda",
              },
            ],
          },
        ],
      },
    ];
    return (
      <Cascader
        {...args}
        options={options}
        placeholder={t("story_cascader_placeholder")}
      />
    );
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [
      {
        label: t("story_cascader_tokyo"),
        value: "tokyo",
        children: [
          {
            label: t("story_cascader_shibuya"),
            value: "shibuya",
            children: [
              {
                label: t("story_cascader_dogenzaka"),
                value: "dogenzaka",
              },
            ],
          },
        ],
      },
      {
        label: t("story_cascader_osaka"),
        value: "osaka",
        children: [
          {
            label: t("story_cascader_osaka_city"),
            value: "osaka_city",
            children: [
              {
                label: t("story_cascader_umeda"),
                value: "umeda",
              },
            ],
          },
        ],
      },
    ];
    return (
      <Cascader
        {...args}
        options={options}
        label={t("story_cascader_placeholder")}
        placeholder={t("story_cascader_placeholder")}
      />
    );
  },
};

export const HoverExpand: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [
      {
        label: t("story_cascader_tokyo"),
        value: "tokyo",
        children: [
          {
            label: t("story_cascader_shibuya"),
            value: "shibuya",
            children: [
              {
                label: t("story_cascader_dogenzaka"),
                value: "dogenzaka",
              },
            ],
          },
        ],
      },
    ];
    return (
      <Cascader
        {...args}
        options={options}
        expandTrigger="hover"
        placeholder={t("story_cascader_placeholder")}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Cascader
        {...args}
        disabled
        placeholder={t("story_cascader_placeholder")}
      />
    );
  },
};

export const CustomSeparator: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options: CascaderOption[] = [
      {
        label: t("story_cascader_tokyo"),
        value: "tokyo",
        children: [
          {
            label: t("story_cascader_shibuya"),
            value: "shibuya",
            children: [
              {
                label: t("story_cascader_dogenzaka"),
                value: "dogenzaka",
              },
            ],
          },
        ],
      },
    ];
    return (
      <Cascader
        {...args}
        options={options}
        separator=" > "
        defaultValue={["tokyo", "shibuya", "dogenzaka"]}
      />
    );
  },
};
