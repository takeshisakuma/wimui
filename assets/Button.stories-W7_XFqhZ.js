import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{P as e}from"./index-qdKnNFkg.js";import{I as C}from"./Icon-DZ-T7Wjg.js";import{u as S}from"./useTranslation-3Q1uEVE_.js";import"./iframe-CG7sHTAs.js";import"./preload-helper-D9Z9MdNV.js";const i=({size:u="medium",label:s,weight:p="bold",color:I="black",role:b="secondary",state:f="abled",iconName:a=void 0,iconPosition:m="left",backgroundColor:d,...g})=>{const{t:y}=S(),v=`wim-button--${{small:"sm",medium:"md",large:"lg"}[u]}`,w=`wim-button--${b}`,h=!s&&a?"wim-button--icon-only":"",c=a?l.jsx(C,{name:a,size:u}):null,_=l.jsxs(l.Fragment,{children:[a&&m==="left"&&c,s&&l.jsx("span",{className:"wim-button__label",children:y(s)}),a&&m==="right"&&c]});return l.jsx("button",{type:"button",style:d?{backgroundColor:d}:void 0,className:["wim-button",v,w,h,`wim-weight-${p}`].filter(Boolean).join(" "),disabled:f==="disabled",...g,children:_})};i.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string,onClick:e.func,weight:e.oneOf(["normal","bold"]),color:e.oneOf(["black","white"]),role:e.oneOf(["primary","secondary","danger"]),state:e.oneOf(["abled","disabled"]),iconName:e.oneOf(["CircleIcon","SquareIcon"]),iconPosition:e.oneOf(["left","right"])};i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},weight:{required:!1,tsType:{name:"union",raw:'"bold" | "normal"',elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"normal"'}]},description:"",defaultValue:{value:'"bold"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"white" | "black"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"black"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"white"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled" | "disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,P={title:"Component/Button",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:T()}},n={args:{size:"large",label:"button_label",weight:"normal",role:"primary",state:"abled"}},t={args:{size:"medium",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},r={args:{size:"small",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},o={args:{size:"small",label:"button_label",weight:"normal",role:"danger",state:"abled",iconName:"CircleIcon",iconPosition:"left"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: 'button_label',
    weight: \`normal\`,
    role: \`primary\`,
    state: \`abled\`
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: 'button_label',
    weight: \`normal\`,
    role: \`secondary\`,
    state: \`abled\`
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
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
    role: \`danger\`,
    state: \`abled\`,
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...o.parameters?.docs?.source}}};const V=["LargePrimaryButton","MeduimSecondaryButton","SmallSecondaryButton","SmallDangerButtonWithCircleIcon"];export{n as LargePrimaryButton,t as MeduimSecondaryButton,o as SmallDangerButtonWithCircleIcon,r as SmallSecondaryButton,V as __namedExportsOrder,P as default};
