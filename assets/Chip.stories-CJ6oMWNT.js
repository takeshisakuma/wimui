import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Chip-a-aFRIa_.js";import{I as C}from"./Icon-CC2_N0cA.js";import{A as h}from"./Avatar-POcEZvt3.js";import{A as s}from"./iframe-CIIG-mzz.js";import{u as a}from"./useTranslation-BlkCzwGH.js";const b={title:"Components/Selection Controls/Chip",component:t,tags:[],argTypes:{disabled:{control:"boolean"},status:{control:"select",options:["primary","secondary","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"select",options:["small","medium"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},l={render:function(e){const{t:r}=a(s);return n.jsx(t,{...e,label:r("story_chip_default")})}},c={render:function(e){const{t:r}=a(s);return n.jsx(t,{...e,label:r("story_chip_clickable"),onClick:_=>console.log("Chip clicked",_)})}},i={render:function(e){const{t:r}=a(s);return n.jsx(t,{...e,label:r("story_chip_deletable"),onDelete:_=>console.log("Chip deleted",_)})}},d={render:function(e){return n.jsx(t,{...e,label:"Jane Doe",avatar:n.jsx(h,{initials:"JD",size:"small"})})}},p={render:function(e){const{t:r}=a(s);return n.jsx(t,{...e,label:r("story_selectbox_opt4"),icon:n.jsx(C,{name:"CircleIcon",size:"small"})})}},u={render:function(e){const{t:r}=a(s);return n.jsx(t,{...e,label:r("story_chip_selected"),selected:!0,onClick:()=>{}})}},m={render:function(e){const{t:r}=a(s);return n.jsxs("div",{style:{display:"flex",gap:"10px"},children:[n.jsx(t,{...e,label:r("story_chip_solid"),variant:"solid",onClick:()=>{}}),n.jsx(t,{...e,label:r("story_chip_outline"),variant:"outline",onClick:()=>{}}),n.jsx(t,{...e,label:r("story_chip_selected_label"),variant:"outline",selected:!0,onClick:()=>{}})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} label={t("story_chip_default")} />;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} label={t("story_chip_clickable")} onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} label={t("story_chip_deletable")} onDelete={(e: React.SyntheticEvent) => console.log("Chip deleted", e)} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Chip {...args} label="Jane Doe" avatar={<Avatar initials="JD" size="small" />} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} label={t("story_selectbox_opt4")} icon={<Icon name="CircleIcon" size="small" />} />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} label={t("story_chip_selected")} selected={true} onClick={() => {}} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "10px"
    }}>
        <Chip {...args} label={t("story_chip_solid")} variant="solid" onClick={() => {}} />
        <Chip {...args} label={t("story_chip_outline")} variant="outline" onClick={() => {}} />
        <Chip {...args} label={t("story_chip_selected_label")} variant="outline" selected onClick={() => {}} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const g=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],k=Object.freeze(Object.defineProperty({__proto__:null,Clickable:c,Default:l,Deletable:i,Selected:u,Variants:m,WithAvatar:d,WithIcon:p,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{k as C,l as D,u as S,m as V,d as W,c as a,i as b};
