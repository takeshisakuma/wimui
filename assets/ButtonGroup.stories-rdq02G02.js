import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as _,A as s}from"./iframe-CrEaZ-m1.js";import{c as j}from"./index-DuagTqeO.js";import{B as t}from"./Button-DP-W9k8s.js";import{u as a}from"./useTranslation-C_YAF8hH.js";const i=({children:n,gap:o="8px",className:r,joined:b=!1,priority:g})=>{const B=b?{}:{gap:o},z=g?_.Children.map(n,d=>_.isValidElement(d)?_.cloneElement(d,{priority:g}):d):n;return e.jsx("div",{className:j("wim-button-group",b&&"wim-button-group--joined",r),style:B,children:z})};i.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:""}}};const x={title:"Components/Buttons/ButtonGroup",component:i,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"},priority:{control:"select",options:["primary","secondary","tertiary"]}}},u={render:function(o){const{t:r}=a(s);return e.jsxs(i,{...o,children:[e.jsx(t,{size:"large",label:r("story_button_click_me"),priority:"primary"}),e.jsx(t,{size:"large",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"large",label:r("story_button_click_me"),priority:"tertiary"})]})}},l={render:function(o){const{t:r}=a(s);return e.jsxs(i,{...o,children:[e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"primary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"tertiary"})]})}},c={render:function(o){const{t:r}=a(s);return e.jsxs(i,{...o,children:[e.jsx(t,{size:"small",label:r("story_button_click_me"),priority:"primary"}),e.jsx(t,{size:"small",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"small",label:r("story_button_click_me"),priority:"tertiary"})]})}},m={args:{joined:!0},render:function(o){const{t:r}=a(s);return e.jsxs(i,{...o,children:[e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"})]})}},p={args:{joined:!0,priority:"primary"},render:function(o){const{t:r}=a(s);return e.jsxs(i,{...o,children:[e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"})]})}},y={args:{priority:"tertiary",gap:"10px"},render:function(o){const{t:r}=a(s);return e.jsxs(i,{...o,children:[e.jsx(t,{size:"medium",label:r("story_buttongroup_primary"),priority:"primary"}),e.jsx(t,{size:"medium",label:r("story_buttongroup_secondary"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_buttongroup_tertiary"),priority:"tertiary"})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="large" label={t("story_button_click_me")} priority="primary" />
        <Button size="large" label={t("story_button_click_me")} priority="secondary" />
        <Button size="large" label={t("story_button_click_me")} priority="tertiary" />
      </ButtonGroup>;
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="medium" label={t("story_button_click_me")} priority="primary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="tertiary" />
      </ButtonGroup>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="small" label={t("story_button_click_me")} priority="primary" />
        <Button size="small" label={t("story_button_click_me")} priority="secondary" />
        <Button size="small" label={t("story_button_click_me")} priority="tertiary" />
      </ButtonGroup>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
      </ButtonGroup>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true,
    priority: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
      </ButtonGroup>;
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    gap: "10px"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ButtonGroup {...args}>
        <Button size="medium" label={t("story_buttongroup_primary")} priority="primary" />
        <Button size="medium" label={t("story_buttongroup_secondary")} priority="secondary" />
        <Button size="medium" label={t("story_buttongroup_tertiary")} priority="tertiary" />
      </ButtonGroup>;
  }
}`,...y.parameters?.docs?.source}}};const f=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup","JoinedGroupPrimary","PriorityOverride"],E=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:m,JoinedGroupPrimary:p,LargeGroup:u,MediumGroup:l,PriorityOverride:y,SmallGroup:c,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{E as B,m as J,u as L,l as M,c as S,p as a};
