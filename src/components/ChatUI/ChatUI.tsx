import React, { forwardRef } from "react";
import classNames from "classnames";
import "./chatui.scss";

export interface ChatContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("wim-chat-container", className)}>
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
      <div ref={ref} className={classNames("wim-chat-message-list", className)}>
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

export const ChatMessage: React.FC<ChatMessageProps> = ({
  children,
  position = "left",
  variant = "default",
  showAvatar = true,
  avatar,
  timestamp,
  senderName,
  className,
}) => {
  return (
    <div
      className={classNames(
        "wim-chat-message",
        `wim-chat-message--${position}`,
        `wim-chat-message--${variant}`,
        { "wim-chat-message--has-avatar": showAvatar },
        className,
      )}
    >
      {showAvatar && position === "left" && (
        <div className="wim-chat-message__avatar">{avatar}</div>
      )}
      <div className="wim-chat-message__content-wrapper">
        {senderName && (
          <div className="wim-chat-message__sender">{senderName}</div>
        )}
        <div className="wim-chat-message__bubble">{children}</div>
        {timestamp && (
          <div className="wim-chat-message__timestamp">{timestamp}</div>
        )}
      </div>
      {showAvatar && position === "right" && (
        <div className="wim-chat-message__avatar">{avatar}</div>
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
      sendButtonLabel = "Send",
      showSendButton = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState("");

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
      <div className={classNames("wim-chat-input", className)}>
        <input
          ref={ref}
          type="text"
          className="wim-chat-input__field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          {...props}
        />
        {showSendButton && (
          <button
            className="wim-chat-input__send-button"
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
  size?: "small" | "medium" | "large";
  color?: "s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24";
  className?: string;
}

export const ChatAvatar: React.FC<ChatAvatarProps> = ({
  src,
  alt = "Avatar",
  fallback,
  size = "medium",
  color = "s18",
  className,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      className={classNames(
        "wim-chat-avatar",
        `wim-chat-avatar--${size}`,
        `wim-chat-avatar--${color}`,
        className,
      )}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className="wim-chat-avatar__image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="wim-chat-avatar__fallback">
          {fallback || alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};
