import React, { createContext, useContext, useState, useCallback } from "react";
import classNames from "classnames";

interface SwipeableListContextValue {
  openedId: string | null;
  reportOpen: (id: string) => void;
  reportClose: (id: string) => void;
}

const SwipeableListContext = createContext<SwipeableListContextValue | null>(null);

export const useSwipeableList = () => useContext(SwipeableListContext);

export interface SwipeableListProps {
  children: React.ReactNode;
  /** If true, only one item can be swiped open at a time. */
  exclusive?: boolean;
  className?: string;
}

/**
 * SwipeableList provides a context for managing multiple SwipeAction components,
 * enabling features like exclusive opening (close others when one opens).
 */
export const SwipeableList: React.FC<SwipeableListProps> = ({
  children,
  exclusive = true,
  className,
}) => {
  const [openedId, setOpenedId] = useState<string | null>(null);

  const reportOpen = useCallback((id: string) => {
    if (exclusive) {
      setOpenedId(id);
    }
  }, [exclusive]);

  const reportClose = useCallback((id: string) => {
    if (exclusive) {
      setOpenedId((prev) => (prev === id ? null : prev));
    }
  }, [exclusive]);

  return (
    <SwipeableListContext.Provider value={{ openedId, reportOpen, reportClose }}>
      <div className={classNames("wim-swipeable-list", className)}>{children}</div>
    </SwipeableListContext.Provider>
  );
};
