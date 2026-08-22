import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
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
export interface ThreadListProps extends Omit<React.ComponentPropsWithoutRef<"nav">, "onSelect"> {
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
export declare const ThreadList: React.ForwardRefExoticComponent<ThreadListProps & React.RefAttributes<HTMLElement>>;
/** Alias of {@link ThreadList} for apps that prefer the "conversation" vocabulary. */
export declare const ConversationList: React.ForwardRefExoticComponent<ThreadListProps & React.RefAttributes<HTMLElement>>;
