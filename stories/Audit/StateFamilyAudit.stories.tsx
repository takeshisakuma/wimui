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
              title={t("audit:state_payment_success")}
              description="Your transaction has been completed successfully. A confirmation email has been sent to your registered address."
              extra={
                <Stack direction="row" gap="sm" wrap justify="center">
                  <Button variant="solid">{t("audit:state_print_receipt")}</Button>
                  <Button variant="outline">{t("audit:state_back_home")}</Button>
                </Stack>
              }
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_empty_state")} align="stretch">
            <EmptyState
              icon={<Icon name="SearchIcon" size="xl" color="secondary" />}
              title={t("audit:state_no_data")}
              description="Try adjusting your search filters or searching for something else to see results here."
              extra={<Button variant="outline">{t("audit:state_reset_filters")}</Button>}
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
                <Text weight="bold" color="destructive">{t("audit:state_error_boundary_mock")}</Text>
                <Result
                  intent="error"
                  title={t("audit:state_something_wrong")}
                  description="An unexpected error occurred while loading the content. This is a fallback UI provided by ErrorBoundary."
                  extra={
                    <Stack direction="row" gap="sm" wrap justify="center">
                      <Button variant="solid">{t("audit:state_retry")}</Button>
                      <Button variant="outline">{t("audit:state_show_details")}</Button>
                    </Stack>
                  }
                />
              </Stack>
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Vertical Spacing Check */}
        <ComparisonGrid title={t("audit:vertical_spacing_check")}>
          <ComponentGroup label={t("audit:state_result_spacing")} align="stretch">
            <Result
              intent="info"
              title={t("audit:state_info_consistency")}
              description="Checking if the vertical margin between Icon, Title, Description, and Actions is consistent with the design system."
              extra={<Button variant="solid">{t("audit:state_primary_action")}</Button>}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:state_empty_spacing")} align="stretch">
            <EmptyState
              icon={<Icon name="CircleIcon" size="xl" color="secondary" />}
              title={t("audit:state_no_content")}
              description="Check if the vertical gaps match the Result component above."
              extra={<Button variant="outline">{t("audit:state_secondary_action")}</Button>}
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Action Button Recommendation */}
        <ComparisonGrid title={t("audit:action_button_style_check")}>
          <Stack gap="lg">
            <ComponentGroup label="Success/Info: Recommended Solid Button" align="stretch">
              <Result
                intent="success"
                title={t("audit:state_process_completed")}
                extra={<Button variant="solid">Done</Button>}
              />
            </ComponentGroup>
            <ComponentGroup label="Empty/Neutral: Recommended Outline Button" align="stretch">
              <EmptyState
                title={t("audit:state_no_items")}
                extra={<Button variant="outline">{t("audit:state_create_item")}</Button>}
              />
            </ComponentGroup>
          </Stack>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
