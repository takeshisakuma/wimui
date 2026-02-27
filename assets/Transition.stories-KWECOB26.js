import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-DLp3Jz1D.js";import{T as l}from"./Transition-DoP7XyL0.js";import{B as v}from"./Button-Cr0oHLPg.js";const y={title:"Components/Utilities/Transition",component:l,parameters:{layout:"centered"},tags:[]},f=({show:t,onClick:n,label:d})=>{const i=a.useRef(null),[c,m]=a.useState("auto");return a.useLayoutEffect(()=>{if(i.current){const p=i.current.offsetWidth;m(p);const r=i.current,h=r.style.width;r.style.width="auto",r.style.minWidth="0";const u=r.offsetWidth;r.style.width=h;const x=requestAnimationFrame(()=>{m(u)});return()=>cancelAnimationFrame(x)}},[d]),e.jsx(v,{ref:i,onClick:n,label:d,priority:"primary",style:{transition:"width 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s, background-color 0.2s",width:c==="auto"?"auto":`${c}px`,minWidth:"0",overflow:"hidden",whiteSpace:"nowrap"}})},s={render:()=>{const[t,n]=a.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsx(f,{show:t,onClick:()=>n(!t),label:t?"非表示にする":"コンテンツを表示する"}),e.jsx("div",{style:{height:"100px"},children:e.jsx(l,{show:t,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx("div",{style:{width:"100px",height:"100px",background:"var(--wim-primary, #0070f3)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:"Fade!"})})})]})}},o={render:()=>{const[t,n]=a.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),e.jsx(f,{show:t,onClick:()=>n(!t),label:t?"スライドを閉じる":"スライドコンテンツを展開"}),e.jsx("div",{style:{height:"100px"},children:e.jsx(l,{show:t,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:e.jsx("div",{style:{padding:"20px",background:"#f0f0f0",borderRadius:"12px",border:"1px solid #ddd"},children:"Slide!"})})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Fade","Slide"],T=Object.freeze(Object.defineProperty({__proto__:null,Fade:s,Slide:o,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{s as F,o as S,T};
