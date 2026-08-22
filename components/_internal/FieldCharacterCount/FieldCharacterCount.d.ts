import { default as React } from '../../../../node_modules/react';
export interface FieldCharacterCountProps {
    /** Current character count */
    count: number;
    /** Maximum allowed characters */
    maxLength?: number;
    /** Whether to show the count even if count is 0 */
    alwaysShow?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Error state (count exceeds maxLength) */
    isError?: boolean;
}
/**
 * Internal component to display character counts consistently across form elements.
 */
export declare const FieldCharacterCount: React.FC<FieldCharacterCountProps>;
