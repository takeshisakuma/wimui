import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { Button } from "@/components/Button/Button";
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
  const { t } = useTranslation(["docs", "common", "components"]);
  throw new Error(t("story_errorboundary_throw_msg"));
};

export const Default: Story = {
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <p style={{ marginBottom: "16px" }}>{t("story_errorboundary_desc")}</p>
        <Button
          onClick={() => setShouldThrow(true)}
          label={t("story_errorboundary_btn_trigger")}
          priority="primary"
          style={{
            marginBottom: "20px",
            maxWidth: "100%",
            whiteSpace: "normal",
            wordBreak: "break-word",
            height: "auto",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        />
        <ErrorBoundary onReset={() => setShouldThrow(false)}>
          {shouldThrow ? (
            <BuggyComponent />
          ) : (
            <div>{t("story_errorboundary_status_ok")}</div>
          )}
        </ErrorBoundary>
      </div>
    );
  },
};

export const CustomFallback: Story = {
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          maxWidth: "90vw",
          boxSizing: "border-box",
        }}
      >
        <Button
          onClick={() => setShouldThrow(true)}
          label={t("story_errorboundary_btn_trigger_custom")}
          priority="primary"
          style={{
            marginBottom: "20px",
            maxWidth: "100%",
            whiteSpace: "normal",
            wordBreak: "break-word",
            height: "auto",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        />
        <ErrorBoundary
          onReset={() => setShouldThrow(false)}
          fallback={(error, _info, reset) => (
            <div
              style={{
                background: "#f5f5f5",
                padding: "24px",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid #ddd",
                maxWidth: "100%",
                boxSizing: "border-box",
                wordBreak: "break-word",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{t("story_errorboundary_oops")}</h3>
              <p style={{ color: "#666", marginBottom: "20px" }}>
                {error.message}
              </p>
              <Button
                onClick={reset}
                label={t("story_errorboundary_btn_reset")}
                priority="secondary"
                style={{
                  maxWidth: "100%",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  height: "auto",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
              />
            </div>
          )}
        >
          {shouldThrow ? (
            <BuggyComponent />
          ) : (
            <div>{t("story_errorboundary_status_stable")}</div>
          )}
        </ErrorBoundary>
      </div>
    );
  },
};
