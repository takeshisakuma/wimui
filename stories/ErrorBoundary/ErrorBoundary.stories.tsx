import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { Button } from "@/components/Button/Button";
import { Stack } from "@/components/Stack/Stack";
import { Alert } from "@/components/Alert/Alert";
import { Container } from "@/components/Container/Container";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof ErrorBoundary> = {
  title: "Components/Utilities/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    layout: "centered",
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

const BuggyComponent = () => {
  const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
  throw new Error(t("story_errorboundary_throw_msg"));
};

export const Default: Story = {
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <p>{t("story_errorboundary_desc")}</p>
          <Button
            onClick={() => setShouldThrow(true)}
            label={t("story_errorboundary_btn_trigger")}
            priority="primary"
          />
          <ErrorBoundary onReset={() => setShouldThrow(false)}>
            {shouldThrow ? (
              <BuggyComponent />
            ) : (
              <Alert status="info" title={t("story_errorboundary_status_ok")} />
            )}
          </ErrorBoundary>
        </Stack>
      </Container>
    );
  },
};

export const CustomFallback: Story = {
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <Button
            onClick={() => setShouldThrow(true)}
            label={t("story_errorboundary_btn_trigger_custom")}
            priority="primary"
          />
          <ErrorBoundary
            onReset={() => setShouldThrow(false)}
            fallback={(error, _info, reset) => (
              <Alert
                status="error"
                title={t("story_errorboundary_oops")}
                description={error.message}
              >
                <div style={{ marginTop: "1rem" }}>
                  <Button
                    onClick={reset}
                    label={t("story_errorboundary_btn_reset")}
                    priority="secondary"
                    size="small"
                  />
                </div>
              </Alert>
            )}
          >
            {shouldThrow ? (
              <BuggyComponent />
            ) : (
              <Alert status="success" title={t("story_errorboundary_status_stable")} />
            )}
          </ErrorBoundary>
        </Stack>
      </Container>
    );
  },
};

