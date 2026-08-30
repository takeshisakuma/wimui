import { default as React } from '../../../../node_modules/react';
export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
    /** Border at the top */
    bordered?: boolean;
    /** Expand content to full width (disable the centered max-width container) */
    fluid?: boolean;
    /** Background color */
    background?: "surface" | "surface-variant" | "inverse";
}
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
export declare const FooterSection: React.ForwardRefExoticComponent<FooterSectionProps & React.RefAttributes<HTMLDivElement>>;
export type FooterBottomProps = React.ComponentPropsWithoutRef<"div">;
export declare const FooterBottom: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>> & {
    Section: React.ForwardRefExoticComponent<FooterSectionProps & React.RefAttributes<HTMLDivElement>>;
    Bottom: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export default Footer;
