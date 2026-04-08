import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentSize } from "../../../types/tokens";
import "./card.scss";

export type CardProps<C extends React.ElementType = "div"> = {
  /**
   * If true, the card will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
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

interface CardComponent {
  <C extends React.ElementType = "div">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: CardProps<C> & { ref?: React.Ref<any> },
  ): React.ReactElement;
  displayName?: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

const CardInner = <C extends React.ElementType = "div">(
  {
    asChild = false,
    variant = "elevated",
    padding = "md",
    radius = "md",
    as,
    className,
    children,
    ...props
  }: CardProps<C>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>,
) => {
  const Component = asChild ? Slot : (as || "div");
  return (
    <Component
      ref={ref}
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

/**
 * `Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Card: CardComponent = React.forwardRef(CardInner as any) as any;

Card.displayName = "Card";

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
