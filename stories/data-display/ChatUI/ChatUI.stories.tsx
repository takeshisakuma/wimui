import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { ChatAvatar, ChatContainer, ChatInput, ChatInputArea, ChatMessage, ChatMessageList, PromptInput } from "../../../src/index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ChatContainer> = {
  title: "Components/Data Display/ChatUI",
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
}

export const Basic: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
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

export const WithAvatarImages: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
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
    const { t } = useTranslation(ALL_NAMESPACES);
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
    const { t } = useTranslation(ALL_NAMESPACES);
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
          text: `📎 Attached: ${file.name}`, 
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "400px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatMessage 
              position="left" 
              showAvatar 
              avatar={<div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "var(--wim-color-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>👤</div>}
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
    const { t } = useTranslation(ALL_NAMESPACES);
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
    const { t } = useTranslation(ALL_NAMESPACES);
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
      setTimeout(() => {
        const aiResponse: Message = { 
          id: (Date.now() + 2).toString(), 
          text: t("story.chat_ai_response", { message: text }), 
          position: "left", 
          sender: t("story.chat_ai_assistant"), 
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) 
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1500);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setMessages((prev) => [...prev, { 
          id: Date.now().toString(), 
          text: `📎 Attached: ${file.name}`, 
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
                avatar={msg.position === "left" ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", backgroundColor: "var(--wim-color-primary)", color: "white" }}>✨</div> : <ChatAvatar fallback="Y" color="s18" />}
              >
                {msg.text}
              </ChatMessage>
            ))}
            {isLoading && (
              <ChatMessage position="left" senderName={t("story.chat_ai_assistant")} showAvatar avatar={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", backgroundColor: "var(--wim-color-primary)", color: "white" }}>✨</div>}>
                <div style={{ display: "flex", gap: "4px", alignItems: "center", height: "24px" }}>
                  <span style={{ animation: "chat-typing 1.4s infinite ease-in-out both" }}>●</span>
                  <span style={{ animation: "chat-typing 1.4s infinite ease-in-out both", animationDelay: "-0.32s" }}>●</span>
                  <span style={{ animation: "chat-typing 1.4s infinite ease-in-out both", animationDelay: "-0.16s" }}>●</span>
                  <style>{`@keyframes chat-typing { 0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; } }`}</style>
                </div>
              </ChatMessage>
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
