import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{P as e}from"./index-9RKQ6TJP.js";import{I as T}from"./Icon-CfOW3bw8.js";import{u as q}from"./useTranslation-z9kaUNdK.js";const u=({size:m="medium",label:i,priority:y="secondary",role:f="default",state:b="abled",iconName:a=void 0,iconPosition:c="left",backgroundColor:d,...g})=>{const{t:v}=q(),S=`wim-button--${{small:"sm",medium:"md",large:"lg"}[m]}`,_=`wim-button--${y}`,B=`wim-button--${f}`,C=!i&&a?"wim-button--icon-only":"",p=a?t.jsx(T,{name:a,size:m}):null,I=t.jsxs(t.Fragment,{children:[a&&c==="left"&&p,i&&t.jsx("span",{className:"wim-button__label",children:v(i)}),a&&c==="right"&&p]});return t.jsx("button",{type:"button",style:d?{backgroundColor:d}:void 0,className:["wim-button",S,_,B,C].filter(Boolean).join(" "),disabled:b==="disabled",...g,children:I})};u.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string,onClick:e.func,priority:e.oneOf(["primary","secondary","tertiary"]),role:e.oneOf(["default","danger","success"]),state:e.oneOf(["abled","disabled"]),iconName:e.oneOf(["CircleIcon","SquareIcon"]),iconPosition:e.oneOf(["left","right"])};u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"default" | "danger" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"danger"',computed:!1},{value:'"success"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled" | "disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:z}=__STORYBOOK_MODULE_TEST__,O={title:"Component/Buttons & Actions/Button",component:u,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:z()}},r={args:{size:"large",label:"button_label",priority:"primary",state:"abled"}},l={args:{size:"medium",label:"button_label",priority:"secondary",state:"abled"}},n={args:{size:"small",label:"button_label",priority:"secondary",state:"abled"}},o={args:{size:"small",label:"button_label",priority:"tertiary",role:"danger",state:"abled",iconName:"CircleIcon",iconPosition:"left"}},s={args:{size:"large",priority:"primary",role:"default",state:"abled",iconName:"SquareIcon"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: \`primary\`,
    state: \`abled\`
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: \`secondary\`,
    state: \`abled\`
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: \`secondary\`,
    state: \`abled\`
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: \`tertiary\`,
    role: \`danger\`,
    state: \`abled\`,
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    priority: "primary",
    role: "default",
    state: "abled",
    iconName: "SquareIcon"
  }
}`,...s.parameters?.docs?.source}}};const h=["LargePrimaryButton","MeduimSecondaryButton","SmallSecondaryButton","SmallTertiaryButtonWithCircleIcon","LargePrimaryButtonWithSquareIconNoLabel"],N=Object.freeze(Object.defineProperty({__proto__:null,LargePrimaryButton:r,LargePrimaryButtonWithSquareIconNoLabel:s,MeduimSecondaryButton:l,SmallSecondaryButton:n,SmallTertiaryButtonWithCircleIcon:o,__namedExportsOrder:h,default:O},Symbol.toStringTag,{value:"Module"}));export{N as B,r as L};
