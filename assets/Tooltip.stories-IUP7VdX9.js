import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as n,a as r,b as s}from"./Tooltip-BK8WfN2J.js";import{B as i}from"./Button-BNxsFUwZ.js";import{A as l}from"./iframe-BPJl5Wr-.js";import{u as a}from"./useTranslation-Deg3T5Lq.js";const _={title:"Components/Overlays/Tooltip",component:n,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},d={render:function(e){const{t:o}=a(l);return t.jsxs(n,{...e,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("story_tooltip_hover")})}),t.jsx(s,{children:o("story_tooltip_text")})]})}},c={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,placement:"top",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("top")})}),t.jsx(s,{children:o("story_tooltip_top_text")})]})})}},u={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,placement:"bottom",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("bottom")})}),t.jsx(s,{children:o("story_tooltip_bottom_text")})]})})}},T={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,placement:"left",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("left")})}),t.jsx(s,{children:o("story_tooltip_left_text")})]})})}},g={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,placement:"right",children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("right")})}),t.jsx(s,{children:o("story_tooltip_right_text")})]})})}},m={render:function(e){const{t:o}=a(l);return t.jsxs(n,{...e,delay:e.delay??1e3,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("story_tooltip_hover_1s")})}),t.jsx(s,{children:o("story_tooltip_delayed")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button label={t("story_tooltip_hover")} />
        </TooltipTrigger>
        <TooltipContent>{t("story_tooltip_text")}</TooltipContent>
      </Tooltip>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args} placement="top">
          <TooltipTrigger asChild>
            <Button label={t("top")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_top_text")}</TooltipContent>
        </Tooltip>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args} placement="bottom">
          <TooltipTrigger asChild>
            <Button label={t("bottom")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_bottom_text")}</TooltipContent>
        </Tooltip>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args} placement="left">
          <TooltipTrigger asChild>
            <Button label={t("left")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_left_text")}</TooltipContent>
        </Tooltip>
      </div>;
  }
}`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args} placement="right">
          <TooltipTrigger asChild>
            <Button label={t("right")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_right_text")}</TooltipContent>
        </Tooltip>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args} delay={args.delay ?? 1000}>
        <TooltipTrigger asChild>
          <Button label={t("story_tooltip_hover_1s")} />
        </TooltipTrigger>
        <TooltipContent>{t("story_tooltip_delayed")}</TooltipContent>
      </Tooltip>;
  }
}`,...m.parameters?.docs?.source}}};const x=["Default","Top","Bottom","Left","Right","WithDelay"],b=Object.freeze(Object.defineProperty({__proto__:null,Bottom:u,Default:d,Left:T,Right:g,Top:c,WithDelay:m,__namedExportsOrder:x,default:_},Symbol.toStringTag,{value:"Module"}));export{u as B,T as L,g as R,b as T,m as W,c as a};
