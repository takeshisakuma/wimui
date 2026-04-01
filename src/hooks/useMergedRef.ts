import React from "react";

type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Multiple refs can be assigned to a single element.
 * Useful when you need to use a ref internally but also support a forwarded ref.
 */
export function useMergedRef<T>(...refs: PossibleRef<T>[]): React.RefCallback<T> {
  return React.useCallback((node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(node);
      } else {
        try {
          (ref as React.MutableRefObject<T | null>).current = node;
        } catch (error) {
          console.error(`Failed to assign ref: ${error}`);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...refs]);
}
