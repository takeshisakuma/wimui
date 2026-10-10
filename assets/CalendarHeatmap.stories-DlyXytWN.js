"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Label-CaPgujqk.js";import{n as d,t as f}from"./CalendarHeatmap-D4eal5wW.js";var p=n({Default:()=>v,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y;function b(){return(b=t((()=>{m=e(r(),1),a(),o(),d(),l(),h=c(),g={title:`Components/Visualization/CalendarHeatmap`,component:f,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`}}},_=e=>{let t=[],n=new Date(e,0,1),r=new Date(e,11,31);for(let e=new Date(n);e<=r;e.setDate(e.getDate()+1))t.push({date:e.toISOString().split(`T`)[0],count:(e.getDate()+e.getMonth())%10});return t},v={render:function(e){let{t}=i(s),n=new Date().getFullYear(),r=m.useMemo(()=>_(n),[n]);return(0,h.jsx)(u,{label:t(`story.heatmap_label`),children:(0,h.jsx)(f,{...e,data:r,year:n})})}},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const currentYear = new Date().getFullYear();
    const mockData = React.useMemo(() => generateMockData(currentYear), [currentYear]);
    return <Label label={t("story.heatmap_label")}>
        <CalendarHeatmap {...args} data={mockData} year={currentYear} />
      </Label>;
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as n,p as t};