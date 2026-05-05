import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Banner,
  Notification,
  Alert,
  Stack,
  Text,
  Box,
  Button,
} from "../../src";

const meta: Meta = {
  title: "Audit/OverlayFamily",
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
        overflow: "hidden", // 防止
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
    <Stack gap="var(--wim-spacing-md)" align="stretch" style={{ minWidth: 0 }}>
      {children}
    </Stack>
  </Stack>
);

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const feedbackIntents = ["info", "success", "warning", "error"] as const;

    return (
      <Box bg="surface">
        <SectionTitle>{t("audit:overlay_family_title")}</SectionTitle>

        {/* Intent Consistency (Notification & Banner) */}
        <ComparisonGrid title={t("audit:feedback_consistency")}>
          {feedbackIntents.map((intent) => (
            <ComponentGroup key={intent} label={t("audit:label_intent", { intent })}>
              <Banner
                intent={intent}
                title={`${t("audit:label_banner")} ${intent}`}
                description={t("audit:sample_feedback_check")}
              />
              <Notification
                intent={intent}
                title={`${t("audit:label_notification")} ${intent}`}
                description={t("audit:sample_feedback_check")}
              />
              <Alert
                intent={intent}
                title={`${t("audit:label_alert")} ${intent}`}
              >
                {t("audit:sample_feedback_check")}
              </Alert>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Shadow & Radius Audit */}
        <ComparisonGrid title={t("audit:shadow_radius_check")}>
          <ComponentGroup label={t("audit:label_container_styles")}>
             <Text size="sm">
               {t("audit:sample_overlay_check")}
             </Text>
             <Stack direction={{ base: "column", md: "row" }} gap="md">
               <Button variant="outline">{t("audit:action_check_dialog")}</Button>
               <Button variant="outline">{t("audit:action_check_popover")}</Button>
               <Button variant="outline">{t("audit:action_check_tooltip")}</Button>
             </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
