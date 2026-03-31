import React, { Component, ErrorInfo, ReactNode, useState } from "react";
import { isDev } from "../../../utilities/dev-utils";
import { useTranslation } from "react-i18next";
import { Alert } from "../../feedback/Alert/Alert";
import { Button } from "../../form/Button/Button";
import { Stack } from "../../layout/Stack/Stack";
import { Box } from "../../layout/Box/Box";

export interface ErrorBoundaryProps {
  /** エラーが発生した時に表示されるコンポーネントまたは要素。
   * 関数が渡された場合は (error, errorInfo, reset) => ReactNode として呼び出されます。
   */
  fallback?:
  | ReactNode
  | ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode);
  /** エラーが発生した時に呼び出されるコールバック。 */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** エラーがリセットされた時に呼び出されるコールバック。 */
  onReset?: () => void;
  /** 子要素。 */
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * デフォルトのエラーフォールバックUIを表示するための機能コンポーネント。
 * エラー詳細の表示/非表示を切り替えるボタンと再試行ボタンを提供します。
 */
const DefaultFallback = ({
  error,
  errorInfo,
  reset,
}: {
  error: Error;
  errorInfo: ErrorInfo | null;
  reset: () => void;
}) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box
      p="lg"
      radius="md"
      bg="var(--wim-color-destructive-bg, #fff1f0)"
      className="wim-error-boundary-fallback"
      style={{ border: "1px solid var(--wim-color-destructive, #ff4d4f)" }}
    >
      <Stack gap="md">
        <Alert
          status="error"
          title={t("error.boundary_title")}
          description={error.message}
        />
        <Stack direction="row" gap="sm">
          <Button
            onClick={reset}
            label={t("error.boundary_retry")}
            variant="filled"
            size="sm"
          />
          <Button
            onClick={() => setShowDetails(!showDetails)}
            label={
              showDetails
                ? t("error.boundary_hide_details")
                : t("error.boundary_show_details")
            }
            variant="outlined"
            size="sm"
          />
        </Stack>
        {showDetails && (
          <Box
            p="md"
            bg="rgba(0, 0, 0, 0.05)"
            radius="sm"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              fontSize: "var(--wim-font-size-sm)",
              whiteSpace: "pre-wrap",
              fontFamily: "var(--font-family-mono, monospace)",
              wordBreak: "break-all",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
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
    const { children, fallback } = this.props;

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
        />
      );
    }

    return children;
  }
}
