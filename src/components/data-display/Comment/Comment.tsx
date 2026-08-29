import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Avatar } from "../Avatar/Avatar";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import styles from "./comment.module.scss";

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

export type CommentProps = Omit<
  React.ComponentPropsWithoutRef<"article">,
  "id" | "children"
> & {
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

/** 組み込みの操作。ラベルは内蔵ロケールから引く（`common.comment.*`）。 */
type BuiltInAction = "reply" | "edit" | "delete";

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
export const Comment = React.forwardRef<HTMLElement, CommentProps>(
  (
    {
      id,
      author,
      timestamp,
      children,
      replies,
      edited = false,
      replyingTo,
      editingId,
      composer,
      editor,
      onReply,
      onEdit,
      onDelete,
      actions,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
    const headerId = `${id}-author`;
    const isEditing = editingId !== undefined && editingId === id;
    const isReplying = replyingTo !== undefined && replyingTo === id;

    const handlers: Record<BuiltInAction, ((id: string) => void) | undefined> = {
      reply: onReply,
      edit: onEdit,
      delete: onDelete,
    };
    const shown = (["reply", "edit", "delete"] as const).filter(
      (action) => handlers[action] !== undefined,
    );

    return (
      <article
        ref={ref}
        // **名前は著者名から作る。** `aria-label` に固定の文字列を置くと、
        // 一覧を読み上げたときに同じ名前の article が並ぶだけになる。
        aria-labelledby={headerId}
        className={classNames("wim-comment", styles.root, className)}
        {...props}
      >
        <div className={styles.head}>
          <Avatar
            src={author.avatarSrc}
            initials={author.initials}
            size="sm"
            /* 名前は見出しに出ているので、画像は装飾として扱う ── alt を付けると
               支援技術が同じ名前を 2 回読む。 */
            alt=""
            aria-hidden="true"
          />
          <div className={styles.meta}>
            <span id={headerId} className={styles.author}>
              {author.name}
            </span>
            {author.badge && <span className={styles.badge}>{author.badge}</span>}
            {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
            {edited && (
              <span className={styles.edited}>{t("comment.edited")}</span>
            )}
          </div>
        </div>

        {/* 編集中は本文を差し替える。両方出すと、どちらが本物か分からなくなる。 */}
        <div className={styles.body}>{isEditing ? editor : children}</div>

        {(shown.length > 0 || actions) && (
          <div className={styles.actions}>
            {shown.map((action) => (
              <button
                key={action}
                type="button"
                className={styles.action}
                onClick={() => handlers[action]?.(id)}
              >
                {t(`comment.${action}`)}
                {/* **どのコメントへの操作かを名前に入れる。** 「返信」だけが
                    並ぶと、読み上げでは区別が付かない。 */}
                <VisuallyHidden>
                  {" "}
                  {t("comment.action_context", { name: author.name })}
                </VisuallyHidden>
              </button>
            ))}
            {actions}
          </div>
        )}

        {isReplying && composer && (
          <div className={styles.composer}>{composer}</div>
        )}

        {/* **入れ子は list で表す。** 字下げは目にしか届かないので、深さを
            支援技術へ渡すには入れ子のリストが要る。 */}
        {replies && (
          <ul className={styles.replies}>
            {React.Children.map(replies, (reply, index) => (
              <li key={index} className={styles.reply}>
                {reply}
              </li>
            ))}
          </ul>
        )}
      </article>
    );
  },
);

Comment.displayName = "Comment";
