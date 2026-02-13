import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-DWoaxWMs.js";import{I as a}from"./Icon-CpAaWSX6.js";import{r as z}from"./iframe-BRQWL27F.js";const h=({steps:u=[],current:s=0,direction:f="horizontal",labelPlacement:g="horizontal",status:I="process",className:y,onChange:v})=>{const b=(r,t)=>t||(r<s?"finish":r===s?I:"wait"),w=(r,t,n)=>n||(t==="finish"?e.jsx(a,{name:"CheckIcon",size:"small"}):t==="error"?e.jsx(a,{name:"CloseIcon",size:"small"}):e.jsx("span",{children:r+1}));return e.jsx("div",{className:_("wim-stepper",`wim-stepper--${f}`,y),children:u.map((r,t)=>{const n=b(t,r.status),S=!!v&&!r.disabled;return e.jsxs("div",{className:_("wim-stepper__item",`wim-stepper__item--${n}`,g==="vertical"&&"wim-stepper__item--label-vertical",r.disabled&&"wim-stepper__item--disabled"),onClick:()=>S&&v(t),style:{cursor:S?"pointer":"default"},children:[e.jsx("div",{className:"wim-stepper__line"}),e.jsx("div",{className:"wim-stepper__icon-container",children:w(t,n,r.icon)}),e.jsxs("div",{className:"wim-stepper__content",children:[e.jsx("span",{className:"wim-stepper__title",children:r.title}),r.description&&e.jsx("span",{className:"wim-stepper__description",children:r.description})]})]},t)})})};h.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!1,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:"Array of step configurations",defaultValue:{value:"[]",computed:!1}},current:{required:!1,tsType:{name:"number"},description:"Index of the current active step (0-indexed)",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Direction of the stepper",defaultValue:{value:'"horizontal"',computed:!1}},labelPlacement:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Placement of the labels",defaultValue:{value:'"horizontal"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"wait" | "process" | "finish" | "error"',elements:[{name:"literal",value:'"wait"'},{name:"literal",value:'"process"'},{name:"literal",value:'"finish"'},{name:"literal",value:'"error"'}]},description:"Status of the current step",defaultValue:{value:'"process"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"Callback function when a step is clicked (if applicable)"}}};const x={title:"Component/Navigation/Stepper",component:h,parameters:{layout:"padded"},tags:[],argTypes:{current:{control:"number"},direction:{control:"radio",options:["horizontal","vertical"]},labelPlacement:{control:"radio",options:["horizontal","vertical"]},status:{control:"select",options:["wait","process","finish","error"]}}},d=[{title:"Finished",description:"This is a description"},{title:"In Progress",description:"This is a description"},{title:"Waiting",description:"This is a description"}],i={args:{steps:d,current:1}},o={args:{steps:d,current:1,direction:"vertical"}},c={args:{steps:d,current:1,labelPlacement:"vertical"}},l={args:{steps:d,current:1,status:"error"}},p={args:{steps:[{title:"Login",icon:e.jsx(a,{name:"EyeIcon",size:"small"})},{title:"Verification",icon:e.jsx(a,{name:"LoadingIcon",size:"small"})},{title:"Pay",icon:e.jsx(a,{name:"StarIcon",size:"small"})},{title:"Done",icon:e.jsx(a,{name:"CheckIcon",size:"small"})}],current:1}},m={render:u=>{const[s,f]=z.useState(0);return e.jsx(h,{...u,current:s,onChange:g=>f(g)})},args:{steps:Array.from({length:4},(u,s)=>({title:`Step ${s+1}`,description:`Description for step ${s+1}`}))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1,
    direction: "vertical"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1,
    labelPlacement: "vertical"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1,
    status: "error"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: "Login",
      icon: <Icon name="EyeIcon" size="small" />
    }, {
      title: "Verification",
      icon: <Icon name="LoadingIcon" size="small" />
    }, {
      title: "Pay",
      icon: <Icon name="StarIcon" size="small" />
    }, {
      title: "Done",
      icon: <Icon name="CheckIcon" size="small" />
    }],
    current: 1
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [current, setCurrent] = useState(0);
    return <Stepper {...args} current={current} onChange={index => setCurrent(index)} />;
  },
  args: {
    steps: Array.from({
      length: 4
    }, (_, i) => ({
      title: \`Step \${i + 1}\`,
      description: \`Description for step \${i + 1}\`
    }))
  }
}`,...m.parameters?.docs?.source}}};const j=["Default","Vertical","LabelVertical","Error","CustomIcons","Interactive"],P=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:p,Default:i,Error:l,Interactive:m,LabelVertical:c,Vertical:o,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{p as C,l as E,m as I,c as L,P as S,o as V};
