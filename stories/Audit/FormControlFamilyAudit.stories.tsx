import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Input,
  Select,
  Combobox,
  MultiSelect,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  SwitchGroup,
  Slider,
  NumberInput,
  DatePicker,
  Stack,
  Box,
} from "../../src";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/FormControlFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage 
        title={t("audit:form_controls_audit_title")}
        description={t("audit:form_controls_audit_desc")}
      >
        {/* Label & Help Text Consistency */}
        <ComparisonGrid title={t("audit:form_label_consistency")}>
          <ComponentGroup label={t("audit:label_standard_input")} maxWidth="var(--wim-width-md)" align="stretch">
            <Input 
              label={t("audit:label_username")} 
              placeholder={t("audit:placeholder_username")} 
              fullWidth
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_select")} maxWidth="var(--wim-width-md)" align="stretch">
            <Select
              label={t("audit:label_country")}
              options={[{ label: t("audit:option_us"), value: "us" }, { label: t("audit:option_japan"), value: "jp" }]} 
              placeholder={t("audit:placeholder_country")}
              fullWidth
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_checkbox_group")} maxWidth="var(--wim-width-md)" align="stretch">
            <CheckboxGroup 
              label={t("audit:label_interests")} 
              options={[{ label: "Design", value: "d" }, { label: "Development", value: "dev" }]} 
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_switch_group")} maxWidth="var(--wim-width-md)" align="stretch">
            <SwitchGroup 
              label={t("audit:label_notifications")} 
              options={[{ label: "Email", value: "e" }, { label: "Push", value: "p" }]} 
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Validation State Consistency */}
        <ComparisonGrid title={t("audit:form_validation_consistency")}>
          <ComponentGroup label={`${t("audit:label_input")} (${t("audit:label_intent_error")})`} maxWidth="var(--wim-width-md)" align="stretch">
            <Input 
              label={t("audit:label_email_address")} 
              defaultValue="invalid-email"
              intent="danger"
              error={t("audit:error_email_invalid")}
              fullWidth
            />
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_number_input")} (${t("audit:label_intent_error")})`} maxWidth="var(--wim-width-md)" align="stretch">
            <NumberInput 
              label={t("audit:label_age")} 
              defaultValue={150}
              error={t("audit:error_age_range")}
              fullWidth
            />
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_multi_select_selection")} (${t("audit:label_intent_error")})`} maxWidth="var(--wim-width-md)" align="stretch">
            <MultiSelect 
              label={t("audit:label_tags")} 
              options={[{ label: "React", value: "r" }]}
              defaultValue={[]}
              error={t("audit:error_tag_required")}
              fullWidth
            />
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_radio_group")} (${t("audit:label_intent_error")})`} maxWidth="var(--wim-width-md)" align="stretch">
            <RadioGroup 
              label={t("audit:label_gender")} 
              options={[{ label: "Male", value: "m" }, { label: "Female", value: "f" }]}
              error={t("audit:error_gender_required")}
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Layout: Horizontal vs Vertical */}
        <ComparisonGrid title={t("audit:form_layout_patterns")}>
          <ComponentGroup label={t("audit:label_form_layout_vertical")} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="md">
              <Input label={t("audit:label_first_name")} fullWidth />
              <Input label={t("audit:label_last_name")} fullWidth />
              <Select label={t("audit:label_role")} fullWidth options={[]} />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_promo_code")} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="sm">
              <Input label={t("audit:label_promo_code")} fullWidth />
              <Checkbox>{t("audit:label_apply")}</Checkbox>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Complex Components Consistency */}
        <ComparisonGrid title={t("audit:complex_form_consistency")}>
          <ComponentGroup label={t("audit:label_date_picker")} maxWidth="var(--wim-width-md)" align="stretch">
             <DatePicker label={t("audit:label_start_date")} fullWidth />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_slider")} maxWidth="var(--wim-width-md)" align="stretch">
             <Box pt="md">
               <Slider label={t("audit:label_volume_level")} defaultValue={70} />
             </Box>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_combobox")} maxWidth="var(--wim-width-md)" align="stretch">
             <Combobox label={t("audit:label_fruit")} options={[{ label: "Apple", value: "a" }, { label: "Banana", value: "b" }]} fullWidth />
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
