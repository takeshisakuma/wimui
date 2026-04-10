import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title, type TitleProps } from "@/components/typography/Title/Title";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<TitleProps> = {
  title: "Components/Typography & Icons/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
    },
    color: {
      control: "select",
      options: [
        "black",
        "deepgray",
        "gray",
        "lightgray",
        "white",
        "error",
        "primary",
        "success",
        "warning",
        "info",
      ],
    },
    align: {
      control: "radio",
      options: ["left", "center", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1Title: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_text")}</Title>;
  },
  args: {
    tag: "h1",
    size: "2xl",
    color: "black",
    align: "left",
  },
};

export const H2Title: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_text")}</Title>;
  },
  args: {
    tag: "h2",
    size: "xl",
    color: "black",
    align: "left",
  },
};

export const H3Title: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_text")}</Title>;
  },
  args: {
    tag: "h3",
    size: "lg",
    color: "black",
    align: "left",
  },
};

export const H4Title: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_text")}</Title>;
  },
  args: {
    tag: "h4",
    size: "md",
    color: "black",
    align: "left",
  },
};

export const H5Title: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_text")}</Title>;
  },
  args: {
    tag: "h5",
    size: "sm",
    color: "black",
    align: "left",
  },
};

export const H6Title: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_text")}</Title>;
  },
  args: {
    tag: "h6",
    size: "xs",
    color: "black",
    align: "left",
  },
};


export const UnderlineTitle: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_underline")}</Title>;
  },
  args: {
    tag: "h2",
    size: "xl",
    decoration: "underline",
  },
};

export const HighlightTitle: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Title {...args}>{t("story.heading_highlight")}</Title>;
  },
  args: {
    tag: "h2",
    size: "xl",
    decoration: "highlight",
  },
};
