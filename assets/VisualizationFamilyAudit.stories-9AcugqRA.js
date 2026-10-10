"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as ee,t as te}from"./i18nConstants-BhvmnjLS.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Box-BNJo1pMu.js";import{n as s,t as c}from"./Stack-CrCPoxQ1.js";import{n as l,t as u}from"./TreeDiagram-DxYWkx8r.js";import{n as d,t as f}from"./CalendarHeatmap-D4eal5wW.js";import{i as ne,n as p,r as m,t as re}from"./AuditUtils-DQd41XyN.js";import{n as ie,t as ae}from"./RadarChart-D6vdZwUo.js";import{n as oe,t as se}from"./Treemap-BzPnIady.js";import{n as ce,t as le}from"./SankeyChart-BDJczAea.js";import{n as ue,t as h}from"./FunnelChart-Ch-bVXV9.js";import{n as g,t as _}from"./AreaChart-yFoQ5u51.js";import{n as v,t as y}from"./BarChart-DV8FtCeZ.js";import{n as b,t as x}from"./GaugeChart-BrX1YjAZ.js";import{n as S,t as C}from"./Heatmap-CjXUTfya.js";import{n as w,t as T}from"./LineChart-CIgywC72.js";import{n as E,t as D}from"./PieChart-B4bdIdij.js";import{n as O,t as k}from"./ScatterChart-sfnrZdsH.js";import{n as A,t as j}from"./Sparkline-BpjEPWI1.js";import{n as M,t as N}from"./WaterfallChart-K8IDaD8I.js";import{n as P,t as de}from"./BoxPlot-hKBhNLQ5.js";import{n as F,t as I}from"./CandlestickChart-5vP2_cJu.js";var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{t(),r(),ee(),d(),a(),s(),l(),g(),v(),P(),F(),w(),E(),ie(),O(),ce(),oe(),b(),ue(),S(),A(),M(),ne(),L=i(),R={title:`Audit/VisualizationFamily`,parameters:{layout:`fullscreen`}},z=[{name:`Jan`,value:400,other:240,extra:200},{name:`Feb`,value:300,other:139,extra:220},{name:`Mar`,value:200,other:980,extra:229},{name:`Apr`,value:278,other:390,extra:200},{name:`May`,value:189,other:480,extra:218},{name:`Jun`,value:239,other:380,extra:250}],B=[{name:`Group A`,value:400},{name:`Group B`,value:300},{name:`Group C`,value:300},{name:`Group D`,value:200}],V=[{x:100,y:200,z:200,name:`A`},{x:120,y:100,z:260,name:`B`},{x:170,y:300,z:400,name:`C`},{x:140,y:250,z:280,name:`D`},{x:150,y:400,z:500,name:`E`},{x:110,y:280,z:200,name:`F`}],H=[{name:`Origin`,children:[{name:`iPhone`,value:5e3},{name:`iPad`,value:3e3},{name:`Mac`,value:2e3},{name:`Apple Watch`,value:1e3}]}],U=[{value:100,name:`Visit`},{value:80,name:`Inquiry`},{value:50,name:`Order`},{value:40,name:`Payment`},{value:26,name:`Success`}],W=[{name:`Revenue`,value:100},{name:`Costs`,value:-30},{name:`Tax`,value:-18},{name:`Profit`,value:0,total:!0}],G=[{name:`A`,min:12,q1:24,median:33,q3:48,max:71},{name:`B`,min:20,q1:31,median:38,q3:44,max:58},{name:`C`,min:8,q1:14,median:22,q3:39,max:66}],K=[{name:`Mon`,open:32,high:38,low:31,close:37},{name:`Tue`,open:37,high:39,low:33,close:34},{name:`Wed`,open:34,high:41,low:34,close:40}],q=[`Search`,`Direct`,`Pricing`,`Left`,`Signed up`],J=[{source:`Search`,target:`Pricing`,value:2840},{source:`Search`,target:`Left`,value:1160},{source:`Direct`,target:`Pricing`,value:910},{source:`Pricing`,target:`Signed up`,value:1490},{source:`Pricing`,target:`Left`,value:2260}],Y=[{x:`Mon`,y:`10am`,value:10},{x:`Mon`,y:`11am`,value:20},{x:`Tue`,y:`10am`,value:30},{x:`Tue`,y:`11am`,value:40},{x:`Wed`,y:`10am`,value:50},{x:`Wed`,y:`11am`,value:60}],X=Array.from({length:50},(e,t)=>({date:new Date(2024,0,t+1).toISOString().split(`T`)[0],count:t%10})),Z={render:()=>{let{t:e}=n([...te,`audit`]);return(0,L.jsxs)(re,{title:e(`audit:visualization_family_title`),children:[(0,L.jsxs)(p,{title:e(`audit:visualization_oklch_palette_check`),children:[(0,L.jsx)(m,{label:e(`audit:label_area_chart`),align:`stretch`,children:(0,L.jsx)(_,{data:z,keys:[`value`,`other`,`extra`],xAxisKey:`name`,height:250})}),(0,L.jsx)(m,{label:e(`audit:label_bar_chart`),align:`stretch`,children:(0,L.jsx)(y,{data:z,keys:[`value`,`other`],xAxisKey:`name`,height:250,stacked:!0})}),(0,L.jsx)(m,{label:e(`audit:label_pie_chart`),align:`stretch`,children:(0,L.jsxs)(c,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,L.jsx)(o,{style:{flex:1,minWidth:`300px`},children:(0,L.jsx)(D,{data:B,height:250,donut:!0})}),(0,L.jsx)(o,{style:{flex:1,minWidth:`300px`},children:(0,L.jsx)(D,{data:B,height:250})})]})})]}),(0,L.jsxs)(p,{title:e(`audit:visualization_legend_tooltip_style`),children:[(0,L.jsx)(m,{label:e(`audit:label_line_chart`),align:`stretch`,children:(0,L.jsx)(T,{data:z,keys:[`value`,`other`],xAxisKey:`name`,height:250})}),(0,L.jsx)(m,{label:e(`audit:label_radar_chart`),align:`stretch`,children:(0,L.jsx)(ae,{data:z,keys:[`value`,`other`],indexKey:`name`,height:300})}),(0,L.jsx)(m,{label:e(`audit:label_scatter_chart`),align:`stretch`,children:(0,L.jsx)(k,{data:V,height:250})})]}),(0,L.jsxs)(p,{title:e(`audit:visualization_responsive_check`),children:[(0,L.jsx)(m,{label:e(`audit:label_treemap`),align:`stretch`,children:(0,L.jsx)(se,{data:H[0].children,dataKey:`value`,height:250})}),(0,L.jsx)(m,{label:e(`audit:label_tree_diagram`),align:`stretch`,children:(0,L.jsx)(u,{"aria-label":e(`audit:label_tree_diagram`),nodes:[{value:`home`,label:e(`audit:sample_sitemap_home`),children:[{value:`products`,label:e(`audit:sample_sitemap_products`),children:[{value:`pricing`,label:e(`audit:sample_sitemap_pricing`)}]},{value:`support`,label:e(`audit:sample_sitemap_support`),children:[{value:`docs`,label:e(`audit:sample_sitemap_docs`)}]}]}],nodeWidth:160,nodeHeight:48})}),(0,L.jsx)(m,{label:e(`audit:label_sankey_chart`),align:`stretch`,children:(0,L.jsx)(le,{nodes:q,links:J,height:240})}),(0,L.jsx)(m,{label:e(`audit:label_waterfall_chart`),align:`stretch`,children:(0,L.jsx)(N,{data:W,height:240})}),(0,L.jsxs)(c,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,L.jsx)(m,{label:e(`audit:label_box_plot`),width:`380px`,children:(0,L.jsx)(de,{data:G,height:240})}),(0,L.jsx)(m,{label:e(`audit:label_candlestick_chart`),width:`380px`,children:(0,L.jsx)(I,{data:K,height:240})})]}),(0,L.jsxs)(c,{direction:`row`,gap:`lg`,wrap:!0,children:[(0,L.jsx)(m,{label:e(`audit:label_gauge_chart`),width:`300px`,children:(0,L.jsx)(x,{value:75,height:200,title:e(`audit:viz_system_load`)})}),(0,L.jsx)(m,{label:e(`audit:label_funnel_chart`),width:`300px`,children:(0,L.jsx)(h,{data:U,dataKey:`value`,nameKey:`name`,height:250})}),(0,L.jsx)(m,{label:e(`audit:label_heatmap`),width:`400px`,children:(0,L.jsx)(C,{data:Y,xAxisKey:[`Mon`,`Tue`,`Wed`],yAxisKey:[`10am`,`11am`],height:250})})]}),(0,L.jsx)(m,{label:e(`audit:label_calendar_heatmap`),align:`stretch`,children:(0,L.jsx)(o,{p:`md`,bg:`bg-surface`,radius:`md`,style:{border:`1px solid var(--wim-color-border)`},children:(0,L.jsx)(f,{data:X,year:2024})})})]}),(0,L.jsxs)(p,{title:e(`audit:viz_sparkline_check`),children:[(0,L.jsx)(m,{label:`${e(`audit:label_sparkline`)} — ${e(`audit:sfx_types`)}`,children:(0,L.jsxs)(c,{gap:`lg`,children:[(0,L.jsx)(j,{data:[4,6,5,8,7,10,9,12],type:`line`,width:140,height:32}),(0,L.jsx)(j,{data:[4,6,5,8,7,10,9,12],type:`area`,width:140,height:32}),(0,L.jsx)(j,{data:[4,6,5,8,7,10,9,12],type:`bar`,width:140,height:32})]})}),(0,L.jsx)(m,{label:`${e(`audit:label_sparkline`)} — ${e(`audit:sfx_trends`)}`,children:(0,L.jsxs)(c,{gap:`lg`,children:[(0,L.jsx)(j,{data:[4,6,5,8,9,11,12,14],color:`var(--wim-color-success)`,showLastDot:!0,width:140,height:32}),(0,L.jsx)(j,{data:[14,13,15,11,10,8,9,6],color:`var(--wim-color-danger)`,showLastDot:!0,width:140,height:32}),(0,L.jsx)(j,{data:[8,3,9,2,7,4,10,5],color:`var(--wim-color-info)`,width:140,height:32})]})}),(0,L.jsx)(m,{label:`${e(`audit:label_sparkline`)} — ${e(`audit:sfx_default_width`)}`,children:(0,L.jsxs)(c,{gap:`lg`,style:{width:`100%`},children:[(0,L.jsx)(j,{data:[4,6,5,8,7,10,9,12],type:`line`,height:32}),(0,L.jsx)(j,{data:[4,6,5,8,7,10,9,12],type:`area`,height:32}),(0,L.jsx)(j,{data:[4,6,5,8,7,10,9,12],type:`bar`,height:32})]})})]})]})}},Q=[`Overview`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
          <ComponentGroup label={t("audit:label_tree_diagram")} align="stretch">
            <TreeDiagram aria-label={t("audit:label_tree_diagram")} nodes={[{
            value: "home",
            label: t("audit:sample_sitemap_home"),
            children: [{
              value: "products",
              label: t("audit:sample_sitemap_products"),
              children: [{
                value: "pricing",
                label: t("audit:sample_sitemap_pricing")
              }]
            }, {
              value: "support",
              label: t("audit:sample_sitemap_support"),
              children: [{
                value: "docs",
                label: t("audit:sample_sitemap_docs")
              }]
            }]
          }]} nodeWidth={160} nodeHeight={48} />
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
          {/* T283: width を渡さない既定（width="100%"）は ResponsiveContainer が置き場を測る別の経路。上の 2 組は 140px 固定なのでこの経路を通らない */}
          <ComponentGroup label={\`\${t("audit:label_sparkline")} — \${t("audit:sfx_default_width")}\`}>
            <Stack gap="lg" style={{
            width: "100%"
          }}>
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="line" height={32} />
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="area" height={32} />
              <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="bar" height={32} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

      </AuditPage>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Overview,Q as __namedExportsOrder,R as default};