import React from "react";
import classNames from "classnames";
import "./quote.scss";
import { useTranslation } from "react-i18next";

type QuoteProps = React.ComponentPropsWithoutRef<"blockquote"> & {
  size?: "small" | "medium" | "large";
  color?:
    | "black"
    | "deepgray"
    | "gray"
    | "lightgray"
    | "white"
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "info";
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
  className,
  ...props
}: QuoteProps) => {
  const { t } = useTranslation();

  return (
    <blockquote
      className={classNames(
        "wim-quote",
        `wim-quote--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
        `wim-quote--${color}`,
        border && "wim-quote--border",
        className,
      )}
      {...props}
    >
      <div className="wim-quote__content">{t(content)}</div>
      {cite && <cite className="wim-quote__cite">{t(cite)}</cite>}
    </blockquote>
  );
};
