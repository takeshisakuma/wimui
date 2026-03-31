export type TreemapProps = {
    data: Record<string, unknown>[];
    dataKey: string;
    aspectRatio?: number;
    height?: number;
    width?: string | number;
    title?: string;
};
export declare const Treemap: ({ data, dataKey, aspectRatio, height, width, title, }: TreemapProps) => import("react/jsx-runtime").JSX.Element;
