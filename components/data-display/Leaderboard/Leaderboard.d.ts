import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type LeaderboardEntry = {
    id: string;
    name: string;
    score: number | string;
    avatar?: string;
    highlight?: boolean;
};
export type LeaderboardProps = React.ComponentPropsWithoutRef<"ol"> & {
    /** List of ranking entries */
    entries: LeaderboardEntry[];
    /** Label for the score unit */
    unit?: string;
    /** Size */
    size?: ComponentSizeBasic;
};
/**
 * Component that displays a scored ranking. The top 3 entries get medal colors.
 */
export declare const Leaderboard: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & {
    /** List of ranking entries */
    entries: LeaderboardEntry[];
    /** Label for the score unit */
    unit?: string;
    /** Size */
    size?: ComponentSizeBasic;
} & React.RefAttributes<HTMLOListElement>>;
