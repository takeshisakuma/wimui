import{R as e}from"./iframe-CchWMc2Z.js";import{j as h}from"./jsx-runtime-u17CrQMm.js";import{P as r}from"./index-BMB_0ZU1.js";import{u as g}from"./useTranslation-DUSmElNm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGZUvWth.js";const o=({text:s,children:i,scrollAxis:t="y",maxHeight:c="10rem",style:m,className:d,...p})=>{const{t:y}=g(),u={maxHeight:c,overflowX:t==="x"||t==="both"?"auto":"hidden",overflowY:t==="y"||t==="both"?"auto":"hidden",...m};return h.jsx("div",{className:`wim-scroll-area ${d||""}`,style:u,...p,children:i||(s?y(s):null)})};o.propTypes={text:r.string,children:r.node,scrollAxis:r.oneOf(["x","y","both"]),maxHeight:r.string};o.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{text:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},scrollAxis:{required:!1,tsType:{name:"union",raw:'"x" | "y" | "both"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"y"',computed:!1},type:{name:"enum",value:[{value:'"x"',computed:!1},{value:'"y"',computed:!1},{value:'"both"',computed:!1}]}},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height of the scroll area",type:{name:"string"}}}};const w={title:"Component/Structure/ScrollArea",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{scrollAxis:{control:"select",options:["x","y","both"]},maxHeight:{control:"text"}}},a={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}},n={args:{scrollAxis:"x",style:{width:"20rem"},children:e.createElement("div",{style:{width:"50rem",background:"linear-gradient(to right, #f0f, #0ff)",padding:"1rem",color:"white"}},"This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。")}},l={args:{scrollAxis:"y",maxHeight:"12rem",children:e.createElement("div",{style:{padding:"1rem"}},[e.createElement("h4",{key:"h1",style:{margin:"0 0 1rem 0"}},"Custom Content Area"),e.createElement("p",{key:"p1"},"You can wrap any React elements inside ScrollArea."),e.createElement("ul",{key:"ul1"},[e.createElement("li",{key:"li1"},"Item 1"),e.createElement("li",{key:"li2"},"Item 2"),e.createElement("li",{key:"li3"},"Item 3"),e.createElement("li",{key:"li4"},"Item 4"),e.createElement("li",{key:"li5"},"Item 5")]),e.createElement("p",{key:"p2"},"Scrolling works perfectly for complex layouts.")])}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "x",
    style: {
      width: "20rem"
    },
    children: React.createElement("div", {
      style: {
        width: "50rem",
        background: "linear-gradient(to right, #f0f, #0ff)",
        padding: "1rem",
        color: "white"
      }
    }, "This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。")
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "12rem",
    children: React.createElement("div", {
      style: {
        padding: "1rem"
      }
    }, [React.createElement("h4", {
      key: "h1",
      style: {
        margin: "0 0 1rem 0"
      }
    }, "Custom Content Area"), React.createElement("p", {
      key: "p1"
    }, "You can wrap any React elements inside ScrollArea."), React.createElement("ul", {
      key: "ul1"
    }, [React.createElement("li", {
      key: "li1"
    }, "Item 1"), React.createElement("li", {
      key: "li2"
    }, "Item 2"), React.createElement("li", {
      key: "li3"
    }, "Item 3"), React.createElement("li", {
      key: "li4"
    }, "Item 4"), React.createElement("li", {
      key: "li5"
    }, "Item 5")]), React.createElement("p", {
      key: "p2"
    }, "Scrolling works perfectly for complex layouts.")])
  }
}`,...l.parameters?.docs?.source}}};const S=["Default","HorizontalScroll","WithChildren"];export{a as Default,n as HorizontalScroll,l as WithChildren,S as __namedExportsOrder,w as default};
