import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { 
  ChatAvatar, 
  ChatContainer, 
  ChatInput, 
  ChatInputArea, 
  ChatMessage, 
  ChatMessageList, 
  PromptInput,
  Icon,
  AIResponseFeedback
} from "../../../src/index";
import { StreamingText } from "../../../src/ai/streaming-text";
import type { Meta, StoryObj } from "@storybook/react-vite";

/** Static English under VRT so the first paint does not wait on 76-namespace HTTP i18n. */
const VRT_CHAT: Record<string, string> = {
  "story.chat_msg_1": "Hello! How can I help you today?",
  "story.chat_msg_2": "I need help with my account.",
  "story.chat_msg_3": "Sure - what seems to be the problem?",
  "story.chat_msg_4": "I cannot reset my password.",
  "story.chat_msg_5": "Default message style",
  "story.chat_msg_6": "Primary message style",
  "story.chat_msg_7": "Secondary message style",
  "story.chat_msg_12": "Custom avatar with an icon",
  "story.chat_msg_14": "Messages without avatars",
  "story.chat_msg_15": "Still readable and compact",
  "story.chat_support": "Support",
  "story.chat_you": "You",
  "story.chat_ai_assistant": "Assistant",
  "story.chat_ai_greeting": "Hi - ask me anything about the product.",
  "story.chat_placeholder_ai": "Message the assistant...",
  "story.chatui_action_good": "Good response",
  "story.chatui_action_bad": "Bad response",
  "chat.placeholder": "Type a message...",
  "chat.placeholder_interactive": "Type a message...",
  "action.copy": "Copy",
};

function useChatT() {
  const { t } = useTranslation(ALL_NAMESPACES);
  // @ts-expect-error: __VRT__ is a custom global flag for testing
  if (typeof window !== "undefined" && window.__VRT__) {
    return ((key: string, opts?: Record<string, string>) => {
      if (key === "story.chat_ai_response") {
        return `Thanks for asking about "${opts?.message ?? ""}". Here is a concise answer.`;
      }
      if (key === "chat.attachment_prefix") {
        return `Attached: ${opts?.fileName ?? "file"}`;
      }
      return VRT_CHAT[key] ?? key;
    }) as typeof t;
  }
  return t;
}

const meta: Meta<typeof ChatContainer> = {
  title: "Components/AI/ChatUI",
  component: ChatContainer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ChatContainer>;

interface Message {
  id: string;
  text: string;
  position: "left" | "right";
  sender?: string;
  timestamp?: string;
  variant?: "default" | "primary" | "secondary";
  isStreaming?: boolean;
}

export const Basic: Story = {
  render: () => {
    const t = useChatT();
    return (
      <div style={{ height: "400px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left">{t("story.chat_msg_1")}</ChatMessage>
            <ChatMessage position="right">{t("story.chat_msg_2")}</ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

/**
 * 返答へのフィードバック操作。**この形は 2026-08-03 まで 1 枚も撮られていなかった** —
 * `actions` を描くのは `AiAssistantIntegration` だけで、そちらは初期メッセージが
 * 1 件しか無く条件に合わないため、アクションが写ったスクリーンショットが存在せず、
 * 「ホバーしないと出ない」不具合が VRT にも a11y にも載っていなかった（T62）。
 *
 * 上のメッセージは既定（ポインタではホバーで出る）、下は `actionsVisible` で常時表示。
 * タッチ端末では `@media (hover: none)` により両方とも最初から見える。
 */
export const WithActions: Story = {
  render: () => {
    const t = useChatT();
    const feedback = (
      <AIResponseFeedback showRegenerate />
    );
    return (
      <div style={{ height: "400px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage
              position="left"
              showAvatar
              avatar={<ChatAvatar fallback="A" color="s5" />}
              senderName={t("story.chat_ai_assistant")}
              actions={feedback}
            >
              {t("story.chat_msg_1")}
            </ChatMessage>
            <ChatMessage
              position="left"
              showAvatar
              avatar={<ChatAvatar fallback="A" color="s5" />}
              senderName={t("story.chat_ai_assistant")}
              actions={feedback}
              actionsVisible
            >
              {t("story.chat_msg_3")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const WithAvatarImages: Story = {
  render: () => {
    const t = useChatT();
    return (
      <div style={{ height: "400px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage 
              position="left" 
              showAvatar 
              avatar={<ChatAvatar fallback="S" color="s5" />} 
              senderName={t("story.chat_support")}
            >
              {t("story.chat_msg_3")}
            </ChatMessage>
            <ChatMessage 
              position="right" 
              showAvatar 
              avatar={<ChatAvatar fallback="Y" color="s18" />} 
              senderName={t("story.chat_you")}
            >
              {t("story.chat_msg_4")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const WithVariants: Story = {
  render: () => {
    const t = useChatT();
    return (
      <div style={{ height: "400px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage variant="default">{t("story.chat_msg_5")}</ChatMessage>
            <ChatMessage variant="primary" position="right">{t("story.chat_msg_6")}</ChatMessage>
            <ChatMessage variant="secondary" position="left">{t("story.chat_msg_7")}</ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const t = useChatT();
    const [messages, setMessages] = useState<Message[]>([
      { id: "1", text: t("story.chat_msg_1"), position: "left", sender: t("story.chat_support"), timestamp: "10:00 AM" },
    ]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const messageListRef = useRef<HTMLDivElement>(null);

    const handleSend = (text: string) => {
      if (!text.trim()) return;
      const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages((prev) => [...prev, { 
        id: Date.now().toString(), 
        text, 
        position: "right", 
        sender: t("story.chat_you"), 
        timestamp 
      }]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setMessages((prev) => [...prev, { 
          id: Date.now().toString(), 
          text: t("chat.attachment_prefix", { fileName: file.name }), 
          position: "right", 
          sender: t("story.chat_you"), 
          timestamp,
          variant: "secondary"
        }]);
      }
    };

    useEffect(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    }, [messages]);

    return (
      <div style={{ height: "100vh" }}>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
        <ChatContainer>
          <ChatMessageList ref={messageListRef}>
            {messages.map((msg) => (
              <ChatMessage 
                key={msg.id} 
                position={msg.position} 
                variant={msg.variant}
                senderName={msg.sender}
                timestamp={msg.timestamp}
                showAvatar
                avatar={<ChatAvatar fallback={msg.sender?.charAt(0)} color={msg.position === "left" ? "s5" : "s18"} />}
              >
                {msg.text}
              </ChatMessage>
            ))}
          </ChatMessageList>
          <ChatInput 
            placeholder={t("chat.placeholder_interactive")} 
            onSend={handleSend}
            showAttach
            onAttach={() => fileInputRef.current?.click()}
          />
        </ChatContainer>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const t = useChatT();
    return (
      <div style={{ height: "400px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage 
              position="left" 
              showAvatar 
              avatar={<div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "var(--wim-color-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--wim-color-text-on-primary)" }}><Icon name="UserIcon" size="sm" /></div>}
            >
              {t("story.chat_msg_12")}
            </ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const NoAvatars: Story = {
  render: () => {
    const t = useChatT();
    return (
      <div style={{ height: "400px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="left" showAvatar={false}>{t("story.chat_msg_14")}</ChatMessage>
            <ChatMessage position="right" showAvatar={false}>{t("story.chat_msg_15")}</ChatMessage>
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

export const AvatarSizes: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "24px", padding: "24px" }}>
        <ChatAvatar size="sm" fallback="S" />
        <ChatAvatar size="md" fallback="M" />
        <ChatAvatar size="lg" fallback="L" />
      </div>
    );
  },
};

export const AiAssistantIntegration: Story = {
  render: () => {
    const t = useChatT();
    const [messages, setMessages] = useState<Message[]>([
      { id: "1", text: t("story.chat_ai_greeting"), position: "left", sender: t("story.chat_ai_assistant"), timestamp: "12:00 PM" },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const messageListRef = useRef<HTMLDivElement>(null);

    const handleSend = (text: string) => {
      if (!text.trim()) return;
      const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      
      setMessages((prev) => [...prev, { 
        id: Date.now().toString(), 
        text, 
        position: "right", 
        sender: t("story.chat_you"), 
        timestamp 
      }]);
      
      setIsLoading(true);

      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) {
        setIsLoading(false);
        return;
      }
      
      // Simulate AI response with streaming
      setTimeout(() => {
        setIsLoading(false);
        const aiMessageId = (Date.now() + 2).toString();
        const fullText = t("story.chat_ai_response", { message: text });
        
        setMessages((prev) => [...prev, { 
          id: aiMessageId, 
          text: "", 
          position: "left", 
          sender: t("story.chat_ai_assistant"), 
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isStreaming: true
        }]);

        let currentText = "";
        const words = fullText.split(" ");
        let i = 0;
        const interval = setInterval(() => {
          if (i < words.length) {
            currentText += (i === 0 ? "" : " ") + words[i];
            setMessages((prev) => prev.map(m => m.id === aiMessageId ? { ...m, text: currentText } : m));
            i++;
          } else {
            clearInterval(interval);
            setMessages((prev) => prev.map(m => m.id === aiMessageId ? { ...m, isStreaming: false } : m));
          }
        }, 50);
      }, 1000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setMessages((prev) => [...prev, { 
          id: Date.now().toString(), 
          text: t("chat.attachment_prefix", { fileName: file.name }), 
          position: "right", 
          sender: t("story.chat_you"), 
          timestamp,
          variant: "secondary"
        }]);
      }
    };

    useEffect(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    }, [messages, isLoading]);

    const MessageActions = () => (
      <div style={{ display: "flex", gap: "4px" }}>
        <button style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: "14px", color: "var(--wim-color-text-tertiary)" }} title={t("action.copy")}><Icon name="CopyIcon" size="sm" /></button>
        <button style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: "14px", color: "var(--wim-color-text-tertiary)" }} title={t("story.chatui_action_good")}><Icon name="ThumbUpIcon" size="sm" /></button>
        <button style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: "14px", color: "var(--wim-color-text-tertiary)" }} title={t("story.chatui_action_bad")}><Icon name="ThumbDownIcon" size="sm" /></button>
      </div>
    );

    return (
      <div style={{ height: "100vh" }}>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
        <ChatContainer>
          <ChatMessageList ref={messageListRef}>
            {messages.map((msg) => (
              <ChatMessage 
                key={msg.id} 
                position={msg.position} 
                variant={msg.variant}
                senderName={msg.sender}
                timestamp={msg.timestamp}
                showAvatar
                isTyping={msg.id === "loading"}
                avatar={
                  msg.position === "left" ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", backgroundColor: "var(--wim-color-primary)", color: "var(--wim-color-text-on-primary)" }}>
                      <Icon name="StarIcon" size="sm" />
                    </div>
                  ) : (
                    <ChatAvatar fallback="Y" color="s18" />
                  )
                }
                actions={msg.position === "left" && !msg.isStreaming && msg.id !== "1" ? <MessageActions /> : undefined}
              >
                {msg.position === "left" && msg.id !== "1" ? (
                  <StreamingText content={msg.text} isStreaming={msg.isStreaming} />
                ) : (
                  msg.text
                )}
              </ChatMessage>
            ))}
            {isLoading && (
              <ChatMessage 
                position="left" 
                senderName={t("story.chat_ai_assistant")} 
                showAvatar 
                isTyping
                avatar={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", backgroundColor: "var(--wim-color-primary)", color: "var(--wim-color-text-on-primary)" }}><Icon name="StarIcon" size="sm" /></div>}
              />
            )}
          </ChatMessageList>
          <ChatInputArea>
            <PromptInput
              placeholder={t("story.chat_placeholder_ai")}
              onSubmit={handleSend}
              loading={isLoading}
              showAttach
              onAttach={() => fileInputRef.current?.click()}
              style={{ flex: 1, minWidth: 0 }}
            />
          </ChatInputArea>
        </ChatContainer>
      </div>
    );
  },
};
