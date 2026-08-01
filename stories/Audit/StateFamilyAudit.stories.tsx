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
              description={t("audit:state_payment_success_desc")}
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
              description={t("audit:state_no_data_desc")}
              extra={<Button variant="outline">{t("audit:state_reset_filters")}</Button>}
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_error_boundary")} align="stretch">
            <Box
              p="lg"
              radius="md"
              bg="var(--wim-color-danger-subtle)"
              style={{ border: "1px solid var(--wim-color-danger)" }}
            >
              <Stack gap="md">
                <Text weight="bold" color="danger">{t("audit:state_error_boundary_mock")}</Text>
                <Result
                  intent="danger"
                  title={t("audit:state_something_wrong")}
                  description={t("audit:state_error_boundary_desc")}
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
              description={t("audit:state_result_spacing_desc")}
              extra={<Button variant="solid">{t("audit:state_primary_action")}</Button>}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:state_empty_spacing")} align="stretch">
            <EmptyState
              icon={<Icon name="CircleIcon" size="xl" color="secondary" />}
              title={t("audit:state_no_content")}
              description={t("audit:state_empty_spacing_desc")}
              extra={<Button variant="outline">{t("audit:state_secondary_action")}</Button>}
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Action Button Recommendation */}
        <ComparisonGrid title={t("audit:action_button_style_check")}>
          <Stack gap="lg">
            <ComponentGroup label={t("audit:state_success_solid")} align="stretch">
              <Result
                intent="success"
                title={t("audit:state_process_completed")}
                extra={<Button variant="solid">Done</Button>}
              />
            </ComponentGroup>
            <ComponentGroup label={t("audit:state_empty_outline")} align="stretch">
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
