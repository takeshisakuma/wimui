"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Title-DCsxq51f.js";import{ei as a,i as o,n as s,r as c,ti as l}from"./helpers-CK25GWbU.js";import{d as u,f as d,l as f,m as p,n as m,p as h}from"./chartTableData-CoDAQdYJ.js";import{i as g,n as _,r as v,t as y}from"./BarChart-J-p92XCe.js";import{n as b,t as x}from"./YAxis-BcRpVZnr.js";import{n as S,t as C}from"./CartesianGrid-DcQ9B4j-.js";import{n as w,t as T}from"./XAxis-CysPXlhb.js";import{n as E,t as D}from"./barSpan-QYnHVF-F.js";var O,k,A,j;function M(){return(M=e((()=>{O=`_root_1bf2i_3`,k=`_container_1bf2i_6`,A=`_value_1bf2i_14`,j={root:O,container:k,value:A}})))()}var N,P,F,I,L,R;function z(){return(z=e((()=>{t(),_(),g(),w(),b(),S(),p(),l(),r(),o(),d(),m(),D(),M(),N=n(),P={increase:`var(--wim-color-chart-success)`,decrease:`var(--wim-color-chart-danger)`,total:`var(--wim-color-chart-primary)`},F=e=>{let t=0;return(e??[]).map(e=>{let n=E(e?.value)?e.value:0;if(e?.total){let n=t<0?[t,0]:[0,t];return{name:e.name,span:n,kind:`total`,amount:t,running:t}}let r=t;t+=n;let i=r<t?[r,t]:[t,r];return{name:e.name,span:i,kind:n<0?`decrease`:`increase`,amount:n,running:t}})},I=e=>e.kind===`total`||e.amount<0?String(e.amount):`+${e.amount}`,L=({x:e=0,y:t=0,width:n=0,height:r=0,payload:i})=>i?(0,N.jsxs)(`g`,{children:[(0,N.jsx)(`rect`,{x:e,y:t,width:n,height:Math.max(r,1),fill:P[i.kind],rx:2}),(0,N.jsx)(`text`,{className:j.value,x:e+n/2,y:t-6,textAnchor:`middle`,children:I(i)})]}):null,R=({data:e,height:t=300,width:n=`100%`,title:r,"aria-label":o})=>{let l=o??r,d=F(e),p=f(d.map(e=>({name:e.name,change:I(e),running:e.running})));return(0,N.jsxs)(`div`,{className:`wim-waterfall-chart ${j.root}`,style:{width:n},role:l?`figure`:void 0,"aria-label":l,children:[r&&(0,N.jsx)(i,{tag:`h3`,size:`md`,style:{marginBottom:`var(--wim-spacing-md)`},children:r}),(0,N.jsx)(`div`,{className:j.container,style:{height:t},"aria-hidden":`true`,children:(0,N.jsx)(a,{width:`100%`,height:`100%`,children:(0,N.jsxs)(y,{...s,data:d,margin:{top:20,right:30,left:0,bottom:5},children:[(0,N.jsx)(C,{...c.grid,vertical:!1}),(0,N.jsx)(T,{dataKey:`name`,interval:0,...c.axis,tickLine:!1,axisLine:!1}),(0,N.jsx)(x,{width:44,...c.axis,tickLine:!1,axisLine:!1}),(0,N.jsx)(h,{contentStyle:c.tooltip.contentStyle,cursor:c.tooltip.cursor}),(0,N.jsx)(v,{dataKey:`span`,shape:(0,N.jsx)(L,{}),isAnimationActive:!1})]})})}),(0,N.jsx)(u,{caption:l,columns:p.columns,rows:p.rows})]})},R.__docgenInfo={description:`Shows how a starting number becomes an ending number, one contribution at a
time — revenue to profit, last month's headcount to this month's, a budget
to what is left of it.

**Each bar floats between the running total before and after that step**,
which is what a stacked \`BarChart\` cannot express: stacking shows the parts
of one total, not the arithmetic that produced it.

Composition Contract:
- Managed by: App consumption
- Scroll lock: No`,methods:[],displayName:`WaterfallChart`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
enough on its own.`}}}})))()}export{z as n,R as t};