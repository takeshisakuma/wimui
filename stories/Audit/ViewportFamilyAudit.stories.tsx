import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  GanttChart,
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

const meta: Meta = {
  title: "Audit/ViewportFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const ViewportAudit: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    // Sample data for Gantt
    const ganttTasks = [
      { id: "1", label: "Project Planning", startDate: new Date(2026, 4, 1), endDate: new Date(2026, 4, 5) },
      { id: "2", label: "Design Phase", startDate: new Date(2026, 4, 4), endDate: new Date(2026, 4, 15) },
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

    // Sample data for DataGrid
    const gridColumns = [
      { key: "id", title: "ID", width: 100, fixed: "left" as const },
      { key: "name", title: "Full Name", width: 250 },
      { key: "email", title: "Email Address", width: 300 },
      { key: "role", title: "Role", width: 150 },
      { key: "status", title: "Status", width: 120 },
      { key: "lastLogin", title: "Last Login", width: 200 },
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

          <ComponentGroup label={t("audit:label_calendar_heatmap")} noStack>
            <CalendarHeatmap
              data={heatmapData}
              year={2026}
            />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_kanban")} noStack>
            <Box style={{ border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)" }}>
              <KanbanBoard>
                <KanbanBoard.Column id="todo" title="To Do" cardCount={3}>
                  <KanbanBoard.Card id="c1">Research UI Patterns</KanbanBoard.Card>
                  <KanbanBoard.Card id="c2">Setup Audit Stories</KanbanBoard.Card>
                  <KanbanBoard.Card id="c3">Review Tokens</KanbanBoard.Card>
                </KanbanBoard.Column>
                <KanbanBoard.Column id="doing" title="In Progress" cardCount={1}>
                  <KanbanBoard.Card id="c4">Implementing Viewport Audit</KanbanBoard.Card>
                </KanbanBoard.Column>
                <KanbanBoard.Column id="done" title="Done" cardCount={2}>
                  <KanbanBoard.Card id="c5">Interaction Audit</KanbanBoard.Card>
                  <KanbanBoard.Card id="c6">Input Audit</KanbanBoard.Card>
                </KanbanBoard.Column>
                <KanbanBoard.Column id="backlog" title="Backlog" cardCount={0} />
              </KanbanBoard>
            </Box>
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
                      <Text weight="bold">Requirement Analysis</Text>
                      <Text size="xs" color="text-secondary">Completed on May 1st</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint variant="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">Design Specification</Text>
                      <Text size="xs" color="text-secondary">Approved by stakeholders</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint variant="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">Development Start</Text>
                      <Text size="xs" color="text-secondary">Environment setup complete</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">Testing Phase</Text>
                      <Text size="xs" color="text-secondary">Scheduled for next week</Text>
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
