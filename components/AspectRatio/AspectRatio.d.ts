import { default as React } from '../../../node_modules/react';
export type AspectRatioProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * アスペクト比 (例: 16 / 9, 1, 4 / 3)
     */
    ratio?: number;
    /**
     * 子要素
     */
    children: React.ReactNode;
};
/**
 * `AspectRatio` は、指定したアスペクト比を維持しながらコンテンツを表示するためのコンテナです。
 */
export declare const AspectRatio: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * アスペクト比 (例: 16 / 9, 1, 4 / 3)
     */
    ratio?: number;
    /**
     * 子要素
     */
    children: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
