import{j as m}from"./jsx-runtime-u17CrQMm.js";import{R as E}from"./iframe-s_RWuztI.js";import{P as e}from"./index-BGRTG6NI.js";const r=E.forwardRef(({as:b,p:c,pt:f,pr:y,pb:x,pl:h,px:u,py:d,m:T,mt:w,mr:B,mb:S,ml:q,mx:g,my:l,bg:v,w:O,h:P,radius:M,shadow:R,display:C,position:j,style:_,className:W,children:k,...D},L)=>{const z=b||"div",n=p=>typeof p=="number"?`${p}px`:p,A={padding:n(c),paddingTop:n(f||d),paddingRight:n(y||u),paddingBottom:n(x||d),paddingLeft:n(h||u),margin:n(T),marginTop:n(w||l),marginRight:n(B||g),marginBottom:n(S||l),marginLeft:n(q||g),backgroundColor:v,width:n(O),height:n(P),borderRadius:n(M),boxShadow:R,display:C,position:j,..._};return m.jsx(z,{ref:L,className:["wim-box",W].filter(Boolean).join(" "),style:A,...D,children:k})});r.displayName="Box";r.propTypes={as:e.any,p:e.oneOfType([e.number,e.string]),pt:e.oneOfType([e.number,e.string]),pr:e.oneOfType([e.number,e.string]),pb:e.oneOfType([e.number,e.string]),pl:e.oneOfType([e.number,e.string]),px:e.oneOfType([e.number,e.string]),py:e.oneOfType([e.number,e.string]),m:e.oneOfType([e.number,e.string]),mt:e.oneOfType([e.number,e.string]),mr:e.oneOfType([e.number,e.string]),mb:e.oneOfType([e.number,e.string]),ml:e.oneOfType([e.number,e.string]),mx:e.oneOfType([e.number,e.string]),my:e.oneOfType([e.number,e.string]),bg:e.string,w:e.oneOfType([e.number,e.string]),h:e.oneOfType([e.number,e.string]),radius:e.oneOfType([e.number,e.string]),shadow:e.string,display:e.any,position:e.any};r.__docgenInfo={description:`Box is the most basic layout component.\r
It provides a way to style a div (or any other element) with common CSS properties as props.`,methods:[],displayName:"Box",props:{as:{required:!1,tsType:{name:"C"},description:"The component used for the root node. Either a string to use a HTML element or a component.",type:{name:"any"}},p:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding",type:{name:"union",value:[{name:"number"},{name:"string"}]}},pt:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding top",type:{name:"union",value:[{name:"number"},{name:"string"}]}},pr:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding right",type:{name:"union",value:[{name:"number"},{name:"string"}]}},pb:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding bottom",type:{name:"union",value:[{name:"number"},{name:"string"}]}},pl:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding left",type:{name:"union",value:[{name:"number"},{name:"string"}]}},px:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding horizontal",type:{name:"union",value:[{name:"number"},{name:"string"}]}},py:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Padding vertical",type:{name:"union",value:[{name:"number"},{name:"string"}]}},m:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin",type:{name:"union",value:[{name:"number"},{name:"string"}]}},mt:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin top",type:{name:"union",value:[{name:"number"},{name:"string"}]}},mr:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin right",type:{name:"union",value:[{name:"number"},{name:"string"}]}},mb:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin bottom",type:{name:"union",value:[{name:"number"},{name:"string"}]}},ml:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin left",type:{name:"union",value:[{name:"number"},{name:"string"}]}},mx:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin horizontal",type:{name:"union",value:[{name:"number"},{name:"string"}]}},my:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Margin vertical",type:{name:"union",value:[{name:"number"},{name:"string"}]}},bg:{required:!1,tsType:{name:"string"},description:"Background color",type:{name:"string"}},w:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width",type:{name:"union",value:[{name:"number"},{name:"string"}]}},h:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height",type:{name:"union",value:[{name:"number"},{name:"string"}]}},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Border radius",type:{name:"union",value:[{name:"number"},{name:"string"}]}},shadow:{required:!1,tsType:{name:"string"},description:"Box shadow",type:{name:"string"}},display:{required:!1,tsType:{name:'ReactCSSProperties["display"]',raw:'React.CSSProperties["display"]'},description:"Display",type:{name:"any"}},position:{required:!1,tsType:{name:'ReactCSSProperties["position"]',raw:'React.CSSProperties["position"]'},description:"Position",type:{name:"any"}}}};const N={title:"Layout/Box",component:r,tags:[],argTypes:{as:{control:"text"},bg:{control:"color"},display:{control:"text"},position:{control:"text"}}},a={args:{children:"This is a Box",bg:"#f0f0f0",p:20,radius:8}},s={args:{children:"Box with Shadow",bg:"white",p:40,radius:12,shadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}},t={args:{as:"button",children:"Box as Button",bg:"#eff6ff",color:"#1d4ed8",p:"10px 20px",radius:6,style:{border:"1px solid #bfdbfe",cursor:"pointer",fontWeight:600}}},i={render:()=>m.jsxs(r,{bg:"#f8fafc",p:20,radius:8,style:{border:"1px solid #e2e8f0"},children:[m.jsx(r,{bg:"#eff6ff",p:15,mb:15,color:"#1d4ed8",radius:4,style:{border:"1px solid #bfdbfe"},children:"Margin Bottom 15"}),m.jsx(r,{bg:"#f0fdf4",p:15,color:"#15803d",radius:4,style:{border:"1px solid #bbf7d0"},children:"Box 2"})]})},o={args:{children:"Box with px and py",bg:"#fdf2f8",color:"#be185d",px:40,py:10,radius:8,style:{border:"1px solid #fbcfe8",display:"inline-block"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a Box",
    bg: "#f0f0f0",
    p: 20,
    radius: 8
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Box with Shadow",
    bg: "white",
    p: 40,
    radius: 12,
    shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    as: "button",
    children: "Box as Button",
    bg: "#eff6ff",
    color: "#1d4ed8",
    p: "10px 20px",
    radius: 6,
    style: {
      border: "1px solid #bfdbfe",
      cursor: "pointer",
      fontWeight: 600
    }
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box bg="#f8fafc" p={20} radius={8} style={{
    border: "1px solid #e2e8f0"
  }}>\r
            <Box bg="#eff6ff" p={15} mb={15} color="#1d4ed8" radius={4} style={{
      border: "1px solid #bfdbfe"
    }}>\r
                Margin Bottom 15\r
            </Box>\r
            <Box bg="#f0fdf4" p={15} color="#15803d" radius={4} style={{
      border: "1px solid #bbf7d0"
    }}>\r
                Box 2\r
            </Box>\r
        </Box>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Box with px and py",
    bg: "#fdf2f8",
    color: "#be185d",
    px: 40,
    // 左右パディング
    py: 10,
    // 上下パディング
    radius: 8,
    style: {
      border: "1px solid #fbcfe8",
      display: "inline-block"
    }
  }
}`,...o.parameters?.docs?.source}}};const H=["Default","WithCustomShadow","AsButton","Spacing","PaddingProps"],F=Object.freeze(Object.defineProperty({__proto__:null,AsButton:t,Default:a,PaddingProps:o,Spacing:i,WithCustomShadow:s,__namedExportsOrder:H,default:N},Symbol.toStringTag,{value:"Module"}));export{t as A,F as B,a as D,i as S};
