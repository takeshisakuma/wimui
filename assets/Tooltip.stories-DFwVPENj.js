import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as n,a as r,b as s}from"./Tooltip-DiUkBTTJ.js";import{B as i}from"./Button-BYsfOEzv.js";import{A as l}from"./iframe-C9jI6wk5.js";import{u as a}from"./useTranslation-f2Ze7WA6.js";const x={title:"Components/Overlays/Tooltip",component:n,parameters:{layout:"centered"},argTypes:{delay:{control:"number"},isOpen:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]}}},d={render:function(e){const{t:o}=a(l);return t.jsxs(n,{...e,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("story.tooltip_hover")})}),t.jsx(s,{children:o("story.tooltip_text")})]})}},c={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("top")})}),t.jsx(s,{children:o("story.tooltip_top_text")})]})})},args:{placement:"top"}},g={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("bottom")})}),t.jsx(s,{children:o("story.tooltip_bottom_text")})]})})},args:{placement:"bottom"}},u={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("left")})}),t.jsx(s,{children:o("story.tooltip_left_text")})]})})},args:{placement:"left"}},T={render:function(e){const{t:o}=a(l);return t.jsx("div",{style:{padding:"50px"},children:t.jsxs(n,{...e,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("right")})}),t.jsx(s,{children:o("story.tooltip_right_text")})]})})},args:{placement:"right"}},m={render:function(e){const{t:o}=a(l);return t.jsxs(n,{...e,delay:e.delay??1e3,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{label:o("story.tooltip_hover_1s")})}),t.jsx(s,{children:o("story.tooltip_delayed")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button label={t("story.tooltip_hover")} />
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
            <Button label={t("top")} />
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_top_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "top"
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button label={t("bottom")} />
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_bottom_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "bottom"
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button label={t("left")} />
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_left_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "left"
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button label={t("right")} />
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
          <Button label={t("story.tooltip_hover_1s")} />
        </TooltipTrigger>
        <TooltipContent>{t("story.tooltip_delayed")}</TooltipContent>
      </Tooltip>;
  }
}`,...m.parameters?.docs?.source}}};const h=["Default","Top","Bottom","Left","Right","WithDelay"],b=Object.freeze(Object.defineProperty({__proto__:null,Bottom:g,Default:d,Left:u,Right:T,Top:c,WithDelay:m,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{g as B,u as L,T as R,b as T,m as W,c as a};
