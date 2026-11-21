import type React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { SkipLink } from "@/components/navigation/SkipLink/SkipLink";
import { Group } from "@/components/layout/Group/Group";
import { Link } from "@/components/navigation/Link/Link";
import { Title } from "@/components/typography/Title/Title";
import { Text } from "@/components/typography/Text/Text";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof SkipLink> = {
  title: "Components/Navigation Utilities/SkipLink",
  component: SkipLink,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    href: { control: "text" },
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

// ページの最初の要素に置き、本文に同じ id を付ける。外しているあいだは見えないので、
// 画面の上から Tab を 1 回押すと現れる
const Page = (args: React.ComponentProps<typeof SkipLink>) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <div>
      <SkipLink {...args} href="#skiplink-main" />
      <header style={{ padding: "var(--wim-spacing-md) var(--wim-spacing-xl)", borderBottom: "var(--wim-border-width-thin) solid var(--wim-color-border)" }}>
        <nav aria-label={t("story.skiplink_nav_label")}>
          <Group gap="lg">
            <Link href="#home">{t("story.skiplink_home")}</Link>
            <Link href="#products">{t("story.skiplink_products")}</Link>
            <Link href="#pricing">{t("story.skiplink_pricing")}</Link>
            <Link href="#support">{t("story.skiplink_support")}</Link>
          </Group>
        </nav>
      </header>
      <main id="skiplink-main" style={{ padding: "var(--wim-spacing-xl)" }}>
        <Title tag="h2">{t("story.skiplink_main_title")}</Title>
        <Text>{t("story.skiplink_main_body")}</Text>
      </main>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Page {...args} />,
};

// フォーカスした姿（VRT が写す）。外しているあいだの姿は Default
export const Focused: Story = {
  render: (args) => <Page {...args} />,
  play: async ({ canvasElement }) => {
    canvasElement.querySelector<HTMLAnchorElement>(".wim-skip-link")?.focus();
  },
};
