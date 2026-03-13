import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as n}from"./Chip-CZrceVDO.js";import{I as m}from"./Icon-CccJ-EGP.js";import{A as y}from"./Avatar-vmdeP1I2.js";import{u as c}from"./useTranslation-DD4zKDMJ.js";const g={title:"Components/Selection Controls/Chip",component:n,tags:[],argTypes:{status:{control:"select",options:["primary","secondary","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"select",options:["small","medium"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},a={render:function(o){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("story_chip_default")})}},r={render:function(o){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("story_chip_clickable"),onClick:u=>console.log("Chip clicked",u)})}},i={render:function(o){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("story_chip_deletable"),onDelete:u=>console.log("Chip deleted",u)})}},d={render:function(o){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:"Jane Doe",avatar:e.jsx(y,{initials:"JD",size:"small"})})}},l={render:function(o){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("story_selectbox_opt4"),icon:e.jsx(m,{name:"CircleIcon",size:"small"})})}},_={render:function(o){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("story_chip_selected"),selected:!0,onClick:()=>{}})}},p={render:function(o){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(n,{...o,label:s("story_chip_solid"),variant:"solid",onClick:()=>{}}),e.jsx(n,{...o,label:s("story_chip_outline"),variant:"outline",onClick:()=>{}}),e.jsx(n,{...o,label:s("story_chip_selected_label"),variant:"outline",selected:!0,onClick:()=>{}})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Chip {...args} label={t("story_chip_default")} />;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Chip {...args} label={t("story_chip_clickable")} onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)} />;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Chip {...args} label={t("story_chip_deletable")} onDelete={(e: React.MouseEvent) => console.log("Chip deleted", e)} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Chip {...args} label="Jane Doe" avatar={<Avatar initials="JD" size="small" />} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Chip {...args} label={t("story_selectbox_opt4")} icon={<Icon name="CircleIcon" size="small" />} />;
  }
}`,...l.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Chip {...args} label={t("story_chip_selected")} selected={true} onClick={() => {}} />;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      display: "flex",
      gap: "10px"
    }}>\r
        <Chip {...args} label={t("story_chip_solid")} variant="solid" onClick={() => {}} />\r
        <Chip {...args} label={t("story_chip_outline")} variant="outline" onClick={() => {}} />\r
        <Chip {...args} label={t("story_chip_selected_label")} variant="outline" selected onClick={() => {}} />\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const v=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],k=Object.freeze(Object.defineProperty({__proto__:null,Clickable:r,Default:a,Deletable:i,Selected:_,Variants:p,WithAvatar:d,WithIcon:l,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{k as C,a as D,_ as S,p as V,d as W,r as a,i as b};
