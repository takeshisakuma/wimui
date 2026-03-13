import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-Dzm9idsv.js";import{T as i}from"./Transition-BraHJ-yR.js";import{B as d}from"./Button-D6_v7r4g.js";import{S as o}from"./Stack-5YHgLLrt.js";import{C as c}from"./Card-rNTgWrcp.js";import{C as m}from"./Container-CXq2CXv2.js";import{A as f}from"./i18nConstants-fBKvcUJT.js";import{u as p}from"./useTranslation-BfYXAya8.js";const h={title:"Components/Internal/Transition",component:i,parameters:{layout:"centered"}},n={render:()=>{const[t,s]=l.useState(!1),{t:r}=p(f);return e.jsx(m,{size:"sm",children:e.jsxs(o,{align:"center",gap:"xl",py:"xl",children:[e.jsx(d,{animateWidth:!0,priority:"primary",onClick:()=>s(!t),label:r(t?"story_transition_hide_content":"story_transition_show_content")}),e.jsx(o,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx(c,{variant:"elevated",padding:"lg",style:{background:"var(--wim-color-surface, #ffffff)",border:"2px solid var(--wim-color-primary, #3b82f6)",color:"var(--wim-color-text-primary, #1e293b)",fontWeight:"bold",minWidth:"150px",textAlign:"center"},children:r("story_transition_fade_content")})})})]})})}},a={render:()=>{const[t,s]=l.useState(!1),{t:r}=p(f);return e.jsx(m,{size:"sm",children:e.jsxs(o,{align:"center",gap:"xl",py:"xl",children:[e.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),e.jsx(d,{animateWidth:!0,priority:"primary",onClick:()=>s(!t),label:r(t?"story_transition_hide_slide":"story_transition_show_slide")}),e.jsx(o,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:e.jsx(c,{variant:"outline",padding:"md",children:r("story_transition_slide_content")})})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...a.parameters?.docs?.source}}};const y=["Fade","Slide"],C=Object.freeze(Object.defineProperty({__proto__:null,Fade:n,Slide:a,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{n as F,a as S,C as T};
