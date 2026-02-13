import { default as React, Component, ErrorInfo, ReactNode } from '../../../node_modules/react';
export interface ErrorBoundaryProps {
    /** The content that might throw an error */
    children?: ReactNode;
    /**
     * The fallback UI to display when an error occurs.
     * Can be a React node or a function that receives the error and info.
     */
    fallback?: ReactNode | ((error: Error, errorInfo: ErrorInfo, reset: () => void) => ReactNode);
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
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    state: State;
    static getDerivedStateFromError(error: Error): Partial<State>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    reset: () => void;
    render(): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
}
export {};
