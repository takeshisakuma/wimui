import type { Meta, StoryObj } from "@storybook/react-vite";
import { Affix } from "@/components/navigation/Affix/Affix";
import { Button } from "@/components/form/Button/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div id="affix-container-top" style={{ height: "400px", overflow: "auto", padding: "20px", border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)" }}>
        <div style={{ height: "800px" }}>
          <p>{t("story.affix_scroll_top")}</p>
          <div style={{ marginTop: "300px" }}>
            <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
            <Affix {...args} offsetTop={20} target={() => document.getElementById("affix-container-top")}>
              <Button size="md">{t("story.affix_top")}</Button>
            </Affix>
          </div>
        </div>
      </div>
    );
  },
};

export const OffsetBottom: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div id="affix-container-bottom" style={{ height: "400px", overflow: "auto", padding: "20px", border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)" }}>
        <div style={{ height: "800px" }}>
          <p>{t("story.affix_scroll_bottom")}</p>
          <div style={{ marginTop: "400px" }}>
            <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
            <Affix {...args} offsetBottom={20} target={() => document.getElementById("affix-container-bottom")}>
              <Button size="md">{t("story.affix_bottom")}</Button>
            </Affix>
            <p>{t("story.affix_more")}</p>
          </div>
        </div>
      </div>
    );
  },
};
