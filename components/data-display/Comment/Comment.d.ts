import { default as React } from '../../../../node_modules/react';
/** Who wrote the comment. */
export type CommentAuthor = {
    /** Display name. Also names the comment for assistive tech. */
    name: string;
    /** Avatar image URL. */
    avatarSrc?: string;
    /** Initials shown when there is no avatar image. */
    initials?: string;
    /** Optional marker next to the name — "Author", "Moderator", a `Tag`, etc. */
    badge?: React.ReactNode;
};
export type CommentProps = Omit<React.ComponentPropsWithoutRef<"article">, "id" | "children"> & {
    /**
     * Identifies this comment. The `replyingTo` / `editingId` props are compared
     * against it, and the callbacks pass it back.
     */
    id: string;
    /** Who wrote it. */
    author: CommentAuthor;
    /**
     * When it was written. Pass a `RelativeTime`, or any node — this component
     * does not format dates, because the surrounding page decides whether
     * "3 hours ago" or an absolute date is the useful thing to read.
     */
    timestamp?: React.ReactNode;
    /** The comment itself. Any node — Markdown, mentions, attachments. */
    children?: React.ReactNode;
    /**
     * Nested replies: `Comment` elements. The nesting is drawn as a list, so
     * assistive tech reads the depth rather than inferring it from indentation.
     */
    replies?: React.ReactNode;
    /**
     * Marks the comment as changed since it was posted. A comment that was
     * silently rewritten reads as if it always said the new thing.
     * @default false
     */
    edited?: boolean;
    /**
     * Id of the comment whose reply box is open. When it equals `id`, `composer`
     * is rendered below this comment.
     */
    replyingTo?: string;
    /**
     * Id of the comment being edited. When it equals `id`, `editor` replaces the
     * body rather than appearing alongside it.
     */
    editingId?: string;
    /** The reply box. Rendered only while `replyingTo` equals `id`. */
    composer?: React.ReactNode;
    /** The edit form. Rendered only while `editingId` equals `id`. */
    editor?: React.ReactNode;
    /** Shows a Reply button when set. */
    onReply?: (id: string) => void;
    /** Shows an Edit button when set. */
    onEdit?: (id: string) => void;
    /** Shows a Delete button when set. */
    onDelete?: (id: string) => void;
    /** Extra actions, placed after the built-in ones. */
    actions?: React.ReactNode;
    /** Additional class names */
    className?: string;
};
/**
 * Comment renders one comment in a discussion — the author, when it was
 * written, the text, the actions on it, and any replies nested underneath.
 *
 * **The reply box and the edit form are slots, not state.** Which one is open
 * is passed in (`replyingTo` / `editingId`) and the form itself is passed in
 * (`composer` / `editor`), so the surrounding app keeps ownership of drafts,
 * validation, and submission — the parts that differ in every product. What
 * this component owns is the part that is the same everywhere and easy to get
 * wrong: the heading structure, the nesting semantics, and the fact that an
 * edited comment says so.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const Comment: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref">, "id" | "children"> & {
    /**
     * Identifies this comment. The `replyingTo` / `editingId` props are compared
     * against it, and the callbacks pass it back.
     */
    id: string;
    /** Who wrote it. */
    author: CommentAuthor;
    /**
     * When it was written. Pass a `RelativeTime`, or any node — this component
     * does not format dates, because the surrounding page decides whether
     * "3 hours ago" or an absolute date is the useful thing to read.
     */
    timestamp?: React.ReactNode;
    /** The comment itself. Any node — Markdown, mentions, attachments. */
    children?: React.ReactNode;
    /**
     * Nested replies: `Comment` elements. The nesting is drawn as a list, so
     * assistive tech reads the depth rather than inferring it from indentation.
     */
    replies?: React.ReactNode;
    /**
     * Marks the comment as changed since it was posted. A comment that was
     * silently rewritten reads as if it always said the new thing.
     * @default false
     */
    edited?: boolean;
    /**
     * Id of the comment whose reply box is open. When it equals `id`, `composer`
     * is rendered below this comment.
     */
    replyingTo?: string;
    /**
     * Id of the comment being edited. When it equals `id`, `editor` replaces the
     * body rather than appearing alongside it.
     */
    editingId?: string;
    /** The reply box. Rendered only while `replyingTo` equals `id`. */
    composer?: React.ReactNode;
    /** The edit form. Rendered only while `editingId` equals `id`. */
    editor?: React.ReactNode;
    /** Shows a Reply button when set. */
    onReply?: (id: string) => void;
    /** Shows an Edit button when set. */
    onEdit?: (id: string) => void;
    /** Shows a Delete button when set. */
    onDelete?: (id: string) => void;
    /** Extra actions, placed after the built-in ones. */
    actions?: React.ReactNode;
    /** Additional class names */
    className?: string;
} & React.RefAttributes<HTMLElement>>;
