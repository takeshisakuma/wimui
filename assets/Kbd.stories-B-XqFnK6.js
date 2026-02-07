import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./index-Cjts0Fz-.js";const r=({children:o,size:i="md",className:l="",...m})=>{const c=`wim-kbd--${i}`;return e.jsx("kbd",{className:["wim-kbd",c,l].filter(Boolean).join(" "),...m,children:o})};r.propTypes={children:t.node.isRequired,size:t.oneOf(["sm","md"]),className:t.string};r.__docgenInfo={description:"ユーザーが入力するキーボードのショートカットやキーを表示するためのコンポーネント。",methods:[],displayName:"Kbd",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"キーボードのラベル（または子要素）。",type:{name:"node"}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"サイズ。",defaultValue:{value:'"md"',computed:!1},type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1}]}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const p={title:"Component/Data Display/Kbd",component:r,tags:[],parameters:{layout:"centered"}},s={args:{children:"⌘",size:"md"}},a={args:{children:"K",size:"sm"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[e.jsx(r,{children:"⌘"}),e.jsx("span",{children:"+"}),e.jsx(r,{children:"K"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{children:"Shift"}),e.jsx(r,{children:"Ctrl"}),e.jsx(r,{children:"Option"}),e.jsx(r,{children:"Command"}),e.jsx(r,{children:"Enter"}),e.jsx(r,{children:"⌫"}),e.jsx(r,{children:"⎋"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "⌘",
    size: "md"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "K",
    size: "sm"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "4px",
    alignItems: "center"
  }}>\r
            <Kbd>⌘</Kbd>\r
            <span>+</span>\r
            <Kbd>K</Kbd>\r
        </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>\r
            <Kbd>Shift</Kbd>\r
            <Kbd>Ctrl</Kbd>\r
            <Kbd>Option</Kbd>\r
            <Kbd>Command</Kbd>\r
            <Kbd>Enter</Kbd>\r
            <Kbd>⌫</Kbd>\r
            <Kbd>⎋</Kbd>\r
        </div>
}`,...d.parameters?.docs?.source}}};const u=["Primary","Small","Combined","KeyboardSymbols"],x=Object.freeze(Object.defineProperty({__proto__:null,Combined:n,KeyboardSymbols:d,Primary:s,Small:a,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{n as C,x as K,s as P,a as S,d as a};
