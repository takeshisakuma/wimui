import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as d}from"./iframe-BZoygCoD.js";import{T as i}from"./Transition-CfnhshCb.js";import{B as c}from"./Button-8yDbYZSB.js";import{S as o}from"./Stack-BIU3WEyy.js";import{C as m}from"./Card-7NdsTJx_.js";import{C as f}from"./Container-CT5xwKun.js";import{u as p}from"./useTranslation-CVcR0t5u.js";const h={title:"Components/Internal/Transition",component:i,parameters:{layout:"centered"}},r={render:()=>{const[t,s]=l.useState(!1),{t:n}=p(d);return e.jsx(f,{size:"sm",children:e.jsxs(o,{align:"center",gap:"xl",py:"xl",children:[e.jsx(c,{animateWidth:!0,variant:"filled",onClick:()=>s(!t),label:n(t?"story.transition_hide_content":"story.transition_show_content")}),e.jsx(o,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",children:e.jsx(m,{variant:"elevated",padding:"lg",style:{backgroundColor:"var(--wim-color-surface, #ffffff)",border:"2px solid",borderColor:"var(--wim-color-primary, #3b82f6)",color:"var(--wim-color-text-primary, #1e293b)",fontWeight:"bold",minWidth:"150px",textAlign:"center"},children:n("story.transition_fade_content")})})})]})})}},a={render:()=>{const[t,s]=l.useState(!1),{t:n}=p(d);return e.jsx(f,{size:"sm",children:e.jsxs(o,{align:"center",gap:"xl",py:"xl",children:[e.jsx("style",{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),e.jsx(c,{animateWidth:!0,variant:"filled",onClick:()=>s(!t),label:n(t?"story.transition_hide_slide":"story.transition_show_slide")}),e.jsx(o,{h:100,align:"center",justify:"center",children:e.jsx(i,{show:t,enter:"slide-enter",enterFrom:"slide-enter-from",enterTo:"slide-enter-to",leave:"slide-leave",leaveFrom:"slide-leave-from",leaveTo:"slide-leave-to",children:e.jsx(m,{variant:"outline",padding:"md",children:n("story.transition_slide_content")})})})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm">
        <Stack align="center" gap="xl" py="xl">
          <Button animateWidth variant="filled" onClick={() => setShow(!show)} label={show ? t("story.transition_hide_content") : t("story.transition_show_content")} />
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
                {t("story.transition_fade_content")}
              </Card>
            </Transition>
          </Stack>
        </Stack>
      </Container>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
          <Button animateWidth variant="filled" onClick={() => setShow(!show)} label={show ? t("story.transition_hide_slide") : t("story.transition_show_slide")} />
          <Stack h={100} align="center" justify="center">
            <Transition show={show} enter="slide-enter" enterFrom="slide-enter-from" enterTo="slide-enter-to" leave="slide-leave" leaveFrom="slide-leave-from" leaveTo="slide-leave-to">
              <Card variant="outline" padding="md">
                {t("story.transition_slide_content")}
              </Card>
            </Transition>
          </Stack>
        </Stack>
      </Container>;
  }
}`,...a.parameters?.docs?.source}}};const v=["Fade","Slide"],j=Object.freeze(Object.defineProperty({__proto__:null,Fade:r,Slide:a,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{r as F,a as S,j as T};
