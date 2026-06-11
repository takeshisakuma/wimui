import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Icon } from "../../media/Icon/Icon";
import { ExternalLinkIcon } from "@/icon";
import styles from "./source-citation.module.scss";

export interface SourceCitationProps {
  /** Title of the source */
  title: string;
  /** Source URL. When provided, renders as a clickable link. */
  url?: string;
  /** Brief excerpt or description of the source */
  description?: string;
  /** Numeric citation index shown as a badge (e.g. 1, 2, 3) */
  index?: number;
  /** Domain label shown below the title (auto-derived from url when omitted) */
  domain?: string;
  /** Additional CSS class */
  className?: string;
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * SourceCitation displays a single cited source with optional link, index badge, and description.
 * Use SourceCitationList to render multiple sources in a row.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const SourceCitation = ({
  title,
  url,
  description,
  index,
  domain: domainProp,
  className,
}: SourceCitationProps) => {
  const { t } = useWimTranslation("form");
  const displayDomain = domainProp ?? (url ? extractDomain(url) : undefined);
  const ariaLabel = index != null ? t("source_citation.source_label", { index }) : title;

  const content = (
    <>
      <div className={styles.header}>
        {index != null && (
          <span className={styles.index} aria-hidden="true">
            {index}
          </span>
        )}
        <span className={styles.title}>{title}</span>
        {url && (
          <Icon
            component={ExternalLinkIcon}
            size="xs"
            className={styles.externalIcon}
            aria-hidden="true"
          />
        )}
      </div>
      {displayDomain && <div className={styles.domain}>{displayDomain}</div>}
      {description && <p className={styles.description}>{description}</p>}
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(styles.root, styles.link, className)}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={classNames(styles.root, className)} aria-label={ariaLabel}>
      {content}
    </div>
  );
};

export interface SourceCitationListProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Array of sources to display */
  sources: SourceCitationProps[];
  /** Additional CSS class */
  className?: string;
}

/**
 * SourceCitationList renders a horizontal scrollable list of SourceCitation items,
 * automatically assigning sequential index values.
 */
export const SourceCitationList = React.forwardRef<HTMLDivElement, SourceCitationListProps>(
  ({ sources, className, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.list, className)} {...props}>
        {sources.map((source, i) => (
          <SourceCitation key={source.url ?? source.title} index={i + 1} {...source} />
        ))}
      </div>
    );
  }
);

SourceCitationList.displayName = "SourceCitationList";
