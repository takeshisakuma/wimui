import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { CloseIcon, EditIcon, PlusIcon } from "@/icon";
import { Icon } from "../../media/Icon/Icon";
import { Card } from "../../data-display/Card/Card";
import { Button } from "../../form/Button/Button";
import styles from "./dashboard.module.scss";

// --- Types ---

/** ウィジェットの見出しに使う段。ページ側の見出しに合わせる（T140）。 */
export type DashboardTitleLevel = 2 | 3 | 4 | 5 | 6;

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
  /** T140: 見出しの段はページ側の構造で決まるので、根から配る。 */
  titleLevel: DashboardTitleLevel;
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
  /**
   * Heading level for the widget titles. Match it to the page: a dashboard
   * under an `h1` needs `2`, one under an `h2` section keeps `3`.
   * @default 3
   */
  titleLevel?: DashboardTitleLevel;
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
      showEditToggle,
      titleLevel = 3,
      label,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("components");
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

    /* T139: 以前は `showEditToggle` の既定が true で、読み取り専用の画面にも
       「Edit」が出ていた（押しても onRemove が無ければ何も起きない）。
       **渡された機能から決める** ── 編集の状態か、消す/足す手立てがあるときだけ。 */
    const canEdit =
      // **`editable` ではなく `controlledEditable`**。前者は上で既定を埋めた
      // 導出値なので常に定義済みで、条件が常に true になっていた（実測で判明）。
      controlledEditable !== undefined ||
      defaultEditable ||
      onRemove !== undefined ||
      onAdd !== undefined;
    const showToggle = showEditToggle ?? canEdit;

    const contextValue = useMemo(
      () => ({ editable: editable ?? false, onRemove, titleLevel }),
      [editable, onRemove, titleLevel],
    );

    return (
      <DashboardContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={classNames("wim-dashboard", styles.root, className)}
          /* T205: 名前（`aria-label`）はロールを持つ要素にしか付けられない。
             素の `div` は generic ＝ **命名が禁止されたロール**なので、axe は
             `aria-prohibited-attr` で「その名前は読み上げられないかもしれない」と
             警告する（violations ではなく incomplete なので CI は黙っていた）。
             ダッシュボードは「関連するウィジェットのまとまり」なので `group`。 */
          role="group"
          aria-label={label ?? t("dashboard_widget.label")}
          {...props}
        >
          {/* 見出しと編集の入口は別もの。以前は同じブロックに入っていたので、
              トグルを隠すと**見出しまで消えていた**（T139 を直したときにテストが
              教えてくれた）。 */}
          {(label || showToggle) && (
            <div className={styles.header}>
              {label && <h2 className={styles.heading}>{label}</h2>}
              {showToggle && (
              <Button
                size="sm"
                variant={editable ? "solid" : "outline"}
                intent="default"
                // 状態は `variant`（solid/outline）と `aria-pressed` が表す（T58）。
                className={undefined}
                onClick={toggleEdit}
                aria-pressed={editable}
                aria-label={
                  editable ? t("dashboard_widget.exit_edit") : t("dashboard_widget.enter_edit")
                }
                icon={<Icon component={EditIcon} size="sm" />}
              >
                {editable ? t("dashboard_widget.exit_edit") : t("dashboard_widget.enter_edit")}
              </Button>
              )}
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
  const { editable, onRemove, titleLevel } = useDashboardContext();
  /* T140: 見出しの段は**ページ側の構造**で決まる。h3 固定だと `h1` の直後に
     置いたときに段が飛ぶ（axe heading-order）。見た目はクラスが持つので、
     段を変えても描画は変わらない。 */
  const Heading = `h${titleLevel}` as "h2" | "h3" | "h4" | "h5" | "h6";
  const { t } = useWimTranslation("components");

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
          <Heading className={styles.widgetTitle}>{title}</Heading>
          {description && (
            <p className={styles.widgetDescription}>{description}</p>
          )}
        </div>
        {editable && onRemove && (
          <Button
            size="sm"
            variant="ghost"
            intent="danger"
            className={styles.removeButton}
            onClick={() => onRemove(id)}
            aria-label={t("dashboard_widget.remove_widget", { title })}
            icon={<Icon component={CloseIcon} size="sm" />}
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
