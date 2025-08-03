import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{u as d,P as e}from"./index-BtNAsoBU.js";import"./iframe-BpuXfJFt.js";const o=({size:s="medium",content:m="text",color:u="black",weight:p="normal",lineHeight:i="normal-latn",...v})=>{const{t:c}=d();return g.jsx("p",{className:[`font-color-${u}`,`font-size-${s}`,`font-weight-${p}`,`font-lines-${i}`].join(" "),children:c(m)})};o.propTypes={size:e.oneOf(["ex-small","small","medium","large","ex-large"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","error"]),weight:e.oneOf(["normal","bold"]),lineHeight:e.oneOf(["normal-jpan","tight-jpan","loose-jpan","normal-latn","tight-latn","loose-latn"]),content:e.string.isRequired,onClick:e.func};o.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"ex-small"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"ex-large"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" |"error"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"error"',computed:!1}]}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},lineHeight:{required:!1,tsType:{name:"union",raw:'"normal-jpan" | "tight-jpan" | "loose-jpan" | "normal-latn" | "tight-latn" | "loose-latn"',elements:[{name:"literal",value:'"normal-jpan"'},{name:"literal",value:'"tight-jpan"'},{name:"literal",value:'"loose-jpan"'},{name:"literal",value:'"normal-latn"'},{name:"literal",value:'"tight-latn"'},{name:"literal",value:'"loose-latn"'}]},description:"",defaultValue:{value:'"normal-latn"',computed:!1},type:{name:"enum",value:[{value:'"normal-jpan"',computed:!1},{value:'"tight-jpan"',computed:!1},{value:'"loose-jpan"',computed:!1},{value:'"normal-latn"',computed:!1},{value:'"tight-latn"',computed:!1},{value:'"loose-latn"',computed:!1}]}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text"',computed:!1},type:{name:"string"}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:f}=__STORYBOOK_MODULE_TEST__,_={title:"Component/Paragraph",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:f()}},a={args:{size:"ex-large",content:"ex-large_paragraph"}},l={args:{size:"large",content:"large_paragraph"}},r={args:{size:"medium",content:"medium_paragraph"}},t={args:{size:"small",content:"small_paragraph"}},n={args:{size:"ex-small",content:"ex-small_paragraph"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'ex-large',
    content: \`ex-large_paragraph\`
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    content: \`large_paragraph\`
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    content: \`medium_paragraph\`
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    content: \`small_paragraph\`
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "ex-small",
    content: \`ex-small_paragraph\`
  }
}`,...n.parameters?.docs?.source}}};const j=["ExLargeParagraph","LargeParagraph","MediumParagraph","SmallParagrapht","ExSmallParagraph"];export{a as ExLargeParagraph,n as ExSmallParagraph,l as LargeParagraph,r as MediumParagraph,t as SmallParagrapht,j as __namedExportsOrder,_ as default};
