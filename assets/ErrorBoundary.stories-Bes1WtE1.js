"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Container-DHRWDfGF.js";import{n as d,t as f}from"./Stack-CrCPoxQ1.js";import{n as p,t as m}from"./Button-DSrkNfg0.js";import{n as h,t as g}from"./Alert-ClaCXHH4.js";import{n as _,t as v}from"./ErrorBoundary-CVbgAeR4.js";var y=n({CustomFallback:()=>T,Default:()=>w,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E;function D(){return(D=t((()=>{b=e(r(),1),a(),o(),h(),p(),l(),_(),d(),x=c(),S={title:`Components/Utilities/ErrorBoundary`,component:v,parameters:{layout:`centered`},tags:[]},C=()=>{let{t:e}=i(s);throw Error(e(`story.errorboundary_throw_msg`))},w={render:function(){let[e,t]=(0,b.useState)(!1),{t:n}=i(s);return(0,x.jsx)(u,{size:`sm`,py:`xl`,children:(0,x.jsxs)(f,{align:`center`,gap:`lg`,children:[(0,x.jsx)(`p`,{children:n(`story.errorboundary_desc`)}),(0,x.jsx)(m,{onClick:()=>t(!0),variant:`solid`,children:n(`story.errorboundary_btn_trigger`)}),(0,x.jsx)(v,{onReset:()=>t(!1),children:e?(0,x.jsx)(C,{}):(0,x.jsx)(g,{intent:`info`,title:n(`story.errorboundary_status_ok`)})})]})})}},T={render:function(){let[e,t]=(0,b.useState)(!1),{t:n}=i(s);return(0,x.jsx)(u,{size:`sm`,py:`xl`,children:(0,x.jsxs)(f,{align:`center`,gap:`lg`,children:[(0,x.jsx)(m,{onClick:()=>t(!0),variant:`solid`,children:n(`story.errorboundary_btn_trigger_custom`)}),(0,x.jsx)(v,{onReset:()=>t(!1),fallback:(e,t,r)=>(0,x.jsx)(g,{intent:`danger`,title:n(`story.errorboundary_oops`),description:e.message,children:(0,x.jsx)(`div`,{style:{marginTop:`1rem`},children:(0,x.jsx)(m,{onClick:r,variant:`outline`,size:`sm`,children:n(`story.errorboundary_btn_reset`)})})}),children:e?(0,x.jsx)(C,{}):(0,x.jsx)(g,{intent:`success`,title:n(`story.errorboundary_status_stable`)})})]})})}},E=[`Default`,`CustomFallback`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <p>{t("story.errorboundary_desc")}</p>
          <Button onClick={() => setShouldThrow(true)} variant="solid">{t("story.errorboundary_btn_trigger")}</Button>
          <ErrorBoundary onReset={() => setShouldThrow(false)}>
            {shouldThrow ? <BuggyComponent /> : <Alert intent="info" title={t("story.errorboundary_status_ok")} />}
          </ErrorBoundary>
        </Stack>
      </Container>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <Button onClick={() => setShouldThrow(true)} variant="solid">{t("story.errorboundary_btn_trigger_custom")}</Button>
          <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={(error, _info, reset) => <Alert intent="danger" title={t("story.errorboundary_oops")} description={error.message}>
                <div style={{
            marginTop: "1rem"
          }}>
                  <Button onClick={reset} variant="outline" size="sm">{t("story.errorboundary_btn_reset")}</Button>
                </div>
              </Alert>}>
            {shouldThrow ? <BuggyComponent /> : <Alert intent="success" title={t("story.errorboundary_status_stable")} />}
          </ErrorBoundary>
        </Stack>
      </Container>;
  }
}`,...T.parameters?.docs?.source}}}})))()}export{D as i,w as n,y as r,T as t};