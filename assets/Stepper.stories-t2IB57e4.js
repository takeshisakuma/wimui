import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as w}from"./index-Cpe1KNws.js";import{I as c}from"./Icon-Bl8N_3yh.js";import{r as C}from"./iframe-DC3HBgeO.js";import{A as I}from"./i18nConstants-BpHxieg5.js";import{u as j}from"./useTranslation-rn74mnfg.js";const o=({steps:t=[],current:s=0,direction:r="horizontal",labelPlacement:y="horizontal",status:h="process",className:v,onChange:i})=>{const b=(n,a)=>a||(n<s?"finish":n===s?h:"wait"),z=(n,a,p)=>p||(a==="finish"?e.jsx(c,{name:"CheckIcon",size:"small"}):a==="error"?e.jsx(c,{name:"CloseIcon",size:"small"}):e.jsx("span",{children:n+1}));return e.jsx("div",{className:w("wim-stepper",`wim-stepper--${r}`,y==="vertical"&&"wim-stepper--label-vertical",v),children:t.map((n,a)=>{const p=b(a,n.status),S=!!i&&!n.disabled;return e.jsxs("div",{className:w("wim-stepper__item",`wim-stepper__item--${p}`,y==="vertical"&&"wim-stepper__item--label-vertical",n.disabled&&"wim-stepper__item--disabled"),onClick:()=>S&&i(a),style:{cursor:S?"pointer":"default"},role:"button",tabIndex:S?0:-1,onKeyDown:x=>{S&&(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),i(a))},children:[e.jsx("div",{className:"wim-stepper__line"}),e.jsx("div",{className:"wim-stepper__icon-container",children:z(a,p,n.icon)}),e.jsxs("div",{className:"wim-stepper__content",children:[e.jsx("span",{className:"wim-stepper__title",children:n.title}),n.description&&e.jsx("span",{className:"wim-stepper__description",children:n.description})]})]},a)})})};o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!1,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:"Array of step configurations",defaultValue:{value:"[]",computed:!1}},current:{required:!1,tsType:{name:"number"},description:"Index of the current active step (0-indexed)",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Direction of the stepper",defaultValue:{value:'"horizontal"',computed:!1}},labelPlacement:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Placement of the labels",defaultValue:{value:'"horizontal"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"wait" | "process" | "finish" | "error"',elements:[{name:"literal",value:'"wait"'},{name:"literal",value:'"process"'},{name:"literal",value:'"finish"'},{name:"literal",value:'"error"'}]},description:"Status of the current step",defaultValue:{value:'"process"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"Callback function when a step is clicked (if applicable)"}}};const E={title:"Components/Navigation Elements/Stepper",component:o,parameters:{layout:"padded"},tags:[],argTypes:{current:{control:"number"},direction:{control:"radio",options:["horizontal","vertical"]},labelPlacement:{control:"radio",options:["horizontal","vertical"]},status:{control:"select",options:["wait","process","finish","error"]}}},g=()=>{const{t}=j(I);return[{title:t("story_stepper_finished"),description:t("story_stepper_desc")},{title:t("story_stepper_in_progress"),description:t("story_stepper_desc")},{title:t("story_stepper_waiting"),description:t("story_stepper_desc")}]},l={render:function(s){const r=g();return e.jsx(o,{...s,steps:r,current:1})}},u={render:function(s){const r=g();return e.jsx(o,{...s,steps:r,current:1,direction:"vertical"})}},m={render:function(s){const r=g();return e.jsx(o,{...s,steps:r,current:1,labelPlacement:"vertical"})}},d={render:function(s){const r=g();return e.jsx(o,{...s,steps:r,current:1,status:"error"})}},f={render:function(s){const{t:r}=j(I);return e.jsx(o,{...s,steps:[{title:r("story_stepper_login"),icon:e.jsx(c,{name:"EyeIcon",size:"small"})},{title:r("story_stepper_verification"),icon:e.jsx(c,{name:"LoadingIcon",size:"small"})},{title:r("story_stepper_pay"),icon:e.jsx(c,{name:"StarIcon",size:"small"})},{title:r("story_stepper_done"),icon:e.jsx(c,{name:"CheckIcon",size:"small"})}],current:1})}},_={render:t=>{const{t:s}=j(I),[r,y]=C.useState(0),h=Array.from({length:4},(v,i)=>({title:`${s("story_stepper_step")} ${i+1}`,description:`${s("story_stepper_step_desc")} ${i+1}`}));return e.jsx(o,{...t,steps:h,current:r,onChange:v=>y(v)})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} direction="vertical" />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} labelPlacement="vertical" />;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} status="error" />;
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [current, setCurrent] = useState(0);
    const steps = Array.from({
      length: 4
    }, (_, i) => ({
      title: \`\${t("story_stepper_step")} \${i + 1}\`,
      description: \`\${t("story_stepper_step_desc")} \${i + 1}\`
    }));
    return <Stepper {...args} steps={steps} current={current} onChange={index => setCurrent(index)} />;
  }
}`,..._.parameters?.docs?.source}}};const A=["Default","Vertical","LabelVertical","ErrorStatus","CustomIcons","Interactive"],$=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:f,Default:l,ErrorStatus:d,Interactive:_,LabelVertical:m,Vertical:u,__namedExportsOrder:A,default:E},Symbol.toStringTag,{value:"Module"}));export{f as C,d as E,_ as I,m as L,$ as S,u as V};
