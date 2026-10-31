"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-DzWR_e8l.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Stack-SbfzwNKR.js";import{n as d,t as f}from"./Button-C-16RMzV.js";import{n as p,t as m}from"./Spinner-Cfj4svZp.js";var h=n({AppearsAfterAction:()=>C,Colors:()=>b,Default:()=>y,Sizes:()=>x,WithLabel:()=>S,__namedExportsOrder:()=>w,default:()=>v}),g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{g=e(r(),1),a(),o(),d(),p(),l(),_=c(),v={title:`Components/Loading States/Spinner`,component:m,tags:[],argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`currentColor`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},labelPosition:{control:`radio`,options:[`right`,`bottom`]}}},y={render:function(e){let{t}=i(s);return(0,_.jsx)(m,{...e,label:t(`story.spinner_label_loading`)})}},b={render:e=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,_.jsx)(m,{...e,color:`primary`}),(0,_.jsx)(m,{...e,color:`secondary`}),(0,_.jsx)(m,{...e,color:`success`}),(0,_.jsx)(m,{...e,color:`warning`}),(0,_.jsx)(m,{...e,color:`danger`}),(0,_.jsx)(m,{...e,color:`neutral`})]})},x={render:e=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,_.jsx)(m,{...e,size:`sm`}),(0,_.jsx)(m,{...e,size:`md`}),(0,_.jsx)(m,{...e,size:`lg`}),(0,_.jsx)(m,{...e,size:`xl`})]})},S={render:function(e){let{t}=i(s);return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,_.jsx)(m,{...e,label:t(`story.spinner_loading_right`),labelPosition:`right`}),(0,_.jsx)(m,{...e,label:t(`story.spinner_loading_bottom`),labelPosition:`bottom`})]})}},C={render:function(e){let{t}=i(s),[n,r]=g.useState(!1);return(0,_.jsxs)(u,{gap:`md`,align:`start`,children:[(0,_.jsx)(f,{onClick:()=>r(!0),disabled:n,children:t(`story.spinner_load_report`)}),n&&(0,_.jsx)(m,{...e,label:t(`story.spinner_label_loading`)})]})}},w=[`Default`,`Colors`,`Sizes`,`WithLabel`,`AppearsAfterAction`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Spinner {...args} label={t("story.spinner_label_loading")} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Spinner {...args} color="primary" />
      <Spinner {...args} color="secondary" />
      <Spinner {...args} color="success" />
      <Spinner {...args} color="warning" />
      <Spinner {...args} color="danger" />
      <Spinner {...args} color="neutral" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
      <Spinner {...args} size="xl" />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px"
    }}>
      <Spinner {...args} label={t("story.spinner_loading_right")} labelPosition="right" />
      <Spinner {...args} label={t("story.spinner_loading_bottom")} labelPosition="bottom" />
    </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = React.useState(false);
    return <Stack gap="md" align="start">
        <Button onClick={() => setLoading(true)} disabled={loading}>
          {t("story.spinner_load_report")}
        </Button>
        {loading && <Spinner {...args} label={t("story.spinner_label_loading")} />}
      </Stack>;
  }
}`,...C.parameters?.docs?.source}}}})))()}export{S as a,h as i,y as n,T as o,x as r,b as t};