"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{Bn as l,In as u,Mi as d,t as f}from"./src-BE5jBQ9L.js";import{i as p}from"./List-C4WUy_aA.js";import{t as m}from"./Button-d-SlSJ4S.js";var h=e({CustomFallback:()=>x,Default:()=>b,__namedExportsOrder:()=>S,default:()=>v}),g,_,v,y,b,x,S,C=t((()=>{g=n(r(),1),s(),a(),f(),_=o(),v={title:`Components/Utilities/ErrorBoundary`,component:u,parameters:{layout:`centered`},tags:[]},y=()=>{let{t:e}=i(c);throw Error(e(`story.errorboundary_throw_msg`))},b={render:function(){let[e,t]=(0,g.useState)(!1),{t:n}=i(c);return(0,_.jsx)(d,{size:`sm`,py:`xl`,children:(0,_.jsxs)(p,{align:`center`,gap:`lg`,children:[(0,_.jsx)(`p`,{children:n(`story.errorboundary_desc`)}),(0,_.jsx)(m,{onClick:()=>t(!0),variant:`solid`,children:n(`story.errorboundary_btn_trigger`)}),(0,_.jsx)(u,{onReset:()=>t(!1),children:e?(0,_.jsx)(y,{}):(0,_.jsx)(l,{intent:`info`,title:n(`story.errorboundary_status_ok`)})})]})})}},x={render:function(){let[e,t]=(0,g.useState)(!1),{t:n}=i(c);return(0,_.jsx)(d,{size:`sm`,py:`xl`,children:(0,_.jsxs)(p,{align:`center`,gap:`lg`,children:[(0,_.jsx)(m,{onClick:()=>t(!0),variant:`solid`,children:n(`story.errorboundary_btn_trigger_custom`)}),(0,_.jsx)(u,{onReset:()=>t(!1),fallback:(e,t,r)=>(0,_.jsx)(l,{intent:`danger`,title:n(`story.errorboundary_oops`),description:e.message,children:(0,_.jsx)(`div`,{style:{marginTop:`1rem`},children:(0,_.jsx)(m,{onClick:r,variant:`outline`,size:`sm`,children:n(`story.errorboundary_btn_reset`)})})}),children:e?(0,_.jsx)(y,{}):(0,_.jsx)(l,{intent:`success`,title:n(`story.errorboundary_status_stable`)})})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CustomFallback`]}));C();export{x as CustomFallback,b as Default,S as __namedExportsOrder,v as default,C as n,h as t};