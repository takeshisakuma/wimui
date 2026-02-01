import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./iframe-DklAU8Wq.js";import{P as n}from"./index-Cg_KqBR6.js";import{I}from"./Icon-B8nRZwIR.js";import{u as k}from"./useTranslation-Cb1Ioakl.js";const l=({size:a="medium",label:t,shrink:m=!1,iconName:c,position:u="static","aria-label":d,className:f,...g})=>{const{t:p}=k(),h=`wim-fab--${{small:"sm",medium:"md",large:"lg"}[a]}`,b=`wim-fab--${u}`,v=t?"wim-fab--extended":"",x=m?"wim-fab--shrink":"";return e.jsx("button",{type:"button",className:["wim-fab",h,b,v,x,f].filter(Boolean).join(" "),"aria-label":d||(t?p(t):c),...g,children:e.jsxs("span",{className:"wim-fab__inner",children:[e.jsx(I,{name:c,size:a}),t&&e.jsx("span",{className:"wim-fab__label",children:p(t)})]})})};l.propTypes={size:n.oneOf(["small","medium","large"]),label:n.string,shrink:n.bool,iconName:n.oneOf(["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]).isRequired,position:n.oneOf(["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]),"aria-label":n.string};l.__docgenInfo={description:"",methods:[],displayName:"Fab",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},shrink:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},iconName:{required:!0,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}]},description:"",type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1},{value:'"ExternalLinkIcon"',computed:!1}]}},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "static"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"static"'}]},description:"",defaultValue:{value:'"static"',computed:!1},type:{name:"enum",value:[{value:'"bottom-right"',computed:!1},{value:'"bottom-left"',computed:!1},{value:'"bottom-center"',computed:!1},{value:'"top-right"',computed:!1},{value:'"top-left"',computed:!1},{value:'"static"',computed:!1}]}},"aria-label":{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const S={title:"Component/Actions/Fab",component:l,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"radio",options:["small","medium","large"]},position:{control:"select",options:["bottom-right","bottom-left","bottom-center","top-right","top-left","static"]},iconName:{control:"select",options:["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"]},shrink:{control:"boolean"}}},o={args:{iconName:"CircleIcon",label:"",position:"static"}},r={args:{iconName:"CircleIcon",label:"送信する",position:"static",shrink:!1}},s={args:{iconName:"CircleIcon",label:"スクロールして縮小",position:"static",shrink:!1},render:a=>{const[t,m]=y.useState(!1);return e.jsx("div",{style:{height:"300px",width:"100%",overflowY:"auto",border:"1px solid #ccc",position:"relative"},onScroll:c=>m(c.currentTarget.scrollTop>50),children:e.jsxs("div",{style:{height:"600px",padding:"20px"},children:[e.jsx("p",{children:"下にスクロールするとFABが縮小します（50px以上）。"}),e.jsx(l,{...a,shrink:t,position:"bottom-center",style:{position:"sticky",bottom:"20px"}})]})})}},i={parameters:{layout:"fullscreen"},args:{iconName:"CircleIcon",position:"bottom-right"},render:a=>e.jsxs("div",{style:{height:"300px",width:"100%",position:"relative"},children:[e.jsx("p",{style:{padding:"20px"},children:"スクロール可能な背景の例..."}),e.jsx(l,{...a})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "",
    position: "static"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "送信する",
    position: "static",
    shrink: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    label: "スクロールして縮小",
    position: "static",
    shrink: false
  },
  render: args => {
    const [isShrunk, setIsShrunk] = React.useState(false);
    return <div style={{
      height: "300px",
      width: "100%",
      overflowY: "auto",
      border: "1px solid #ccc",
      position: "relative"
    }} onScroll={e => setIsShrunk(e.currentTarget.scrollTop > 50)}>\r
                <div style={{
        height: "600px",
        padding: "20px"
      }}>\r
                    <p>下にスクロールするとFABが縮小します（50px以上）。</p>\r
                    <Fab {...args} shrink={isShrunk} position="bottom-center" style={{
          position: "sticky",
          bottom: "20px"
        }} />\r
                </div>\r
            </div>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
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
}`,...i.parameters?.docs?.source}}};const C=["Primary","Extended","AutoShrink","FixedPosition"],F=Object.freeze(Object.defineProperty({__proto__:null,AutoShrink:s,Extended:r,FixedPosition:i,Primary:o,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{r as E,F,o as P};
