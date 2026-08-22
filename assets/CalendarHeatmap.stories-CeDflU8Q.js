"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{Q as l,t as u}from"./src-Ssuy8lr7.js";import{a as d}from"./FieldTemplate-D3hWbscu.js";var f=e({Default:()=>_,__namedExportsOrder:()=>v,default:()=>h}),p,m,h,g,_,v,y=t((()=>{p=n(r(),1),s(),a(),u(),m=o(),h={title:`Components/Visualization/CalendarHeatmap`,component:l,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`}}},g=e=>{let t=[],n=new Date(e,0,1),r=new Date(e,11,31);for(let e=new Date(n);e<=r;e.setDate(e.getDate()+1))t.push({date:e.toISOString().split(`T`)[0],count:(e.getDate()+e.getMonth())%10});return t},_={render:function(e){let{t}=i(c),n=new Date().getFullYear(),r=p.useMemo(()=>g(n),[n]);return(0,m.jsx)(d,{label:t(`story.heatmap_label`),children:(0,m.jsx)(l,{...e,data:r,year:n})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`]}));y();export{_ as Default,v as __namedExportsOrder,h as default,y as n,f as t};