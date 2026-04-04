import { default as React } from '../../../../node_modules/react';
import { ComponentSize } from '../../../types/tokens';
export type CardProps<C extends React.ElementType = "div"> = {
    /**
     * カードのバリアント
     */
    variant?: "elevated" | "outline" | "flat";
    /**
     * パディングのサイズ
     */
    padding?: ComponentSize | "none";
    /**
     * 角丸のサイズ
     */
    radius?: ComponentSize | "none";
    /**
     * レンダリングするHTML要素
     */
    as?: C;
} & React.ComponentPropsWithoutRef<C>;
/**
 * `Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。
 */
export declare const Card: {
    <C extends React.ElementType = "div">({ variant, padding, radius, as, className, children, ...props }: CardProps<C>): import("react/jsx-runtime").JSX.Element;
    Header: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Body: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export declare const CardHeader: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const CardBody: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const CardFooter: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
