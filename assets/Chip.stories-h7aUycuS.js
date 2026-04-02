import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Chip-D6YRv8_C.js";import{I as C}from"./Icon-BdgCn_Xq.js";import{A as g}from"./Avatar-BFaNFp2U.js";import{A as s}from"./iframe-GzHoau5L.js";import{u as a}from"./useTranslation-Ckw9ivsw.js";const _={title:"Components/Selection Controls/Chip",component:t,tags:[],argTypes:{disabled:{control:"boolean"},intent:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:"select",options:["solid","outline"]},size:{control:"radio",options:["sm","md","lg"]},onClick:{action:"clicked"},onDelete:{action:"deleted"}},parameters:{docs:{description:{component:"Data Display/Chip Component"}}}},i={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,children:n("story.chip_default")})}},c={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,onClick:h=>console.log("Chip clicked",h),children:n("story.chip_clickable")})}},l={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,onDelete:h=>console.log("Chip deleted",h),children:n("story.chip_deletable")})}},d={render:function(e){return r.jsx(t,{...e,avatar:r.jsx(g,{initials:"JD",size:"sm"}),children:"Jane Doe"})}},p={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,label:n("story.selectbox_opt4"),icon:r.jsx(C,{name:"CircleIcon",size:"sm"})})}},u={render:function(e){const{t:n}=a(s);return r.jsx(t,{...e,selected:!0,onClick:()=>{},children:n("story.chip_selected")})}},m={render:function(e){const{t:n}=a(s);return r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(t,{...e,variant:"solid",onClick:()=>{},children:n("story.chip_solid")}),r.jsx(t,{...e,variant:"outline",onClick:()=>{},children:n("story.chip_outline")}),r.jsx(t,{...e,variant:"outline",selected:!0,onClick:()=>{},children:n("story.chip_selected_label")})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args}>{t("story.chip_default")}</Chip>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)}>
        {t("story.chip_clickable")}
      </Chip>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} onDelete={(e: React.SyntheticEvent) => console.log("Chip deleted", e)}>
        {t("story.chip_deletable")}
      </Chip>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Chip {...args} avatar={<Avatar initials="JD" size="sm" />}>Jane Doe</Chip>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} label={t("story.selectbox_opt4")} icon={<Icon name="CircleIcon" size="sm" />} />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} selected={true} onClick={() => {}}>{t("story.chip_selected")}</Chip>;
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
        <Chip {...args} variant="solid" onClick={() => {}}>{t("story.chip_solid")}</Chip>
        <Chip {...args} variant="outline" onClick={() => {}}>{t("story.chip_outline")}</Chip>
        <Chip {...args} variant="outline" selected onClick={() => {}}>
          {t("story.chip_selected_label")}
        </Chip>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const f=["Default","Clickable","Deletable","WithAvatar","WithIcon","Selected","Variants"],k=Object.freeze(Object.defineProperty({__proto__:null,Clickable:c,Default:i,Deletable:l,Selected:u,Variants:m,WithAvatar:d,WithIcon:p,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{k as C,i as D,u as S,m as V,d as W,c as a,l as b};
