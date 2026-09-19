"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,Sr as a,Tr as o,ur as s,xr as c}from"./iframe-wf1-Tomv.js";import{t as l,zi as u}from"./src--JUR9phw.js";import{t as d}from"./Transition-B9Pnh588.js";import{t as f}from"./Stack-CSVZoS0F.js";import{t as p}from"./Card-B_e_84jO.js";import{t as m}from"./Button-BgC4JuQN.js";var h=e({Fade:()=>y,Slide:()=>b,__namedExportsOrder:()=>x,default:()=>v}),g,_,v,y,b,x,S=t((()=>{g=n(r(),1),i(),a(),l(),_=s(),v={title:`Components/Internal/Transition`,component:d,parameters:{layout:`centered`}},y={render:()=>{let[e,t]=(0,g.useState)(!1),{t:n}=o(c);return(0,_.jsx)(u,{size:`sm`,children:(0,_.jsxs)(f,{align:`center`,gap:`xl`,py:`xl`,children:[(0,_.jsx)(m,{animateWidth:!0,variant:`solid`,onClick:()=>t(!e),children:n(e?`story.transition_hide_content`:`story.transition_show_content`)}),(0,_.jsx)(f,{h:100,align:`center`,justify:`center`,children:(0,_.jsx)(d,{show:e,enter:`fade-enter`,enterFrom:`fade-enter-from`,enterTo:`fade-enter-to`,leave:`fade-leave`,leaveFrom:`fade-leave-from`,leaveTo:`fade-leave-to`,children:(0,_.jsx)(p,{variant:`elevated`,padding:`lg`,style:{backgroundColor:`var(--wim-color-surface)`,border:`2px solid`,borderColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-primary)`,fontWeight:`bold`,minWidth:`150px`,textAlign:`center`},children:n(`story.transition_fade_content`)})})})]})})}},b={render:()=>{let[e,t]=(0,g.useState)(!1),{t:n}=o(c);return(0,_.jsx)(u,{size:`sm`,children:(0,_.jsxs)(f,{align:`center`,gap:`xl`,py:`xl`,children:[(0,_.jsx)(`style`,{children:`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}),(0,_.jsx)(m,{animateWidth:!0,variant:`solid`,onClick:()=>t(!e),children:n(e?`story.transition_hide_slide`:`story.transition_show_slide`)}),(0,_.jsx)(f,{h:100,align:`center`,justify:`center`,children:(0,_.jsx)(d,{show:e,enter:`slide-enter`,enterFrom:`slide-enter-from`,enterTo:`slide-enter-to`,leave:`slide-leave`,leaveFrom:`slide-leave-from`,leaveTo:`slide-leave-to`,children:(0,_.jsx)(p,{variant:`outline`,padding:`md`,children:n(`story.transition_slide_content`)})})})]})})}},x=[`Fade`,`Slide`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}}));S();export{y as Fade,b as Slide,x as __namedExportsOrder,v as default,S as n,h as t};