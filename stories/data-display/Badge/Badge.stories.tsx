import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Badge, Icon } from "wimui";


const meta: Meta<typeof Badge> = {
  title: "Components/Data Indicators/Badge",
  component: Badge,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_content")} />;
  },
  args: {
    intent: "primary",
  },
};

export const Secondary: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_secondary")} />;
  },
  args: {
    intent: "secondary",
  },
};

export const Destructive: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_error")} />;
  },
  args: {
    intent: "danger",
  },
};

export const Neutral: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_neutral")} />;
  },
  args: {
    intent: "neutral",
  },
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_outline")} />;
  },
  args: {
    variant: "outline",
    intent: "primary",
  },
};

// Badge の `subtle` は**どのストーリーにも出ていなかった**（Tag / Chip は
// Variants に写っている）。3 変種のうち 1 つだけ VRT からも axe からも
// 見えない状態で、2026-08-07 に subtle を作り替えたときも Badge だけは
// 何も検出されなかった。
export const Subtle: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_subtle")} />;
  },
  args: {
    variant: "subtle",
    intent: "primary",
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_small")} />;
  },
  args: {
    size: "sm",
  },
};

export const Required: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("required")} />;
  },
  // 実使用（`FieldLabelContent` が `<Input required>` で描く必須バッジ）と
  // 同じ形にする。塗りだと必須項目の多いフォームで、何も間違えていないのに
  // ページ中がエラー色になり実際のエラーと区別が付かなくなるため subtle を使う。
  // 見本と実装が違うと、読んだ人が別の見た目を書くことになる（T51-①）。
  args: {
    intent: "danger",
    variant: "subtle",
    size: "sm",
  },
};

export const Optional: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    intent: "neutral",
    size: "sm",
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Badge
        {...args}
        content={t("story.badge_verified")}
        icon={<Icon name="CheckIcon" />}
      />
    );
  },
  args: {
    intent: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    icon: (
      <Icon name="CheckIcon" />
    ),
    intent: "primary",
  },
};
