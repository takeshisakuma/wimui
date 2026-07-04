import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Button,
  IconButton,
  LinkButton,
  CopyButton,
  FloatButton,
  Stack,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/ButtonFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const sizes = ["sm", "md", "lg"] as const;
    const variants = ["solid", "outline", "ghost"] as const;
    const intents = ["default", "destructive", "positive"] as const;

    return (
      <AuditPage title={t("audit:button_family_title")}>
        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map((size) => (
            <ComponentGroup key={size} label={t("audit:label_size_n", { size })} direction="row" align="center" wrap>
              <Button size={size} variant="solid">
                {t("audit:label_button")}
              </Button>
              <IconButton size={size} variant="solid" iconName="CircleIcon" aria-label={t("audit:demo_circle")} />
              <LinkButton size={size} variant="solid">
                {t("audit:label_link")}
              </LinkButton>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })} direction="row" align="center" wrap>
              <Button size="md" variant="solid" intent={intent as "default" | "destructive" | "positive"}>
                {t("audit:label_button")}
              </Button>
              <IconButton size="md" variant="solid" intent={intent as "default" | "destructive" | "positive"} iconName="CircleIcon" aria-label={t("audit:demo_circle")} />
              <FloatButton intent={intent as "default" | "destructive" | "positive"} iconName="CircleIcon" position="static" />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })} direction="row" align="center" wrap>
              <Button size="md" variant={variant}>
                {t("audit:label_button")}
              </Button>
              <IconButton size="md" variant={variant} iconName="CircleIcon" aria-label={t("audit:demo_circle")} />
              <LinkButton size="md" variant={variant}>
                {t("audit:label_link")}
              </LinkButton>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Specialized Buttons */}
        <ComparisonGrid title={t("audit:specialized_buttons")}>
          <ComponentGroup label={t("audit:label_copy_button")} direction="row" align="center" wrap>
            <CopyButton value="Copied Text" />
            <CopyButton value="Copied Text" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_float_button")} direction="row" align="center" wrap>
            <FloatButton iconName="PlusIcon" position="static" />
            <FloatButton iconName="ChevronUpIcon" variant="default" position="static" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Mixed Composition */}
        <ComparisonGrid title={t("audit:mixed_composition")}>
          <ComponentGroup label={t("audit:label_mix")} direction="row" align="center" wrap>
            <Button size="md">{t("audit:label_button")}</Button>
            <IconButton size="md" iconName="SearchIcon" aria-label={t("action.search")} />
            <CopyButton size="md" value="test" />
            <LinkButton size="md">{t("audit:label_link")}</LinkButton>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <Box style={{ gridColumn: "1 / -1" }} w="100%">
            <Stack gap="lg">
              <Button fullWidth variant="solid">{t("audit:label_full_width_solid")}</Button>
              <Button fullWidth variant="outline">{t("audit:label_full_width_outline")}</Button>
              <LinkButton fullWidth variant="solid">{t("audit:label_full_width_link")}</LinkButton>
            </Stack>
          </Box>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
