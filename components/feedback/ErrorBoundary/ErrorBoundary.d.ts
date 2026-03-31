import { default as React, Component, ErrorInfo, ReactNode } from '../../../../node_modules/react';
export interface ErrorBoundaryProps {
    /** エラーが発生した時に表示されるコンポーネントまたは要素。
     * 関数が渡された場合は (error, errorInfo, reset) => ReactNode として呼び出されます。
     */
    fallback?: ReactNode | ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode);
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
 * JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。
 */
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    state: State;
    static getDerivedStateFromError(error: Error): Partial<State>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    reset: () => void;
    render(): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
}
export {};
