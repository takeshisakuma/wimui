import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as c,A as k}from"./iframe-CiRA90at.js";import{c as L}from"./index-CERe7Zud.js";import{u as b}from"./useTranslation-BEAd_Ta8.js";const I={ariaChart:"Gantt Chart",ariaTaskBar:(t,e,n)=>`${t}: ${e} - ${n}`};function l(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function E(t,e){return Math.round((l(e).getTime()-l(t).getTime())/(1e3*60*60*24))}function O(t){const e=l(t),n=e.getDay(),o=n===0?-6:1-n;return e.setDate(e.getDate()+o),e}function P(t,e,n){const o=[];if(n==="day"){const r=l(t),i=l(e);for(;r<=i;)o.push({label:String(r.getDate()),date:new Date(r)}),r.setDate(r.getDate()+1)}else if(n==="week"){const r=O(t),i=l(e);for(;r<=i;){const d=r.getMonth()+1,f=r.getDate();o.push({label:`${d}/${f}`,date:new Date(r)}),r.setDate(r.getDate()+7)}}else{const r=new Date(t.getFullYear(),t.getMonth(),1),i=l(e);for(;r<=i;){const d=r.toLocaleString("en-US",{month:"short",year:"2-digit"});o.push({label:d,date:new Date(r)}),r.setMonth(r.getMonth()+1)}}return o}function G(t){return t==="day"?1:t==="week"?7:30.44}function U(t,e,n,o){return E(e,t.startDate)/G(n)*o}function V(t,e,n){const o=Math.max(E(t.startDate,t.endDate),1),r=n*.5;return Math.max(o/G(e)*n,r)}const K={day:40,week:80,month:120},g=({tasks:t,startDate:e,endDate:n,viewMode:o="day",columnWidth:r,rowHeight:i=40,onTaskClick:d,className:f,labels:R})=>{const M={...I,...R},v=c.useRef(null),S=c.useRef(null),[T,q]=c.useState(-1),m=r??K[o],x=c.useMemo(()=>e?l(e):t.length===0?l(new Date):l(new Date(Math.min(...t.map(a=>a.startDate.getTime())))),[e,t]),j=c.useMemo(()=>{if(n)return l(n);if(t.length===0){const a=l(new Date);return a.setDate(a.getDate()+30),a}return l(new Date(Math.max(...t.map(a=>a.endDate.getTime()))))},[n,t]),A=c.useMemo(()=>P(x,j,o),[x,j,o]),N=A.length*m,W=c.useCallback(()=>{S.current&&v.current&&(S.current.scrollLeft=v.current.scrollLeft)},[]),$=c.useCallback((a,u,y)=>{if(a.key==="Enter"||a.key===" ")a.preventDefault(),d?.(u);else if(a.key==="ArrowDown"){a.preventDefault();const D=Math.min(y+1,t.length-1);q(D),document.querySelectorAll(".wim-gantt-chart__bar")[D]?.focus()}else if(a.key==="ArrowUp"){a.preventDefault();const D=Math.max(y-1,0);q(D),document.querySelectorAll(".wim-gantt-chart__bar")[D]?.focus()}},[d,t.length]);return s.jsx("div",{className:L("wim-gantt-chart",f),role:"grid","aria-label":M.ariaChart,children:s.jsxs("div",{className:"wim-gantt-chart__layout",children:[s.jsxs("div",{className:"wim-gantt-chart__label-panel","aria-hidden":"true",children:[s.jsx("div",{className:"wim-gantt-chart__header-cell wim-gantt-chart__header-cell--label",style:{height:i}}),t.map(a=>s.jsx("div",{className:"wim-gantt-chart__label-row",style:{height:i},children:s.jsx("span",{className:"wim-gantt-chart__label-text",children:a.label})},a.id))]}),s.jsxs("div",{className:"wim-gantt-chart__timeline-wrapper",children:[s.jsx("div",{ref:S,className:"wim-gantt-chart__header-scroll",children:s.jsx("div",{className:"wim-gantt-chart__header",style:{width:N,height:i},role:"row",children:A.map(a=>s.jsx("div",{className:"wim-gantt-chart__header-cell",style:{width:m},role:"columnheader",children:a.label},a.date.toISOString()))})}),s.jsx("div",{ref:v,className:"wim-gantt-chart__body-scroll",onScroll:W,children:s.jsx("div",{className:"wim-gantt-chart__body",style:{width:N,"--gantt-col-width":`${m}px`,"--gantt-row-height":`${i}px`},children:t.map((a,u)=>{const y=U(a,x,o,m),D=V(a,o,m),C=a.startDate.toLocaleDateString(),B=a.endDate.toLocaleDateString();return s.jsx("div",{className:"wim-gantt-chart__row",style:{height:i},role:"row",children:s.jsx("div",{role:"gridcell",className:L("wim-gantt-chart__bar",{"wim-gantt-chart__bar--clickable":!!d,"wim-gantt-chart__bar--focused":T===u}),style:{left:y,width:D,height:i-12,top:6,backgroundColor:a.color??"var(--wim-color-primary, #1976d2)"},tabIndex:0,"aria-label":M.ariaTaskBar(a.label,C,B),"aria-selected":T===u,onClick:()=>d?.(a),onKeyDown:F=>$(F,a,u),onFocus:()=>q(u),children:a.progress!==void 0&&s.jsx("div",{className:"wim-gantt-chart__progress",style:{width:`${Math.min(a.progress,100)}%`},"aria-hidden":"true"})})},a.id)})})})]})]})})};g.__docgenInfo={description:"",methods:[],displayName:"GanttChart",props:{tasks:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  startDate: Date;
  endDate: Date;
  color?: string;
  progress?: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"startDate",value:{name:"Date",required:!0}},{key:"endDate",value:{name:"Date",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"progress",value:{name:"number",required:!1}}]}}],raw:"GanttTask[]"},description:""},startDate:{required:!1,tsType:{name:"Date"},description:""},endDate:{required:!1,tsType:{name:"Date"},description:""},viewMode:{required:!1,tsType:{name:"union",raw:'"day" | "week" | "month"',elements:[{name:"literal",value:'"day"'},{name:"literal",value:'"week"'},{name:"literal",value:'"month"'}]},description:"",defaultValue:{value:'"day"',computed:!1}},columnWidth:{required:!1,tsType:{name:"number"},description:""},rowHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onTaskClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(task: GanttTask) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  startDate: Date;
  endDate: Date;
  color?: string;
  progress?: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"startDate",value:{name:"Date",required:!0}},{key:"endDate",value:{name:"Date",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"progress",value:{name:"number",required:!1}}]}},name:"task"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  ariaChart?: string;
  ariaTaskBar?: (label: string, start: string, end: string) => string;
}`,signature:{properties:[{key:"ariaChart",value:{name:"string",required:!1}},{key:"ariaTaskBar",value:{name:"signature",type:"function",raw:"(label: string, start: string, end: string) => string",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"start"},{type:{name:"string"},name:"end"}],return:{name:"string"}},required:!1}}]}},description:"手動翻訳用のラベル"}}};const Y={title:"Components/Data Structures/GanttChart",component:g},w={render:function(){const{t:e}=b(k),n=[{id:"task-1",label:e("story.ganttchart_task_requirements"),startDate:new Date(2026,2,1),endDate:new Date(2026,2,5)},{id:"task-2",label:e("story.ganttchart_task_design"),startDate:new Date(2026,2,4),endDate:new Date(2026,2,10)},{id:"task-3",label:e("story.ganttchart_task_development"),startDate:new Date(2026,2,9),endDate:new Date(2026,2,20),progress:60},{id:"task-4",label:e("story.ganttchart_task_testing"),startDate:new Date(2026,2,18),endDate:new Date(2026,2,24)},{id:"task-5",label:e("story.ganttchart_task_release"),startDate:new Date(2026,2,25),endDate:new Date(2026,2,31)}];return s.jsx(g,{tasks:n,startDate:new Date(2026,2,1),endDate:new Date(2026,2,31),viewMode:"day"})}},h={render:function(){const{t:e}=b(k),n=[{id:"task-1",label:e("story.ganttchart_task_requirements"),startDate:new Date(2026,2,1),endDate:new Date(2026,2,14)},{id:"task-2",label:e("story.ganttchart_task_design"),startDate:new Date(2026,2,10),endDate:new Date(2026,2,28),progress:30},{id:"task-3",label:e("story.ganttchart_task_development"),startDate:new Date(2026,2,20),endDate:new Date(2026,3,15),progress:10},{id:"task-4",label:e("story.ganttchart_task_testing"),startDate:new Date(2026,3,10),endDate:new Date(2026,3,24)}];return s.jsx(g,{tasks:n,startDate:new Date(2026,2,1),endDate:new Date(2026,3,30),viewMode:"week"})}},_={render:function(){const{t:e}=b(k),n=[{id:"task-1",label:e("story.ganttchart_task_requirements"),startDate:new Date(2026,0,5),endDate:new Date(2026,1,10)},{id:"task-2",label:e("story.ganttchart_task_design"),startDate:new Date(2026,1,1),endDate:new Date(2026,2,20),progress:70},{id:"task-3",label:e("story.ganttchart_task_development"),startDate:new Date(2026,2,1),endDate:new Date(2026,5,30),progress:20},{id:"task-4",label:e("story.ganttchart_task_testing"),startDate:new Date(2026,5,1),endDate:new Date(2026,7,31)},{id:"task-5",label:e("story.ganttchart_task_release"),startDate:new Date(2026,8,1),endDate:new Date(2026,8,30)}];return s.jsx(g,{tasks:n,startDate:new Date(2026,0,1),endDate:new Date(2026,9,31),viewMode:"month"})}},p={render:function(){const{t:e}=b(k),n=[{id:"task-1",label:e("story.ganttchart_task_design"),startDate:new Date(2026,2,1),endDate:new Date(2026,2,10),color:"var(--wim-color-primary)"},{id:"task-2",label:e("story.ganttchart_task_development"),startDate:new Date(2026,2,8),endDate:new Date(2026,2,20),color:"var(--wim-color-positive)",progress:45},{id:"task-3",label:e("story.ganttchart_task_testing"),startDate:new Date(2026,2,18),endDate:new Date(2026,2,28),color:"var(--wim-color-caution)"}];return s.jsx(g,{tasks:n,startDate:new Date(2026,2,1),endDate:new Date(2026,2,31),viewMode:"day",onTaskClick:o=>alert(`Clicked: ${o.label}`)})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story.ganttchart_task_requirements"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 2, 5)
    }, {
      id: "task-2",
      label: t("story.ganttchart_task_design"),
      startDate: new Date(2026, 2, 4),
      endDate: new Date(2026, 2, 10)
    }, {
      id: "task-3",
      label: t("story.ganttchart_task_development"),
      startDate: new Date(2026, 2, 9),
      endDate: new Date(2026, 2, 20),
      progress: 60
    }, {
      id: "task-4",
      label: t("story.ganttchart_task_testing"),
      startDate: new Date(2026, 2, 18),
      endDate: new Date(2026, 2, 24)
    }, {
      id: "task-5",
      label: t("story.ganttchart_task_release"),
      startDate: new Date(2026, 2, 25),
      endDate: new Date(2026, 2, 31)
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 2, 31)} viewMode="day" />;
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story.ganttchart_task_requirements"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 2, 14)
    }, {
      id: "task-2",
      label: t("story.ganttchart_task_design"),
      startDate: new Date(2026, 2, 10),
      endDate: new Date(2026, 2, 28),
      progress: 30
    }, {
      id: "task-3",
      label: t("story.ganttchart_task_development"),
      startDate: new Date(2026, 2, 20),
      endDate: new Date(2026, 3, 15),
      progress: 10
    }, {
      id: "task-4",
      label: t("story.ganttchart_task_testing"),
      startDate: new Date(2026, 3, 10),
      endDate: new Date(2026, 3, 24)
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 3, 30)} viewMode="week" />;
  }
}`,...h.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story.ganttchart_task_requirements"),
      startDate: new Date(2026, 0, 5),
      endDate: new Date(2026, 1, 10)
    }, {
      id: "task-2",
      label: t("story.ganttchart_task_design"),
      startDate: new Date(2026, 1, 1),
      endDate: new Date(2026, 2, 20),
      progress: 70
    }, {
      id: "task-3",
      label: t("story.ganttchart_task_development"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 5, 30),
      progress: 20
    }, {
      id: "task-4",
      label: t("story.ganttchart_task_testing"),
      startDate: new Date(2026, 5, 1),
      endDate: new Date(2026, 7, 31)
    }, {
      id: "task-5",
      label: t("story.ganttchart_task_release"),
      startDate: new Date(2026, 8, 1),
      endDate: new Date(2026, 8, 30)
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 0, 1)} endDate={new Date(2026, 9, 31)} viewMode="month" />;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story.ganttchart_task_design"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 2, 10),
      color: "var(--wim-color-primary)"
    }, {
      id: "task-2",
      label: t("story.ganttchart_task_development"),
      startDate: new Date(2026, 2, 8),
      endDate: new Date(2026, 2, 20),
      color: "var(--wim-color-positive)",
      progress: 45
    }, {
      id: "task-3",
      label: t("story.ganttchart_task_testing"),
      startDate: new Date(2026, 2, 18),
      endDate: new Date(2026, 2, 28),
      color: "var(--wim-color-caution)"
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 2, 31)} viewMode="day" onTaskClick={(task: GanttTask) => alert(\`Clicked: \${task.label}\`)} />;
  }
}`,...p.parameters?.docs?.source}}};const z=["Default","WeekView","MonthView","WithClickHandler"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:w,MonthView:_,WeekView:h,WithClickHandler:p,__namedExportsOrder:z,default:Y},Symbol.toStringTag,{value:"Module"}));export{w as D,Z as G,_ as M,h as W,p as a};
