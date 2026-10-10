import { default as React } from '../../../../node_modules/react';
import { OverlayBase } from '../../_internal/OverlayBase';
export interface LightboxItem {
    src: string;
    alt?: string;
    caption?: string;
    title?: string;
}
interface LightboxContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
    currentIndex: number;
    setCurrentIndex: (index: number | ((prev: number) => number)) => void;
    items: LightboxItem[];
    setItems: React.Dispatch<React.SetStateAction<LightboxItem[]>>;
    registerItem: (item: LightboxItem) => number;
    unregisterItem: (index: number) => void;
}
export declare const useLightbox: () => LightboxContextType;
export interface LightboxProps {
    /** Lightbox parts (Lightbox.Trigger, Lightbox.Content, etc.) */
    children: React.ReactNode;
    /** Controlled open state */
    open?: boolean;
    /** Callback when the open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Initial open state for uncontrolled usage */
    defaultOpen?: boolean;
    /** Index of the item shown first */
    defaultIndex?: number;
}
export declare const Lightbox: ({ children, open: controlledOpen, onOpenChange, defaultOpen, defaultIndex, }: LightboxProps) => React.JSX.Element;
export interface LightboxTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
    index?: number;
    src?: string;
    /**
     * Description of the image this opens. Also becomes the button's accessible
     * name when no `aria-label` is given.
     */
    alt?: string;
    caption?: string;
}
export declare const LightboxTrigger: {
    ({ children, className, onClick, asChild, index, src, alt, caption, ...props }: LightboxTriggerProps): React.JSX.Element;
    displayName: string;
};
export interface LightboxContentProps extends Partial<React.ComponentPropsWithoutRef<typeof OverlayBase>> {
    showCloseButton?: boolean;
    showNavigation?: boolean;
    showCounter?: boolean;
    closeOnOverlayClick?: boolean;
}
export declare const LightboxContent: {
    ({ className, showCloseButton, showNavigation, showCounter, closeOnOverlayClick, ...props }: LightboxContentProps): React.JSX.Element | null;
    displayName: string;
};
export interface LightboxGalleryProps {
    /** Thumbnails for the strip (`Lightbox.Trigger`). Not a `Gallery` grid. */
    children: React.ReactNode;
    /** Items registered on the Lightbox for the overlay. */
    items: LightboxItem[];
}
/**
 * Thumbnail strip that registers `items` on the Lightbox context.
 *
 * Composition Contract:
 * - Registers `items` for `Lightbox.Content`; does not render the overlay
 * - Children are a centered wrapping flex row (column below `sm`)
 * - Intended children: `Lightbox.Trigger` (and similar thumbnails)
 * - Do not wrap `Gallery` here — the grid becomes one centered flex item and
 *   stacks on small widths. Register items with `null` children and render
 *   `Gallery` as a sibling
 */
export declare const LightboxGallery: {
    ({ items, children }: LightboxGalleryProps): React.JSX.Element;
    displayName: string;
};
export type { LightboxProps as LightboxRootProps };
export interface LightboxComponent extends React.FC<LightboxProps> {
    Trigger: typeof LightboxTrigger;
    Content: typeof LightboxContent;
    Gallery: typeof LightboxGallery;
}
export declare const LightboxRoot: LightboxComponent;
export default LightboxRoot;
