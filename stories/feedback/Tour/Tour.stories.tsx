import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
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
              <SearchInput
                width="md"
                placeholder={t("story.tour_search_placeholder")}
                aria-label={t("story.tour_search_placeholder")}
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
