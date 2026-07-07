import React, { Component, ErrorInfo, ReactNode, useState } from "react";
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

const DEFAULT_LABELS: Required<ErrorBoundaryLabels> = {
  title: "Something went wrong",
  retry: "Retry",
  showDetails: "Show details",
  hideDetails: "Hide details",
};

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
  labels: Required<ErrorBoundaryLabels>;
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box
      p="lg"
      radius="md"
      bg="var(--wim-color-destructive-subtle)"
      className={styles.fallback}
    >
      <Stack gap="md">
        <Alert
          intent="error"
          title={labels.title}
          description={error.message}
        />
        <Stack direction="row" gap="sm" wrap>
          <Button
            onClick={reset}
            variant="solid"
          >{labels.retry}</Button>
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
          >{showDetails ? labels.hideDetails : labels.showDetails}</Button>
        </Stack>
        {showDetails && (
          <Box
            p="md"
            bg="rgba(0, 0, 0, 0.05)"
            radius="sm"
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
          labels={{ ...DEFAULT_LABELS, ...labels }}
        />
      );
    }

    return children;
  }
}
