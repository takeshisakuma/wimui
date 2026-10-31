import { default as React } from '../../../../node_modules/react';
export interface GalleryItem {
    id: string;
    src: string;
    alt?: string;
    title?: string;
    caption?: string;
}
export interface GalleryProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onSelect"> {
    /** Images to display in the gallery */
    items: GalleryItem[];
    /** Number of grid columns. Default: 3. */
    columns?: number;
    /** Gap between items. Default: "md". */
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Aspect ratio for each image. Default: "square". */
    aspect?: "square" | "landscape" | "portrait" | "auto";
    /** Enable multi-select with checkboxes. The photo click is `onItemClick`, not select. */
    selectable?: boolean;
    /** Controlled selected IDs. */
    selected?: string[];
    /** Uncontrolled initial selected IDs. */
    defaultSelected?: string[];
    /** Called when selection changes. */
    onSelectionChange?: (ids: string[]) => void;
    /** Called when the item (not the checkbox) is clicked. Fires even when `selectable`. */
    onItemClick?: (item: GalleryItem, index: number) => void;
    /** Render bulk-action toolbar when items are selected. */
    renderActions?: (params: {
        selectedIds: string[];
        clearSelection: () => void;
    }) => React.ReactNode;
}
export declare const Gallery: React.ForwardRefExoticComponent<GalleryProps & React.RefAttributes<HTMLDivElement>>;
