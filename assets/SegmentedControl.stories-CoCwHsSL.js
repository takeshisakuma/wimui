import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DMgQDpBx.js";import{c as v}from"./index-MafWY-Pw.js";import{I as x}from"./Icon-WCf84-EP.js";const l=({options:e,value:a,onChange:t,size:s="medium",fullWidth:S=!1,className:y})=>{const f=e.findIndex(r=>r.value===a),h={width:`calc((100% - 4px) / ${e.length})`,transform:`translateX(${f*100}%)`};return n.jsxs("div",{className:v("wim-segmented-control",`wim-segmented-control--${s==="small"?"sm":s==="large"?"lg":"md"}`,S&&"wim-segmented-control--full-width",y),children:[n.jsx("div",{className:"wim-segmented-control__slider",style:h}),e.map(r=>n.jsxs("button",{type:"button",className:v("wim-segmented-control__item",r.value===a&&"wim-segmented-control__item--active",!r.label&&r.iconName&&"wim-segmented-control__item--icon-only"),onClick:()=>t(r.value),"aria-pressed":r.value===a,"aria-label":r.label||r.value,children:[r.iconName&&n.jsx(x,{name:r.iconName,size:s}),r.label&&n.jsx("span",{className:"wim-segmented-control__label",children:r.label})]},r.value))]})};l.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label?: string;\r
    value: string;\r
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Component/Selection Controls/SegmentedControl",component:l,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},p=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],i={args:{size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,t]=o.useState("day");return n.jsx(l,{...e,options:p,value:a,onChange:t})}},u={args:{size:"medium",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,t]=o.useState("day");return n.jsx(l,{...e,options:p,value:a,onChange:t})}},c={args:{size:"large",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,t]=o.useState("day");return n.jsx(l,{...e,options:p,value:a,onChange:t})}},m={args:{size:"medium",fullWidth:!0},render:e=>{const[a,t]=o.useState("on"),s=[{label:"On",value:"on"},{label:"Off",value:"off"}];return n.jsx(l,{...e,options:s,value:a,onChange:t})}},d={args:{size:"medium",fullWidth:!1},render:e=>{const[a,t]=o.useState("circle"),s=[{label:"Circle",value:"circle",iconName:"CircleIcon"},{label:"Square",value:"square",iconName:"SquareIcon"},{label:"External",value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(l,{...e,options:s,value:a,onChange:t})}},g={args:{size:"medium",fullWidth:!1},render:e=>{const[a,t]=o.useState("circle"),s=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(l,{...e,options:s,value:a,onChange:t})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const [value, setValue] = useState("circle");
    const iconOptions = [{
      label: "Circle",
      value: "circle",
      iconName: "CircleIcon"
    }, {
      label: "Square",
      value: "square",
      iconName: "SquareIcon"
    }, {
      label: "External",
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const;
    return <SegmentedControl {...args} options={iconOptions as any} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const [value, setValue] = useState("circle");
    const iconOnlyOptions = [{
      value: "circle",
      iconName: "CircleIcon"
    }, {
      value: "square",
      iconName: "SquareIcon"
    }, {
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const;
    return <SegmentedControl {...args} options={iconOnlyOptions as any} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};const I=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly"],j=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:g,Large:c,Medium:u,Small:i,TwoOptions:m,WithIcons:d,__namedExportsOrder:I,default:C},Symbol.toStringTag,{value:"Module"}));export{g as I,c as L,u as M,j as S,m as T,d as W,i as a};
