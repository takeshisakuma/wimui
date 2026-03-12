import type { Meta, StoryObj } from "@storybook/react-vite";
import { Affix } from "@/components/Affix/Affix";
import { Button } from "@/components/Button/Button";
import React from "react";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Affix> = {
  title: "Components/Navigation Utilities/Affix",
  component: Affix,
  tags: [],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Affix>;

export const Basic: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>{t("story_affix_scroll_top")}</p>
        <div style={{ marginTop: "100px" }}>
          <Affix {...args} offsetTop={20}>
            <Button label={t("story_affix_top")} size="medium" />
          </Affix>
        </div>
      </div>
    );
  },
};

export const OffsetBottom: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>{t("story_affix_scroll_bottom")}</p>
        <div style={{ marginTop: "120vh" }}>
          <p>{t("story_affix_scroll_bottom_2", "Scroll down here...")}</p>
          <Affix {...args} offsetBottom={20}>
            <Button label={t("story_affix_bottom")} size="medium" />
          </Affix>
          <p>{t("story_affix_more")}</p>
        </div>
      </div>
    );
  },
};
