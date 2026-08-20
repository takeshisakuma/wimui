import React from "react";
import classNames from "classnames";
import styles from "./footer.module.scss";

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
  /** Border at the top */
  bordered?: boolean;
  /** Expand content to full width (disable the centered max-width container) */
  fluid?: boolean;
  /** Background color */
  background?: "surface" | "surface-variant" | "inverse";
}

const FooterRoot = React.forwardRef<HTMLElement, FooterProps>(
  (
    { className, children, bordered, fluid, background = "surface", ...props },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={classNames("wim-footer",
          styles.root,
          bordered && styles.bordered,
          background && styles[`bg-${background}`],
          className,
        )}
        data-bordered={bordered}
        {...props}
      >
        <div className={classNames(styles.container, fluid && styles.fluid)}>
          {children}
        </div>
      </footer>
    );
  },
);

FooterRoot.displayName = "Footer";

/** 見出しの段。`Dashboard` の `titleLevel` と同じ語彙に揃えてある（T211）。 */
export type FooterTitleLevel = 2 | 3 | 4 | 5 | 6;

export interface FooterSectionProps extends React.ComponentPropsWithoutRef<"div"> {
  title?: string;
  /**
   * `title` を見出しとして描くときの段（T211）。渡さなければ見出しにならず `p` のまま。
   *
   * 既定を見出しにしてはいけない（T191 の実績）── かつて `h4` 固定だった頃、ページに
   * `h1` / `h2` があると段が飛んで axe の `heading-order` が鳴った
   * （`Probes/SaginomiyaPool` で実際に出た）。フッタの欄名は文書の見出しではない、
   * というのがそのときの判断で、ここはそれを踏襲する。
   *
   * ただし「欄名を見出しとして辿らせたい」ページも実在するので、段を明示したときだけ
   * 見出しになるようにしてある。`Alert` の `titleTag`（既定 `div`）と同じ形。段を
   * 決めるのはページ側の構造を知っている呼び出し元の仕事。
   */
  titleLevel?: FooterTitleLevel;
}

export const FooterSection = React.forwardRef<
  HTMLDivElement,
  FooterSectionProps
 >(({ className, children, title, titleLevel, ...props }, ref) => {
  /* 見た目は `.sectionTitle` が持つ（`margin: 0` と `font-size` / `font-weight` を
     明示しているので、`p` と見出しで寸法は動かない。変わるのは `@layer base` の
     行間だけ＝ T208）。 */
  const Heading = titleLevel
    ? (`h${titleLevel}` as "h2" | "h3" | "h4" | "h5" | "h6")
    : null;
  return (
    <div
      ref={ref}
      className={classNames(styles.section, className)}
      {...props}
    >
      {title &&
        (Heading ? (
          <Heading className={styles.sectionTitle}>{title}</Heading>
        ) : (
          <p className={styles.sectionTitle}>{title}</p>
        ))}
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
});

FooterSection.displayName = "Footer.Section";

export type FooterBottomProps = React.ComponentPropsWithoutRef<"div">;

export const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.bottom, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FooterBottom.displayName = "Footer.Bottom";

export const Footer = Object.assign(FooterRoot, {
  Section: FooterSection,
  Bottom: FooterBottom,
});

export default Footer;
