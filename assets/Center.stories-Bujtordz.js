import{j as o}from"./jsx-runtime-u17CrQMm.js";import{C as r}from"./Center-CxOxnf3H.js";import{B as i}from"./Box-BIWtB4o8.js";import{I as l}from"./Icon-FTO_0HBc.js";import{u as c}from"./useTranslation-BONq47qB.js";const u={title:"Components/Layout/Center",component:r,tags:[],argTypes:{inline:{control:"boolean"}}},e={render:function(t){const{t:d}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{...t,children:o.jsx(i,{bg:"#eff6ff",p:40,radius:8,style:{border:"1px solid #3b82f6"},children:d("story_center_content")})})},args:{h:200,bg:"#f8fafc"}},n={render:function(){const{t}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs("div",{style:{border:"1px solid #ccc",padding:"10px"},children:["Text before",o.jsx(r,{inline:!0,bg:"#fecaca",px:10,mx:5,radius:4,children:t("story_center_inline")}),"Text after"]})}},s={render:()=>o.jsx(r,{w:40,h:40,bg:"#3b82f6",color:"white",radius:"full",children:o.jsx(l,{name:"PlusIcon"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">\r
      <Icon name="PlusIcon" />\r
    </Center>
}`,...s.parameters?.docs?.source}}};const p=["Default","Inline","Icons"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Icons:s,Inline:n,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{y as C,e as D,n as I,s as a};
