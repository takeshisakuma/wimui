import React, { forwardRef, useId } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { formNs } from "@/i18n/generated/form";
import { ComponentSizeBasic, FeedbackIntent } from "../../../types/tokens";
import { Icon } from "../../media/Icon/Icon";
import type { AgentStatusValue } from "../AgentStatus/AgentStatus";
import {
  SendIcon,
  PaperclipIcon,
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckIcon,
  ChevronRightIcon,
  HourglassIcon,
} from "@/icon";
import { useAutoResize } from "../../../hooks/useAutoResize";
import styles from "./chat-ui.module.scss";
import { composeEventHandlers } from "../../_internal/composeEventHandlers";

export interface ChatContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Chat content (message list, input, etc.) */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export const ChatContainer = ({
  children,
  className,
  ...props
}: ChatContainerProps): React.ReactElement => {
  return (
    <div className={classNames("wim-chat-ui", styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export interface ChatMessageListProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Chat messages */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export const ChatMessageList = forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.messageList, className)} {...props}>
        {children}
      </div>
    );
  },
);

ChatMessageList.displayName = "ChatMessageList";

export interface ChatMessageProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Message content */
  children?: React.ReactNode;
  /** Side the message is aligned to (typically left for others, right for self) */
  position?: "left" | "right";
  /**
   * バブルの色。`position` が既に色を決める（`left` は受信色、`right` は送信色）ので、
   * これはその上書き ── 右寄せのまま受信色にする、といった例外用。
   *
   * 以前は `primary` / `secondary` という名前だったが、指しているトークンは
   * `--wim-comp-chat-bubble-sent` / `-received` で、intent ではなく送受信だった（T114）。
   */
  variant?: "default" | "sent" | "received";
  /** Whether to show the avatar */
  showAvatar?: boolean;
  /** Avatar element */
  avatar?: React.ReactNode;
  /** Timestamp text shown below the message */
  timestamp?: string;
  /**
   * Details about how the message was produced (model, token count, latency),
   * shown on the same line as `timestamp` in the same small, secondary text.
   */
  metadata?: React.ReactNode;
  /** Sender name shown above the message */
  senderName?: string;
  /** Whether to show the typing indicator instead of content */
  isTyping?: boolean;
  /** Action elements shown below the message */
  actions?: React.ReactNode;
  /**
   * Whether `actions` are visible without hovering. Defaults to `true`.
   *
   * Hover-reveal hides the fact that the actions exist at all: a reader with a
   * mouse has no way to learn that a reply can be rated until they happen to
   * point at it, and a tooltip does not help because it also waits for the
   * hover. Set `false` for a long transcript where the repeated controls are
   * more noise than affordance.
   *
   * Touch devices ignore `false` and always show the actions: there is no hover
   * to reveal them with, and `opacity` does not disable a control, so a hidden
   * thumbs-down would still be tappable.
   */
  actionsVisible?: boolean;
  /** Additional class names */
  className?: string;
}

export const ChatMessage = ({
  children,
  position = "left",
  variant = "default",
  showAvatar = true,
  avatar,
  timestamp,
  metadata,
  senderName,
  isTyping = false,
  actions,
  actionsVisible = true,
  className,
  ...props
}: ChatMessageProps): React.ReactElement => {
  return (
    <div
      className={classNames(
        styles.message,
        styles[position],
        styles[variant],
        { [styles.hasAvatar]: showAvatar },
        className,
      )}
      {...props}
    >
      {showAvatar && position === "left" && (
        <div className={styles.messageAvatar}>{avatar}</div>
      )}
      <div className={styles.contentWrapper}>
        {senderName && (
          <div className={styles.sender}>{senderName}</div>
        )}
        <div className={classNames(styles.bubble, { [styles.typing]: isTyping })}>
          {isTyping ? (
            <>
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
            </>
          ) : (
            children
          )}
        </div>
        {actions && (
          <div className={classNames(styles.actions, { [styles.hoverOnly]: !actionsVisible })}>
            {actions}
          </div>
        )}
        {(timestamp || metadata) && (
          <div className={styles.timestamp}>
            {timestamp}
            {timestamp && metadata && " · "}
            {metadata}
          </div>
        )}
      </div>
      {showAvatar && position === "right" && (
        <div className={styles.messageAvatar}>{avatar}</div>
      )}
    </div>
  );
};

/**
 * 状態の語は `AgentStatus` と同じ（T363）。ツールの呼び出しに「考え中」「待機」は無いので外す。
 * `Extract<AgentStatusValue, …>` と書くと、docgen と prop の API スナップショットが型の式を
 * そのまま記録して、値の一覧が出ない。同じファイルに値を書き、部分集合であることは下の型で保つ。
 */
export type ChatToolCallStatus = "waiting" | "running" | "done" | "error";
type ToolStatusIsAgentStatus = ChatToolCallStatus extends AgentStatusValue ? true : never;
const toolStatusIsAgentStatus: ToolStatusIsAgentStatus = true;
void toolStatusIsAgentStatus;

const TOOL_STATUS_ICONS: Record<
  Exclude<ChatToolCallStatus, "running">,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  waiting: HourglassIcon,
  done: CheckIcon,
  error: AlertCircleIcon,
};

export interface ChatToolCallProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /** Name of the tool that was called, shown in a monospace face (e.g. `search_incidents`) */
  name: string;
  /**
   * State of the call. Uses the same words as `AgentStatus`; `waiting` is a call
   * that is waiting on something before it runs, such as the user's approval.
   * @default "done"
   */
  status?: ChatToolCallStatus;
  /** One-line summary shown next to the name (e.g. "6 incidents found") */
  summary?: React.ReactNode;
  /**
   * Arguments the tool was called with. Shown when expanded. A string is shown
   * as preformatted monospace text; pass a `CodeBlock` for highlighting or a copy
   * button (it brings its own frame inside this one).
   */
  input?: React.ReactNode;
  /** What the tool returned, or the error it failed with. Shown when expanded. Strings are shown as for `input`. */
  output?: React.ReactNode;
  /** Whether `input` and `output` are shown on first render. */
  defaultExpanded?: boolean;
  /** Additional class names */
  className?: string;
}

/**
 * One call the assistant made to a tool, with its arguments and result.
 *
 * Where it sits next to its neighbours: `ThoughtProcess` is the model's own
 * reasoning written as steps, `AgentStatus` is the whole agent's state on one
 * line, and `ChatToolCall` is one action against the outside world and what
 * came back. Place it inside a `ChatMessage` or directly in `ChatMessageList`.
 *
 * The status is part of the toggle's name ("search_incidents … Done"). A change
 * of status is not announced: it is not something the user did, and a run of
 * tool calls would keep talking over the conversation.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ChatToolCall = ({
  name,
  status = "done",
  summary,
  input,
  output,
  defaultExpanded = false,
  className,
  ...props
}: ChatToolCallProps): React.ReactElement => {
  const { t } = useWimTranslation([commonNs, formNs]);
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const bodyId = useId();
  const hasBody = input != null || output != null;
  const StatusIcon = status === "running" ? null : TOOL_STATUS_ICONS[status];

  const head = (
    <>
      {hasBody && (
        <Icon
          component={ChevronRightIcon}
          size="sm"
          className={classNames(styles.toolChevron, expanded && styles.expanded)}
          aria-hidden="true"
        />
      )}
      <code className={styles.toolName}>{name}</code>
      {summary && <span className={styles.toolSummary}>{summary}</span>}
      <span className={classNames(styles.toolStatus, styles[status])}>
        {StatusIcon ? (
          <Icon component={StatusIcon} size="xs" aria-hidden="true" />
        ) : (
          <span className={styles.toolSpinner} aria-hidden="true" />
        )}
        {t(`agent_status.${status}`)}
      </span>
    </>
  );

  return (
    <div
      className={classNames(styles.toolCall, className)}
      aria-busy={status === "running" || undefined}
      {...props}
    >
      {hasBody ? (
        <button
          type="button"
          className={styles.toolHeader}
          aria-expanded={expanded}
          aria-controls={bodyId}
          onClick={() => setExpanded((v) => !v)}
        >
          {head}
        </button>
      ) : (
        <div className={styles.toolHeader}>{head}</div>
      )}
      {/* 文字列の引数と結果は、長いと内側でスクロールする。キーボードで届くよう tabIndex={0}（CodeBlock と同じ。axe: scrollable-region-focusable） */}
      {hasBody && (
        <div id={bodyId} className={styles.toolBody} hidden={!expanded}>
          {input != null && (
            <div className={styles.toolSection}>
              <div className={styles.toolLabel}>{t("chat.tool_input")}</div>
              {typeof input === "string" ? <pre className={styles.toolCode} tabIndex={0}>{input}</pre> : input}
            </div>
          )}
          {output != null && (
            <div className={styles.toolSection}>
              <div className={styles.toolLabel}>{t("chat.tool_output")}</div>
              {typeof output === "string" ? <pre className={styles.toolCode} tabIndex={0}>{output}</pre> : output}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/** `FeedbackIntent` の部分集合（上の `ChatToolCallStatus` と同じ理由で、値を書いて型で保つ）。 */
export type ChatSystemMessageIntent = "default" | "warning" | "danger";
type SystemIntentIsFeedbackIntent = ChatSystemMessageIntent extends FeedbackIntent ? true : never;
const systemIntentIsFeedbackIntent: SystemIntentIsFeedbackIntent = true;
void systemIntentIsFeedbackIntent;

const SYSTEM_ICONS: Partial<Record<ChatSystemMessageIntent, React.ComponentType<React.SVGProps<SVGSVGElement>>>> = {
  warning: AlertTriangleIcon,
  danger: AlertCircleIcon,
};

export interface ChatSystemMessageProps extends React.ComponentPropsWithoutRef<"div"> {
  /** The notice (e.g. "Switched to a faster model", "No answer arrived") */
  children: React.ReactNode;
  /**
   * `warning` and `danger` add an icon as well as colour, so the difference does
   * not rest on colour alone.
   * @default "default"
   */
  intent?: ChatSystemMessageIntent;
  /** An action that belongs next to the notice, such as a retry button */
  action?: React.ReactNode;
  /** Additional class names */
  className?: string;
}

/**
 * A notice in the transcript that nobody said: the conversation started, the
 * model changed, an answer never arrived. A `ChatMessage` would put it in a
 * speech bubble with a sender, which is wrong for something nobody said.
 *
 * Place it in `ChatMessageList` between messages so it shares the list's
 * spacing. It does not announce itself; when the notice is the result of
 * something the user did, announce it from the app.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ChatSystemMessage = ({
  children,
  intent = "default",
  action,
  className,
  ...props
}: ChatSystemMessageProps): React.ReactElement => {
  const IntentIcon = SYSTEM_ICONS[intent];
  return (
    <div className={classNames(styles.system, styles[intent], className)} {...props}>
      <span className={styles.systemText}>
        {IntentIcon && <Icon component={IntentIcon} size="xs" aria-hidden="true" />}
        <span>{children}</span>
      </span>
      {action && <span className={styles.systemAction}>{action}</span>}
    </div>
  );
};

export interface ChatInputAreaProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

/**
 * ChatInputArea provides a consistent footer container for chat inputs,
 * including a top border and background color.
 */
export const ChatInputArea = ({
  children,
  className,
  ...props
}: ChatInputAreaProps): React.ReactElement => {
  return (
    <div className={classNames(styles.inputArea, className)} {...props}>
      {children}
    </div>
  );
};

export interface ChatInputProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onSend"> {
  /** Callback when a message is sent */
  onSend?: (message: string) => void;
  /** Callback when the attach button is clicked */
  onAttach?: () => void;
  /** Label of the send button (shown instead of the icon when provided) */
  sendButtonLabel?: string;
  /** Icon component for the send button */
  sendButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  /** Whether to show the send button */
  showSendButton?: boolean;
  /** Whether to show the attach button */
  showAttach?: boolean;
  /** Maximum number of rows the input grows to before scrolling */
  maxRows?: number;
  /** Additional class names */
  className?: string;
}

export const ChatInput = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  (
    {
      onSend,
      onAttach,
      sendButtonLabel,
      sendButtonIcon = SendIcon,
      showSendButton = true,
      showAttach = false,
      maxRows = 8,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation(commonNs);
    const [internalValue, setInternalValue] = React.useState("");
    const isControlled = props.value !== undefined;
    const value = isControlled ? (props.value as string) : internalValue;

    const textareaRef = useAutoResize(value, maxRows);

    // Merge refs
    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    const hasLabel = !!sendButtonLabel;

    const handleSend = () => {
      if (onSend) {
        onSend(value);
        if (!isControlled) {
          setInternalValue("");
        }
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      props.onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    return (
      <ChatInputArea className={className}>
        <div className={styles.fieldContainer}>
          {showAttach && (
            <button
              type="button"
              className={styles.attachButton}
              onClick={onAttach}
              aria-label={t("a11y.attach_file")}
            >
              <Icon component={PaperclipIcon} size="sm" />
            </button>
          )}
          <textarea
            ref={textareaRef}
            className={styles.field}
            value={value}
            placeholder={props.placeholder || "Type a message..."}
            rows={1}
            {...props}
            // スプレッドのあとに置く。handleInputChange は、中で props.onChange を呼ぶ（T347）。
            onChange={handleInputChange}
            onKeyDown={composeEventHandlers(props.onKeyDown, handleKeyDown)}
          />
          {showSendButton && (
            <button
              className={styles.sendButton}
              onClick={handleSend}
              disabled={!value.trim()}
              type="button"
              aria-label={sendButtonLabel || t("chat.send")}
            >
              {hasLabel ? sendButtonLabel : <Icon component={sendButtonIcon} size="sm" />}
            </button>
          )}
        </div>
      </ChatInputArea>
    );
  },
);

ChatInput.displayName = "ChatInput";

export interface ChatAvatarProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Image source URL */
  src?: string;
  /** Alternative text for the image */
  alt?: string;
  /** Fallback text (e.g. initials) shown when no image is available */
  fallback?: string;
  /** Size of the avatar */
  size?: ComponentSizeBasic;
  /** Background color token used for the fallback */
  /**
   * PCCS の色調スケール。色そのものではなく明度・彩度の段なので、
   * 他のコンポーネントの `color`（トークン色や任意の CSS 色）とは軸が違う。
   * 以前は `color` という名前で、同じ prop 名が 3 つの語彙を運ぶ状態の一角だった（T118）。
   */
  tone?: "s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24";
  /** Additional class names */
  className?: string;
}

export const ChatAvatar = ({
  src,
  alt: altProp,
  fallback,
  size = "md",
  tone = "s18",
  className,
  ...props
}: ChatAvatarProps): React.ReactElement => {
  const [imageError, setImageError] = React.useState(false);
  const { t } = useWimTranslation(commonNs);

  const alt = altProp || t("chat.user_avatar");

  return (
    <div
      className={classNames(
        styles.avatar,
        styles[size],
        styles[tone],
        className,
      )}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className={styles.image}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.fallback}>
          {fallback || alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};
