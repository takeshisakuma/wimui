import { default as React, Component, ErrorInfo, ReactNode } from '../../../../node_modules/react';
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
    fallback?: ReactNode | ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode);
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
 * JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。
 */
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    state: State;
    static getDerivedStateFromError(error: Error): Partial<State>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    reset: () => void;
    render(): string | number | bigint | boolean | React.JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
}
export {};
