import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as o}from"./Center-DxLggbtP.js";import{B as l}from"./Box-CAOaYysM.js";import{I as f}from"./Icon-BTUrwpYf.js";import{A as a}from"./iframe-CYpWGnOJ.js";import{u as c}from"./useTranslation-D3SeTq_M.js";const u={title:"Components/Layout/Center",component:o,tags:[],argTypes:{inline:{control:"boolean"}}},n={render:function(s){const{t:d}=c(a);return e.jsx(o,{...s,children:e.jsx(l,{bg:"#eff6ff",p:40,radius:8,style:{border:"1px solid #3b82f6"},children:d("story_center_content")})})},args:{h:200,bg:"#f8fafc"}},r={render:function(){const{t:s}=c(a);return e.jsxs("div",{style:{border:"1px solid #ccc",padding:"10px"},children:["Text before",e.jsx(o,{inline:!0,bg:"#fecaca",px:10,mx:5,radius:4,children:s("story_center_inline")}),"Text after"]})}},t={render:()=>e.jsx(o,{w:40,h:40,bg:"#3b82f6",color:"white",radius:"full",children:e.jsx(f,{name:"PlusIcon"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center {...args}>
        <Box bg="#eff6ff" p={40} radius={8} style={{
        border: "1px solid #3b82f6"
      }}>
          {t("story_center_content")}
        </Box>
      </Center>;
  },
  args: {
    h: 200,
    bg: "#f8fafc"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      border: "1px solid #ccc",
      padding: "10px"
    }}>
        Text before
        <Center inline bg="#fecaca" px={10} mx={5} radius={4}>
          {t("story_center_inline")}
        </Center>
        Text after
      </div>;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">
      <Icon name="PlusIcon" />
    </Center>
}`,...t.parameters?.docs?.source}}};const p=["Default","Inline","Icons"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Icons:t,Inline:r,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{y as C,n as D,r as I,t as a};
