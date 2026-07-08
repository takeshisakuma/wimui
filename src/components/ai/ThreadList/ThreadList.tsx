import React from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { PlusIcon, CloseIcon } from "@/icon";
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
    const {
      newThread = "New conversation",
      empty = "No conversations yet",
      delete: deleteLabel = "Delete conversation",
      listAriaLabel = "Conversation history",
    } = labels ?? {};

    return (
      <nav
        ref={ref}
        className={classNames(styles.root, className)}
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
            {threads.map((thread) => {
              const isActive = thread.id === activeId;
              return (
                <li key={thread.id} className={styles.item}>
                  <button
                    type="button"
                    className={classNames(styles.thread, isActive && styles.active)}
                    aria-current={isActive || undefined}
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
                        {thread.timestamp && (
                          <span className={styles.timestamp}>{thread.timestamp}</span>
                        )}
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
            })}
          </ul>
        )}
      </nav>
    );
  },
);

ThreadList.displayName = "ThreadList";

/** Alias of {@link ThreadList} for apps that prefer the "conversation" vocabulary. */
export const ConversationList = ThreadList;
