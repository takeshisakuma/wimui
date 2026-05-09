import { useState, useEffect } from "react";

/**
 * Hook to detect if the current focus was triggered by a keyboard interaction.
 * Used to implement "focus-visible" logic programmatically if needed,
 * though native CSS :focus-visible is preferred when possible.
 */
export function useFocusVisible() {
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    let lastInteraction = "mouse";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        lastInteraction = "keyboard";
      }
    };

    const handleMouseDown = () => {
      lastInteraction = "mouse";
    };

    const handleFocus = () => {
      if (lastInteraction === "keyboard") {
        setIsFocusVisible(true);
      }
    };

    const handleBlur = () => {
      setIsFocusVisible(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("focus", handleFocus, true);
    window.addEventListener("blur", handleBlur, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("focus", handleFocus, true);
      window.removeEventListener("blur", handleBlur, true);
    };
  }, []);

  return isFocusVisible;
}
