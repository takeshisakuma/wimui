import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import classNames from "classnames";
import { Portal } from "../Portal/Portal";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { BaseListItem } from "../_internal/BaseListItem";
import "./commandPalette.scss";

// --- Context ---
type CommandPaletteContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  registerItem: () => number;
  unregisterItem: () => void;
  isKeyboardNavigating: boolean;
  setIsKeyboardNavigating: (is: boolean) => void;
};

const CommandPaletteContext = createContext<
  CommandPaletteContextType | undefined
>(undefined);

const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext);
  if (!context) {
    throw new Error(
      "CommandPalette sub-components must be used within a CommandPalette",
    );
  }
  return context;
};

// --- CommandPalette Root (Provider) ---
export interface CommandPaletteProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const CommandPalette = ({
  children,
  open: controlledOpen,
  onOpenChange,
}: CommandPaletteProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);
  const itemCountRef = useRef(0);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
      if (!newOpen) {
        setSearch("");
        setActiveIndex(0);
      }
    },
    [isControlled, onOpenChange],
  );

  const registerItem = useCallback(() => {
    const index = itemCountRef.current;
    itemCountRef.current += 1;
    return index;
  }, []);

  const unregisterItem = useCallback(() => {
    itemCountRef.current -= 1;
  }, []);

  // Reset item count on each render to handle dynamic lists
  // eslint-disable-next-line react-hooks/refs
  itemCountRef.current = 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsKeyboardNavigating(true);
        handleOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        handleOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleOpenChange]);

  const contextValue = React.useMemo(
    () => ({
      open,
      onOpenChange: handleOpenChange,
      search,
      setSearch,
      activeIndex,
      setActiveIndex,
      registerItem,
      unregisterItem,
      isKeyboardNavigating,
      setIsKeyboardNavigating,
    }),
    [open, handleOpenChange, search, activeIndex, registerItem, unregisterItem, isKeyboardNavigating],
  );

  return (
    <CommandPaletteContext.Provider value={contextValue}>
      {children}
    </CommandPaletteContext.Provider>
  );
};

// --- CommandPalette Trigger ---
export interface CommandPaletteTriggerProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const CommandPaletteTrigger = ({
  children,
  asChild,
  className,
}: CommandPaletteTriggerProps) => {
  const { onOpenChange, setIsKeyboardNavigating } = useCommandPalette();

  const handleClick = (e: React.MouseEvent) => {
    // e.detail is 0 when triggered via keyboard (Enter/Space)
    setIsKeyboardNavigating(e.detail === 0);
    onOpenChange(true);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{
        onClick?: React.MouseEventHandler;
        className?: string;
      }>,
      {
        onClick: (e: React.MouseEvent) => {
          const child = children as React.ReactElement<{
            onClick?: React.MouseEventHandler;
          }>;
          child.props.onClick?.(e);
          handleClick(e);
        },
        className: classNames(
          className,
          (children as React.ReactElement<{ className?: string }>).props
            .className,
        ),
      },
    );
  }

  return (
    <button
      className={classNames("wim-command-palette-trigger", className)}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsKeyboardNavigating(true);
        }
      }}
    >
      {children}
    </button>
  );
};

// --- CommandPalette Content (Modal) ---
export interface CommandPaletteContentProps {
  children: ReactNode;
  className?: string;
}

export const CommandPaletteContent = ({
  children,
  className,
}: CommandPaletteContentProps) => {
  const { open, onOpenChange, activeIndex, setActiveIndex, isKeyboardNavigating, setIsKeyboardNavigating } = useCommandPalette();
    const mousePosRef = useRef<{ x: number; y: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!mousePosRef.current) {
        mousePosRef.current = { x: e.clientX, y: e.clientY };
        return;
      }

      // Avoid accidental reset if the mouse hasn't really moved (prevent noise/auto-events)
      const dist = Math.sqrt(
        Math.pow(e.clientX - mousePosRef.current.x, 2) +
          Math.pow(e.clientY - mousePosRef.current.y, 2),
      );
      if (dist > 10) {
        setIsKeyboardNavigating(false);
      }
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    return (
      <Portal>
        <Transition
          show={open}
          enter="fade-enter"
          enterFrom="fade-enter-from"
          enterTo="fade-enter-to"
          leave="fade-leave"
          leaveFrom="fade-leave-from"
          leaveTo="fade-leave-to"
        >
          <div
            role="presentation"
            className="wim-command-palette-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onOpenChange(false);
              }
            }}
          >
            <Transition
              show={open}
              enter="scale-enter"
              enterFrom="scale-enter-from"
              enterTo="scale-enter-to"
              leave="scale-leave"
              leaveFrom="scale-leave-from"
              leaveTo="scale-leave-to"
            >
              <FocusTrap active={open}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <div
                  role="dialog"
                  aria-modal="true"
                  className={classNames("wim-command-palette-content", className)}
                  onClick={(e) => e.stopPropagation()}
                  onMouseMove={handleMouseMove}
                  data-keyboard-nav={isKeyboardNavigating}
                  onKeyDown={(e) => {
                    setIsKeyboardNavigating(true);
                    
                    // Query items in the DOM to get the most accurate count
                    const items = e.currentTarget.querySelectorAll('.wim-command-palette-item:not(.wim-base-list-item--disabled)');
                    const itemCount = items.length;
                    
                    if (itemCount === 0) return;

                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setActiveIndex((prev) => (prev + 1) % itemCount);
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setActiveIndex(
                        (prev) => (prev - 1 + itemCount) % itemCount,
                      );
                    } else if (e.key === "Home") {
                      e.preventDefault();
                      setActiveIndex(0);
                    } else if (e.key === "End") {
                      e.preventDefault();
                      setActiveIndex(itemCount - 1);
                    } else if (e.key === "Enter") {
                      e.preventDefault();
                      const activeElement = document.getElementById(`wim-command-palette-item-${activeIndex}`) as HTMLElement;
                      activeElement?.click();
                    }
                  }}
                >
                  {children}
                </div>
              </FocusTrap>
            </Transition>
          </div>
        </Transition>
      </Portal>
    );
  };

// --- Input ---
export interface CommandPaletteInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rightSection?: ReactNode;
}

export const CommandPaletteInput = ({
  placeholder = "Search commands...",
  value,
  onChange,
  rightSection,
}: CommandPaletteInputProps) => {
  const { search, setSearch, setActiveIndex, activeIndex } =
    useCommandPalette();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    setActiveIndex(0); // Reset selection on search
    onChange?.(val);
  };

  return (
    <div className="wim-command-palette-input-wrapper">
      <Icon name="SearchIcon" size="sm" />
      <input
        className="wim-command-palette-input"
        placeholder={placeholder}
        value={value ?? search}
        onChange={handleChange}
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={true}
        aria-controls="wim-command-palette-listbox"
        aria-activedescendant={`wim-command-palette-item-${activeIndex}`}
      />
      {rightSection && (
        <div className="wim-command-palette-input-right">
          {rightSection}
        </div>
      )}
    </div>
  );
};

// --- List ---
export const CommandPaletteList = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="wim-command-palette-list"
      role="listbox"
      id="wim-command-palette-listbox"
    >
      {children}
    </div>
  );
};

// --- Group ---
export const CommandPaletteGroup = ({
  children,
  heading,
}: {
  children: ReactNode;
  heading?: string;
}) => {
  return (
    <div className="wim-command-palette-group">
      {heading && (
        <div className="wim-command-palette-group-heading">{heading}</div>
      )}
      {children}
    </div>
  );
};

// --- Item ---
export interface CommandPaletteItemProps {
  children: ReactNode;
  onSelect?: () => void;
  icon?: ReactNode;
  shortcut?: string[];
  disabled?: boolean;
}

export const CommandPaletteItem = ({
  children,
  onSelect,
  icon,
  shortcut,
  disabled,
}: CommandPaletteItemProps) => {
  const { activeIndex, setActiveIndex, registerItem, onOpenChange } =
    useCommandPalette();
  const [index] = useState(() => registerItem());

  const isActive = activeIndex === index;

  useEffect(() => {
    if (isActive && !disabled) {
      // Ensure active item is scrolled into view
      const element = document.getElementById(`wim-command-palette-item-${index}`);
      element?.scrollIntoView({ block: "nearest" });
    }
  }, [isActive, disabled, index]);

  return (
    <BaseListItem
      role="option"
      id={`wim-command-palette-item-${index}`}
      aria-selected={isActive}
      className="wim-command-palette-item"
      active={isActive}
      disabled={disabled}
      icon={icon}
      rightSection={
        shortcut && (
          <div className="wim-command-palette-item-shortcut">
            {shortcut.map((s) => (
              <kbd key={s} className="wim-kbd wim-kbd--sm">
                {s}
              </kbd>
            ))}
          </div>
        )
      }
      onMouseEnter={() => !disabled && setActiveIndex(index)}
      onClick={() => {
        if (!disabled) {
          onSelect?.();
          onOpenChange(false);
        }
      }}
    >
      {children}
    </BaseListItem>
  );
};

// --- Empty ---
export const CommandPaletteEmpty = ({
  children = "No results found.",
}: {
  children?: ReactNode;
}) => {
  const { open, search } = useCommandPalette();
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (open) {
      // Small delay to allow items to register/render
      const timer = setTimeout(() => {
        const items = document.querySelectorAll(".wim-command-palette-item");
        setIsEmpty(items.length === 0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [open, search]);

  if (!open || !isEmpty) return null;
  return <div className="wim-command-palette-empty">{children}</div>;
};

// --- Footer ---
export const CommandPaletteFooter = ({ children }: { children: ReactNode }) => {
  return <div className="wim-command-palette-footer">{children}</div>;
};
