/**
 * Grow a `<textarea>` with its content, up to `maxRows` rows; past that it scrolls.
 * `Textarea` and `PromptInput` already do this — use the hook only for a textarea you render yourself.
 *
 * @param value The current value of the textarea (the height is recomputed when it changes).
 * @param maxRows The maximum number of rows before scrolling begins.
 * @returns A ref to be attached to the textarea element.
 *
 * @example
 * const [value, setValue] = useState("");
 * const ref = useAutoResize(value, 6);
 * return <textarea ref={ref} value={value} onChange={(e) => setValue(e.target.value)} />;
 */
export declare const useAutoResize: (value: string | undefined, maxRows?: number) => import('../../node_modules/react').RefObject<HTMLTextAreaElement | null>;
