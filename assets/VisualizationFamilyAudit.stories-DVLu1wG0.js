"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{Q as s,t as c}from"./src-Ssuy8lr7.js";import{t as l}from"./Box--bAE-pUN.js";import{t as u}from"./Stack-CC3QEopK.js";import{i as d,n as f,r as p,t as m}from"./AuditUtils-Cal9MsZq.js";import{t as h}from"./Sparkline-Dx_ujIF4.js";import{S as g,b as _,c as v,f as y,i as b,m as x,n as S,o as C,t as w,u as T,v as E}from"./charts-C9-Maezk.js";var D,O,k,A,j,M,N,P,F,I,L;e((()=>{t(),a(),r(),c(),w(),d(),D=i(),O={title:`Audit/VisualizationFamily`,parameters:{layout:`fullscreen`}},k=[{name:`Jan`,value:400,other:240,extra:200},{name:`Feb`,value:300,other:139,extra:220},{name:`Mar`,value:200,other:980,extra:229},{name:`Apr`,value:278,other:390,extra:200},{name:`May`,value:189,other:480,extra:218},{name:`Jun`,value:239,other:380,extra:250}],A=[{name:`Group A`,value:400},{name:`Group B`,value:300},{name:`Group C`,value:300},{name:`Group D`,value:200}],j=[{x:100,y:200,z:200,name:`A`},{x:120,y:100,z:260,name:`B`},{x:170,y:300,z:400,name:`C`},{x:140,y:250,z:280,name:`D`},{x:150,y:400,z:500,name:`E`},{x:110,y:280,z:200,name:`F`}],M=[{name:`Origin`,children:[{name:`iPhone`,value:5e3},{name:`iPad`,value:3e3},{name:`Mac`,value:2e3},{name:`Apple Watch`,value:1e3}]}],N=[{value:100,name:`Visit`},{value:80,name:`Inquiry`},{value:50,name:`Order`},{value:40,name:`Payment`},{value:26,name:`Success`}],P=[{x:`Mon`,y:`10am`,value:10},{x:`Mon`,y:`11am`,value:20},{x:`Tue`,y:`10am`,value:30},{x:`Tue`,y:`11am`,value:40},{x:`Wed`,y:`10am`,value:50},{x:`Wed`,y:`11am`,value:60}],F=Array.from({length:50},(e,t)=>({date:new Date(2024,0,t+1).toISOString().split(`T`)[0],count:t%10})),I={render:()=>{let{t:e}=n([...o,`audit`]);return(0,D.jsxs)(m,{title:e(`audit:visualization_family_title`),children:[(0,D.jsxs)(f,{title:e(`audit:visualization_oklch_palette_check`),children:[(0,D.jsx)(p,{label:e(`audit:label_area_chart`),align:`stretch`,children:(0,D.jsx)(g,{data:k,keys:[`value`,`other`,`extra`],xAxisKey:`name`,height:250})}),(0,D.jsx)(p,{label:e(`audit:label_bar_chart`),align:`stretch`,children:(0,D.jsx)(_,{data:k,keys:[`value`,`other`],xAxisKey:`name`,height:250,stacked:!0})}),(0,D.jsx)(p,{label:e(`audit:label_pie_chart`),align:`stretch`,children:(0,D.jsxs)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,D.jsx)(l,{style:{flex:1,minWidth:`300px`},children:(0,D.jsx)(v,{data:A,height:250,donut:!0})}),(0,D.jsx)(l,{style:{flex:1,minWidth:`300px`},children:(0,D.jsx)(v,{data:A,height:250})})]})})]}),(0,D.jsxs)(f,{title:e(`audit:visualization_legend_tooltip_style`),children:[(0,D.jsx)(p,{label:e(`audit:label_line_chart`),align:`stretch`,children:(0,D.jsx)(T,{data:k,keys:[`value`,`other`],xAxisKey:`name`,height:250})}),(0,D.jsx)(p,{label:e(`audit:label_radar_chart`),align:`stretch`,children:(0,D.jsx)(C,{data:k,keys:[`value`,`other`],indexKey:`name`,height:300})}),(0,D.jsx)(p,{label:e(`audit:label_scatter_chart`),align:`stretch`,children:(0,D.jsx)(b,{data:j,height:250})})]}),(0,D.jsxs)(f,{title:e(`audit:visualization_responsive_check`),children:[(0,D.jsx)(p,{label:e(`audit:label_treemap`),align:`stretch`,children:(0,D.jsx)(S,{data:M[0].children,dataKey:`value`,height:250})}),(0,D.jsxs)(u,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,D.jsx)(p,{label:e(`audit:label_gauge_chart`),width:`300px`,children:(0,D.jsx)(x,{value:75,height:200,title:e(`audit:viz_system_load`)})}),(0,D.jsx)(p,{label:e(`audit:label_funnel_chart`),width:`300px`,children:(0,D.jsx)(E,{data:N,dataKey:`value`,nameKey:`name`,height:250})}),(0,D.jsx)(p,{label:e(`audit:label_heatmap`),width:`400px`,children:(0,D.jsx)(y,{data:P,xAxisKey:[`Mon`,`Tue`,`Wed`],yAxisKey:[`10am`,`11am`],height:250})})]}),(0,D.jsx)(p,{label:e(`audit:label_calendar_heatmap`),align:`stretch`,children:(0,D.jsx)(l,{p:`md`,bg:`bg-surface`,radius:`md`,style:{border:`1px solid var(--wim-color-border)`},children:(0,D.jsx)(s,{data:F,year:2024})})})]}),(0,D.jsxs)(f,{title:e(`audit:viz_sparkline_check`),children:[(0,D.jsx)(p,{label:`${e(`audit:label_sparkline`)} — ${e(`audit:sfx_types`)}`,children:(0,D.jsxs)(u,{gap:`lg`,children:[(0,D.jsx)(h,{data:[4,6,5,8,7,10,9,12],type:`line`,width:140,height:32}),(0,D.jsx)(h,{data:[4,6,5,8,7,10,9,12],type:`area`,width:140,height:32}),(0,D.jsx)(h,{data:[4,6,5,8,7,10,9,12],type:`bar`,width:140,height:32})]})}),(0,D.jsx)(p,{label:`${e(`audit:label_sparkline`)} — ${e(`audit:sfx_trends`)}`,children:(0,D.jsxs)(u,{gap:`lg`,children:[(0,D.jsx)(h,{data:[4,6,5,8,9,11,12,14],color:`var(--wim-color-success)`,showLastDot:!0,width:140,height:32}),(0,D.jsx)(h,{data:[14,13,15,11,10,8,9,6],color:`var(--wim-color-danger)`,showLastDot:!0,width:140,height:32}),(0,D.jsx)(h,{data:[8,3,9,2,7,4,10,5],color:`var(--wim-color-info)`,width:140,height:32})]})})]})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Overview`]}))();export{I as Overview,L as __namedExportsOrder,O as default};