import { default as React } from '../../../node_modules/react';
export interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
    /** Fixed position at the top */
    fixed?: boolean;
    /** Sticky position at the top */
    sticky?: boolean;
    /** Border at the bottom */
    bordered?: boolean;
    /** Glassmorphism effect */
    glass?: boolean;
    /** Background color */
    background?: "primary" | "secondary" | "transparent";
}
export declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export interface HeaderSectionProps extends React.ComponentPropsWithoutRef<"div"> {
    align?: "start" | "center" | "end";
}
export declare const HeaderSection: React.ForwardRefExoticComponent<HeaderSectionProps & React.RefAttributes<HTMLDivElement>>;
declare const _default: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>> & {
    Section: React.ForwardRefExoticComponent<HeaderSectionProps & React.RefAttributes<HTMLDivElement>>;
};
export default _default;
