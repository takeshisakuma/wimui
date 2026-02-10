import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as r}from"./index-C4YrDqfR.js";import{I as n}from"./Icon-B15kVuyW.js";import{r as I}from"./iframe-CS53r1Jw.js";const f=({steps:d=[],current:s=0,direction:h="horizontal",labelPlacement:g="horizontal",status:b="process",className:_,onChange:y})=>{const w=(t,a)=>a||(t<s?"finish":t===s?b:"wait"),z=(t,a,i)=>i||(a==="finish"?e.jsx(n,{name:"CheckIcon",size:"small"}):a==="error"?e.jsx(n,{name:"CloseIcon",size:"small"}):e.jsx("span",{children:t+1}));return e.jsx("div",{className:["wim-stepper",`wim-stepper--${h}`,_].filter(Boolean).join(" "),children:d.map((t,a)=>{const i=w(a,t.status),S=!!y&&!t.disabled;return e.jsxs("div",{className:["wim-stepper__item",`wim-stepper__item--${i}`,g==="vertical"?"wim-stepper__item--label-vertical":"",t.disabled?"wim-stepper__item--disabled":""].filter(Boolean).join(" "),onClick:()=>S&&y(a),style:{cursor:S?"pointer":"default"},children:[e.jsx("div",{className:"wim-stepper__line"}),e.jsx("div",{className:"wim-stepper__icon-container",children:z(a,i,t.icon)}),e.jsxs("div",{className:"wim-stepper__content",children:[e.jsx("span",{className:"wim-stepper__title",children:t.title}),t.description&&e.jsx("span",{className:"wim-stepper__description",children:t.description})]})]},a)})})};f.propTypes={steps:r.arrayOf(r.shape({title:r.node.isRequired,description:r.node,icon:r.node,status:r.oneOf(["wait","process","finish","error"]),disabled:r.bool})).isRequired,current:r.number,direction:r.oneOf(["horizontal","vertical"]),labelPlacement:r.oneOf(["horizontal","vertical"]),status:r.oneOf(["wait","process","finish","error"]),className:r.string,onChange:r.func};f.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!1,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:"Array of step configurations",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"node",required:!0},description:{name:"node",required:!1},icon:{name:"node",required:!1},status:{name:"enum",value:[{value:'"wait"',computed:!1},{value:'"process"',computed:!1},{value:'"finish"',computed:!1},{value:'"error"',computed:!1}],required:!1},disabled:{name:"bool",required:!1}}}}},current:{required:!1,tsType:{name:"number"},description:"Index of the current active step (0-indexed)",defaultValue:{value:"0",computed:!1},type:{name:"number"}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Direction of the stepper",defaultValue:{value:'"horizontal"',computed:!1},type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]}},labelPlacement:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Placement of the labels",defaultValue:{value:'"horizontal"',computed:!1},type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1}]}},status:{required:!1,tsType:{name:"union",raw:'"wait" | "process" | "finish" | "error"',elements:[{name:"literal",value:'"wait"'},{name:"literal",value:'"process"'},{name:"literal",value:'"finish"'},{name:"literal",value:'"error"'}]},description:"Status of the current step",defaultValue:{value:'"process"',computed:!1},type:{name:"enum",value:[{value:'"wait"',computed:!1},{value:'"process"',computed:!1},{value:'"finish"',computed:!1},{value:'"error"',computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"Additional class names",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"Callback function when a step is clicked (if applicable)",type:{name:"func"}}}};const j={title:"Component/Navigation/Stepper",component:f,parameters:{layout:"padded"},tags:[],argTypes:{current:{control:"number"},direction:{control:"radio",options:["horizontal","vertical"]},labelPlacement:{control:"radio",options:["horizontal","vertical"]},status:{control:"select",options:["wait","process","finish","error"]}}},v=[{title:"Finished",description:"This is a description"},{title:"In Progress",description:"This is a description"},{title:"Waiting",description:"This is a description"}],o={args:{steps:v,current:1}},l={args:{steps:v,current:1,direction:"vertical"}},c={args:{steps:v,current:1,labelPlacement:"vertical"}},p={args:{steps:v,current:1,status:"error"}},u={args:{steps:[{title:"Login",icon:e.jsx(n,{name:"EyeIcon",size:"small"})},{title:"Verification",icon:e.jsx(n,{name:"LoadingIcon",size:"small"})},{title:"Pay",icon:e.jsx(n,{name:"StarIcon",size:"small"})},{title:"Done",icon:e.jsx(n,{name:"CheckIcon",size:"small"})}],current:1}},m={render:d=>{const[s,h]=I.useState(0);return e.jsx(f,{...d,current:s,onChange:g=>h(g)})},args:{steps:Array.from({length:4},(d,s)=>({title:`Step ${s+1}`,description:`Description for step ${s+1}`}))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1,
    direction: "vertical"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1,
    labelPlacement: "vertical"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    current: 1,
    status: "error"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const x=["Default","Vertical","LabelVertical","Error","CustomIcons","Interactive"],V=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:u,Default:o,Error:p,Interactive:m,LabelVertical:c,Vertical:l,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{u as C,p as E,m as I,c as L,V as S,l as V};
