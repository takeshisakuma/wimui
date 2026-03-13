import{j as o}from"./jsx-runtime-u17CrQMm.js";import{T as n,a as e,b as r}from"./Tooltip-BLgQBudC.js";import{B as i}from"./Button-BGdC-hBM.js";import{u as c}from"./useTranslation-BsF8P6HZ.js";const g={title:"Components/Overlays/Tooltip",component:n,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},a={render:function(s){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...s,children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{label:t("story_tooltip_hover")})}),o.jsx(r,{children:t("story_tooltip_text")})]})}},l={render:function(s){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx("div",{style:{padding:"50px"},children:o.jsxs(n,{...s,placement:"top",children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{label:t("top")})}),o.jsx(r,{children:t("story_tooltip_top_text")})]})})}},p={render:function(s){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx("div",{style:{padding:"50px"},children:o.jsxs(n,{...s,placement:"bottom",children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{label:t("bottom")})}),o.jsx(r,{children:t("story_tooltip_bottom_text")})]})})}},_={render:function(s){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx("div",{style:{padding:"50px"},children:o.jsxs(n,{...s,placement:"left",children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{label:t("left")})}),o.jsx(r,{children:t("story_tooltip_left_text")})]})})}},u={render:function(s){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx("div",{style:{padding:"50px"},children:o.jsxs(n,{...s,placement:"right",children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{label:t("right")})}),o.jsx(r,{children:t("story_tooltip_right_text")})]})})}},m={render:function(s){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(n,{...s,delay:s.delay??1e3,children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{label:t("story_tooltip_hover_1s")})}),o.jsx(r,{children:t("story_tooltip_delayed")})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Tooltip {...args}>\r
        <TooltipTrigger asChild>\r
          <Button label={t("story_tooltip_hover")} />\r
        </TooltipTrigger>\r
        <TooltipContent>{t("story_tooltip_text")}</TooltipContent>\r
      </Tooltip>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      padding: "50px"
    }}>\r
        <Tooltip {...args} placement="top">\r
          <TooltipTrigger asChild>\r
            <Button label={t("top")} />\r
          </TooltipTrigger>\r
          <TooltipContent>{t("story_tooltip_top_text")}</TooltipContent>\r
        </Tooltip>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      padding: "50px"
    }}>\r
        <Tooltip {...args} placement="bottom">\r
          <TooltipTrigger asChild>\r
            <Button label={t("bottom")} />\r
          </TooltipTrigger>\r
          <TooltipContent>{t("story_tooltip_bottom_text")}</TooltipContent>\r
        </Tooltip>\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      padding: "50px"
    }}>\r
        <Tooltip {...args} placement="left">\r
          <TooltipTrigger asChild>\r
            <Button label={t("left")} />\r
          </TooltipTrigger>\r
          <TooltipContent>{t("story_tooltip_left_text")}</TooltipContent>\r
        </Tooltip>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      padding: "50px"
    }}>\r
        <Tooltip {...args} placement="right">\r
          <TooltipTrigger asChild>\r
            <Button label={t("right")} />\r
          </TooltipTrigger>\r
          <TooltipContent>{t("story_tooltip_right_text")}</TooltipContent>\r
        </Tooltip>\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Tooltip {...args} delay={args.delay ?? 1000}>\r
        <TooltipTrigger asChild>\r
          <Button label={t("story_tooltip_hover_1s")} />\r
        </TooltipTrigger>\r
        <TooltipContent>{t("story_tooltip_delayed")}</TooltipContent>\r
      </Tooltip>;
  }
}`,...m.parameters?.docs?.source}}};const y=["Default","Top","Bottom","Left","Right","WithDelay"],j=Object.freeze(Object.defineProperty({__proto__:null,Bottom:p,Default:a,Left:_,Right:u,Top:l,WithDelay:m,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{p as B,a as D,_ as L,u as R,j as T,m as W,l as a};
