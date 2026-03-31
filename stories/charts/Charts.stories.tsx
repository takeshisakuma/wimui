import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { BarChart } from "@/components/charts/BarChart/BarChart";
import { LineChart } from "@/components/charts/LineChart/LineChart";
import { PieChart } from "@/components/charts/PieChart/PieChart";
import { Stack } from "@/components/layout/Stack/Stack";
import { Heading } from "@/components/typography/Heading/Heading";

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
  render: () => (
    <Stack gap="lg">
      <Heading tag="h3" size="lg">Visualization Suite Overview</Heading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <BarChart title="Sales by Month" data={data} xAxisKey="name" keys={["sales"]} />
        <LineChart title="Profit Trend" data={data} xAxisKey="name" keys={["profit"]} />
        <PieChart title="Market Share" data={data.map(d => ({ name: d.name, value: d.sales }))} />
      </div>
    </Stack>
  )
};
