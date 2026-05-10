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
} from "../../src";

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/InputFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputAny = Input as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PasswordInputAny = PasswordInput as any;

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const variants = ["outline", "ghost"] as const;
    const intents = ["default", "error"] as const;

    return (
      <AuditPage title={t("audit:input_family_title")}>
        {/* 1. Basic Comparison */}
        <ComparisonGrid title={t("audit:basic_comparison")}>
          <ComponentGroup label={t("audit:label_standard_inputs")} align="stretch" maxWidth="var(--wim-width-md)">
            <Input label={t("audit:label_standard_input")} placeholder={t("audit:label_standard_input")} />
            <SearchInput label={t("audit:label_search_input")} placeholder={t("audit:label_search_input")} />
            <NumberInput label={t("audit:label_number_input")} placeholder={t("audit:label_number_input")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_otp_input")} align="stretch" maxWidth="var(--wim-width-md)">
            <OtpInput label={t("audit:label_otp_input")} length={6} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 2. Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map((variant) => (
            <ComponentGroup key={variant} label={t("audit:label_variant", { variant })} align="stretch" maxWidth="var(--wim-width-md)">
              <Input label={t("audit:label_variant", { variant })} variant={variant} placeholder={t("audit:label_variant", { variant })} />
              <Textarea label={t("audit:label_variant", { variant })} variant={variant} placeholder={t("audit:label_variant", { variant })} />
              {variant === "ghost" && (
                <InlineEdit label={t("audit:label_inline_edit_comparison")} defaultValue={t("audit:sample_inline_edit_placeholder")} />
              )}
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* 3. Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })} align="stretch" maxWidth="var(--wim-width-md)">
              <InputAny label={t("audit:label_intent", { intent })} intent={intent as "default" | "error"} placeholder={t("audit:label_intent", { intent })} />
              <PasswordInputAny label={t("audit:label_intent", { intent })} intent={intent as "default" | "error"} placeholder={t("audit:label_intent", { intent })} />
              <SmartSearchInput label={t("audit:label_intent", { intent })} intent={intent as "default" | "error"} placeholder={t("audit:label_intent", { intent })} />
              <PromptInput label={t("audit:label_intent", { intent })} error={intent === "error" ? t("audit:label_error_message") : undefined} placeholder={t("audit:label_intent", { intent })} />
              <Combobox label={t("audit:label_intent", { intent })} options={[{ label: t("audit:label_option_1"), value: "1" }]} error={intent === "error" ? t("audit:label_error_message") : undefined} placeholder={t("audit:label_intent", { intent })} />
              <TagInput label={t("audit:label_intent", { intent })} defaultValue={[t("audit:sample_tag_a")]} error={intent === "error" ? t("audit:label_error_message") : undefined} placeholder={t("audit:label_intent", { intent })} />
              <Selectbox label={t("audit:label_intent", { intent })} options={[{ label: t("audit:label_option_1"), value: "1" }]} error={intent === "error" ? t("audit:label_error_message") : undefined} placeholder={t("audit:label_intent", { intent })} />
              <MultiSelect label={t("audit:label_intent", { intent })} options={[{ label: t("audit:label_option_1"), value: "1" }]} error={intent === "error" ? t("audit:label_error_message") : undefined} placeholder={t("audit:label_intent", { intent })} />
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* 4. Specialized & AI Inputs */}
        <ComparisonGrid title={t("audit:specialized_inputs")}>
          <ComponentGroup label={t("audit:specialized_inputs")} align="stretch" maxWidth="var(--wim-width-md)">
            <PromptInput label={t("audit:label_ai_prompt")} placeholder={t("audit:sample_prompt_ai")} />
            <SmartSearchInput label={t("audit:label_ai_smart_search")} placeholder={t("audit:sample_smart_search_ai")} />
            <ColorPicker label={t("audit:label_color_picker")} />
            <ColorInput label={t("audit:label_color_input_hex")} />
            <TagInput 
              label={t("audit:label_tag_input_freeform")} 
              defaultValue={[t("audit:sample_tag_a"), t("audit:sample_tag_b")]} 
              placeholder={t("audit:sample_tag_input_placeholder")}
            />
            <MultiSelect 
              label={t("audit:label_multi_select_selection")} 
              options={[
                { label: t("audit:label_option_1"), value: "1" },
                { label: t("audit:label_option_2"), value: "2" },
                { label: t("audit:label_option_3"), value: "3" },
              ]} 
              defaultValue={["1", "2"]}
              placeholder={t("audit:sample_multi_select_placeholder")} 
            />
            <Combobox 
              label={t("audit:label_combobox")} 
              options={[
                { label: t("audit:label_option_a"), value: "a" },
                { label: t("audit:label_option_b"), value: "b" },
              ]} 
              placeholder={t("audit:sample_combobox_placeholder")} 
            />
            <Selectbox 
              label={t("audit:label_selectbox")} 
              options={[
                { label: t("audit:label_priority_high"), value: "high" },
                { label: t("audit:label_priority_low"), value: "low" },
              ]} 
              placeholder={t("audit:sample_select_placeholder")}
            />
            <TreeSelect 
              label={t("audit:label_tree_select")} 
              treeData={[
                { label: t("audit:label_parent"), value: "p", children: [{ label: t("audit:label_child"), value: "c" }] }
              ]} 
              placeholder={t("audit:sample_tree_select_placeholder")} 
            />
            <Cascader 
              label={t("audit:label_cascader")} 
              options={[
                { label: t("audit:label_category"), value: "cat", children: [{ label: t("audit:label_product"), value: "prod" }] }
              ]} 
              placeholder={t("audit:sample_cascader_placeholder")} 
            />
            <PhoneInput 
              label={t("audit:label_phone_input")} 
              placeholder={t("audit:sample_phone_placeholder")} 
            />
            <CreditCardInput 
              label={t("audit:label_credit_card")} 
              placeholder={t("audit:sample_credit_card_placeholder")} 
            />
            <DatePicker 
              label={t("audit:label_date_picker")} 
              placeholder={t("audit:sample_date_placeholder")} 
            />
            <InlineEdit 
              label={t("audit:label_inline_edit")} 
              defaultValue="John Doe" 
              placeholder={t("audit:sample_name_placeholder")}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_large_text_fields")} align="stretch" maxWidth="var(--wim-width-md)">
            <Textarea label={t("audit:label_standard_textarea")} placeholder={t("audit:label_standard_textarea")} />
            <CounterTextarea label={t("audit:label_counter_textarea")} maxLength={100} placeholder={t("audit:label_counter_textarea")} />
            <Textarea label={t("audit:label_large_textarea")} rows={5} placeholder={t("audit:sample_textarea_rows", { rows: 5 })} />
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
              <Input aria-label="Mix Input 2" placeholder="Message" style={{ flex: 1 }} />
              <Button variant="ghost">Cancel</Button>
              <Button>Send</Button>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* 6. Focus & Disabled States */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")} align="stretch" maxWidth="var(--wim-width-md)">
            <Input label={t("audit:label_disabled")} disabled placeholder={t("audit:label_disabled")} />
            <SearchInput label={t("audit:label_disabled")} disabled placeholder={t("audit:label_disabled")} />
            <Textarea label={t("audit:label_disabled")} disabled placeholder={t("audit:label_disabled")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 7. Fluid Width Check (Readability Comparison) */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          {/* Fully Fluid */}
          <ComponentGroup label={t("audit:label_truly_full_width")}>
            <Stack gap="lg">
              <Input label={t("audit:label_fluid_input")} fullWidth placeholder={t("audit:label_fluid_input")} />
              <SearchInput label={t("audit:label_fluid_search")} fullWidth placeholder={t("audit:label_fluid_search")} />
              <PasswordInput label={t("audit:label_fluid_password")} fullWidth placeholder={t("audit:label_fluid_password")} />
              <OtpInput label={t("audit:label_fluid_otp")} length={6} fullWidth />
              <PromptInput label={t("audit:label_fluid_prompt")} fullWidth placeholder={t("audit:label_fluid_prompt")} />
              <SmartSearchInput label={t("audit:label_fluid_smart_search")} fullWidth placeholder={t("audit:label_fluid_smart_search")} />
              <Combobox label={t("audit:label_fluid_combobox")} fullWidth options={[{ label: t("audit:label_option_1"), value: "f1" }]} placeholder={t("audit:label_fluid_combobox")} />
              <TagInput label={t("audit:label_fluid_tag_input")} fullWidth defaultValue={[t("audit:label_mix")]} />
              <Selectbox label={t("audit:label_fluid_selectbox")} fullWidth options={[{ label: t("audit:label_option_1"), value: "f1" }]} placeholder={t("audit:label_fluid_selectbox")} />
              <MultiSelect label={t("audit:label_fluid_multi_select")} fullWidth options={[{ label: t("audit:label_option_1"), value: "f1" }]} placeholder={t("audit:label_fluid_multi_select")} />
              <TreeSelect label={t("audit:label_fluid_tree_select")} fullWidth treeData={[{ label: t("audit:label_option_1"), value: "fn1" }]} placeholder={t("audit:label_fluid_tree_select")} />
              <Cascader label={t("audit:label_fluid_cascader")} fullWidth options={[{ label: t("audit:label_option_1"), value: "fc1" }]} placeholder={t("audit:label_fluid_cascader")} />
              <PhoneInput label={t("audit:label_fluid_phone")} fullWidth placeholder={t("audit:label_fluid_phone")} />
              <CreditCardInput label={t("audit:label_fluid_cc")} fullWidth placeholder={t("audit:label_fluid_cc")} />
              <DatePicker label={t("audit:label_fluid_date_picker")} fullWidth placeholder={t("audit:sample_date_placeholder")} />
            </Stack>
          </ComponentGroup>

          {/* Capped for Readability */}
          <ComponentGroup 
            label={t("audit:label_readable_limit")} 
            maxWidth="60rem"
          >
            <Stack gap="lg">
              <Input fullWidth placeholder={t("audit:label_full_width_input_capped")} />
              <PromptInput fullWidth placeholder={t("audit:label_prompt_input_capped")} />
              <SmartSearchInput fullWidth placeholder={t("audit:label_smart_search_input_capped")} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
