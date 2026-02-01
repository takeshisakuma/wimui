import{j as a}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./index-BgUr35ih.js";import{I as q}from"./Icon-IErQSuUS.js";import{u as w}from"./useTranslation-CQkX1ujI.js";const p=({size:m="medium",label:r,priority:y="primary",role:f="default",iconName:u,position:v="static","aria-label":g,className:b,...I})=>{const{t:d}=w(),x=`wim-fab--${{small:"sm",medium:"md",large:"lg"}[m]}`,h=`wim-fab--${y}`,S=`wim-fab--${f}`,N=`wim-fab--${v}`,C=r?"wim-fab--extended":"";return a.jsx("button",{type:"button",className:["wim-fab",x,h,S,N,C,b].filter(Boolean).join(" "),"aria-label":g||(r?d(r):u),...I,children:a.jsxs("span",{className:"wim-fab__inner",children:[a.jsx(q,{name:u,size:m}),r&&a.jsx("span",{className:"wim-fab__label",children:d(r)})]})})};p.propTypes={size:e.oneOf(["small","medium","large"]),label:e.string,priority:e.oneOf(["primary","secondary","tertiary"]),role:e.oneOf(["default","destructive","positive"]),iconName:e.oneOf(["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]).isRequired,position:e.oneOf(["bottom-right","bottom-left","top-right","top-left","static"]),"aria-label":e.string};p.__docgenInfo={description:"",methods:[],displayName:"Fab",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"destructive"',computed:!1},{value:'"positive"',computed:!1}]}},iconName:{required:!0,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}]},description:"",type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1},{value:'"ExternalLinkIcon"',computed:!1}]}},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left" | "static"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"",defaultValue:{value:'"static"',computed:!1},type:{name:"enum",value:[{value:'"bottom-right"',computed:!1},{value:'"bottom-left"',computed:!1},{value:'"top-right"',computed:!1},{value:'"top-left"',computed:!1},{value:'"static"',computed:!1}]}},"aria-label":{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const T={title:"Component/Actions/Fab",component:p,parameters:{layout:"centered"},tags:[],argTypes:{priority:{control:"radio",options:["primary","secondary","tertiary"]},role:{control:"radio",options:["default","destructive","positive"]},size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","top-right","top-left","static"]},iconName:{control:"select",options:["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]}}},t={args:{priority:"primary",iconName:"CircleIcon",label:"",position:"static"}},o={args:{priority:"secondary",iconName:"SquareIcon",label:"",position:"static"}},i={args:{priority:"tertiary",iconName:"ExternalLinkIcon",label:"",position:"static"}},n={args:{priority:"primary",iconName:"CircleIcon",label:"送信する",position:"static"}},s={args:{priority:"primary",role:"destructive",iconName:"SquareIcon",label:"削除",position:"static"}},l={args:{priority:"primary",role:"positive",iconName:"CircleIcon",label:"完了",position:"static"}},c={parameters:{layout:"fullscreen"},args:{priority:"primary",iconName:"CircleIcon",position:"bottom-right"},render:m=>a.jsxs("div",{style:{height:"300px",width:"100%",position:"relative"},children:[a.jsx("p",{style:{padding:"20px"},children:"スクロール可能な背景の例..."}),a.jsx(p,{...m})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "primary",
    iconName: "CircleIcon",
    label: "",
    position: "static"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "secondary",
    iconName: "SquareIcon",
    label: "",
    position: "static"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    iconName: "ExternalLinkIcon",
    label: "",
    position: "static"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "primary",
    iconName: "CircleIcon",
    label: "送信する",
    position: "static"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "primary",
    role: "destructive",
    iconName: "SquareIcon",
    label: "削除",
    position: "static"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "primary",
    role: "positive",
    iconName: "CircleIcon",
    label: "完了",
    position: "static"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    priority: "primary",
    iconName: "CircleIcon",
    position: "bottom-right"
  },
  render: args => <div style={{
    height: "300px",
    width: "100%",
    position: "relative"
  }}>\r
            <p style={{
      padding: "20px"
    }}>スクロール可能な背景の例...</p>\r
            <Fab {...args} />\r
        </div>
}`,...c.parameters?.docs?.source}}};const j=["Primary","Secondary","Tertiary","Extended","Destructive","Positive","FixedPosition"],O=Object.freeze(Object.defineProperty({__proto__:null,Destructive:s,Extended:n,FixedPosition:c,Positive:l,Primary:t,Secondary:o,Tertiary:i,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{s as D,n as E,O as F,t as P,o as S,l as a};
