import{j as c}from"./jsx-runtime-u17CrQMm.js";import{I as e}from"./IconButton-CUWlQY5a.js";import{u as r}from"./useTranslation-DVQ5refS.js";const i={title:"Components/Buttons/IconButton",component:e,tags:[]},o={render:function(n){const{t}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return c.jsx(e,{...n,iconName:"SearchIcon","aria-label":t("story_iconbutton_search")})}},s={render:function(n){const{t}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return c.jsx(e,{...n,iconName:"CloseIcon","aria-label":t("story_iconbutton_close"),priority:"tertiary"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story_iconbutton_search")} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <IconButton {...args} iconName="CloseIcon" aria-label={t("story_iconbutton_close")} priority="tertiary" />;
  }
}`,...s.parameters?.docs?.source}}};const d=["Default","Close"],m=Object.freeze(Object.defineProperty({__proto__:null,Close:s,Default:o,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{o as D,m as I};
