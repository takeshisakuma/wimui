import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ChatContainer,
  ChatMessageList,
  ChatMessage,
  ChatInput,
  ChatAvatar,
} from "@/components/ChatUI/ChatUI";
import { Icon } from "@/components/Icon/Icon";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof ChatContainer> = {
  title: "Components/Data Structures/ChatUI",
  component: ChatContainer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ChatContainer>;

export const Basic: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "components"]);
    return (
      <div style={{ height: "100vh" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage
              position="left"
              showAvatar
              avatar={<ChatAvatar fallback="A" color="s5" />}
              senderName={t("story_chat_alice")}
              timestamp="10:30 AM"
            >
              {t("story_chat_msg_1")}
            </ChatMessage>
            <ChatMessage
              position="right"
              showAvatar
              avatar={<ChatAvatar fallback="Y" />}
              senderName={t("story_chat_you")}
              timestamp="10:31 AM"
            >
              {t("story_chat_msg_2")}
            </ChatMessage>
            <ChatMessage
              position="left"
              showAvatar
              avatar={<ChatAvatar fallback="A" color="s5" />}
              senderName={t("story_chat_alice")}
              timestamp="10:32 AM"
            >
              {t("story_chat_msg_3")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat_placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const WithAvatarImages: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "components"]);
    return (
      <div style={{ height: "100vh" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage
              position="left"
              showAvatar
              avatar={
                <ChatAvatar src="https://i.pravatar.cc/150?img=1" alt={t("story_chat_john")} />
              }
              senderName={t("story_chat_john")}
              timestamp="09:15 AM"
            >
              {t("story_chat_msg_4")}
            </ChatMessage>
            <ChatMessage
              position="right"
              showAvatar
              avatar={
                <ChatAvatar src="https://i.pravatar.cc/150?img=5" alt={t("story_chat_you")} />
              }
              senderName={t("story_chat_you")}
              timestamp="09:16 AM"
            >
              {t("story_chat_msg_5")}
            </ChatMessage>
            <ChatMessage
              position="left"
              showAvatar
              avatar={
                <ChatAvatar src="https://i.pravatar.cc/150?img=3" alt={t("story_chat_sarah")} />
              }
              senderName={t("story_chat_sarah")}
              timestamp="09:17 AM"
            >
              {t("story_chat_msg_6")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat_placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const WithVariants: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "components"]);
    return (
      <div style={{ height: "100vh" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage
              position="left"
              variant="default"
              showAvatar
              avatar={<ChatAvatar fallback="S" color="s18" />}
              senderName={t("story_chat_system")}
              timestamp="08:00 AM"
            >
              {t("story_chat_msg_7")}
            </ChatMessage>
            <ChatMessage
              position="left"
              variant="primary"
              showAvatar
              avatar={<ChatAvatar fallback="A" color="s1" />}
              senderName={t("story_chat_admin")}
              timestamp="08:01 AM"
            >
              {t("story_chat_msg_8")}
            </ChatMessage>
            <ChatMessage
              position="left"
              variant="secondary"
              showAvatar
              avatar={<ChatAvatar fallback="B" color="s12" />}
              senderName={t("story_chat_bot")}
              timestamp="08:02 AM"
            >
              {t("story_chat_msg_9")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat_placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "components"]);
    interface Message {
      id: number;
      text: string;
      position: "left" | "right";
      sender: string;
      timestamp: string;
    }

    const [messages, setMessages] = useState<Message[]>([
      {
        id: 1,
        text: t("story_chat_msg_10"),
        position: "left",
        sender: t("story_chat_support"),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    const messageListRef = useRef<HTMLDivElement>(null);

    const handleSend = (message: string) => {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        position: "right",
        sender: t("story_chat_you"),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);

      // Simulate response
      setTimeout(() => {
        const response: Message = {
          id: messages.length + 2,
          text: t("story_chat_msg_11"),
          position: "left",
          sender: t("story_chat_support"),
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, response]);
      }, 1000);
    };

    useEffect(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    }, [messages]);

    return (
      <div style={{ height: "100vh" }}>
        <ChatContainer>
          <ChatMessageList ref={messageListRef}>
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                position={msg.position}
                showAvatar
                avatar={<ChatAvatar fallback={msg.sender.charAt(0)} color={msg.position === "left" ? "s5" : "s18"} />}
                senderName={msg.sender}
                timestamp={msg.timestamp}
              >
                {msg.text}
              </ChatMessage>
            ))}
          </ChatMessageList>
          <ChatInput placeholder={t("chat_placeholder_interactive")} onSend={handleSend} />
        </ChatContainer>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "components"]);
    return (
      <div style={{ height: "100vh" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage
              position="left"
              showAvatar
              avatar={
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--wim-color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Icon name="UserIcon" size="small" />
                </div>
              }
              senderName={t("story_chat_customer_support")}
              timestamp="11:00 AM"
            >
              {t("story_chat_msg_12")}
            </ChatMessage>
            <ChatMessage
              position="right"
              showAvatar
              avatar={
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--wim-color-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Icon name="UserIcon" size="small" />
                </div>
              }
              senderName={t("story_chat_you")}
              timestamp="11:01 AM"
            >
              {t("story_chat_msg_13")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat_placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const NoAvatars: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "components"]);
    return (
      <div style={{ height: "100vh" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage
              position="left"
              showAvatar={false}
              senderName={t("story_chat_alice")}
              timestamp="10:30 AM"
            >
              {t("story_chat_msg_14")}
            </ChatMessage>
            <ChatMessage position="right" showAvatar={false} senderName={t("story_chat_you")} timestamp="10:31 AM">
              {t("story_chat_msg_15")}
            </ChatMessage>
            <ChatMessage
              position="left"
              showAvatar={false}
              senderName={t("story_chat_alice")}
              timestamp="10:32 AM"
            >
              {t("story_chat_msg_16")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat_placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const AvatarSizes: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "components"]);
    return (
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          padding: "24px",
        }}
      >
        <div>
          <p style={{ marginBottom: "8px", fontSize: "14px", color: "#666" }}>
            {t("story_chat_size_small")}
          </p>
          <ChatAvatar size="small" fallback="S" />
        </div>
        <div>
          <p style={{ marginBottom: "8px", fontSize: "14px", color: "#666" }}>
            {t("story_chat_size_medium")}
          </p>
          <ChatAvatar size="medium" fallback="M" />
        </div>
        <div>
          <p style={{ marginBottom: "8px", fontSize: "14px", color: "#666" }}>
            {t("story_chat_size_large")}
          </p>
          <ChatAvatar size="large" fallback="L" />
        </div>
      </div>
    );
  },
};
