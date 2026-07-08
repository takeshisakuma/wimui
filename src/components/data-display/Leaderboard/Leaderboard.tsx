import React from "react";
import classNames from "classnames";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./leaderboard.module.scss";

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
export const Leaderboard = React.forwardRef<HTMLOListElement, LeaderboardProps>(
  ({ entries, unit, size = "md", className, ...props }, ref) => {
    return (
      <ol
        ref={ref}
        className={classNames(styles.root, styles[size], className)}
        {...props}
      >
        {entries.map((entry, index) => {
          const rank = index + 1;
          return (
            <li
              key={entry.id}
              aria-current={entry.highlight ? true : undefined}
              className={classNames(
                styles.item,
                rank <= 3 && styles[`rank${rank}`],
                entry.highlight && styles.highlight,
              )}
            >
              <span className={styles.rank} aria-hidden="true">
                {rank}
              </span>
              {entry.avatar && (
                <img
                  src={entry.avatar}
                  alt=""
                  className={styles.avatar}
                  aria-hidden="true"
                />
              )}
              <span className={styles.name}>{entry.name}</span>
              <span className={styles.score}>
                <span className={styles.scoreValue}>{entry.score}</span>
                {unit && <span className={styles.unit}>{unit}</span>}
              </span>
            </li>
          );
        })}
      </ol>
    );
  },
);

Leaderboard.displayName = "Leaderboard";
