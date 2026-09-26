import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type AgentStatusValue = "idle" | "thinking" | "running" | "waiting" | "done" | "error";
export interface AgentStatusProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Current state of the agent */
    status: AgentStatusValue;
    /** Optional description of what the agent is doing; falls back to the localized status label */
    message?: string;
    /** Size variant */
    size?: ComponentSizeBasic;
    /** Whether to show the text label next to the indicator */
    showLabel?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * AgentStatus displays the real-time state of an AI agent as a compact
 * animated indicator — idle, thinking, running, waiting, done, or error.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const AgentStatus: React.ForwardRefExoticComponent<AgentStatusProps & React.RefAttributes<HTMLDivElement>>;
