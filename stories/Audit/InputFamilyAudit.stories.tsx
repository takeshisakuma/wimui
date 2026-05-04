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
  Button,
  Stack,
  Text,
  Box,
} from "../../src";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputAny = Input as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PasswordInputAny = PasswordInput as any;

const meta: Meta = {
  title: "Audit/InputFamily",
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
    <Text size="md" weight="bold" style={{ margin: "0 0 var(--wim-spacing-md) 0" }}>
      {title}
    </Text>
    <Box
      bg="subtle"
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

interface ComponentGroupProps {
  label: string;
  children: React.ReactNode;
  maxWidth?: string;
  align?: "start" | "center" | "end" | "stretch";
}

const ComponentGroup = ({ label, children, maxWidth, align = "stretch" }: ComponentGroupProps) => (
  <Stack direction="column" gap="var(--wim-spacing-xs)" w="100%">
    <Box pb="xs" style={{ borderBottom: "1px dashed var(--wim-color-border-secondary)" }}>
      <Text size="xs" color="secondary">
        {label}
      </Text>
    </Box>
    <Stack direction="column" gap="md" align={align} style={{ maxWidth: maxWidth }} w="100%">
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

        {/* 1. Basic Comparison */}
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

        {/* 2. Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })}>
              <Input variant={variant} placeholder={`Input ${variant}`} />
              <Textarea variant={variant} placeholder={`Textarea ${variant}`} />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* 3. Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })}>
              <InputAny intent={intent as "default" | "error"} placeholder={`Input ${intent}`} />
              <PasswordInputAny intent={intent as "default" | "error"} placeholder={`Password ${intent}`} />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* 4. Specialized & AI Inputs */}
        <ComparisonGrid title={t("audit:specialized_inputs")}>
          <ComponentGroup label="AI Specific">
            <PromptInput placeholder="PromptInput (AI)" />
            <SmartSearchInput placeholder="SmartSearchInput (AI)" />
          </ComponentGroup>
          <ComponentGroup label="Large Text Fields">
            <Textarea placeholder="Standard Textarea" />
            <Textarea rows={5} placeholder="Textarea with 5 rows" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 5. Mixed Composition (Alignment Check) */}
        <ComparisonGrid title={t("audit:mixed_composition")}>
          <ComponentGroup label={t("audit:label_mix")}>
            <Stack direction="row" gap="md" align="center" w="100%">
              <Input placeholder="Align Check" style={{ flex: 1 }} />
              <Button>Action</Button>
              <SearchInput placeholder="Search" style={{ flex: 1 }} />
            </Stack>
            <Stack direction="row" gap="md" align="center" w="100%">
              <PromptInput placeholder="Prompt" style={{ flex: 1 }} />
              <Button variant="ghost">Cancel</Button>
              <Button>Send</Button>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* 6. Focus & Disabled States */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")}>
            <Input disabled placeholder="Disabled Input" />
            <SearchInput disabled placeholder="Disabled Search" />
            <Textarea disabled placeholder="Disabled Textarea" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 7. Fluid Width Check (Readability Comparison) */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          {/* Fully Fluid */}
          <ComponentGroup label="Truly Full Width (100% of parent)">
            <Stack gap="lg">
              <Input fullWidth placeholder="Full Width Input" />
              <SearchInput fullWidth placeholder="Full Width Search" />
              <PasswordInput fullWidth placeholder="Full Width Password" />
              <OtpInput length={6} fullWidth />
              <PromptInput fullWidth placeholder="PromptInput (Fluid)" />
              <SmartSearchInput fullWidth placeholder="SmartSearchInput (Fluid)" />
            </Stack>
          </ComponentGroup>

          {/* Capped for Readability */}
          <ComponentGroup 
            label="Readable Limit (Capped at 60rem/960px - approx. 40-50 chars)" 
            maxWidth="60rem"
          >
            <Stack gap="lg">
              <Input fullWidth placeholder="Full Width Input (Capped)" />
              <PromptInput fullWidth placeholder="PromptInput (Capped)" />
              <SmartSearchInput fullWidth placeholder="SmartSearchInput (Capped)" />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
