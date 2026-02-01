import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-CzUuUlbd.js";import{P as t}from"./index-BgUr35ih.js";import{I as x}from"./Icon-IErQSuUS.js";const s=({options:e,value:a,onChange:l,size:o="medium",fullWidth:f=!1})=>{const y=["wim-segmented-control",`wim-segmented-control--${{small:"sm",medium:"md",large:"lg"}[o]}`,f?"wim-segmented-control--full-width":""].filter(Boolean).join(" "),S=e.findIndex(r=>r.value===a),h={width:`calc((100% - 4px) / ${e.length})`,transform:`translateX(${S*100}%)`};return n.jsxs("div",{className:y,children:[n.jsx("div",{className:"wim-segmented-control__slider",style:h}),e.map(r=>n.jsxs("button",{type:"button",className:["wim-segmented-control__item",r.value===a?"wim-segmented-control__item--active":"",!r.label&&r.iconName?"wim-segmented-control__item--icon-only":""].filter(Boolean).join(" "),onClick:()=>l(r.value),"aria-pressed":r.value===a,"aria-label":r.label||r.value,children:[r.iconName&&n.jsx(x,{name:r.iconName,size:o}),r.label&&n.jsx("span",{className:"wim-segmented-control__label",children:r.label})]},r.value))]})};s.propTypes={options:t.arrayOf(t.shape({label:t.string,value:t.string.isRequired,iconName:t.oneOf(["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon"])})).isRequired,value:t.string.isRequired,onChange:t.func.isRequired,size:t.oneOf(["small","medium","large"]),fullWidth:t.bool};s.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label?: string;\r
    value: string;\r
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"string",required:!0},iconName:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1},{value:'"ExternalLinkIcon"',computed:!1}],required:!1}}}}},value:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"",type:{name:"func"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const I={title:"Component/Selection/SegmentedControl",component:s,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},v=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],u={args:{size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,l]=i.useState("day");return n.jsx(s,{...e,options:v,value:a,onChange:l})}},c={args:{size:"medium",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,l]=i.useState("day");return n.jsx(s,{...e,options:v,value:a,onChange:l})}},m={args:{size:"large",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,l]=i.useState("day");return n.jsx(s,{...e,options:v,value:a,onChange:l})}},d={args:{size:"medium",fullWidth:!0},render:e=>{const[a,l]=i.useState("on"),o=[{label:"On",value:"on"},{label:"Off",value:"off"}];return n.jsx(s,{...e,options:o,value:a,onChange:l})}},p={args:{size:"medium",fullWidth:!1},render:e=>{const[a,l]=i.useState("circle"),o=[{label:"Circle",value:"circle",iconName:"CircleIcon"},{label:"Square",value:"square",iconName:"SquareIcon"},{label:"External",value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(s,{...e,options:o,value:a,onChange:l})}},g={args:{size:"medium",fullWidth:!1},render:e=>{const[a,l]=i.useState("circle"),o=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(s,{...e,options:o,value:a,onChange:l})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const C=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly"],N=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:g,Large:m,Medium:c,Small:u,TwoOptions:d,WithIcons:p,__namedExportsOrder:C,default:I},Symbol.toStringTag,{value:"Module"}));export{g as I,m as L,c as M,N as S,d as T,p as W,u as a};
