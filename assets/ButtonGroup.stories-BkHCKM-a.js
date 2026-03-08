import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./iframe-c-ynOOH6.js";import{c as z}from"./index-CYDtE1TD.js";import{B as t}from"./Button-BHht7yYi.js";import{u as i}from"./useTranslation-BS4yh-5V.js";const s=({children:n,gap:o="8px",className:r,joined:_=!1,priority:b})=>{const g=_?{}:{gap:o},B=b?y.Children.map(n,d=>y.isValidElement(d)?y.cloneElement(d,{priority:b}):d):n;return e.jsx("div",{className:z("wim-button-group",_&&"wim-button-group--joined",r),style:g,children:B})};s.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:""}}};const j={title:"Components/Buttons/ButtonGroup",component:s,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"},priority:{control:"select",options:["primary","secondary","tertiary"]}}},a={render:function(o){const{t:r}=i(["docs","common","components"]);return e.jsxs(s,{...o,children:[e.jsx(t,{size:"large",label:r("story_button_click_me"),priority:"primary"}),e.jsx(t,{size:"large",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"large",label:r("story_button_click_me"),priority:"tertiary"})]})}},c={render:function(o){const{t:r}=i(["docs","common","components"]);return e.jsxs(s,{...o,children:[e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"primary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"tertiary"})]})}},u={render:function(o){const{t:r}=i(["docs","common","components"]);return e.jsxs(s,{...o,children:[e.jsx(t,{size:"small",label:r("story_button_click_me"),priority:"primary"}),e.jsx(t,{size:"small",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"small",label:r("story_button_click_me"),priority:"tertiary"})]})}},m={args:{joined:!0},render:function(o){const{t:r}=i(["docs","common","components"]);return e.jsxs(s,{...o,children:[e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"})]})}},l={args:{joined:!0,priority:"primary"},render:function(o){const{t:r}=i(["docs","common","components"]);return e.jsxs(s,{...o,children:[e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_button_click_me"),priority:"secondary"})]})}},p={args:{priority:"tertiary",gap:"10px"},render:function(o){const{t:r}=i(["docs","common","components"]);return e.jsxs(s,{...o,children:[e.jsx(t,{size:"medium",label:r("story_buttongroup_primary"),priority:"primary"}),e.jsx(t,{size:"medium",label:r("story_buttongroup_secondary"),priority:"secondary"}),e.jsx(t,{size:"medium",label:r("story_buttongroup_tertiary"),priority:"tertiary"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="large" label={t("story_button_click_me")} priority="primary" />\r
        <Button size="large" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="large" label={t("story_button_click_me")} priority="tertiary" />\r
      </ButtonGroup>;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_button_click_me")} priority="primary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="tertiary" />\r
      </ButtonGroup>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="small" label={t("story_button_click_me")} priority="primary" />\r
        <Button size="small" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="small" label={t("story_button_click_me")} priority="tertiary" />\r
      </ButtonGroup>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
      </ButtonGroup>;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true,
    priority: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
      </ButtonGroup>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    gap: "10px"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_buttongroup_primary")} priority="primary" />\r
        <Button size="medium" label={t("story_buttongroup_secondary")} priority="secondary" />\r
        <Button size="medium" label={t("story_buttongroup_tertiary")} priority="tertiary" />\r
      </ButtonGroup>;
  }
}`,...p.parameters?.docs?.source}}};const x=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup","JoinedGroupPrimary","PriorityOverride"],S=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:m,JoinedGroupPrimary:l,LargeGroup:a,MediumGroup:c,PriorityOverride:p,SmallGroup:u,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{S as B,m as J,a as L,c as M,u as S,l as a};
