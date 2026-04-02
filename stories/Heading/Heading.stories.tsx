import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading, type HeadingProps } from "@/components/typography/Heading/Heading";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<HeadingProps> = {
  title: "Components/Typography & Icons/Heading",
  component: Heading,
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

export const H1Heading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_text")}</Heading>;
  },
  args: {
    tag: "h1",
    size: "2xl",
    color: "black",
    align: "left",
  },
};

export const H2Heading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_text")}</Heading>;
  },
  args: {
    tag: "h2",
    size: "xl",
    color: "black",
    align: "left",
  },
};

export const H3Heading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_text")}</Heading>;
  },
  args: {
    tag: "h3",
    size: "lg",
    color: "black",
    align: "left",
  },
};

export const H4Heading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_text")}</Heading>;
  },
  args: {
    tag: "h4",
    size: "md",
    color: "black",
    align: "left",
  },
};

export const H5Heading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_text")}</Heading>;
  },
  args: {
    tag: "h5",
    size: "sm",
    color: "black",
    align: "left",
  },
};

export const H6Heading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_text")}</Heading>;
  },
  args: {
    tag: "h6",
    size: "xs",
    color: "black",
    align: "left",
  },
};


export const UnderlineHeading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_underline")}</Heading>;
  },
  args: {
    tag: "h2",
    size: "xl",
    decoration: "underline",
  },
};

export const HighlightHeading: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heading {...args}>{t("story.heading_highlight")}</Heading>;
  },
  args: {
    tag: "h2",
    size: "xl",
    decoration: "highlight",
  },
};

