import React from "react";
import classNames from "classnames";
import "./scroll-area.scss";

type ScrollAreaProps = React.ComponentPropsWithoutRef<"div"> & {
  text?: React.ReactNode;
  children?: React.ReactNode;
  scrollAxis?: "x" | "y" | "both";
  maxHeight?: string; //px以外にも対応するため文字列にしている
};

export const ScrollArea = ({
  text,
  children,
  scrollAxis = "y",
  maxHeight = `10rem`,
  style,
  className,
  ...props
}: ScrollAreaProps) => {
  const combinedStyle: React.CSSProperties = {
    maxHeight,
    overflowX: scrollAxis === "x" || scrollAxis === "both" ? "auto" : "hidden",
    overflowY: scrollAxis === "y" || scrollAxis === "both" ? "auto" : "hidden",
    ...style,
  };

  return (
    <div
      className={classNames("wim-scroll-area", className)}
      style={combinedStyle}
      tabIndex={0}
      {...props}
    >
      {children || text}
    </div>
  );
};
