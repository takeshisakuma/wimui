"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Title-DCsxq51f.js";import{ei as a,i as o,n as s,r as c,ti as l}from"./helpers-CK25GWbU.js";import{d as u,f as d,m as f,n as p,p as m,u as h}from"./chartTableData-CoDAQdYJ.js";import{i as g,n as _,r as v,t as y}from"./BarChart-J-p92XCe.js";import{n as b,t as x}from"./YAxis-BcRpVZnr.js";import{n as S,t as C}from"./CartesianGrid-DcQ9B4j-.js";import{n as w,t as T}from"./XAxis-CysPXlhb.js";import{i as E,r as D,t as O}from"./barSpan-QYnHVF-F.js";var k,A,j,M,N,P;function F(){return(F=e((()=>{k=`_root_10hv1_3`,A=`_container_10hv1_6`,j=`_box_10hv1_15`,M=`_whisker_10hv1_20`,N=`_median_10hv1_25`,P={root:k,container:A,box:j,whisker:M,median:N}})))()}var I,L,R,z,B;function V(){return(V=e((()=>{t(),_(),g(),w(),b(),S(),f(),l(),r(),o(),d(),p(),O(),F(),I=n(),L=.62,R=.32,z=({x:e=0,y:t=0,width:n=0,height:r=0,payload:i})=>{if(!i)return null;let a={y:t,height:r},o=e=>E(e,i.span,a),s=e+n/2,c=n*L,l=n*R,u=o(i.q3),d=o(i.q1),f=Math.max(d-u,1);return(0,I.jsxs)(`g`,{children:[(0,I.jsx)(`line`,{className:P.whisker,x1:s,x2:s,y1:o(i.min),y2:o(i.max)}),(0,I.jsx)(`line`,{className:P.whisker,x1:s-l/2,x2:s+l/2,y1:o(i.min),y2:o(i.min)}),(0,I.jsx)(`line`,{className:P.whisker,x1:s-l/2,x2:s+l/2,y1:o(i.max),y2:o(i.max)}),(0,I.jsx)(`rect`,{className:P.box,x:s-c/2,y:u,width:c,height:f,rx:2}),(0,I.jsx)(`line`,{className:P.median,x1:s-c/2,x2:s+c/2,y1:o(i.median),y2:o(i.median)})]})},B=({data:e,height:t=300,width:n=`100%`,title:r,"aria-label":o})=>{let l=o??r,d=(e??[]).map(e=>({...e,span:[e.min,e.max]})),f=h(e??[]),p=D(d.map(e=>e.span));return(0,I.jsxs)(`div`,{className:`wim-box-plot ${P.root}`,style:{width:n},role:l?`figure`:void 0,"aria-label":l,children:[r&&(0,I.jsx)(i,{tag:`h3`,size:`md`,style:{marginBottom:`var(--wim-spacing-md)`},children:r}),(0,I.jsx)(`div`,{className:P.container,style:{height:t},"aria-hidden":`true`,children:(0,I.jsx)(a,{width:`100%`,height:`100%`,children:(0,I.jsxs)(y,{...s,data:d,margin:{top:8,right:30,left:0,bottom:5},children:[(0,I.jsx)(C,{...c.grid,vertical:!1}),(0,I.jsx)(T,{dataKey:`name`,interval:0,...c.axis,tickLine:!1,axisLine:!1}),(0,I.jsx)(x,{width:44,domain:p,...c.axis,tickLine:!1,axisLine:!1}),(0,I.jsx)(m,{contentStyle:c.tooltip.contentStyle,cursor:c.tooltip.cursor}),(0,I.jsx)(v,{dataKey:`span`,shape:(0,I.jsx)(z,{}),isAnimationActive:!1})]})})}),(0,I.jsx)(u,{caption:l,columns:f.columns,rows:f.rows})]})},B.__docgenInfo={description:`Shows how values are spread within each group — response times per endpoint,
salaries per role, scores per class.

**A box plot shows the shape of a distribution, not one number for it.** Two
groups with the same average can have completely different boxes, which is
exactly what a \`BarChart\` of averages hides.

Composition Contract:
- Managed by: App consumption
- Scroll lock: No`,methods:[],displayName:`BoxPlot`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
enough on its own.`}}}})))()}export{V as n,B as t};