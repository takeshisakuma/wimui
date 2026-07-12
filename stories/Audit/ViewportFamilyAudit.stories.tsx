import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  CalendarHeatmap,
  KanbanBoard,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelinePoint,
  TimelineConnector,
  TimelineContent,
  DataGrid,
  Text,
  Box,
} from "../../src";
import { GanttChart } from "../../src/charts";

const meta: Meta = {
  title: "Audit/ViewportFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    // Sample data for Gantt
    const ganttTasks = [
      { id: "1", label: t("audit:viewport_project_planning"), startDate: new Date(2026, 4, 1), endDate: new Date(2026, 4, 5) },
      { id: "2", label: t("audit:viewport_design_phase"), startDate: new Date(2026, 4, 4), endDate: new Date(2026, 4, 15) },
      { id: "3", label: "Implementation", startDate: new Date(2026, 4, 12), endDate: new Date(2026, 4, 28), progress: 45 },
      { id: "4", label: "Review", startDate: new Date(2026, 4, 25), endDate: new Date(2026, 5, 5) },
    ];

    // Sample data for Heatmap
    const heatmapData = [
      { date: "2026-05-01", count: 2 },
      { date: "2026-05-05", count: 8 },
      { date: "2026-05-10", count: 5 },
      { date: "2026-05-15", count: 12 },
    ];

    // Kanban state
    const [kanbanColumns, setKanbanColumns] = React.useState<Record<string, string[]>>({
      todo: ["c1", "c2", "c3"],
      doing: ["c4"],
      done: ["c5", "c6"],
      backlog: [],
    });

    const kanbanLabels: Record<string, string> = {
      c1: "Research UI Patterns",
      c2: "Setup Audit Stories",
      c3: "Review Tokens",
      c4: "Implementing Viewport Audit",
      c5: "Interaction Audit",
      c6: "Input Audit",
    };

    const handleKanbanMove = (cardId: string, fromCol: string, toCol: string) => {
      setKanbanColumns((prev) => {
        const next = { ...prev };
        if (next[fromCol] && next[toCol]) {
          next[fromCol] = prev[fromCol].filter((id) => id !== cardId);
          next[toCol] = [...prev[toCol], cardId];
        }
        return next;
      });
    };

    // Sample data for DataGrid
    const gridColumns = [
      { key: "id", title: "ID", width: 100, fixed: "left" as const },
      { key: "name", title: t("audit:viewport_col_full_name"), width: 250 },
      { key: "email", title: t("audit:viewport_col_email"), width: 300 },
      { key: "role", title: "Role", width: 150 },
      { key: "status", title: "Status", width: 120 },
      { key: "lastLogin", title: t("audit:viewport_col_last_login"), width: 200 },
      { key: "action", title: "Action", width: 100, fixed: "right" as const },
    ];
    const gridData = Array.from({ length: 30 }, (_, i) => ({
      id: `USR-${1000 + i}`,
      name: `User Name ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 3 === 0 ? "Admin" : "Editor",
      status: i % 2 === 0 ? "Active" : "Inactive",
      lastLogin: "2026-05-05 14:20",
      action: "Edit",
    }));

    return (
      <AuditPage title={t("audit:viewport_family_title")}>
        {/* Scrollbar & Masking Audit */}
        <ComparisonGrid title={`${t("audit:scrollbar_design_check")} & ${t("audit:masking_fade_check")}`}>
          <ComponentGroup label={t("audit:label_gantt_chart")} noStack>
             <div style={{ height: "320px" }}>
               <GanttChart
                 tasks={ganttTasks}
                 startDate={new Date(2026, 4, 1)}
                 endDate={new Date(2026, 5, 30)}
                 viewMode="day"
               />
             </div>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_calendar_heatmap")} noStack width="fit-content">
            <CalendarHeatmap
              data={heatmapData}
              year={2026}
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_kanban")} noStack>
            <KanbanBoard style={{ maxWidth: "100%" }} onCardMove={handleKanbanMove}>
              <KanbanBoard.Column id="todo" title={t("audit:viewport_todo")} cardCount={kanbanColumns.todo.length}>
                {kanbanColumns.todo.map((id) => (
                  <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>
                ))}
              </KanbanBoard.Column>
              <KanbanBoard.Column id="doing" title={t("audit:viewport_in_progress")} cardCount={kanbanColumns.doing.length}>
                {kanbanColumns.doing.map((id) => (
                  <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>
                ))}
              </KanbanBoard.Column>
              <KanbanBoard.Column id="done" title={t("audit:viewport_col_done")} cardCount={kanbanColumns.done.length}>
                {kanbanColumns.done.map((id) => (
                  <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>
                ))}
              </KanbanBoard.Column>
              <KanbanBoard.Column id="backlog" title={t("audit:viewport_backlog")} cardCount={kanbanColumns.backlog.length}>
                {kanbanColumns.backlog.map((id) => (
                  <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>
                ))}
              </KanbanBoard.Column>
            </KanbanBoard>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Sticky & Boundary Audit */}
        <ComparisonGrid title={t("audit:sticky_boundary_check")}>
          <ComponentGroup label={t("audit:label_viewport_grid")} noStack>
            <Box style={{ height: "400px", border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)" }}>
              <DataGrid
                columns={gridColumns}
                data={gridData}
                height={400}
                stickyHeader
              />
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_timeline")} noStack>
             <Box style={{ height: "350px", border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)", overflow: "auto", padding: "var(--wim-spacing-lg)", background: "var(--wim-color-bg-surface)" }}>
                <Timeline align="left">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint variant="success" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_req_analysis")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_req_analysis_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint variant="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_design_spec")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_design_spec_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint variant="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_dev_start")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_dev_start_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_testing")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_testing_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
             </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
