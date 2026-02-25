import React, { Component, ErrorInfo, ReactNode } from "react";

export interface ErrorBoundaryProps {
  /** The content that might throw an error */
  children?: ReactNode;
  /**
   * The fallback UI to display when an error occurs.
   * Can be a React node or a function that receives the error and info.
   */
  fallback?:
    | ReactNode
    | ((error: Error, errorInfo: ErrorInfo, reset: () => void) => ReactNode);
  /** Callback fired when an error is caught */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Callback fired when the error boundary is reset */
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * A standard React Error Boundary component that catches JavaScript errors
 * anywhere in its child component tree and displays a fallback UI.
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
    console.error("ErrorBoundary caught an error:", error, errorInfo);
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
        return fallback(error, errorInfo!, this.reset);
      }
      return (
        fallback || (
          <div
            role="alert"
            style={{
              padding: "20px",
              border: "1px solid red",
              borderRadius: "8px",
              background: "#fff5f5",
            }}
          >
            <h2 style={{ color: "red", marginTop: 0 }}>
              Something went wrong.
            </h2>
            <details style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
              {error.toString()}
              <br />
              {errorInfo?.componentStack}
            </details>
            <button
              onClick={this.reset}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return children;
  }
}
