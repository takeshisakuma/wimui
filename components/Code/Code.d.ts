import { default as React } from '../../../node_modules/react';
type CodeProps = {
    children: React.ReactNode;
    block?: boolean;
    language?: string;
    className?: string;
};
export declare const Code: ({ children, block, language, className }: CodeProps) => import("react/jsx-runtime").JSX.Element;
export {};
