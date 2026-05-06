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

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:state_family_title")}>
        {/* Structural Consistency */}
        <ComparisonGrid title={t("audit:structural_consistency_check")}>
          <ComponentGroup label={t("audit:label_result")} align="stretch">
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

          <ComponentGroup label={t("audit:label_empty_state")} align="stretch">
            <EmptyState
              icon={<Icon name="SearchIcon" size="xl" color="secondary" />}
              title="No data found"
              description="Try adjusting your search filters or searching for something else to see results here."
              extra={<Button variant="outline">Reset Filters</Button>}
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_error_boundary")} align="stretch">
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
          <ComponentGroup label="Result (Spacing)" align="stretch">
            <Result
              intent="info"
              title="Information Consistency"
              description="Checking if the vertical margin between Icon, Title, Description, and Actions is consistent with the design system."
              extra={<Button variant="solid">Primary Action</Button>}
            />
          </ComponentGroup>
          <ComponentGroup label="EmptyState (Spacing)" align="stretch">
            <EmptyState
              icon={<Icon name="CircleIcon" size="xl" color="secondary" />}
              title="No Content Available"
              description="Check if the vertical gaps match the Result component above."
              extra={<Button variant="outline">Secondary Action</Button>}
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Action Button Recommendation */}
        <ComparisonGrid title={t("audit:action_button_style_check")}>
          <Stack gap="lg">
            <ComponentGroup label="Success/Info: Recommended Solid Button" align="stretch">
              <Result
                intent="success"
                title="Process Completed"
                extra={<Button variant="solid">Done</Button>}
              />
            </ComponentGroup>
            <ComponentGroup label="Empty/Neutral: Recommended Outline Button" align="stretch">
              <EmptyState
                title="No items to show"
                extra={<Button variant="outline">Create New Item</Button>}
              />
            </ComponentGroup>
          </Stack>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
