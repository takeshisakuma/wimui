import React from "react";
import classNames from "classnames";
import "./quote.scss";
import { ComponentSize } from "../../../types/tokens";

type QuoteProps = React.ComponentPropsWithoutRef<"blockquote"> & {
  size?: ComponentSize;
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
  content?: React.ReactNode;
  cite?: React.ReactNode;
  border?: boolean;
};

export const Quote = ({
  size = "md",
  content,
  cite,
  color = "black",
  border = true,
  className,
  children,
  ...props
}: QuoteProps) => {
  const finalContent = content ?? children;

  return (
    <blockquote
      className={classNames(
        "wim-quote",
        `wim-quote--${size}`,
        `wim-quote--${color}`,
        border && "wim-quote--border",
        className,
      )}
      {...props}
    >
      <div className="wim-quote__content">{finalContent}</div>
      {cite && <cite className="wim-quote__cite">{cite}</cite>}
    </blockquote>
  );
};
