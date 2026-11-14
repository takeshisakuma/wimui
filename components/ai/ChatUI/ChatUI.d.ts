import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export interface ChatContainerProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Chat content (message list, input, etc.) */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
}
export declare const ChatContainer: ({ children, className, ...props }: ChatContainerProps) => React.ReactElement;
export interface ChatMessageListProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Chat messages */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
}
export declare const ChatMessageList: React.ForwardRefExoticComponent<ChatMessageListProps & React.RefAttributes<HTMLDivElement>>;
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
     * `--wim-comp-chat-bubble-sent` / `-received` で、intent ではなく送受信だった（T114）。
     */
    variant?: "default" | "sent" | "received";
    /** Whether to show the avatar */
    showAvatar?: boolean;
    /** Avatar element */
    avatar?: React.ReactNode;
    /** Timestamp text shown below the message */
    timestamp?: string;
    /**
     * Details about how the message was produced (model, token count, latency),
     * shown on the same line as `timestamp` in the same small, secondary text.
     */
    metadata?: React.ReactNode;
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
export declare const ChatMessage: ({ children, position, variant, showAvatar, avatar, timestamp, metadata, senderName, isTyping, actions, actionsVisible, className, ...props }: ChatMessageProps) => React.ReactElement;
/**
 * 状態の語は `AgentStatus` と同じ（T363）。ツールの呼び出しに「考え中」「待機」は無いので外す。
 * `Extract<AgentStatusValue, …>` と書くと、docgen と prop の API スナップショットが型の式を
 * そのまま記録して、値の一覧が出ない。同じファイルに値を書き、部分集合であることは下の型で保つ。
 */
export type ChatToolCallStatus = "waiting" | "running" | "done" | "error";
export interface ChatToolCallProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
    /** Name of the tool that was called, shown in a monospace face (e.g. `search_incidents`) */
    name: string;
    /**
     * State of the call. Uses the same words as `AgentStatus`; `waiting` is a call
     * that is waiting on something before it runs, such as the user's approval.
     * @default "done"
     */
    status?: ChatToolCallStatus;
    /** One-line summary shown next to the name (e.g. "6 incidents found") */
    summary?: React.ReactNode;
    /**
     * Arguments the tool was called with. Shown when expanded. A string is shown
     * as preformatted monospace text; pass a `CodeBlock` for highlighting or a copy
     * button (it brings its own frame inside this one).
     */
    input?: React.ReactNode;
    /** What the tool returned, or the error it failed with. Shown when expanded. Strings are shown as for `input`. */
    output?: React.ReactNode;
    /** Whether `input` and `output` are shown on first render. */
    defaultExpanded?: boolean;
    /** Additional class names */
    className?: string;
}
/**
 * One call the assistant made to a tool, with its arguments and result.
 *
 * Where it sits next to its neighbours: `ThoughtProcess` is the model's own
 * reasoning written as steps, `AgentStatus` is the whole agent's state on one
 * line, and `ChatToolCall` is one action against the outside world and what
 * came back. Place it inside a `ChatMessage` or directly in `ChatMessageList`.
 *
 * The status is part of the toggle's name ("search_incidents … Done"). A change
 * of status is not announced: it is not something the user did, and a run of
 * tool calls would keep talking over the conversation.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const ChatToolCall: ({ name, status, summary, input, output, defaultExpanded, className, ...props }: ChatToolCallProps) => React.ReactElement;
/** `FeedbackIntent` の部分集合（上の `ChatToolCallStatus` と同じ理由で、値を書いて型で保つ）。 */
export type ChatSystemMessageIntent = "default" | "warning" | "danger";
export interface ChatSystemMessageProps extends React.ComponentPropsWithoutRef<"div"> {
    /** The notice (e.g. "Switched to a faster model", "No answer arrived") */
    children: React.ReactNode;
    /**
     * `warning` and `danger` add an icon as well as colour, so the difference does
     * not rest on colour alone.
     * @default "default"
     */
    intent?: ChatSystemMessageIntent;
    /** An action that belongs next to the notice, such as a retry button */
    action?: React.ReactNode;
    /** Additional class names */
    className?: string;
}
/**
 * A notice in the transcript that nobody said: the conversation started, the
 * model changed, an answer never arrived. A `ChatMessage` would put it in a
 * speech bubble with a sender, which is wrong for something nobody said.
 *
 * Place it in `ChatMessageList` between messages so it shares the list's
 * spacing. It does not announce itself; when the notice is the result of
 * something the user did, announce it from the app.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const ChatSystemMessage: ({ children, intent, action, className, ...props }: ChatSystemMessageProps) => React.ReactElement;
export interface ChatInputAreaProps extends React.ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    className?: string;
}
/**
 * ChatInputArea provides a consistent footer container for chat inputs,
 * including a top border and background color.
 */
export declare const ChatInputArea: ({ children, className, ...props }: ChatInputAreaProps) => React.ReactElement;
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
export declare const ChatInput: React.ForwardRefExoticComponent<ChatInputProps & React.RefAttributes<HTMLTextAreaElement>>;
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
    /**
     * PCCS の色調スケール。色そのものではなく明度・彩度の段なので、
     * 他のコンポーネントの `color`（トークン色や任意の CSS 色）とは軸が違う。
     * 以前は `color` という名前で、同じ prop 名が 3 つの語彙を運ぶ状態の一角だった（T118）。
     */
    tone?: "s1" | "s3" | "s5" | "s7" | "s10" | "s12" | "s14" | "s16" | "s18" | "s20" | "s22" | "s24";
    /** Additional class names */
    className?: string;
}
export declare const ChatAvatar: ({ src, alt: altProp, fallback, size, tone, className, ...props }: ChatAvatarProps) => React.ReactElement;
