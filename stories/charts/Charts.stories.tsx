import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { BarChart, LineChart, PieChart, Stack, Title } from "wimui";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta = {
  title: "Components/Visualization/Charts",
};

export default meta;

const data = [
  { name: "Jan", sales: 4000, profit: 2400 },
  { name: "Feb", sales: 3000, profit: 1398 },
  { name: "Mar", sales: 2000, profit: 9800 },
];

export const Dashboard: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
    <Stack gap="lg">
      <Title tag="h3" size="lg">{t("story.charts_overview_title")}</Title>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <BarChart title={t("story.charts_sales_by_month")} data={data} xAxisKey="name" keys={["sales"]} />
        <LineChart title={t("story.charts_profit_trend")} data={data} xAxisKey="name" keys={["profit"]} />
        <PieChart title={t("story.charts_market_share")} data={data.map(d => ({ name: d.name, value: d.sales }))} />
      </div>
    </Stack>
    );
  }
};
