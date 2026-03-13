import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as s}from"./Box-q2JNp0B1.js";import{u as i}from"./useTranslation-CHJ-TYb-.js";const _={title:"Components/Layout/Box",component:s,tags:[],argTypes:{as:{control:"text"},bg:{control:"color"},display:{control:"text"},position:{control:"text"}}},d={render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(s,{...o,children:n("story_box_default")})},args:{bg:"#f0f0f0",p:20,radius:8}},e={render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(s,{...o,children:n("story_box_shadow")})},args:{bg:"white",p:40,radius:12,shadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}},t={render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(s,{...o,children:n("story_box_button")})},args:{as:"button",bg:"#eff6ff",color:"#1d4ed8",p:"10px 20px",radius:6,style:{border:"1px solid #bfdbfe",cursor:"pointer",fontWeight:600}}},c={render:function(){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsxs(s,{bg:"#f8fafc",p:20,radius:8,style:{border:"1px solid #e2e8f0"},children:[r.jsx(s,{bg:"#eff6ff",p:15,mb:15,color:"#1d4ed8",radius:4,style:{border:"1px solid #bfdbfe"},children:o("story_box_margin")}),r.jsx(s,{bg:"#f0fdf4",p:15,color:"#15803d",radius:4,style:{border:"1px solid #bbf7d0"},children:o("story_box_2")})]})}},a={render:function(o){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(s,{...o,children:n("story_box_padding")})},args:{bg:"#fdf2f8",color:"#be185d",px:40,py:10,radius:8,style:{border:"1px solid #fbcfe8",display:"inline-block"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_default")}</Box>;
  },
  args: {
    bg: "#f0f0f0",
    p: 20,
    radius: 8
  }
}`,...d.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_shadow")}</Box>;
  },
  args: {
    bg: "white",
    p: 40,
    radius: 12,
    shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_button")}</Box>;
  },
  args: {
    as: "button",
    bg: "#eff6ff",
    color: "#1d4ed8",
    p: "10px 20px",
    radius: 6,
    style: {
      border: "1px solid #bfdbfe",
      cursor: "pointer",
      fontWeight: 600
    }
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box bg="#f8fafc" p={20} radius={8} style={{
      border: "1px solid #e2e8f0"
    }}>\r
        <Box bg="#eff6ff" p={15} mb={15} color="#1d4ed8" radius={4} style={{
        border: "1px solid #bfdbfe"
      }}>\r
          {t("story_box_margin")}\r
        </Box>\r
        <Box bg="#f0fdf4" p={15} color="#15803d" radius={4} style={{
        border: "1px solid #bbf7d0"
      }}>\r
          {t("story_box_2")}\r
        </Box>\r
      </Box>;
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_padding")}</Box>;
  },
  args: {
    bg: "#fdf2f8",
    color: "#be185d",
    px: 40,
    // Left and right padding
    py: 10,
    // Top and bottom padding
    radius: 8,
    style: {
      border: "1px solid #fbcfe8",
      display: "inline-block"
    }
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","WithCustomShadow","AsButton","Spacing","PaddingProps"],x=Object.freeze(Object.defineProperty({__proto__:null,AsButton:t,Default:d,PaddingProps:a,Spacing:c,WithCustomShadow:e,__namedExportsOrder:u,default:_},Symbol.toStringTag,{value:"Module"}));export{x as B,d as D};
