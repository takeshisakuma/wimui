import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{u as b,P as e}from"./index-DiuqcGyi.js";import"./iframe-CRIG8U84.js";const n=({size:r="medium",label:o,weight:s="bold",color:u="black",kind:d="secondary",state:i="abled",...m})=>{const{t:c}=b();return p.jsx("button",{type:"button",className:["wim-button",`font-color-${u}`,`font-size-${r}`,`font-weight-${s}`,`button-kind-${d}`].join(" "),disabled:i==="disabled",...m,children:c(o)})};n.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func,weight:e.oneOf(["normal","bold"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","error"]),kind:e.oneOf(["primary","secondary","danger"]),state:e.oneOf(["abled","disabled"])};n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"What background color to use",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!0,tsType:{name:"string"},description:"Button contents",type:{name:"string"}},weight:{required:!1,tsType:{name:"union",raw:'"bold"| "normal"',elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"normal"'}]},description:"",defaultValue:{value:'"bold"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},kind:{required:!1,tsType:{name:"union",raw:'"primary"|"secondary"|"danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"white"|"black"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"black"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"error"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled"|"disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},onClick:{description:"Optional click handler",type:{name:"func"},required:!1}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,k={title:"Component/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:g()}},a={args:{size:"large",label:"button_label",weight:"normal",kind:"secondary",state:"abled"}},l={args:{size:"medium",label:"button_label",weight:"normal",kind:"secondary",state:"abled"}},t={args:{size:"small",label:"button_label",weight:"normal",kind:"secondary",state:"abled"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: 'button_label',
    weight: \`normal\`,
    kind: \`secondary\`,
    state: \`abled\`
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: 'button_label',
    weight: \`normal\`,
    kind: \`secondary\`,
    state: \`abled\`
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: 'button_label',
    weight: \`normal\`,
    kind: \`secondary\`,
    state: \`abled\`
  }
}`,...t.parameters?.docs?.source}}};const h=["LargeButton","MeduimButton","SmallButton"];export{a as LargeButton,l as MeduimButton,t as SmallButton,h as __namedExportsOrder,k as default};
