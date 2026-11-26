import { default as React } from '../../../../node_modules/react';
import { ButtonIntent } from '../../../types/tokens';
export interface ConfirmOptions {
    /**
     * The question the dialog asks. Phrase it as the action, e.g. "Delete this file?".
     */
    title: React.ReactNode;
    /**
     * What happens if the user confirms, e.g. that it cannot be undone.
     */
    description?: React.ReactNode;
    /**
     * Label of the confirm button. Name the action ("Delete") rather than leaving the generic default.
     * @default "OK" (localized)
     */
    confirmLabel?: React.ReactNode;
    /**
     * Label of the cancel button.
     * @default "Cancel" (localized)
     */
    cancelLabel?: React.ReactNode;
    /**
     * Color role of the confirm button. With "danger", the cancel button takes the initial focus,
     * so pressing Enter right after the dialog opens does not run the destructive action.
     * @default "default"
     */
    intent?: ButtonIntent;
}
/** Opens a confirmation dialog and resolves to true when confirmed, false when cancelled or dismissed. */
export type ConfirmFunction = (options: ConfirmOptions) => Promise<boolean>;
export interface ConfirmProviderProps {
    /**
     * The part of the app that can call `useConfirm`. Place it once near the root, inside `WimProvider`.
     */
    children: React.ReactNode;
}
/**
 * Renders the confirmation dialog that `useConfirm` opens. Calls made while a dialog is open
 * wait in order and open one after another.
 */
export declare const ConfirmProvider: {
    ({ children }: ConfirmProviderProps): React.JSX.Element;
    displayName: string;
};
/**
 * Ask the user to confirm an action and wait for the answer, from anywhere under `ConfirmProvider`.
 * Resolves to true when the user confirms, and to false when they cancel, press Escape, or the
 * provider unmounts. Use it before an action the user cannot easily undo; for an action that can be
 * undone, run it and offer Undo in a `Snackbar` instead.
 *
 * Throws when called outside `ConfirmProvider`.
 *
 * @returns `confirm(options)` — `{ title, description?, confirmLabel?, cancelLabel?, intent? }` — which returns `Promise<boolean>`.
 *
 * @example
 * const confirm = useConfirm();
 * const ok = await confirm({ title: "Delete this file?", confirmLabel: "Delete", intent: "danger" });
 * if (ok) await deleteFile(id);
 */
export declare const useConfirm: () => ConfirmFunction;
