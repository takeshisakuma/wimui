import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Highlight } from "wimui";

const meta: Meta<typeof Highlight> = {
  title: "Components/Typography & Icons/Highlight",
  component: Highlight,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Highlight {...args} highlight={t("story.highlight_default_term")}>
        {t("story.highlight_default_text")}
      </Highlight>
    );
  },
};

export const MultipleHighlights: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    // Framework names are brand identifiers, shared across locales.
    return (
      <Highlight {...args} highlight={["React", "Vue", "Angular"]}>
        {t("story.highlight_multi_text")}
      </Highlight>
    );
  },
};

export const CaseInsensitive: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Highlight {...args} highlight={t("story.highlight_case_term")}>
        {t("story.highlight_case_text")}
      </Highlight>
    );
  },
};

export const CustomStyle: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Highlight
        {...args}
        highlight={t("story.highlight_custom_term")}
        highlightStyles={{
          backgroundColor: "var(--wim-color-primary)",
          color: "var(--wim-color-text-on-primary)",
          borderRadius: "4px",
          padding: "0 4px",
        }}
      >
        {t("story.highlight_custom_text")}
      </Highlight>
    );
  },
};

export const CustomComponent: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Highlight
        {...args}
        highlight={t("story.highlight_para_term")}
        as="p"
        style={{ fontSize: "20px", color: "var(--wim-color-text-secondary)" }}
      >
        {t("story.highlight_para_text")}
      </Highlight>
    );
  },
};

export const AsChild: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Highlight {...args} highlight={t("story.highlight_link_term")} asChild>
        <a href="/" style={{ color: "var(--wim-color-text-accent)", textDecoration: "underline" }}>
          {t("story.highlight_link_text")}
        </a>
      </Highlight>
    );
  },
};
