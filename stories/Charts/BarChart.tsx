import React from "react";
import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { CHART_COLORS, CHART_THEME } from "./helpers";

export type BarChartProps = {
    data: any[];
    keys: string[];
    xAxisKey: string;
    stacked?: boolean;
    height?: number;
    width?: string | number;
    title?: string;
};

export const BarChart = ({
    data,
    keys,
    xAxisKey,
    stacked = false,
    height = 300,
    width = "100%",
    title,
}: BarChartProps) => {
    return (
        <div style={{ width, height: "auto" }}>
            {title && <h3 style={{ fontSize: "16px", marginBottom: "16px" }}>{title}</h3>}
            <div style={{ height }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid {...CHART_THEME.grid} vertical={false} />
                        <XAxis
                            dataKey={xAxisKey}
                            {...CHART_THEME.axis}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            {...CHART_THEME.axis}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            contentStyle={CHART_THEME.tooltip.contentStyle}
                            cursor={{ fill: "rgba(0,0,0,0.05)" }}
                        />
                        <Legend verticalAlign="top" height={36} />
                        {keys.map((key, index) => (
                            <Bar
                                key={key}
                                dataKey={key}
                                fill={CHART_COLORS[index % CHART_COLORS.length]}
                                stackId={stacked ? "stack" : undefined}
                                radius={stacked ? 0 : [4, 4, 0, 0]}
                            />
                        ))}
                    </RechartsBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
