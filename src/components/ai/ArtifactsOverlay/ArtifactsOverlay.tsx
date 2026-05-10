import React from "react";
import { Drawer } from "../../overlay/Drawer/Drawer";
import { useTranslation } from "react-i18next";
import { Icon } from "../../media/Icon/Icon";
import { CloseIcon, MaximizeIcon, MinimizeIcon } from "@/icon";
import classNames from "classnames";
import styles from "./artifacts-overlay.module.scss";

export interface ArtifactsOverlayProps {
  /** Whether the overlay is open */
  open: boolean;
  /** Callback when open state changes */
  onOpenChange: (open: boolean) => void;
  /** Title of the artifact */
  title: string;
  /** Subtitle or version info */
  subtitle?: string;
  /** Main content */
  children: React.ReactNode;
  /** Whether to show a full-screen toggle (default: false) */
  showFullscreenToggle?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * ArtifactsOverlay is a specialized side-panel for displaying large AI-generated content.
 * It provides a clean, focused environment for reading code, documents, or data visualizations
 * without losing the context of the main conversation.
 */
export const ArtifactsOverlay: React.FC<ArtifactsOverlayProps> = ({
  open,
  onOpenChange,
  title,
  subtitle,
  children,
  showFullscreenToggle = false,
  className,
}) => {
  const { t } = useTranslation(["common", "form"]);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={onOpenChange} side="right">
      <Drawer.Content
        className={classNames(
          styles.content,
          isFullscreen && styles.fullscreen,
          className
        )}
      >
        <Drawer.Header className={styles.header}>
          <div className={styles.titleArea}>
            <Drawer.Title className={styles.title}>{title}</Drawer.Title>
            {subtitle && (
              <Drawer.Description className={styles.subtitle}>
                {subtitle}
              </Drawer.Description>
            )}
          </div>
          <div className={styles.actions}>
            {showFullscreenToggle && (
              <button
                type="button"
                className={styles.actionButton}
                onClick={() => setIsFullscreen(!isFullscreen)}
                aria-label={isFullscreen ? t("form:artifact_overlay.minimize") : t("form:artifact_overlay.maximize")}
              >
                <Icon component={isFullscreen ? MinimizeIcon : MaximizeIcon} size="sm" />
              </button>
            )}
            <Drawer.Close asChild>
              <button type="button" className={styles.actionButton} aria-label={t("common:a11y.close")}>
                <Icon component={CloseIcon} size="sm" />
              </button>
            </Drawer.Close>
          </div>
        </Drawer.Header>
        <div className={styles.body}>{children}</div>
      </Drawer.Content>
    </Drawer>
  );
};

ArtifactsOverlay.displayName = "ArtifactsOverlay";
