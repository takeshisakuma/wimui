import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{u as d,P as e}from"./index-BNTjkMU1.js";import"./iframe-DH617f87.js";const o=({size:s="medium",content:m="text",color:p="black",weight:u="normal",lineHeight:i="normal-latn",...f})=>{const{t:c}=d();return g.jsx("p",{className:[`font-color-${p}`,`font-size-${s}`,`font-weight-${u}`,`font-lines-${i}`].join(" "),children:c(m)})};o.propTypes={size:e.oneOf(["ex-small","small","medium","large","ex-large"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","error"]),weight:e.oneOf(["normal","bold"]),lineHeight:e.oneOf(["normal-jpan","tight-jpan","loose-jpan","normal-latn","tight-latn","loose-latn"]),content:e.string.isRequired,onClick:e.func};o.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"ex-small"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"ex-large"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" |"error"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"error"',computed:!1}]}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},lineHeight:{required:!1,tsType:{name:"union",raw:'"normal-jpan" | "tight-jpan" | "loose-jpan" | "normal-latn" | "tight-latn" | "loose-latn"',elements:[{name:"literal",value:'"normal-jpan"'},{name:"literal",value:'"tight-jpan"'},{name:"literal",value:'"loose-jpan"'},{name:"literal",value:'"normal-latn"'},{name:"literal",value:'"tight-latn"'},{name:"literal",value:'"loose-latn"'}]},description:"",defaultValue:{value:'"normal-latn"',computed:!1},type:{name:"enum",value:[{value:'"normal-jpan"',computed:!1},{value:'"tight-jpan"',computed:!1},{value:'"loose-jpan"',computed:!1},{value:'"normal-latn"',computed:!1},{value:'"tight-latn"',computed:!1},{value:'"loose-latn"',computed:!1}]}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text"',computed:!1},type:{name:"string"}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:h}=__STORYBOOK_MODULE_TEST__,w={title:"Component/Paragraph",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:h()}},a={args:{size:"ex-large",content:"ex-large_paragraph",weight:"normal"}},l={args:{size:"large",content:"large_paragraph",weight:"normal"}},r={args:{size:"medium",content:"medium_paragraph",weight:"normal"}},t={args:{size:"small",content:"small_paragraph",weight:"normal"}},n={args:{size:"ex-small",content:"ex-small_paragraph",weight:"normal"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'ex-large',
    content: \`ex-large_paragraph\`,
    weight: \`normal\`
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    content: \`large_paragraph\`,
    weight: \`normal\`
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    content: \`medium_paragraph\`,
    weight: \`normal\`
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    content: \`small_paragraph\`,
    weight: \`normal\`
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "ex-small",
    content: \`ex-small_paragraph\`,
    weight: \`normal\`
  }
}`,...n.parameters?.docs?.source}}};const _=["ExLargeParagraph","LargeParagraph","MediumParagraph","SmallParagrapht","ExSmallParagraph"];export{a as ExLargeParagraph,n as ExSmallParagraph,l as LargeParagraph,r as MediumParagraph,t as SmallParagrapht,_ as __namedExportsOrder,w as default};
