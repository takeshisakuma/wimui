import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { CloseSmallIcon, EditIcon, PlusIcon } from "@/icon";
import { Icon } from "../../media/Icon/Icon";
import { Card } from "../../data-display/Card/Card";
import { Button } from "../../form/Button/Button";
import styles from "./dashboard.module.scss";

// --- Types ---

export interface DashboardWidget {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  /** Column span (1–4). Default: 1. */
  span?: 1 | 2 | 3 | 4;
  /** Row span (1–3). Default: 1. */
  rowSpan?: 1 | 2 | 3;
}

interface DashboardContextType {
  editable: boolean;
  onRemove?: (id: string) => void;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

const useDashboardContext = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx)
    throw new Error("Dashboard subcomponents must be used within Dashboard");
  return ctx;
};

// --- Dashboard Root ---

export interface DashboardProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onRemove"> {
  /** Widget definitions to render. */
  widgets?: DashboardWidget[];
  /** Whether the dashboard is in edit mode (controlled). */
  editable?: boolean;
  /** Initial edit mode state (uncontrolled). Default: false. */
  defaultEditable?: boolean;
  /** Called when edit mode changes. */
  onEditChange?: (editable: boolean) => void;
  /** Called when a widget is removed. */
  onRemove?: (widgetId: string) => void;
  /** Called when the "Add Widget" button is clicked. */
  onAdd?: () => void;
  /** Number of columns. Default: 3. */
  columns?: number;
  /** Gap between widgets. Default: "md". */
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Show the edit toggle button in the header. Default: true. */
  showEditToggle?: boolean;
  /** Dashboard heading label. */
  label?: string;
}

export const Dashboard = React.forwardRef<HTMLDivElement, DashboardProps>(
  (
    {
      widgets,
      editable: controlledEditable,
      defaultEditable = false,
      onEditChange,
      onRemove,
      onAdd,
      columns = 3,
      gap = "md",
      showEditToggle = true,
      label,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation("components");
    const isControlled = controlledEditable !== undefined;
    const [uncontrolledEditable, setUncontrolledEditable] =
      useState(defaultEditable);

    const editable = isControlled ? controlledEditable : uncontrolledEditable;

    const toggleEdit = useCallback(() => {
      const next = !editable;
      if (!isControlled) {
        setUncontrolledEditable(next);
      }
      onEditChange?.(next);
    }, [editable, isControlled, onEditChange]);

    const gridStyle: React.CSSProperties = {
      "--dashboard-columns": columns,
      ...style,
    } as React.CSSProperties;

    const contextValue = useMemo(
      () => ({ editable: editable ?? false, onRemove }),
      [editable, onRemove],
    );

    return (
      <DashboardContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={classNames(styles.root, className)}
          aria-label={label ?? t("dashboard_widget.label")}
          {...props}
        >
          {showEditToggle && (
            <div className={styles.header}>
              {label && <h2 className={styles.heading}>{label}</h2>}
              <Button
                size="sm"
                variant={editable ? "solid" : "outline"}
                intent="default"
                className={classNames(styles.editToggle, {
                  [styles.editActive]: editable,
                })}
                onClick={toggleEdit}
                aria-pressed={editable}
                aria-label={
                  editable ? t("dashboard_widget.exit_edit") : t("dashboard_widget.enter_edit")
                }
                icon={<Icon component={EditIcon} size="sm" />}
              >
                {editable ? t("dashboard_widget.exit_edit") : t("dashboard_widget.enter_edit")}
              </Button>
            </div>
          )}

          <div
            className={classNames(styles.grid, styles[`gap-${gap}`])}
            style={gridStyle}
            role="region"
            aria-label={t("dashboard_widget.grid_label")}
          >
            {widgets
              ? widgets.map((widget) => (
                  <DashboardWidgetCard key={widget.id} widget={widget} />
                ))
              : children}

            {editable && onAdd && (
              <Button
                asChild
                className={styles.addButton}
                onClick={onAdd}
                aria-label={t("dashboard_widget.add_widget")}
              >
                <button type="button">
                  <Icon component={PlusIcon} size="md" />
                  <span>{t("dashboard_widget.add_widget")}</span>
                </button>
              </Button>
            )}
          </div>
        </div>
      </DashboardContext.Provider>
    );
  },
);

Dashboard.displayName = "Dashboard";

// --- Dashboard.Widget ---

export interface DashboardWidgetProps
  extends React.ComponentPropsWithoutRef<"div"> {
  widget: DashboardWidget;
}

export const DashboardWidgetCard = ({
  widget,
  className,
  ...props
}: DashboardWidgetProps) => {
  const { editable, onRemove } = useDashboardContext();
  const { t } = useTranslation("components");

  const { id, title, description, content, span = 1, rowSpan = 1 } = widget;

  return (
    <Card
      variant="outline"
      padding="md"
      radius="md"
      className={classNames(
        styles.widget,
        styles[`span-${span}`],
        styles[`row-${rowSpan}`],
        { [styles.editMode]: editable },
        className,
      )}
      style={
        {
          "--widget-span": span,
          "--widget-row-span": rowSpan,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className={styles.widgetHeader}>
        <div className={styles.widgetMeta}>
          <h3 className={styles.widgetTitle}>{title}</h3>
          {description && (
            <p className={styles.widgetDescription}>{description}</p>
          )}
        </div>
        {editable && onRemove && (
          <Button
            size="sm"
            variant="ghost"
            intent="destructive"
            className={styles.removeButton}
            onClick={() => onRemove(id)}
            aria-label={t("dashboard_widget.remove_widget", { title })}
            icon={<Icon component={CloseSmallIcon} size="sm" />}
          />
        )}
      </div>
      <div className={styles.widgetContent}>{content}</div>
    </Card>
  );
};

DashboardWidgetCard.displayName = "DashboardWidgetCard";

// --- Compound export ---

export type { DashboardWidgetProps as DashboardWidgetCardProps };
