import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as o}from"./Center-BBzTbrX6.js";import{B as l}from"./Box-BTiCzVum.js";import{I as f}from"./Icon-58HG4YiW.js";import{A as a}from"./i18nConstants-BpHxieg5.js";import{u as c}from"./useTranslation-DW6bJnO1.js";const u={title:"Components/Layout/Center",component:o,tags:[],argTypes:{inline:{control:"boolean"}}},r={render:function(s){const{t:d}=c(a);return e.jsx(o,{...s,children:e.jsx(l,{bg:"#eff6ff",p:40,radius:8,style:{border:"1px solid #3b82f6"},children:d("story_center_content")})})},args:{h:200,bg:"#f8fafc"}},n={render:function(){const{t:s}=c(a);return e.jsxs("div",{style:{border:"1px solid #ccc",padding:"10px"},children:["Text before",e.jsx(o,{inline:!0,bg:"#fecaca",px:10,mx:5,radius:4,children:s("story_center_inline")}),"Text after"]})}},t={render:()=>e.jsx(o,{w:40,h:40,bg:"#3b82f6",color:"white",radius:"full",children:e.jsx(f,{name:"PlusIcon"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center {...args}>\r
        <Box bg="#eff6ff" p={40} radius={8} style={{
        border: "1px solid #3b82f6"
      }}>\r
          {t("story_center_content")}\r
        </Box>\r
      </Center>;
  },
  args: {
    h: 200,
    bg: "#f8fafc"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      border: "1px solid #ccc",
      padding: "10px"
    }}>\r
        Text before\r
        <Center inline bg="#fecaca" px={10} mx={5} radius={4}>\r
          {t("story_center_inline")}\r
        </Center>\r
        Text after\r
      </div>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">\r
      <Icon name="PlusIcon" />\r
    </Center>
}`,...t.parameters?.docs?.source}}};const p=["Default","Inline","Icons"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Icons:t,Inline:n,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{y as C,r as D,n as I,t as a};
