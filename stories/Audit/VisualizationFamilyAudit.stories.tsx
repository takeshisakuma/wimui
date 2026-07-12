import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  CalendarHeatmap,
  Box,
  Stack,
} from "../../src";
import { AreaChart, BarChart, LineChart, PieChart, RadarChart, ScatterChart, Treemap, GaugeChart, FunnelChart, Heatmap, Sparkline } from "../../src/charts";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/VisualizationFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const sampleData = [
  { name: "Jan", value: 400, other: 240, extra: 200 },
  { name: "Feb", value: 300, other: 139, extra: 220 },
  { name: "Mar", value: 200, other: 980, extra: 229 },
  { name: "Apr", value: 278, other: 390, extra: 200 },
  { name: "May", value: 189, other: 480, extra: 218 },
  { name: "Jun", value: 239, other: 380, extra: 250 },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const scatterData = [
  { x: 100, y: 200, z: 200, name: "A" },
  { x: 120, y: 100, z: 260, name: "B" },
  { x: 170, y: 300, z: 400, name: "C" },
  { x: 140, y: 250, z: 280, name: "D" },
  { x: 150, y: 400, z: 500, name: "E" },
  { x: 110, y: 280, z: 200, name: "F" },
];

const treemapData = [
  {
    name: "Origin",
    children: [
      { name: "iPhone", value: 5000 },
      { name: "iPad", value: 3000 },
      { name: "Mac", value: 2000 },
      { name: "Apple Watch", value: 1000 },
    ],
  },
];

const funnelData = [
  { value: 100, name: "Visit", fill: "var(--wim-color-primary)" },
  { value: 80, name: "Inquiry", fill: "var(--wim-color-info)" },
  { value: 50, name: "Order", fill: "var(--wim-color-success)" },
  { value: 40, name: "Payment", fill: "var(--wim-color-warning)" },
  { value: 26, name: "Success", fill: "var(--wim-color-danger)" },
];

const heatmapData = [
  { x: "Mon", y: "10am", value: 10 },
  { x: "Mon", y: "11am", value: 20 },
  { x: "Tue", y: "10am", value: 30 },
  { x: "Tue", y: "11am", value: 40 },
  { x: "Wed", y: "10am", value: 50 },
  { x: "Wed", y: "11am", value: 60 },
];

const calendarData = Array.from({ length: 50 }, (_, i) => {
  const date = new Date(2024, 0, i + 1);
  return {
    date: date.toISOString().split("T")[0],
    count: i % 10,
  };
});

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:visualization_family_title")}>
        
        {/* OKLCH Palette Check */}
        <ComparisonGrid title={t("audit:visualization_oklch_palette_check")}>
          <ComponentGroup label={t("audit:label_area_chart")} align="stretch">
            <AreaChart 
              data={sampleData} 
              keys={["value", "other", "extra"]} 
              xAxisKey="name" 
              height={250}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_bar_chart")} align="stretch">
            <BarChart 
              data={sampleData} 
              keys={["value", "other"]} 
              xAxisKey="name" 
              height={250}
              stacked
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_pie_chart")} align="stretch">
            <Stack direction="row" gap="lg" wrap>
              <Box style={{ flex: 1, minWidth: "300px" }}>
                <PieChart data={pieData} height={250} donut />
              </Box>
              <Box style={{ flex: 1, minWidth: "300px" }}>
                <PieChart data={pieData} height={250} />
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Legend & Tooltip Styling Check */}
        <ComparisonGrid title={t("audit:visualization_legend_tooltip_style")}>
          <ComponentGroup label={t("audit:label_line_chart")} align="stretch">
            <LineChart 
              data={sampleData} 
              keys={["value", "other"]} 
              xAxisKey="name" 
              height={250}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_radar_chart")} align="stretch">
            <RadarChart 
              data={sampleData} 
              keys={["value", "other"]} 
              indexKey="name" 
              height={300}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_scatter_chart")} align="stretch">
            <ScatterChart 
              data={scatterData} 
              height={250}
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Specialized Charts & Interaction */}
        <ComparisonGrid title={t("audit:visualization_responsive_check")}>
          <ComponentGroup label={t("audit:label_treemap")} align="stretch">
            <Treemap 
              data={treemapData[0].children} 
              dataKey="value" 
              height={250}
            />
          </ComponentGroup>
          <Stack direction="row" gap="lg" wrap>
            <ComponentGroup label={t("audit:label_gauge_chart")} width="300px">
              <GaugeChart value={75} height={200} title={t("audit:viz_system_load")} />
            </ComponentGroup>
            <ComponentGroup label={t("audit:label_funnel_chart")} width="300px">
              <FunnelChart data={funnelData} dataKey="value" nameKey={"name"} height={250} />
            </ComponentGroup>
            <ComponentGroup label={t("audit:label_heatmap")} width="400px">
              <Heatmap 
                data={heatmapData} 
                xAxisKey={["Mon", "Tue", "Wed"]} 
                yAxisKey={["10am", "11am"]} 
                height={250} 
              />
            </ComponentGroup>
          </Stack>

          <ComponentGroup label={t("audit:label_calendar_heatmap")} align="stretch">
            <Box p="md" bg="bg-surface" radius="md" style={{ border: "1px solid var(--wim-color-border)" }}>
              <CalendarHeatmap data={calendarData} year={2024} />
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Sparkline Check */}
        <ComparisonGrid title={t("audit:viz_sparkline_check")}>
          <ComponentGroup label={`${t("audit:label_sparkline")} — ${t("audit:sfx_types")}`}>
            <Stack gap="lg">
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="line" width={140} height={32} />
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="area" width={140} height={32} />
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="bar" width={140} height={32} />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_sparkline")} — ${t("audit:sfx_trends")}`}>
            <Stack gap="lg">
              <Sparkline data={[4, 6, 5, 8, 9, 11, 12, 14]} color="var(--wim-color-success)" showLastDot width={140} height={32} />
              <Sparkline data={[14, 13, 15, 11, 10, 8, 9, 6]} color="var(--wim-color-danger)" showLastDot width={140} height={32} />
              <Sparkline data={[8, 3, 9, 2, 7, 4, 10, 5]} color="var(--wim-color-info)" width={140} height={32} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

      </AuditPage>
    );
  },
};
