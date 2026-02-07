import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-DuKjAb9X.js";import{P as d}from"./index-5JlzFLOs.js";import{B as o}from"./Button-DTaWbDWj.js";import{I as f}from"./Input-C9qr0llS.js";const u=({children:a,active:t=!0,autoFocus:r=!0,className:g=""})=>{const m=l.useRef(null),p=l.useRef(null);return l.useEffect(()=>{if(!t)return;p.current=document.activeElement;const x=m.current;if(!x)return;const v=()=>Array.from(x.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>{const s=window.getComputedStyle(n);return s.display!=="none"&&s.visibility!=="hidden"&&!n.disabled});if(r){const n=v();n.length>0&&n[0].focus()}const h=n=>{if(n.key!=="Tab")return;const s=v();if(s.length===0){n.preventDefault();return}const y=s[0],b=s[s.length-1];n.shiftKey?document.activeElement===y&&(n.preventDefault(),b.focus()):document.activeElement===b&&(n.preventDefault(),y.focus())};return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h),p.current&&p.current.focus()}},[t,r]),e.jsx("div",{ref:m,className:`wim-focus-trap ${g}`,children:a})};u.propTypes={children:d.node.isRequired,active:d.bool,autoFocus:d.bool,className:d.string};u.__docgenInfo={description:`フォーカスを特定の領域内に閉じ込めるためのユーティリティコンポーネント。\r
ダイアログやモーダルなどで使用します。`,methods:[],displayName:"FocusTrap",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"トラップされるコンテンツ。",type:{name:"node"}},active:{required:!1,tsType:{name:"boolean"},description:"トラップが有効かどうか。",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"マウント時に最初の要素にフォーカスするかどうか。",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const F={title:"Component/Utilities/FocusTrap",component:u,tags:[],parameters:{layout:"centered"}},i={render:a=>{const[t,r]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsx(o,{onClick:()=>r(!t),children:t?"Deactivate Focus Trap":"Activate Focus Trap"}),e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"},children:[e.jsx("p",{children:"Outside the trap"}),e.jsx(o,{children:"Outside Button"})]}),t&&e.jsx(u,{...a,active:t,children:e.jsxs("div",{style:{padding:"20px",border:"2px solid #007bff",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h3",{children:"Focus Trapped Area"}),e.jsx("p",{children:"Try tabbing through these elements. Focus will not leave this box."}),e.jsx(f,{placeholder:"First focusable"}),e.jsx(f,{placeholder:"Second focusable"}),e.jsx(o,{onClick:()=>r(!1),children:"Close Trap"})]})})]})}},c={args:{autoFocus:!0},render:a=>{const[t,r]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsx(o,{onClick:()=>r(!t),children:t?"Deactivate":"Activate with AutoFocus"}),t&&e.jsx(u,{...a,active:t,children:e.jsxs("div",{style:{padding:"20px",border:"2px solid #28a745",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h3",{children:"AutoFocus enabled"}),e.jsx(f,{placeholder:"I get focus automatically"}),e.jsx(o,{children:"Another element"}),e.jsx(o,{onClick:()=>r(!1),children:"Close"})]})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center"
    }}>\r
                <Button onClick={() => setActive(!active)}>\r
                    {active ? "Deactivate Focus Trap" : "Activate Focus Trap"}\r
                </Button>\r
\r
                <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>\r
                    <p>Outside the trap</p>\r
                    <Button>Outside Button</Button>\r
                </div>\r
\r
                {active && <FocusTrap {...args} active={active}>\r
                        <div style={{
          padding: "20px",
          border: "2px solid #007bff",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>\r
                            <h3>Focus Trapped Area</h3>\r
                            <p>Try tabbing through these elements. Focus will not leave this box.</p>\r
                            <Input placeholder="First focusable" />\r
                            <Input placeholder="Second focusable" />\r
                            <Button onClick={() => setActive(false)}>Close Trap</Button>\r
                        </div>\r
                    </FocusTrap>}\r
            </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  render: args => {
    const [active, setActive] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center"
    }}>\r
                <Button onClick={() => setActive(!active)}>\r
                    {active ? "Deactivate" : "Activate with AutoFocus"}\r
                </Button>\r
\r
                {active && <FocusTrap {...args} active={active}>\r
                        <div style={{
          padding: "20px",
          border: "2px solid #28a745",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>\r
                            <h3>AutoFocus enabled</h3>\r
                            <Input placeholder="I get focus automatically" />\r
                            <Button>Another element</Button>\r
                            <Button onClick={() => setActive(false)}>Close</Button>\r
                        </div>\r
                    </FocusTrap>}\r
            </div>;
  }
}`,...c.parameters?.docs?.source}}};const T=["Default","AutoFocus"],R=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:c,Default:i,__namedExportsOrder:T,default:F},Symbol.toStringTag,{value:"Module"}));export{c as A,i as D,R as F};
