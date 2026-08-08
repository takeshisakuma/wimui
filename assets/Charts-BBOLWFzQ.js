"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-DiXuc7DI.js";import{D as n,h as r,n as i,u as a}from"./blocks-jhaXMEKM.js";import{t as o}from"./mdx-react-shim-D1rZKK2O.js";import{n as s,t as c}from"./T-Dz91WLtt.js";import{n as l,t as u}from"./Command-1aNFZC-X.js";import{n as d,t as f}from"./Docgen-BeElYI3e.js";import{Dashboard as p,n as m,t as h}from"./Charts.stories-Bx9mYp23.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,pre:`pre`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{title:`Components/Visualization/Charts`,of:h}),`
`,(0,v.jsx)(t.h1,{id:``,children:(0,v.jsx)(c,{k:`cat.visualization`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.charts_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-1`,children:(0,v.jsx)(c,{k:`doc.import`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`// requires: npm install recharts
import { BarChart, LineChart } from "wimui/charts";
`})}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`-2`,children:(0,v.jsx)(c,{k:`doc.design_intent_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.charts_design_intent`})}),`
`,(0,v.jsx)(t.h2,{id:`-3`,children:(0,v.jsx)(c,{k:`doc.choice_matrix_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.charts_choice_matrix_desc`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.component`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.table_header_description`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`BarChart`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_barchart_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`LineChart`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_linechart_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`AreaChart`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_areachart_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`PieChart`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_piechart_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`ScatterChart`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_scatterchart_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`RadarChart`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_radarchart_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`Heatmap`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_heatmap_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`FunnelChart`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_funnelchart_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`Treemap`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_treemap_desc`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`Gauge`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_gauge_desc`})})]})]})]}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.charts_recharts_note`})}),`
`,(0,v.jsx)(t.h2,{id:`-4`,children:(0,v.jsx)(c,{k:`doc.anatomy_title`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.component`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.description`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:(0,v.jsx)(c,{k:`doc.charts_anatomy_chart_label`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_anatomy_chart`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:(0,v.jsx)(c,{k:`doc.charts_anatomy_axis_label`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_anatomy_axis`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:(0,v.jsx)(c,{k:`doc.charts_anatomy_tooltip_label`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_anatomy_tooltip`})})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`-5`,children:(0,v.jsx)(c,{k:`doc.a11y_spec_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.charts_a11y_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-6`,children:(0,v.jsx)(c,{k:`doc.real_world_scenarios_title`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.usage_scenario`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.table_header_description`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:`Dashboard`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_scenario_dashboard`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:(0,v.jsx)(c,{k:`doc.charts_scenario_report_title`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.charts_scenario_report_desc`})})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`-7`,children:(0,v.jsx)(c,{k:`doc.best_practices_title`})}),`
`,(0,v.jsx)(`ul`,{children:(0,v.jsx)(`li`,{children:(0,v.jsx)(c,{k:`doc.charts_best_practice_1`})})}),`
`,`
`,(0,v.jsx)(f,{componentName:`AreaChart`,section:`props`}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.charts_props_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-8`,children:(0,v.jsx)(c,{k:`doc.tokens_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.tokens_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-9`,children:(0,v.jsx)(c,{k:`doc.keyboard_nav_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.charts_keyboard_desc`})}),`
`,(0,v.jsx)(f,{componentName:`AreaChart`,section:`i18n`}),`
`,(0,v.jsx)(t.h2,{id:`-10`,children:(0,v.jsx)(c,{k:`doc.test_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.test_description`})}),`
`,(0,v.jsx)(u,{children:`npm run test -- src/components/charts`})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),o(),r(),m(),s(),d(),l()}))();export{_ as default};