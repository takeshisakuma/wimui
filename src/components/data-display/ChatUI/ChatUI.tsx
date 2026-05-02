import React, { forwardRef } from "react";
import classNames from "classnames";
import { ComponentSize } from "../../../types/tokens";
import { Icon } from "../../media/Icon/Icon";
import { SendIcon, PaperclipIcon } from "@/icon";
import { useAutoResize } from "../../../hooks/useAutoResize";
import styles from "./chat-ui.module.scss";

export interface ChatContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ChatContainer = ({
  children,
  className,
}: ChatContainerProps): React.ReactElement => {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  );
};

export interface ChatMessageListProps {
  children: React.ReactNode;
  className?: string;
}

export const ChatMessageList = forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.messageList, className)}>
        {children}
      </div>
    );
  },
);

ChatMessageList.displayName = "ChatMessageList";

export interface ChatMessageProps {
  children: React.ReactNode;
  position?: "left" | "right";
  variant?: "default" | "primary" | "secondary";
  showAvatar?: boolean;
  avatar?: React.ReactNode;
  timestamp?: string;
  senderName?: string;
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
  className,
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
    >
      {showAvatar && position === "left" && (
        <div className={styles.messageAvatar}>{avatar}</div>
      )}
      <div className={styles.contentWrapper}>
        {senderName && (
          <div className={styles.sender}>{senderName}</div>
        )}
        <div className={styles.bubble}>{children}</div>
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

export interface ChatInputAreaProps {
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
}: ChatInputAreaProps): React.ReactElement => {
  return (
    <div className={classNames(styles.inputArea, className)}>
      {children}
    </div>
  );
};

export interface ChatInputProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onSend"> {
  onSend?: (message: string) => void;
  onAttach?: () => void;
  sendButtonLabel?: string;
  sendButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  showSendButton?: boolean;
  showAttach?: boolean;
  maxRows?: number;
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
              aria-label="Attach file"
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

export interface ChatAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: ComponentSize;
  color?: "s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24";
  className?: string;
}

export const ChatAvatar = ({
  src,
  alt: altProp,
  fallback,
  size = "md",
  color = "s18",
  className,
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
