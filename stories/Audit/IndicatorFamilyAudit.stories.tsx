import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Badge,
  Chip,
  Tag,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/IndicatorFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Box px="lg" py="md" style={{ borderBottom: "1px solid var(--wim-color-border)" }}>
    <Text size="lg" weight="bold">
      {children}
    </Text>
  </Box>
);

const ComparisonGrid = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box m="lg">
    <Text color="text-secondary" size="sm" style={{ marginBottom: "var(--wim-spacing-md)" }}>
      {title}
    </Text>
    <Box
      bg="bg-surface-subtle"
      radius="md"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "var(--wim-spacing-lg)",
        padding: "var(--wim-spacing-md)",
      }}
    >
      {children}
    </Box>
  </Box>
);

const ComponentGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Stack gap="var(--wim-spacing-xs)">
    <Box pb="xs" style={{ borderBottom: "1px dashed var(--wim-color-border-secondary)" }}>
      <Text size="xs" color="text-secondary">
        {label}
      </Text>
    </Box>
    <Stack gap="var(--wim-spacing-md)" align="start" direction="row" style={{ flexWrap: "wrap" }}>
      {children}
    </Stack>
  </Stack>
);

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
      <Box bg="surface">
        <SectionTitle>{t("audit:indicator_family_title")}</SectionTitle>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })}>
              <Badge intent={intent}>{t("audit:label_badge")}</Badge>
              <Chip intent={intent}>{t("audit:label_chip")}</Chip>
              <Tag intent={intent}>{t("audit:label_tag")}</Tag>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })}>
              <Badge variant={variant} intent="primary">{t("audit:label_badge")}</Badge>
              <Chip variant={variant} intent="primary">{t("audit:label_chip")}</Chip>
              <Tag variant={variant} intent="primary">{t("audit:label_tag")}</Tag>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map((size) => (
            <ComponentGroup key={size} label={t("audit:label_size_n", { size })}>
              <Badge size={size}>{t("audit:label_badge")}</Badge>
              <Chip size={size}>{t("audit:label_chip")}</Chip>
              <Tag size={size}>{t("audit:label_tag")}</Tag>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Special States */}
        <ComparisonGrid title={t("audit:label_special_states_interactions")}>
          <ComponentGroup label={t("audit:label_interactive_chips_tags")}>
            <Chip onClick={() => alert("Clicked")}>{t("audit:label_clickable_chip")}</Chip>
            <Chip onDelete={() => alert("Deleted")}>{t("audit:label_deletable_chip")}</Chip>
            <Tag onDelete={() => alert("Deleted")}>{t("audit:label_deletable_tag")}</Tag>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_badge_variations")}>
            <Badge content="99+" />
            <Badge variant="solid" intent="error" /> {/* Dot badge */}
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
