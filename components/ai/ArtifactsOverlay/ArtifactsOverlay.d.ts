import { default as React } from '../../../../node_modules/react';
export interface ArtifactsOverlayProps {
    /** Whether the overlay is open */
    open: boolean;
    /** Callback when open state changes */
    onOpenChange: (open: boolean) => void;
    /** Title of the artifact */
    title: string;
    /** Subtitle or version info */
    subtitle?: string;
    /** Main content */
    children: React.ReactNode;
    /** Whether to show a full-screen toggle (default: false) */
    showFullscreenToggle?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * ArtifactsOverlay is a specialized side-panel for displaying large AI-generated content.
 * It provides a clean, focused environment for reading code, documents, or data visualizations
 * without losing the context of the main conversation.
 */
export declare const ArtifactsOverlay: React.FC<ArtifactsOverlayProps>;
