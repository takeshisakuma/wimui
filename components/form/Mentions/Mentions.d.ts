import { default as React } from '../../../../node_modules/react';
import { Textarea } from '../../form/Textarea/Textarea';
type MentionOption = {
    id: string | number;
    display: string;
};
export interface MentionsProps extends Omit<React.ComponentPropsWithoutRef<typeof Textarea>, "onSelect"> {
    /** Mention candidates to suggest */
    options: MentionOption[];
    /** Character that triggers the suggestion list */
    trigger?: string;
    /** Callback when a suggestion is selected */
    onSelect?: (option: MentionOption) => void;
    /** Whether to render as a child element. */
    asChild?: boolean;
}
/**
 * Component that shows selectable suggestions while typing, triggered by a specific character (e.g. @).
 */
export declare const Mentions: React.ForwardRefExoticComponent<MentionsProps & React.RefAttributes<HTMLDivElement>>;
export default Mentions;
