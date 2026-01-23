import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{P as e}from"./index-SHVKNLi9.js";import{I as w}from"./Icon-Cc3gy5yO.js";import{u as _}from"./useTranslation-D4u48hVz.js";import"./iframe-ChQOaI89.js";import"./preload-helper-D9Z9MdNV.js";const c=({size:d="medium",label:l,weight:f="bold",color:C="black",role:u="secondary",state:g="abled",iconName:n=void 0,iconPosition:b="left",backgroundColor:p,...y})=>{const v=u==="primary"||u==="danger"?"semantic-secondary":"semantic-primary",i=n?a.jsx(w,{name:n,size:d,color:v}):null,{t:m}=_(),h=l&&n?b==="left"?a.jsxs(a.Fragment,{children:[i,a.jsx("span",{className:"button-label",children:m(l)})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"button-label",children:m(l)}),i]}):l?a.jsx("span",{className:"button-label",children:m(l)}):n?i:null;return a.jsx("button",{type:"button",style:p?{backgroundColor:p}:void 0,className:["wim-button",`font-size-${d}`,`font-weight-${f}`,`button-role-${u}`,!l&&n?"icon-only":""].join(" "),disabled:g==="disabled",...y,children:h})};c.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string,onClick:e.func,weight:e.oneOf(["normal","bold"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","error"]),role:e.oneOf(["primary","secondary","danger"]),state:e.oneOf(["abled","disabled"]),iconName:e.oneOf(["CircleIcon","SquareIcon"]),iconPosition:e.oneOf(["left","right"])};c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"What background color to use",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"Button contents",type:{name:"string"}},weight:{required:!1,tsType:{name:"union",raw:'"bold" | "normal"',elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"normal"'}]},description:"",defaultValue:{value:'"bold"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"white" | "black"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"black"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"error"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled" | "disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},onClick:{description:"Optional click handler",type:{name:"func"},required:!1}}};const{fn:S}=__STORYBOOK_MODULE_TEST__,x={title:"Component/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:S()}},t={args:{size:"large",label:"button_label",weight:"normal",role:"primary",state:"abled"}},r={args:{size:"medium",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},o={args:{size:"small",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},s={args:{size:"small",label:"button_label",weight:"normal",role:"danger",state:"abled",iconName:"CircleIcon",iconPosition:"left"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: 'button_label',
    weight: \`normal\`,
    role: \`primary\`,
    state: \`abled\`
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: 'button_label',
    weight: \`normal\`,
    role: \`secondary\`,
    state: \`abled\`
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: 'button_label',
    weight: \`normal\`,
    role: \`secondary\`,
    state: \`abled\`
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: 'button_label',
    weight: \`normal\`,
    role: \`danger\`,
    state: \`abled\`,
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...s.parameters?.docs?.source}}};const j=["LargePrimaryButton","MeduimSecondaryButton","SmallSecondaryButton","SmallDangerButtonWithCircleIcon"];export{t as LargePrimaryButton,r as MeduimSecondaryButton,s as SmallDangerButtonWithCircleIcon,o as SmallSecondaryButton,j as __namedExportsOrder,x as default};
