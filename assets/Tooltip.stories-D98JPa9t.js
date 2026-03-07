import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as e,a as r,b as s}from"./Tooltip-zRdTWPio.js";import{B as i}from"./Button-CLIo6_y7.js";import{u as l}from"./useTranslation-C1Yfhr6h.js";const g={title:"Components/Overlays/Tooltip",component:e,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},c={render:function(n){const{t:o}=l(["docs","common","components"]);return t.jsxs(e,{...n,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("story_tooltip_hover")})}),t.jsx(s,{children:o("story_tooltip_text")})]})}},p={render:function(n){const{t:o}=l(["docs","common","components"]);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,placement:"top",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("top")})}),t.jsx(s,{children:o("story_tooltip_top_text")})]})})}},d={render:function(n){const{t:o}=l(["docs","common","components"]);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,placement:"bottom",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("bottom")})}),t.jsx(s,{children:o("story_tooltip_bottom_text")})]})})}},m={render:function(n){const{t:o}=l(["docs","common","components"]);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,placement:"left",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("left")})}),t.jsx(s,{children:o("story_tooltip_left_text")})]})})}},u={render:function(n){const{t:o}=l(["docs","common","components"]);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,placement:"right",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("right")})}),t.jsx(s,{children:o("story_tooltip_right_text")})]})})}},T={render:function(n){const{t:o}=l(["docs","common","components"]);return t.jsxs(e,{...n,delay:n.delay??1e3,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("story_tooltip_hover_1s")})}),t.jsx(s,{children:o("story_tooltip_delayed")})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tooltip {...args}>\r
        <TooltipTrigger asChild>\r
          <Button label={t("story_tooltip_hover")} />\r
        </TooltipTrigger>\r
        <TooltipContent>{t("story_tooltip_text")}</TooltipContent>\r
      </Tooltip>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tooltip {...args} delay={args.delay ?? 1000}>\r
        <TooltipTrigger asChild>\r
          <Button label={t("story_tooltip_hover_1s")} />\r
        </TooltipTrigger>\r
        <TooltipContent>{t("story_tooltip_delayed")}</TooltipContent>\r
      </Tooltip>;
  }
}`,...T.parameters?.docs?.source}}};const x=["Default","Top","Bottom","Left","Right","WithDelay"],f=Object.freeze(Object.defineProperty({__proto__:null,Bottom:d,Default:c,Left:m,Right:u,Top:p,WithDelay:T,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{d as B,c as D,m as L,u as R,f as T,T as W,p as a};
