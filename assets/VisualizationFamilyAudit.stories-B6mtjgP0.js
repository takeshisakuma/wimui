"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{it as s,t as c}from"./src-CV0le6yM.js";import{t as l}from"./Box-BVB_9vOB.js";import{t as u}from"./Stack-z584y6QE.js";import{i as d,n as f,r as p,t as m}from"./AuditUtils-CDbRpqsv.js";import{t as h}from"./Sparkline-ODcYwvDv.js";import{A as g,E as _,O as v,S as y,b,c as x,f as S,g as C,i as w,m as T,n as E,o as D,t as O,u as k,v as A}from"./charts-Dg5J96mY.js";var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{t(),a(),r(),c(),O(),d(),j=i(),M={title:`Audit/VisualizationFamily`,parameters:{layout:`fullscreen`}},N=[{name:`Jan`,value:400,other:240,extra:200},{name:`Feb`,value:300,other:139,extra:220},{name:`Mar`,value:200,other:980,extra:229},{name:`Apr`,value:278,other:390,extra:200},{name:`May`,value:189,other:480,extra:218},{name:`Jun`,value:239,other:380,extra:250}],P=[{name:`Group A`,value:400},{name:`Group B`,value:300},{name:`Group C`,value:300},{name:`Group D`,value:200}],F=[{x:100,y:200,z:200,name:`A`},{x:120,y:100,z:260,name:`B`},{x:170,y:300,z:400,name:`C`},{x:140,y:250,z:280,name:`D`},{x:150,y:400,z:500,name:`E`},{x:110,y:280,z:200,name:`F`}],I=[{name:`Origin`,children:[{name:`iPhone`,value:5e3},{name:`iPad`,value:3e3},{name:`Mac`,value:2e3},{name:`Apple Watch`,value:1e3}]}],L=[{value:100,name:`Visit`},{value:80,name:`Inquiry`},{value:50,name:`Order`},{value:40,name:`Payment`},{value:26,name:`Success`}],R=[{name:`Revenue`,value:100},{name:`Costs`,value:-30},{name:`Tax`,value:-18},{name:`Profit`,value:0,total:!0}],z=[{name:`A`,min:12,q1:24,median:33,q3:48,max:71},{name:`B`,min:20,q1:31,median:38,q3:44,max:58},{name:`C`,min:8,q1:14,median:22,q3:39,max:66}],B=[{name:`Mon`,open:32,high:38,low:31,close:37},{name:`Tue`,open:37,high:39,low:33,close:34},{name:`Wed`,open:34,high:41,low:34,close:40}],V=[`Search`,`Direct`,`Pricing`,`Left`,`Signed up`],H=[{source:`Search`,target:`Pricing`,value:2840},{source:`Search`,target:`Left`,value:1160},{source:`Direct`,target:`Pricing`,value:910},{source:`Pricing`,target:`Signed up`,value:1490},{source:`Pricing`,target:`Left`,value:2260}],U=[{x:`Mon`,y:`10am`,value:10},{x:`Mon`,y:`11am`,value:20},{x:`Tue`,y:`10am`,value:30},{x:`Tue`,y:`11am`,value:40},{x:`Wed`,y:`10am`,value:50},{x:`Wed`,y:`11am`,value:60}],W=Array.from({length:50},(e,t)=>({date:new Date(2024,0,t+1).toISOString().split(`T`)[0],count:t%10})),G={render:()=>{let{t:e}=n([...o,`audit`]);return(0,j.jsxs)(m,{title:e(`audit:visualization_family_title`),children:[(0,j.jsxs)(f,{title:e(`audit:visualization_oklch_palette_check`),children:[(0,j.jsx)(p,{label:e(`audit:label_area_chart`),align:`stretch`,children:(0,j.jsx)(g,{data:N,keys:[`value`,`other`,`extra`],xAxisKey:`name`,height:250})}),(0,j.jsx)(p,{label:e(`audit:label_bar_chart`),align:`stretch`,children:(0,j.jsx)(v,{data:N,keys:[`value`,`other`],xAxisKey:`name`,height:250,stacked:!0})}),(0,j.jsx)(p,{label:e(`audit:label_pie_chart`),align:`stretch`,children:(0,j.jsxs)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,j.jsx)(l,{style:{flex:1,minWidth:`300px`},children:(0,j.jsx)(C,{data:P,height:250,donut:!0})}),(0,j.jsx)(l,{style:{flex:1,minWidth:`300px`},children:(0,j.jsx)(C,{data:P,height:250})})]})})]}),(0,j.jsxs)(f,{title:e(`audit:visualization_legend_tooltip_style`),children:[(0,j.jsx)(p,{label:e(`audit:label_line_chart`),align:`stretch`,children:(0,j.jsx)(A,{data:N,keys:[`value`,`other`],xAxisKey:`name`,height:250})}),(0,j.jsx)(p,{label:e(`audit:label_radar_chart`),align:`stretch`,children:(0,j.jsx)(T,{data:N,keys:[`value`,`other`],indexKey:`name`,height:300})}),(0,j.jsx)(p,{label:e(`audit:label_scatter_chart`),align:`stretch`,children:(0,j.jsx)(S,{data:F,height:250})})]}),(0,j.jsxs)(f,{title:e(`audit:visualization_responsive_check`),children:[(0,j.jsx)(p,{label:e(`audit:label_treemap`),align:`stretch`,children:(0,j.jsx)(k,{data:I[0].children,dataKey:`value`,height:250})}),(0,j.jsx)(p,{label:e(`audit:label_sankey_chart`),align:`stretch`,children:(0,j.jsx)(x,{nodes:V,links:H,height:240})}),(0,j.jsx)(p,{label:e(`audit:label_waterfall_chart`),align:`stretch`,children:(0,j.jsx)(D,{data:R,height:240})}),(0,j.jsxs)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,j.jsx)(p,{label:e(`audit:label_box_plot`),width:`380px`,children:(0,j.jsx)(w,{data:z,height:240})}),(0,j.jsx)(p,{label:e(`audit:label_candlestick_chart`),width:`380px`,children:(0,j.jsx)(E,{data:B,height:240})})]}),(0,j.jsxs)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,j.jsx)(p,{label:e(`audit:label_gauge_chart`),width:`300px`,children:(0,j.jsx)(y,{value:75,height:200,title:e(`audit:viz_system_load`)})}),(0,j.jsx)(p,{label:e(`audit:label_funnel_chart`),width:`300px`,children:(0,j.jsx)(_,{data:L,dataKey:`value`,nameKey:`name`,height:250})}),(0,j.jsx)(p,{label:e(`audit:label_heatmap`),width:`400px`,children:(0,j.jsx)(b,{data:U,xAxisKey:[`Mon`,`Tue`,`Wed`],yAxisKey:[`10am`,`11am`],height:250})})]}),(0,j.jsx)(p,{label:e(`audit:label_calendar_heatmap`),align:`stretch`,children:(0,j.jsx)(l,{p:`md`,bg:`bg-surface`,radius:`md`,style:{border:`1px solid var(--wim-color-border)`},children:(0,j.jsx)(s,{data:W,year:2024})})})]}),(0,j.jsxs)(f,{title:e(`audit:viz_sparkline_check`),children:[(0,j.jsx)(p,{label:`${e(`audit:label_sparkline`)} — ${e(`audit:sfx_types`)}`,children:(0,j.jsxs)(u,{gap:`lg`,children:[(0,j.jsx)(h,{data:[4,6,5,8,7,10,9,12],type:`line`,width:140,height:32}),(0,j.jsx)(h,{data:[4,6,5,8,7,10,9,12],type:`area`,width:140,height:32}),(0,j.jsx)(h,{data:[4,6,5,8,7,10,9,12],type:`bar`,width:140,height:32})]})}),(0,j.jsx)(p,{label:`${e(`audit:label_sparkline`)} — ${e(`audit:sfx_trends`)}`,children:(0,j.jsxs)(u,{gap:`lg`,children:[(0,j.jsx)(h,{data:[4,6,5,8,9,11,12,14],color:`var(--wim-color-success)`,showLastDot:!0,width:140,height:32}),(0,j.jsx)(h,{data:[14,13,15,11,10,8,9,6],color:`var(--wim-color-danger)`,showLastDot:!0,width:140,height:32}),(0,j.jsx)(h,{data:[8,3,9,2,7,4,10,5],color:`var(--wim-color-info)`,width:140,height:32})]})})]})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:visualization_family_title")}>
        
        {/* OKLCH Palette Check */}
        <ComparisonGrid title={t("audit:visualization_oklch_palette_check")}>
          <ComponentGroup label={t("audit:label_area_chart")} align="stretch">
            <AreaChart data={sampleData} keys={["value", "other", "extra"]} xAxisKey="name" height={250} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_bar_chart")} align="stretch">
            <BarChart data={sampleData} keys={["value", "other"]} xAxisKey="name" height={250} stacked />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_pie_chart")} align="stretch">
            <Stack direction="row" gap="lg" wrap>
              <Box style={{
              flex: 1,
              minWidth: "300px"
            }}>
                <PieChart data={pieData} height={250} donut />
              </Box>
              <Box style={{
              flex: 1,
              minWidth: "300px"
            }}>
                <PieChart data={pieData} height={250} />
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Legend & Tooltip Styling Check */}
        <ComparisonGrid title={t("audit:visualization_legend_tooltip_style")}>
          <ComponentGroup label={t("audit:label_line_chart")} align="stretch">
            <LineChart data={sampleData} keys={["value", "other"]} xAxisKey="name" height={250} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_radar_chart")} align="stretch">
            <RadarChart data={sampleData} keys={["value", "other"]} indexKey="name" height={300} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_scatter_chart")} align="stretch">
            <ScatterChart data={scatterData} height={250} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Specialized Charts & Interaction */}
        <ComparisonGrid title={t("audit:visualization_responsive_check")}>
          <ComponentGroup label={t("audit:label_treemap")} align="stretch">
            <Treemap data={treemapData[0].children} dataKey="value" height={250} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_sankey_chart")} align="stretch">
            <SankeyChart nodes={sankeyNodes} links={sankeyLinks} height={240} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_waterfall_chart")} align="stretch">
            <WaterfallChart data={waterfallSteps} height={240} />
          </ComponentGroup>
          <Stack direction="row" gap="lg" wrap>
            <ComponentGroup label={t("audit:label_box_plot")} width="380px">
              <BoxPlot data={boxGroups} height={240} />
            </ComponentGroup>
            <ComponentGroup label={t("audit:label_candlestick_chart")} width="380px">
              <CandlestickChart data={candles} height={240} />
            </ComponentGroup>
          </Stack>
          <Stack direction="row" gap="lg" wrap>
            <ComponentGroup label={t("audit:label_gauge_chart")} width="300px">
              <GaugeChart value={75} height={200} title={t("audit:viz_system_load")} />
            </ComponentGroup>
            <ComponentGroup label={t("audit:label_funnel_chart")} width="300px">
              <FunnelChart data={funnelData} dataKey="value" nameKey={"name"} height={250} />
            </ComponentGroup>
            <ComponentGroup label={t("audit:label_heatmap")} width="400px">
              <Heatmap data={heatmapData} xAxisKey={["Mon", "Tue", "Wed"]} yAxisKey={["10am", "11am"]} height={250} />
            </ComponentGroup>
          </Stack>

          <ComponentGroup label={t("audit:label_calendar_heatmap")} align="stretch">
            <Box p="md" bg="bg-surface" radius="md" style={{
            border: "1px solid var(--wim-color-border)"
          }}>
              <CalendarHeatmap data={calendarData} year={2024} />
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Sparkline Check */}
        <ComparisonGrid title={t("audit:viz_sparkline_check")}>
          <ComponentGroup label={\`\${t("audit:label_sparkline")} — \${t("audit:sfx_types")}\`}>
            <Stack gap="lg">
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="line" width={140} height={32} />
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="area" width={140} height={32} />
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="bar" width={140} height={32} />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_sparkline")} — \${t("audit:sfx_trends")}\`}>
            <Stack gap="lg">
              <Sparkline data={[4, 6, 5, 8, 9, 11, 12, 14]} color="var(--wim-color-success)" showLastDot width={140} height={32} />
              <Sparkline data={[14, 13, 15, 11, 10, 8, 9, 6]} color="var(--wim-color-danger)" showLastDot width={140} height={32} />
              <Sparkline data={[8, 3, 9, 2, 7, 4, 10, 5]} color="var(--wim-color-info)" width={140} height={32} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

      </AuditPage>;
  }
}`,...G.parameters?.docs?.source}}},K=[`Overview`]}))();export{G as Overview,K as __namedExportsOrder,M as default};