"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Container-DHRWDfGF.js";import{n as d,t as f}from"./Transition-GvN4lHa1.js";import{n as p,t as m}from"./Stack-CrCPoxQ1.js";import{n as h,t as g}from"./Card-CbECOvhR.js";import{n as _,t as v}from"./Button-DSrkNfg0.js";var y=n({Fade:()=>C,Slide:()=>w,__namedExportsOrder:()=>T,default:()=>S}),b,x,S,C,w,T;function E(){return(E=t((()=>{b=e(r(),1),a(),o(),_(),h(),l(),p(),d(),x=c(),S={title:`Components/Internal/Transition`,component:f,parameters:{layout:`centered`}},C={render:()=>{let[e,t]=(0,b.useState)(!1),{t:n}=i(s);return(0,x.jsx)(u,{size:`sm`,children:(0,x.jsxs)(m,{align:`center`,gap:`xl`,py:`xl`,children:[(0,x.jsx)(v,{animateWidth:!0,variant:`solid`,onClick:()=>t(!e),children:n(e?`story.transition_hide_content`:`story.transition_show_content`)}),(0,x.jsx)(m,{h:100,align:`center`,justify:`center`,children:(0,x.jsx)(f,{show:e,enter:`fade-enter`,enterFrom:`fade-enter-from`,enterTo:`fade-enter-to`,leave:`fade-leave`,leaveFrom:`fade-leave-from`,leaveTo:`fade-leave-to`,children:(0,x.jsx)(g,{variant:`elevated`,padding:`lg`,style:{backgroundColor:`var(--wim-color-surface)`,border:`2px solid`,borderColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-primary)`,fontWeight:`bold`,minWidth:`150px`,textAlign:`center`},children:n(`story.transition_fade_content`)})})})]})})}},w={render:()=>{let[e,t]=(0,b.useState)(!1),{t:n}=i(s);return(0,x.jsx)(u,{size:`sm`,children:(0,x.jsxs)(m,{align:`center`,gap:`xl`,py:`xl`,children:[(0,x.jsx)(`style`,{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),(0,x.jsx)(v,{animateWidth:!0,variant:`solid`,onClick:()=>t(!e),children:n(e?`story.transition_hide_slide`:`story.transition_show_slide`)}),(0,x.jsx)(m,{h:100,align:`center`,justify:`center`,children:(0,x.jsx)(f,{show:e,enter:`slide-enter`,enterFrom:`slide-enter-from`,enterTo:`slide-enter-to`,leave:`slide-leave`,leaveFrom:`slide-leave-from`,leaveTo:`slide-leave-to`,children:(0,x.jsx)(g,{variant:`outline`,padding:`md`,children:n(`story.transition_slide_content`)})})})]})})}},T=[`Fade`,`Slide`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm">
        <Stack align="center" gap="xl" py="xl">
          <Button animateWidth variant="solid" onClick={() => setShow(!show)}>{show ? t("story.transition_hide_content") : t("story.transition_show_content")}</Button>
          <Stack h={100} align="center" justify="center">
            <Transition show={show} enter="fade-enter" enterFrom="fade-enter-from" enterTo="fade-enter-to" leave="fade-leave" leaveFrom="fade-leave-from" leaveTo="fade-leave-to">
              <Card variant="elevated" padding="lg" style={{
              backgroundColor: "var(--wim-color-surface)",
              border: "2px solid",
              borderColor: "var(--wim-color-primary)",
              color: "var(--wim-color-text-primary)",
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
          <Button animateWidth variant="solid" onClick={() => setShow(!show)}>{show ? t("story.transition_hide_slide") : t("story.transition_show_slide")}</Button>
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
}`,...w.parameters?.docs?.source}}}})))()}export{E as i,w as n,y as r,C as t};