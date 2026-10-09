import { useState } from "react";
import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Sparkline } from "@/components/charts/Sparkline/Sparkline";
import { Dashboard } from "@/components/layout/Dashboard/Dashboard";
import type { DashboardWidget, DashboardProps } from "@/components/layout/Dashboard/Dashboard";

// Static content components defined at module level to avoid shared React Element instances between stories
// The figures carry no colour: colour says good or bad, not which metric it is (docs/design/composition.md).
const KpiValue = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: "var(--wim-font-size-2xl)", fontWeight: "var(--wim-font-weight-bold)" }}>
    {children}
  </div>
);

const RevenueContent = () => <KpiValue>$12,400</KpiValue>;

const UsersContent = () => <KpiValue>2,841</KpiValue>;

const TasksContent = () => <KpiValue>17</KpiValue>;

// A real chart, not a labelled box standing in for one.
const SessionsChart = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <Sparkline
      data={[412, 388, 455, 501, 476, 298, 327]}
      type="area"
      width="100%"
      height={80}
      ariaLabel={t("story.dashboard_chart_caption")}
    />
  );
};

const meta: Meta<typeof Dashboard> = {
  title: "Components/Layout/Dashboard",
  component: Dashboard,
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  argTypes: {
    columns: { control: "number" },
    gap: { control: "radio", options: ["xs", "sm", "md", "lg", "xl"] },
    editable: { control: "boolean" },
    showEditToggle: { control: "boolean" },
    // Disable controls for props that contain React nodes or functions
    widgets: { control: false },
    children: { control: false },
    onRemove: { control: false },
    onAdd: { control: false },
    onEditChange: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

const DefaultDashboard = (args: DashboardProps) => {
  const { t } = useTranslation(ALL_NAMESPACES);

  const activityContent = (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--wim-spacing-xs)" }}>
      {[
        t("story.dashboard_activity_signup"),
        t("story.dashboard_activity_order"),
        t("story.dashboard_activity_export"),
      ].map((item) => (
        <li key={item} style={{ fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)", padding: "var(--wim-spacing-xs) 0", borderBottom: "1px solid var(--wim-color-border)" }}>
          {item}
        </li>
      ))}
    </ul>
  );

  const widgets: DashboardWidget[] = [
    { id: "revenue", title: t("story.dashboard_widget_revenue"), description: t("story.dashboard_widget_revenue_desc"), span: 1, content: <RevenueContent /> },
    { id: "users", title: t("story.dashboard_widget_users"), description: t("story.dashboard_widget_users_desc"), span: 1, content: <UsersContent /> },
    { id: "tasks", title: t("story.dashboard_widget_tasks"), span: 1, content: <TasksContent /> },
    { id: "chart", title: t("story.dashboard_widget_chart"), description: t("story.dashboard_widget_chart_desc"), span: 2, content: <SessionsChart /> },
    { id: "activity", title: t("story.dashboard_widget_activity"), span: 1, content: activityContent },
  ];

  return <Dashboard {...args} widgets={widgets} label={t("story.dashboard_story_label")} />;
};

export const Default: Story = {
  render: (args) => <DefaultDashboard {...args} />,
  args: {
    columns: 3,
    gap: "md",
  },
};

const EditableDashboard = (args: DashboardProps) => {
  const { t } = useTranslation(ALL_NAMESPACES);

  const [widgetIds, setWidgetIds] = useState<string[]>(["revenue", "users", "tasks", "chart", "activity"]);
  const [extraWidgets, setExtraWidgets] = useState<Array<{ id: string }>>([]);

  const activityContent = (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--wim-spacing-xs)" }}>
      {[
        t("story.dashboard_activity_signup"),
        t("story.dashboard_activity_order"),
        t("story.dashboard_activity_export"),
      ].map((item) => (
        <li key={item} style={{ fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)", padding: "var(--wim-spacing-xs) 0", borderBottom: "1px solid var(--wim-color-border)" }}>
          {item}
        </li>
      ))}
    </ul>
  );

  const baseWidgets: Record<string, DashboardWidget> = {
    revenue: { id: "revenue", title: t("story.dashboard_widget_revenue"), description: t("story.dashboard_widget_revenue_desc"), span: 1, content: <RevenueContent /> },
    users: { id: "users", title: t("story.dashboard_widget_users"), description: t("story.dashboard_widget_users_desc"), span: 1, content: <UsersContent /> },
    tasks: { id: "tasks", title: t("story.dashboard_widget_tasks"), span: 1, content: <TasksContent /> },
    chart: { id: "chart", title: t("story.dashboard_widget_chart"), description: t("story.dashboard_widget_chart_desc"), span: 2, content: <SessionsChart /> },
    activity: { id: "activity", title: t("story.dashboard_widget_activity"), span: 1, content: activityContent },
  };

  const newWidgetContent = (
    <div style={{ color: "var(--wim-color-text-secondary)", fontSize: "var(--wim-font-size-sm)" }}>
      {t("story.dashboard_new_widget_content")}
    </div>
  );

  const widgets: DashboardWidget[] = [
    ...widgetIds.map((id) => baseWidgets[id]),
    ...extraWidgets.map((w) => ({
      id: w.id,
      title: t("story.dashboard_new_widget_title"),
      description: t("story.dashboard_new_widget_desc"),
      span: 1 as const,
      content: newWidgetContent,
    })),
  ];

  const handleRemove = (id: string) => {
    setWidgetIds((prev) => prev.filter((wid) => wid !== id));
    setExtraWidgets((prev) => prev.filter((w) => w.id !== id));
  };

  const handleAdd = () => {
    setExtraWidgets((prev) => [...prev, { id: `widget-${Date.now()}` }]);
  };

  return (
    <Dashboard
      {...args}
      widgets={widgets}
      label={t("story.dashboard_story_label")}
      onRemove={handleRemove}
      onAdd={handleAdd}
    />
  );
};

export const Editable: Story = {
  render: (args) => <EditableDashboard {...args} />,
  args: {
    columns: 3,
    gap: "md",
    defaultEditable: true,
  },
};

const TwoColumnsDashboard = (args: DashboardProps) => {
  const { t } = useTranslation(ALL_NAMESPACES);

  const widgets: DashboardWidget[] = [
    { id: "revenue", title: t("story.dashboard_widget_revenue"), description: t("story.dashboard_widget_revenue_desc"), span: 1, content: <RevenueContent /> },
    { id: "users", title: t("story.dashboard_widget_users"), description: t("story.dashboard_widget_users_desc"), span: 1, content: <UsersContent /> },
    { id: "tasks", title: t("story.dashboard_widget_tasks"), span: 1, content: <TasksContent /> },
    { id: "chart", title: t("story.dashboard_widget_chart"), description: t("story.dashboard_widget_chart_desc"), span: 2, content: <SessionsChart /> },
  ];

  return <Dashboard {...args} widgets={widgets} label={t("story.dashboard_story_summary")} />;
};

export const TwoColumns: Story = {
  render: (args) => <TwoColumnsDashboard {...args} />,
  args: {
    columns: 2,
    gap: "lg",
  },
};
