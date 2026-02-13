import React from "react";
import {
    AreaChart as RechartsAreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { CHART_COLORS, CHART_THEME } from "./helpers";

export type AreaChartProps = {
    data: any[];
    keys: string[];
    xAxisKey: string;
    stacked?: boolean;
    height?: number;
    width?: string | number;
    title?: string;
    smooth?: boolean;
};

export const AreaChart = ({
    data,
    keys,
    xAxisKey,
    stacked = false,
    height = 300,
    width = "100%",
    title,
    smooth = true,
}: AreaChartProps) => {
    return (
        <div style={{ width, height: "auto" }}>
            {title && <h3 style={{ fontSize: "16px", marginBottom: "16px" }}>{title}</h3>}
            <div style={{ height }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsAreaChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <defs>
                            {keys.map((key, index) => {
                                const color = CHART_COLORS[index % CHART_COLORS.length];
                                return (
                                    <linearGradient key={`grad-${key}`} id={`grad-${key}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                        <stop offset="95%" stopColor={color} stopOpacity={0} />
                                    </linearGradient>
                                );
                            })}
                        </defs>
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
                        <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
                        <Legend verticalAlign="top" height={36} />
                        {keys.map((key, index) => (
                            <Area
                                key={key}
                                type={smooth ? "monotone" : "linear"}
                                dataKey={key}
                                stroke={CHART_COLORS[index % CHART_COLORS.length]}
                                fillOpacity={1}
                                fill={`url(#grad-${key})`}
                                stackId={stacked ? "stack" : undefined}
                            />
                        ))}
                    </RechartsAreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
