import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-Dja6ld6l.js";import{P as s}from"./index-DZGrFLC1.js";import{B as S}from"./Button-C_GQ0Y6v.js";const c=({offsetTop:n,offsetBottom:f,onChange:b,target:p=()=>window,children:A,className:T,style:j})=>{const[x,R]=o.useState({isAffixed:!1}),w=o.useRef(null),B=o.useRef(null),a=o.useRef(null),v=o.useRef(!1),y=o.useCallback(()=>{if(!w.current)return;const i=p();if(!i)return;const e=w.current.getBoundingClientRect(),m=i instanceof Window?{top:0,bottom:window.innerHeight}:i.getBoundingClientRect();let r=!1,u,h;n!==void 0?e.top<m.top+n&&(r=!0,u={position:"fixed",top:m.top+n,width:e.width,height:e.height,zIndex:1e3},h={width:e.width,height:e.height}):f!==void 0&&e.bottom>m.bottom-f&&(r=!0,u={position:"fixed",bottom:window.innerHeight-m.bottom+f,width:e.width,height:e.height,zIndex:1e3},h={width:e.width,height:e.height}),r!==v.current&&(v.current=r,b?.(r)),R(g=>g.isAffixed===r&&JSON.stringify(g.affixStyle)===JSON.stringify(u)&&JSON.stringify(g.placeholderStyle)===JSON.stringify(h)?g:{isAffixed:r,affixStyle:u,placeholderStyle:h})},[n,f,p,b]);return o.useEffect(()=>{const i=p();if(!i)return;const e=()=>{a.current&&window.cancelAnimationFrame(a.current),a.current=window.requestAnimationFrame(y)};return i.addEventListener("scroll",e),window.addEventListener("resize",e),y(),()=>{i.removeEventListener("scroll",e),window.removeEventListener("resize",e),a.current&&window.cancelAnimationFrame(a.current)}},[p,y]),t.jsx("div",{ref:w,style:{...x.placeholderStyle,...j},className:T,children:t.jsx("div",{ref:B,className:x.isAffixed?"wim-affix--affixed":"",style:x.affixStyle,children:A})})};c.propTypes={offsetTop:s.number,offsetBottom:s.number,onChange:s.func,target:s.func,children:s.node.isRequired,className:s.string,style:s.object};c.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:"Office distance from the top of the window (in pixels)",type:{name:"number"}},offsetBottom:{required:!1,tsType:{name:"number"},description:"Office distance from the bottom of the window (in pixels)",type:{name:"number"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(lastAffixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"lastAffixed"}],return:{name:"void"}}},description:"Callback when the affix state changes",type:{name:"func"}},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window | null",elements:[{name:"HTMLElement"},{name:"Window"},{name:"null"}]}}},description:"Target container that will be scrolled",defaultValue:{value:"() => window",computed:!1},type:{name:"func"}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to be rendered inside the affix",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names",type:{name:"string"}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute",type:{name:"object"}}}};const E={title:"Navigation/Affix",component:c,tags:[],parameters:{layout:"fullscreen"}},l={args:{offsetTop:20,children:t.jsx(S,{label:"Affix Top",size:"medium"})},render:n=>t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:"Scroll down to see the button stick to the top."}),t.jsx("div",{style:{marginTop:"100px"},children:t.jsx(c,{...n})})]})},d={args:{offsetBottom:20,children:t.jsx(S,{label:"Affix Bottom",size:"medium"})},render:n=>t.jsxs("div",{style:{height:"200vh",padding:"20px"},children:[t.jsx("p",{children:"Scroll down to the button. It will stick to the bottom until you scroll past it (upwards)."}),t.jsxs("div",{style:{marginTop:"120vh"},children:[t.jsx("p",{children:"Scroll down here..."}),t.jsx(c,{...n}),t.jsx("p",{children:"And more content below..."})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const O=["Basic","OffsetBottom"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,OffsetBottom:d,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{_ as A,l as B,d as O};
