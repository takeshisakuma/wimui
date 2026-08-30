"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{t={name:`WaterfallStep`,tokens:[`--wim-color-text-secondary`,`--wim-font-family-default`,`--wim-font-size-xs`],anatomy:[`container`,`value`],anatomyStyle:`module`,props:{x:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},y:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},payload:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  name: string;
  /** 昇順の [下端, 上端]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
  kind: StepKind;
  /** 値ラベルに出す数。\`total\` は running total、それ以外は増減。 */
  amount: number;
  /** その段を終えた時点の running total。表の 3 列目。 */
  running: number;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`span`,value:{name:`tuple`,raw:`[low: number, high: number]`,elements:[{name:`unknown`},{name:`unknown`}],required:!0},description:`昇順の [下端, 上端]。recharts はこれを画素の矩形に写す。`},{key:`kind`,value:{name:`union`,raw:`"increase" | "decrease" | "total"`,elements:[{name:`literal`,value:`"increase"`},{name:`literal`,value:`"decrease"`},{name:`literal`,value:`"total"`}],required:!0}},{key:`amount`,value:{name:`number`,required:!0},description:"値ラベルに出す数。`total` は running total、それ以外は増減。"},{key:`running`,value:{name:`number`,required:!0},description:`その段を終えた時点の running total。表の 3 列目。`}]}},description:``}}},n={name:`WaterfallChart`,tokens:[`--wim-color-text-secondary`,`--wim-font-family-default`,`--wim-font-size-xs`],anatomy:[`container`,`value`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Label for this step, shown on the X axis. */
  name: string;
  /**
   * How much this step adds (positive) or removes (negative) from the running
   * total. On a \`total\` step this is ignored — the bar is drawn to the running
   * total instead.
   */
  value: number;
  /**
   * Draw this step as a total: a bar from the baseline up to the running total,
   * rather than a floating change. Use it for the opening and closing columns.
   * @default false
   */
  total?: boolean;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0},description:`Label for this step, shown on the X axis.`},{key:`value`,value:{name:`number`,required:!0},description:`How much this step adds (positive) or removes (negative) from the running
total. On a \`total\` step this is ignored — the bar is drawn to the running
total instead.`},{key:`total`,value:{name:`boolean`,required:!1},description:`Draw this step as a total: a bar from the baseline up to the running total,
rather than a floating change. Use it for the opening and closing columns.
@default false`}]}}],raw:`WaterfallItem[]`},description:`The steps, in the order they are applied.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},r={name:`TreemapTile`,tokens:[`--wim-color-primary-fill`,`--wim-font-size-xs`],anatomy:[`container`,`root`],anatomyStyle:`global`,props:{}},i={name:`Treemap`,tokens:[`--wim-color-primary-fill`,`--wim-font-size-xs`],anatomy:[`container`,`root`],anatomyStyle:`global`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | null`,elements:[{name:`string`},{name:`number`},{name:`null`}]}],raw:`Record<string, string | number | null>`}],raw:`ChartDataPoint[]`},description:`Data to display in the treemap.`},dataKey:{required:!0,tsType:{name:`string`},description:`The key in the data objects that represents the size of the rectangle.`},aspectRatio:{required:!1,tsType:{name:`number`},description:`The aspect ratio of the rectangles.
@default 4/3`,defaultValue:{value:`4 / 3`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},a={name:`Sparkline`,tokens:[],anatomy:[],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`Sequence of values to plot, in order`},type:{required:!1,tsType:{name:`union`,raw:`"line" | "area" | "bar"`,elements:[{name:`literal`,value:`"line"`},{name:`literal`,value:`"area"`},{name:`literal`,value:`"bar"`}]},description:`Visual form of the sparkline`,defaultValue:{value:`"line"`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the sparkline (number in px, or a CSS value such as "100%")`,defaultValue:{value:`"100%"`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`Height of the sparkline in px`,defaultValue:{value:`24`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:`Stroke/fill color (defaults to the primary chart color)`,defaultValue:{value:`"var(--wim-color-chart-primary)"`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:`Stroke width for line and area types`,defaultValue:{value:`2`,computed:!1}},showLastDot:{required:!1,tsType:{name:`boolean`},description:`Whether to emphasize the last data point with a dot (line and area only)`,defaultValue:{value:`false`,computed:!1}},min:{required:!1,tsType:{name:`number`},description:`Lower bound of the y-axis domain (defaults to the data minimum)`},max:{required:!1,tsType:{name:`number`},description:`Upper bound of the y-axis domain (defaults to the data maximum)`},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessible label describing the trend; when omitted the sparkline is hidden from assistive tech`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`}}},o={name:`ScatterChart`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ x: number; y: number; z?: number; name: string }`,signature:{properties:[{key:`x`,value:{name:`number`,required:!0}},{key:`y`,value:{name:`number`,required:!0}},{key:`z`,value:{name:`number`,required:!1}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`{ x: number; y: number; z?: number; name: string }[]`},description:"Points to plot. `z` optionally controls the point size."},xAxisName:{required:!1,tsType:{name:`string`},description:`Name of the X axis, shown in the tooltip.
@default "X"`,defaultValue:{value:`"X"`,computed:!1}},yAxisName:{required:!1,tsType:{name:`string`},description:`Name of the Y axis, shown in the tooltip.
@default "Y"`,defaultValue:{value:`"Y"`,computed:!1}},xDomain:{required:!1,tsType:{name:`tuple`,raw:`[
  number | "auto" | "dataMin" | (string & {}),
  number | "auto" | "dataMax" | (string & {}),
]`,elements:[{name:`union`,raw:`number | "auto" | "dataMin" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMin"`},{name:`unknown`}]},{name:`union`,raw:`number | "auto" | "dataMax" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMax"`},{name:`unknown`}]}]},description:`Range of the X axis.
@default ["auto", "auto"]`,defaultValue:{value:`["auto", "auto"]`,computed:!1}},yDomain:{required:!1,tsType:{name:`tuple`,raw:`[
  number | "auto" | "dataMin" | (string & {}),
  number | "auto" | "dataMax" | (string & {}),
]`,elements:[{name:`union`,raw:`number | "auto" | "dataMin" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMin"`},{name:`unknown`}]},{name:`union`,raw:`number | "auto" | "dataMax" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMax"`},{name:`unknown`}]}]},description:`Range of the Y axis.
@default ["auto", "auto"]`,defaultValue:{value:`["auto", "auto"]`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},s={name:`SankeyNode`,tokens:[`--wim-color-text-secondary`,`--wim-font-family-default`,`--wim-font-size-xs`],anatomy:[`container`,`label`],anatomyStyle:`module`,props:{x:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},y:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},index:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},payload:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ name?: string; targetNodes?: number[] }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!1}},{key:`targetNodes`,value:{name:`Array`,elements:[{name:`number`}],raw:`number[]`,required:!1}}]}},description:``}}},c={name:`SankeyLinkBand`,tokens:[`--wim-color-text-secondary`,`--wim-font-family-default`,`--wim-font-size-xs`],anatomy:[`container`,`label`],anatomyStyle:`module`,props:{sourceX:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},targetX:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},sourceY:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},targetY:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},sourceControlX:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},targetControlX:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},linkWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},payload:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ source?: { name?: string } }`,signature:{properties:[{key:`source`,value:{name:`signature`,type:`object`,raw:`{ name?: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!1}}]},required:!1}}]}},description:``},index:{required:!1,tsType:{name:`number`},description:``},colorIndexOf:{required:!1,tsType:{name:`Map`,elements:[{name:`string`},{name:`number`}],raw:`Map<string, number>`},description:"名前 → `nodes` での位置。**recharts は帯に始点の添字を渡さない**（`payload.source`\nは座標を持つノードそのもので、添字は入っていない）ので、ラッパ側の対応表を渡す。"}}},l={name:`SankeyChart`,tokens:[`--wim-color-text-secondary`,`--wim-font-family-default`,`--wim-font-size-xs`],anatomy:[`container`,`label`],anatomyStyle:`module`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:"Every node in the diagram, in the order their colors are assigned. Names\nare what `links` refers to, so they have to be unique."},links:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Name of the node the flow leaves. */
  source: string;
  /** Name of the node the flow arrives at. */
  target: string;
  /** Size of the flow. The band's thickness is this value. */
  value: number;
}`,signature:{properties:[{key:`source`,value:{name:`string`,required:!0},description:`Name of the node the flow leaves.`},{key:`target`,value:{name:`string`,required:!0},description:`Name of the node the flow arrives at.`},{key:`value`,value:{name:`number`,required:!0},description:`Size of the flow. The band's thickness is this value.`}]}}],raw:`SankeyLink[]`},description:"Flows between nodes, by node name. A link naming a node that is not in\n`nodes` is dropped (and reported in the console during development)."},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},u={name:`RadarChart`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | null`,elements:[{name:`string`},{name:`number`},{name:`null`}]}],raw:`Record<string, string | number | null>`}],raw:`ChartDataPoint[]`},description:`Data to display in the chart.`},keys:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Keys in the data objects to render as radar areas (series).`},indexKey:{required:!0,tsType:{name:`string`},description:`The key in the data objects used for the axis (category) labels.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},d={name:`PieChart`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; value: number }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ name: string; value: number }[]`},description:`Slices to display. Each entry has a name (label) and a value.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},donut:{required:!1,tsType:{name:`boolean`},description:`If true, renders as a donut chart with a hollow center.
@default false`,defaultValue:{value:`false`,computed:!1}},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},f={name:`LineChart`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | null`,elements:[{name:`string`},{name:`number`},{name:`null`}]}],raw:`Record<string, string | number | null>`}],raw:`ChartDataPoint[]`},description:`Data to display in the chart.`},keys:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Keys in the data objects to render as lines (series).`},xAxisKey:{required:!0,tsType:{name:`string`},description:`The key in the data objects used for the X axis labels.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},smooth:{required:!1,tsType:{name:`boolean`},description:`If true, draws smooth (monotone) curves instead of straight lines.
@default false`,defaultValue:{value:`false`,computed:!1}},yDomain:{required:!1,tsType:{name:`tuple`,raw:`[
  number | "auto" | "dataMin" | (string & {}),
  number | "auto" | "dataMax" | (string & {}),
]`,elements:[{name:`union`,raw:`number | "auto" | "dataMin" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMin"`},{name:`unknown`}]},{name:`union`,raw:`number | "auto" | "dataMax" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMax"`},{name:`unknown`}]}]},description:`Range of the Y axis. Pass ["auto", "auto"] when the change matters more
than the distance from zero (a yield moving between 84% and 85% is a flat
line on a 0–100 axis).
@default [0, "auto"]`,defaultValue:{value:`[0, "auto"]`,computed:!1}},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},p={name:`Heatmap`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ x: string; y: string; value: number }`,signature:{properties:[{key:`x`,value:{name:`string`,required:!0}},{key:`y`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`number`,required:!0}}]}}],raw:`{ x: string; y: string; value: number }[]`},description:`Cells to display. Each entry maps an x/y category pair to a value.`},xAxisKey:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Ordered list of X axis category labels.`},yAxisKey:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Ordered list of Y axis category labels.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},colorRange:{required:!1,tsType:{name:`tuple`,raw:`[string, string]`,elements:[{name:`string`},{name:`string`}]},description:`Colors used for the lowest and highest values.
@default ["var(--wim-color-surface-variant)", "var(--wim-color-chart-primary)"]`,defaultValue:{value:`["var(--wim-color-surface-variant)", "var(--wim-color-chart-primary)"]`,computed:!1}},animated:{required:!1,tsType:{name:`boolean`},description:`Whether to animate the cells on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},m={name:`GaugeChart`,tokens:[`--wim-color-text-primary`,`--wim-font-size-2xl`,`--wim-font-weight-bold`],anatomy:[`container`,`gaugeLabel`],anatomyStyle:`module`,props:{value:{required:!0,tsType:{name:`number`},description:`Current value displayed by the gauge. Clamped between min and max.`},min:{required:!1,tsType:{name:`number`},description:`Minimum value of the gauge.
@default 0`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Maximum value of the gauge.
@default 100`,defaultValue:{value:`100`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 200`,defaultValue:{value:`200`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},label:{required:!1,tsType:{name:`string`},description:`Text label displayed with the value inside the gauge.`},color:{required:!1,tsType:{name:`string`},description:`Color of the gauge arc. Defaults to the first chart color.`},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},h={name:`GanttChart`,tokens:[`--wim-border-width-thick`,`--wim-border-width-thin`,`--wim-color-border`,`--wim-color-border-secondary`,`--wim-color-glass-border`,`--wim-color-overlay-medium`,`--wim-color-primary`,`--wim-color-scrollbar-thumb`,`--wim-color-scrollbar-track`,`--wim-color-surface`,`--wim-color-surface-subtle`,`--wim-color-text-on-primary`,`--wim-color-text-primary`,`--wim-color-text-secondary`,`--wim-duration-fast`,`--wim-easing-standard`,`--wim-font-size-sm`,`--wim-font-size-xs`,`--wim-font-weight-bold`,`--wim-radius-component`,`--wim-radius-container`,`--wim-radius-md`,`--wim-spacing-2xs`,`--wim-spacing-xl`,`--wim-width-sm`],anatomy:[`bar`,`body`,`clickable`,`header`,`headerCell`,`labelPanel`,`labelRow`,`labelText`,`layout`,`progress`,`row`,`timelineScroll`],anatomyStyle:`module`,props:{tasks:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  startDate: Date;
  endDate: Date;
  color?: string;
  progress?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`startDate`,value:{name:`Date`,required:!0}},{key:`endDate`,value:{name:`Date`,required:!0}},{key:`color`,value:{name:`string`,required:!1}},{key:`progress`,value:{name:`number`,required:!1}}]}}],raw:`GanttTask[]`},description:`Tasks to render as bars in the chart.`},startDate:{required:!1,tsType:{name:`Date`},description:`Start of the visible date range. Defaults to the earliest task start date.`},endDate:{required:!1,tsType:{name:`Date`},description:`End of the visible date range. Defaults to the latest task end date.`},viewMode:{required:!1,tsType:{name:`union`,raw:`"day" | "week" | "month"`,elements:[{name:`literal`,value:`"day"`},{name:`literal`,value:`"week"`},{name:`literal`,value:`"month"`}]},description:`Granularity of the time axis.
@default "day"`,defaultValue:{value:`"day"`,computed:!1}},columnWidth:{required:!1,tsType:{name:`number`},description:`Width of one time column in pixels. Defaults to a value suited to the view mode.`},rowHeight:{required:!1,tsType:{name:`number`},description:`Height of one task row in pixels.
@default 40`,defaultValue:{value:`40`,computed:!1}},onTaskClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(task: GanttTask) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  startDate: Date;
  endDate: Date;
  color?: string;
  progress?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`startDate`,value:{name:`Date`,required:!0}},{key:`endDate`,value:{name:`Date`,required:!0}},{key:`color`,value:{name:`string`,required:!1}},{key:`progress`,value:{name:`number`,required:!1}}]}},name:`task`}],return:{name:`void`}}},description:`Called when a task bar is clicked.`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the container.`},labels:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  ariaChart?: string;
  ariaTaskBar?: (label: string, start: string, end: string) => string;
}`,signature:{properties:[{key:`ariaChart`,value:{name:`string`,required:!1}},{key:`ariaTaskBar`,value:{name:`signature`,type:`function`,raw:`(label: string, start: string, end: string) => string`,signature:{arguments:[{type:{name:`string`},name:`label`},{type:{name:`string`},name:`start`},{type:{name:`string`},name:`end`}],return:{name:`string`}},required:!1}}]}},description:`Labels for manual translation overrides.`}}},g={name:`FunnelChart`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | null`,elements:[{name:`string`},{name:`number`},{name:`null`}]}],raw:`Record<string, string | number | null>`}],raw:`ChartDataPoint[]`},description:`Data to display in the chart. Each entry represents one funnel stage.`},dataKey:{required:!0,tsType:{name:`string`},description:`The key in the data objects that represents the value of each stage.`},nameKey:{required:!0,tsType:{name:`string`},description:`The key in the data objects used for the stage labels.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},_={name:`CandleMark`,tokens:[`--wim-color-chart-danger`,`--wim-color-chart-success`],anatomy:[`container`,`falling`,`filledBody`,`hollowBody`,`rising`,`wick`],anatomyStyle:`module`,props:{x:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},y:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},payload:{required:!1,tsType:{name:`intersection`,raw:`Candle & {
  /** 昇順の [low, high]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
  /** 終値が始値以上か。塗りつぶしの有無と色の両方がこれで決まる。 */
  rising: boolean;
}`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Label for this period, shown on the X axis. */
  name: string;
  /** Value at the start of the period. */
  open: number;
  /** Highest value reached during the period. */
  high: number;
  /** Lowest value reached during the period. */
  low: number;
  /** Value at the end of the period. */
  close: number;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0},description:`Label for this period, shown on the X axis.`},{key:`open`,value:{name:`number`,required:!0},description:`Value at the start of the period.`},{key:`high`,value:{name:`number`,required:!0},description:`Highest value reached during the period.`},{key:`low`,value:{name:`number`,required:!0},description:`Lowest value reached during the period.`},{key:`close`,value:{name:`number`,required:!0},description:`Value at the end of the period.`}]}},{name:`signature`,type:`object`,raw:`{
  /** 昇順の [low, high]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
  /** 終値が始値以上か。塗りつぶしの有無と色の両方がこれで決まる。 */
  rising: boolean;
}`,signature:{properties:[{key:`span`,value:{name:`tuple`,raw:`[low: number, high: number]`,elements:[{name:`unknown`},{name:`unknown`}],required:!0},description:`昇順の [low, high]。recharts はこれを画素の矩形に写す。`},{key:`rising`,value:{name:`boolean`,required:!0},description:`終値が始値以上か。塗りつぶしの有無と色の両方がこれで決まる。`}]}}]},description:``}}},v={name:`CandlestickChart`,tokens:[`--wim-color-chart-danger`,`--wim-color-chart-success`],anatomy:[`container`,`falling`,`filledBody`,`hollowBody`,`rising`,`wick`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Label for this period, shown on the X axis. */
  name: string;
  /** Value at the start of the period. */
  open: number;
  /** Highest value reached during the period. */
  high: number;
  /** Lowest value reached during the period. */
  low: number;
  /** Value at the end of the period. */
  close: number;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0},description:`Label for this period, shown on the X axis.`},{key:`open`,value:{name:`number`,required:!0},description:`Value at the start of the period.`},{key:`high`,value:{name:`number`,required:!0},description:`Highest value reached during the period.`},{key:`low`,value:{name:`number`,required:!0},description:`Lowest value reached during the period.`},{key:`close`,value:{name:`number`,required:!0},description:`Value at the end of the period.`}]}}],raw:`Candle[]`},description:`One entry per period, oldest first.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},y={name:`BarChart`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | null`,elements:[{name:`string`},{name:`number`},{name:`null`}]}],raw:`Record<string, string | number | null>`}],raw:`ChartDataPoint[]`},description:`Data to display in the chart.`},keys:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Keys in the data objects to render as bars (series).`},xAxisKey:{required:!0,tsType:{name:`string`},description:`The key in the data objects used for the X axis labels.`},stacked:{required:!1,tsType:{name:`boolean`},description:`If true, series are stacked on top of each other.
@default false`,defaultValue:{value:`false`,computed:!1}},yDomain:{required:!1,tsType:{name:`tuple`,raw:`[
  number | "auto" | "dataMin" | (string & {}),
  number | "auto" | "dataMax" | (string & {}),
]`,elements:[{name:`union`,raw:`number | "auto" | "dataMin" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMin"`},{name:`unknown`}]},{name:`union`,raw:`number | "auto" | "dataMax" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMax"`},{name:`unknown`}]}]},description:`Range of the Y axis. Pass ["auto", "auto"] when the change matters more
than the distance from zero. Bars keep zero by default: their length is
the value, so cutting the axis lies about the ratio between them.
@default [0, "auto"]`,defaultValue:{value:`[0, "auto"]`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},b={name:`BoxAndWhisker`,tokens:[`--wim-color-chart-primary`,`--wim-color-text-primary`],anatomy:[`box`,`container`,`median`,`whisker`],anatomyStyle:`module`,props:{x:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},y:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},payload:{required:!1,tsType:{name:`intersection`,raw:`BoxPlotItem & {
  /** 昇順の [min, max]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
}`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Label for this group, shown on the X axis. */
  name: string;
  /** The smallest value that is not an outlier. */
  min: number;
  /** First quartile — a quarter of the values are below this. */
  q1: number;
  /** The middle value. */
  median: number;
  /** Third quartile — a quarter of the values are above this. */
  q3: number;
  /** The largest value that is not an outlier. */
  max: number;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0},description:`Label for this group, shown on the X axis.`},{key:`min`,value:{name:`number`,required:!0},description:`The smallest value that is not an outlier.`},{key:`q1`,value:{name:`number`,required:!0},description:`First quartile — a quarter of the values are below this.`},{key:`median`,value:{name:`number`,required:!0},description:`The middle value.`},{key:`q3`,value:{name:`number`,required:!0},description:`Third quartile — a quarter of the values are above this.`},{key:`max`,value:{name:`number`,required:!0},description:`The largest value that is not an outlier.`}]}},{name:`signature`,type:`object`,raw:`{
  /** 昇順の [min, max]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
}`,signature:{properties:[{key:`span`,value:{name:`tuple`,raw:`[low: number, high: number]`,elements:[{name:`unknown`},{name:`unknown`}],required:!0},description:`昇順の [min, max]。recharts はこれを画素の矩形に写す。`}]}}]},description:``}}},x={name:`BoxPlot`,tokens:[`--wim-color-chart-primary`,`--wim-color-text-primary`],anatomy:[`box`,`container`,`median`,`whisker`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** Label for this group, shown on the X axis. */
  name: string;
  /** The smallest value that is not an outlier. */
  min: number;
  /** First quartile — a quarter of the values are below this. */
  q1: number;
  /** The middle value. */
  median: number;
  /** Third quartile — a quarter of the values are above this. */
  q3: number;
  /** The largest value that is not an outlier. */
  max: number;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0},description:`Label for this group, shown on the X axis.`},{key:`min`,value:{name:`number`,required:!0},description:`The smallest value that is not an outlier.`},{key:`q1`,value:{name:`number`,required:!0},description:`First quartile — a quarter of the values are below this.`},{key:`median`,value:{name:`number`,required:!0},description:`The middle value.`},{key:`q3`,value:{name:`number`,required:!0},description:`Third quartile — a quarter of the values are above this.`},{key:`max`,value:{name:`number`,required:!0},description:`The largest value that is not an outlier.`}]}}],raw:`BoxPlotItem[]`},description:`One entry per group. Each is a five-number summary, already computed.`},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},S={name:`AreaChart`,tokens:[],anatomy:[`container`],anatomyStyle:`module`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`string | number | null`,elements:[{name:`string`},{name:`number`},{name:`null`}]}],raw:`Record<string, string | number | null>`}],raw:`ChartDataPoint[]`},description:`Data to display in the chart.`},keys:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Keys in the data objects to render as areas (series).`},xAxisKey:{required:!0,tsType:{name:`string`},description:`The key in the data objects used for the X axis labels.`},stacked:{required:!1,tsType:{name:`boolean`},description:`If true, series are stacked on top of each other.
@default false`,defaultValue:{value:`false`,computed:!1}},yDomain:{required:!1,tsType:{name:`tuple`,raw:`[
  number | "auto" | "dataMin" | (string & {}),
  number | "auto" | "dataMax" | (string & {}),
]`,elements:[{name:`union`,raw:`number | "auto" | "dataMin" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMin"`},{name:`unknown`}]},{name:`union`,raw:`number | "auto" | "dataMax" | (string & {})`,elements:[{name:`number`},{name:`literal`,value:`"auto"`},{name:`literal`,value:`"dataMax"`},{name:`unknown`}]}]},description:`Range of the Y axis. Pass ["auto", "auto"] when the change matters more
than the distance from zero. Bars keep zero by default: their length is
the value, so cutting the axis lies about the ratio between them.
@default [0, "auto"]`,defaultValue:{value:`[0, "auto"]`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`The height of the chart in pixels.
@default 300`,defaultValue:{value:`300`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The width of the chart (e.g., "100%", 500).
@default "100%"`,defaultValue:{value:`"100%"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed above the chart.`},smooth:{required:!1,tsType:{name:`boolean`},description:`If true, draws smooth (monotone) curves instead of straight lines.
@default true`,defaultValue:{value:`true`,computed:!1}},animated:{required:!1,tsType:{name:`boolean`},description:`If true, animates the chart on mount.
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the chart. Defaults to \`title\` when omitted; pass this
when the chart has no visible title, or when the title is not descriptive
enough on its own.`}}},C={WaterfallStep:t,WaterfallChart:n,TreemapTile:r,Treemap:i,Sparkline:a,ScatterChart:o,SankeyNode:s,SankeyLinkBand:c,SankeyChart:l,RadarChart:u,PieChart:d,LineChart:f,Heatmap:p,GaugeChart:m,GanttChart:h,FunnelChart:g,CandleMark:_,CandlestickChart:v,BarChart:y,BoxAndWhisker:b,BoxPlot:x,AreaChart:S}}))();export{S as AreaChart,y as BarChart,b as BoxAndWhisker,x as BoxPlot,_ as CandleMark,v as CandlestickChart,g as FunnelChart,h as GanttChart,m as GaugeChart,p as Heatmap,f as LineChart,d as PieChart,u as RadarChart,l as SankeyChart,c as SankeyLinkBand,s as SankeyNode,o as ScatterChart,a as Sparkline,i as Treemap,r as TreemapTile,n as WaterfallChart,t as WaterfallStep,C as default};