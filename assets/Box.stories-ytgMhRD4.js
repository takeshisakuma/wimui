import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as n}from"./Box-CiJ_W8lM.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as p}from"./useTranslation-CrQtSC0V.js";const u={title:"Components/Layout/Box",component:n,tags:[],argTypes:{as:{control:"text"},bg:{control:"color"},display:{control:"text"},position:{control:"text"}}},s={render:function(r){const{t:o}=p(c);return e.jsx(n,{...r,children:o("story_box_default")})},args:{bg:"#f0f0f0",p:20,radius:8}},t={render:function(r){const{t:o}=p(c);return e.jsx(n,{...r,children:o("story_box_shadow")})},args:{bg:"white",p:40,radius:12,shadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}},a={render:function(r){const{t:o}=p(c);return e.jsx(n,{...r,children:o("story_box_button")})},args:{as:"button",bg:"#eff6ff",color:"#1d4ed8",p:"10px 20px",radius:6,style:{border:"1px solid #bfdbfe",cursor:"pointer",fontWeight:600}}},d={render:function(){const{t:r}=p(c);return e.jsxs(n,{bg:"#f8fafc",p:20,radius:8,style:{border:"1px solid #e2e8f0"},children:[e.jsx(n,{bg:"#eff6ff",p:15,mb:15,color:"#1d4ed8",radius:4,style:{border:"1px solid #bfdbfe"},children:r("story_box_margin")}),e.jsx(n,{bg:"#f0fdf4",p:15,color:"#15803d",radius:4,style:{border:"1px solid #bbf7d0"},children:r("story_box_2")})]})}},i={render:function(r){const{t:o}=p(c);return e.jsx(n,{...r,children:o("story_box_padding")})},args:{bg:"#fdf2f8",color:"#be185d",px:40,py:10,radius:8,style:{border:"1px solid #fbcfe8",display:"inline-block"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story_box_default")}</Box>;
  },
  args: {
    bg: "#f0f0f0",
    p: 20,
    radius: 8
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story_box_shadow")}</Box>;
  },
  args: {
    bg: "white",
    p: 40,
    radius: 12,
    shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...i.parameters?.docs?.source}}};const x=["Default","WithCustomShadow","AsButton","Spacing","PaddingProps"],_=Object.freeze(Object.defineProperty({__proto__:null,AsButton:a,Default:s,PaddingProps:i,Spacing:d,WithCustomShadow:t,__namedExportsOrder:x,default:u},Symbol.toStringTag,{value:"Module"}));export{_ as B,s as D};
