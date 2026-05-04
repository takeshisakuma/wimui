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
  ColorPicker,
  ColorInput,
  Combobox,
  TagInput,
  Selectbox,
  MultiSelect,
  TreeSelect,
  Cascader,
  PhoneInput,
  CreditCardInput,
  DatePicker,
  InlineEdit,
  CounterTextarea,
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
    <Text color="text-secondary" size="md" weight="bold" style={{ margin: "0 0 var(--wim-spacing-md) 0" }}>
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
      <Text size="xs" color="text-secondary">
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
            <Input label="Standard Input" placeholder="Standard Input" />
            <SearchInput label="Search Input" placeholder="Search Input" />
            <NumberInput label="Number Input" placeholder="Number Input" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_otp_input")}>
            <OtpInput label="OTP Input" length={6} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 2. Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })}>
              <Input label={`Input ${variant}`} variant={variant} placeholder={`Input ${variant}`} />
              <Textarea label={`Textarea ${variant}`} variant={variant} placeholder={`Textarea ${variant}`} />
              {variant === "ghost" && (
                <InlineEdit label="Inline Edit (Comparison)" defaultValue="Click to edit me" />
              )}
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* 3. Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })}>
              <InputAny label={`Input ${intent}`} intent={intent as "default" | "error"} placeholder={`Input ${intent}`} />
              <PasswordInputAny label={`Password ${intent}`} intent={intent as "default" | "error"} placeholder={`Password ${intent}`} />
              <SmartSearchInput label={`SmartSearch ${intent}`} intent={intent as "default" | "error"} placeholder={`SmartSearch ${intent}`} />
              <PromptInput label={`Prompt ${intent}`} error={intent === "error" ? "Error message" : undefined} placeholder={`Prompt ${intent}`} />
              <Combobox label={`Combobox ${intent}`} options={[{ label: "Option 1", value: "1" }]} error={intent === "error" ? "Error" : undefined} placeholder={`Combobox ${intent}`} />
              <TagInput label={`TagInput ${intent}`} defaultValue={["Tag 1"]} error={intent === "error" ? "Error" : undefined} placeholder={`TagInput ${intent}`} />
              <Selectbox label={`Selectbox ${intent}`} options={[{ label: "Option 1", value: "1" }]} error={intent === "error" ? "Error" : undefined} placeholder={`Selectbox ${intent}`} />
              <MultiSelect label={`MultiSelect ${intent}`} options={[{ label: "Option 1", value: "1" }]} error={intent === "error" ? "Error" : undefined} placeholder={`MultiSelect ${intent}`} />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* 4. Specialized & AI Inputs */}
        <ComparisonGrid title={t("audit:specialized_inputs")}>
          <ComponentGroup label="Specialized & AI Inputs">
            <PromptInput label="AI Prompt" placeholder="PromptInput (AI)" />
            <SmartSearchInput label="AI Smart Search" placeholder="SmartSearchInput (AI)" />
            <ColorPicker label="Color Picker" />
            <ColorInput label="Color Input (with HEX)" />
            <TagInput 
              label="Tag Input (Free-form)" 
              defaultValue={["Tag A", "Tag B"]} 
              placeholder="Add free-form tags..."
            />
            <MultiSelect 
              label="Multi Select (Selection)" 
              options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
              ]} 
              defaultValue={["1", "2"]}
              placeholder="Select tags from list..." 
            />
            <Combobox 
              label="Combobox" 
              options={[
                { label: "Option A", value: "a" },
                { label: "Option B", value: "b" },
              ]} 
              placeholder="Search or Select..." 
            />
            <Selectbox 
              label="Selectbox" 
              options={[
                { label: "High Priority", value: "high" },
                { label: "Low Priority", value: "low" },
              ]} 
              placeholder="Select..."
            />
            <TreeSelect 
              label="TreeSelect" 
              treeData={[
                { label: "Parent", value: "p", children: [{ label: "Child", value: "c" }] }
              ]} 
              placeholder="Select from tree..." 
            />
            <Cascader 
              label="Cascader" 
              options={[
                { label: "Category", value: "cat", children: [{ label: "Product", value: "prod" }] }
              ]} 
              placeholder="Cascade select..." 
            />
            <PhoneInput 
              label="Phone Input" 
              placeholder="090-1234-5678" 
            />
            <CreditCardInput 
              label="Credit Card" 
              placeholder="xxxx xxxx xxxx xxxx" 
            />
            <DatePicker 
              label="Date Picker" 
              placeholder="Select date..." 
            />
            <InlineEdit 
              label="Inline Edit" 
              defaultValue="John Doe" 
              placeholder="Enter name..."
            />
          </ComponentGroup>
          <ComponentGroup label="Large Text Fields">
            <Textarea label="Standard Textarea" placeholder="Standard Textarea" />
            <CounterTextarea label="Counter Textarea" maxLength={100} placeholder="Counter Textarea" />
            <Textarea label="Large Textarea" rows={5} placeholder="Textarea with 5 rows" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 5. Mixed Composition (Alignment Check) */}
        <ComparisonGrid title={t("audit:mixed_composition")}>
          <ComponentGroup label={t("audit:label_mix")}>
            <Stack direction="row" gap="md" align="center" w="100%">
              <Input aria-label="Mix Input 1" placeholder="Align Check" style={{ flex: 1 }} />
              <Button>Action</Button>
              <SearchInput aria-label="Mix Search" placeholder="Search" style={{ flex: 1 }} />
            </Stack>
            <Stack direction="row" gap="md" align="center" w="100%">
              <PromptInput aria-label="Mix Prompt" placeholder="Prompt" style={{ flex: 1 }} />
              <Button variant="ghost">Cancel</Button>
              <Button>Send</Button>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* 6. Focus & Disabled States */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")}>
            <Input label="Disabled Input" disabled placeholder="Disabled Input" />
            <SearchInput label="Disabled Search" disabled placeholder="Disabled Search" />
            <Textarea label="Disabled Textarea" disabled placeholder="Disabled Textarea" />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 7. Fluid Width Check (Readability Comparison) */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          {/* Fully Fluid */}
          <ComponentGroup label="Truly Full Width (100% of parent)">
            <Stack gap="lg">
              <Input label="Fluid Input" fullWidth placeholder="Full Width Input" />
              <SearchInput label="Fluid Search" fullWidth placeholder="Full Width Search" />
              <PasswordInput label="Fluid Password" fullWidth placeholder="Full Width Password" />
              <OtpInput label="Fluid OTP" length={6} fullWidth />
              <PromptInput label="Fluid Prompt" fullWidth placeholder="PromptInput (Fluid)" />
              <SmartSearchInput label="Fluid SmartSearch" fullWidth placeholder="SmartSearchInput (Fluid)" />
              <Combobox label="Fluid Combobox" fullWidth options={[{ label: "Fluid Option", value: "f1" }]} placeholder="Combobox (Fluid)" />
              <TagInput label="Fluid TagInput" fullWidth defaultValue={["Fluid"]} />
              <Selectbox label="Fluid Selectbox" fullWidth options={[{ label: "Fluid Option", value: "f1" }]} placeholder="Selectbox (Fluid)" />
              <MultiSelect label="Fluid MultiSelect" fullWidth options={[{ label: "Fluid Option", value: "f1" }]} placeholder="MultiSelect (Fluid)" />
              <TreeSelect label="Fluid TreeSelect" fullWidth treeData={[{ label: "Fluid Node", value: "fn1" }]} placeholder="TreeSelect (Fluid)" />
              <Cascader label="Fluid Cascader" fullWidth options={[{ label: "Fluid Case", value: "fc1" }]} placeholder="Cascader (Fluid)" />
              <PhoneInput label="Fluid Phone" fullWidth placeholder="Phone (Fluid)" />
              <CreditCardInput label="Fluid CC" fullWidth placeholder="CC (Fluid)" />
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
