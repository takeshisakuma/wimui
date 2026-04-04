import React from "react";
import classNames from "classnames";
import type { ComponentSize } from "../../../types/tokens";
import "./card.scss";

export type CardProps<C extends React.ElementType = "div"> = {
  /**
   * カードのバリアント
   */
  variant?: "elevated" | "outline" | "flat";
  /**
   * パディングのサイズ
   */
  padding?: ComponentSize | "none";
  /**
   * 角丸のサイズ
   */
  radius?: ComponentSize | "none";
  /**
   * レンダリングするHTML要素
   */
  as?: C;
} & React.ComponentPropsWithoutRef<C>;

/**
 * `Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。
 */
export const Card = <C extends React.ElementType = "div">({
  variant = "elevated",
  padding = "md",
  radius = "md",
  as,
  className,
  children,
  ...props
}: CardProps<C>) => {
  const Component = as || "div";
  return (
    <Component
      className={classNames(
        "wim-card",
        `wim-card--${variant}`,
        `wim-card--padding-${padding}`,
        `wim-card--radius-${radius}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardHeader = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames("wim-card__header", className)} {...props}>
    {children}
  </div>
);

export const CardBody = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames("wim-card__body", className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames("wim-card__footer", className)} {...props}>
    {children}
  </div>
);

CardHeader.displayName = "Card.Header";
CardBody.displayName = "Card.Body";
CardFooter.displayName = "Card.Footer";

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
