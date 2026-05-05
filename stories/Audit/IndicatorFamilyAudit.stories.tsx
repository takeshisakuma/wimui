import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Badge,
  Chip,
  Tag,
} from "../../src";

const meta: Meta = {
  title: "Audit/IndicatorFamily",
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
    const variants = ["solid", "outline", "subtle"] as const;
    const intents = [
      "primary",
      "secondary",
      "success",
      "warning",
      "error",
      "info",
      "neutral",
    ] as const;

    return (
      <AuditPage title={t("audit:indicator_family_title")}>
        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })} direction="row" wrap>
              <Badge intent={intent}>{t("audit:label_badge")}</Badge>
              <Chip intent={intent}>{t("audit:label_chip")}</Chip>
              <Tag intent={intent}>{t("audit:label_tag")}</Tag>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })} direction="row" wrap>
              <Badge variant={variant} intent="primary">{t("audit:label_badge")}</Badge>
              <Chip variant={variant} intent="primary">{t("audit:label_chip")}</Chip>
              <Tag variant={variant} intent="primary">{t("audit:label_tag")}</Tag>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map((size) => (
            <ComponentGroup key={size} label={t("audit:label_size_n", { size })} direction="row" wrap>
              <Badge size={size}>{t("audit:label_badge")}</Badge>
              <Chip size={size}>{t("audit:label_chip")}</Chip>
              <Tag size={size}>{t("audit:label_tag")}</Tag>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Special States */}
        <ComparisonGrid title={t("audit:label_special_states_interactions")}>
          <ComponentGroup label={t("audit:label_interactive_chips_tags")} direction="row" wrap>
            <Chip onClick={() => alert("Clicked")}>{t("audit:label_clickable_chip")}</Chip>
            <Chip onDelete={() => alert("Deleted")}>{t("audit:label_deletable_chip")}</Chip>
            <Tag onDelete={() => alert("Deleted")}>{t("audit:label_deletable_tag")}</Tag>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_badge_variations")} direction="row" wrap>
            <Badge content="99+" />
            <Badge variant="solid" intent="error" /> {/* Dot badge */}
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
