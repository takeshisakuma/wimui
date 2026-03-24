import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as m}from"./index-BGnpSqQE.js";const r=({children:t,size:l="medium",className:o,...i})=>e.jsx("kbd",{className:m("wim-kbd",`wim-kbd--${l==="small"?"sm":"md"}`,o),...i,children:t});r.__docgenInfo={description:"ユーザーが入力するキーボードのショートカットやキーを表示するためのコンポーネント。",methods:[],displayName:"Kbd",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"キーボードのラベル（または子要素）。"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"サイズ。",defaultValue:{value:'"medium"',computed:!1}}}};const c={title:"Components/Typography & Icons/Kbd",component:r,tags:[],parameters:{layout:"centered"}},s={args:{children:"⌘",size:"medium"}},a={args:{children:"K",size:"small"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[e.jsx(r,{children:"⌘"}),e.jsx("span",{children:"+"}),e.jsx(r,{children:"K"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{children:"Shift"}),e.jsx(r,{children:"Ctrl"}),e.jsx(r,{children:"Option"}),e.jsx(r,{children:"Command"}),e.jsx(r,{children:"Enter"}),e.jsx(r,{children:"⌫"}),e.jsx(r,{children:"⎋"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "⌘",
    size: "medium"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "K",
    size: "small"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "4px",
    alignItems: "center"
  }}>
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Kbd>Shift</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Option</Kbd>
      <Kbd>Command</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>⌫</Kbd>
      <Kbd>⎋</Kbd>
    </div>
}`,...d.parameters?.docs?.source}}};const p=["Primary","Small","Combined","KeyboardSymbols"],K=Object.freeze(Object.defineProperty({__proto__:null,Combined:n,KeyboardSymbols:d,Primary:s,Small:a,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{n as C,K,s as P,a as S,d as a};
