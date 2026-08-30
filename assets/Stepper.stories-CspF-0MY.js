"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{Yt as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Icon-DKSRBrcV.js";var f=e({CustomIcons:()=>x,Default:()=>_,ErrorStatus:()=>b,Interactive:()=>S,LabelVertical:()=>y,Vertical:()=>v,__namedExportsOrder:()=>C,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{p=n(r(),1),s(),a(),u(),m=o(),h={title:`Components/Navigation Elements/Stepper`,component:l,parameters:{layout:`padded`},tags:[],argTypes:{current:{control:`number`},direction:{control:`radio`,options:[`horizontal`,`vertical`]},labelPlacement:{control:`radio`,options:[`horizontal`,`vertical`]},intent:{control:`select`,options:[`wait`,`process`,`finish`,`error`]}}},g=()=>{let{t:e}=i(c);return[{title:e(`story.stepper_finished`),description:e(`story.stepper_desc`)},{title:e(`story.stepper_in_progress`),description:e(`story.stepper_desc`)},{title:e(`story.stepper_waiting`),description:e(`story.stepper_desc`)}]},_={render:function(e){let t=g();return(0,m.jsx)(l,{...e,steps:t,current:1})}},v={render:function(e){let t=g();return(0,m.jsx)(l,{...e,steps:t,current:1})},args:{direction:`vertical`}},y={render:function(e){let t=g();return(0,m.jsx)(l,{...e,steps:t,current:1})},args:{labelPlacement:`vertical`}},b={render:function(e){let t=g();return(0,m.jsx)(l,{...e,steps:t,current:1})},args:{intent:`error`}},x={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,steps:[{title:t(`story.stepper_login`),icon:(0,m.jsx)(d,{name:`EyeIcon`,size:`sm`})},{title:t(`story.stepper_verification`),icon:(0,m.jsx)(d,{name:`LoadingIcon`,size:`sm`})},{title:t(`story.stepper_pay`),icon:(0,m.jsx)(d,{name:`StarIcon`,size:`sm`})},{title:t(`story.stepper_done`),icon:(0,m.jsx)(d,{name:`CheckIcon`,size:`sm`})}],current:1})}},S={render:e=>{let{t}=i(c),[n,r]=(0,p.useState)(0),a=Array.from({length:4},(e,n)=>({title:`${t(`story.stepper_step`)} ${n+1}`,description:`${t(`story.stepper_step_desc`)} ${n+1}`}));return(0,m.jsx)(l,{...e,steps:a,current:n,onChange:e=>r(e)})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    direction: "vertical"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    labelPlacement: "vertical"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    intent: "error"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Vertical`,`LabelVertical`,`ErrorStatus`,`CustomIcons`,`Interactive`]}));w();export{x as CustomIcons,_ as Default,b as ErrorStatus,S as Interactive,y as LabelVertical,v as Vertical,C as __namedExportsOrder,h as default,w as n,f as t};