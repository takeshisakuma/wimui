import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as E}from"./index-C7Nj9VOz.js";import{I as p}from"./Icon-CMlobE3G.js";import{r as R,A as j}from"./iframe-DhNyLLHC.js";import{u as A}from"./useTranslation-OwuDKqc3.js";const c=({steps:a=[],current:t=0,direction:s="horizontal",labelPlacement:S="horizontal",status:I="process",className:w,onChange:o})=>{const N=(e,n)=>n||(e<t?"finish":e===t?I:"wait"),k=(e,n,i)=>i||(n==="finish"?r.jsx(p,{name:"CheckIcon",size:"small"}):n==="error"?r.jsx(p,{name:"CloseIcon",size:"small"}):r.jsx("span",{children:e+1})),D=e=>{if(!o)return;const n=Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),i=document.activeElement;if(n.indexOf(i)===-1||!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Home","End"].includes(e.key))return;e.preventDefault();const l=n.filter((V,L)=>!a[L]?.disabled),b=l.indexOf(i);if(b===-1)return;let d;e.key==="ArrowRight"||e.key==="ArrowDown"?d=(b+1)%l.length:e.key==="ArrowLeft"||e.key==="ArrowUp"?d=(b-1+l.length)%l.length:e.key==="Home"?d=0:d=l.length-1;const z=l[d];z.focus(),o(n.indexOf(z))};return r.jsx("div",{className:"wim-stepper-container",children:r.jsx("div",{className:E("wim-stepper",`wim-stepper--${s}`,S==="vertical"&&"wim-stepper--label-vertical",w),role:o?"tablist":void 0,"aria-orientation":o?s:void 0,onKeyDown:D,children:a.map((e,n)=>{const i=N(n,e.status),u=!!o&&!e.disabled;return r.jsxs("div",{className:E("wim-stepper__item",`wim-stepper__item--${i}`,S==="vertical"&&"wim-stepper__item--label-vertical",e.disabled&&"wim-stepper__item--disabled"),onClick:()=>u&&o(n),style:{cursor:u?"pointer":"default"},role:o?"tab":void 0,"aria-selected":o?n===t:void 0,"aria-disabled":e.disabled?"true":void 0,tabIndex:o?!e.disabled&&n===t?0:-1:u?0:-1,onKeyDown:h=>{u&&(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),o(n))},children:[r.jsx("div",{className:"wim-stepper__line"}),r.jsx("div",{className:"wim-stepper__icon-container",children:k(n,i,e.icon)}),r.jsxs("div",{className:"wim-stepper__content",children:[r.jsx("span",{className:"wim-stepper__title",children:e.title}),e.description&&r.jsx("span",{className:"wim-stepper__description",children:e.description})]})]},n)})})})};c.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!1,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:"Array of step configurations",defaultValue:{value:"[]",computed:!1}},current:{required:!1,tsType:{name:"number"},description:"Index of the current active step (0-indexed)",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Direction of the stepper",defaultValue:{value:'"horizontal"',computed:!1}},labelPlacement:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Placement of the labels",defaultValue:{value:'"horizontal"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"wait" | "process" | "finish" | "error"',elements:[{name:"literal",value:'"wait"'},{name:"literal",value:'"process"'},{name:"literal",value:'"finish"'},{name:"literal",value:'"error"'}]},description:"Status of the current step",defaultValue:{value:'"process"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"Callback function when a step is clicked (if applicable)"}}};const T={title:"Components/Navigation Elements/Stepper",component:c,parameters:{layout:"padded"},tags:[],argTypes:{current:{control:"number"},direction:{control:"radio",options:["horizontal","vertical"]},labelPlacement:{control:"radio",options:["horizontal","vertical"]},status:{control:"select",options:["wait","process","finish","error"]}}},x=()=>{const{t:a}=A(j);return[{title:a("story_stepper_finished"),description:a("story_stepper_desc")},{title:a("story_stepper_in_progress"),description:a("story_stepper_desc")},{title:a("story_stepper_waiting"),description:a("story_stepper_desc")}]},m={render:function(t){const s=x();return r.jsx(c,{...t,steps:s,current:1})}},f={render:function(t){const s=x();return r.jsx(c,{...t,steps:s,current:1})},args:{direction:"vertical"}},_={render:function(t){const s=x();return r.jsx(c,{...t,steps:s,current:1})},args:{labelPlacement:"vertical"}},y={render:function(t){const s=x();return r.jsx(c,{...t,steps:s,current:1})},args:{status:"error"}},v={render:function(t){const{t:s}=A(j);return r.jsx(c,{...t,steps:[{title:s("story_stepper_login"),icon:r.jsx(p,{name:"EyeIcon",size:"small"})},{title:s("story_stepper_verification"),icon:r.jsx(p,{name:"LoadingIcon",size:"small"})},{title:s("story_stepper_pay"),icon:r.jsx(p,{name:"StarIcon",size:"small"})},{title:s("story_stepper_done"),icon:r.jsx(p,{name:"CheckIcon",size:"small"})}],current:1})}},g={render:a=>{const{t}=A(j),[s,S]=R.useState(0),I=Array.from({length:4},(w,o)=>({title:`${t("story_stepper_step")} ${o+1}`,description:`${t("story_stepper_step_desc")} ${o+1}`}));return r.jsx(c,{...a,steps:I,current:s,onChange:w=>S(w)})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    direction: "vertical"
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    labelPlacement: "vertical"
  }
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const steps = useDefaultSteps();
    return <Stepper {...args} steps={steps} current={1} />;
  },
  args: {
    status: "error"
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const C=["Default","Vertical","LabelVertical","ErrorStatus","CustomIcons","Interactive"],M=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:v,Default:m,ErrorStatus:y,Interactive:g,LabelVertical:_,Vertical:f,__namedExportsOrder:C,default:T},Symbol.toStringTag,{value:"Module"}));export{v as C,y as E,g as I,_ as L,M as S,f as V};
