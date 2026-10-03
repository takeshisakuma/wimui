import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Group, SplitButton } from "wimui";
import { openFirstPopup } from "../../playOpen";

const meta: Meta<typeof SplitButton> = {
  title: "Components/Buttons/SplitButton",
  component: SplitButton,
  tags: [],
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outline", "ghost"],
    },
    intent: {
      control: "radio",
      options: ["default", "danger", "success"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function useActions() {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { label: t("story.splitbutton_draft") },
    { label: t("story.splitbutton_close") },
    { label: t("story.splitbutton_template") },
  ];
}

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SplitButton
        {...args}
        actions={useActions()}
        toggleLabel={t("story.splitbutton_toggle")}
      >
        {t("story.splitbutton_main")}
      </SplitButton>
    );
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const actions = useActions();
    const toggleLabel = t("story.splitbutton_toggle");
    return (
      <Group gap="lg" align="center">
        {(["solid", "outline", "ghost"] as const).map((variant) => (
          <SplitButton
            key={variant}
            {...args}
            variant={variant}
            actions={actions}
            toggleLabel={toggleLabel}
          >
            {t("story.splitbutton_main")}
          </SplitButton>
        ))}
      </Group>
    );
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const actions = useActions();
    const toggleLabel = t("story.splitbutton_toggle");
    return (
      <Group gap="lg" align="center">
        {(["sm", "md", "lg"] as const).map((size) => (
          <SplitButton
            key={size}
            {...args}
            size={size}
            actions={actions}
            toggleLabel={toggleLabel}
          >
            {t("story.splitbutton_main")}
          </SplitButton>
        ))}
      </Group>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SplitButton
        {...args}
        actions={useActions()}
        toggleLabel={t("story.splitbutton_toggle")}
      >
        {t("story.splitbutton_main")}
      </SplitButton>
    );
  },
};

// T280: この値は VRT が撮るストーリーのどれにも描かれていなかった（Audit / ChatUI は撮影対象外）。
export const Intents: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const actions = useActions();
    const toggleLabel = t("story.splitbutton_toggle");
    return (
      <Group gap="lg" align="center">
        {(["default", "danger", "success"] as const).map((intent) => (
          <SplitButton key={intent} {...args} intent={intent} actions={actions} toggleLabel={toggleLabel}>
            {t("story.splitbutton_main")}
          </SplitButton>
        ))}
      </Group>
    );
  },
};

// 開いた姿。ほかのストーリーは閉じたまま撮られるので、開いた中身を変えても VRT と a11y の CI が
// 動かなかった。docs ページでは play が走らず閉じた姿になるので、載せても意味がない。
export const Open: Story = {
  ...Default,
  play: openFirstPopup,
};
