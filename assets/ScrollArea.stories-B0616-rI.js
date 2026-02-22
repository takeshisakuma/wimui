import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as y}from"./index-Cq_oNWTo.js";import{u as x}from"./useTranslation-BXkv5Y9g.js";const a=({text:l,children:i,scrollAxis:s="y",maxHeight:d="10rem",style:c,className:m,...h})=>{const{t:p}=x(),g={maxHeight:d,overflowX:s==="x"||s==="both"?"auto":"hidden",overflowY:s==="y"||s==="both"?"auto":"hidden",...c};return e.jsx("div",{className:y("wim-scroll-area",m),style:g,...h,children:i||(l?p(l):null)})};a.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},scrollAxis:{required:!1,tsType:{name:"union",raw:'"x" | "y" | "both"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"y"',computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const u={title:"Component/Utilities/ScrollArea",component:a,parameters:{layout:"centered"},argTypes:{scrollAxis:{control:"select",options:["x","y","both"]},maxHeight:{control:"text"}}},r={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}},n={args:{scrollAxis:"x",style:{width:"100%",maxWidth:"80vw"},children:e.jsx("div",{style:{width:"150rem",background:"#3b82f6",padding:"1rem",color:"white"},children:"This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。"})}},t={args:{scrollAxis:"y",maxHeight:"12rem",children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{style:{margin:"0 0 1rem 0"},children:"Custom Content Area"}),e.jsx("p",{children:"You can wrap any React elements inside ScrollArea."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"}),e.jsx("li",{children:"Item 4"}),e.jsx("li",{children:"Item 5"})]}),e.jsx("p",{children:"Scrolling works perfectly for complex layouts."})]})}},o={args:{scrollAxis:"both",maxHeight:"20rem",style:{width:"100%",maxWidth:"80vw"},children:e.jsxs("div",{style:{width:"40rem",height:"40rem",background:"linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",padding:"1rem"},children:[e.jsx("h4",{style:{color:"#333"},children:"Both Axes Scrolling"}),e.jsxs("p",{style:{color:"#555"},children:["This container has content that overflows both vertically and horizontally. ScrollArea handles both directions when ",e.jsx("code",{children:'scrollAxis="both"'})," is set."]}),e.jsx("div",{style:{marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"1rem"},children:[...Array(20)].map((l,i)=>e.jsxs("div",{style:{background:"rgba(255,255,255,0.5)",padding:"1rem",borderRadius:"4px"},children:["Box ",i+1]},i))})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "x",
    style: {
      width: "100%",
      maxWidth: "80vw"
    },
    children: <div style={{
      width: "150rem",
      background: "#3b82f6",
      padding: "1rem",
      color: "white"
    }}>\r
                This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。\r
            </div>
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "12rem",
    children: <div style={{
      padding: "1rem"
    }}>\r
                <h4 style={{
        margin: "0 0 1rem 0"
      }}>Custom Content Area</h4>\r
                <p>You can wrap any React elements inside ScrollArea.</p>\r
                <ul>\r
                    <li>Item 1</li>\r
                    <li>Item 2</li>\r
                    <li>Item 3</li>\r
                    <li>Item 4</li>\r
                    <li>Item 5</li>\r
                </ul>\r
                <p>Scrolling works perfectly for complex layouts.</p>\r
            </div>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "both",
    maxHeight: "20rem",
    style: {
      width: "100%",
      maxWidth: "80vw"
    },
    children: <div style={{
      width: "40rem",
      height: "40rem",
      background: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
      padding: "1rem"
    }}>\r
                <h4 style={{
        color: "#333"
      }}>Both Axes Scrolling</h4>\r
                <p style={{
        color: "#555"
      }}>\r
                    This container has content that overflows both vertically and horizontally.\r
                    ScrollArea handles both directions when <code>scrollAxis=&quot;both&quot;</code> is set.\r
                </p>\r
                <div style={{
        marginTop: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem"
      }}>\r
                    {[...Array(20)].map((_, i) => <div key={i} style={{
          background: "rgba(255,255,255,0.5)",
          padding: "1rem",
          borderRadius: "4px"
        }}>\r
                            Box {i + 1}\r
                        </div>)}\r
                </div>\r
            </div>
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","HorizontalScroll","WithChildren","Both"],A=Object.freeze(Object.defineProperty({__proto__:null,Both:o,Default:r,HorizontalScroll:n,WithChildren:t,__namedExportsOrder:v,default:u},Symbol.toStringTag,{value:"Module"}));export{o as B,r as D,n as H,A as S,t as W};
