import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as c,A as b}from"./iframe-Ctdkiilp.js";import{c as L}from"./index-DSjzljfy.js";import{u as y}from"./useTranslation-BTb00TCF.js";function l(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function E(t,e){return Math.round((l(e).getTime()-l(t).getTime())/(1e3*60*60*24))}function O(t){const e=l(t),r=e.getDay(),o=r===0?-6:1-r;return e.setDate(e.getDate()+o),e}function P(t,e,r){const o=[];if(r==="day"){const n=l(t),i=l(e);for(;n<=i;)o.push({label:String(n.getDate()),date:new Date(n)}),n.setDate(n.getDate()+1)}else if(r==="week"){const n=O(t),i=l(e);for(;n<=i;){const d=n.getMonth()+1,f=n.getDate();o.push({label:`${d}/${f}`,date:new Date(n)}),n.setDate(n.getDate()+7)}}else{const n=new Date(t.getFullYear(),t.getMonth(),1),i=l(e);for(;n<=i;){const d=n.toLocaleString("en-US",{month:"short",year:"2-digit"});o.push({label:d,date:new Date(n)}),n.setMonth(n.getMonth()+1)}}return o}function R(t){return t==="day"?1:t==="week"?7:30.44}function V(t,e,r,o){return E(e,t.startDate)/R(r)*o}function F(t,e,r){const o=Math.max(E(t.startDate,t.endDate),1),n=r*.5;return Math.max(o/R(e)*r,n)}const U={day:40,week:80,month:120},g=({tasks:t,startDate:e,endDate:r,viewMode:o="day",columnWidth:n,rowHeight:i=40,onTaskClick:d,className:f})=>{const{t:j}=y("components"),v=c.useRef(null),S=c.useRef(null),[C,x]=c.useState(-1),_=n??U[o],M=c.useMemo(()=>e?l(e):t.length===0?l(new Date):l(new Date(Math.min(...t.map(a=>a.startDate.getTime())))),[e,t]),N=c.useMemo(()=>{if(r)return l(r);if(t.length===0){const a=l(new Date);return a.setDate(a.getDate()+30),a}return l(new Date(Math.max(...t.map(a=>a.endDate.getTime()))))},[r,t]),T=c.useMemo(()=>P(M,N,o),[M,N,o]),A=T.length*_,G=c.useCallback(()=>{S.current&&v.current&&(S.current.scrollLeft=v.current.scrollLeft)},[]),W=c.useCallback((a,u,k)=>{if(a.key==="Enter"||a.key===" ")a.preventDefault(),d?.(u);else if(a.key==="ArrowDown"){a.preventDefault();const D=Math.min(k+1,t.length-1);x(D),document.querySelectorAll(".wim-gantt-chart__bar")[D]?.focus()}else if(a.key==="ArrowUp"){a.preventDefault();const D=Math.max(k-1,0);x(D),document.querySelectorAll(".wim-gantt-chart__bar")[D]?.focus()}},[d,t.length]);return s.jsx("div",{className:L("wim-gantt-chart",f),role:"grid","aria-label":j("ganttchart_aria_chart"),children:s.jsxs("div",{className:"wim-gantt-chart__layout",children:[s.jsxs("div",{className:"wim-gantt-chart__label-panel","aria-hidden":"true",children:[s.jsx("div",{className:"wim-gantt-chart__header-cell wim-gantt-chart__header-cell--label",style:{height:i}}),t.map(a=>s.jsx("div",{className:"wim-gantt-chart__label-row",style:{height:i},children:s.jsx("span",{className:"wim-gantt-chart__label-text",children:a.label})},a.id))]}),s.jsxs("div",{className:"wim-gantt-chart__timeline-wrapper",children:[s.jsx("div",{ref:S,className:"wim-gantt-chart__header-scroll",children:s.jsx("div",{className:"wim-gantt-chart__header",style:{width:A,height:i},role:"row",children:T.map(a=>s.jsx("div",{className:"wim-gantt-chart__header-cell",style:{width:_},role:"columnheader",children:a.label},a.date.toISOString()))})}),s.jsx("div",{ref:v,className:"wim-gantt-chart__body-scroll",onScroll:G,children:s.jsx("div",{className:"wim-gantt-chart__body",style:{width:A,"--gantt-col-width":`${_}px`,"--gantt-row-height":`${i}px`},children:t.map((a,u)=>{const k=V(a,M,o,_),D=F(a,o,_),q=a.startDate.toLocaleDateString(),$=a.endDate.toLocaleDateString();return s.jsx("div",{className:"wim-gantt-chart__row",style:{height:i},role:"row",children:s.jsx("div",{role:"gridcell",className:L("wim-gantt-chart__bar",{"wim-gantt-chart__bar--clickable":!!d,"wim-gantt-chart__bar--focused":C===u}),style:{left:k,width:D,height:i-12,top:6,backgroundColor:a.color??"var(--color-primary, #1976d2)"},tabIndex:0,"aria-label":j("ganttchart_aria_task_bar",{label:a.label,start:q,end:$}),"aria-selected":C===u,onClick:()=>d?.(a),onKeyDown:I=>W(I,a,u),onFocus:()=>x(u),children:a.progress!==void 0&&s.jsx("div",{className:"wim-gantt-chart__progress",style:{width:`${Math.min(a.progress,100)}%`},"aria-hidden":"true"})})},a.id)})})})]})]})})};g.__docgenInfo={description:"",methods:[],displayName:"GanttChart",props:{tasks:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"startDate",value:{name:"Date",required:!0}},{key:"endDate",value:{name:"Date",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"progress",value:{name:"number",required:!1}}]}},name:"task"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/Data Structures/GanttChart",component:g},m={render:function(){const{t:e}=y(b),r=[{id:"task-1",label:e("story_ganttchart_task_requirements"),startDate:new Date(2026,2,1),endDate:new Date(2026,2,5)},{id:"task-2",label:e("story_ganttchart_task_design"),startDate:new Date(2026,2,4),endDate:new Date(2026,2,10)},{id:"task-3",label:e("story_ganttchart_task_development"),startDate:new Date(2026,2,9),endDate:new Date(2026,2,20),progress:60},{id:"task-4",label:e("story_ganttchart_task_testing"),startDate:new Date(2026,2,18),endDate:new Date(2026,2,24)},{id:"task-5",label:e("story_ganttchart_task_release"),startDate:new Date(2026,2,25),endDate:new Date(2026,2,31)}];return s.jsx(g,{tasks:r,startDate:new Date(2026,2,1),endDate:new Date(2026,2,31),viewMode:"day"})}},w={render:function(){const{t:e}=y(b),r=[{id:"task-1",label:e("story_ganttchart_task_requirements"),startDate:new Date(2026,2,1),endDate:new Date(2026,2,14)},{id:"task-2",label:e("story_ganttchart_task_design"),startDate:new Date(2026,2,10),endDate:new Date(2026,2,28),progress:30},{id:"task-3",label:e("story_ganttchart_task_development"),startDate:new Date(2026,2,20),endDate:new Date(2026,3,15),progress:10},{id:"task-4",label:e("story_ganttchart_task_testing"),startDate:new Date(2026,3,10),endDate:new Date(2026,3,24)}];return s.jsx(g,{tasks:r,startDate:new Date(2026,2,1),endDate:new Date(2026,3,30),viewMode:"week"})}},h={render:function(){const{t:e}=y(b),r=[{id:"task-1",label:e("story_ganttchart_task_requirements"),startDate:new Date(2026,0,5),endDate:new Date(2026,1,10)},{id:"task-2",label:e("story_ganttchart_task_design"),startDate:new Date(2026,1,1),endDate:new Date(2026,2,20),progress:70},{id:"task-3",label:e("story_ganttchart_task_development"),startDate:new Date(2026,2,1),endDate:new Date(2026,5,30),progress:20},{id:"task-4",label:e("story_ganttchart_task_testing"),startDate:new Date(2026,5,1),endDate:new Date(2026,7,31)},{id:"task-5",label:e("story_ganttchart_task_release"),startDate:new Date(2026,8,1),endDate:new Date(2026,8,30)}];return s.jsx(g,{tasks:r,startDate:new Date(2026,0,1),endDate:new Date(2026,9,31),viewMode:"month"})}},p={render:function(){const{t:e}=y(b),r=[{id:"task-1",label:e("story_ganttchart_task_design"),startDate:new Date(2026,2,1),endDate:new Date(2026,2,10),color:"var(--color-primary)"},{id:"task-2",label:e("story_ganttchart_task_development"),startDate:new Date(2026,2,8),endDate:new Date(2026,2,20),color:"var(--color-positive)",progress:45},{id:"task-3",label:e("story_ganttchart_task_testing"),startDate:new Date(2026,2,18),endDate:new Date(2026,2,28),color:"var(--color-caution)"}];return s.jsx(g,{tasks:r,startDate:new Date(2026,2,1),endDate:new Date(2026,2,31),viewMode:"day",onTaskClick:o=>alert(`Clicked: ${o.label}`)})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story_ganttchart_task_requirements"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 2, 5)
    }, {
      id: "task-2",
      label: t("story_ganttchart_task_design"),
      startDate: new Date(2026, 2, 4),
      endDate: new Date(2026, 2, 10)
    }, {
      id: "task-3",
      label: t("story_ganttchart_task_development"),
      startDate: new Date(2026, 2, 9),
      endDate: new Date(2026, 2, 20),
      progress: 60
    }, {
      id: "task-4",
      label: t("story_ganttchart_task_testing"),
      startDate: new Date(2026, 2, 18),
      endDate: new Date(2026, 2, 24)
    }, {
      id: "task-5",
      label: t("story_ganttchart_task_release"),
      startDate: new Date(2026, 2, 25),
      endDate: new Date(2026, 2, 31)
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 2, 31)} viewMode="day" />;
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story_ganttchart_task_requirements"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 2, 14)
    }, {
      id: "task-2",
      label: t("story_ganttchart_task_design"),
      startDate: new Date(2026, 2, 10),
      endDate: new Date(2026, 2, 28),
      progress: 30
    }, {
      id: "task-3",
      label: t("story_ganttchart_task_development"),
      startDate: new Date(2026, 2, 20),
      endDate: new Date(2026, 3, 15),
      progress: 10
    }, {
      id: "task-4",
      label: t("story_ganttchart_task_testing"),
      startDate: new Date(2026, 3, 10),
      endDate: new Date(2026, 3, 24)
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 3, 30)} viewMode="week" />;
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story_ganttchart_task_requirements"),
      startDate: new Date(2026, 0, 5),
      endDate: new Date(2026, 1, 10)
    }, {
      id: "task-2",
      label: t("story_ganttchart_task_design"),
      startDate: new Date(2026, 1, 1),
      endDate: new Date(2026, 2, 20),
      progress: 70
    }, {
      id: "task-3",
      label: t("story_ganttchart_task_development"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 5, 30),
      progress: 20
    }, {
      id: "task-4",
      label: t("story_ganttchart_task_testing"),
      startDate: new Date(2026, 5, 1),
      endDate: new Date(2026, 7, 31)
    }, {
      id: "task-5",
      label: t("story_ganttchart_task_release"),
      startDate: new Date(2026, 8, 1),
      endDate: new Date(2026, 8, 30)
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 0, 1)} endDate={new Date(2026, 9, 31)} viewMode="month" />;
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: "task-1",
      label: t("story_ganttchart_task_design"),
      startDate: new Date(2026, 2, 1),
      endDate: new Date(2026, 2, 10),
      color: "var(--color-primary)"
    }, {
      id: "task-2",
      label: t("story_ganttchart_task_development"),
      startDate: new Date(2026, 2, 8),
      endDate: new Date(2026, 2, 20),
      color: "var(--color-positive)",
      progress: 45
    }, {
      id: "task-3",
      label: t("story_ganttchart_task_testing"),
      startDate: new Date(2026, 2, 18),
      endDate: new Date(2026, 2, 28),
      color: "var(--color-caution)"
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 2, 31)} viewMode="day" onTaskClick={task => alert(\`Clicked: \${task.label}\`)} />;
  }
}`,...p.parameters?.docs?.source}}};const K=["Default","WeekView","MonthView","WithClickHandler"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:m,MonthView:h,WeekView:w,WithClickHandler:p,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{m as D,Q as G,h as M,w as W,p as a};
