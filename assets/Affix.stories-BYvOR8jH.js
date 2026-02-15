import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DqzrRnqv.js";import{c as v}from"./index-CSkLIaOp.js";import{B as S}from"./Button-DaxNljQK.js";const h=({offsetTop:n,offsetBottom:d,onChange:y,target:c=()=>window,children:A,className:R,style:j})=>{const[w,T]=o.useState({isAffixed:!1}),x=o.useRef(null),B=o.useRef(null),s=o.useRef(null),b=o.useRef(!1),g=o.useCallback(()=>{if(!x.current)return;const i=c();if(!i)return;const e=x.current.getBoundingClientRect(),f=i===window||i instanceof Window?{top:0,bottom:window.innerHeight}:i.getBoundingClientRect();let r=!1,m,p;n!==void 0?e.top<f.top+n&&(r=!0,m={position:"fixed",top:f.top+n,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}):d!==void 0&&e.bottom>f.bottom-d&&(r=!0,m={position:"fixed",bottom:window.innerHeight-f.bottom+d,width:e.width,height:e.height,zIndex:1e3},p={width:e.width,height:e.height}),r!==b.current&&(b.current=r,y?.(r)),T(u=>u.isAffixed===r&&JSON.stringify(u.affixStyle)===JSON.stringify(m)&&JSON.stringify(u.placeholderStyle)===JSON.stringify(p)?u:{isAffixed:r,affixStyle:m,placeholderStyle:p})},[n,d,c,y]);return o.useEffect(()=>{const i=c();if(!i)return;const e=()=>{s.current&&window.cancelAnimationFrame(s.current),s.current=window.requestAnimationFrame(g)};return i.addEventListener("scroll",e),window.addEventListener("resize",e),g(),()=>{i.removeEventListener("scroll",e),window.removeEventListener("resize",e),s.current&&window.cancelAnimationFrame(s.current)}},[c,g]),t.jsx("div",{ref:x,style:{...w.placeholderStyle,...j},className:v(R),children:t.jsx("div",{ref:B,className:v(w.isAffixed&&"wim-affix--affixed"),style:w.affixStyle,children:A})})};h.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:"Office distance from the top of the window (in pixels)"},offsetBottom:{required:!1,tsType:{name:"number"},description:"Office distance from the bottom of the window (in pixels)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(lastAffixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"lastAffixed"}],return:{name:"void"}}},description:"Callback when the affix state changes"},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the affix"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const E={title:"Component/Navigation/Affix",component:h,tags:[],parameters:{layout:"fullscreen"}},a={args:{offsetTop:20,children:t.jsx(S,{label:"Affix Top",size:"medium"})},render:n=>t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:"Scroll down to see the button stick to the top."}),t.jsx("div",{style:{marginTop:"100px"},children:t.jsx(h,{...n})})]})},l={args:{offsetBottom:20,children:t.jsx(S,{label:"Affix Bottom",size:"medium"})},render:n=>t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:"Scroll down to the button. It will stick to the bottom until you scroll past it (upwards)."}),t.jsxs("div",{style:{marginTop:"120vh"},children:[t.jsx("p",{children:"Scroll down here..."}),t.jsx(h,{...n}),t.jsx("p",{children:"And more content below..."})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    offsetTop: 20,
    children: <Button label="Affix Top" size="medium" />
  },
  render: args => <div style={{
    height: "200vh",
    padding: "20px"
  }}>\r
            <p>Scroll down to see the button stick to the top.</p>\r
            <div style={{
      marginTop: "100px"
    }}>\r
                <Affix {...args} />\r
            </div>\r
        </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    offsetBottom: 20,
    children: <Button label="Affix Bottom" size="medium" />
  },
  render: args => <div style={{
    height: "200vh",
    padding: "20px"
  }}>\r
            <p>Scroll down to the button. It will stick to the bottom until you scroll past it (upwards).</p>\r
            <div style={{
      marginTop: "120vh"
    }}>\r
                <p>Scroll down here...</p>\r
                <Affix {...args} />\r
                <p>And more content below...</p>\r
            </div>\r
        </div>
}`,...l.parameters?.docs?.source}}};const N=["Basic","OffsetBottom"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,OffsetBottom:l,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{_ as A,a as B,l as O};
