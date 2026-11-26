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
    /** Whether to paint the rank badges of the top three in gold, silver and bronze (off by default: the number and the order already say the rank) */
    showMedals?: boolean;
};
/**
 * Component that displays a scored ranking. Pass `showMedals` to give the top 3 entries medal colors.
 */
export declare const Leaderboard: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & {
    /** List of ranking entries */
    entries: LeaderboardEntry[];
    /** Label for the score unit */
    unit?: string;
    /** Size */
    size?: ComponentSizeBasic;
    /** Whether to paint the rank badges of the top three in gold, silver and bronze (off by default: the number and the order already say the rank) */
    showMedals?: boolean;
} & React.RefAttributes<HTMLOListElement>>;
