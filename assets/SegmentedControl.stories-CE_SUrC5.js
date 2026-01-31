import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-BOXDNLMQ.js";import{P as t}from"./index-B4rtX05c.js";const l=({options:e,value:n,onChange:r,size:c="medium",fullWidth:g=!1})=>{const v=["wim-segmented-control",`wim-segmented-control--${{small:"sm",medium:"md",large:"lg"}[c]}`,g?"wim-segmented-control--full-width":""].filter(Boolean).join(" "),f=e.findIndex(s=>s.value===n),y={width:`${100/e.length}%`,transform:`translateX(${f*100}%)`};return a.jsxs("div",{className:v,children:[a.jsx("div",{className:"wim-segmented-control__slider",style:y}),e.map(s=>a.jsx("button",{type:"button",className:["wim-segmented-control__item",s.value===n?"wim-segmented-control__item--active":""].filter(Boolean).join(" "),onClick:()=>r(s.value),"aria-pressed":s.value===n,children:a.jsx("span",{className:"wim-segmented-control__label",children:s.label})},s.value))]})};l.propTypes={options:t.arrayOf(t.shape({label:t.string.isRequired,value:t.string.isRequired,iconName:t.oneOf(["CircleIcon","SquareIcon"])})).isRequired,value:t.string.isRequired,onChange:t.func.isRequired,size:t.oneOf(["small","medium","large"]),fullWidth:t.bool};l.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    iconName?: "CircleIcon" | "SquareIcon";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'}],required:!1}}]}}],raw:"Option[]"},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"string",required:!0},iconName:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1}],required:!1}}}}},value:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"",type:{name:"func"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const h={title:"Component/Forms & Inputs/SegmentedControl",component:l,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},p=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],o={args:{size:"small",fullWidth:!0},decorators:[e=>a.jsx("div",{style:{width:"600px"},children:a.jsx(e,{})})],render:e=>{const[n,r]=m.useState("day");return a.jsx(l,{...e,options:p,value:n,onChange:r})}},u={args:{size:"medium",fullWidth:!0},decorators:[e=>a.jsx("div",{style:{width:"600px"},children:a.jsx(e,{})})],render:e=>{const[n,r]=m.useState("day");return a.jsx(l,{...e,options:p,value:n,onChange:r})}},i={args:{size:"large",fullWidth:!0},decorators:[e=>a.jsx("div",{style:{width:"600px"},children:a.jsx(e,{})})],render:e=>{const[n,r]=m.useState("day");return a.jsx(l,{...e,options:p,value:n,onChange:r})}},d={args:{size:"medium",fullWidth:!0},render:e=>{const[n,r]=m.useState("on"),c=[{label:"On",value:"on"},{label:"Off",value:"off"}];return a.jsx(l,{...e,options:c,value:n,onChange:r})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "600px"
  }}>\r
                <Story />\r
            </div>],
  render: args => {
    const [value, setValue] = useState("day");
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "600px"
  }}>\r
                <Story />\r
            </div>],
  render: args => {
    const [value, setValue] = useState("day");
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "600px"
  }}>\r
                <Story />\r
            </div>],
  render: args => {
    const [value, setValue] = useState("day");
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  render: args => {
    const [value, setValue] = useState("on");
    const twoOptions = [{
      label: "On",
      value: "on"
    }, {
      label: "Off",
      value: "off"
    }];
    return <SegmentedControl {...args} options={twoOptions} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};const S=["Small","Medium","Large","TwoOptions"],j=Object.freeze(Object.defineProperty({__proto__:null,Large:i,Medium:u,Small:o,TwoOptions:d,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{i as L,u as M,j as S,d as T,o as a};
