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
              <Alert intent="info" title="Info Alert" description="This is an informative alert message." />
              <Alert intent="success" title="Success Alert" description="Operation completed successfully." />
              <Alert intent="warning" title="Warning Alert" description="Please be careful with this action." />
              <Alert intent="error" title="Error Alert" description="An error occurred while processing." />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_banner")} align="stretch">
            <Stack gap="md">
              <Banner intent="info" description="Standard information banner for system-wide updates." />
              <Banner intent="warning" description="System maintenance scheduled for tonight at 10 PM." />
              <Banner intent="error" description="Connectivity issues detected in the Asia-Pacific region." />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Layout Consistency */}
        <ComparisonGrid title={t("audit:feedback_layout_consistency")}>
          <ComponentGroup label={t("audit:label_notification")} align="stretch">
            <Stack gap="md">
              <Notification
                intent="info"
                title="New Update Available"
                description="A new version of the application is available. Please refresh to update."
              />
              <Notification
                intent="success"
                title="File Uploaded"
                description="The file 'report.pdf' has been successfully uploaded to the server."
                closable
              />
            </Stack>
          </ComponentGroup>

          <ComponentGroup label="Alert with Actions" align="stretch">
            <Alert
              intent="warning"
              title="Unsaved Changes"
              description="You have unsaved changes. Are you sure you want to leave this page?"
              onClose={() => {}}
            >
              <Stack direction="row" gap="sm" mt="sm">
                <Button size="sm" variant="solid">Save Changes</Button>
                <Button size="sm" variant="outline">Discard</Button>
              </Stack>
            </Alert>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Overlay Feedback Behavior */}
        <ComparisonGrid title={t("audit:feedback_overlay_behavior")}>
          <ComponentGroup label={t("audit:label_toast")} align="stretch">
            <Box style={{ position: "relative", height: "200px", background: "var(--wim-color-bg-surface-subtle)", borderRadius: "var(--wim-radius-md)", overflow: "hidden", padding: "1rem" }}>
              <Stack gap="sm">
                 <Toast title="Success" description="Profile updated successfully" intent="success" />
                 <Toast title="Error" description="Failed to save changes" intent="error" />
              </Stack>
              <Box style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                 <Toast title="Floating Toast" description="Static preview" intent="info" />
              </Box>
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_snackbar")} align="stretch">
             <Box style={{ position: "relative", height: "200px", background: "var(--wim-color-bg-surface-subtle)", borderRadius: "var(--wim-radius-md)", overflow: "hidden", padding: "1rem" }}>
                <Stack gap="sm" align="center" justify="center" h="100%">
                   <Snackbar message="Simple message snackbar" open intent="info" position="bottom-center" />
                   <Snackbar message="Action snackbar" open intent="warning" actionLabel="Undo" position="bottom-center" />
                </Stack>
             </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
