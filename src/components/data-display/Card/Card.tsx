import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentSize } from "../../../types/tokens";
import styles from "./card.module.scss";

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
    props: CardProps<C> & { ref?: React.Ref<React.ComponentRef<C>> },
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
  ref: React.Ref<React.ComponentRef<C>>,
) => {
  const Component = asChild ? Slot : (as || "div");
  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={classNames(
        styles.root,
        styles[variant],
        styles[`padding-${padding}`],
        styles[`radius-${radius}`],
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
export const Card = React.forwardRef(CardInner as any) as unknown as CardComponent;

Card.displayName = "Card";

export const CardHeader = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.header, className)} {...props}>
    {children}
  </div>
);

export const CardBody = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.body, className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.footer, className)} {...props}>
    {children}
  </div>
);

CardHeader.displayName = "Card.Header";
CardBody.displayName = "Card.Body";
CardFooter.displayName = "Card.Footer";

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
