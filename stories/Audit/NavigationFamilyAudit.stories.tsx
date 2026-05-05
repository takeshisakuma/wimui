import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Breadcrumb,
  Stepper,
  Pagination,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Progress,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/NavigationFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Box px="md" py="md" style={{ borderBottom: "1px solid var(--wim-color-border)" }}>
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
  <Box mx="md" my="lg">
    <Text color="text-secondary" size="sm" style={{ marginBottom: "var(--wim-spacing-md)" }}>
      {title}
    </Text>
    <Box
      bg="bg-surface-subtle"
      radius="md"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gap: "var(--wim-spacing-xl)",
        padding: "var(--wim-spacing-md)",
        overflowX: "auto",
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
    <Box style={{ width: "100%" }}>
      {children}
    </Box>
  </Stack>
);

export const NavigationAudit: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <Box bg="surface" pb="xl">
        <SectionTitle>{t("audit:navigation_family_title")}</SectionTitle>

        {/* State Expression Audit */}
        <ComparisonGrid title={t("audit:state_expression_check")}>
          <ComponentGroup label={t("audit:label_stepper")}>
            <Stepper
              current={1}
              steps={[
                { title: t("audit:label_step_completed"), intent: "finish" },
                { title: t("audit:label_step_current"), intent: "process" },
                { title: t("audit:label_step_pending"), intent: "wait" },
              ]}
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_progress")}>
            <Stack gap="md">
              <Progress value={100} intent="success" label={t("audit:label_progress_success")} showValue />
              <Progress value={60} intent="primary" label={t("audit:label_progress_primary")} showValue />
              <Progress value={30} intent="warning" label={t("audit:label_progress_warning")} showValue />
              <Progress value={70} intent="error" label={t("audit:label_progress_error")} showValue />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Active Contrast & Clickable Area Audit */}
        <ComparisonGrid title={`${t("audit:active_contrast_check")} & ${t("audit:clickable_area_check")}`}>
          <ComponentGroup label={t("audit:label_tabs")}>
            <Tabs defaultValue="1">
              <TabsList>
                <TabsTrigger value="1">Active Tab</TabsTrigger>
                <TabsTrigger value="2">Default Tab</TabsTrigger>
                <TabsTrigger value="3" disabled>Disabled Tab</TabsTrigger>
              </TabsList>
              <TabsContent value="1">
                <Box p="md"><Text>Active Content</Text></Box>
              </TabsContent>
              <TabsContent value="2">
                <Box p="md"><Text>Default Content</Text></Box>
              </TabsContent>
            </Tabs>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_pagination")}>
            <Pagination
              total={100}
              current={1}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `Total ${total} items`}
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_breadcrumbs")}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Category", href: "/category" },
                { label: "Current Page" },
              ]}
            />
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
