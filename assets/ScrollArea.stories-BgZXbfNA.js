import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as o}from"./index-DKSVcYve.js";import{u as x}from"./useTranslation-EKseGjld.js";const a=({text:s,children:i,scrollAxis:l="y",maxHeight:c="10rem",style:m,className:d,...p})=>{const{t:h}=x(),u={maxHeight:c,overflowX:l==="x"||l==="both"?"auto":"hidden",overflowY:l==="y"||l==="both"?"auto":"hidden",...m};return e.jsx("div",{className:`wim-scroll-area ${d||""}`,style:u,...p,children:i||(s?h(s):null)})};a.propTypes={text:o.string,children:o.node,scrollAxis:o.oneOf(["x","y","both"]),maxHeight:o.string};a.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{text:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},scrollAxis:{required:!1,tsType:{name:"union",raw:'"x" | "y" | "both"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"y"',computed:!1},type:{name:"enum",value:[{value:'"x"',computed:!1},{value:'"y"',computed:!1},{value:'"both"',computed:!1}]}},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height of the scroll area",type:{name:"string"}}}};const y={title:"Component/Structure/ScrollArea",component:a,parameters:{layout:"centered"},argTypes:{scrollAxis:{control:"select",options:["x","y","both"]},maxHeight:{control:"text"}}},r={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}},t={args:{scrollAxis:"x",style:{width:"20rem"},children:e.jsx("div",{style:{width:"50rem",background:"linear-gradient(to right, #f0f, #0ff)",padding:"1rem",color:"white"},children:"This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。"})}},n={args:{scrollAxis:"y",maxHeight:"12rem",children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{style:{margin:"0 0 1rem 0"},children:"Custom Content Area"}),e.jsx("p",{children:"You can wrap any React elements inside ScrollArea."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"}),e.jsx("li",{children:"Item 4"}),e.jsx("li",{children:"Item 5"})]}),e.jsx("p",{children:"Scrolling works perfectly for complex layouts."})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "x",
    style: {
      width: "20rem"
    },
    children: <div style={{
      width: "50rem",
      background: "linear-gradient(to right, #f0f, #0ff)",
      padding: "1rem",
      color: "white"
    }}>\r
                This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。\r
            </div>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const g=["Default","HorizontalScroll","WithChildren"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:r,HorizontalScroll:t,WithChildren:n,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,t as H,w as S,n as W};
