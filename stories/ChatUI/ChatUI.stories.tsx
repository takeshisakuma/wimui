import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatContainer, ChatMessageList, ChatMessage, ChatInput, ChatAvatar } from "@/components/ChatUI/ChatUI";
import { Icon } from "@/components/Icon/Icon";
import { useState, useRef, useEffect } from 'react';

const meta: Meta<typeof ChatContainer> = {
    title: 'Component/Data Display/ChatUI',
    component: ChatContainer,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ChatContainer>;

export const Basic: Story = {
    render: () => (
        <div style={{ height: '100vh' }}>
            <ChatContainer>
                <ChatMessageList>
                    <ChatMessage
                        position="left"
                        showAvatar
                        avatar={<ChatAvatar fallback="A" />}
                        senderName="Alice"
                        timestamp="10:30 AM"
                    >
                        Hey! How are you doing?
                    </ChatMessage>
                    <ChatMessage
                        position="right"
                        showAvatar
                        avatar={<ChatAvatar fallback="Y" />}
                        timestamp="10:31 AM"
                    >
                        I'm doing great! Thanks for asking.
                    </ChatMessage>
                    <ChatMessage
                        position="left"
                        showAvatar
                        avatar={<ChatAvatar fallback="A" />}
                        senderName="Alice"
                        timestamp="10:32 AM"
                    >
                        That's wonderful to hear!
                    </ChatMessage>
                </ChatMessageList>
                <ChatInput placeholder="Type a message..." />
            </ChatContainer>
        </div>
    ),
};

export const WithAvatarImages: Story = {
    render: () => (
        <div style={{ height: '100vh' }}>
            <ChatContainer>
                <ChatMessageList>
                    <ChatMessage
                        position="left"
                        showAvatar
                        avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />}
                        senderName="John Smith"
                        timestamp="09:15 AM"
                    >
                        Good morning everyone!
                    </ChatMessage>
                    <ChatMessage
                        position="right"
                        showAvatar
                        avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=5" alt="You" />}
                        timestamp="09:16 AM"
                    >
                        Good morning John!
                    </ChatMessage>
                    <ChatMessage
                        position="left"
                        showAvatar
                        avatar={<ChatAvatar src="https://i.pravatar.cc/150?img=3" alt="User 2" />}
                        senderName="Sarah Johnson"
                        timestamp="09:17 AM"
                    >
                        Morning! Ready for the meeting?
                    </ChatMessage>
                </ChatMessageList>
                <ChatInput placeholder="Type a message..." />
            </ChatContainer>
        </div>
    ),
};

export const WithVariants: Story = {
    render: () => (
        <div style={{ height: '100vh' }}>
            <ChatContainer>
                <ChatMessageList>
                    <ChatMessage
                        position="left"
                        variant="default"
                        showAvatar
                        avatar={<ChatAvatar fallback="S" />}
                        senderName="System"
                        timestamp="08:00 AM"
                    >
                        Welcome to the chat!
                    </ChatMessage>
                    <ChatMessage
                        position="left"
                        variant="primary"
                        showAvatar
                        avatar={<ChatAvatar fallback="A" />}
                        senderName="Admin"
                        timestamp="08:01 AM"
                    >
                        This is an important announcement.
                    </ChatMessage>
                    <ChatMessage
                        position="left"
                        variant="secondary"
                        showAvatar
                        avatar={<ChatAvatar fallback="B" />}
                        senderName="Bot"
                        timestamp="08:02 AM"
                    >
                        I'm here to help you!
                    </ChatMessage>
                </ChatMessageList>
                <ChatInput placeholder="Type a message..." />
            </ChatContainer>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        interface Message {
            id: number;
            text: string;
            position: 'left' | 'right';
            sender: string;
            timestamp: string;
        }

        const [messages, setMessages] = useState<Message[]>([
            {
                id: 1,
                text: "Hello! How can I help you today?",
                position: 'left',
                sender: "Support",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ]);
        const messageListRef = useRef<HTMLDivElement>(null);

        const handleSend = (message: string) => {
            const newMessage: Message = {
                id: messages.length + 1,
                text: message,
                position: 'right',
                sender: "You",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, newMessage]);

            // Simulate response
            setTimeout(() => {
                const response: Message = {
                    id: messages.length + 2,
                    text: "Thanks for your message! I'll get back to you shortly.",
                    position: 'left',
                    sender: "Support",
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, response]);
            }, 1000);
        };

        useEffect(() => {
            if (messageListRef.current) {
                messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
            }
        }, [messages]);

        return (
            <div style={{ height: '100vh' }}>
                <ChatContainer>
                    <ChatMessageList ref={messageListRef}>
                        {messages.map((msg) => (
                            <ChatMessage
                                key={msg.id}
                                position={msg.position}
                                showAvatar
                                avatar={<ChatAvatar fallback={msg.sender.charAt(0)} />}
                                senderName={msg.position === 'left' ? msg.sender : undefined}
                                timestamp={msg.timestamp}
                            >
                                {msg.text}
                            </ChatMessage>
                        ))}
                    </ChatMessageList>
                    <ChatInput
                        placeholder="Type your message..."
                        onSend={handleSend}
                    />
                </ChatContainer>
            </div>
        );
    },
};

export const WithIcons: Story = {
    render: () => (
        <div style={{ height: '100vh' }}>
            <ChatContainer>
                <ChatMessageList>
                    <ChatMessage
                        position="left"
                        showAvatar
                        avatar={
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--wim-color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <Icon name="UserIcon" size="small" />
                            </div>
                        }
                        senderName="Customer Support"
                        timestamp="11:00 AM"
                    >
                        How can I assist you today?
                    </ChatMessage>
                    <ChatMessage
                        position="right"
                        showAvatar
                        avatar={
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--wim-color-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <Icon name="UserIcon" size="small" />
                            </div>
                        }
                        timestamp="11:01 AM"
                    >
                        I need help with my order.
                    </ChatMessage>
                </ChatMessageList>
                <ChatInput placeholder="Type a message..." />
            </ChatContainer>
        </div>
    ),
};

export const NoAvatars: Story = {
    render: () => (
        <div style={{ height: '100vh' }}>
            <ChatContainer>
                <ChatMessageList>
                    <ChatMessage
                        position="left"
                        showAvatar={false}
                        senderName="Alice"
                        timestamp="10:30 AM"
                    >
                        This message has no avatar
                    </ChatMessage>
                    <ChatMessage
                        position="right"
                        showAvatar={false}
                        timestamp="10:31 AM"
                    >
                        Neither does this one
                    </ChatMessage>
                    <ChatMessage
                        position="left"
                        showAvatar={false}
                        senderName="Alice"
                        timestamp="10:32 AM"
                    >
                        Clean and simple!
                    </ChatMessage>
                </ChatMessageList>
                <ChatInput placeholder="Type a message..." />
            </ChatContainer>
        </div>
    ),
};

export const AvatarSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '24px' }}>
            <div>
                <p style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Small</p>
                <ChatAvatar size="small" fallback="S" />
            </div>
            <div>
                <p style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Medium</p>
                <ChatAvatar size="medium" fallback="M" />
            </div>
            <div>
                <p style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Large</p>
                <ChatAvatar size="large" fallback="L" />
            </div>
        </div>
    ),
};
