import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as e,a as r,b as s}from"./Tooltip-FzzwPBtZ.js";import{B as i}from"./Button-BIVXOD9i.js";import{A as l}from"./iframe-Ce8V-Zu8.js";import{u as a}from"./useTranslation-CZV_GknJ.js";const h={title:"Components/Overlays/Tooltip",component:e,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},open:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},d={render:function(n){const{t:o}=a(l);return t.jsxs(e,{...n,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{children:o("story.tooltip_hover")})}),t.jsx(s,{children:o("story.tooltip_text")})]})}},c={render:function(n){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{children:o("top")})}),t.jsx(s,{children:o("story.tooltip_top_text")})]})})},args:{placement:"top"}},u={render:function(n){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{children:o("bottom")})}),t.jsx(s,{children:o("story.tooltip_bottom_text")})]})})},args:{placement:"bottom"}},g={render:function(n){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{children:o("left")})}),t.jsx(s,{children:o("story.tooltip_left_text")})]})})},args:{placement:"left"}},T={render:function(n){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(e,{...n,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{children:o("right")})}),t.jsx(s,{children:o("story.tooltip_right_text")})]})})},args:{placement:"right"}},m={render:function(n){const{t:o}=a(l);return t.jsxs(e,{...n,delay:n.delay??1e3,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{children:o("story.tooltip_hover_1s")})}),t.jsx(s,{children:o("story.tooltip_delayed")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button>{t("story.tooltip_hover")}</Button>
        </TooltipTrigger>
        <TooltipContent>{t("story.tooltip_text")}</TooltipContent>
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
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("top")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_top_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "top"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("bottom")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_bottom_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "bottom"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("left")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_left_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "left"
  }
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("right")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_right_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "right"
  }
}`,...T.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args} delay={args.delay ?? 1000}>
        <TooltipTrigger asChild>
          <Button>{t("story.tooltip_hover_1s")}</Button>
        </TooltipTrigger>
        <TooltipContent>{t("story.tooltip_delayed")}</TooltipContent>
      </Tooltip>;
  }
}`,...m.parameters?.docs?.source}}};const x=["Default","Top","Bottom","Left","Right","WithDelay"],S=Object.freeze(Object.defineProperty({__proto__:null,Bottom:u,Default:d,Left:g,Right:T,Top:c,WithDelay:m,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{u as B,g as L,T as R,S as T,m as W,c as a};
