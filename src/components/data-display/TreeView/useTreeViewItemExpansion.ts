import React, { useState, useEffect } from "react";

/**
 * Manages expand/collapse animation state for a TreeViewItem.
 * Uses CSS grid-template-rows trick for smooth height transition.
 */
export function useTreeViewItemExpansion(isExpanded: boolean) {
  const [, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isExpanded);
  const [isVisualExpanded, setIsVisualExpanded] = useState(isExpanded);

  useEffect(() => {
    if (isExpanded) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldRender(true);
      const timer = setTimeout(() => {
        setIsVisualExpanded(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisualExpanded(false);
      setIsAnimating(true);
    }
  }, [isExpanded]);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === "grid-template-rows" && !isExpanded) {
      setShouldRender(false);
      setIsAnimating(false);
    }
  };

  return { shouldRender, isVisualExpanded, handleTransitionEnd };
}
