import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as p}from"./iframe-OlV4UgK7.js";import{c as z}from"./index-Dj-MT3vJ.js";import{B as t}from"./Button-CXUQ5Vxr.js";import{u as i}from"./useTranslation-CLFZhCB5.js";const n=({children:s,gap:e="8px",className:o,joined:y=!1,priority:b})=>{const g=y?{}:{gap:e},B=b?p.Children.map(s,m=>p.isValidElement(m)?p.cloneElement(m,{priority:b}):m):s;return r.jsx("div",{className:z("wim-button-group",y&&"wim-button-group--joined",o),style:g,children:B})};n.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},joined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:""}}};const j={title:"Components/Buttons/ButtonGroup",component:n,parameters:{layout:"centered"},argTypes:{gap:{control:"text"},joined:{control:"boolean"},priority:{control:"select",options:["primary","secondary","tertiary"]}}},a={render:function(e){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...e,children:[r.jsx(t,{size:"large",label:o("story_button_click_me"),priority:"primary"}),r.jsx(t,{size:"large",label:o("story_button_click_me"),priority:"secondary"}),r.jsx(t,{size:"large",label:o("story_button_click_me"),priority:"tertiary"})]})}},c={render:function(e){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...e,children:[r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"primary"}),r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"secondary"}),r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"tertiary"})]})}},d={render:function(e){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...e,children:[r.jsx(t,{size:"small",label:o("story_button_click_me"),priority:"primary"}),r.jsx(t,{size:"small",label:o("story_button_click_me"),priority:"secondary"}),r.jsx(t,{size:"small",label:o("story_button_click_me"),priority:"tertiary"})]})}},u={args:{joined:!0},render:function(e){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...e,children:[r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"secondary"}),r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"secondary"}),r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"secondary"})]})}},l={args:{joined:!0,priority:"primary"},render:function(e){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...e,children:[r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"secondary"}),r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"secondary"}),r.jsx(t,{size:"medium",label:o("story_button_click_me"),priority:"secondary"})]})}},_={args:{priority:"tertiary",gap:"10px"},render:function(e){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(n,{...e,children:[r.jsx(t,{size:"medium",label:o("story_buttongroup_primary"),priority:"primary"}),r.jsx(t,{size:"medium",label:o("story_buttongroup_secondary"),priority:"secondary"}),r.jsx(t,{size:"medium",label:o("story_buttongroup_tertiary"),priority:"tertiary"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_button_click_me")} priority="primary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="tertiary" />\r
      </ButtonGroup>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="small" label={t("story_button_click_me")} priority="primary" />\r
        <Button size="small" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="small" label={t("story_button_click_me")} priority="tertiary" />\r
      </ButtonGroup>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
      </ButtonGroup>;
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    joined: true,
    priority: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />\r
      </ButtonGroup>;
  }
}`,...l.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    gap: "10px"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ButtonGroup {...args}>\r
        <Button size="medium" label={t("story_buttongroup_primary")} priority="primary" />\r
        <Button size="medium" label={t("story_buttongroup_secondary")} priority="secondary" />\r
        <Button size="medium" label={t("story_buttongroup_tertiary")} priority="tertiary" />\r
      </ButtonGroup>;
  }
}`,..._.parameters?.docs?.source}}};const x=["LargeGroup","MediumGroup","SmallGroup","JoinedGroup","JoinedGroupPrimary","PriorityOverride"],T=Object.freeze(Object.defineProperty({__proto__:null,JoinedGroup:u,JoinedGroupPrimary:l,LargeGroup:a,MediumGroup:c,PriorityOverride:_,SmallGroup:d,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{T as B,u as J,a as L,c as M,d as S,l as a};
