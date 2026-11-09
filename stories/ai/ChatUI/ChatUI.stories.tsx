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
  AIResponseFeedback,
  ChatToolCall,
  ChatSystemMessage,
  Button,
  Stack,
  Text,
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
  "story.chat_tool_started": "Conversation started · Thu 13 Nov",
  "story.chat_tool_user_1": "Can you move my dentist appointment? Thursday doesn't work anymore.",
  "story.chat_tool_summary_found": "1 upcoming",
  "story.chat_tool_summary_slots": "3 open slots",
  "story.chat_tool_reply_1": "Your cleaning with Dr. Okafor is Thursday at 9:30. The clinic has Tuesday 16:40 or Wednesday 8:15 open next week. Should I take Tuesday?",
  "story.chat_tool_user_2": "Tuesday, yes.",
  "story.chat_tool_failed": "The clinic's booking system didn't answer. Your Thursday appointment is unchanged.",
  "story.chat_tool_retry": "Try again",
  "story.chat_tool_model_changed": "Switched to a smaller model for this conversation",
  "story.chat_tool_context_warning": "Older messages will be left out of the model's context soon",
  "story.chat_tool_booked": "Booked: Tuesday 16:40 with Dr. Okafor. Thursday is cancelled.",
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
  variant?: "default" | "sent" | "received";
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
 * 上のメッセージは既定（**常時表示**）、下は `actionsVisible={false}` でホバーに隠した形。
 * 既定を常時表示へ倒したのは T70 — ホバーで出すと、マウスの利用者は「返答を評価できる」
 * ことを**指すまで知れない**（ツールチップもホバーを待つので発見可能性を上げない）。
 * タッチ端末では `@media (hover: none)` により、隠した側も最初から見える。
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
              avatar={<ChatAvatar fallback="A" tone="s5" />}
              senderName={t("story.chat_ai_assistant")}
              actions={feedback}
            >
              {t("story.chat_msg_1")}
            </ChatMessage>
            <ChatMessage
              position="left"
              showAvatar
              avatar={<ChatAvatar fallback="A" tone="s5" />}
              senderName={t("story.chat_ai_assistant")}
              actions={feedback}
              actionsVisible={false}
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
              avatar={<ChatAvatar fallback="S" tone="s5" />} 
              senderName={t("story.chat_support")}
            >
              {t("story.chat_msg_3")}
            </ChatMessage>
            <ChatMessage 
              position="right" 
              showAvatar 
              avatar={<ChatAvatar fallback="Y" tone="s18" />} 
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
            <ChatMessage variant="sent" position="right">{t("story.chat_msg_6")}</ChatMessage>
            <ChatMessage variant="received" position="left">{t("story.chat_msg_7")}</ChatMessage>
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
          variant: "received"
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
                avatar={<ChatAvatar fallback={msg.sender?.charAt(0)} tone={msg.position === "left" ? "s5" : "s18"} />}
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

// T280: この値はどのストーリーにも描かれていなかった（変えても VRT が赤を出さない）。
export const AvatarTones: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--wim-spacing-md)", padding: "var(--wim-spacing-xl)" }}>
      {(["s1", "s3", "s5", "s7", "s10", "s12", "s14", "s16", "s18", "s20", "s22", "s24"] as const).map((tone, i) => (
        <ChatAvatar key={tone} tone={tone} fallback={String.fromCharCode(65 + i)} />
      ))}
    </div>
  ),
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
          variant: "received"
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
                    <ChatAvatar fallback="Y" tone="s18" />
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

const SLOT_QUERY = `{
  "clinic": "harbourview-dental",
  "after": "2026-11-17",
  "duration_min": 40
}`;

const SLOT_RESULT = `[
  { "start": "2026-11-18T16:40", "dentist": "Okafor" },
  { "start": "2026-11-19T08:15", "dentist": "Okafor" },
  { "start": "2026-11-21T11:00", "dentist": "Lindqvist" }
]`;

/**
 * ツールの呼び出し・システムメッセージ・メタデータ（T363）。予約の変更を頼んで、
 * 医院の予約システムが応答しなかったところ。「もう一度試す」を押すと呼び出しが
 * 実行中になり、終わると返事が出る（画面の操作だけで、見えている状態に着く）。
 */
export const ToolCalls: Story = {
  render: function Render() {
    const t = useChatT();
    const [booking, setBooking] = useState<"error" | "running" | "done">("error");

    const retry = () => {
      setBooking("running");
      setTimeout(() => setBooking("done"), 1200);
    };

    return (
      <div style={{ height: "720px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatSystemMessage>{t("story.chat_tool_started")}</ChatSystemMessage>
            <ChatMessage position="right" timestamp="09:12">
              {t("story.chat_tool_user_1")}
            </ChatMessage>
            <ChatMessage
              position="left"
              senderName={t("story.chat_ai_assistant")}
              timestamp="09:12"
              metadata="1,284 tokens · 3.1s"
            >
              <Stack gap="md">
                <Stack gap="xs">
                  <ChatToolCall
                    name="list_appointments"
                    summary={t("story.chat_tool_summary_found")}
                    input={`{ "from": "2026-11-13" }`}
                  />
                  <ChatToolCall
                    name="search_open_slots"
                    summary={t("story.chat_tool_summary_slots")}
                    input={SLOT_QUERY}
                    output={SLOT_RESULT}
                  />
                </Stack>
                <Text>{t("story.chat_tool_reply_1")}</Text>
              </Stack>
            </ChatMessage>
            <ChatMessage position="right" timestamp="09:14">
              {t("story.chat_tool_user_2")}
            </ChatMessage>
            <ChatMessage position="left" senderName={t("story.chat_ai_assistant")} timestamp="09:14">
              <Stack gap="md">
                <ChatToolCall
                  name="book_slot"
                  status={booking}
                  input={`{ "start": "2026-11-18T16:40", "replaces": "apt_88213" }`}
                  output={
                    booking === "error" ? (
                      "503 Service Unavailable (after 30s)"
                    ) : undefined
                  }
                />
                {booking === "done" && <Text>{t("story.chat_tool_booked")}</Text>}
              </Stack>
            </ChatMessage>
            {booking === "error" && (
              <ChatSystemMessage
                intent="danger"
                action={
                  <Button size="sm" variant="outline" onClick={retry}>
                    {t("story.chat_tool_retry")}
                  </Button>
                }
              >
                {t("story.chat_tool_failed")}
              </ChatSystemMessage>
            )}
          </ChatMessageList>
          <ChatInput placeholder={t("chat.placeholder")} />
        </ChatContainer>
      </div>
    );
  },
};

/**
 * 状態の一覧（VRT と a11y に、どの値も写すためのストーリー）。ツールの呼び出しの 4 状態と、
 * システムメッセージの 3 つの intent。
 */
export const ToolCallStates: Story = {
  render: function Render() {
    const t = useChatT();
    return (
      <div style={{ height: "520px" }}>
        <ChatContainer>
          <ChatMessageList>
            <ChatSystemMessage>{t("story.chat_tool_model_changed")}</ChatSystemMessage>
            <ChatSystemMessage intent="warning">{t("story.chat_tool_context_warning")}</ChatSystemMessage>
            <ChatSystemMessage intent="danger">{t("story.chat_tool_failed")}</ChatSystemMessage>
            <ChatMessage position="left" senderName={t("story.chat_ai_assistant")}>
              <Stack gap="xs">
                <ChatToolCall name="book_slot" status="waiting" />
                <ChatToolCall name="search_open_slots" status="running" />
                <ChatToolCall name="list_appointments" status="done" summary={t("story.chat_tool_summary_found")} />
                <ChatToolCall
                  name="book_slot"
                  status="error"
                  output="503 Service Unavailable"
                  defaultExpanded
                />
              </Stack>
            </ChatMessage>
          </ChatMessageList>
        </ChatContainer>
      </div>
    );
  },
};
