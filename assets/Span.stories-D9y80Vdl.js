import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as O}from"./index-DcECRbSM.js";import{I as q}from"./Icon-CiKv9aIf.js";import{u as C}from"./useTranslation-D_6oAizE.js";const y=({size:g="medium",content:f="span",color:w="black",weight:v="normal",style:x="normal",iconName:u=void 0,iconPosition:d="left",decoration:h="none",className:_,...z})=>{const{t:b}=C(),I={"ex-small":"xs",small:"sm",medium:"md",large:"lg","ex-large":"xl"},T={"ex-small":"small",small:"small",medium:"medium",large:"large","ex-large":"large"}[g]||"medium",S=u?e.jsx(q,{name:u,size:T}):null,k=e.jsxs(e.Fragment,{children:[u&&d==="left"&&S,e.jsx("span",{children:b(f)}),u&&d==="right"&&S]});return e.jsx("span",{className:O("wim-span",`wim-span--${I[g]}`,`wim-span--${w}`,v==="bold"&&"wim-span--bold",x==="italic"&&"wim-span--italic",h!=="none"&&`wim-span--${h}`,_),...z,children:k})};y.__docgenInfo={description:"",methods:[],displayName:"Span",props:{size:{required:!1,tsType:{name:"union",raw:'"ex-small" | "small" | "medium" | "large" | "ex-large"',elements:[{name:"literal",value:'"ex-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"ex-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary" | "success" | "warning" | "info"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"black"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},style:{required:!1,tsType:{name:"union",raw:'"normal" | "italic"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"italic"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"line-through" | "underline" | "highlight" | "none"',elements:[{name:"literal",value:'"line-through"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"span"',computed:!1}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"",defaultValue:{value:"undefined",computed:!0}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const{fn:E}=__STORYBOOK_MODULE_TEST__,j={title:"Component/Typography & Icons/Span",component:y,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary","success","warning","info"]}},args:{onClick:E()}},a={args:{size:"ex-large",content:"ex-large_span",weight:"normal",color:"deepgray",style:"normal"}},n={args:{size:"large",content:"large_span",weight:"normal",color:"deepgray",style:"normal"}},r={args:{size:"medium",content:"medium_span",weight:"normal",color:"deepgray",style:"normal"}},l={args:{size:"small",content:"small_span",weight:"normal",color:"deepgray",style:"normal"}},o={args:{size:"ex-small",content:"ex-small_span",weight:"normal",color:"deepgray",style:"normal"}},s={args:{size:"small",content:"small_span",weight:"normal",color:"deepgray",style:"normal",iconName:"SquareIcon",iconPosition:"left"}},t={args:{size:"large",content:"large_span",weight:"bold",color:"black",style:"italic",iconName:"CircleIcon",iconPosition:"right"}},i={args:{size:"medium",content:"",iconName:"CircleIcon"}},m={args:{size:"medium",content:"Bold Span",weight:"bold"}},c={args:{size:"medium",content:"Strikethrough Span",decoration:"line-through"}},p={args:{size:"medium",content:"Highlight Span",decoration:"highlight"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "ex-large",\n    content: `ex-large_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    style: `normal`\n  }\n}',...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "large",\n    content: `large_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    style: `normal`\n  }\n}',...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "medium",\n    content: `medium_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    style: `normal`\n  }\n}',...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "small",\n    content: `small_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    style: `normal`\n  }\n}',...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "ex-small",\n    content: `ex-small_span`,\n    weight: `normal`,\n    color: `deepgray`,\n    style: `normal`\n  }\n}',...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    content: \`small_span\`,
    weight: \`normal\`,
    color: \`deepgray\`,
    style: \`normal\`,
    iconName: "SquareIcon",
    //アイコン名を指定
    iconPosition: "left" //アイコンの位置を指定
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    content: \`large_span\`,
    weight: "bold",
    color: "black",
    style: "italic",
    iconName: "CircleIcon",
    iconPosition: "right"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "",
    // テキストなし
    iconName: "CircleIcon"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "Bold Span",
    weight: "bold"
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "Strikethrough Span",
    decoration: "line-through"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    content: "Highlight Span",
    decoration: "highlight"
  }
}`,...p.parameters?.docs?.source}}};const L=["ExLargeSpan","LargeSpan","MediumSpan","SmallSpan","ExSmallSpan","SmallSpanWithIcon","LargeSpanWithIconOnRight","IconOnlySpan","BoldSpan","StrikethroughSpan","HighlightSpan"],B=Object.freeze(Object.defineProperty({__proto__:null,BoldSpan:m,ExLargeSpan:a,ExSmallSpan:o,HighlightSpan:p,IconOnlySpan:i,LargeSpan:n,LargeSpanWithIconOnRight:t,MediumSpan:r,SmallSpan:l,SmallSpanWithIcon:s,StrikethroughSpan:c,__namedExportsOrder:L,default:j},Symbol.toStringTag,{value:"Module"}));export{a as E,p as H,n as L,r as M,B as S,l as a,s as b,c};
