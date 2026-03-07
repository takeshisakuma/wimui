import{j as o}from"./jsx-runtime-u17CrQMm.js";import{C as r}from"./Chip-By29Ih23.js";import{I as _}from"./Icon-AzvAEZfC.js";import{A as C}from"./Avatar-l3BY6aT_.js";import{u as t}from"./useTranslation-T6dr20_p.js";const h={title:"Components/Selection Controls/Chip",component:r,tags:[],argTypes:{color:{control:"select",options:["primary","secondary","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"select",options:["small","medium"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},c={render:function(e){const{t:n}=t(["docs","common","components"]);return o.jsx(r,{...e,label:n("story_chip_default")})}},a={render:function(e){const{t:n}=t(["docs","common","components"]);return o.jsx(r,{...e,label:n("story_chip_clickable"),onClick:u=>console.log("Chip clicked",u)})}},l={render:function(e){const{t:n}=t(["docs","common","components"]);return o.jsx(r,{...e,label:n("story_chip_deletable"),onDelete:u=>console.log("Chip deleted",u)})}},i={render:function(e){const{t:n}=t(["docs","common","components"]);return o.jsx(r,{...e,label:"Jane Doe",avatar:o.jsx(C,{initials:"JD",size:"sm"})})}},d={render:function(e){const{t:n}=t(["docs","common","components"]);return o.jsx(r,{...e,label:n("story_selectbox_opt4"),icon:o.jsx(_,{name:"CircleIcon",size:"small"})})}},p={render:function(e){const{t:n}=t(["docs","common","components"]);return o.jsx(r,{...e,label:n("story_chip_selected"),selected:!0,onClick:()=>{}})}},m={render:function(e){const{t:n}=t(["docs","common","components"]);return o.jsxs("div",{style:{display:"flex",gap:"10px"},children:[o.jsx(r,{...e,label:n("story_chip_solid"),variant:"solid",onClick:()=>{}}),o.jsx(r,{...e,label:n("story_chip_outline"),variant:"outline",onClick:()=>{}}),o.jsx(r,{...e,label:n("story_chip_selected_label"),variant:"outline",selected:!0,onClick:()=>{}})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label={t("story_chip_default")} />;
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label={t("story_chip_clickable")} onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)} />;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label={t("story_chip_deletable")} onDelete={(e: React.MouseEvent) => console.log("Chip deleted", e)} />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label="Jane Doe" avatar={<Avatar initials="JD" size="sm" />} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label={t("story_selectbox_opt4")} icon={<Icon name="CircleIcon" size="small" />} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label={t("story_chip_selected")} selected={true} onClick={() => {}} />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      gap: "10px"
    }}>\r
        <Chip {...args} label={t("story_chip_solid")} variant="solid" onClick={() => {}} />\r
        <Chip {...args} label={t("story_chip_outline")} variant="outline" onClick={() => {}} />\r
        <Chip {...args} label={t("story_chip_selected_label")} variant="outline" selected onClick={() => {}} />\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const b=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],k=Object.freeze(Object.defineProperty({__proto__:null,Clickable:a,Default:c,Deletable:l,Selected:p,Variants:m,WithAvatar:i,WithIcon:d,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{k as C,c as D,p as S,m as V,i as W,a,l as b};
