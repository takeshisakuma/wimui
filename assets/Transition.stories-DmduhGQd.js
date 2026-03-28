import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as d}from"./iframe-Pu0u3y-C.js";import{T as i}from"./Transition-DcZn-URG.js";import{B as c}from"./Button-Dvtex6wN.js";import{S as a}from"./Stack-DDc2bC9I.js";import{C as m}from"./Card-TpkPIXll.js";import{C as f}from"./Container-BDkrcBVB.js";import{u as p}from"./useTranslation-BwuRHsYM.js";const h={title:"Components/Internal/Transition",component:i,parameters:{layout:"centered"}},n={render:()=>{const[t,s]=l.useState(!1),{t:r}=p(d);return e.jsx(f,{size:"sm",children:e.jsxs(a,{align:"center",gap:"xl",py:"xl",children:[e.jsx(c,{animateWidth:!0,priority:"primary",onClick:()=>s(!t),label:r(t?"story_transition_hide_content":"story_transition_show_content")}),e.jsx(a,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx(m,{variant:"elevated",padding:"lg",style:{backgroundColor:"var(--wim-color-surface, #ffffff)",border:"2px solid",borderColor:"var(--wim-color-primary, #3b82f6)",color:"var(--wim-color-text-primary, #1e293b)",fontWeight:"bold",minWidth:"150px",textAlign:"center"},children:r("story_transition_fade_content")})})})]})})}},o={render:()=>{const[t,s]=l.useState(!1),{t:r}=p(d);return e.jsx(f,{size:"sm",children:e.jsxs(a,{align:"center",gap:"xl",py:"xl",children:[e.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),e.jsx(c,{animateWidth:!0,priority:"primary",onClick:()=>s(!t),label:r(t?"story_transition_hide_slide":"story_transition_show_slide")}),e.jsx(a,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:e.jsx(m,{variant:"outline",padding:"md",children:r("story_transition_slide_content")})})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm">
        <Stack align="center" gap="xl" py="xl">
          <Button animateWidth priority="primary" onClick={() => setShow(!show)} label={show ? t("story_transition_hide_content") : t("story_transition_show_content")} />
          <Stack h={100} align="center" justify="center">
            <Transition show={show} enter="fade-enter" enterFrom="fade-enter-from" enterTo="fade-enter-to" leave="fade-leave" leaveFrom="fade-leave-from" leaveTo="fade-leave-to">
              <Card variant="elevated" padding="lg" style={{
              backgroundColor: "var(--wim-color-surface, #ffffff)",
              border: "2px solid",
              borderColor: "var(--wim-color-primary, #3b82f6)",
              color: "var(--wim-color-text-primary, #1e293b)",
              fontWeight: "bold",
              minWidth: "150px",
              textAlign: "center"
            }}>
                {t("story_transition_fade_content")}
              </Card>
            </Transition>
          </Stack>
        </Stack>
      </Container>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm">
        <Stack align="center" gap="xl" py="xl">
          <style>{\`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                \`}</style>
          <Button animateWidth priority="primary" onClick={() => setShow(!show)} label={show ? t("story_transition_hide_slide") : t("story_transition_show_slide")} />
          <Stack h={100} align="center" justify="center">
            <Transition show={show} enter="slide-enter" enterFrom="slide-enter-from" enterTo="slide-enter-to" leave="slide-leave" leaveFrom="slide-leave-from" leaveTo="slide-leave-to">
              <Card variant="outline" padding="md">
                {t("story_transition_slide_content")}
              </Card>
            </Transition>
          </Stack>
        </Stack>
      </Container>;
  }
}`,...o.parameters?.docs?.source}}};const y=["Fade","Slide"],j=Object.freeze(Object.defineProperty({__proto__:null,Fade:n,Slide:o,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{n as F,o as S,j as T};
