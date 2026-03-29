import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Chip-Ccq3dX58.js";import{I as C}from"./Icon-DG-VY8Tp.js";import{A as _}from"./Avatar-CFa7C2us.js";import{A as s}from"./iframe-DD-5vQ8N.js";import{u as a}from"./useTranslation-BGm1MMYI.js";const g={title:"Components/Selection Controls/Chip",component:t,tags:[],argTypes:{disabled:{control:"boolean"},status:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"radio",options:["small","medium","large"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},i={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,children:n("story_chip_default")})}},c={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,onClick:h=>console.log("Chip clicked",h),children:n("story_chip_clickable")})}},l={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,onDelete:h=>console.log("Chip deleted",h),children:n("story_chip_deletable")})}},d={render:function(e){return r.jsx(t,{...e,avatar:r.jsx(_,{initials:"JD",size:"small"}),children:"Jane Doe"})}},p={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,label:n("story_selectbox_opt4"),icon:r.jsx(C,{name:"CircleIcon",size:"small"})})}},u={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,selected:!0,onClick:()=>{},children:n("story_chip_selected")})}},m={render:function(e){const{t:n}=a(s);return r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(t,{...e,variant:"solid",onClick:()=>{},children:n("story_chip_solid")}),r.jsx(t,{...e,variant:"outline",onClick:()=>{},children:n("story_chip_outline")}),r.jsx(t,{...e,variant:"outline",selected:!0,onClick:()=>{},children:n("story_chip_selected_label")})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args}>{t("story_chip_default")}</Chip>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)}>
        {t("story_chip_clickable")}
      </Chip>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} onDelete={(e: React.SyntheticEvent) => console.log("Chip deleted", e)}>
        {t("story_chip_deletable")}
      </Chip>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Chip {...args} avatar={<Avatar initials="JD" size="small" />}>Jane Doe</Chip>;
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
    return <Chip {...args} selected={true} onClick={() => {}}>{t("story_chip_selected")}</Chip>;
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
        <Chip {...args} variant="solid" onClick={() => {}}>{t("story_chip_solid")}</Chip>
        <Chip {...args} variant="outline" onClick={() => {}}>{t("story_chip_outline")}</Chip>
        <Chip {...args} variant="outline" selected onClick={() => {}}>
          {t("story_chip_selected_label")}
        </Chip>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const f=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],k=Object.freeze(Object.defineProperty({__proto__:null,Clickable:c,Default:i,Deletable:l,Selected:u,Variants:m,WithAvatar:d,WithIcon:p,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{k as C,i as D,u as S,m as V,d as W,c as a,l as b};
