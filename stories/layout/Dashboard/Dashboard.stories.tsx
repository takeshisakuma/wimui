import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Dashboard } from "@/components/layout/Dashboard/Dashboard";
import type { DashboardWidget, DashboardProps } from "@/components/layout/Dashboard/Dashboard";

// Static content components defined at module level to avoid shared React Element instances between stories
const RevenueContent = () => (
  <div style={{ fontSize: "var(--wim-font-size-2xl)", fontWeight: "var(--wim-font-weight-bold)", color: "var(--wim-color-success)" }}>
    $12,400
  </div>
);

const UsersContent = () => (
  <div style={{ fontSize: "var(--wim-font-size-2xl)", fontWeight: "var(--wim-font-weight-bold)", color: "var(--wim-color-primary)" }}>
    2,841
  </div>
);

const TasksContent = () => (
  <div style={{ fontSize: "var(--wim-font-size-2xl)", fontWeight: "var(--wim-font-weight-bold)", color: "var(--wim-color-warning)" }}>
    17
  </div>
);

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

  const chartContent = (
    <div style={{
      height: "80px",
      background: "linear-gradient(to right, var(--wim-color-primary-subtle), var(--wim-color-primary-muted))",
      borderRadius: "var(--wim-radius-component)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--wim-color-text-secondary)",
      fontSize: "var(--wim-font-size-sm)",
    }}>
      {t("story.dashboard_chart_placeholder")}
    </div>
  );

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
    { id: "chart", title: t("story.dashboard_widget_chart"), description: t("story.dashboard_widget_chart_desc"), span: 2, content: chartContent },
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

  const chartContent = (
    <div style={{
      height: "80px",
      background: "linear-gradient(to right, var(--wim-color-primary-subtle), var(--wim-color-primary-muted))",
      borderRadius: "var(--wim-radius-component)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--wim-color-text-secondary)",
      fontSize: "var(--wim-font-size-sm)",
    }}>
      {t("story.dashboard_chart_placeholder")}
    </div>
  );

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
    chart: { id: "chart", title: t("story.dashboard_widget_chart"), description: t("story.dashboard_widget_chart_desc"), span: 2, content: chartContent },
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

  const chartContent = (
    <div style={{
      height: "80px",
      background: "linear-gradient(to right, var(--wim-color-primary-subtle), var(--wim-color-primary-muted))",
      borderRadius: "var(--wim-radius-component)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--wim-color-text-secondary)",
      fontSize: "var(--wim-font-size-sm)",
    }}>
      {t("story.dashboard_chart_placeholder")}
    </div>
  );

  const widgets: DashboardWidget[] = [
    { id: "revenue", title: t("story.dashboard_widget_revenue"), description: t("story.dashboard_widget_revenue_desc"), span: 1, content: <RevenueContent /> },
    { id: "users", title: t("story.dashboard_widget_users"), description: t("story.dashboard_widget_users_desc"), span: 1, content: <UsersContent /> },
    { id: "tasks", title: t("story.dashboard_widget_tasks"), span: 1, content: <TasksContent /> },
    { id: "chart", title: t("story.dashboard_widget_chart"), description: t("story.dashboard_widget_chart_desc"), span: 2, content: chartContent },
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
