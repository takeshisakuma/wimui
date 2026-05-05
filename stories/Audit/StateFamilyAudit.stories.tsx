import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Result,
  EmptyState,
  Button,
  Stack,
  Text,
  Box,
  Icon,
} from "../../src";

const meta: Meta = {
  title: "Audit/StateFamily",
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
        gridTemplateColumns: "1fr",
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

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <Box bg="surface">
        <SectionTitle>{t("audit:state_family_title")}</SectionTitle>

        {/* Structural Consistency */}
        <ComparisonGrid title={t("audit:structural_consistency_check")}>
          <ComponentGroup label={t("audit:label_result")}>
            <Result
              intent="success"
              title="Payment Successful"
              description="Your transaction has been completed successfully. A confirmation email has been sent to your registered address."
              extra={
                <Stack direction="row" gap="sm" wrap justify="center">
                  <Button variant="solid">Print Receipt</Button>
                  <Button variant="outline">Back to Home</Button>
                </Stack>
              }
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_empty_state")}>
            <EmptyState
              icon={<Icon name="SearchIcon" size="xl" color="secondary" />}
              title="No data found"
              description="Try adjusting your search filters or searching for something else to see results here."
              extra={<Button variant="outline">Reset Filters</Button>}
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_error_boundary")}>
            <Box
              p="lg"
              radius="md"
              bg="var(--wim-color-destructive-subtle)"
              style={{ border: "1px solid var(--wim-color-destructive-border)" }}
            >
              <Stack gap="md">
                <Text weight="bold" color="destructive">ErrorBoundary Mock (Default UI)</Text>
                <Result
                  intent="error"
                  title="Something went wrong"
                  description="An unexpected error occurred while loading the content. This is a fallback UI provided by ErrorBoundary."
                  extra={
                    <Stack direction="row" gap="sm" wrap justify="center">
                      <Button variant="solid">Retry</Button>
                      <Button variant="outline">Show Details</Button>
                    </Stack>
                  }
                />
              </Stack>
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Vertical Spacing Check */}
        <ComparisonGrid title={t("audit:vertical_spacing_check")}>
          <ComponentGroup label="Result (Spacing)">
             <Box style={{ border: "1px solid var(--wim-color-border)", padding: "var(--wim-spacing-xl)", background: "var(--wim-color-bg-surface)" }}>
                <Result
                  intent="info"
                  title="Information Consistency"
                  description="Checking if the vertical margin between Icon, Title, Description, and Actions is consistent with the design system."
                  extra={<Button variant="solid">Primary Action</Button>}
                />
             </Box>
          </ComponentGroup>
          <ComponentGroup label="EmptyState (Spacing)">
             <Box style={{ border: "1px solid var(--wim-color-border)", padding: "var(--wim-spacing-xl)", background: "var(--wim-color-bg-surface)" }}>
                <EmptyState
                  icon={<Icon name="CircleIcon" size="xl" color="secondary" />}
                  title="No Content Available"
                  description="Check if the vertical gaps match the Result component above."
                  extra={<Button variant="outline">Secondary Action</Button>}
                />
             </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Action Button Recommendation */}
        <ComparisonGrid title={t("audit:action_button_style_check")}>
          <Stack gap="lg">
            <ComponentGroup label="Success/Info: Recommended Solid Button">
              <Result
                intent="success"
                title="Process Completed"
                extra={<Button variant="solid">Done</Button>}
              />
            </ComponentGroup>
            <ComponentGroup label="Empty/Neutral: Recommended Outline Button">
              <EmptyState
                title="No items to show"
                extra={<Button variant="outline">Create New Item</Button>}
              />
            </ComponentGroup>
          </Stack>
        </ComparisonGrid>
      </Box>
    );
  },
};
