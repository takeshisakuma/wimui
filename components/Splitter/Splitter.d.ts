import { default as React } from '../../../node_modules/react';
export interface SplitterProps extends React.ComponentPropsWithoutRef<"div"> {
    /** The orientation of the splitter. */
    orientation?: "horizontal" | "vertical";
    /** The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`. */
    children: React.ReactNode;
}
/**
 * Splitter component that allows resizing of multiple panels.
 */
declare const Splitter: ({ orientation, className, children, ...props }: SplitterProps) => import("react/jsx-runtime").JSX.Element;
export interface SplitterPanelProps extends React.ComponentPropsWithoutRef<"div"> {
    /** The default size of the panel in percentage. */
    defaultSize?: number;
    /** The minimum size of the panel in percentage. */
    minSize?: number;
    /** The maximum size of the panel in percentage. */
    maxSize?: number;
    /** @internal Injected size from parent Splitter. */
    size?: number;
}
declare const SplitterPanel: {
    ({ defaultSize, minSize, maxSize, size, style, className, children, ...props }: SplitterPanelProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface SplitterHandleProps extends React.ComponentPropsWithoutRef<"div"> {
    /** @internal Injected index from parent Splitter. */
    index?: number;
    /** @internal Injected active state from parent Splitter. */
    active?: boolean;
}
declare const SplitterHandle: {
    ({ index, active, className, ...props }: SplitterHandleProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SplitterRoot: typeof Splitter & {
    Panel: typeof SplitterPanel;
    Handle: typeof SplitterHandle;
};
export { SplitterRoot as Splitter };
export default SplitterRoot;
