import { default as React } from '../../../../node_modules/react';
export interface CodeProps extends Omit<React.HTMLAttributes<HTMLElement>, "content"> {
    /**
     * If true, the code will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Code to display. Ignored when `code` is set (unless asChild is true).
     */
    children?: React.ReactNode;
    /**
     * Code string to display. Takes precedence over children.
     */
    code?: string;
    /**
     * If true, renders as a block (`<pre>`) instead of inline.
     * @default false
     */
    block?: boolean;
    /**
     * Language identifier appended as a `language-<lang>` class for syntax highlighters.
     */
    language?: string;
}
export declare const Code: React.ForwardRefExoticComponent<CodeProps & React.RefAttributes<HTMLElement>>;
