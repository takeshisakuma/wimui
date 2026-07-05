import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { ComponentSizeBasic } from "../../../types/tokens";
import { PlusIcon } from "../../../icon";
import styles from "./reaction.module.scss";

export type ReactionItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
  count: number;
  active?: boolean;
};

export type ReactionProps = React.ComponentPropsWithoutRef<"div"> & {
  /** リアクション一覧 */
  reactions: ReactionItem[];
  /** リアクション追加/取り消し時のコールバック */
  onReact?: (emoji: string, active: boolean) => void;
  /** 追加ボタンを表示するか */
  showAddButton?: boolean;
  /** 追加ボタンクリック時のコールバック */
  onAdd?: () => void;
  /** サイズ */
  size?: ComponentSizeBasic;
  /** 無効化 */
  disabled?: boolean;
};

/**
 * 絵文字リアクションを表示・操作するコンポーネント。
 */
export const Reaction = React.forwardRef<HTMLDivElement, ReactionProps>(
  (
    {
      reactions,
      onReact,
      showAddButton = false,
      onAdd,
      size = "md",
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");

    return (
      <div
        ref={ref}
        role="group"
        aria-label={t("reaction.aria_label")}
        className={classNames(styles.root, styles[size], className)}
        {...props}
      >
        {reactions.map((item) => (
          <button
            key={item.id}
            type="button"
            disabled={disabled}
            aria-pressed={item.active ?? false}
            aria-label={t("reaction.react_with", {
              emoji: item.label,
              count: item.count,
            })}
            className={classNames(styles.item, item.active && styles.active)}
            onClick={() => onReact?.(item.id, !item.active)}
          >
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <span className={styles.count}>{item.count}</span>
          </button>
        ))}
        {showAddButton && (
          <button
            type="button"
            disabled={disabled}
            aria-label={t("reaction.add_reaction")}
            className={classNames(styles.item, styles.addButton)}
            onClick={onAdd}
          >
            <PlusIcon className={styles.addIcon} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  },
);

Reaction.displayName = "Reaction";
