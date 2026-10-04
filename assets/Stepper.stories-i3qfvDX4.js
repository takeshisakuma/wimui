"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-B_89lpXW.js";import{n as d,t as f}from"./Stepper-DxP9dpnW.js";var p=n({CustomIcons:()=>C,Default:()=>v,ErrorStatus:()=>x,Intents:()=>S,Interactive:()=>w,LabelVertical:()=>b,Vertical:()=>y,__namedExportsOrder:()=>T,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{m=e(r(),1),a(),o(),l(),d(),h=c(),g={title:`Components/Navigation Elements/Stepper`,component:f,parameters:{layout:`padded`},tags:[],argTypes:{current:{control:`number`},direction:{control:`radio`,options:[`horizontal`,`vertical`]},labelPlacement:{control:`radio`,options:[`horizontal`,`vertical`]},intent:{control:`select`,options:[`wait`,`process`,`finish`,`error`]}}},_=()=>{let{t:e}=i(s);return[{title:e(`story.stepper_finished`),description:e(`story.stepper_desc_finished`)},{title:e(`story.stepper_in_progress`),description:e(`story.stepper_desc_progress`)},{title:e(`story.stepper_waiting`),description:e(`story.stepper_desc_waiting`)}]},v={render:function(e){let t=_();return(0,h.jsx)(f,{...e,steps:t,current:1})}},y={render:function(e){let t=_();return(0,h.jsx)(f,{...e,steps:t,current:1})},args:{direction:`vertical`}},b={render:function(e){let t=_();return(0,h.jsx)(f,{...e,steps:t,current:1})},args:{labelPlacement:`vertical`}},x={render:function(e){let t=_();return(0,h.jsx)(f,{...e,steps:t,current:1})},args:{intent:`error`}},S={render:function(e){let t=_();return(0,h.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-2xl)`},children:[`wait`,`process`,`finish`,`error`].map(n=>(0,h.jsx)(f,{...e,steps:t,current:1,intent:n},n))})}},C={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,steps:[{title:t(`story.stepper_login`),icon:(0,h.jsx)(u,{name:`EyeIcon`,size:`sm`})},{title:t(`story.stepper_verification`),icon:(0,h.jsx)(u,{name:`LoadingIcon`,size:`sm`})},{title:t(`story.stepper_pay`),icon:(0,h.jsx)(u,{name:`StarIcon`,size:`sm`})},{title:t(`story.stepper_done`),icon:(0,h.jsx)(u,{name:`CheckIcon`,size:`sm`})}],current:1})}},w={render:e=>{let{t}=i(s),[n,r]=(0,m.useState)(0),a=Array.from({length:4},(e,n)=>({title:`${t(`story.stepper_step`)} ${n+1}`,description:`${t(`story.stepper_step_desc`)} ${n+1}`}));return(0,h.jsx)(f,{...e,steps:a,current:n,onChange:e=>r(e)})}},T=[`Default`,`Vertical`,`LabelVertical`,`ErrorStatus`,`Intents`,`CustomIcons`,`Interactive`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    direction: "vertical"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    labelPlacement: "vertical"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    intent: "error"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-2xl)"
    }}>
        {(["wait", "process", "finish", "error"] as const).map(intent => <Stepper key={intent} {...args} steps={steps} current={1} intent={intent} />)}
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stepper {...args} steps={[{
      title: t("story.stepper_login"),
      icon: <Icon name="EyeIcon" size="sm" />
    }, {
      title: t("story.stepper_verification"),
      icon: <Icon name="LoadingIcon" size="sm" />
    }, {
      title: t("story.stepper_pay"),
      icon: <Icon name="StarIcon" size="sm" />
    }, {
      title: t("story.stepper_done"),
      icon: <Icon name="CheckIcon" size="sm" />
    }]} current={1} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [current, setCurrent] = useState(0);
    const steps = Array.from({
      length: 4
    }, (_, i) => ({
      title: \`\${t("story.stepper_step")} \${i + 1}\`,
      description: \`\${t("story.stepper_step_desc")} \${i + 1}\`
    }));
    return <Stepper {...args} steps={steps} current={current} onChange={index => setCurrent(index)} />;
  }
}`,...w.parameters?.docs?.source}}}})))()}export{b as a,E as c,w as i,x as n,p as o,S as r,y as s,C as t};