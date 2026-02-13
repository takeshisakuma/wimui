import { default as React } from '../../../node_modules/react';
export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
    /** Border at the top */
    bordered?: boolean;
    /** Background color */
    background?: "primary" | "secondary" | "dark";
}
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
export interface FooterSectionProps extends React.ComponentPropsWithoutRef<"div"> {
    title?: string;
}
export declare const FooterSection: React.ForwardRefExoticComponent<FooterSectionProps & React.RefAttributes<HTMLDivElement>>;
export type FooterBottomProps = React.ComponentPropsWithoutRef<"div">;
export declare const FooterBottom: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const _default: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>> & {
    Section: React.ForwardRefExoticComponent<FooterSectionProps & React.RefAttributes<HTMLDivElement>>;
    Bottom: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export default _default;
