"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{t as l}from"./ToggleGroup-DkmsZqzA.js";var u=e({DisabledOptions:()=>y,FullWidth:()=>v,IconOnly:()=>g,MultipleSelection:()=>h,SingleSelection:()=>m,Sizes:()=>_,__namedExportsOrder:()=>b,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Selection Controls/ToggleGroup`,component:l,argTypes:{disabled:{control:`boolean`},selectionMode:{control:`select`,options:[`single`,`multiple`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p=()=>{let{t:e}=r(s);return[{label:e(`story.toggle_left`),value:`left`,iconName:`CircleIcon`},{label:e(`story.toggle_center`),value:`center`,iconName:`SquareIcon`},{label:e(`story.toggle_right`),value:`right`,iconName:`LoadingIcon`}]},m={render:function(e){let t=p();return(0,d.jsx)(l,{...e,options:t,selectionMode:`single`,defaultValue:`left`})}},h={render:function(e){let t=p();return(0,d.jsx)(l,{...e,options:t,selectionMode:`multiple`,defaultValue:[`left`,`right`]})}},g={args:{options:[{value:`bold`,iconName:`CircleIcon`},{value:`italic`,iconName:`SquareIcon`},{value:`underline`,iconName:`LoadingIcon`}],selectionMode:`multiple`,defaultValue:[`bold`]}},_={render:function(e){let t=p();return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`flex-start`},children:[(0,d.jsx)(l,{...e,options:t,size:`sm`}),(0,d.jsx)(l,{...e,options:t,size:`md`}),(0,d.jsx)(l,{...e,options:t,size:`lg`})]})},args:{selectionMode:`single`,defaultValue:`center`}},v={render:function(e){let t=p();return(0,d.jsx)(l,{...e,options:t,selectionMode:`single`,defaultValue:`center`,fullWidth:!0})}},y={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,options:[{label:t(`story.toggle_available`),value:`avail`},{label:t(`story.toggle_disabled`),value:`disabled`,disabled:!0},{label:t(`story.toggle_selected_disabled`),value:`sel-disabled`,disabled:!0}],selectionMode:`multiple`,defaultValue:[`sel-disabled`]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="single" defaultValue="left" />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="multiple" defaultValue={["left", "right"]} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "bold",
      iconName: "CircleIcon"
    }, {
      value: "italic",
      iconName: "SquareIcon"
    }, {
      value: "underline",
      iconName: "LoadingIcon"
    }] satisfies Option[],
    selectionMode: "multiple",
    defaultValue: ["bold"]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-start"
    }}>
        <ToggleGroup {...args} options={options} size="sm" />
        <ToggleGroup {...args} options={options} size="md" />
        <ToggleGroup {...args} options={options} size="lg" />
      </div>;
  },
  args: {
    selectionMode: "single",
    defaultValue: "center"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <ToggleGroup {...args} options={options} selectionMode="single" defaultValue="center" fullWidth={true} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ToggleGroup {...args} options={[{
      label: t("story.toggle_available"),
      value: "avail"
    }, {
      label: t("story.toggle_disabled"),
      value: "disabled",
      disabled: true
    }, {
      label: t("story.toggle_selected_disabled"),
      value: "sel-disabled",
      disabled: true
    }]} selectionMode="multiple" defaultValue={["sel-disabled"]} />;
  }
}`,...y.parameters?.docs?.source}}},b=[`SingleSelection`,`MultipleSelection`,`IconOnly`,`Sizes`,`FullWidth`,`DisabledOptions`]}));x();export{y as DisabledOptions,v as FullWidth,g as IconOnly,h as MultipleSelection,m as SingleSelection,_ as Sizes,b as __namedExportsOrder,f as default,x as n,u as t};