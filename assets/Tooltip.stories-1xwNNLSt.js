import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as e,a as n,b as s}from"./Tooltip-Bs18wOnP.js";import{B as i}from"./Button-R6esN6DB.js";import{A as l}from"./i18nConstants-BpHxieg5.js";import{u as a}from"./useTranslation-CwCoJP0K.js";const _={title:"Components/Overlays/Tooltip",component:e,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},d={render:function(o){const{t:r}=a(l);return t.jsxs(e,{...o,children:[t.jsx(n,{asChild:!0,children:t.jsx(i,{label:r("story_tooltip_hover")})}),t.jsx(s,{children:r("story_tooltip_text")})]})}},c={render:function(o){const{t:r}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...o,placement:"top",children:[t.jsx(n,{asChild:!0,children:t.jsx(i,{label:r("top")})}),t.jsx(s,{children:r("story_tooltip_top_text")})]})})}},u={render:function(o){const{t:r}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...o,placement:"bottom",children:[t.jsx(n,{asChild:!0,children:t.jsx(i,{label:r("bottom")})}),t.jsx(s,{children:r("story_tooltip_bottom_text")})]})})}},T={render:function(o){const{t:r}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...o,placement:"left",children:[t.jsx(n,{asChild:!0,children:t.jsx(i,{label:r("left")})}),t.jsx(s,{children:r("story_tooltip_left_text")})]})})}},g={render:function(o){const{t:r}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...o,placement:"right",children:[t.jsx(n,{asChild:!0,children:t.jsx(i,{label:r("right")})}),t.jsx(s,{children:r("story_tooltip_right_text")})]})})}},m={render:function(o){const{t:r}=a(l);return t.jsxs(e,{...o,delay:o.delay??1e3,children:[t.jsx(n,{asChild:!0,children:t.jsx(i,{label:r("story_tooltip_hover_1s")})}),t.jsx(s,{children:r("story_tooltip_delayed")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args}>\r
        <TooltipTrigger asChild>\r
          <Button label={t("story_tooltip_hover")} />\r
        </TooltipTrigger>\r
        <TooltipContent>{t("story_tooltip_text")}</TooltipContent>\r
      </Tooltip>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args} delay={args.delay ?? 1000}>\r
        <TooltipTrigger asChild>\r
          <Button label={t("story_tooltip_hover_1s")} />\r
        </TooltipTrigger>\r
        <TooltipContent>{t("story_tooltip_delayed")}</TooltipContent>\r
      </Tooltip>;
  }
}`,...m.parameters?.docs?.source}}};const x=["Default","Top","Bottom","Left","Right","WithDelay"],b=Object.freeze(Object.defineProperty({__proto__:null,Bottom:u,Default:d,Left:T,Right:g,Top:c,WithDelay:m,__namedExportsOrder:x,default:_},Symbol.toStringTag,{value:"Module"}));export{u as B,T as L,g as R,b as T,m as W,c as a};
