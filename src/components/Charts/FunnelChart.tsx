import React from "react";
import {
    FunnelChart as RechartsFunnelChart,
    Funnel,
    LabelList,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { CHART_COLORS, CHART_THEME } from "./helpers";

export type FunnelChartProps = {
    data: any[];
    dataKey: string;
    nameKey: string;
    height?: number;
    width?: string | number;
    title?: string;
};

export const FunnelChart = ({
    data,
    dataKey,
    nameKey,
    height = 300,
    width = "100%",
    title,
}: FunnelChartProps) => {
    return (
        <div style={{ width, height: "auto" }}>
            {title && <h3 style={{ fontSize: "16px", marginBottom: "16px" }}>{title}</h3>}
            <div style={{ height }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsFunnelChart>
                        <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
                        <Funnel dataKey={dataKey} data={data} isAnimationActive>
                            <LabelList position="right" fill="#888" dataKey={nameKey} stroke="none" />
                            {data.map((_entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                                />
                            ))}
                        </Funnel>
                    </RechartsFunnelChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
