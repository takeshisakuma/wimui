import React from "react";
import PropTypes from "prop-types";
import "./scroll-area.scss";
import { useTranslation } from "react-i18next";

type ScrollAreaProps = React.ComponentPropsWithoutRef<"div"> & {
  text?: string;
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
  const { t } = useTranslation();

  const combinedStyle: React.CSSProperties = {
    maxHeight,
    overflowX: scrollAxis === "x" || scrollAxis === "both" ? "auto" : "hidden",
    overflowY: scrollAxis === "y" || scrollAxis === "both" ? "auto" : "hidden",
    ...style,
  };

  return (
    <div
      className={`wim-scroll-area ${className || ""}`}
      style={combinedStyle}
      {...props}
    >
      {children || (text ? t(text) : null)}
    </div>
  );
};

ScrollArea.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  scrollAxis: PropTypes.oneOf(["x", "y", "both"]),
  /** Maximum height of the scroll area */
  maxHeight: PropTypes.string,
};
