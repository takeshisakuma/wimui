import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as g,A as i}from"./iframe-DKMOQHZ-.js";import{c as h}from"./index-CGUrc0iP.js";import{B as e}from"./Button-7reoHkqn.js";import{u as a}from"./useTranslation-CMEx9zdK.js";const s=({children:o,gap:r="8px",className:t,joined:y=!1,variant:B})=>{const v=y?{}:{gap:r},b=B?g.Children.map(o,_=>g.isValidElement(_)?g.cloneElement(_,{variant:B}):_):o;return n.jsx("div",{className:h("wim-button-group",y&&"wim-button-group--joined",t),style:v,children:b})};s.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "ghost"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:""}}};const z={title:"Components/Buttons/ButtonGroup",component:s,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"},variant:{control:"select",options:["solid","outline","ghost"]}}},u={render:function(r){const{t}=a(i);return n.jsxs(s,{...r,children:[n.jsx(e,{size:"lg",variant:"solid",children:t("story.button_click_me")}),n.jsx(e,{size:"lg",variant:"outline",children:t("story.button_click_me")}),n.jsx(e,{size:"lg",variant:"ghost",children:t("story.button_click_me")})]})}},c={render:function(r){const{t}=a(i);return n.jsxs(s,{...r,children:[n.jsx(e,{size:"md",variant:"solid",children:t("story.button_click_me")}),n.jsx(e,{size:"md",variant:"outline",children:t("story.button_click_me")}),n.jsx(e,{size:"md",variant:"ghost",children:t("story.button_click_me")})]})}},l={render:function(r){const{t}=a(i);return n.jsxs(s,{...r,children:[n.jsx(e,{size:"sm",variant:"solid",children:t("story.button_click_me")}),n.jsx(e,{size:"sm",variant:"outline",children:t("story.button_click_me")}),n.jsx(e,{size:"sm",variant:"ghost",children:t("story.button_click_me")})]})}},d={args:{joined:!0},render:function(r){const{t}=a(i);return n.jsxs(s,{...r,children:[n.jsx(e,{size:"md",variant:"outline",children:t("story.button_click_me")}),n.jsx(e,{size:"md",variant:"outline",children:t("story.button_click_me")}),n.jsx(e,{size:"md",variant:"outline",children:t("story.button_click_me")})]})}},m={args:{joined:!0,variant:"solid"},render:function(r){const{t}=a(i);return n.jsxs(s,{...r,children:[n.jsx(e,{size:"md",variant:"outline",children:t("story.button_click_me")}),n.jsx(e,{size:"md",variant:"outline",children:t("story.button_click_me")}),n.jsx(e,{size:"md",variant:"outline",children:t("story.button_click_me")})]})}},p={args:{variant:"ghost",gap:"10px"},render:function(r){const{t}=a(i);return n.jsxs(s,{...r,children:[n.jsx(e,{size:"md",variant:"solid",children:t("story.buttongroup_primary")}),n.jsx(e,{size:"md",variant:"outline",children:t("story.buttongroup_secondary")}),n.jsx(e,{size:"md",variant:"ghost",children:t("story.buttongroup_tertiary")})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="lg" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="sm" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true,
    variant: "solid"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    gap: "10px"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="md" variant="solid">{t("story.buttongroup_primary")}</Button>
        <Button size="md" variant="outline">{t("story.buttongroup_secondary")}</Button>
        <Button size="md" variant="ghost">{t("story.buttongroup_tertiary")}</Button>
      </ButtonGroup>;
  }
}`,...p.parameters?.docs?.source}}};const j=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup","JoinedGroupPrimary","PriorityOverride"],A=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:d,JoinedGroupPrimary:m,LargeGroup:u,MediumGroup:c,PriorityOverride:p,SmallGroup:l,__namedExportsOrder:j,default:z},Symbol.toStringTag,{value:"Module"}));export{A as B,d as J,u as L,c as M,l as S,m as a};
