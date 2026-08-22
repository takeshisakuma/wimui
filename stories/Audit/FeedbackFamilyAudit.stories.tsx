import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Alert,
  Banner,
  Notification,
  Toast,
  Snackbar,
  Stack,
  Box,
  Button,
  Progress,
  ProgressRing,
  Spinner,
  Loader,
  LoadingOverlay,
  Text,
} from "../../src";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/FeedbackFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:feedback_family_title")}>
        {/* Intent Consistency */}
        <ComparisonGrid title={t("audit:feedback_intent_consistency")}>
          <ComponentGroup label={t("audit:label_alert")} align="stretch">
            <Stack gap="md">
              <Alert intent="info" title={t("audit:sample_alert_info_title")} description={t("audit:sample_alert_info_desc")} />
              <Alert intent="success" title={t("audit:sample_alert_success_title")} description={t("audit:sample_alert_success_desc")} />
              <Alert intent="warning" title={t("audit:sample_alert_warning_title")} description={t("audit:sample_alert_warning_desc")} />
              <Alert intent="danger" title={t("audit:sample_alert_error_title")} description={t("audit:sample_alert_error_desc")} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_banner")} align="stretch">
            <Stack gap="md">
              <Banner intent="info" description={t("audit:sample_banner_info")} />
              <Banner intent="warning" description={t("audit:sample_banner_warning")} />
              <Banner intent="danger" description={t("audit:sample_banner_error")} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Loading & Progress Indicators */}
        <ComparisonGrid title={t("audit:loading_progress_consistency")}>
          <ComponentGroup label={t("audit:label_spinner")} direction="row" align="center" gap="lg" wrap>
            <Stack align="center" gap="xs">
              <Spinner size="sm" />
              <Text size="xs">sm</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Spinner size="md" />
              <Text size="xs">md</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Spinner size="lg" />
              <Text size="xs">lg</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Spinner size="xl" />
              <Text size="xs">xl</Text>
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_progress")} align="stretch">
            <Stack gap="md">
              <Progress value={30} label={t("audit:sample_progress_uploading")} showValue />
              <Progress value={60} intent="success" label={t("audit:sample_progress_success")} showValue />
              <Progress value={90} intent="danger" label={t("audit:sample_progress_error")} showValue />
              <Progress indeterminate label={t("audit:sample_progress_processing")} />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_progress_ring")} direction="row" gap="xl" wrap>
            <ProgressRing value={30} showValue label={t("audit:sample_progress_uploading")} />
            <ProgressRing value={70} intent="success" showValue label={t("audit:sample_progress_success")} />
            <ProgressRing indeterminate label={t("audit:sample_progress_processing")} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_loader")} direction="row" gap="xl" wrap>
            <Stack align="center" gap="sm">
              <Loader variant="bars" />
              <Text size="xs">Bars</Text>
            </Stack>
            <Stack align="center" gap="sm">
              <Loader variant="dots" />
              <Text size="xs">Dots</Text>
            </Stack>
            <Stack align="center" gap="sm">
              <Loader variant="pulse" />
              <Text size="xs">Pulse</Text>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Overlay & Full-screen Feedback */}
        <ComparisonGrid title={t("audit:overlay_feedback_consistency")}>
          <ComponentGroup label={t("audit:label_loading_overlay")} align="stretch">
             <Box style={{ position: "relative", height: "150px", border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)", overflow: "hidden" }}>
                <Box p="md">
                  <Text>{t("audit:sample_overlay_blocked")}</Text>
                </Box>
                <LoadingOverlay visible message={t("audit:sample_progress_processing")} blur="sm" />
             </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_toast_batch")} align="stretch">
            <Stack gap="sm">
               <Toast title={t("audit:sample_toast_profile_title")} description={t("audit:sample_toast_profile_desc")} intent="success" />
               <Toast title={t("audit:sample_toast_network_title")} description={t("audit:sample_toast_network_desc")} intent="danger" />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Layout Consistency */}
        <ComparisonGrid title={t("audit:feedback_layout_consistency")}>
          <ComponentGroup label={t("audit:label_notification")} align="stretch">
            <Stack gap="md">
              <Notification
                intent="info"
                title={t("audit:sample_notif_update_title")}
                description={t("audit:sample_notif_update_desc")}
              />
              <Notification
                intent="success"
                title={t("audit:sample_notif_file_title")}
                description={t("audit:sample_notif_file_desc")}
                closable
              />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:sample_alert_unsaved_title")} align="stretch">
            <Alert
              intent="warning"
              title={t("audit:sample_alert_unsaved_title")}
              description={t("audit:sample_alert_unsaved_desc")}
              onClose={() => {}}
            >
              <Stack direction="row" gap="sm" mt="sm">
                <Button size="sm" variant="solid">{t("audit:sample_action_save")}</Button>
                <Button size="sm" variant="outline">{t("audit:sample_action_discard")}</Button>
              </Stack>
            </Alert>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Overlay Feedback Behavior */}
        <ComparisonGrid title={t("audit:feedback_overlay_behavior")}>
          <ComponentGroup label={t("audit:label_toast")} align="stretch">
            <Box style={{ position: "relative", height: "200px", background: "var(--wim-color-surface-subtle-alpha)", borderRadius: "var(--wim-radius-md)", overflow: "hidden", padding: "1rem" }}>
              <Stack gap="sm">
                 <Toast title={t("audit:sample_progress_success")} description={t("audit:sample_toast_profile_desc")} intent="success" />
                 <Toast title={t("audit:sample_progress_error")} description={t("audit:sample_toast_network_desc")} intent="danger" />
              </Stack>
              <Box style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                 <Toast title={t("audit:sample_toast_floating_title")} description={t("audit:sample_toast_floating_desc")} intent="info" />
              </Box>
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_snackbar")} align="stretch">
             <Box style={{ position: "relative", height: "200px", background: "var(--wim-color-surface-subtle-alpha)", borderRadius: "var(--wim-radius-md)", overflow: "hidden", padding: "1rem" }}>
                <Stack gap="sm" align="center" justify="center" h="100%">
                   <Snackbar message={t("audit:sample_snackbar_simple")} open intent="info" position="bottom-center" />
                   <Snackbar message={t("audit:sample_snackbar_action")} open intent="warning" actionLabel={t("audit:sample_action_undo")} position="bottom-center" />
                </Stack>
             </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
