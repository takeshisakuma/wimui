import { default as React } from '../../../node_modules/react';
export interface ChatContainerProps {
    children: React.ReactNode;
    className?: string;
}
export declare const ChatContainer: React.FC<ChatContainerProps>;
export interface ChatMessageListProps {
    children: React.ReactNode;
    className?: string;
}
export declare const ChatMessageList: React.ForwardRefExoticComponent<ChatMessageListProps & React.RefAttributes<HTMLDivElement>>;
export interface ChatMessageProps {
    children: React.ReactNode;
    position?: 'left' | 'right';
    variant?: 'default' | 'primary' | 'secondary';
    showAvatar?: boolean;
    avatar?: React.ReactNode;
    timestamp?: string;
    senderName?: string;
    className?: string;
}
export declare const ChatMessage: React.FC<ChatMessageProps>;
export interface ChatInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onSend?: (message: string) => void;
    sendButtonLabel?: string;
    showSendButton?: boolean;
    className?: string;
}
export declare const ChatInput: React.ForwardRefExoticComponent<ChatInputProps & React.RefAttributes<HTMLInputElement>>;
export interface ChatAvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
export declare const ChatAvatar: React.FC<ChatAvatarProps>;
