import React, { forwardRef } from "react";
import classNames from "classnames";
import { ComponentSize } from "../../../types/tokens";
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

export interface ChatInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSend?: (message: string) => void;
  sendButtonLabel?: string;
  showSendButton?: boolean;
  className?: string;
}

export const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(
  (
    {
      onSend,
      sendButtonLabel: sendButtonLabelProp,
      showSendButton = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState("");

    const sendButtonLabel = sendButtonLabelProp || "Send";

    const handleSend = () => {
      if (value.trim() && onSend) {
        onSend(value);
        setValue("");
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    return (
      <div className={classNames(styles.input, className)}>
        <input
          ref={ref}
          type="text"
          className={styles.field}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={props.placeholder || "Type a message..."}
          {...props}
        />
        {showSendButton && (
          <button
            className={styles.sendButton}
            onClick={handleSend}
            disabled={!value.trim()}
            type="button"
          >
            {sendButtonLabel}
          </button>
        )}
      </div>
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
