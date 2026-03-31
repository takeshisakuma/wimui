import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorBoundary } from "@/components/feedback/ErrorBoundary/ErrorBoundary";
import { Button } from "@/components/form/Button/Button";
import { Stack } from "@/components/layout/Stack/Stack";
import { Alert } from "@/components/feedback/Alert/Alert";
import { Container } from "@/components/layout/Container/Container";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
  const { t } = useTranslation(ALL_NAMESPACES);
  throw new Error(t("story.errorboundary_throw_msg"));
};

export const Default: Story = {
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <p>{t("story.errorboundary_desc")}</p>
          <Button
            onClick={() => setShouldThrow(true)}
            label={t("story.errorboundary_btn_trigger")}
            variant="filled"
          />
          <ErrorBoundary onReset={() => setShouldThrow(false)}>
            {shouldThrow ? (
              <BuggyComponent />
            ) : (
              <Alert status="info" title={t("story.errorboundary_status_ok")} />
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <Button
            onClick={() => setShouldThrow(true)}
            label={t("story.errorboundary_btn_trigger_custom")}
            variant="filled"
          />
          <ErrorBoundary
            onReset={() => setShouldThrow(false)}
            fallback={(error, _info, reset) => (
              <Alert
                status="error"
                title={t("story.errorboundary_oops")}
                description={error.message}
              >
                <div style={{ marginTop: "1rem" }}>
                  <Button
                    onClick={reset}
                    label={t("story.errorboundary_btn_reset")}
                    variant="outlined"
                    size="sm"
                  />
                </div>
              </Alert>
            )}
          >
            {shouldThrow ? (
              <BuggyComponent />
            ) : (
              <Alert status="success" title={t("story.errorboundary_status_stable")} />
            )}
          </ErrorBoundary>
        </Stack>
      </Container>
    );
  },
};

