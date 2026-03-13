import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CKKDYfjM.js";import{T as i}from"./Transition-CnOUIezH.js";import{B as d}from"./Button-BLRjZ0Hy.js";import{S as s}from"./Stack-CIvwB1Gt.js";import{C as c}from"./Card-b00kOTXu.js";import{C as m}from"./Container-CDZgxNGf.js";import{u as p}from"./useTranslation-D80Uyf_x.js";const _={title:"Components/Internal/Transition",component:i,parameters:{layout:"centered"}},r={render:()=>{const[t,a]=l.useState(!1),{t:n}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(m,{size:"sm",children:e.jsxs(s,{align:"center",gap:"xl",py:"xl",children:[e.jsx(d,{animateWidth:!0,priority:"primary",onClick:()=>a(!t),label:n(t?"story_transition_hide_content":"story_transition_show_content")}),e.jsx(s,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx(c,{variant:"elevated",padding:"lg",style:{background:"var(--wim-color-surface, #ffffff)",border:"2px solid var(--wim-color-primary, #3b82f6)",color:"var(--wim-color-text-primary, #1e293b)",fontWeight:"bold",minWidth:"150px",textAlign:"center"},children:n("story_transition_fade_content")})})})]})})}},o={render:()=>{const[t,a]=l.useState(!1),{t:n}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(m,{size:"sm",children:e.jsxs(s,{align:"center",gap:"xl",py:"xl",children:[e.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),e.jsx(d,{animateWidth:!0,priority:"primary",onClick:()=>a(!t),label:n(t?"story_transition_hide_slide":"story_transition_show_slide")}),e.jsx(s,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:e.jsx(c,{variant:"outline",padding:"md",children:n("story_transition_slide_content")})})})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
                {t("story_transition_fade_content")}\r
              </Card>\r
            </Transition>\r
          </Stack>\r
        </Stack>\r
      </Container>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
                {t("story_transition_slide_content")}\r
              </Card>\r
            </Transition>\r
          </Stack>\r
        </Stack>\r
      </Container>;
  }
}`,...o.parameters?.docs?.source}}};const f=["Fade","Slide"],j=Object.freeze(Object.defineProperty({__proto__:null,Fade:r,Slide:o,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{r as F,o as S,j as T};
