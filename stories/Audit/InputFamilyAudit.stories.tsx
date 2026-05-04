import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Input,
  Textarea,
  PasswordInput,
  SearchInput,
  SmartSearchInput,
  PromptInput,
  NumberInput,
  OtpInput,
  Stack,
  Text,
  Box,
} from "wimui";

const meta: Meta = {
  title: "Audit/InputFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Box pb="lg" style={{ borderBottom: "1px solid var(--wim-color-border)" }}>
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
    <Text size="md" weight="bold" style={{ margin: "0 0 var(--wim-spacing-md) 0" }}>
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
      <Text size="xs" color="secondary">
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

    const variants = ["outline", "ghost"] as const;
    const intents = ["default", "error"] as const;

    return (
      <Box bg="surface">
        <SectionTitle>{t("audit:input_family_title")}</SectionTitle>

        {/* Basic Comparison */}
        <ComparisonGrid title={t("audit:basic_comparison")}>
          <ComponentGroup label={t("audit:label_standard_inputs")}>
            <Input placeholder="Standard Input" />
            <SearchInput placeholder="Search Input" />
            <NumberInput placeholder="Number Input" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_otp_input")}>
            <OtpInput length={6} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })}>
              <Input variant={variant} placeholder={`Input ${variant}`} />
              <Textarea variant={variant} placeholder={`Textarea ${variant}`} />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })}>
              <Input intent={intent as "default" | "error"} placeholder={`Input ${intent}`} />
              <PasswordInput intent={intent as "default" | "error"} placeholder={`Password ${intent}`} />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Specialized & AI Inputs */}
        <ComparisonGrid title={t("audit:specialized_buttons")}>
          <ComponentGroup label="AI Specific">
            <PromptInput placeholder="PromptInput (AI)" />
            <SmartSearchInput placeholder="SmartSearchInput (AI)" />
          </ComponentGroup>
          <ComponentGroup label="Large Text Fields">
            <Textarea placeholder="Standard Textarea" />
            <Textarea rows={5} placeholder="Textarea with 5 rows" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Focus & Disabled States */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")}>
            <Input disabled placeholder="Disabled Input" />
            <SearchInput disabled placeholder="Disabled Search" />
            <Textarea disabled placeholder="Disabled Textarea" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <Box style={{ gridColumn: "1 / -1" }} w="100%">
            <Stack gap="lg">
              <Input fullWidth placeholder="Full Width Input" />
              <SearchInput fullWidth placeholder="Full Width Search" />
              <PasswordInput fullWidth placeholder="Full Width Password" />
              <OtpInput length={6} />
              <PromptInput placeholder="PromptInput (Should be fluid by default)" />
              <SmartSearchInput placeholder="SmartSearchInput (Should be fluid by default)" />
            </Stack>
          </Box>
        </ComparisonGrid>
      </Box>
    );
  },
};
