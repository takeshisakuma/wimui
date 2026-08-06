import React, { Component, ErrorInfo, ReactNode, useState } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { isDev } from "../../../utilities/dev-utils";
import { Alert } from "../../feedback/Alert/Alert";
import { Button } from "../../form/Button/Button";
import { Stack } from "../../layout/Stack/Stack";
import { Box } from "../../layout/Box/Box";

import styles from "./errorboundary.module.scss";

export type ErrorBoundaryLabels = {
  title?: string;
  retry?: string;
  showDetails?: string;
  hideDetails?: string;
};

export interface ErrorBoundaryProps {
  /** Component or element displayed when an error occurs.
   * When a function is passed, it is called as (error, errorInfo, reset) => ReactNode.
   */
  fallback?:
  | ReactNode
  | ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode);
  /** Called when an error occurs. */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Called when the error is reset. */
  onReset?: () => void;
  /** Labels for manual translation overrides. */
  labels?: ErrorBoundaryLabels;
  /** Content the boundary protects. */
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Function component that renders the default error fallback UI.
 * Provides a retry button and a toggle for showing/hiding error details.
 */
const DefaultFallback = ({
  error,
  errorInfo,
  reset,
  labels,
}: {
  error: Error;
  errorInfo: ErrorInfo | null;
  reset: () => void;
  labels?: ErrorBoundaryLabels;
}) => {
  const { t } = useWimTranslation("common");
  const [showDetails, setShowDetails] = useState(false);

  const resolved: Required<ErrorBoundaryLabels> = {
    title: labels?.title ?? t("error.boundary_title"),
    retry: labels?.retry ?? t("error.boundary_retry"),
    showDetails: labels?.showDetails ?? t("error.boundary_show_details"),
    hideDetails: labels?.hideDetails ?? t("error.boundary_hide_details"),
  };

  return (
    <Box
      p="lg"
      radius="md"
      bg="var(--wim-color-danger-subtle)"
      className={`wim-error-boundary ${styles.fallback}`}
    >
      <Stack gap="md">
        <Alert
          intent="danger"
          title={resolved.title}
          description={error.message}
        />
        <Stack direction="row" gap="sm" wrap>
          <Button
            onClick={reset}
            variant="solid"
          >{resolved.retry}</Button>
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
          >{showDetails ? resolved.hideDetails : resolved.showDetails}</Button>
        </Stack>
        {showDetails && (
          <Box
            p="md"
            // 固定の黒 5% だったため dark テーマでは沈まなかった。面はトークンで
            // 取り、角丸は用途トークン（DESIGN.md 必須ルール 5）に従う。
            bg="surface-inset"
            radius="component"
            className={styles.details}
          >
            <code>
              {error.toString()}
              <br />
              {errorInfo?.componentStack}
            </code>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

/**
 * JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    this.props.onError?.(error, errorInfo);
    if (isDev) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  public reset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    this.props.onReset?.();
  };

  public render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback, labels } = this.props;

    if (hasError && error) {
      if (typeof fallback === "function") {
        return fallback(error, errorInfo, this.reset);
      }
      if (fallback) {
        return fallback;
      }

      return (
        <DefaultFallback
          error={error}
          errorInfo={errorInfo}
          reset={this.reset}
          labels={labels}
        />
      );
    }

    return children;
  }
}
