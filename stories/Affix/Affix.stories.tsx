import type { Meta, StoryObj } from "@storybook/react-vite";
import { Affix } from "@/components/navigation/Affix/Affix";
import { Button } from "@/components/form/Button/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>{t("story.affix_scroll_top")}</p>
        <div style={{ marginTop: "100px" }}>
          <Affix {...args} offsetTop={20}>
            <Button label={t("story.affix_top")} size="md" />
          </Affix>
        </div>
      </div>
    );
  },
};

export const OffsetBottom: Story = {
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>{t("story.affix_scroll_bottom")}</p>
        <div style={{ marginTop: "120vh" }}>
          <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
          <Affix {...args} offsetBottom={20}>
            <Button label={t("story.affix_bottom")} size="md" />
          </Affix>
          <p>{t("story.affix_more")}</p>
        </div>
      </div>
    );
  },
};
