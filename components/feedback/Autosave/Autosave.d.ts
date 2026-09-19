import { default as React } from '../../../../node_modules/react';
export type AutosaveStatus = "idle" | "saving" | "saved" | "error";
export type AutosaveProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Save status */
    status: AutosaveStatus;
    /** Time of the last save */
    savedAt?: Date;
    /** Error message (a default message is used when omitted) */
    errorMessage?: string;
};
/**
 * Indicator that shows the autosave status.
 */
export declare const Autosave: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Save status */
    status: AutosaveStatus;
    /** Time of the last save */
    savedAt?: Date;
    /** Error message (a default message is used when omitted) */
    errorMessage?: string;
} & React.RefAttributes<HTMLDivElement>>;
