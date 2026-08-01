import React from "react";
import classNames from "classnames";

import { Button } from "../Button/Button";
import { Icon } from "../../media/Icon/Icon";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "../../overlay/Dropdown/Dropdown";
import { ButtonIntent } from "../../../types/generated-intents";
import { ButtonVariant, ComponentSizeBasic } from "../../../types/tokens";
import styles from "./split-button.module.scss";

export type SplitButtonAction = {
  /** Text shown in the menu. */
  label: React.ReactNode;
  /** Called when the entry is chosen. */
  onSelect?: () => void;
  /** Icon shown before the label. */
  icon?: React.ReactNode;
  /** Whether the entry is unavailable. */
  disabled?: boolean;
};

export type SplitButtonProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "onSelect" | "children"
> & {
  /** Text of the main action. */
  children?: React.ReactNode;
  /** Called when the main action is pressed. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Secondary actions listed behind the toggle. */
  actions: SplitButtonAction[];
  /** Visual style, applied to both halves so they read as one control. */
  variant?: ButtonVariant;
  /** Intent (semantic color), applied to both halves. */
  intent?: ButtonIntent;
  /** Size of both halves. */
  size?: ComponentSizeBasic;
  /** Disable the whole control. */
  disabled?: boolean;
  /** Show a loading state on the main action. */
  loading?: boolean;
  /**
   * Accessible name for the toggle half. The main half is named by its own text,
   * but the toggle only shows a chevron, so it needs one of its own.
   */
  toggleLabel: string;
};

/**
 * A main action with a menu of related actions behind a toggle.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 *
 * `ButtonGroup` + `Dropdown` で組める形ではあるが、**組み方に落とし穴がある**ので
 * 部品にした（T47 ②）。落とし穴は 2 つ:
 *
 *   1. **トグル側にアクセシブル名が無くなる**。矢印しか描かないので、
 *      名前を与えないと `button` が無名になる。`toggleLabel` を必須にして
 *      型で防ぐ（T53 で `Progress` に入れたのと同じ考え方）
 *   2. **2 つのボタンが 1 つのコントロールに見えない**。角丸と枠が二重になるので、
 *      隣り合う辺の角丸を落とし、境界の枠を 1 本に見せる必要がある
 *
 * 主ボタンとトグルは同じ `variant` / `intent` / `size` を受け取る。片方だけ
 * 変えられると「1 つのコントロール」という前提が崩れるため、個別指定は持たない。
 */
export const SplitButton = React.forwardRef<HTMLDivElement, SplitButtonProps>(
  (
    {
      children,
      onClick,
      actions,
      variant = "solid",
      intent = "default",
      size = "md",
      disabled = false,
      loading = false,
      toggleLabel,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames("wim-split-button", styles.root, styles[size], className)}
        {...props}
      >
        <Button
          className={styles.main}
          variant={variant}
          intent={intent}
          size={size}
          disabled={disabled}
          loading={loading}
          onClick={onClick}
        >
          {children}
        </Button>

        <Dropdown>
          <DropdownTrigger asChild>
            <Button
              className={styles.toggle}
              variant={variant}
              intent={intent}
              size={size}
              disabled={disabled}
              aria-label={toggleLabel}
            >
              <Icon name="ChevronDownIcon" className={styles.chevron} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {actions.map((action, index) => (
              <DropdownItem
                key={index}
                disabled={action.disabled}
                onClick={action.onSelect}
              >
                {action.icon && <span className={styles.itemIcon}>{action.icon}</span>}
                {action.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  },
);

SplitButton.displayName = "SplitButton";
