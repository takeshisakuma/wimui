"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Title-DCsxq51f.js";import{ei as a,i as o,n as s,r as c,ti as l}from"./helpers-CK25GWbU.js";import{a as u,d,f,m as p,n as m,p as h}from"./chartTableData-CoDAQdYJ.js";import{i as g,n as _,r as v,t as y}from"./BarChart-J-p92XCe.js";import{n as b,t as x}from"./YAxis-BcRpVZnr.js";import{n as S,t as C}from"./CartesianGrid-DcQ9B4j-.js";import{n as w,t as T}from"./XAxis-CysPXlhb.js";import{i as E,r as D,t as O}from"./barSpan-QYnHVF-F.js";var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{k=`_root_wvf5o_3`,A=`_container_wvf5o_6`,j=`_rising_wvf5o_14`,M=`_falling_wvf5o_17`,N=`_wick_wvf5o_20`,P=`_hollowBody_wvf5o_11`,F=`_filledBody_wvf5o_11`,I={root:k,container:A,rising:j,falling:M,wick:N,hollowBody:P,filledBody:F}})))()}var R,z,B,V;function H(){return(H=e((()=>{t(),_(),g(),w(),b(),S(),p(),l(),r(),o(),f(),m(),O(),L(),R=n(),z=.62,B=({x:e=0,y:t=0,width:n=0,height:r=0,payload:i})=>{if(!i)return null;let a={y:t,height:r},o=e=>E(e,i.span,a),s=e+n/2,c=n*z,l=o(Math.max(i.open,i.close)),u=o(Math.min(i.open,i.close)),d=Math.max(u-l,1),f=i.rising?I.rising:I.falling;return(0,R.jsxs)(`g`,{className:f,children:[(0,R.jsx)(`line`,{className:I.wick,x1:s,x2:s,y1:o(i.low),y2:l+d}),(0,R.jsx)(`line`,{className:I.wick,x1:s,x2:s,y1:l,y2:o(i.high)}),(0,R.jsx)(`rect`,{className:i.rising?I.hollowBody:I.filledBody,x:s-c/2,y:l,width:c,height:d})]})},V=({data:e,height:t=300,width:n=`100%`,title:r,"aria-label":o})=>{let l=o??r,f=(e??[]).map(e=>({...e,span:[e.low,e.high],rising:e.close>=e.open})),p=u(e??[]),m=D(f.map(e=>e.span));return(0,R.jsxs)(`div`,{className:`wim-candlestick-chart ${I.root}`,style:{width:n},role:l?`figure`:void 0,"aria-label":l,children:[r&&(0,R.jsx)(i,{tag:`h3`,size:`md`,style:{marginBottom:`var(--wim-spacing-md)`},children:r}),(0,R.jsx)(`div`,{className:I.container,style:{height:t},"aria-hidden":`true`,children:(0,R.jsx)(a,{width:`100%`,height:`100%`,children:(0,R.jsxs)(y,{...s,data:f,margin:{top:8,right:30,left:0,bottom:5},children:[(0,R.jsx)(C,{...c.grid,vertical:!1}),(0,R.jsx)(T,{dataKey:`name`,interval:0,...c.axis,tickLine:!1,axisLine:!1}),(0,R.jsx)(x,{width:44,domain:m,...c.axis,tickLine:!1,axisLine:!1}),(0,R.jsx)(h,{contentStyle:c.tooltip.contentStyle,cursor:c.tooltip.cursor}),(0,R.jsx)(v,{dataKey:`span`,shape:(0,R.jsx)(B,{}),isAnimationActive:!1})]})})}),(0,R.jsx)(d,{caption:l,columns:p.columns,rows:p.rows})]})},V.__docgenInfo={description:`Shows how a value opened, ranged, and closed within each period — a price
series, a daily temperature range, a load metric per hour.

**Each mark carries four numbers, not one**, which is what a \`LineChart\` of
closing values drops: the line says where the period ended and nothing about
how far it travelled to get there.

Composition Contract:
- Managed by: App consumption
- Scroll lock: No`,methods:[],displayName:`CandlestickChart`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
enough on its own.`}}}})))()}export{H as n,V as t};