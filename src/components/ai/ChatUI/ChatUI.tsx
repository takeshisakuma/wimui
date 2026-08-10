import React, { forwardRef } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { ComponentSizeBasic } from "../../../types/tokens";
import { Icon } from "../../media/Icon/Icon";
import { SendIcon, PaperclipIcon } from "@/icon";
import { useAutoResize } from "../../../hooks/useAutoResize";
import styles from "./chat-ui.module.scss";

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
   * `--wim-comp-chat-bubble-sent` / `-received` で、**intent ではなく送受信**だった（T114）。
   */
  variant?: "default" | "sent" | "received";
  /** Whether to show the avatar */
  showAvatar?: boolean;
  /** Avatar element */
  avatar?: React.ReactNode;
  /** Timestamp text shown below the message */
  timestamp?: string;
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
        {timestamp && (
          <div className={styles.timestamp}>{timestamp}</div>
        )}
      </div>
      {showAvatar && position === "right" && (
        <div className={styles.messageAvatar}>{avatar}</div>
      )}
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
    const { t } = useWimTranslation("common");
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
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={props.placeholder || "Type a message..."}
            rows={1}
            {...props}
          />
          {showSendButton && (
            <button
              className={styles.sendButton}
              onClick={handleSend}
              disabled={!value.trim()}
              type="button"
              aria-label={sendButtonLabel || "Send"}
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
  color?: "s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24";
  /** Additional class names */
  className?: string;
}

export const ChatAvatar = ({
  src,
  alt: altProp,
  fallback,
  size = "md",
  color = "s18",
  className,
  ...props
}: ChatAvatarProps): React.ReactElement => {
  const [imageError, setImageError] = React.useState(false);

  const alt = altProp || "User Avatar";

  return (
    <div
      className={classNames(
        styles.avatar,
        styles[size],
        styles[color],
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
