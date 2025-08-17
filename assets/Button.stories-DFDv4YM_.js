import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{P as e}from"./index-B_MlH4xT.js";import{u as p}from"./useTranslation-DjxjE49G.js";import"./iframe-ueWDyGGV.js";const r=({size:n="medium",label:o,weight:s="bold",color:g="black",role:u="secondary",state:m="abled",...d})=>{const{t:i}=p();return c.jsx("button",{type:"button",className:["wim-button",`font-size-${n}`,`font-weight-${s}`,`button-role-${u}`].join(" "),disabled:m==="disabled",...d,children:i(o)})};r.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func,weight:e.oneOf(["normal","bold"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","error"]),role:e.oneOf(["primary","secondary","danger"]),state:e.oneOf(["abled","disabled"])};r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"What background color to use",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!0,tsType:{name:"string"},description:"Button contents",type:{name:"string"}},weight:{required:!1,tsType:{name:"union",raw:'"bold"| "normal"',elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"normal"'}]},description:"",defaultValue:{value:'"bold"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"primary"|"secondary"|"danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"white"|"black"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"black"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"error"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled"|"disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},onClick:{description:"Optional click handler",type:{name:"func"},required:!1}}};const{fn:b}=__STORYBOOK_MODULE_TEST__,w={title:"Component/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:b()}},a={args:{size:"large",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},l={args:{size:"medium",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},t={args:{size:"small",label:"button_label",weight:"normal",role:"secondary",state:"abled"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: 'button_label',
    weight: \`normal\`,
    role: \`secondary\`,
    state: \`abled\`
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: 'button_label',
    weight: \`normal\`,
    role: \`secondary\`,
    state: \`abled\`
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: 'button_label',
    weight: \`normal\`,
    role: \`secondary\`,
    state: \`abled\`
  }
}`,...t.parameters?.docs?.source}}};const _=["LargeButton","MeduimButton","SmallButton"];export{a as LargeButton,l as MeduimButton,t as SmallButton,_ as __namedExportsOrder,w as default};
