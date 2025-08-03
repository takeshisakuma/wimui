import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{u as g,P as e}from"./index-Bwoldq-z.js";import"./iframe-1RLq6pa4.js";const s=({size:o="medium",content:m="text",color:u="black",weight:i="normal",lineHeight:c="normal-latn",...v})=>{const{t:d}=g();return p.jsx("p",{className:[`font-color-${u}`,`font-size-${o}`,`font-weight-${i}`,`font-lines-${c}`].join(" "),children:d(m)})};s.propTypes={size:e.oneOf(["ex-small","small","medium","large","ex-large"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","red","lightred","deepred"]),weight:e.oneOf(["normal","bold"]),lineHeight:e.oneOf(["normal-jpan","tight-jpan","loose-jpan","normal-latn","tight-latn","loose-latn"]),content:e.string.isRequired,onClick:e.func};s.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"ex-small"',computed:!1},{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"ex-large"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" |"red" | "lightred" | "deepred"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"red"'},{name:"literal",value:'"lightred"'},{name:"literal",value:'"deepred"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"red"',computed:!1},{value:'"lightred"',computed:!1},{value:'"deepred"',computed:!1}]}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},lineHeight:{required:!1,tsType:{name:"union",raw:'"normal-jpan" | "tight-jpan" | "loose-jpan" | "normal-latn" | "tight-latn" | "loose-latn"',elements:[{name:"literal",value:'"normal-jpan"'},{name:"literal",value:'"tight-jpan"'},{name:"literal",value:'"loose-jpan"'},{name:"literal",value:'"normal-latn"'},{name:"literal",value:'"tight-latn"'},{name:"literal",value:'"loose-latn"'}]},description:"",defaultValue:{value:'"normal-latn"',computed:!1},type:{name:"enum",value:[{value:'"normal-jpan"',computed:!1},{value:'"tight-jpan"',computed:!1},{value:'"loose-jpan"',computed:!1},{value:'"normal-latn"',computed:!1},{value:'"tight-latn"',computed:!1},{value:'"loose-latn"',computed:!1}]}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text"',computed:!1},type:{name:"string"}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:f}=__STORYBOOK_MODULE_TEST__,T={title:"Component/Text",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:f()}},a={args:{size:"ex-large",content:"ex-large_text"}},l={args:{size:"large",content:"large_text"}},t={args:{size:"medium",content:"medium_text"}},r={args:{size:"small",content:"small_text"}},n={args:{size:"ex-small",content:"ex-small_text"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'ex-large',
    content: \`ex-large_text\`
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    content: \`large_text\`
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    content: \`medium_text\`
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    content: \`small_text\`
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "ex-small",
    content: \`ex-small_text\`
  }
}`,...n.parameters?.docs?.source}}};const _=["ExLargeText","LargeText","MediumText","SmallText","ExSmallText"];export{a as ExLargeText,n as ExSmallText,l as LargeText,t as MediumText,r as SmallText,_ as __namedExportsOrder,T as default};
