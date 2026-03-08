import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-DQwmcauy.js";import{T as i}from"./Transition-lFCC-9-p.js";import{B as d}from"./Button-r7Kxqflo.js";import{S as a}from"./Stack-DxnhnMJF.js";import{C as c}from"./Card-BvDC_Zfi.js";import{C as m}from"./Container-kARQ7XJ_.js";import{u as f}from"./useTranslation-CZ9vchf1.js";const p={title:"Components/Utilities/Transition",component:i,parameters:{layout:"centered"},tags:[]},n={render:()=>{const[t,s]=l.useState(!1),{t:r}=f(["docs","common","components"]);return e.jsx(m,{size:"sm",children:e.jsxs(a,{align:"center",gap:"xl",py:"xl",children:[e.jsx(d,{animateWidth:!0,priority:"primary",onClick:()=>s(!t),label:r(t?"story_transition_hide_content":"story_transition_show_content")}),e.jsx(a,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx(c,{variant:"elevated",padding:"lg",style:{background:"var(--wim-color-surface, #ffffff)",border:"2px solid var(--wim-color-primary, #3b82f6)",color:"var(--wim-color-text-primary, #1e293b)",fontWeight:"bold",minWidth:"150px",textAlign:"center"},children:"Fade Content!"})})})]})})}},o={render:()=>{const[t,s]=l.useState(!1),{t:r}=f(["docs","common","components"]);return e.jsx(m,{size:"sm",children:e.jsxs(a,{align:"center",gap:"xl",py:"xl",children:[e.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),e.jsx(d,{animateWidth:!0,priority:"primary",onClick:()=>s(!t),label:r(t?"story_transition_hide_slide":"story_transition_show_slide")}),e.jsx(a,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:e.jsx(c,{variant:"outline",padding:"md",children:"Slide!"})})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Container size="sm">\r
        <Stack align="center" gap="xl" py="xl">\r
          <Button animateWidth priority="primary" onClick={() => setShow(!show)} label={show ? t("story_transition_hide_content") : t("story_transition_show_content")} />\r
          <Stack h={100} align="center" justify="center">\r
            <Transition show={show} enter="fade-enter" enterFrom="fade-enter-from" enterTo="fade-enter-to" leave="fade-leave" leaveFrom="fade-leave-from" leaveTo="fade-leave-to">\r
              <Card variant="elevated" padding="lg" style={{
              background: "var(--wim-color-surface, #ffffff)",
              border: "2px solid var(--wim-color-primary, #3b82f6)",
              color: "var(--wim-color-text-primary, #1e293b)",
              fontWeight: "bold",
              minWidth: "150px",
              textAlign: "center"
            }}>\r
                Fade Content!\r
              </Card>\r
            </Transition>\r
          </Stack>\r
        </Stack>\r
      </Container>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Container size="sm">\r
        <Stack align="center" gap="xl" py="xl">\r
          <style>{\`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                \`}</style>\r
          <Button animateWidth priority="primary" onClick={() => setShow(!show)} label={show ? t("story_transition_hide_slide") : t("story_transition_show_slide")} />\r
          <Stack h={100} align="center" justify="center">\r
            <Transition show={show} enter="slide-enter" enterFrom="slide-enter-from" enterTo="slide-enter-to" leave="slide-leave" leaveFrom="slide-leave-from" leaveTo="slide-leave-to">\r
              <Card variant="outline" padding="md">\r
                Slide!\r
              </Card>\r
            </Transition>\r
          </Stack>\r
        </Stack>\r
      </Container>;
  }
}`,...o.parameters?.docs?.source}}};const h=["Fade","Slide"],j=Object.freeze(Object.defineProperty({__proto__:null,Fade:n,Slide:o,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{n as F,o as S,j as T};
