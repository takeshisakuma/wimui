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
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/ButtonFamily",
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
    <Stack gap="var(--wim-spacing-md)" align="start">
      {children}
    </Stack>
  </Stack>
);

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const sizes = ["sm", "md", "lg"] as const;
    const variants = ["solid", "outline", "ghost"] as const;
    const intents = ["default", "destructive", "positive"] as const;

    return (
      <Box bg="surface">
        <SectionTitle>{t("audit:button_family_title")}</SectionTitle>

        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map((size) => (
            <ComponentGroup key={size} label={t("audit:label_size_n", { size })}>
              <Button size={size} variant="solid">
                {t("audit:label_button")}
              </Button>
              <IconButton size={size} variant="solid" iconName="CircleIcon" aria-label="Circle" />
              <LinkButton size={size} variant="solid">
                {t("audit:label_link")}
              </LinkButton>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })}>
              <Button size="md" variant="solid" intent={intent as "default" | "destructive" | "positive"}>
                {t("audit:label_button")}
              </Button>
              <IconButton size="md" variant="solid" intent={intent as "default" | "destructive" | "positive"} iconName="CircleIcon" aria-label="Circle" />
              <FloatButton intent={intent as "default" | "destructive" | "positive"} iconName="CircleIcon" position="static" />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })}>
              <Button size="md" variant={variant}>
                {t("audit:label_button")}
              </Button>
              <IconButton size="md" variant={variant} iconName="CircleIcon" aria-label="Circle" />
              <LinkButton size="md" variant={variant}>
                {t("audit:label_link")}
              </LinkButton>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Specialized Buttons */}
        <ComparisonGrid title={t("audit:specialized_buttons")}>
          <ComponentGroup label={t("audit:label_copy_button")}>
            <CopyButton value="Copied Text" />
            <CopyButton value="Copied Text" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_float_button")}>
            <FloatButton iconName="PlusIcon" position="static" />
            <FloatButton iconName="ChevronUpIcon" variant="default" position="static" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Mixed Composition */}
        <ComparisonGrid title={t("audit:mixed_composition")}>
          <ComponentGroup label={t("audit:label_mix")}>
            <Button size="md">{t("audit:label_button")}</Button>
            <IconButton size="md" iconName="SearchIcon" aria-label="Search" />
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
      </Box>
    );
  },
};
