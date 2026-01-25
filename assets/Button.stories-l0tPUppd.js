import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{P as e}from"./index-D-FOyd-b.js";import{I as B}from"./Icon-B_84CyJO.js";import{u as I}from"./useTranslation-CsI3aIsr.js";const u=({size:i="medium",label:s,weight:p="bold",color:b="black",role:f="secondary",state:g="abled",iconName:a=void 0,iconPosition:m="left",backgroundColor:d,...y})=>{const{t:v}=I(),w=`wim-button--${{small:"sm",medium:"md",large:"lg"}[i]}`,h=`wim-button--${f}`,_=p==="bold"?"wim-button--bold":"",S=b==="white"?"wim-button--white":"",C=!s&&a?"wim-button--icon-only":"",c=a?l.jsx(B,{name:a,size:i}):null,T=l.jsxs(l.Fragment,{children:[a&&m==="left"&&c,s&&l.jsx("span",{className:"wim-button__label",children:v(s)}),a&&m==="right"&&c]});return l.jsx("button",{type:"button",style:d?{backgroundColor:d}:void 0,className:["wim-button",w,h,_,S,C].filter(Boolean).join(" "),disabled:g==="disabled",...y,children:T})};u.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string,onClick:e.func,weight:e.oneOf(["normal","bold"]),color:e.oneOf(["black","white"]),role:e.oneOf(["primary","secondary","danger"]),state:e.oneOf(["abled","disabled"]),iconName:e.oneOf(["CircleIcon","SquareIcon"]),iconPosition:e.oneOf(["left","right"])};u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},weight:{required:!1,tsType:{name:"union",raw:'"bold" | "normal"',elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"normal"'}]},description:"",defaultValue:{value:'"bold"',computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"bold"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"white" | "black"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"black"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"white"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled" | "disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:O}=__STORYBOOK_MODULE_TEST__,q={title:"Component/Button",component:u,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:O()}},n={args:{size:"large",label:"button_label",weight:"normal",role:"primary",state:"abled"}},t={args:{size:"medium",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},o={args:{size:"small",label:"button_label",weight:"normal",role:"secondary",state:"abled"}},r={args:{size:"small",label:"button_label",weight:"normal",role:"danger",state:"abled",iconName:"CircleIcon",iconPosition:"left"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: 'button_label',
    weight: \`normal\`,
    role: \`secondary\`,
    state: \`abled\`
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: 'button_label',
    weight: \`normal\`,
    role: \`danger\`,
    state: \`abled\`,
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...r.parameters?.docs?.source}}};const z=["LargePrimaryButton","MeduimSecondaryButton","SmallSecondaryButton","SmallDangerButtonWithCircleIcon"],M=Object.freeze(Object.defineProperty({__proto__:null,LargePrimaryButton:n,MeduimSecondaryButton:t,SmallDangerButtonWithCircleIcon:r,SmallSecondaryButton:o,__namedExportsOrder:z,default:q},Symbol.toStringTag,{value:"Module"}));export{M as B,n as L};
