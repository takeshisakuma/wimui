import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{P as e}from"./index-ml2n-spZ.js";import{I as h}from"./Icon-DIpFMY3W.js";import{u as w}from"./useTranslation-hQqiqdX9.js";import"./iframe-C2TPIdbu.js";const c=({size:d="medium",label:l,weight:p="bold",color:S="black",role:u="secondary",state:f="abled",iconName:n=void 0,iconPosition:g="left",...b})=>{const y=u==="primary"||u==="danger"?"semantic-secondary":"semantic-primary",i=n?a.jsx(h,{name:n,size:d,color:y}):null,{t:m}=w(),v=l&&n?g==="left"?a.jsxs(a.Fragment,{children:[i,a.jsx("span",{className:"button-label",children:m(l)})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"button-label",children:m(l)}),i]}):l?a.jsx("span",{className:"button-label",children:m(l)}):n?i:null;return a.jsx("button",{type:"button",className:["wim-button",`font-size-${d}`,`font-weight-${p}`,`button-role-${u}`,!l&&n?"icon-only":""].join(" "),disabled:f==="disabled",...b,children:v})};c.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string,onClick:e.func,weight:e.oneOf(["normal","bold"]),color:e.oneOf(["black","deepgray","gray","lightgray","white","error"]),role:e.oneOf(["primary","secondary","danger"]),state:e.oneOf(["abled","disabled"]),iconName:e.oneOf(["CircleIcon","SquareIcon"]),iconPosition:e.oneOf(["left","right"])};c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"What background color to use",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"Button contents",type:{name:"string"}},weight:{required:!1,tsType:{name:"union",raw:'"bold"| "normal"',elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"normal"'}]},description:"",defaultValue:{value:'"bold"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"primary"|"secondary"|"danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"white"|"black"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"black"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1},{value:'"error"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled"|"disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon"|"SquareIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left"|"right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},onClick:{description:"Optional click handler",type:{name:"func"},required:!1}}};const{fn:_}=__STORYBOOK_MODULE_TEST__,B={title:"Component/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:_()}},t={args:{size:"large",label:"button_label",weight:"normal",role:"primary",state:"abled"}},r={args:{size:"medium",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},o={args:{size:"small",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},s={args:{size:"small",label:"button_label",weight:"normal",role:"danger",state:"abled",iconName:"CircleIcon",iconPosition:"left"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const O=["LargePrimaryButton","MeduimSecondaryButton","SmallSecondaryButton","SmallDangerButtonWithCircleIcon"];export{t as LargePrimaryButton,r as MeduimSecondaryButton,s as SmallDangerButtonWithCircleIcon,o as SmallSecondaryButton,O as __namedExportsOrder,B as default};
