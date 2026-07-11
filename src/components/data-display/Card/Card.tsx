import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentSize } from "../../../types/tokens";
import styles from "./card.module.scss";

export type CardProps = {
  /**
   * If true, the card will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Visual style variant of the card */
  variant?: "elevated" | "outline" | "flat" | "glass";
  /** Whether to enable hover animation and click effects */
  interactive?: boolean;
  /** Padding size */
  padding?: ComponentSize | "none";
  /** Corner radius size */
  radius?: ComponentSize | "none";
} & React.ComponentPropsWithoutRef<"div">;

interface CardComponent {
  (props: CardProps & { ref?: React.Ref<HTMLDivElement> }): React.ReactElement;
  displayName?: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

const CardInner = (
  {
    asChild = false,
    variant = "elevated",
    padding = "md",
    radius = "lg",
    interactive = false,
    className,
    children,
    ...props
  }: CardProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      ref={ref}
      className={classNames("wim-card", 
        styles.root,
        styles[variant],
        styles[`padding-${padding}`],
        styles[`radius-${radius}`],
        interactive && styles.interactive,
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
export const Card = React.forwardRef(CardInner) as unknown as CardComponent;

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
