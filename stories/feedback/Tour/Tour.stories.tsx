import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { openWith } from "../../playOpen";
import {
  Box,
  Button,
  Group,
  SearchInput,
  Stack,
  Stats,
  Tour,
} from "wimui";

const meta: Meta<typeof Tour> = {
  title: "Components/Overlays/Tour",
  component: Tour,
};

export default meta;
type Story = StoryObj<typeof Tour>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    const steps = [
      {
        target: "#tour-step-1",
        title: t("story.tour_welcome_title"),
        description: t("story.tour_welcome_desc"),
        placement: "bottom" as const,
      },
      {
        target: "#tour-step-2",
        title: t("story.tour_feature_title"),
        description: t("story.tour_feature_desc"),
        placement: "right" as const,
      },
      {
        target: "#tour-step-3",
        title: t("story.tour_help_title"),
        description: t("story.tour_help_desc"),
        placement: "top" as const,
      },
    ];

    return (
      <Box p="5xl">
        <Stack gap="5xl">
          <Group justify="between" align="center" wrap="wrap" gap="md">
            <div id="tour-step-1">
              {/* placeholder は入力例、aria-label は欄の説明。同じキーを流用すると
                  スクリーンリーダーに「Q3 ロードマップ」という欄名が読まれてしまう。 */}
              <SearchInput
                width="md"
                placeholder={t("story.tour_search_placeholder")}
                aria-label={t("story.tour_search_label")}
              />
            </div>
            <Button onClick={() => setOpen(true)}>{t("story.tour_start")}</Button>
          </Group>

          <Box id="tour-step-2" w="var(--wim-width-sm)">
            <Stats>
              <Stats.Label>{t("story.tour_stats_label")}</Stats.Label>
              <Stats.Value>4,281</Stats.Value>
              <Stats.Description>{t("story.tour_stats_caption")}</Stats.Description>
            </Stats>
          </Box>

          <Group justify="end">
            <div id="tour-step-3">
              <Button variant="ghost" size="sm" icon="HelpCircleIcon">
                {t("story.tour_help_action")}
              </Button>
            </div>
          </Group>
        </Stack>

        <Tour
          {...args}
          open={open}
          steps={steps}
          onClose={() => setOpen(false)}
        />
      </Box>
    );
  },
};

// 開いた姿。ほかのストーリーは閉じたまま撮られるので、開いた中身を変えても VRT と a11y の CI が
// 動かなかった（T293）。docs ページには載せない（play は docs では走らず、defaultOpen はページを開いた瞬間に開く）。
export const Open: Story = {
  ...Default,
  // 開始のボタンは、ツアーの対象（#tour-step-*）の外にある最初のボタン。
  play: openWith("click", 'button:not([id^="tour-step"] button)', ".wim-tour"),
};
