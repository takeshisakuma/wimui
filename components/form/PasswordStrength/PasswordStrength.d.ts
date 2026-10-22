import { default as React } from '../../../../node_modules/react';
export type PasswordStrengthLevel = 0 | 1 | 2 | 3 | 4;
export interface PasswordStrengthProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Password string to evaluate */
    password?: string;
    /**
     * Strength score (the default calculation is used when omitted)
     * 0: very weak, 1: weak, 2: fair, 3: strong, 4: very strong
     */
    score?: PasswordStrengthLevel;
    /** Whether to show the strength label */
    showLabel?: boolean;
    /** Custom strength calculation function */
    calculateLevel?: (password: string) => PasswordStrengthLevel;
}
/**
 * Component that visually indicates password strength.
 */
export declare const PasswordStrength: React.ForwardRefExoticComponent<PasswordStrengthProps & React.RefAttributes<HTMLDivElement>>;
