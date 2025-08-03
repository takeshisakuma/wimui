import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{u as d,P as e}from"./index-BtNAsoBU.js";import"./iframe-BpuXfJFt.js";const t=({size:o="medium",content:m="span",color:u="black",weight:p="normal",...f})=>{const{t:c}=d();return i.jsx("span",{className:[`font-color-${u}`,`font-size-${o}`,`font-weight-${p}`].join(" "),children:c(m)})};t.propTypes={size:e.oneOf(["ex-small","small","medium","large","ex-large"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","error"]),weight:e.oneOf(["normal","bold"]),content:e.string.isRequired,onClick:e.func};t.__docgenInfo={description:"",methods:[],displayName:"Span",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"ex-small"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"ex-large"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" |"error"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"error"',computed:!1}]}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"span"',computed:!1},type:{name:"string"}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,S={title:"Component/Span",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:g()}},a={args:{size:"ex-large",content:"ex-large_span"}},l={args:{size:"large",content:"large_span"}},r={args:{size:"medium",content:"medium_span"}},s={args:{size:"small",content:"small_span"}},n={args:{size:"ex-small",content:"ex-small_span"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'ex-large',
    content: \`ex-large_span\`
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    content: \`large_span\`
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    content: \`medium_span\`
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    content: \`small_span\`
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "ex-small",
    content: \`ex-small_span\`
  }
}`,...n.parameters?.docs?.source}}};const _=["ExLargeSpan","LargeSpan","MediumSpan","SmallSpan","ExSmallSpan"];export{a as ExLargeSpan,n as ExSmallSpan,l as LargeSpan,r as MediumSpan,s as SmallSpan,_ as __namedExportsOrder,S as default};
