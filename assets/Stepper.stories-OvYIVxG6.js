import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-DWTvJvSx.js";import{I as c}from"./Icon-CPLASYuL.js";import{r as z}from"./iframe-DtwnyzFc.js";import{u as I}from"./useTranslation-BJQcmf5i.js";const a=({steps:t=[],current:r=0,direction:s="horizontal",labelPlacement:y="horizontal",status:S="process",className:v,onChange:i})=>{const w=(n,o)=>o||(n<r?"finish":n===r?S:"wait"),b=(n,o,l)=>l||(o==="finish"?e.jsx(c,{name:"CheckIcon",size:"small"}):o==="error"?e.jsx(c,{name:"CloseIcon",size:"small"}):e.jsx("span",{children:n+1}));return e.jsx("div",{className:j("wim-stepper",`wim-stepper--${s}`,y==="vertical"&&"wim-stepper--label-vertical",v),children:t.map((n,o)=>{const l=w(o,n.status),g=!!i&&!n.disabled;return e.jsxs("div",{className:j("wim-stepper__item",`wim-stepper__item--${l}`,y==="vertical"&&"wim-stepper__item--label-vertical",n.disabled&&"wim-stepper__item--disabled"),onClick:()=>g&&i(o),style:{cursor:g?"pointer":"default"},role:"button",tabIndex:g?0:-1,onKeyDown:x=>{g&&(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),i(o))},children:[e.jsx("div",{className:"wim-stepper__line"}),e.jsx("div",{className:"wim-stepper__icon-container",children:b(o,l,n.icon)}),e.jsxs("div",{className:"wim-stepper__content",children:[e.jsx("span",{className:"wim-stepper__title",children:n.title}),n.description&&e.jsx("span",{className:"wim-stepper__description",children:n.description})]})]},o)})})};a.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!1,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:"Array of step configurations",defaultValue:{value:"[]",computed:!1}},current:{required:!1,tsType:{name:"number"},description:"Index of the current active step (0-indexed)",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Direction of the stepper",defaultValue:{value:'"horizontal"',computed:!1}},labelPlacement:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Placement of the labels",defaultValue:{value:'"horizontal"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"wait" | "process" | "finish" | "error"',elements:[{name:"literal",value:'"wait"'},{name:"literal",value:'"process"'},{name:"literal",value:'"finish"'},{name:"literal",value:'"error"'}]},description:"Status of the current step",defaultValue:{value:'"process"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"Callback function when a step is clicked (if applicable)"}}};const C={title:"Components/Navigation Elements/Stepper",component:a,parameters:{layout:"padded"},tags:[],argTypes:{current:{control:"number"},direction:{control:"radio",options:["horizontal","vertical"]},labelPlacement:{control:"radio",options:["horizontal","vertical"]},status:{control:"select",options:["wait","process","finish","error"]}}},h=()=>{const{t}=I(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return[{title:t("story_stepper_finished"),description:t("story_stepper_desc")},{title:t("story_stepper_in_progress"),description:t("story_stepper_desc")},{title:t("story_stepper_waiting"),description:t("story_stepper_desc")}]},p={render:function(r){const s=h();return e.jsx(a,{...r,steps:s,current:1})}},d={render:function(r){const s=h();return e.jsx(a,{...r,steps:s,current:1,direction:"vertical"})}},u={render:function(r){const s=h();return e.jsx(a,{...r,steps:s,current:1,labelPlacement:"vertical"})}},m={render:function(r){const s=h();return e.jsx(a,{...r,steps:s,current:1,status:"error"})}},_={render:function(r){const{t:s}=I(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...r,steps:[{title:s("story_stepper_login"),icon:e.jsx(c,{name:"EyeIcon",size:"small"})},{title:s("story_stepper_verification"),icon:e.jsx(c,{name:"LoadingIcon",size:"small"})},{title:s("story_stepper_pay"),icon:e.jsx(c,{name:"StarIcon",size:"small"})},{title:s("story_stepper_done"),icon:e.jsx(c,{name:"CheckIcon",size:"small"})}],current:1})}},f={render:t=>{const{t:r}=I(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[s,y]=z.useState(0),S=Array.from({length:4},(v,i)=>({title:`${r("story_stepper_step")} ${i+1}`,description:`${r("story_stepper_step_desc")} ${i+1}`}));return e.jsx(a,{...t,steps:S,current:s,onChange:v=>y(v)})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} direction="vertical" />;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} labelPlacement="vertical" />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} status="error" />;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Stepper {...args} steps={[{
      title: t("story_stepper_login"),
      icon: <Icon name="EyeIcon" size="small" />
    }, {
      title: t("story_stepper_verification"),
      icon: <Icon name="LoadingIcon" size="small" />
    }, {
      title: t("story_stepper_pay"),
      icon: <Icon name="StarIcon" size="small" />
    }, {
      title: t("story_stepper_done"),
      icon: <Icon name="CheckIcon" size="small" />
    }]} current={1} />;
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [current, setCurrent] = useState(0);
    const steps = Array.from({
      length: 4
    }, (_, i) => ({
      title: \`\${t("story_stepper_step")} \${i + 1}\`,
      description: \`\${t("story_stepper_step_desc")} \${i + 1}\`
    }));
    return <Stepper {...args} steps={steps} current={current} onChange={index => setCurrent(index)} />;
  }
}`,...f.parameters?.docs?.source}}};const T=["Default","Vertical","LabelVertical","ErrorStatus","CustomIcons","Interactive"],$=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:_,Default:p,ErrorStatus:m,Interactive:f,LabelVertical:u,Vertical:d,__namedExportsOrder:T,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as C,m as E,f as I,u as L,$ as S,d as V};
