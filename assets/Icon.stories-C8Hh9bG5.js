import{I as o}from"./Icon-D8TJHmBQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B0PpJDJ3.js";import"./iframe-D8AiGYtG.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,m={title:"Component/Icon",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"radio"},options:["semantic-danger","semantic-success","semantic-warning","semantic-primary","semantic-secondary"]},backgroundColor:{control:"color"}},args:{onClick:a()}},e={args:{name:"SquareIcon",size:"medium",color:"semantic-primary"}},r={args:{name:"CircleIcon",size:"large",color:"semantic-danger"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: "SquareIcon",
    size: "medium",
    color: "semantic-primary" // CSS変数名に変更
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "CircleIcon",
    size: "large",
    color: "semantic-danger" // CSS変数名に変更
  }
}`,...r.parameters?.docs?.source}}};const i=["MediumSquareIcon","MediumCircleIcon"];export{r as MediumCircleIcon,e as MediumSquareIcon,i as __namedExportsOrder,m as default};
