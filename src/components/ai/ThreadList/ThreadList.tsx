import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { PlusIcon, CloseIcon } from "@/icon";
import { useFocusHandoff } from "../../_internal/focusHandoff";
import styles from "./thread-list.module.scss";

/** A single conversation entry in the list. */
export type Thread = {
  /** Unique identifier of the thread */
  id: string;
  /** Title of the conversation */
  title: string;
  /** Short preview of the last message */
  preview?: string;
  /** Pre-formatted timestamp string shown on the right */
  timestamp?: string;
  /** Icon name shown before the title */
  iconName?: React.ComponentProps<typeof Icon>["name"];
  /** Whether the thread has unread activity (shows a dot) */
  unread?: boolean;
};

/** Labels for internationalization. */
export type ThreadListLabels = {
  /** Label of the new-conversation button */
  newThread?: string;
  /** Text shown when there are no threads */
  empty?: string;
  /** Accessible label for each delete button */
  delete?: string;
  /** Accessible label for the list */
  listAriaLabel?: string;
};

export interface ThreadListProps
  extends Omit<React.ComponentPropsWithoutRef<"nav">, "onSelect"> {
  /** Conversations to display, ordered newest first */
  threads: Thread[];
  /** Id of the currently active thread */
  activeId?: string;
  /** Callback when a thread is selected */
  onSelect?: (id: string) => void;
  /** Callback when a thread's delete button is clicked (shows the button when set) */
  onDelete?: (id: string) => void;
  /** Callback when the new-conversation button is clicked (shows the button when set) */
  onNewThread?: () => void;
  /** Labels for internationalization */
  labels?: ThreadListLabels;
  /** Additional class names */
  className?: string;
}

/**
 * ThreadList renders a conversation-history sidebar for AI chat apps — a
 * scrollable list of past threads with an optional "new conversation" action
 * and per-thread deletion. Pairs naturally with Sidebar and Drawer.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ThreadList = React.forwardRef<HTMLElement, ThreadListProps>(
  ({ threads, activeId, onSelect, onDelete, onNewThread, labels, className, ...props }, ref) => {
    const { t } = useWimTranslation(commonNs);
    const {
      newThread = t("threadList.new_thread"),
      empty = t("threadList.empty"),
      delete: deleteLabel = t("threadList.delete"),
      listAriaLabel = t("threadList.label"),
    } = labels ?? {};

    return (
      <nav
        ref={ref}
        className={classNames("wim-thread-list", styles.root, className)}
        aria-label={listAriaLabel}
        {...props}
      >
        {onNewThread && (
          <button type="button" className={styles.newButton} onClick={onNewThread}>
            <Icon component={PlusIcon} size="sm" />
            <span>{newThread}</span>
          </button>
        )}

        {threads.length === 0 ? (
          <p className={styles.empty}>{empty}</p>
        ) : (
          <ul className={styles.list}>
            {threads.map((thread) => (
              <ThreadItem
                key={thread.id}
                thread={thread}
                active={thread.id === activeId}
                deleteLabel={deleteLabel}
                onSelect={onSelect}
                onDelete={onDelete}
              />
            ))}
          </ul>
        )}
      </nav>
    );
  },
);

ThreadList.displayName = "ThreadList";

/**
 * 会話を消すのは使う側（onDelete）。削除ボタンにフォーカスを置いたまま行が外れると、
 * フォーカスは文書（body）へ落ちる（T402）。消えるときに、行の外の直前の停止点へ渡す。
 */
const ThreadItem = ({
  thread,
  active,
  deleteLabel,
  onSelect,
  onDelete,
}: {
  thread: Thread;
  active: boolean;
  deleteLabel: string;
  onSelect?: (id: string) => void;
  onDelete?: (id: string) => void;
}) => {
  const ref = React.useRef<HTMLLIElement>(null);
  useFocusHandoff(ref);

  return (
    <li ref={ref} className={styles.item}>
      <button
        type="button"
        className={classNames(styles.thread, active && styles.active)}
        aria-current={active || undefined}
        onClick={() => onSelect?.(thread.id)}
      >
        {thread.iconName && (
          <span className={styles.icon} aria-hidden="true">
            <Icon name={thread.iconName} size="sm" />
          </span>
        )}
        <span className={styles.body}>
          <span className={styles.titleRow}>
            {thread.unread && <span className={styles.unread} aria-hidden="true" />}
            <span className={styles.title}>{thread.title}</span>
            {thread.timestamp && <span className={styles.timestamp}>{thread.timestamp}</span>}
          </span>
          {thread.preview && <span className={styles.preview}>{thread.preview}</span>}
        </span>
      </button>
      {onDelete && (
        <button
          type="button"
          className={styles.deleteButton}
          aria-label={deleteLabel}
          onClick={() => onDelete(thread.id)}
        >
          <Icon component={CloseIcon} size="sm" />
        </button>
      )}
    </li>
  );
};

/** Alias of {@link ThreadList} for apps that prefer the "conversation" vocabulary. */
export const ConversationList = ThreadList;
