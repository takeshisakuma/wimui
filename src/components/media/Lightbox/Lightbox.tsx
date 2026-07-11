import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { OverlayBase } from "../../_internal/OverlayBase";
import { Icon } from "../Icon/Icon";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, PlusIcon, MinusIcon } from "@/icon";
import styles from "./lightbox.module.scss";

// --- Types ---

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

// --- Context ---

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("Lightbox components must be used within Lightbox");
  }
  return context;
};

// --- Lightbox Root ---

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

export const Lightbox = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  defaultIndex = 0,
}: LightboxProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [items, setItems] = useState<LightboxItem[]>([]);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  const registerItem = useCallback((item: LightboxItem) => {
    let index = -1;
    setItems((prev) => {
      index = prev.length;
      return [...prev, item];
    });
    return index; // Note: This doesn't work perfectly for dynamic registration, but for static it's fine.
  }, []);

  const unregisterItem = useCallback((_index: number) => {
    // Basic implementation
  }, []);

  return (
    <LightboxContext.Provider
      value={{
        open,
        setOpen: handleOpenChange,
        currentIndex,
        setCurrentIndex,
        items,
        setItems,
        registerItem,
        unregisterItem,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

// --- Lightbox Trigger ---

export interface LightboxTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
  index?: number;
  src?: string;
  alt?: string;
  caption?: string;
}

export const LightboxTrigger = ({
  children,
  className,
  onClick,
  asChild = false,
  index,
  src,
  alt,
  caption,
  ...props
}: LightboxTriggerProps) => {
  const { setOpen, setCurrentIndex, items, setItems } = useLightbox();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    
    if (index !== undefined) {
      setCurrentIndex(index);
    } else if (src) {
      // If src is provided directly, we check if it exists or add it
      const existingIndex = items.findIndex((item) => item.src === src);
      if (existingIndex !== -1) {
        setCurrentIndex(existingIndex);
      } else {
        const newIndex = items.length;
        setItems((prev) => [...prev, { src, alt, caption }]);
        setCurrentIndex(newIndex);
      }
    }
    
    setOpen(true);
  };

  const Component = asChild ? Slot : "button";

  return (
    <Component
      type="button"
      className={classNames(styles.trigger, className)}
      onClick={handleClick}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Component>
  );
};

// --- Lightbox Content ---

export interface LightboxContentProps extends Partial<React.ComponentPropsWithoutRef<typeof OverlayBase>> {
  showCloseButton?: boolean;
  showNavigation?: boolean;
  showCounter?: boolean;
  closeOnOverlayClick?: boolean;
}

export const LightboxContent = ({
  className,
  showCloseButton = true,
  showNavigation = true,
  showCounter = true,
  closeOnOverlayClick = true,
  ...props
}: LightboxContentProps) => {
  const { open, setOpen, currentIndex, setCurrentIndex, items } = useLightbox();
  const { t } = useWimTranslation("components");
  const [zoom, setZoom] = useState(1);

  const handlePrev = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    setZoom(1);
  }, [currentIndex, items.length, setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % items.length);
    setZoom(1);
  }, [currentIndex, items.length, setCurrentIndex]);

  const toggleZoom = () => {
    setZoom((prev) => (prev === 1 ? 2 : 1));
  };

  // Keyboard Navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handlePrev, handleNext, setOpen]);

  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  return (
    <OverlayBase
      {...props}
      open={open}
      onOpenChange={setOpen}
      closeOnOverlayClick={closeOnOverlayClick}
      overlayClassName={styles.overlay}
      className={classNames("wim-lightbox", styles.contentRoot, className)}
      transitionProps={{
        preset: "fade", // Override default "scale" to avoid conflict
        enter: styles.contentEnter,
        enterFrom: styles.contentEnterFrom,
        enterTo: styles.contentEnterTo,
      }}
    >
      <div className={styles.container}>
        {/* Header/Controls */}
        <div className={styles.header}>
          {showCounter && items.length > 1 && (
            <div className={styles.counter}>
              {t("lightbox.counter", { current: currentIndex + 1, total: items.length })}
            </div>
          )}
          <div className={styles.controls}>
            <button className={styles.iconButton} onClick={toggleZoom} aria-label={zoom > 1 ? t("lightbox.zoom_out") : t("lightbox.zoom_in")}>
              {zoom > 1 ? <Icon component={MinusIcon} /> : <Icon component={PlusIcon} />}
            </button>
            {showCloseButton && (
              <button className={styles.iconButton} onClick={() => setOpen(false)} aria-label={t("lightbox.close")}>
                <Icon component={CloseIcon} />
              </button>
            )}
          </div>
        </div>

        {/* Main View */}
        <div className={styles.viewport}>
          {showNavigation && items.length > 1 && (
            <button
              className={classNames(styles.navButton, styles.prev)}
              onClick={handlePrev}
              aria-label={t("lightbox.previous")}
            >
              <Icon component={ChevronLeftIcon} />
            </button>
          )}

          <div className={styles.mediaWrapper} style={{ transform: `scale(${zoom})` }}>
            <img
              src={currentItem.src}
              alt={currentItem.alt || ""}
              className={styles.image}
            />
          </div>

          {showNavigation && items.length > 1 && (
            <button
              className={classNames(styles.navButton, styles.next)}
              onClick={handleNext}
              aria-label={t("lightbox.next")}
            >
              <Icon component={ChevronRightIcon} />
            </button>
          )}
        </div>

        {/* Caption */}
        {(currentItem.title || currentItem.caption) && (
          <div className={styles.footer}>
            {currentItem.title && <h3 className={styles.title}>{currentItem.title}</h3>}
            {currentItem.caption && <p className={styles.caption}>{currentItem.caption}</p>}
          </div>
        )}
      </div>
    </OverlayBase>
  );
};

// --- Lightbox Gallery ---
// Helper component to collect items

export interface LightboxGalleryProps {
  children: React.ReactNode;
  items: LightboxItem[];
}

export const LightboxGallery = ({ items, children }: LightboxGalleryProps) => {
  const { setItems } = useLightbox();

  useEffect(() => {
    setItems(items);
  }, [items, setItems]);

  return <div className={styles.gallery}>{children}</div>;
};

// --- Compound Export ---

export type { LightboxProps as LightboxRootProps };

export interface LightboxComponent extends React.FC<LightboxProps> {
  Trigger: typeof LightboxTrigger;
  Content: typeof LightboxContent;
  Gallery: typeof LightboxGallery;
}

export const LightboxRoot = Lightbox as unknown as LightboxComponent;

LightboxRoot.Trigger = LightboxTrigger;
LightboxRoot.Content = LightboxContent;
LightboxRoot.Gallery = LightboxGallery;

LightboxRoot.displayName = "Lightbox";
LightboxTrigger.displayName = "Lightbox.Trigger";
LightboxContent.displayName = "Lightbox.Content";
LightboxGallery.displayName = "Lightbox.Gallery";

export default LightboxRoot;
