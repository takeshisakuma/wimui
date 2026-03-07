import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-8vWRHjs9.js";import{T as d}from"./Transition-B5oNmsxh.js";import{B as v}from"./Button-B2l21hRP.js";import{u as p}from"./useTranslation-oYtfLuBR.js";const w={title:"Components/Utilities/Transition",component:d,parameters:{layout:"centered"},tags:[]},f=({show:t,onClick:r,label:n})=>{const l=i.useRef(null),[c,m]=i.useState("auto");return i.useLayoutEffect(()=>{if(l.current){const h=l.current.offsetWidth;m(h);const o=l.current,u=o.style.width;o.style.width="auto",o.style.minWidth="0";const x=o.offsetWidth;o.style.width=u;const y=requestAnimationFrame(()=>{m(x)});return()=>cancelAnimationFrame(y)}},[n]),e.jsx(v,{ref:l,onClick:r,label:n,priority:"primary",style:{transition:"width 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s, background-color 0.2s",width:c==="auto"?"auto":`${c}px`,minWidth:"0",overflow:"hidden",whiteSpace:"nowrap"}})},s={render:()=>{const[t,r]=i.useState(!1),{t:n}=p(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsx(f,{show:t,onClick:()=>r(!t),label:n(t?"story_transition_hide_content":"story_transition_show_content")}),e.jsx("div",{style:{height:"100px"},children:e.jsx(d,{show:t,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx("div",{style:{width:"100px",height:"100px",background:"var(--wim-primary, #0070f3)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:"Fade!"})})})]})}},a={render:()=>{const[t,r]=i.useState(!1),{t:n}=p(["docs","common","components"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),e.jsx(f,{show:t,onClick:()=>r(!t),label:n(t?"story_transition_hide_slide":"story_transition_show_slide")}),e.jsx("div",{style:{height:"100px"},children:e.jsx(d,{show:t,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:e.jsx("div",{style:{padding:"20px",background:"#f0f0f0",borderRadius:"12px",border:"1px solid #ddd"},children:"Slide!"})})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px"
    }}>\r
        <AnimatedButton show={show} onClick={() => setShow(!show)} label={show ? t("story_transition_hide_content") : t("story_transition_show_content")} />\r
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
        <AnimatedButton show={show} onClick={() => setShow(!show)} label={show ? t("story_transition_hide_slide") : t("story_transition_show_slide")} />\r
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
}`,...a.parameters?.docs?.source}}};const g=["Fade","Slide"],F=Object.freeze(Object.defineProperty({__proto__:null,Fade:s,Slide:a,__namedExportsOrder:g,default:w},Symbol.toStringTag,{value:"Module"}));export{s as F,a as S,F as T};
