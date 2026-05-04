import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Checkbox,
  Radio,
  Switch,
  Slider,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/SelectionFamily",
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
      <Text size="xs" color="primary" weight="medium">
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

    return (
      <Box bg="surface">
        <SectionTitle>{t("audit:selection_family_title")}</SectionTitle>

        {/* Alignment & Focus Check */}
        <ComparisonGrid title={t("audit:alignment_focus_check")}>
          <ComponentGroup label={t("audit:label_checkbox")}>
            <Checkbox>{t("audit:sample_long_text", { component: "Checkbox" })}</Checkbox>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_radio")}>
            <Radio name="audit">{t("audit:sample_long_text", { component: "Radio" })}</Radio>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_switch")}>
            <Switch>{t("audit:sample_long_text", { component: "Switch" })}</Switch>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          <ComponentGroup label={t("audit:label_intent_default")}>
            <Checkbox defaultChecked>{t("audit:label_intent_default")}</Checkbox>
            <Radio defaultChecked>{t("audit:label_intent_default")}</Radio>
            <Switch defaultChecked>{t("audit:label_intent_default")}</Switch>
            <Slider defaultValue={50} style={{ width: "200px" }} aria-label={t("audit:label_intent_default")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_intent_error")}>
            {/* These components don't have an explicit intent prop, error state is usually handled via FieldTemplate or wrapper */}
            <Checkbox defaultChecked>{t("audit:label_intent_error")}</Checkbox>
            <Radio defaultChecked>{t("audit:label_intent_error")}</Radio>
            <Switch defaultChecked>{t("audit:label_intent_error")}</Switch>
            <Slider defaultValue={40} style={{ width: "200px" }} aria-label={t("audit:label_intent_error")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* States Comparison */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")}>
            <Checkbox disabled defaultChecked>{t("audit:label_disabled")}</Checkbox>
            <Radio disabled defaultChecked>{t("audit:label_disabled")}</Radio>
            <Switch disabled defaultChecked>{t("audit:label_disabled")}</Switch>
            <Slider disabled defaultValue={30} style={{ width: "200px" }} aria-label={t("audit:label_disabled")} />
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
