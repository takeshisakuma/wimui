import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, VisuallyHidden } from "wimui";


const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/Internal/VisuallyHidden",
  component: VisuallyHidden,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Primary: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <VisuallyHidden {...args}>
        {t("story.visuallyhidden_accessible")}
      </VisuallyHidden>
    );
  },
};

export const WithinButton: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      // T108: 以前は素の `<button>` で、ライブラリの色が当たらず**ダークで黒文字が
      // `#262626` の面に載っていた**（実測 1.38、基準 4.5）。`×` が 1 文字なので
      // axe は `too short` として測っておらず、a11y は緑のままだった。
      // 素の要素をストーリーで使うのは T12 が記録している型（「ストーリー直書き」）。
      <Button aria-label={t("story.visuallyhidden_close")}>
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{t("story.visuallyhidden_close")}</VisuallyHidden>
      </Button>
    );
  },
};
