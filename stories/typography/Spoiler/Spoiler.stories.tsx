import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Spoiler } from "@/components/typography/Spoiler/Spoiler";

const meta: Meta<typeof Spoiler> = {
  title: "Components/Typography & Icons/Spoiler",
  component: Spoiler,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    lines: { control: { type: "number", min: 1 } },
    expanded: { control: "boolean" },
    defaultExpanded: { control: "boolean" },
    showLabel: { control: "text" },
    hideLabel: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "480px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spoiler>;

/** Prefer static English under VRT so HTTP i18n cannot flash untranslated keys. */
const useSpoilerCopy = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  // @ts-expect-error: __VRT__ is a custom global flag for testing
  if (typeof window !== "undefined" && window.__VRT__) {
    return {
      review:
        "The build quality feels premium and the battery lasts through a full workday. Setup was painless, and the keyboard is comfortable for long writing sessions. A few software quirks remain, but nothing that blocks daily use.",
      short: "Short enough to stay fully visible.",
      showLabel: "Show more",
      hideLabel: "Show less",
      prosLabel: "Pros",
      pros: "Solid materials, long battery, quiet keyboard.",
      consLabel: "Cons",
      cons: "Occasional software quirks; trackpad could be larger.",
    };
  }
  return {
    review: t("story.spoiler_review"),
    short: t("story.spoiler_short"),
    showLabel: t("story.spoiler_show_label"),
    hideLabel: t("story.spoiler_hide_label"),
    prosLabel: t("story.spoiler_rich_pros_label"),
    pros: t("story.spoiler_rich_pros"),
    consLabel: t("story.spoiler_rich_cons_label"),
    cons: t("story.spoiler_rich_cons"),
  };
};

export const Default: Story = {
  render: (args) => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.review}</Spoiler>;
  },
};

export const CustomLines: Story = {
  render: (args) => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.review}</Spoiler>;
  },
  args: {
    lines: 5,
  },
};

export const DefaultExpanded: Story = {
  render: (args) => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.review}</Spoiler>;
  },
  args: {
    defaultExpanded: true,
  },
};

export const CustomLabels: Story = {
  render: (args) => {
    const copy = useSpoilerCopy();
    return (
      <Spoiler {...args} showLabel={copy.showLabel} hideLabel={copy.hideLabel}>
        {copy.review}
      </Spoiler>
    );
  },
};

export const ShortContent: Story = {
  render: (args) => {
    const copy = useSpoilerCopy();
    return <Spoiler {...args}>{copy.short}</Spoiler>;
  },
};

export const RichContent: Story = {
  render: () => {
    const copy = useSpoilerCopy();
    return (
      <Spoiler lines={4}>
        <p style={{ margin: "0 0 0.5em" }}>
          <strong>{copy.prosLabel}</strong> {copy.pros}
        </p>
        <p style={{ margin: 0 }}>
          <strong>{copy.consLabel}</strong> {copy.cons}
        </p>
      </Spoiler>
    );
  },
};
