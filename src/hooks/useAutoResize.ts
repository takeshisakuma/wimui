import { useRef, useCallback, useEffect } from "react";

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
export const useAutoResize = (value: string | undefined, maxRows: number = 8) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    
    el.style.height = "auto";
    const computedStyle = getComputedStyle(el);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 24;
    const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
    const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
    
    // We need to account for padding to get accurate height calculation
    const maxHeight = lineHeight * maxRows + paddingBottom + paddingTop;
    
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [maxRows]);

  useEffect(() => {
    resize();
  }, [value, resize]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  return textareaRef;
};
