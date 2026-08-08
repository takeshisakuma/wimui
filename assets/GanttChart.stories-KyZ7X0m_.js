"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{g as c,t as l}from"./charts-DgmDr_G-.js";var u=e({Default:()=>p,MonthView:()=>h,WeekView:()=>m,WithClickHandler:()=>g,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Visualization/GanttChart`,component:c},p={render:function(){let{t:e}=r(s),t=[{id:`task-1`,label:e(`story.ganttchart_task_requirements`),startDate:new Date(2026,2,1),endDate:new Date(2026,2,5)},{id:`task-2`,label:e(`story.ganttchart_task_design`),startDate:new Date(2026,2,4),endDate:new Date(2026,2,10)},{id:`task-3`,label:e(`story.ganttchart_task_development`),startDate:new Date(2026,2,9),endDate:new Date(2026,2,20),progress:60},{id:`task-4`,label:e(`story.ganttchart_task_testing`),startDate:new Date(2026,2,18),endDate:new Date(2026,2,24)},{id:`task-5`,label:e(`story.ganttchart_task_release`),startDate:new Date(2026,2,25),endDate:new Date(2026,2,31)}],n={ariaChart:e(`components:ganttchart.aria_chart`),ariaTaskBar:(t,n,r)=>e(`components:ganttchart.aria_task_bar`,{label:t,start:n,end:r})};return(0,d.jsx)(c,{tasks:t,startDate:new Date(2026,2,1),endDate:new Date(2026,2,31),viewMode:`day`,labels:n})}},m={render:function(){let{t:e}=r(s);return(0,d.jsx)(c,{tasks:[{id:`task-1`,label:e(`story.ganttchart_task_requirements`),startDate:new Date(2026,2,1),endDate:new Date(2026,2,14)},{id:`task-2`,label:e(`story.ganttchart_task_design`),startDate:new Date(2026,2,10),endDate:new Date(2026,2,28),progress:30},{id:`task-3`,label:e(`story.ganttchart_task_development`),startDate:new Date(2026,2,20),endDate:new Date(2026,3,15),progress:10},{id:`task-4`,label:e(`story.ganttchart_task_testing`),startDate:new Date(2026,3,10),endDate:new Date(2026,3,24)}],startDate:new Date(2026,2,1),endDate:new Date(2026,3,30),viewMode:`week`})}},h={render:function(){let{t:e}=r(s);return(0,d.jsx)(c,{tasks:[{id:`task-1`,label:e(`story.ganttchart_task_requirements`),startDate:new Date(2026,0,5),endDate:new Date(2026,1,10)},{id:`task-2`,label:e(`story.ganttchart_task_design`),startDate:new Date(2026,1,1),endDate:new Date(2026,2,20),progress:70},{id:`task-3`,label:e(`story.ganttchart_task_development`),startDate:new Date(2026,2,1),endDate:new Date(2026,5,30),progress:20},{id:`task-4`,label:e(`story.ganttchart_task_testing`),startDate:new Date(2026,5,1),endDate:new Date(2026,7,31)},{id:`task-5`,label:e(`story.ganttchart_task_release`),startDate:new Date(2026,8,1),endDate:new Date(2026,8,30)}],startDate:new Date(2026,0,1),endDate:new Date(2026,9,31),viewMode:`month`})}},g={render:function(){let{t:e}=r(s);return(0,d.jsx)(c,{tasks:[{id:`task-1`,label:e(`story.ganttchart_task_design`),startDate:new Date(2026,2,1),endDate:new Date(2026,2,10),color:`var(--wim-color-primary)`},{id:`task-2`,label:e(`story.ganttchart_task_development`),startDate:new Date(2026,2,8),endDate:new Date(2026,2,20),color:`var(--wim-color-success)`,progress:45},{id:`task-3`,label:e(`story.ganttchart_task_testing`),startDate:new Date(2026,2,18),endDate:new Date(2026,2,28),color:`var(--wim-color-warning)`}],startDate:new Date(2026,2,1),endDate:new Date(2026,2,31),viewMode:`day`,onTaskClick:e=>alert(`Clicked: ${e.label}`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    const labels = {
      ariaChart: t("components:ganttchart.aria_chart"),
      ariaTaskBar: (label: string, start: string, end: string) => t("components:ganttchart.aria_task_bar", {
        label,
        start,
        end
      })
    };
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 2, 31)} viewMode="day" labels={labels} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      color: "var(--wim-color-success)",
      progress: 45
    }, {
      id: "task-3",
      label: t("story.ganttchart_task_testing"),
      startDate: new Date(2026, 2, 18),
      endDate: new Date(2026, 2, 28),
      color: "var(--wim-color-warning)"
    }];
    return <GanttChart tasks={tasks} startDate={new Date(2026, 2, 1)} endDate={new Date(2026, 2, 31)} viewMode="day" onTaskClick={(task: GanttTask) => alert(\`Clicked: \${task.label}\`)} />;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WeekView`,`MonthView`,`WithClickHandler`]}));v();export{p as Default,h as MonthView,m as WeekView,g as WithClickHandler,_ as __namedExportsOrder,f as default,v as n,u as t};