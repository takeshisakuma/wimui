import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-CQ0Ubeji.js";import{c as f}from"./index-CUeFpPxj.js";import{B as q}from"./Button-Dh_X0-gQ.js";const x=({show:e,children:s,enter:i="",enterFrom:a="",enterTo:d="",leave:o="",leaveFrom:h="",leaveTo:r="",unmount:c=!0,className:g})=>{const[w,T]=n.useState(e),[S,v]=n.useState("idle"),[j,l]=n.useState(""),y=n.useRef(null),b=n.useRef(!0);n.useLayoutEffect(()=>{if(b.current){b.current=!1;return}if(e){T(!0),v("entering"),l(f(i,a)),y.current?.offsetHeight;const u=requestAnimationFrame(()=>{l(f(i,d))});return()=>cancelAnimationFrame(u)}else{v("leaving"),l(f(o,h)),y.current?.offsetHeight;const u=requestAnimationFrame(()=>{l(f(o,r))});return()=>cancelAnimationFrame(u)}},[e,i,a,d,o,h,r]);const R=u=>{u.target===y.current&&(S==="entering"?(v("idle"),l("")):S==="leaving"&&(v("idle"),l(""),c&&T(!1)))};return!w&&c?null:t.jsx("div",{ref:y,className:f(g,j,{"wim-transition-hidden":!e&&S==="idle"&&!c}),onTransitionEnd:R,children:s})};x.__docgenInfo={description:`A component that handles simple CSS transitions for its children.\r
It manages applying classes at the right moments (enter, enterFrom, enterTo, etc.).`,methods:[],displayName:"Transition",props:{show:{required:!0,tsType:{name:"boolean"},description:"Whether the component should be shown or hidden"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be transitioned"},enter:{required:!1,tsType:{name:"string"},description:"Transition classes applied when entering",defaultValue:{value:'""',computed:!1}},enterFrom:{required:!1,tsType:{name:"string"},description:"Startup classes for the entry transition",defaultValue:{value:'""',computed:!1}},enterTo:{required:!1,tsType:{name:"string"},description:"Ending classes for the entry transition",defaultValue:{value:'""',computed:!1}},leave:{required:!1,tsType:{name:"string"},description:"Transition classes applied when leaving",defaultValue:{value:'""',computed:!1}},leaveFrom:{required:!1,tsType:{name:"string"},description:"Startup classes for the leave transition",defaultValue:{value:'""',computed:!1}},leaveTo:{required:!1,tsType:{name:"string"},description:"Ending classes for the leave transition",defaultValue:{value:'""',computed:!1}},unmount:{required:!1,tsType:{name:"boolean"},description:"Whether to unmount the children when hidden",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names for the wrapper"}}};const A={title:"Component/Utilities/Transition",component:x,parameters:{layout:"centered"},tags:[]},F=({show:e,onClick:s,label:i})=>{const a=n.useRef(null),[d,o]=n.useState("auto");return n.useLayoutEffect(()=>{if(a.current){const h=a.current.offsetWidth;o(h);const r=a.current,c=r.style.width;r.style.width="auto",r.style.minWidth="0";const g=r.offsetWidth;r.style.width=c;const w=requestAnimationFrame(()=>{o(g)});return()=>cancelAnimationFrame(w)}},[i]),t.jsx(q,{ref:a,onClick:s,label:i,priority:"primary",style:{transition:"width 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s, background-color 0.2s",width:d==="auto"?"auto":`${d}px`,minWidth:"0",overflow:"hidden",whiteSpace:"nowrap"}})},m={render:()=>{const[e,s]=n.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[t.jsx(F,{show:e,onClick:()=>s(!e),label:e?"非表示にする":"コンテンツを表示する"}),t.jsx("div",{style:{height:"100px"},children:t.jsx(x,{show:e,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:t.jsx("div",{style:{width:"100px",height:"100px",background:"var(--wim-primary, #0070f3)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:"Fade!"})})})]})}},p={render:()=>{const[e,s]=n.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[t.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),t.jsx(F,{show:e,onClick:()=>s(!e),label:e?"スライドを閉じる":"スライドコンテンツを展開"}),t.jsx("div",{style:{height:"100px"},children:t.jsx(x,{show:e,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:t.jsx("div",{style:{padding:"20px",background:"#f0f0f0",borderRadius:"12px",border:"1px solid #ddd"},children:"Slide!"})})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px"
    }}>\r
                <AnimatedButton show={show} onClick={() => setShow(!show)} label={show ? "非表示にする" : "コンテンツを表示する"} />\r
                <div style={{
        height: "100px"
      }}>\r
                    <Transition show={show} enter="fade-enter" enterFrom="fade-enter-from" enterTo="fade-enter-to" leave="fade-leave" leaveFrom="fade-leave-from" leaveTo="fade-leave-to">\r
                        <div style={{
            width: "100px",
            height: "100px",
            background: "var(--wim-primary, #0070f3)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>\r
                            Fade!\r
                        </div>\r
                    </Transition>\r
                </div>\r
            </div>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px"
    }}>\r
                <style>{\`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                \`}</style>\r
                <AnimatedButton show={show} onClick={() => setShow(!show)} label={show ? "スライドを閉じる" : "スライドコンテンツを展開"} />\r
                <div style={{
        height: "100px"
      }}>\r
                    <Transition show={show} enter="slide-enter" enterFrom="slide-enter-from" enterTo="slide-enter-to" leave="slide-leave" leaveFrom="slide-leave-from" leaveTo="slide-leave-to">\r
                        <div style={{
            padding: "20px",
            background: "#f0f0f0",
            borderRadius: "12px",
            border: "1px solid #ddd"
          }}>\r
                            Slide!\r
                        </div>\r
                    </Transition>\r
                </div>\r
            </div>;
  }
}`,...p.parameters?.docs?.source}}};const C=["Fade","Slide"],Y=Object.freeze(Object.defineProperty({__proto__:null,Fade:m,Slide:p,__namedExportsOrder:C,default:A},Symbol.toStringTag,{value:"Module"}));export{m as F,p as S,Y as T};
