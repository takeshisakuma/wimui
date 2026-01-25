import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./index-J3HD4B0U.js";import{u as i}from"./useTranslation-7WNKXT-O.js";import"./iframe-hLhsm2pb.js";import"./preload-helper-D9Z9MdNV.js";const s=({text:a,scrollAxis:n="y",maxHeight:t="10rem",...m})=>{const{t:o}=i();return l.jsx("div",{className:"wim-scrollarea",style:{maxHeight:t},children:o(a)})};s.propTypes={text:r.string.isRequired,scrollAxis:r.oneOf(["y"]),maxHeight:r.string};s.__docgenInfo={description:"",methods:[],displayName:"Scrollarea",props:{text:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},scrollAxis:{required:!1,tsType:{name:"literal",value:'"y"'},description:"",defaultValue:{value:'"y"',computed:!1},type:{name:"enum",value:[{value:'"y"',computed:!1}]}},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height of the scroll area",type:{name:"string"}}}};const y={title:"Component/Scrollarea",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},e={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: \`y\`,
    maxHeight: \`10rem\`
  }
}`,...e.parameters?.docs?.source}}};const g=["ScrollareaYaxis"];export{e as ScrollareaYaxis,g as __namedExportsOrder,y as default};
