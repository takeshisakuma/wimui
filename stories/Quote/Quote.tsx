import React from "react";
import PropTypes from "prop-types";
import "./quote.scss";
import { useTranslation } from "react-i18next";

type QuoteProps = React.ComponentPropsWithoutRef<"blockquote"> & {
  size?: "small" | "medium" | "large";
  color?: "black" | "deepgray" | "gray" | "lightgray" | "white";
  content: string;
  cite?: string;
  border?: boolean;
};

export const Quote = ({
  size = "medium",
  content,
  cite,
  color = "black",
  border = true,
  ...props
}: QuoteProps) => {
  const { t } = useTranslation();

  const sizeMap = {
    small: "sm",
    medium: "md",
    large: "lg",
  };
  const sizeClass = `wim-quote--${sizeMap[size]}`;
  const colorClass = `wim-quote--${color}`;
  const borderClass = border ? "wim-quote--border" : "";

  return (
    <blockquote
      className={[`wim-quote`, sizeClass, colorClass, borderClass]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="wim-quote__content">{t(content)}</div>
      {cite && <cite className="wim-quote__cite">{t(cite)}</cite>}
    </blockquote>
  );
};

Quote.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["black", "deepgray", "gray", "lightgray", "white"]),
  content: PropTypes.string.isRequired,
  cite: PropTypes.string,
  border: PropTypes.bool,
};
