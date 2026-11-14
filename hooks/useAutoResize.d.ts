/**
 * A hook to handle auto-resizing of a textarea element.
 *
 * @param value The current value of the textarea.
 * @param maxRows The maximum number of rows before scrolling begins.
 * @returns A ref to be attached to the textarea element.
 */
export declare const useAutoResize: (value: string | undefined, maxRows?: number) => import('../../node_modules/react').RefObject<HTMLTextAreaElement | null>;
